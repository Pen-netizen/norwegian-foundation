/**
 * lesson-03.js — Noun Gender: en/ei/et
 */
LESSONS_DATA[3] = {
  title: "Substantivkjønn",
  subtitle: "Noun Gender — en/ei/et",
  color: "#c8e69e",
  vocab: [
    { id: "en",       no: "en",      en: "a/an (masculine)",  note: "Most common article" },
    { id: "ei",       no: "ei",      en: "a/an (feminine)",   note: "Many writers use 'en' for these too" },
    { id: "et",       no: "et",      en: "a/an (neuter)",     note: "About 25% of nouns" },
    { id: "mann",     no: "en mann", en: "a man" },
    { id: "gutt",     no: "en gutt", en: "a boy" },
    { id: "dame",     no: "en dame", en: "a lady / woman" },
    { id: "jente",    no: "ei jente",en: "a girl",            note: "Feminine, though 'en jente' also accepted" },
    { id: "bok",      no: "ei bok",  en: "a book" },
    { id: "hus",      no: "et hus",  en: "a house" },
    { id: "barn",     no: "et barn", en: "a child" },
    { id: "land",     no: "et land", en: "a country" },
    { id: "mannen",   no: "mannen",  en: "the man",           note: "Definite: add -en/-a/-et" },
    { id: "jenta",    no: "jenta",   en: "the girl",          note: "Feminine definite: -a" },
    { id: "huset",    no: "huset",   en: "the house",         note: "Neuter definite: -et" },
  ],
  grammar: [
    {
      title: "Three genders in Norwegian",
      content: `Norwegian has three noun genders. The article before a noun tells you which:

<strong>en</strong> = masculine  (en mann, en bil, en dag)
<strong>ei</strong> = feminine   (ei jente, ei bok, ei klokke)
<strong>et</strong> = neuter     (et hus, et barn, et land)

In Bokmål, feminine nouns can usually also take <strong>en</strong> — both "en bok" and "ei bok" are correct. Many learners start with just en/et.`,
    },
    {
      title: "Definite form: the -en/-a/-et suffix",
      content: `To say "the X" in Norwegian, you attach the article to the END of the noun — there is no separate "the" word:

en mann → mann<strong>en</strong>  (the man)
ei jente → jent<strong>a</strong>  (the girl)
et hus  → hus<strong>et</strong>   (the house)

This attached article changes based on gender. Neuter words ending in unstressed -e: just add -t.`,
    },
  ],
  sentences: [
    { no: "Det er et hus.",       en: "That is a house." },
    { no: "Mannen heter Petter.", en: "The man is called Petter." },
    { no: "Jenta er glad.",       en: "The girl is happy." },
    { no: "Huset er stort.",      en: "The house is big." },
    { no: "Barnet sover.",        en: "The child is sleeping." },
  ],
  fillBlanks: [
    { template: "___ hus er stort.", answer: "et", hint: "neuter article" },
    { template: "___ mann sitter.", answer: "en", hint: "masculine article" },
    { template: "Mann___  heter Lars.", answer: "en", hint: "definite suffix for masculine" },
    { template: "Hus___ er gammelt.", answer: "et", hint: "definite neuter suffix" },
    { template: "___ jente leser.", answer: "ei", hint: "feminine article (or 'en')" },
  ],
  multiChoice: [
    { q: "What is the definite suffix for neuter nouns?", options: ["-en", "-a", "-et", "-er"], answer: 2 },
    { q: "Which article is used for most Norwegian nouns?", options: ["ei", "et", "de", "en"], answer: 3 },
    { q: "'Huset' means:", options: ["a house", "the house", "houses", "the houses"], answer: 1 },
    { q: "Feminine definite suffix?", options: ["-en", "-a", "-et", "-ne"], answer: 1 },
  ],
  extractHighlightIds: ["en", "et", "mann", "hus", "barn"],
  testQuestions: [
    { q: "Article for masculine nouns?",     answer: "en" },
    { q: "Article for neuter nouns?",        answer: "et" },
    { q: "Definite form of 'et hus'?",       answer: "huset" },
    { q: "Definite form of 'en mann'?",      answer: "mannen" },
    { q: "Definite form of 'ei jente'?",     answer: "jenta" },
    { q: "Translate: 'a child'",             answer: "et barn" },
    { q: "Translate: 'the child'",           answer: "barnet" },
    { q: "Translate: 'a book'",              answer: "ei bok", accept: ["ei bok","en bok"] },
    { q: "Translate: 'a country'",           answer: "et land" },
    { q: "What does attaching -et/-en/-a do?", answer: "makes it definite", accept: ["definite", "adds the"] },
  ],
};

/**
 * lesson-04.js — Sentence Structure: SVO, V2, Inversion
 */
LESSONS_DATA[4] = {
  title: "Setningsstruktur",
  subtitle: "Sentence Structure — SVO, V2 rule, Inversion",
  color: "#c8e69e",
  vocab: [
    { id: "subjekt",   no: "subjekt",   en: "subject" },
    { id: "verb2",     no: "V2-regelen",en: "the V2 rule",   note: "Verb always 2nd in main clause" },
    { id: "idag",      no: "i dag",     en: "today" },
    { id: "naa",       no: "nå",        en: "now" },
    { id: "alltid",    no: "alltid",    en: "always" },
    { id: "aldri",     no: "aldri",     en: "never" },
    { id: "ofte",      no: "ofte",      en: "often" },
    { id: "kanskje",   no: "kanskje",   en: "maybe / perhaps" },
    { id: "ogsaa",     no: "også",      en: "also / too" },
    { id: "bare",      no: "bare",      en: "just / only" },
  ],
  grammar: [
    {
      title: "SVO — the default order",
      content: `Norwegian default word order mirrors English:
<strong>Subject → Verb → Object</strong>

<em>Jeg spiser et eple.</em> (I eat an apple.)
<em>Hun leser boken.</em> (She reads the book.)`,
    },
    {
      title: "The V2 Rule — verb must be second",
      content: `This is the most important rule in Norwegian grammar: <strong>the finite verb must always be the second element</strong> in a main clause.

If you move an adverb or time expression to the front, the subject and verb SWAP (inversion):

Normal: <em>Jeg spiser i dag.</em>
Inverted: <em>I dag spiser jeg.</em>  ← verb still 2nd!

The element in position 1 can be anything — time, place, object — but the verb stays glued to position 2.`,
    },
    {
      title: "Inversion after adverbs",
      content: `Common triggers for inversion:
<em>Nå</em> jobber han. (Now he works.)
<em>Kanskje</em> er hun glad. (Maybe she is happy.)
<em>I dag</em> kommer de. (Today they are coming.)

In sub-clauses (after fordi, når, hvis...) inversion does NOT apply — that comes in Lesson 17.`,
    },
  ],
  sentences: [
    { no: "Jeg spiser frokost.",           en: "I eat breakfast." },
    { no: "I dag spiser jeg frokost.",     en: "Today I eat breakfast." },
    { no: "Nå jobber hun.",                en: "Now she works." },
    { no: "Kanskje kommer han i morgen.", en: "Maybe he comes tomorrow." },
    { no: "Alltid er kaffen varm.",        en: "The coffee is always warm." },
  ],
  fillBlanks: [
    { template: "I dag ___ jeg norsk.", answer: "snakker", hint: "The verb must come second" },
    { template: "Kanskje ___ hun glad.", answer: "er", hint: "V2: verb after 'kanskje'" },
    { template: "Nå ___ de.", answer: "jobber", hint: "Subject inverts after 'nå'" },
  ],
  multiChoice: [
    { q: "In 'I dag spiser jeg', what position is the verb?", options: ["1st", "2nd", "3rd", "last"], answer: 1 },
    { q: "Which word means 'never'?", options: ["alltid", "aldri", "ofte", "bare"], answer: 1 },
    { q: "What is the V2 rule?", options: ["Verb is always first", "Verb is always second", "Subject is always first", "Object is always last"], answer: 1 },
  ],
  extractHighlightIds: ["idag", "naa", "alltid", "aldri", "ofte", "kanskje", "ogsaa", "bare"],
  testQuestions: [
    { q: "What does the V2 rule say?",        answer: "verb must be second", accept: ["verb second", "verb is always second", "second position"] },
    { q: "Reorder: 'jeg / i dag / spiser'",   answer: "i dag spiser jeg" },
    { q: "Translate: 'always'",               answer: "alltid" },
    { q: "Translate: 'never'",                answer: "aldri" },
    { q: "Translate: 'maybe'",                answer: "kanskje" },
    { q: "Translate: 'now'",                  answer: "nå", accept: ["nå", "na"] },
    { q: "Translate: 'also'",                 answer: "også", accept: ["også", "ogsa"] },
    { q: "Translate: 'often'",                answer: "ofte" },
    { q: "Translate: 'today'",                answer: "i dag" },
    { q: "Translate: 'just / only'",          answer: "bare" },
  ],
};

/**
 * lesson-05.js — Question Words
 */
LESSONS_DATA[5] = {
  title: "Spørreord",
  subtitle: "Question Words",
  color: "#c8e69e",
  vocab: [
    { id: "hva",      no: "Hva",      en: "What" },
    { id: "hvor",     no: "Hvor",     en: "Where / How (in compounds)" },
    { id: "hvordan",  no: "Hvordan",  en: "How" },
    { id: "hvem",     no: "Hvem",     en: "Who" },
    { id: "hvilken",  no: "Hvilken",  en: "Which (masc/fem)",  note: "Hvilket for neuter, hvilke for plural" },
    { id: "hvilket",  no: "Hvilket",  en: "Which (neuter)" },
    { id: "hvorfor",  no: "Hvorfor",  en: "Why" },
    { id: "naar",     no: "Når",      en: "When" },
    { id: "hvormye",  no: "Hvor mye", en: "How much" },
    { id: "hvormange",no: "Hvor mange",en:"How many" },
    { id: "hvorgammel",no:"Hvor gammel",en:"How old" },
    { id: "hvorlangt",no: "Hvor langt",en:"How far" },
  ],
  grammar: [
    {
      title: "Question words trigger V2",
      content: `When a question starts with a question word, the V2 rule still applies:
Question word (pos 1) → verb (pos 2) → subject (pos 3)...

<em>Hva heter du?</em> (What are you called?)
<em>Hvor bor han?</em> (Where does he live?)
<em>Hvorfor er du sen?</em> (Why are you late?)`,
    },
    {
      title: "Hvor compounds",
      content: `<strong>Hvor</strong> alone = "where". Combined with adjectives it makes "how + adj":

Hvor gammel = How old
Hvor mye = How much
Hvor mange = How many
Hvor langt = How far
Hvor lenge = How long (duration)`,
    },
    {
      title: "Hvilken / Hvilket / Hvilke",
      content: `"Which" agrees with the noun it modifies:
<strong>Hvilken</strong> bil? (which car? — masculine)
<strong>Hvilket</strong> hus? (which house? — neuter)
<strong>Hvilke</strong> biler? (which cars? — plural)`,
    },
  ],
  sentences: [
    { no: "Hva heter du?",             en: "What is your name?" },
    { no: "Hvor bor du?",              en: "Where do you live?" },
    { no: "Hvordan har du det?",       en: "How are you?" },
    { no: "Hvem er det?",              en: "Who is that?" },
    { no: "Hvorfor er du trøtt?",      en: "Why are you tired?" },
    { no: "Når kommer toget?",         en: "When does the train come?" },
    { no: "Hvor gammel er du?",        en: "How old are you?" },
    { no: "Hvor mye koster det?",      en: "How much does it cost?" },
  ],
  fillBlanks: [
    { template: "___ heter du?",       answer: "Hva",     hint: "What" },
    { template: "___ bor han?",        answer: "Hvor",    hint: "Where" },
    { template: "___ gammel er du?",   answer: "Hvor",    hint: "How (old)" },
    { template: "___ er du trist?",    answer: "Hvorfor", hint: "Why" },
    { template: "___ kommer du?",      answer: "Når",     hint: "When" },
    { template: "___ mye koster det?", answer: "Hvor",    hint: "How much" },
  ],
  multiChoice: [
    { q: "How do you say 'How old are you?'", options: ["Hva gammel er du?", "Hvor gammel er du?", "Hvordan gammel er du?", "Hvem gammel er du?"], answer: 1 },
    { q: "Which question word means 'why'?", options: ["Hvem", "Hvor", "Hvorfor", "Hva"], answer: 2 },
    { q: "Which is used for 'which house?' (neuter)?", options: ["Hvilken", "Hvilke", "Hvilket", "Hvem"], answer: 2 },
  ],
  extractHighlightIds: ["hva", "hvor", "hvordan", "hvem", "hvorfor", "naar"],
  testQuestions: [
    { q: "Translate: 'What'",        answer: "hva" },
    { q: "Translate: 'Where'",       answer: "hvor" },
    { q: "Translate: 'How'",         answer: "hvordan" },
    { q: "Translate: 'Who'",         answer: "hvem" },
    { q: "Translate: 'Why'",         answer: "hvorfor" },
    { q: "Translate: 'When'",        answer: "når", accept: ["når","nar"] },
    { q: "Translate: 'How much'",    answer: "hvor mye" },
    { q: "Translate: 'How many'",    answer: "hvor mange" },
    { q: "Translate: 'How old'",     answer: "hvor gammel" },
    { q: "Hva heter du? = ?",        answer: "what is your name", accept: ["what are you called","what is your name"] },
  ],
};
