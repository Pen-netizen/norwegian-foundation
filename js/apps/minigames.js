/**
 * minigames.js — all mini-game implementations
 * Called from lessons.js via renderMiniGame()
 */

// ===== FLASHCARD =====
let fcState = { items: [], index: 0, flipped: false, done: [] };

function renderFlashcard(area, ld, lessonNum) {
  const items = shuffle([...ld.vocab]);
  fcState = { items, index: 0, flipped: false, done: [] };
  drawFlashcard(area, lessonNum);
}

function drawFlashcard(area, lessonNum) {
  if (!area) area = document.getElementById('mgArea');
  const s = fcState;

  if (s.index >= s.items.length) {
    area.innerHTML = `
      <div style="text-align:center;padding:20px;font-family:var(--font)">
        <div style="font-size:28px;margin-bottom:8px">✓</div>
        <div style="font-size:16px;margin-bottom:14px">All cards done!</div>
        <button class="btn btn-green" onclick="renderFlashcard(document.getElementById('mgArea'),LESSONS_DATA[${lessonNum}],${lessonNum})">↺ Igjen</button>
      </div>`;
    return;
  }

  const item = s.items[s.index];
  const total = s.items.length;
  const safeNo = item.no.replace(/'/g, "\\'");

  area.innerHTML = `
    <div class="fc-progress">
      ${s.items.map((_, i) => `<div class="fc-pip ${i < s.index ? 'done' : i === s.index ? 'cur' : ''}"></div>`).join('')}
    </div>
    <div class="flashcard" onclick="fcFlip(${lessonNum})" id="fcCard">
      <div class="fc-front">${s.flipped ? item.no : item.en}</div>
      ${s.flipped
        ? `<div class="fc-back">${item.en}</div>
           ${item.note ? `<div class="fc-note">${item.note}</div>` : ''}`
        : `<div class="fc-hint">klikk for å snu</div>`}
    </div>
    <div class="fc-controls">
      <button class="btn" onclick="TTS.speak('${safeNo}')">▶ Hør</button>
      ${s.flipped
        ? `<button class="btn btn-green"  onclick="fcNext(true,${lessonNum})">✓ Got it</button>
           <button class="btn btn-red"    onclick="fcNext(false,${lessonNum})">✗ Try again</button>`
        : `<button class="btn" onclick="fcFlip(${lessonNum})">Snu kortet</button>`}
      <span style="font-family:var(--font);font-size:11px;color:var(--ink3);align-self:center">${s.index + 1}/${total}</span>
    </div>`;
}

function fcFlip(lessonNum) {
  fcState.flipped = !fcState.flipped;
  drawFlashcard(null, lessonNum);
}

function fcNext(knew, lessonNum) {
  const item = fcState.items[fcState.index];
  if (knew) {
    markReviewed(lessonNum, item.id);
    setItemStrength(lessonNum, item.id, 2);
    addXP(XP.FLASHCARD_ITEM, document.getElementById('mgArea'));
    saveToSession();
  }
  fcState.index++;
  fcState.flipped = false;
  drawFlashcard(null, lessonNum);
}

// ===== FILL-IN-THE-BLANK =====
let fbState = { items: [], index: 0, tries: 0 };

function renderFillBlank(area, ld, lessonNum) {
  const items = shuffle([...(ld.fillBlanks || [])]);
  fbState = { items, index: 0, tries: 0 };
  if (items.length === 0) {
    area.innerHTML = '<div style="padding:16px;font-family:var(--font)">No fill-in exercises for this lesson yet.</div>';
    return;
  }
  drawFillBlank(area, lessonNum);
}

function drawFillBlank(area, lessonNum) {
  if (!area) area = document.getElementById('mgArea');
  const s = fbState;
  if (s.index >= s.items.length) {
    area.innerHTML = `
      <div style="text-align:center;padding:20px;font-family:var(--font)">
        <div style="font-size:22px;margin-bottom:8px">✓ Ferdig!</div>
        <button class="btn btn-green" onclick="renderFillBlank(document.getElementById('mgArea'),LESSONS_DATA[${lessonNum}],${lessonNum})">↺ Igjen</button>
      </div>`;
    return;
  }
  const q = s.items[s.index];
  const display = q.template.replace('___', '<span class="fb-blank"></span>');

  area.innerHTML = `
    <div style="font-family:var(--font);font-size:11px;color:var(--ink3);margin-bottom:8px;letter-spacing:1px">
      SPØRSMÅL ${s.index + 1} / ${s.items.length}
    </div>
    <div class="fb-prompt">${display}</div>
    <input class="fb-input" id="fbInput" type="text"
      autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
      placeholder="Skriv inn det manglende ordet..."
      onkeydown="if(event.key==='Enter') fbCheck(${lessonNum})">
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn btn-green" onclick="fbCheck(${lessonNum})">Svar →</button>
      <button class="btn" onclick="fbHint(${lessonNum})">💡 Hint</button>
    </div>
    <div class="fb-feedback" id="fbFeedback"></div>`;

  setTimeout(() => {
    const inp = document.getElementById('fbInput');
    if (inp) inp.focus();
  }, 30);
}

function fbCheck(lessonNum) {
  const input = document.getElementById('fbInput');
  const fb    = document.getElementById('fbFeedback');
  if (!input) return;

  const q  = fbState.items[fbState.index];
  const ok = answersMatch(input.value, q.answer);

  input.classList.remove('correct', 'wrong');
  input.classList.add(ok ? 'correct' : 'wrong');

  if (ok) {
    fb.textContent = '✓ Correct!';
    fb.className   = 'fb-feedback ok';
    const xp = fbState.tries === 0 ? XP.EXERCISE_CORRECT_FIRST : XP.EXERCISE_CORRECT_RETRY;
    addXP(xp, input);
    markReviewed(lessonNum, q.answer);
    saveToSession();
    fbState.index++;
    fbState.tries = 0;
    setTimeout(() => drawFillBlank(null, lessonNum), 900);
  } else {
    fb.innerHTML = `✗ Ikke helt riktig. Try again! ${q.hint ? `<em>(hint: ${q.hint})</em>` : ''}`;
    fb.className = 'fb-feedback err';
    fbState.tries++;
    setTimeout(() => {
      if (input) {
        input.classList.remove('wrong');
        input.value = '';
        input.focus();
      }
    }, 1000);
  }
}

function fbHint(lessonNum) {
  const q = fbState.items[fbState.index];
  const fb = document.getElementById('fbFeedback');
  if (fb && q.hint) { fb.textContent = `💡 ${q.hint}`; fb.className = 'fb-feedback'; }
}

// ===== MULTIPLE CHOICE =====
let mcState = { items: [], index: 0 };

function renderMultiChoice(area, ld, lessonNum) {
  const items = shuffle([...(ld.multiChoice || [])]);
  mcState = { items, index: 0 };
  if (items.length === 0) {
    area.innerHTML = '<div style="padding:16px;font-family:var(--font)">No multiple choice exercises for this lesson yet.</div>';
    return;
  }
  drawMultiChoice(area, lessonNum);
}

function drawMultiChoice(area, lessonNum) {
  if (!area) area = document.getElementById('mgArea');
  const s = mcState;
  if (s.index >= s.items.length) {
    area.innerHTML = `
      <div style="text-align:center;padding:20px;font-family:var(--font)">
        <div style="font-size:22px;margin-bottom:8px">✓ Ferdig!</div>
        <button class="btn btn-green" onclick="renderMultiChoice(document.getElementById('mgArea'),LESSONS_DATA[${lessonNum}],${lessonNum})">↺ Igjen</button>
      </div>`;
    return;
  }
  const q = s.items[s.index];

  area.innerHTML = `
    <div style="font-family:var(--font);font-size:11px;color:var(--ink3);margin-bottom:8px;letter-spacing:1px">
      SPØRSMÅL ${s.index + 1} / ${s.items.length}
    </div>
    <div class="mc-question">${q.q}</div>
    <div class="mc-options">
      ${q.options.map((opt, i) => `
      <button class="mc-opt" id="mcOpt${i}" onclick="mcPick(${i},${q.answer},${lessonNum},'${opt.replace(/'/g,"\\'")}')">
        ${String.fromCharCode(65 + i)}) ${opt}
      </button>`).join('')}
    </div>
    <div class="fb-feedback" id="mcFeedback"></div>`;
}

function mcPick(chosen, correct, lessonNum, optText) {
  // Disable all options
  document.querySelectorAll('.mc-opt').forEach(b => b.disabled = true);
  const fb = document.getElementById('mcFeedback');
  const correctEl = document.getElementById(`mcOpt${correct}`);
  const chosenEl  = document.getElementById(`mcOpt${chosen}`);

  if (chosen === correct) {
    if (correctEl) correctEl.classList.add('correct-ans');
    if (fb) { fb.textContent = '✓ Correct!'; fb.className = 'fb-feedback ok'; }
    addXP(XP.EXERCISE_CORRECT_FIRST, chosenEl || document.getElementById('mgArea'));
    markReviewed(lessonNum, optText);
    saveToSession();
  } else {
    if (chosenEl)  chosenEl.classList.add('wrong-ans');
    if (correctEl) correctEl.classList.add('correct-ans');
    if (fb) {
      fb.textContent = `✗ Riktig svar var: ${mcState.items[mcState.index].options[correct]}`;
      fb.className   = 'fb-feedback err';
    }
  }

  mcState.index++;
  setTimeout(() => drawMultiChoice(null, lessonNum), chosen === correct ? 900 : 1800);
}

// ===== DRAG & DROP (word-order sentence) =====
let ddState = { sentence: null, slots: [], placed: [], words: [] };

function renderDragDrop(area, ld, lessonNum) {
  const sentences = ld.sentences || [];
  if (sentences.length === 0) {
    area.innerHTML = '<div style="padding:16px;font-family:var(--font)">No drag-drop exercises yet.</div>';
    return;
  }
  // Pick a random sentence and scramble its words
  const s = sentences[Math.floor(Math.random() * sentences.length)];
  const words = s.no.replace(/[.,!?]/g,'').split(/\s+/).filter(Boolean);
  const shuffled = shuffle([...words]);
  ddState = { sentence: s, words, shuffled, placed: Array(words.length).fill(null), selected: null };
  drawDragDrop(area, lessonNum);
}

function drawDragDrop(area, lessonNum) {
  if (!area) area = document.getElementById('mgArea');
  const s = ddState;

  const slotsHtml = s.words.map((_, i) => {
    const placed = s.placed[i];
    return `<div class="dd-slot ${placed ? 'filled' : ''}" id="ddSlot${i}" onclick="ddSlotClick(${i},${lessonNum})">
      ${placed || ''}
    </div>`;
  }).join(' ');

  const wordsHtml = s.shuffled.map((w, i) => {
    const used = s.placed.includes(w);
    return `<div class="dd-word ${used ? 'used' : ''} ${s.selected === i ? 'selected' : ''}"
      id="ddWord${i}" onclick="ddWordClick(${i},${lessonNum})">${w}</div>`;
  }).join('');

  area.innerHTML = `
    <div style="font-family:var(--font);font-size:12px;color:var(--ink3);margin-bottom:8px">
      Put the words in the correct order:
    </div>
    <div style="font-family:var(--font);font-size:12px;color:var(--ink3);margin-bottom:4px">
      (${s.sentence.en})
    </div>
    <div class="dd-sentence" id="ddSentence">${slotsHtml}</div>
    <div class="dd-words">${wordsHtml}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn btn-green" onclick="ddCheck(${lessonNum})">Sjekk →</button>
      <button class="btn" onclick="ddReset(${lessonNum})">↺ Reset</button>
      <button class="btn" onclick="renderDragDrop(document.getElementById('mgArea'),LESSONS_DATA[${lessonNum}],${lessonNum})">Ny setning</button>
    </div>
    <div class="fb-feedback" id="ddFeedback"></div>`;
}

function ddWordClick(wordIdx, lessonNum) {
  const w = ddState.shuffled[wordIdx];
  if (ddState.placed.includes(w)) return; // already placed

  if (ddState.selected === wordIdx) {
    ddState.selected = null;
  } else {
    ddState.selected = wordIdx;
  }
  drawDragDrop(null, lessonNum);
}

function ddSlotClick(slotIdx, lessonNum) {
  if (ddState.selected === null) {
    // clicking a filled slot clears it
    if (ddState.placed[slotIdx]) {
      ddState.placed[slotIdx] = null;
      drawDragDrop(null, lessonNum);
    }
    return;
  }
  const word = ddState.shuffled[ddState.selected];
  // Remove word from any other slot
  ddState.placed = ddState.placed.map(p => p === word ? null : p);
  ddState.placed[slotIdx] = word;
  ddState.selected = null;
  drawDragDrop(null, lessonNum);
}

function ddCheck(lessonNum) {
  const correct = ddState.words;
  const placed  = ddState.placed;
  const fb      = document.getElementById('ddFeedback');
  const allFilled = placed.every(Boolean);
  if (!allFilled) { if (fb) { fb.textContent = 'Fill all slots first.'; fb.className = 'fb-feedback err'; } return; }

  let allRight = true;
  ddState.words.forEach((w, i) => {
    const slot = document.getElementById(`ddSlot${i}`);
    if (!slot) return;
    if (placed[i] === w) { slot.classList.add('correct'); }
    else { slot.classList.add('wrong'); allRight = false; }
  });

  if (allRight) {
    if (fb) { fb.textContent = '✓ Perfect! Sentence is correct.'; fb.className = 'fb-feedback ok'; }
    addXP(XP.DRAG_DROP_COMPLETE, document.getElementById('mgArea'));
    saveToSession();
    setTimeout(() => renderDragDrop(document.getElementById('mgArea'), LESSONS_DATA[lessonNum], lessonNum), 1400);
  } else {
    if (fb) {
      fb.innerHTML = `✗ Ikke helt riktig. Riktig: <strong>${correct.join(' ')}</strong>`;
      fb.className = 'fb-feedback err';
    }
    setTimeout(() => ddReset(lessonNum), 2000);
  }
}

function ddReset(lessonNum) {
  ddState.placed   = Array(ddState.words.length).fill(null);
  ddState.selected = null;
  drawDragDrop(null, lessonNum);
}

// ===== DECAY REVIEW =====
function renderDecayReview(area, ld, lessonNum) {
  const decayed = (ld.vocab || []).filter(v => isDecayed(lessonNum, v.id));
  if (decayed.length === 0) {
    area.innerHTML = '<div style="padding:16px;font-family:var(--font)">No words have decayed yet! Come back in a few days.</div>';
    return;
  }
  // Use flashcard-style review on just the decayed items
  fcState = { items: shuffle(decayed), index: 0, flipped: false, done: [] };
  drawDecayCard(area, lessonNum);
}

function drawDecayCard(area, lessonNum) {
  if (!area) area = document.getElementById('mgArea');
  const s = fcState;

  if (s.index >= s.items.length) {
    area.innerHTML = `
      <div style="text-align:center;padding:20px;font-family:var(--font)">
        <div style="font-size:22px;margin-bottom:8px">✓ Review complete!</div>
        <div style="font-size:14px;margin-bottom:14px;color:var(--ink3)">All decayed words have been reviewed.</div>
        <button class="btn btn-green" onclick="renderDecayReview(document.getElementById('mgArea'),LESSONS_DATA[${lessonNum}],${lessonNum})">↺ Igjen</button>
      </div>`;
    return;
  }

  const item  = s.items[s.index];
  const safeNo = item.no.replace(/'/g, "\\'");

  area.innerHTML = `
    <div class="decay-banner" style="margin-bottom:12px">
      ⏰ Review of decayed word ${s.index + 1}/${s.items.length}
    </div>
    <div class="flashcard" onclick="drFlip(${lessonNum})">
      <div class="fc-front">${s.flipped ? item.no : item.en}</div>
      ${s.flipped
        ? `<div class="fc-back">${item.en}</div>${item.note ? `<div class="fc-note">${item.note}</div>` : ''}`
        : `<div class="fc-hint">klikk for å snu</div>`}
    </div>
    <div class="fc-controls">
      <button class="btn" onclick="TTS.speak('${safeNo}')">▶ Hør</button>
      ${s.flipped
        ? `<button class="btn btn-green" onclick="drNext(true,${lessonNum})">✓ I knew it</button>
           <button class="btn btn-red"   onclick="drNext(false,${lessonNum})">✗ Try again</button>`
        : `<button class="btn" onclick="drFlip(${lessonNum})">Snu kortet</button>`}
    </div>`;
}

function drFlip(lessonNum) { fcState.flipped = !fcState.flipped; drawDecayCard(null, lessonNum); }

function drNext(knew, lessonNum) {
  const item = fcState.items[fcState.index];
  if (knew) {
    markReviewed(lessonNum, item.id);
    setItemStrength(lessonNum, item.id, 3);
    addXP(XP.DECAY_REVIEW, document.getElementById('mgArea'));
    saveToSession();
  }
  fcState.index++;
  fcState.flipped = false;
  drawDecayCard(null, lessonNum);
}

// ===== UTILS =====
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
