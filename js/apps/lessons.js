/**
 * lessons.js — lesson list + lesson window with all 4 tabs
 */

const LESSON_META = [
  { n:1,  title:"Hilsener",          sub:"Greetings & Polite Expressions" },
  { n:2,  title:"Kjerneverbene",     sub:"Core Verbs & Present Tense" },
  { n:3,  title:"Substantivkjønn",   sub:"Noun Gender en/ei/et" },
  { n:4,  title:"Setningsstruktur",  sub:"SVO, V2 Rule, Inversion" },
  { n:5,  title:"Spørreord",         sub:"Question Words" },
  { n:6,  title:"Ikke + Nektelse",   sub:"Negation" },
  { n:7,  title:"Tall",              sub:"Numbers + Counting Questions" },
  { n:8,  title:"Preposisjoner",     sub:"på, om, til, i" },
  { n:9,  title:"Tidsuttrykk",       sub:"Time Expressions & Days" },
  { n:10, title:"Flertall",          sub:"Plural Nouns" },
  { n:11, title:"Modale verb",       sub:"vil, kan, må, skal, bør" },
  { n:12, title:"Infinitiv",         sub:"Infinitive Constructions" },
  { n:13, title:"Flere prepos.",     sub:"ved, hos, fra, med" },
  { n:14, title:"Adjektivbøyning",   sub:"Adjective Agreement" },
  { n:15, title:"Possessiver",       sub:"Possessives" },
  { n:16, title:"Preteritum",        sub:"Past Tense" },
  { n:17, title:"Konjunksjoner",     sub:"og, men, fordi, når, hvis, så" },
  { n:18, title:"Refleksiver",       sub:"seg, selv, reciprocals" },
  { n:19, title:"Syntese",           sub:"Role-play & Dialogue" },
];

let currentLesson = null;
let currentTab    = 'study';

// ===== LESSONS LIST =====
function renderLessonsApp(container) {
  container.innerHTML = `
    <div class="lesson-list">
      <div class="lesson-list-title">📚 Velg en leksjon</div>
      <div id="lessonRows"></div>
    </div>`;
  renderLessonRows();
}

function renderLessonRows() {
  const wrap = document.getElementById('lessonRows');
  if (!wrap) return;
  wrap.innerHTML = LESSON_META.map(m => {
    const unlocked = m.n <= STATE.unlockedUpTo;
    const score    = STATE.testScores[m.n] || 0;
    return `
    <div class="lesson-row ${unlocked ? 'unlocked' : 'locked'}"
      onclick="${unlocked ? `openLesson(${m.n})` : ''}">
      <div class="lesson-num">${m.n}</div>
      <div class="lesson-info">
        <div class="lesson-name">${m.title}</div>
        <div class="lesson-sub">${m.sub}</div>
      </div>
      ${unlocked
        ? `<div class="lesson-badge">${score >= 85 ? '✓ BESTÅTT' : 'ÅPEN'}</div>
           ${score > 0 ? `<div class="lesson-score">${score}%</div>` : ''}`
        : `<div class="lesson-badge locked-badge">🔒</div>`}
    </div>`;
  }).join('');
}

// ===== OPEN LESSON =====
function openLesson(lessonNum) {
  if (lessonNum > STATE.unlockedUpTo) return;
  currentLesson = lessonNum;
  currentTab    = 'study';
  STATE.lastLessonNum = lessonNum;
  updateStreak();

  const ld = LESSONS_DATA[lessonNum];
  if (!ld) { showToast('Leksjondata mangler!'); return; }

  document.getElementById('winTitle').textContent = `Leksjon ${lessonNum} — ${ld.subtitle}`;
  const body = document.getElementById('winBody');
  body.innerHTML = `
    <div class="lesson-win-body">
      <div class="lesson-tabs" id="lessonTabs">
        <button class="lesson-tab-btn active" data-tab="study"     onclick="switchLessonTab('study')">
          <span class="lesson-tab-icon">📖</span>Study
        </button>
        <button class="lesson-tab-btn" data-tab="minigames" onclick="switchLessonTab('minigames')">
          <span class="lesson-tab-icon">🎮</span>Mini-Games
        </button>
        <button class="lesson-tab-btn" data-tab="read" onclick="switchLessonTab('read')">
          <span class="lesson-tab-icon">📜</span>Read
        </button>
        <button class="lesson-tab-btn" data-tab="test" onclick="switchLessonTab('test')">
          <span class="lesson-tab-icon">✏️</span>Test
        </button>
      </div>
      <div class="lesson-panel" id="lessonPanel"></div>
    </div>`;

  renderTab('study');
}

function switchLessonTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.lesson-tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  renderTab(tab);
}

function renderTab(tab) {
  const panel = document.getElementById('lessonPanel');
  if (!panel) return;
  switch (tab) {
    case 'study':     renderStudyTab(panel);    break;
    case 'minigames': renderMinigamesTab(panel); break;
    case 'read':      renderReadTab(panel);      break;
    case 'test':      renderTestTab(panel);      break;
  }
}

// ===== STUDY TAB =====
function renderStudyTab(panel) {
  const ld = LESSONS_DATA[currentLesson];
  const safeNo = s => (s||'').replace(/'/g, '&apos;');

  panel.innerHTML = `
    <div class="study-intro">LEKSJON ${currentLesson} · ${ld.subtitle}</div>

    <div class="study-section-title">Ordforråd</div>
    <table class="vocab-table">
      <thead>
        <tr><th>Norsk</th><th>Engelsk</th><th>Merknad</th><th></th></tr>
      </thead>
      <tbody>
        ${ld.vocab.map(v => `
        <tr>
          <td>${v.no}</td>
          <td>${v.en}</td>
          <td>${v.note || ''}</td>
          <td>
            <button class="tts-btn" onclick="TTS.speak('${safeNo(v.no)}')">▶</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>

    <div class="study-section-title">Grammatikk</div>
    ${(ld.grammar || []).map(g => `
    <div class="grammar-card">
      <div class="grammar-card-title">${g.title}</div>
      <div class="grammar-card-body">${g.content}</div>
    </div>`).join('')}

    <div class="study-section-title">Eksempelsetninger</div>
    ${(ld.sentences || []).map(s => `
    <div class="tts-sentence-row">
      <span class="sno">${s.no}</span>
      <span class="sen">${s.en}</span>
      <button class="tts-btn" onclick="TTS.speak('${safeNo(s.no)}')">▶</button>
    </div>`).join('')}
  `;
}

// ===== MINIGAMES TAB =====
function renderMinigamesTab(panel) {
  const ld = LESSONS_DATA[currentLesson];
  if (!ld) return;

  const decayed = (ld.vocab || []).filter(v => isDecayed(currentLesson, v.id));

  panel.innerHTML = `
    ${decayed.length > 0 ? `
    <div class="decay-banner">
      ⏰ ${decayed.length} ord trenger repetisjon:
      ${decayed.map(v => `<strong>${v.no}</strong>`).join(', ')}
    </div>` : ''}
    <div class="minigame-picker">
      <button class="mg-pick-btn active" data-mg="flashcard"   onclick="selectMinigame('flashcard',this)">🃏 Flashcard</button>
      <button class="mg-pick-btn"        data-mg="fillblank"   onclick="selectMinigame('fillblank',this)">✏️ Fill-in</button>
      <button class="mg-pick-btn"        data-mg="multichoice" onclick="selectMinigame('multichoice',this)">☑ Multiple Choice</button>
      <button class="mg-pick-btn"        data-mg="dragdrop"    onclick="selectMinigame('dragdrop',this)">↔ Drag & Drop</button>
      ${decayed.length > 0
        ? `<button class="mg-pick-btn" data-mg="decayreview" onclick="selectMinigame('decayreview',this)">⏰ Review Decayed</button>`
        : ''}
    </div>
    <div class="mg-area" id="mgArea"></div>`;

  renderMiniGame('flashcard');
}

function selectMinigame(id, btn) {
  document.querySelectorAll('.mg-pick-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMiniGame(id);
}

function renderMiniGame(id) {
  const area = document.getElementById('mgArea');
  if (!area) return;
  const ld = LESSONS_DATA[currentLesson];
  switch (id) {
    case 'flashcard':    renderFlashcard(area, ld, currentLesson);    break;
    case 'fillblank':    renderFillBlank(area, ld, currentLesson);    break;
    case 'multichoice':  renderMultiChoice(area, ld, currentLesson);  break;
    case 'dragdrop':     renderDragDrop(area, ld, currentLesson);     break;
    case 'decayreview':  renderDecayReview(area, ld, currentLesson);  break;
  }
}

// ===== READ TAB =====
function renderReadTab(panel) {
  if (typeof EXTRACT === 'undefined') {
    panel.innerHTML = '<div style="padding:16px;font-family:var(--font)">Tekst ikke lastet.</div>';
    return;
  }

  panel.innerHTML = `
    <div class="read-controls">
      <button class="btn" onclick="readSpeakAll()">▶ Hør teksten</button>
      <button class="btn" onclick="TTS.cancel()">■ Stopp</button>
      <span style="font-family:var(--font);font-size:11px;color:var(--ink3);margin-left:8px;">
        Uthevede ord = leksjon ${currentLesson} · Grå = ikke lært ennå
      </span>
    </div>
    <div class="read-task" id="readTask">
      👆 Klikk på et <strong style="color:#1a5a2a">uthevet ord</strong> for å høre det uttalt.
    </div>
    <div class="read-extract">
      <div class="extract-title">${EXTRACT.title}</div>
      <div class="extract-meta">${EXTRACT.author}, ${EXTRACT.year} — ${EXTRACT.source_note}</div>
      <div id="readExtractBody"></div>
    </div>
    <div id="extractPlainText" style="display:none"></div>`;

  renderExtractTokens();
}

function renderExtractTokens() {
  const body  = document.getElementById('readExtractBody');
  const plain = document.getElementById('extractPlainText');
  if (!body) return;

  let fullText = '';
  body.innerHTML = EXTRACT.paragraphs.map(para => {
    const inner = para.tokens.map(tok => {
      const lit = tok.lessonIds && tok.lessonIds.includes(currentLesson);
      fullText += tok.text;
      const word = tok.text.trim();
      if (lit && word) {
        const esc = word.replace(/'/g, "\\'");
        return `<span class="tok lit click" onclick="readWordClick(this,'${esc}')">${tok.text}</span>`;
      }
      return `<span class="tok dim">${tok.text}</span>`;
    }).join('');
    return `<p class="extract-para">${inner}</p>`;
  }).join('');

  if (plain) plain.textContent = fullText;
}

function readWordClick(el, word) {
  TTS.speak(word);
  el.style.background = 'rgba(133,236,87,0.45)';
  setTimeout(() => el.style.background = '', 900);
  addXP(XP.READ_CORRECT, el);
  markReviewed(currentLesson, word);
  saveToSession();
  const task = document.getElementById('readTask');
  if (task) task.innerHTML = `▶ Hørte: <strong>${word}</strong> — klikk igjen for å høre på nytt.`;
}

function readSpeakAll() {
  const plain = document.getElementById('extractPlainText');
  if (plain) TTS.speak(plain.textContent, 0.75);
}

// ===== TEST TAB =====
let testState = { current: 0, answers: [], questions: [], started: false };

function renderTestTab(panel) {
  const ld = LESSONS_DATA[currentLesson];
  testState = {
    current:  0,
    answers:  [],
    questions: [...(ld.testQuestions || [])],
    started:  true
  };
  drawTestQuestion(panel);
}

function drawTestQuestion(panel) {
  const qs = testState.questions;
  if (!panel) panel = document.getElementById('lessonPanel');
  if (!panel) return;

  if (testState.current >= qs.length) {
    showTestResult(panel);
    return;
  }

  const q = qs[testState.current];
  const n = testState.current + 1;
  const safeQ = (q.q || '').replace(/'/g, "\\'");

  panel.innerHTML = `
    <div class="test-header">
      <div class="test-title">✏️ Test — Leksjon ${currentLesson}</div>
      <div class="test-sub">85 % nødvendig for å låse opp neste leksjon. Ingen straff for forsøk.</div>
    </div>
    <div class="test-progress">
      ${qs.map((_, i) => {
        const a = testState.answers[i];
        return `<div class="test-pip ${a === undefined ? '' : a ? 'pass' : 'fail'}"></div>`;
      }).join('')}
    </div>
    <div class="test-q-num">SPØRSMÅL ${n} / ${qs.length}</div>
    <div class="test-question">${q.q}</div>
    <input class="test-input" id="testInput" type="text"
      autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
      placeholder="Skriv svaret ditt..."
      onkeydown="if(event.key==='Enter') testCheck()">
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px">
      <button class="btn btn-green" onclick="testCheck()">Svar →</button>
      <button class="btn" onclick="TTS.speak('${safeQ}')">▶ Hør</button>
    </div>
    <div class="fb-feedback" id="testFb" style="margin-top:10px;min-height:18px"></div>`;

  setTimeout(() => {
    const inp = document.getElementById('testInput');
    if (inp) inp.focus();
  }, 50);
}

function testCheck() {
  const input = document.getElementById('testInput');
  const fb    = document.getElementById('testFb');
  if (!input) return;

  const q  = testState.questions[testState.current];
  const ok = answersMatch(input.value, q.answer, q.accept);

  testState.answers[testState.current] = ok;
  input.classList.add(ok ? 'correct' : 'wrong');
  input.disabled = true;

  if (ok) {
    fb.textContent = '✓ Riktig!';
    fb.className   = 'fb-feedback ok';
    addXP(XP.EXERCISE_CORRECT_FIRST, input);
  } else {
    fb.innerHTML   = `✗ Riktig svar: <strong>${q.answer}</strong>`;
    fb.className   = 'fb-feedback err';
  }

  markReviewed(currentLesson, `test_q${testState.current}`);
  saveToSession();

  setTimeout(() => {
    testState.current++;
    const panel = document.getElementById('lessonPanel');
    drawTestQuestion(panel);
  }, ok ? 900 : 1800);
}

function showTestResult(panel) {
  const answers  = testState.answers;
  const total    = testState.questions.length;
  const correct  = answers.filter(Boolean).length;
  const pct      = total > 0 ? Math.round((correct / total) * 100) : 0;
  const pass     = pct >= 85;
  const prevBest = STATE.testScores[currentLesson] || 0;
  const firstPass = pass && prevBest < 85;

  if (pass) {
    STATE.testScores[currentLesson] = Math.max(pct, prevBest);
    const xpEarned = XP.TEST_PASS + (firstPass ? XP.TEST_PASS_FIRST_ATTEMPT : 0);
    addXP(xpEarned, panel);
    if (currentLesson < 19) {
      unlockNextLesson(currentLesson);
      if (firstPass) setTimeout(() => showUnlock(currentLesson + 1), 800);
    }
    saveToSession();
  }

  panel.innerHTML = `
    <div class="test-result ${pass ? 'pass-result' : 'fail-result'}">
      <div class="test-result-score">${pct}%</div>
      <div class="test-result-msg">
        ${pass
          ? `✓ Bestått! ${firstPass && currentLesson < 19 ? `Leksjon ${currentLesson + 1} er låst opp!` : ''}`
          : `✗ Ikke bestått — du trenger 85 %. Prøv igjen!`}
      </div>
      <div style="font-family:var(--font);font-size:13px;margin-top:6px;color:var(--ink3)">
        ${correct} av ${total} riktige
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap">
      <button class="btn btn-green" onclick="renderTab('test')">↺ Prøv igjen</button>
      <button class="btn" onclick="switchLessonTab('study')">📖 Tilbake til Study</button>
      ${pass && currentLesson < STATE.unlockedUpTo
        ? `<button class="btn btn-greenm" onclick="openLesson(${currentLesson + 1})" style="background:var(--greenm);color:#fff">
             Neste leksjon →
           </button>`
        : ''}
    </div>
    <div style="margin-top:16px">
      <div style="font-family:var(--font);font-size:12px;color:var(--ink3);margin-bottom:8px;letter-spacing:1px">GJENNOMGANG:</div>
      ${testState.questions.map((q, i) => `
      <div style="display:flex;gap:8px;padding:6px 0;border-bottom:1px dashed rgba(26,26,26,0.1);font-family:var(--font);font-size:12px">
        <span style="color:${testState.answers[i] ? 'var(--greenm)' : 'var(--red)'}">
          ${testState.answers[i] ? '✓' : '✗'}
        </span>
        <span style="flex:1">${q.q}</span>
        <span style="color:var(--ink3)">${q.answer}</span>
      </div>`).join('')}
    </div>`;
}
