/**
 * lesson-02.js — Core Verbs & Present Tense
 */
LESSONS_DATA[2] = {
  title: "Kjerneverbene & Presens",
  subtitle: "Core Verbs & Present Tense",
  color: "#c8e69e",

  vocab: [
    { id: "er",       no: "er",       en: "am / is / are",      note: "Present tense of 'å være'" },
    { id: "heter",    no: "heter",    en: "am called / is named",note: "Present of 'å hete'" },
    { id: "snakker",  no: "snakker",  en: "speak / speaks",      note: "Present of 'å snakke'" },
    { id: "kommer",   no: "kommer",   en: "come / comes",        note: "Present of 'å komme'" },
    { id: "har",      no: "har",      en: "have / has",          note: "Present of 'å ha'" },
    { id: "bor",      no: "bor",      en: "live / lives",        note: "Present of 'å bo'" },
    { id: "jobber",   no: "jobber",   en: "work / works",        note: "Present of 'å jobbe'" },
    { id: "liker",    no: "liker",    en: "like / likes",        note: "Present of 'å like'" },
    { id: "vil",      no: "vil",      en: "want / wants",        note: "Also a modal — covered in L11" },
    { id: "vet",      no: "vet",      en: "know / knows",        note: "Present of 'å vite'" },
    { id: "ser",      no: "ser",      en: "see / sees",          note: "Present of 'å se'" },
    { id: "spiser",   no: "spiser",   en: "eat / eats",          note: "Present of 'å spise'" },
    { id: "drikker",  no: "drikker",  en: "drink / drinks",      note: "Present of 'å drikke'" },
    { id: "joeg",     no: "jeg",      en: "I" },
    { id: "du",       no: "du",       en: "you (sing.)" },
    { id: "han",      no: "han",      en: "he" },
    { id: "hun",      no: "hun",      en: "she" },
    { id: "vi",       no: "vi",       en: "we" },
    { id: "dere",     no: "dere",     en: "you (plural)" },
    { id: "de",       no: "de",       en: "they" },
  ],

  grammar: [
    {
      title: "The -er Present Tense Rule",
      content: `Norwegian present tense is beautifully simple: for most regular verbs, add <strong>-er</strong> to the stem — and it stays the same for ALL persons.

<em>å snakke</em> → snakk + er = <strong>snakker</strong>
Jeg snakker / Du snakker / Han snakker / Vi snakker — all identical.

No conjugation tables needed. One form covers everything.`,
    },
    {
      title: "Irregular core verbs",
      content: `A handful of common verbs don't follow the -er pattern:

<strong>å være</strong> (to be) → <strong>er</strong> (not "værer")
<strong>å ha</strong> (to have) → <strong>har</strong>
<strong>å hete</strong> (to be named) → <strong>heter</strong>
<strong>å vite</strong> (to know) → <strong>vet</strong>

These are the verbs you'll use most — worth memorising individually.`,
    },
    {
      title: "Subject Pronouns",
      content: `Norwegian uses the same pronouns as English, mapped 1:1:
jeg (I) · du (you) · han (he) · hun (she)
vi (we) · dere (you pl.) · de (they)

Note: <strong>det</strong> (it) is also used as a dummy subject — "Det er kaldt" = "It is cold."`,
    },
  ],

  sentences: [
    { no: "Jeg heter Erik.",          en: "My name is Erik." },
    { no: "Hun er fra Norge.",        en: "She is from Norway." },
    { no: "Vi snakker norsk.",        en: "We speak Norwegian." },
    { no: "Han bor i Oslo.",          en: "He lives in Oslo." },
    { no: "Jeg har en hund.",         en: "I have a dog." },
    { no: "De jobber her.",           en: "They work here." },
    { no: "Dere liker kaffe?",        en: "Do you (all) like coffee?" },
    { no: "Jeg vet ikke.",            en: "I don't know." },
  ],

  fillBlanks: [
    { template: "Jeg ___ Erik.", answer: "heter", hint: "am called" },
    { template: "Hun ___ fra Bergen.", answer: "er", hint: "is" },
    { template: "Vi ___ norsk.", answer: "snakker", hint: "speak" },
    { template: "De ___ i Oslo.", answer: "bor", hint: "live" },
    { template: "Han ___ kaffe.", answer: "drikker", hint: "drinks" },
    { template: "Jeg ___ ikke.", answer: "vet", hint: "know" },
  ],

  multiChoice: [
    { q: "Present tense of 'å jobbe' (to work)?", options: ["jobbet", "jobbe", "jobber", "jobb"], answer: 2 },
    { q: "How do you say 'she is'?", options: ["hun har", "hun er", "hun heter", "hun ser"], answer: 1 },
    { q: "What does 'de' mean?", options: ["you", "they", "we", "she"], answer: 1 },
    { q: "Present of 'å ha' (to have)?", options: ["haer", "haet", "har", "hav"], answer: 2 },
  ],

  extractHighlightIds: ["er", "heter", "har", "snakker", "joeg", "hun", "han", "vi", "de"],

  testQuestions: [
    { q: "Translate: 'I am'",            answer: "jeg er" },
    { q: "Translate: 'She speaks'",      answer: "hun snakker" },
    { q: "Translate: 'He lives'",        answer: "han bor" },
    { q: "Translate: 'We have'",         answer: "vi har" },
    { q: "Translate: 'They work'",       answer: "de jobber" },
    { q: "Translate: 'I know'",          answer: "jeg vet" },
    { q: "Translate: 'She eats'",        answer: "hun spiser" },
    { q: "What does -er do in norsk?",   answer: "marks present tense", accept: ["present tense", "present"] },
    { q: "Translate: 'you (plural)'",    answer: "dere" },
    { q: "Translate: 'I see'",           answer: "jeg ser" },
  ],
};
