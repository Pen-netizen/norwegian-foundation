# Norsk Grunnlag — Norwegian Foundation A1–A2

A desktop OS–style Norwegian language learning app. Runs entirely in the browser with zero server dependencies.

---

## Folder Structure

```
norwegian-foundation/
├── index.html                  ← Entry point (boot screen + desktop)
├── css/
│   └── global.css              ← All styles
├── js/
│   ├── state.js                ← Game state, XP, decay, streak
│   ├── save.js                 ← Save code encoder/decoder
│   ├── tts.js                  ← Web Speech API wrapper
│   ├── desktop.js              ← Boot, window management, toast
│   └── apps/
│       ├── lessons.js          ← Lesson list + all four tabs
│       ├── minigames.js        ← Flashcard, fill-blank, MC, drag-drop, decay review
│       ├── alphabet.js         ← Alphabet app (in settings.js file)
│       ├── dictionary.js       ← Dictionary app (in settings.js file)
│       └── settings.js         ← Settings + save code UI + alphabet + dictionary
├── data/
│   ├── lessons/
│   │   ├── lesson-01.js
│   │   ├── lesson-02.js
│   │   ├── lesson-03-05.js
│   │   ├── lesson-06-10.js
│   │   ├── lesson-11-15.js
│   │   └── lesson-16-19.js
│   ├── alphabet.js
│   └── extract.js              ← Markens Grøde (Knut Hamsun, 1917) — public domain
├── audio/
│   └── lofi-track.mp3          ← Add your own lo-fi MP3 here (not included)
└── README.md
```

---

## Publishing to GitHub Pages

### First time

1. Create a new repository on GitHub (e.g. `norwegian-foundation`)
2. In your terminal, inside this folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/norwegian-foundation.git
git push -u origin main
```

3. On GitHub: go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch**
5. Branch: `main`, Folder: `/ (root)`
6. Click **Save**
7. Wait ~60 seconds, then visit: `https://YOUR_USERNAME.github.io/norwegian-foundation/`

### Updating

```bash
git add .
git commit -m "Update lessons / fix bug / etc"
git push
```

GitHub Pages rebuilds automatically on push. No build step needed.

---

## Adding Music

Place any MP3 file at `audio/lofi-track.mp3`. The player in the bottom bar will activate.

Recommended sources for free lo-fi music:
- [Free Music Archive](https://freemusicarchive.org) — filter by CC license
- [Chillhop Music](https://chillhop.com) — check licensing per track
- Any Creative Commons CC BY or CC0 track

---

## Save Codes

Save codes are base-62 encoded bitpacked strings encoding:
- Total XP
- Unlocked lesson number
- Streak count
- Lessons completed
- Per-lesson test scores
- Per-item review timestamps and strength ratings

At full lesson 19 completion, expect a code of approximately 20–26 characters (formatted in groups of 5 with dashes).

Example format: `A3X2K-MN9P1-7BQRZ`

---

## Technical Notes

- **TTS**: Uses the browser's built-in Web Speech API with `nb-NO` voice. Best in Chrome. Firefox works. Safari has limited voice availability on some platforms.
- **No external dependencies** except Google Fonts (Patrick Hand) loaded at runtime
- **Accent tolerance**: All text inputs accept `ae/oe/aa` as substitutes for `æ/ø/å`
- **Desktop only**: No mobile adaptation — the laptop frame is fixed at 960px wide
- **No server needed**: Pure static HTML/CSS/JS

---

## Literary Extract

The Read tab uses an excerpt from **Markens Grøde** (Growth of the Soil) by Knut Hamsun, 1917. This work is in the public domain in Norway and internationally (published over 100 years ago). The text has been lightly modernised in spelling from the original nynorsk-influenced forms to standard Bokmål for pedagogical clarity.
