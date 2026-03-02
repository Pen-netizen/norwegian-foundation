/**
 * alphabet.js — Alphabet app renderer
 */
function renderAlphabetApp(container) {
  container.innerHTML = `
    <div style="display:flex;flex-direction:column;height:100%;overflow:hidden">
      <div style="padding:10px 14px;border-bottom:2px solid var(--ink);background:var(--paper2);flex-shrink:0">
        <div style="font-family:var(--font);font-size:12px;color:var(--ink3);letter-spacing:1px">
          Klikk en bokstav for detaljer · Trykk ▶ for å høre uttalen
        </div>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px">
        <div id="alphaDetail" class="alpha-detail"></div>
        <div class="alpha-grid" id="alphaGrid"></div>
        <div style="margin-top:16px" id="alphaNotes"></div>
      </div>
    </div>`;

  // Render grid
  const grid = document.getElementById('alphaGrid');
  grid.innerHTML = (ALPHABET_DATA.letters || []).map((l, i) => {
    const special = ['Æ','Ø','Å'].includes(l.letter);
    return `<div class="alpha-card ${special ? 'special' : ''}" onclick="alphaSelect(${i})">
      <span class="alpha-letter">${l.letter}</span>
      <span class="alpha-ipa">${l.ipa}</span>
      <span class="alpha-example">${l.example || '—'}</span>
    </div>`;
  }).join('');

  // Render special notes
  const notes = document.getElementById('alphaNotes');
  notes.innerHTML = `
    <div style="font-family:var(--font);font-size:13px;font-weight:bold;color:var(--ink);margin-bottom:10px;
      border-left:4px solid var(--greenm);padding-left:8px">Merknader</div>
    ${(ALPHABET_DATA.special_notes || []).map(n => `
    <div class="alpha-note-card">
      <div class="alpha-note-title">${n.title}</div>
      <div class="alpha-note-body">${n.content}</div>
    </div>`).join('')}`;
}

function alphaSelect(idx) {
  const l = ALPHABET_DATA.letters[idx];
  if (!l) return;

  const detail = document.getElementById('alphaDetail');
  detail.classList.add('show');
  detail.innerHTML = `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:10px">
      <div style="font-family:var(--font);font-size:56px;font-weight:bold;color:var(--ink);line-height:1">${l.letter}</div>
      <div>
        <div style="font-family:var(--font);font-size:14px;color:var(--ink3)">${l.ipa}</div>
        ${l.example && l.example !== '—'
          ? `<div style="font-family:var(--font);font-size:14px;color:var(--greenm);margin-top:4px">
               Eks: <strong>${l.example}</strong>
             </div>`
          : ''}
        ${l.note ? `<div style="font-family:var(--font);font-size:13px;color:var(--ink);margin-top:6px;font-style:italic">${l.note}</div>` : ''}
      </div>
      <div style="margin-left:auto;display:flex;gap:6px">
        <button class="btn" onclick="TTS.speak('${l.letter}')">▶ Hør ${l.letter}</button>
        ${l.example && l.example !== '—'
          ? `<button class="btn" onclick="TTS.speak('${l.example}')">▶ ${l.example}</button>`
          : ''}
        <button class="btn" onclick="document.getElementById('alphaDetail').classList.remove('show')">✕</button>
      </div>
    </div>`;
}


/**
 * dictionary.js — Dictionary app renderer
 */
function renderDictionaryApp(container) {
  let activeCat = DICTIONARY_DATA.categories[0].id;

  container.innerHTML = `
    <div style="display:flex;flex-direction:column;height:100%;overflow:hidden">
      <div class="dict-cats" id="dictCats"></div>
      <div class="dict-entries" id="dictEntries"></div>
    </div>`;

  // Render category buttons
  const cats = document.getElementById('dictCats');
  cats.innerHTML = DICTIONARY_DATA.categories.map(c => `
    <button class="dict-cat-btn ${c.id === activeCat ? 'active' : ''}"
      onclick="dictShowCat('${c.id}')">
      ${c.icon} ${c.name}
    </button>`).join('');

  dictShowCat(activeCat);
}

function dictShowCat(catId) {
  // Update active button
  document.querySelectorAll('.dict-cat-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.trim().includes(
      DICTIONARY_DATA.categories.find(c => c.id === catId)?.name || ''
    ));
  });

  const cat     = DICTIONARY_DATA.categories.find(c => c.id === catId);
  const entries = document.getElementById('dictEntries');
  if (!cat || !entries) return;

  entries.innerHTML = `
    <div class="dict-cat-title">${cat.icon} ${cat.name}</div>
    ${cat.entries.map(e => `
    <div class="dict-entry">
      <span class="dict-no">${e.no}</span>
      <span class="dict-en">${e.en}</span>
      ${e.note ? `<span class="dict-note">${e.note}</span>` : ''}
      <button class="dict-tts" onclick="TTS.speak('${(e.no||'').replace(/'/g,"\\'")}')">▶</button>
    </div>`).join('')}`;
}


/**
 * settings.js — Settings app renderer
 */
function renderSettingsApp(container) {
  container.innerHTML = `
    <div class="settings-body" style="overflow-y:auto;height:100%">

      <div class="settings-section">
        <div class="settings-title">💾 Lagre fremgang</div>
        <div class="settings-label">LAGRINGSKODE — kopier og oppbevar denne</div>
        <div class="save-code-display" id="saveCodeDisplay" onclick="this.select()" title="Klikk for å velge alt">
          Genererer kode...
        </div>
        <div class="settings-note">
          Denne koden inneholder all din fremgang: XP, låste leksjoner, streak, og ordtilstand.
          Kopier den et trygt sted. Skriv den inn på boot-skjermen for å laste inn fremgang.
        </div>
        <button class="btn btn-green" style="margin-top:10px" onclick="settingsGenerate()">↺ Oppdater kode</button>
      </div>

      <div class="settings-section">
        <div class="settings-title">📥 Last inn lagret fremgang</div>
        <div class="settings-label">SKRIV INN KODE</div>
        <input class="load-code-input" id="loadCodeInput" type="text"
          autocomplete="off" autocorrect="off" spellcheck="false"
          placeholder="SKRIV INN LAGRINGSKODEN DIN..."
          onkeydown="if(event.key==='Enter') settingsLoad()">
        <button class="btn" onclick="settingsLoad()">Last inn →</button>
        <div class="settings-msg" id="settingsMsg"></div>
      </div>

      <div class="settings-section">
        <div class="settings-title">📊 Din statistikk</div>
        <div class="stats-display">
          <div class="stat-box">
            <span class="stat-box-val" id="statXP">${STATE.xp}</span>
            <span class="stat-box-lbl">XP TOTALT</span>
          </div>
          <div class="stat-box">
            <span class="stat-box-val" id="statLessons">${STATE.lessonsCompleted}</span>
            <span class="stat-box-lbl">LEKSJONER</span>
          </div>
          <div class="stat-box">
            <span class="stat-box-val" id="statStreak">${STATE.streak}</span>
            <span class="stat-box-lbl">STREAK 🔥</span>
          </div>
          <div class="stat-box">
            <span class="stat-box-val" id="statUnlocked">${STATE.unlockedUpTo}/19</span>
            <span class="stat-box-lbl">LÅST OPP</span>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-title">🔤 Spesialtegn</div>
        <div style="font-family:var(--font);font-size:13px;line-height:1.7;color:var(--ink)">
          Denne appen godtar svar uten norske spesialtegn. Du kan skrive:<br>
          <strong>æ → ae</strong> &nbsp;&nbsp; <strong>ø → oe</strong> eller <strong>o</strong>
          &nbsp;&nbsp; <strong>å → aa</strong> eller <strong>a</strong><br>
          Alle inntastingsfelt over hele appen aksepterer disse erstatningene.
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-title">🎵 Musikk</div>
        <div style="font-family:var(--font);font-size:13px;color:var(--ink3)">
          For å aktivere musikk: legg en fil kalt <strong>lofi-track.mp3</strong>
          i mappen <strong>/audio/</strong> i prosjektet.<br>
          Bruk av Creative Commons lo-fi musikk anbefales.
          Kontroll finner du i den nedre linjen.
        </div>
      </div>

    </div>`;

  // Auto-generate the code
  settingsGenerate();
}

function settingsGenerate() {
  const el = document.getElementById('saveCodeDisplay');
  if (!el) return;
  try {
    const code = generateSaveCode();
    el.textContent = code;
  } catch(e) {
    el.textContent = 'Feil ved generering av kode.';
    console.error(e);
  }
}

function settingsLoad() {
  const raw = (document.getElementById('loadCodeInput')?.value || '').trim();
  const msg = document.getElementById('settingsMsg');
  if (!raw) { if (msg) { msg.textContent = 'Skriv inn en kode.'; msg.className = 'settings-msg err'; } return; }

  const ok = loadSaveCode(raw);
  if (ok) {
    if (msg) { msg.textContent = '✓ Lastet inn! Fremgang gjenopprettet.'; msg.className = 'settings-msg ok'; }
    updateTopBarXP();
    updateDesktopStats();
    saveToSession();
    // Refresh stats in settings
    ['statXP','statLessons','statStreak','statUnlocked'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      if (id === 'statXP')       el.textContent = STATE.xp;
      if (id === 'statLessons')  el.textContent = STATE.lessonsCompleted;
      if (id === 'statStreak')   el.textContent = STATE.streak;
      if (id === 'statUnlocked') el.textContent = `${STATE.unlockedUpTo}/19`;
    });
    settingsGenerate();
  } else {
    if (msg) { msg.textContent = '✗ Ugyldig kode. Sjekk og prøv igjen.'; msg.className = 'settings-msg err'; }
  }
}
