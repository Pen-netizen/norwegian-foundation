/**
 * save.js — save code encode/decode
 *
 * Format encodes:
 *   - XP (up to 65535, 2 bytes)
 *   - unlockedUpTo (0-19, 5 bits)
 *   - streak (0-255, 1 byte)
 *   - lessonsCompleted (0-19, 5 bits)
 *   - testScores[1..19] each 7 bits (0-100 clamped)
 *   - itemStrength: per lesson, per item, 2 bits each
 *   - itemLastReview: per item, stored as "days ago" 6 bits (0-63 days)
 *
 * For a reasonable vocab set (~15 items/lesson × 19 lessons = 285 items):
 *   - strength: 285 × 2 bits = 570 bits
 *   - decay: 285 × 6 bits = 1710 bits
 *   Total ≈ 2280 bits + header ≈ 380 bytes → base62 ≈ 50 chars
 *   Acceptable. Code is copyable.
 */

const B62 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

class BitWriter {
  constructor() { this.bytes = []; this.cur = 0; this.pos = 0; }
  write(val, bits) {
    for (let i = bits - 1; i >= 0; i--) {
      this.cur = (this.cur << 1) | ((val >> i) & 1);
      this.pos++;
      if (this.pos === 8) { this.bytes.push(this.cur); this.cur = 0; this.pos = 0; }
    }
  }
  finish() {
    if (this.pos > 0) this.bytes.push(this.cur << (8 - this.pos));
    return new Uint8Array(this.bytes);
  }
}

class BitReader {
  constructor(bytes) { this.bytes = bytes; this.bytePos = 0; this.bitPos = 0; }
  read(bits) {
    let val = 0;
    for (let i = 0; i < bits; i++) {
      if (this.bytePos >= this.bytes.length) break;
      const bit = (this.bytes[this.bytePos] >> (7 - this.bitPos)) & 1;
      val = (val << 1) | bit;
      this.bitPos++;
      if (this.bitPos === 8) { this.bitPos = 0; this.bytePos++; }
    }
    return val;
  }
}

function bytesToBase62(bytes) {
  let n = BigInt(0);
  for (const b of bytes) n = (n << 8n) | BigInt(b);
  if (n === 0n) return B62[0];
  let s = '';
  while (n > 0n) { s = B62[Number(n % 62n)] + s; n /= 62n; }
  return s;
}

function base62ToBytes(str) {
  let n = BigInt(0);
  for (const c of str) n = n * 62n + BigInt(B62.indexOf(c));
  const hex = n.toString(16).padStart(2, '0');
  const padded = hex.length % 2 ? '0' + hex : hex;
  const bytes = new Uint8Array(padded.length / 2);
  for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(padded.slice(i * 2, i * 2 + 2), 16);
  return bytes;
}

// Build item list from LESSONS_DATA (must be loaded)
function getItemList() {
  if (typeof LESSONS_DATA === 'undefined') return [];
  const list = [];
  for (let l = 1; l <= 19; l++) {
    const ld = LESSONS_DATA[l];
    if (!ld) continue;
    const items = ld.vocab || [];
    items.forEach((item, idx) => list.push({ lessonNum: l, itemId: item.id || `${l}_${idx}` }));
  }
  return list;
}

function generateSaveCode() {
  const bw = new BitWriter();
  // Header: version 1
  bw.write(1, 4);
  // XP (0–65535)
  bw.write(Math.min(STATE.xp, 65535), 16);
  // unlocked (1–19)
  bw.write(STATE.unlockedUpTo, 5);
  // streak (0–255)
  bw.write(Math.min(STATE.streak, 255), 8);
  // lessonsCompleted
  bw.write(Math.min(STATE.lessonsCompleted, 19), 5);
  // test scores
  for (let l = 1; l <= 19; l++) bw.write(Math.min(STATE.testScores[l] || 0, 100), 7);
  // items
  const now = Date.now();
  const DAY = 86400000;
  const items = getItemList();
  bw.write(items.length, 10);
  for (const { lessonNum, itemId } of items) {
    const key = `${lessonNum}:${itemId}`;
    bw.write(STATE.itemStrength[key] || 0, 2);
    const last = STATE.itemLastReview[key];
    const daysAgo = last ? Math.min(Math.floor((now - last) / DAY), 63) : 63;
    bw.write(daysAgo, 6);
  }
  const bytes = bw.finish();
  const code = bytesToBase62(bytes).toUpperCase();
  // Format as groups of 5 for readability
  return code.match(/.{1,5}/g).join('-');
}

function loadSaveCode(raw) {
  try {
    const code = raw.replace(/-/g, '').toUpperCase();
    const bytes = base62ToBytes(code);
    const br = new BitReader(bytes);
    const version = br.read(4);
    if (version !== 1) return false;
    STATE.xp = br.read(16);
    STATE.unlockedUpTo = Math.max(1, br.read(5));
    STATE.streak = br.read(8);
    STATE.lessonsCompleted = br.read(5);
    for (let l = 1; l <= 19; l++) STATE.testScores[l] = br.read(7);
    const itemCount = br.read(10);
    const items = getItemList();
    const now = Date.now();
    const DAY = 86400000;
    for (let i = 0; i < itemCount && i < items.length; i++) {
      const { lessonNum, itemId } = items[i];
      const key = `${lessonNum}:${itemId}`;
      STATE.itemStrength[key] = br.read(2);
      const daysAgo = br.read(6);
      if (daysAgo < 63) STATE.itemLastReview[key] = now - daysAgo * DAY;
    }
    updateTopBarXP();
    return true;
  } catch(e) {
    console.warn('Save code error:', e);
    return false;
  }
}
