/**
 * lesson-06.js — Ikke + Negation
 */
LESSONS_DATA[6] = {
  title: "Ikke og Nektelse",
  subtitle: "Ikke + Negation",
  color: "#c8e69e",
  vocab: [
    { id: "ikke",    no: "ikke",     en: "not",             note: "Main negation word" },
    { id: "ingen",   no: "ingen",    en: "no / none / nobody",note: "Used before nouns" },
    { id: "ingenting",no:"ingenting",en: "nothing" },
    { id: "aldri2",  no: "aldri",    en: "never",           note: "Also from L4" },
    { id: "hverken", no: "hverken...eller",en:"neither...nor" },
  ],
  grammar: [
    {
      title: "Placement of ikke",
      content: `<strong>Ikke</strong> goes after the finite verb in a main clause:

<em>Jeg snakker</em> norsk → Jeg snakker <strong>ikke</strong> norsk.
<em>Han er</em> glad → Han er <strong>ikke</strong> glad.

In a sub-clause (after fordi, når etc.), ikke comes BEFORE the verb:
<em>...fordi jeg ikke snakker norsk.</em>`,
    },
    {
      title: "Ingen vs. Ikke",
      content: `<strong>Ikke</strong> negates verbs and adjectives.
<strong>Ingen</strong> negates nouns (replaces the article):

Jeg har <strong>ikke</strong> en bil. → Jeg har <strong>ingen</strong> bil.
(I don't have a car. → I have no car.)

Both are correct — ingen is slightly more emphatic.`,
    },
  ],
  sentences: [
    { no: "Jeg snakker ikke norsk.",     en: "I don't speak Norwegian." },
    { no: "Han er ikke hjemme.",         en: "He is not home." },
    { no: "Vi har ingen penger.",        en: "We have no money." },
    { no: "Det er ingenting her.",       en: "There is nothing here." },
    { no: "Jeg er aldri sent.",          en: "I am never late." },
    { no: "Fordi jeg ikke vet.",         en: "Because I don't know." },
  ],
  fillBlanks: [
    { template: "Jeg snakker ___ norsk.", answer: "ikke",   hint: "not" },
    { template: "Vi har ___ penger.",     answer: "ingen",  hint: "no (before noun)" },
    { template: "Det er ___ her.",        answer: "ingenting", hint: "nothing" },
    { template: "Han er ___ trøtt.",      answer: "ikke",   hint: "not" },
    { template: "Jeg er ___ sent.",       answer: "aldri",  hint: "never" },
  ],
  multiChoice: [
    { q: "Where does 'ikke' go in a main clause?", options: ["Before verb", "After verb", "At end", "Before subject"], answer: 1 },
    { q: "'Vi har ingen bil' means:", options: ["We have a car", "We have no car", "We don't drive", "We need a car"], answer: 1 },
    { q: "'Ingenting' means:", options: ["nobody", "nowhere", "nothing", "never"], answer: 2 },
  ],
  extractHighlightIds: ["ikke", "ingen", "ingenting", "aldri2"],
  testQuestions: [
    { q: "Translate: 'I don't know'",        answer: "jeg vet ikke" },
    { q: "Translate: 'not'",                 answer: "ikke" },
    { q: "Translate: 'nothing'",             answer: "ingenting" },
    { q: "Translate: 'no money' (ingen)",    answer: "ingen penger" },
    { q: "Translate: 'He is not happy'",     answer: "han er ikke glad" },
    { q: "Where does ikke go in main clause?", answer: "after the verb", accept: ["after verb", "after finite verb"] },
    { q: "Translate: 'We have no car'",      answer: "vi har ingen bil" },
    { q: "Translate: 'never'",               answer: "aldri" },
    { q: "Translate: 'nobody'",              answer: "ingen" },
    { q: "In sub-clause, ikke goes?",        answer: "before the verb", accept: ["before verb"] },
  ],
};

/**
 * lesson-07.js — Numbers + Hvor gammel/mye/langt
 */
LESSONS_DATA[7] = {
  title: "Tall og Spørsmål",
  subtitle: "Numbers + Hvor gammel/mye/langt",
  color: "#c8e69e",
  vocab: [
    { id: "en2",    no: "én / ett",  en: "one (m/f / neuter)" },
    { id: "to",     no: "to",        en: "two" },
    { id: "tre",    no: "tre",       en: "three" },
    { id: "fire",   no: "fire",      en: "four" },
    { id: "fem",    no: "fem",       en: "five" },
    { id: "seks",   no: "seks",      en: "six" },
    { id: "syv",    no: "syv",       en: "seven" },
    { id: "aatte",  no: "åtte",      en: "eight" },
    { id: "ni",     no: "ni",        en: "nine" },
    { id: "ti",     no: "ti",        en: "ten" },
    { id: "tjue",   no: "tjue",      en: "twenty" },
    { id: "tretti", no: "tretti",    en: "thirty" },
    { id: "hundre", no: "hundre",    en: "hundred" },
    { id: "tusen2", no: "tusen",     en: "thousand" },
    { id: "alder",  no: "alder",     en: "age" },
    { id: "kr",     no: "kroner",    en: "kroner (NOK)" },
  ],
  grammar: [
    {
      title: "Counting to 20",
      content: `1–10: én/ett, to, tre, fire, fem, seks, syv, åtte, ni, ti
11–19: elleve, tolv, tretten, fjorten, femten, seksten, sytten, atten, nitten
20: tjue   30: tretti   40: førti   50: femti
100: hundre   1000: tusen

21 = tjueen, 22 = tjueto, 32 = trettito, etc. — combine directly.`,
    },
    {
      title: "én vs. ett",
      content: `"One" has two forms based on noun gender:
<strong>én</strong> = masculine/feminine: én mann, én bil
<strong>ett</strong> = neuter: ett hus, ett barn

In casual speech, "en" is often used for both.`,
    },
  ],
  sentences: [
    { no: "Jeg er tjue år gammel.",      en: "I am twenty years old." },
    { no: "Det koster femti kroner.",    en: "It costs fifty kroner." },
    { no: "Hvor gammel er du?",          en: "How old are you?" },
    { no: "Hvor mye koster boken?",      en: "How much does the book cost?" },
    { no: "Det er to hundre meter.",     en: "It is two hundred metres." },
  ],
  fillBlanks: [
    { template: "Jeg er ___ år gammel.", answer: "tjue",   hint: "20" },
    { template: "Det koster ___ kroner.", answer: "fem",   hint: "5" },
    { template: "Hvor ___ er du?",        answer: "gammel",hint: "old (age question)" },
  ],
  multiChoice: [
    { q: "What is 'åtte'?", options: ["6","7","8","9"], answer: 2 },
    { q: "Neuter form of 'one'?", options: ["en", "én", "ett", "ét"], answer: 2 },
    { q: "'Hvor mye koster det?' means:", options: ["How old is it?", "How far is it?", "How much does it cost?", "How many are there?"], answer: 2 },
  ],
  extractHighlightIds: ["to","tre","fire","fem","ti","hundre"],
  testQuestions: [
    { q: "Translate: 'five'",         answer: "fem" },
    { q: "Translate: 'eight'",        answer: "åtte", accept:["åtte","aatte"] },
    { q: "Translate: 'twenty'",       answer: "tjue" },
    { q: "Translate: 'hundred'",      answer: "hundre" },
    { q: "Translate: 'two'",          answer: "to" },
    { q: "Neuter form of 1?",         answer: "ett" },
    { q: "Translate: 'How old are you?'", answer: "hvor gammel er du" },
    { q: "Translate: 'How much does it cost?'", answer: "hvor mye koster det" },
    { q: "Translate: 'three'",        answer: "tre" },
    { q: "Translate: 'ten'",          answer: "ti" },
  ],
};

/**
 * lesson-08.js — Basic Prepositions: på, om, til, i
 */
LESSONS_DATA[8] = {
  title: "Grunnleggende Preposisjoner",
  subtitle: "på, om, til, i",
  color: "#c8e69e",
  vocab: [
    { id: "paa",  no: "på",  en: "on / at / in / by",     note: "Very versatile — context decides meaning" },
    { id: "om",   no: "om",  en: "about / in (time) / around", note: "om natten = at night; om to timer = in two hours" },
    { id: "til",  no: "til", en: "to / for / until" },
    { id: "i",    no: "i",   en: "in / for / at",         note: "i dag, i år, i Norge" },
    { id: "inn",  no: "inn", en: "into (movement in)",    note: "Direction INTO a space" },
    { id: "ut",   no: "ut",  en: "out (movement out)" },
  ],
  grammar: [
    {
      title: "på — the all-purpose surface word",
      content: `<strong>På</strong> = on, at, in, by — determined by context:
på bordet (on the table)
på jobb (at work)
på restaurant (at a restaurant)
på norsk (in Norwegian)
på stranden (at/on the beach)`,
    },
    {
      title: "i vs. på for locations",
      content: `Both can mean "in" but:
<strong>i</strong> = enclosed/interior spaces: i huset, i Norge, i boken
<strong>på</strong> = open/surface areas or institutions: på skolen, på universitetet, på gaten

This distinction is not always logical — learn common pairs as fixed phrases.`,
    },
    {
      title: "til — direction and purpose",
      content: `<strong>Til</strong> = to (destination or recipient):
Jeg går til skolen. (I go to school.)
Det er til deg. (It's for you.)
fra ... til ... (from ... to/until ...)`,
    },
    {
      title: "om — time and topics",
      content: `<strong>Om</strong> = about (topic): Vi snakker om filmen.
<strong>Om</strong> = in (future time): Vi ses om to dager. (See you in two days.)
<strong>Om</strong> = at (time of day): om morgenen (in the morning), om natten (at night).`,
    },
  ],
  sentences: [
    { no: "Boken er på bordet.",          en: "The book is on the table." },
    { no: "Jeg bor i Oslo.",              en: "I live in Oslo." },
    { no: "Vi snakker om filmen.",        en: "We talk about the film." },
    { no: "Han går til butikken.",        en: "He goes to the shop." },
    { no: "Jeg jobber på skolen.",        en: "I work at the school." },
    { no: "Vi sees om to dager.",         en: "See you in two days." },
  ],
  fillBlanks: [
    { template: "Boken er ___ bordet.",   answer: "på",  hint: "on" },
    { template: "Jeg bor ___ Norge.",     answer: "i",   hint: "in" },
    { template: "Han snakker ___ deg.",   answer: "om",  hint: "about" },
    { template: "Vi går ___ skolen.",     answer: "til", hint: "to" },
  ],
  multiChoice: [
    { q: "'Jeg jobber på skolen' means:", options: ["I study at school", "I work at the school", "I go to school", "I live near school"], answer: 1 },
    { q: "'Om to timer' means:", options: ["About two things", "In two hours", "At two o'clock", "For two days"], answer: 1 },
    { q: "Which preposition for 'in Norway'?", options: ["på", "til", "om", "i"], answer: 3 },
  ],
  extractHighlightIds: ["paa","om","til","i"],
  testQuestions: [
    { q: "Translate: 'on the table'",    answer: "på bordet" },
    { q: "Translate: 'in Norway'",       answer: "i norge", accept: ["i norge","i Norge"] },
    { q: "Translate: 'to the shop'",     answer: "til butikken" },
    { q: "Translate: 'about the film'",  answer: "om filmen" },
    { q: "Translate: 'at work'",         answer: "på jobb" },
    { q: "Translate: 'in two days'",     answer: "om to dager" },
    { q: "'i' is used for?",             answer: "enclosed spaces", accept: ["interior","enclosed","inside"] },
    { q: "Translate: 'for you'",         answer: "til deg" },
    { q: "Translate: 'in Norwegian'",    answer: "på norsk" },
    { q: "'til' means?",                 answer: "to", accept: ["to","for","until"] },
  ],
};

/**
 * lesson-09.js — Time Expressions
 */
LESSONS_DATA[9] = {
  title: "Tidsuttrykk",
  subtitle: "Time Expressions",
  color: "#c8e69e",
  vocab: [
    { id: "mandag",   no: "mandag",    en: "Monday" },
    { id: "tirsdag",  no: "tirsdag",   en: "Tuesday" },
    { id: "onsdag",   no: "onsdag",    en: "Wednesday" },
    { id: "torsdag",  no: "torsdag",   en: "Thursday" },
    { id: "fredag",   no: "fredag",    en: "Friday" },
    { id: "lordag",   no: "lørdag",    en: "Saturday" },
    { id: "sondag",   no: "søndag",    en: "Sunday" },
    { id: "morgen",   no: "morgen",    en: "morning / tomorrow", note: "Context tells you which" },
    { id: "imorgen",  no: "i morgen",  en: "tomorrow" },
    { id: "igaar",    no: "i går",     en: "yesterday" },
    { id: "neste",    no: "neste",     en: "next" },
    { id: "forrige",  no: "forrige",   en: "last / previous" },
    { id: "uke",      no: "uke",       en: "week" },
    { id: "maned",    no: "måned",     en: "month" },
    { id: "klokken",  no: "klokken",   en: "the clock / o'clock", note: "Klokken er tre = It is 3 o'clock" },
    { id: "halvt",    no: "halvt",     en: "half past",           note: "Halvt to = 1:30 (half TO two!)" },
  ],
  grammar: [
    {
      title: "Days of the week",
      content: `Monday = mandag · Tuesday = tirsdag · Wednesday = onsdag
Thursday = torsdag · Friday = fredag · Saturday = lørdag · Sunday = søndag

Days are lowercase in Norwegian. No article needed: <em>på mandag</em> (on Monday), <em>mandag ettermiddag</em> (Monday afternoon).`,
    },
    {
      title: "Telling the time",
      content: `Klokken er tre. = It is three o'clock.
Klokken er halv tre. = It is 2:30. (lit. half TO three)
Kvart over to = quarter past two
Kvart på tre = quarter to three
Ti over to = ten past two
Ti på tre = ten to three

Key difference: <strong>halvt/halv X</strong> means half-to-X, not half-past!`,
    },
  ],
  sentences: [
    { no: "I dag er det mandag.",         en: "Today is Monday." },
    { no: "Vi møtes på fredag.",          en: "We meet on Friday." },
    { no: "I morgen er det lørdag.",      en: "Tomorrow is Saturday." },
    { no: "Klokken er halv to.",          en: "It is 1:30." },
    { no: "Neste uke jobber jeg.",        en: "Next week I work." },
    { no: "I går regnet det.",            en: "Yesterday it rained." },
  ],
  fillBlanks: [
    { template: "I dag er det ___.", answer: "mandag", hint: "Monday" },
    { template: "Vi møtes på ___.", answer: "fredag",  hint: "Friday" },
    { template: "Klokken er halv ___.", answer: "to",  hint: "half past one" },
    { template: "___ uke jobber jeg.", answer: "neste", hint: "next" },
  ],
  multiChoice: [
    { q: "'Halvt to' in Norwegian time means:", options: ["2:30","1:30","2:00","1:00"], answer: 1 },
    { q: "What is 'yesterday' in Norwegian?", options: ["i morgen","i dag","i går","i fjor"], answer: 2 },
    { q: "Which day is 'onsdag'?", options: ["Tuesday","Wednesday","Thursday","Friday"], answer: 1 },
  ],
  extractHighlightIds: ["mandag","fredag","sondag","imorgen","igaar","klokken"],
  testQuestions: [
    { q: "Translate: 'Monday'",         answer: "mandag" },
    { q: "Translate: 'Friday'",         answer: "fredag" },
    { q: "Translate: 'Sunday'",         answer: "søndag", accept:["søndag","sondag"] },
    { q: "Translate: 'tomorrow'",       answer: "i morgen" },
    { q: "Translate: 'yesterday'",      answer: "i går", accept:["i går","i gar"] },
    { q: "What does 'halvt to' mean?",  answer: "1:30", accept:["half past one","1:30","half to two"] },
    { q: "Translate: 'next week'",      answer: "neste uke" },
    { q: "Translate: 'the clock'",      answer: "klokken" },
    { q: "Translate: 'week'",           answer: "uke" },
    { q: "Translate: 'Wednesday'",      answer: "onsdag" },
  ],
};

/**
 * lesson-10.js — Plural Nouns
 */
LESSONS_DATA[10] = {
  title: "Flertall",
  subtitle: "Plural Nouns",
  color: "#c8e69e",
  vocab: [
    { id: "biler",   no: "biler",    en: "cars",    note: "en bil → biler" },
    { id: "huser",   no: "hus",      en: "houses",  note: "et hus → hus (no change!)" },
    { id: "boker",   no: "bøker",    en: "books",   note: "ei bok → bøker (vowel change)" },
    { id: "menn",    no: "menn",     en: "men",     note: "en mann → menn" },
    { id: "barn2",   no: "barn",     en: "children",note: "et barn → barn (no change)" },
    { id: "dager",   no: "dager",    en: "days" },
    { id: "aar",     no: "år",       en: "years",   note: "et år → år (no change)" },
    { id: "gutter",  no: "gutter",   en: "boys" },
    { id: "jenter",  no: "jenter",   en: "girls" },
  ],
  grammar: [
    {
      title: "Plural patterns",
      content: `Most regular masculine nouns: add <strong>-er</strong>
en bil → bil<strong>er</strong>   en dag → dag<strong>er</strong>

Many feminine nouns: add <strong>-er</strong> (with vowel change sometimes)
ei bok → bøk<strong>er</strong>   ei jente → jent<strong>er</strong>

Neuter nouns ending in consonant: NO CHANGE
et hus → hus   et barn → barn   et år → år

Short neuter nouns ending in vowel: add <strong>-r</strong>
et eple → epler`,
    },
    {
      title: "Definite plural: -ene / -ene / -a",
      content: `The definite plural suffix varies by noun class:

Masculine/feminine: add <strong>-ene</strong>
bilene (the cars), jentene (the girls)

Neuter: add <strong>-ene</strong> OR <strong>-a</strong>
husene / husa (the houses) — both acceptable
barnet → barnene / barna`,
    },
  ],
  sentences: [
    { no: "Det er mange biler her.",     en: "There are many cars here." },
    { no: "Barna leker ute.",            en: "The children are playing outside." },
    { no: "Husene er store.",            en: "The houses are big." },
    { no: "Guttene spiller fotball.",    en: "The boys play football." },
    { no: "Vi har tre bøker.",           en: "We have three books." },
  ],
  fillBlanks: [
    { template: "Det er mange ___.", answer: "biler",  hint: "cars (plural of bil)" },
    { template: "___ leker ute.",    answer: "barna",  hint: "the children" },
    { template: "Vi har tre ___.",   answer: "bøker",  hint: "books (plural of bok)" },
  ],
  multiChoice: [
    { q: "Plural of 'et barn'?", options: ["barner","barn","barne","barnene"], answer: 1 },
    { q: "Definite plural of 'bil' (cars)?", options: ["bils","bilene","biler","bilet"], answer: 1 },
    { q: "Plural of 'ei bok'?", options: ["boks","boker","bøker","bøkene"], answer: 2 },
  ],
  extractHighlightIds: ["biler","boker","barn2","dager","aar"],
  testQuestions: [
    { q: "Plural of 'en bil'?",       answer: "biler" },
    { q: "Plural of 'et hus'?",       answer: "hus" },
    { q: "Plural of 'et barn'?",      answer: "barn" },
    { q: "Plural of 'ei bok'?",       answer: "bøker", accept:["bøker","boker"] },
    { q: "Definite plural of 'biler'?", answer: "bilene" },
    { q: "Definite plural of 'barn'?",  answer: "barnene", accept:["barnene","barna"] },
    { q: "Most regular masc. plural?",  answer: "-er", accept:["-er","er"] },
    { q: "Plural of 'en dag'?",       answer: "dager" },
    { q: "Translate: 'the boys'",     answer: "guttene" },
    { q: "Translate: 'years' (plural)", answer: "år" },
  ],
};
