/**
 * tts.js — Web Speech API wrapper
 * Norwegian (nb-NO) voice with fallback.
 */

const TTS = (() => {
  let _voice = null;
  let _ready = false;

  function init() {
    if (!window.speechSynthesis) return;
    function findVoice() {
      const voices = speechSynthesis.getVoices();
      _voice = voices.find(v => v.lang === 'nb-NO')
            || voices.find(v => v.lang.startsWith('nb'))
            || voices.find(v => v.lang.startsWith('no'))
            || null;
      _ready = true;
    }
    findVoice();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = findVoice;
    }
  }

  function speak(text, rate = 0.85, pitch = 1.0) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    if (_voice) utt.voice = _voice;
    utt.lang  = 'nb-NO';
    utt.rate  = rate;
    utt.pitch = pitch;
    speechSynthesis.speak(utt);
  }

  function speakSlow(text) { speak(text, 0.65); }

  function cancel() {
    if (window.speechSynthesis) speechSynthesis.cancel();
  }

  function available() { return !!window.speechSynthesis; }

  return { init, speak, speakSlow, cancel, available };
})();

document.addEventListener('DOMContentLoaded', () => TTS.init());
