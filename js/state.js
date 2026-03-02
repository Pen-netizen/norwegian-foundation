/**
 * state.js — central game state, XP, progression
 * All state lives here. Persists only via save codes.
 */

const STATE = {
  xp: 0,
  streak: 0,
  lessonsCompleted: 0,
  lastLesson: null,        // date string YYYY-MM-DD
  lastLessonNum: 0,
  unlockedUpTo: 1,         // lesson number (1-indexed), always at least 1

  // Per-item decay: key = "lessonNum:itemId", value = timestamp (ms) of last review
  itemLastReview: {},

  // Per-item strength: 0=unseen, 1=seen, 2=weak, 3=strong
  itemStrength: {},

  // Lesson test scores: key = lessonNum, value = best score (0-100)
  testScores: {},

  // Session start (not saved)
  sessionStart: Date.now(),
};

// --- XP RULES ---
const XP = {
  FLASHCARD_ITEM: 2,
  EXERCISE_CORRECT_FIRST: 3,
  EXERCISE_CORRECT_RETRY: 1,
  DRAG_DROP_COMPLETE: 5,
  READ_CORRECT: 3,
  DECAY_REVIEW: 4,
  TEST_PASS: 50,
  TEST_PASS_FIRST_ATTEMPT: 20,
};

// --- DECAY CONFIG ---
const DECAY_THRESHOLD_MS = 3 * 24 * 60 * 60 * 1000; // 3 days

function isDecayed(lessonNum, itemId) {
  const key = `${lessonNum}:${itemId}`;
  const last = STATE.itemLastReview[key];
  if (!last) return false;
  return (Date.now() - last) > DECAY_THRESHOLD_MS;
}

function markReviewed(lessonNum, itemId) {
  const key = `${lessonNum}:${itemId}`;
  STATE.itemLastReview[key] = Date.now();
}

function setItemStrength(lessonNum, itemId, strength) {
  const key = `${lessonNum}:${itemId}`;
  STATE.itemStrength[key] = Math.max(STATE.itemStrength[key] || 0, strength);
}

function getItemStrength(lessonNum, itemId) {
  return STATE.itemStrength[`${lessonNum}:${itemId}`] || 0;
}

function addXP(amount, sourceEl) {
  STATE.xp += amount;
  updateTopBarXP();
  if (sourceEl) showXPFloat(amount, sourceEl);
  saveToSession();
}

function showXPFloat(amount, el) {
  const rect = el.getBoundingClientRect ? el.getBoundingClientRect() : null;
  const div = document.createElement('div');
  div.className = 'xp-float';
  div.textContent = `+${amount} XP`;
  if (rect) {
    div.style.left = (rect.left + rect.width / 2 - 30) + 'px';
    div.style.top  = (rect.top - 10) + 'px';
  } else {
    div.style.left = '50%';
    div.style.top  = '40%';
  }
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 1400);
}

function updateTopBarXP() {
  const el = document.getElementById('topbar-xp');
  if (el) el.textContent = STATE.xp + ' XP';
  // also update desktop stats if visible
  updateDesktopStats();
}

function unlockNextLesson(current) {
  if (current >= STATE.unlockedUpTo && current < 19) {
    STATE.unlockedUpTo = current + 1;
    STATE.lessonsCompleted = Math.max(STATE.lessonsCompleted, current);
  }
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (STATE.lastLesson === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (STATE.lastLesson === yesterday) {
    STATE.streak += 1;
  } else if (STATE.lastLesson !== today) {
    STATE.streak = 1;
  }
  STATE.lastLesson = today;
  saveToSession();
}

function updateDesktopStats() {
  const el = document.getElementById('desktop-stats');
  if (!el) return;
  if (STATE.xp === 0 && STATE.lessonsCompleted === 0) {
    el.innerHTML = '';
    return;
  }
  el.innerHTML = `
    <div class="ds-row"><span class="ds-label">XP</span><span class="ds-value">${STATE.xp}</span></div>
    <div class="ds-row"><span class="ds-label">LEKSJONER</span><span class="ds-value">${STATE.lessonsCompleted}</span></div>
    <div class="ds-row"><span class="ds-label">STREAK</span><span class="ds-value">${STATE.streak} 🔥</span></div>
    ${STATE.lastLessonNum ? `<div class="ds-row"><span class="ds-label">SIST</span><span class="ds-value">Leksjon ${STATE.lastLessonNum}</span></div>` : ''}
  `;
}

// --- SESSION CACHE (not a real save, just survives in-page) ---
function saveToSession() {
  try { sessionStorage.setItem('nf_state', JSON.stringify(STATE)); } catch(e) {}
}

function loadFromSession() {
  try {
    const s = sessionStorage.getItem('nf_state');
    if (s) Object.assign(STATE, JSON.parse(s));
  } catch(e) {}
}
