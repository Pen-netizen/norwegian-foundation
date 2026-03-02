/**
 * desktop.js — boot, screen switching, window management
 */

let currentApp = null;
let musicPlaying = false;

// ===== BOOT =====
function bootFresh() {
  // new save — just go to desktop
  loadFromSession(); // might be nothing
  showDesktop();
}

function bootShowLoad() {
  document.getElementById('bootChoices').style.display = 'none';
  document.getElementById('bootLoadArea').classList.add('show');
  document.getElementById('bootCodeInput').focus();
}

function bootHideLoad() {
  document.getElementById('bootChoices').style.display = 'flex';
  document.getElementById('bootLoadArea').classList.remove('show');
  document.getElementById('bootErr').textContent = '';
}

function bootLoadCode() {
  const raw = document.getElementById('bootCodeInput').value.trim();
  if (!raw) { document.getElementById('bootErr').textContent = 'Skriv inn koden din.'; return; }
  const ok = loadSaveCode(raw);
  if (ok) {
    showDesktop();
  } else {
    document.getElementById('bootErr').textContent = '✕ Ugyldig kode. Sjekk og prøv igjen.';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const inp = document.getElementById('bootCodeInput');
    if (inp && document.activeElement === inp) bootLoadCode();
  }
});

function showDesktop() {
  document.getElementById('screen-boot').classList.remove('active');
  document.getElementById('screen-desktop').classList.add('active');
  updateTopBarXP();
  updateDesktopStats();
}

// ===== WINDOW MANAGEMENT =====
function openApp(appId) {
  currentApp = appId;
  const overlay = document.getElementById('windowOverlay');
  const title   = document.getElementById('winTitle');
  const body    = document.getElementById('winBody');

  overlay.classList.add('open');

  // Animate replacement
  document.getElementById('windowBox').style.animation = 'none';
  requestAnimationFrame(() => {
    document.getElementById('windowBox').style.animation = 'windowPop 0.18s ease';
  });

  switch(appId) {
    case 'lessons':    title.textContent = '📚 Lessons'; renderLessonsApp(body); break;
    case 'alphabet':   title.textContent = 'Æ Alfabetet'; renderAlphabetApp(body); break;
    case 'dictionary': title.textContent = '📖 Ordbok'; renderDictionaryApp(body); break;
    case 'settings':   title.textContent = '⚙ Innstillinger'; renderSettingsApp(body); break;
    default: body.innerHTML = '<div style="padding:20px">App ikke funnet.</div>';
  }
}

function closeWindow() {
  document.getElementById('windowOverlay').classList.remove('open');
  currentApp = null;
}

// Click outside window closes it
document.getElementById('windowOverlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('windowOverlay')) closeWindow();
});

// ===== MUSIC =====
function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  const btn   = document.getElementById('musicBtn');
  if (musicPlaying) {
    audio.pause();
    btn.textContent = '▶';
    musicPlaying = false;
  } else {
    audio.play().catch(e => {
      showToast('♪ Add lofi-track.mp3 to the /audio/ folder to enable music');
    });
    btn.textContent = '❚❚';
    musicPlaying = true;
  }
}

// ===== TOAST =====
function showToast(msg, dur = 2500) {
  const el = document.getElementById('toastEl');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), dur);
}

function showUnlock(lessonNum) {
  const el = document.getElementById('unlockBanner');
  el.innerHTML = `🔓 Lesson ${lessonNum} unlocked! <br><span style="font-size:12px">+${XP.TEST_PASS} XP</span>`;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3500);
}

// ===== ACCENT TOLERANCE =====
// Exported as a shared utility
function normaliseAnswer(str) {
  return str.trim().toLowerCase()
    .replace(/æ/g,'ae').replace(/ø/g,'oe').replace(/å/g,'aa')
    .replace(/é/g,'e').replace(/ü/g,'u')
    .replace(/[^a-z0-9\s]/g,'')
    .replace(/\s+/g,' ').trim();
}

function answersMatch(input, correct, acceptList) {
  const norm = normaliseAnswer(input);
  const targets = [correct, ...(acceptList || [])].map(normaliseAnswer);
  return targets.includes(norm);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadFromSession();
  TTS.init();
});
