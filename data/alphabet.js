/**
 * alphabet.js — Norwegian alphabet data
 */
const ALPHABET_DATA = {
  letters: [
    { letter: "A", ipa: "/ɑː/",  example: "arm",      note: "" },
    { letter: "B", ipa: "/beː/", example: "bil",       note: "As English B" },
    { letter: "C", ipa: "/seː/", example: "café",      note: "Rare, mostly in loanwords. Sounds like K or S." },
    { letter: "D", ipa: "/deː/", example: "dag",       note: "Often silent after vowels: glad, rød" },
    { letter: "E", ipa: "/eː/",  example: "elv",       note: "" },
    { letter: "F", ipa: "/ɛf/",  example: "far",       note: "" },
    { letter: "G", ipa: "/ɡeː/", example: "god",       note: "Before i/y: sounds like 'y' in yes. Silent in some words." },
    { letter: "H", ipa: "/hɔː/", example: "hus",       note: "Silent before V and J: hvit, hjerte" },
    { letter: "I", ipa: "/iː/",  example: "i",         note: "" },
    { letter: "J", ipa: "/jɔːd/",example: "ja",        note: "Always sounds like English 'Y'" },
    { letter: "K", ipa: "/kɔː/", example: "katt",      note: "Before i/y/ei: sounds like 'sh' in some dialects" },
    { letter: "L", ipa: "/ɛl/",  example: "lang",      note: "" },
    { letter: "M", ipa: "/ɛm/",  example: "mat",       note: "" },
    { letter: "N", ipa: "/ɛn/",  example: "norsk",     note: "" },
    { letter: "O", ipa: "/oː/",  example: "og",        note: "" },
    { letter: "P", ipa: "/peː/", example: "på",        note: "" },
    { letter: "Q", ipa: "/kuː/", example: "—",         note: "Not native. Only in loanwords." },
    { letter: "R", ipa: "/ɛr/",  example: "reise",     note: "Often rolled (trilled) in West Norway; retroflex elsewhere" },
    { letter: "S", ipa: "/ɛs/",  example: "snakke",    note: "" },
    { letter: "T", ipa: "/teː/", example: "takk",      note: "Often silent at end of common words: det, ikke, huset" },
    { letter: "U", ipa: "/uː/",  example: "ut",        note: "" },
    { letter: "V", ipa: "/veː/", example: "vær",       note: "" },
    { letter: "W", ipa: "/dɔbəlveː/", example: "—",   note: "Not native. Only in loanwords (wifi, WC)" },
    { letter: "X", ipa: "/ɛks/", example: "—",         note: "Very rare. Pronounced KS." },
    { letter: "Y", ipa: "/yː/",  example: "yrke",      note: "Like German Ü. Round your lips and say 'ee'." },
    { letter: "Z", ipa: "/sɛt/", example: "—",         note: "Not native. Sounds like S." },
    { letter: "Æ", ipa: "/æː/",  example: "ære",       note: "Like the 'a' in 'bad' but longer. Open mouth wide." },
    { letter: "Ø", ipa: "/øː/",  example: "øl",        note: "Like German Ö. Round your lips and say 'e'." },
    { letter: "Å", ipa: "/oː/",  example: "år",        note: "Like 'aw' in 'law'. Previously written 'aa' (and still is in some names)." },
  ],
  special_notes: [
    {
      title: "Æ, Ø, Å — the three special letters",
      content: "These come at the END of the Norwegian alphabet (after Z). If you can't type them, acceptable substitutes are: Æ→ae, Ø→oe or o, Å→aa or a. This application accepts all these substitutions."
    },
    {
      title: "Silent letters",
      content: "Norwegian has several silent letters in common words:\n• D: glad, rød, med, god\n• T: det, huset, ikke, ikke\n• H: hvit (white), hjerte (heart), hjem (home)\n• G: dag (sometimes), sag"
    },
    {
      title: "Pitch accent (tones)",
      content: "Norwegian has two tones (Tone 1 and Tone 2) that can distinguish words. This is dialect-dependent and advanced — don't worry about it at A1-A2. Focus on vocabulary and grammar first."
    }
  ]
};

/**
 * dictionary.js — Vocabulary reference by category
 */
const DICTIONARY_DATA = {
  categories: [
    {
      id: "days",
      name: "Days of the Week",
      icon: "📅",
      entries: [
        { no: "mandag",   en: "Monday",    note: "" },
        { no: "tirsdag",  en: "Tuesday",   note: "" },
        { no: "onsdag",   en: "Wednesday", note: "" },
        { no: "torsdag",  en: "Thursday",  note: "" },
        { no: "fredag",   en: "Friday",    note: "" },
        { no: "lørdag",   en: "Saturday",  note: "" },
        { no: "søndag",   en: "Sunday",    note: "" },
      ]
    },
    {
      id: "connectors",
      name: "Connector / Bridge Words",
      icon: "🔗",
      entries: [
        { no: "og",        en: "and" },
        { no: "men",       en: "but" },
        { no: "eller",     en: "or" },
        { no: "fordi",     en: "because" },
        { no: "når",       en: "when" },
        { no: "hvis",      en: "if" },
        { no: "så",        en: "so / then" },
        { no: "at",        en: "that" },
        { no: "selv om",   en: "even though" },
        { no: "dessuten",  en: "furthermore" },
        { no: "altså",     en: "so / in other words" },
        { no: "nemlig",    en: "you see" },
        { no: "likevel",   en: "anyway / nonetheless" },
        { no: "faktisk",   en: "actually" },
        { no: "egentlig",  en: "actually (softening)" },
      ]
    },
    {
      id: "pronouns",
      name: "Pronouns",
      icon: "👤",
      entries: [
        { no: "jeg",   en: "I" },
        { no: "du",    en: "you (sing.)" },
        { no: "han",   en: "he" },
        { no: "hun",   en: "she" },
        { no: "det",   en: "it / that" },
        { no: "vi",    en: "we" },
        { no: "dere",  en: "you (pl.)" },
        { no: "de",    en: "they" },
        { no: "meg",   en: "me" },
        { no: "deg",   en: "you (obj.)" },
        { no: "ham/han",en:"him" },
        { no: "henne", en: "her" },
        { no: "oss",   en: "us" },
        { no: "dem",   en: "them" },
        { no: "seg",   en: "himself/herself/themselves" },
      ]
    },
    {
      id: "numbers",
      name: "Numbers 1–20",
      icon: "🔢",
      entries: [
        { no: "én / ett", en: "1" },
        { no: "to",       en: "2" },
        { no: "tre",      en: "3" },
        { no: "fire",     en: "4" },
        { no: "fem",      en: "5" },
        { no: "seks",     en: "6" },
        { no: "syv",      en: "7" },
        { no: "åtte",     en: "8" },
        { no: "ni",       en: "9" },
        { no: "ti",       en: "10" },
        { no: "elleve",   en: "11" },
        { no: "tolv",     en: "12" },
        { no: "tretten",  en: "13" },
        { no: "fjorten",  en: "14" },
        { no: "femten",   en: "15" },
        { no: "seksten",  en: "16" },
        { no: "sytten",   en: "17" },
        { no: "atten",    en: "18" },
        { no: "nitten",   en: "19" },
        { no: "tjue",     en: "20" },
      ]
    },
    {
      id: "common_verbs",
      name: "Common Verbs",
      icon: "⚡",
      entries: [
        { no: "å være",   en: "to be",         note: "er / var" },
        { no: "å ha",     en: "to have",        note: "har / hadde" },
        { no: "å gjøre",  en: "to do",          note: "gjør / gjorde" },
        { no: "å si",     en: "to say",         note: "sier / sa" },
        { no: "å gå",     en: "to go / walk",   note: "går / gikk" },
        { no: "å komme",  en: "to come",        note: "kommer / kom" },
        { no: "å se",     en: "to see",         note: "ser / så" },
        { no: "å vite",   en: "to know",        note: "vet / visste" },
        { no: "å ville",  en: "to want",        note: "vil / ville" },
        { no: "å få",     en: "to get",         note: "får / fikk" },
        { no: "å ta",     en: "to take",        note: "tar / tok" },
        { no: "å gi",     en: "to give",        note: "gir / ga" },
        { no: "å dra",    en: "to go (leave)",  note: "drar / dro" },
      ]
    },
    {
      id: "prepositions",
      name: "Prepositions",
      icon: "📍",
      entries: [
        { no: "i",      en: "in / at (enclosed)" },
        { no: "på",     en: "on / at / in (open)" },
        { no: "til",    en: "to / for / until" },
        { no: "om",     en: "about / in (time)" },
        { no: "fra",    en: "from" },
        { no: "med",    en: "with" },
        { no: "uten",   en: "without" },
        { no: "ved",    en: "by / near" },
        { no: "hos",    en: "at someone's place" },
        { no: "mellom", en: "between" },
        { no: "bak",    en: "behind" },
        { no: "foran",  en: "in front of" },
        { no: "over",   en: "over / above" },
        { no: "under",  en: "under / below" },
        { no: "mot",    en: "towards" },
      ]
    }
  ]
};
