/**
 * lesson-11.js — Modal Verbs
 */
LESSONS_DATA[11] = {
  title: "Modale Hjelpeverb",
  subtitle: "vil, kan, må, skal, bør",
  color: "#85ec57",
  vocab: [
    { id: "vil2",  no: "vil",  en: "want to / will",  note: "Desire or future intent" },
    { id: "kan",   no: "kan",  en: "can / be able to",note: "Ability or permission" },
    { id: "maa",   no: "må",   en: "must / have to",  note: "Obligation or strong necessity" },
    { id: "skal",  no: "skal", en: "shall / will / going to", note: "Plan, intention, future" },
    { id: "bor2",  no: "bør",  en: "should / ought to", note: "Recommendation" },
    { id: "tore",  no: "tør",  en: "dare to" },
    { id: "trenge",no: "trenger",en:"need to (present)" },
  ],
  grammar: [
    {
      title: "Modal verbs + infinitive",
      content: `Norwegian modals are followed by the <strong>bare infinitive</strong> (no 'å'):

Jeg <strong>vil</strong> reise. (I want to travel.)
Du <strong>kan</strong> hjelpe. (You can help.)
Vi <strong>må</strong> dra. (We must leave.)
Han <strong>skal</strong> komme. (He will/is going to come.)
Du <strong>bør</strong> sove. (You should sleep.)`,
    },
    {
      title: "Skal vs. Vil",
      content: `Both can express future, but:
<strong>Skal</strong> = planned, scheduled, committed future: Jeg skal møte ham i morgen.
<strong>Vil</strong> = desire-based or spontaneous future: Jeg vil ha kaffe.

When in doubt about future tense, <strong>skal</strong> is the safer choice.`,
    },
  ],
  sentences: [
    { no: "Jeg vil lære norsk.",          en: "I want to learn Norwegian." },
    { no: "Kan du hjelpe meg?",           en: "Can you help me?" },
    { no: "Du må sove mer.",              en: "You must sleep more." },
    { no: "Han skal reise i morgen.",     en: "He is going to travel tomorrow." },
    { no: "Du bør spise frokost.",        en: "You should eat breakfast." },
    { no: "Vi kan ikke komme.",           en: "We can't come." },
  ],
  fillBlanks: [
    { template: "Jeg ___ lære norsk.",    answer: "vil",  hint: "want to" },
    { template: "___ du hjelpe meg?",     answer: "kan",  hint: "can" },
    { template: "Du ___ sove mer.",       answer: "må",   hint: "must" },
    { template: "Vi ___ dra nå.",         answer: "skal", hint: "are going to" },
    { template: "Du ___ spise.",          answer: "bør",  hint: "should" },
  ],
  multiChoice: [
    { q: "Which modal expresses 'ought to'?", options: ["vil","kan","skal","bør"], answer: 3 },
    { q: "Modals are followed by?", options: ["å + infinitive","bare infinitive","past tense","present tense"], answer: 1 },
    { q: "'Kan du snakke saktere?' means:", options: ["You can speak slowly","Can you speak more slowly?","You should speak slowly","Do you want to speak?"], answer: 1 },
  ],
  extractHighlightIds: ["vil2","kan","maa","skal","bor2"],
  testQuestions: [
    { q: "Translate: 'can'",           answer: "kan" },
    { q: "Translate: 'must / have to'",answer: "må", accept:["må","maa"] },
    { q: "Translate: 'want to'",       answer: "vil" },
    { q: "Translate: 'should'",        answer: "bør", accept:["bør","bor"] },
    { q: "Translate: 'will / going to'",answer:"skal" },
    { q: "Modals + ?",                 answer: "bare infinitive", accept:["infinitive","bare infinitive","no å"] },
    { q: "Translate: 'I want to travel'", answer: "jeg vil reise" },
    { q: "Translate: 'Can you help?'", answer: "kan du hjelpe" },
    { q: "Translate: 'We must leave'", answer: "vi må dra" },
    { q: "'Skal' expresses?",          answer: "planned future", accept:["future","plan","going to"] },
  ],
};

/**
 * lesson-12.js — Infinitive Constructions
 */
LESSONS_DATA[12] = {
  title: "Infinitivskonstruksjoner",
  subtitle: "Infinitive Constructions",
  color: "#85ec57",
  vocab: [
    { id: "aa",       no: "å",        en: "to (infinitive marker)" },
    { id: "aagjore",  no: "å gjøre",  en: "to do" },
    { id: "aagaa",    no: "å gå",     en: "to walk / go" },
    { id: "aakjope",  no: "å kjøpe",  en: "to buy" },
    { id: "aalese",   no: "å lese",   en: "to read" },
    { id: "aaskrive", no: "å skrive", en: "to write" },
    { id: "aaprove",  no: "å prøve",  en: "to try" },
    { id: "aahjelpe", no: "å hjelpe", en: "to help" },
    { id: "lystpaa",  no: "lyst på",  en: "feel like (something)" },
    { id: "lystaa",   no: "lyst til å",en:"feel like doing" },
    { id: "gladfor",  no: "glad for å",en:"glad to" },
    { id: "lett",     no: "lett å",   en: "easy to" },
    { id: "viktig",   no: "viktig å", en: "important to" },
  ],
  grammar: [
    {
      title: "When to use å",
      content: `The infinitive marker <strong>å</strong> (to) is used:
• After adjectives: Det er lett <strong>å</strong> lære. (easy to learn)
• After nouns: Tid <strong>å</strong> sove. (time to sleep)
• After lyst: Jeg har lyst <strong>til å</strong> spise. (I feel like eating)
• Stand-alone infinitive phrases

But NOT after modal verbs (L11) — they take bare infinitive.`,
    },
    {
      title: "Verbs of wanting/managing",
      content: `Some verbs always take å + infinitive as their complement:
<strong>prøve å</strong> (try to): Jeg prøver å forstå.
<strong>begynne å</strong> (begin to): Det begynner å regne.
<strong>glemme å</strong> (forget to): Ikke glem å ringe!
<strong>klare å</strong> (manage to): Klarer du å komme?`,
    },
  ],
  sentences: [
    { no: "Det er viktig å sove.",        en: "It is important to sleep." },
    { no: "Jeg prøver å lære norsk.",     en: "I am trying to learn Norwegian." },
    { no: "Hun glemte å ringe.",          en: "She forgot to call." },
    { no: "Har du lyst til å gå?",        en: "Do you feel like going?" },
    { no: "Det er lett å glemme.",        en: "It is easy to forget." },
  ],
  fillBlanks: [
    { template: "Det er viktig ___ sove.", answer: "å",     hint: "to" },
    { template: "Jeg prøver ___ lære.",   answer: "å",     hint: "infinitive marker" },
    { template: "Hun glemte ___ ringe.",  answer: "å",     hint: "to" },
    { template: "Jeg ___ lyst til å gå.", answer: "har",   hint: "have" },
  ],
  multiChoice: [
    { q: "After which do you NOT use 'å'?", options: ["adjectives","modal verbs","nouns","'lyst til'"], answer: 1 },
    { q: "'Klare å' means:", options: ["want to","must","manage to","try to"], answer: 2 },
    { q: "'Jeg prøver å forstå' means:", options: ["I forgot to understand","I try to understand","I managed to understand","I want to understand"], answer: 1 },
  ],
  extractHighlightIds: ["aa","aagjore","aagaa","aaprove","lett","viktig"],
  testQuestions: [
    { q: "Translate: 'to do'",           answer: "å gjøre", accept:["å gjøre","a gjore"] },
    { q: "Translate: 'to walk'",         answer: "å gå",    accept:["å gå","a ga"] },
    { q: "Translate: 'to try'",          answer: "å prøve", accept:["å prøve","a prove"] },
    { q: "Translate: 'to read'",         answer: "å lese" },
    { q: "Translate: 'to write'",        answer: "å skrive" },
    { q: "Translate: 'It is easy to'",   answer: "det er lett å" },
    { q: "'Å' is used after modal verbs?", answer: "no", accept:["no","false"] },
    { q: "Translate: 'I am trying to learn'", answer: "jeg prøver å lære" },
    { q: "Translate: 'feel like doing'", answer: "lyst til å" },
    { q: "Translate: 'important to'",    answer: "viktig å" },
  ],
};

/**
 * lesson-13.js — More Prepositions: ved, hos, fra, med
 */
LESSONS_DATA[13] = {
  title: "Flere Preposisjoner",
  subtitle: "ved, hos, fra, med",
  color: "#85ec57",
  vocab: [
    { id: "ved",   no: "ved",  en: "by / near / at",       note: "ved siden av = next to" },
    { id: "hos",   no: "hos",  en: "at someone's place / with (person)", note: "Unique to Scandinavian" },
    { id: "fra",   no: "fra",  en: "from" },
    { id: "med",   no: "med",  en: "with" },
    { id: "uten",  no: "uten", en: "without" },
    { id: "mot",   no: "mot",  en: "towards / against" },
    { id: "mellom",no: "mellom",en:"between" },
    { id: "bak",   no: "bak",  en: "behind" },
    { id: "foran", no: "foran",en: "in front of" },
    { id: "over",  no: "over", en: "over / above" },
    { id: "under", no: "under",en: "under / below" },
  ],
  grammar: [
    {
      title: "hos — the Scandinavian preposition",
      content: `<strong>Hos</strong> has no direct English equivalent. It means "at someone's place" or "with" for persons:

Jeg er hos legen. (I am at the doctor's.)
Vi sitter hos henne. (We are sitting at her place.)
Hos oss = at our place / in our family`,
    },
    {
      title: "fra vs. av",
      content: `<strong>Fra</strong> = from (origin, source): Jeg er fra Norge. / Det er en gave fra henne.
<strong>Av</strong> = of, made of, by: Det er laget av tre. (It is made of wood.) / en dikt av Hamsun.`,
    },
  ],
  sentences: [
    { no: "Jeg er fra Bergen.",              en: "I am from Bergen." },
    { no: "Hun bor ved stranden.",           en: "She lives by the beach." },
    { no: "Vi sitter hos dem.",              en: "We are sitting at their place." },
    { no: "Han går med hunden.",             en: "He walks with the dog." },
    { no: "Katten er under bordet.",         en: "The cat is under the table." },
    { no: "Stolen er ved siden av vinduet.", en: "The chair is next to the window." },
  ],
  fillBlanks: [
    { template: "Jeg er ___ Bergen.",       answer: "fra",  hint: "from" },
    { template: "Hun bor ___ stranden.",    answer: "ved",  hint: "by" },
    { template: "Han går ___ hunden.",      answer: "med",  hint: "with" },
    { template: "Katten er ___ bordet.",    answer: "under",hint: "under" },
  ],
  multiChoice: [
    { q: "'Hos legen' means:", options: ["from the doctor","without the doctor","at the doctor's","towards the doctor"], answer: 2 },
    { q: "'Mellom' means:", options: ["behind","in front of","between","over"], answer: 2 },
    { q: "'Jeg er fra Oslo' means:", options: ["I go to Oslo","I live in Oslo","I am from Oslo","I am near Oslo"], answer: 2 },
  ],
  extractHighlightIds: ["ved","hos","fra","med","uten","mellom","bak","foran"],
  testQuestions: [
    { q: "Translate: 'from'",         answer: "fra" },
    { q: "Translate: 'with'",         answer: "med" },
    { q: "Translate: 'without'",      answer: "uten" },
    { q: "Translate: 'between'",      answer: "mellom" },
    { q: "Translate: 'behind'",       answer: "bak" },
    { q: "Translate: 'in front of'",  answer: "foran" },
    { q: "Translate: 'under'",        answer: "under" },
    { q: "Translate: 'by / near'",    answer: "ved" },
    { q: "'Hos' means?",              answer: "at someone's place", accept:["at someone's","with a person","hos"] },
    { q: "Translate: 'I am from Norway'", answer: "jeg er fra norge", accept:["jeg er fra norge","jeg er fra Norge"] },
  ],
};

/**
 * lesson-14.js — Adjective Agreement
 */
LESSONS_DATA[14] = {
  title: "Adjektivbøyning",
  subtitle: "Adjective Agreement",
  color: "#85ec57",
  vocab: [
    { id: "stor",   no: "stor",    en: "big (masc/fem)",      note: "→ stort (neuter), store (def/pl)" },
    { id: "liten",  no: "liten",   en: "small (masc/fem)",    note: "→ lite (neuter), lille/små" },
    { id: "gammel", no: "gammel",  en: "old (masc/fem)",      note: "→ gammelt, gamle" },
    { id: "ny",     no: "ny",      en: "new (masc/fem)",      note: "→ nytt, nye" },
    { id: "god2",   no: "god",     en: "good (masc/fem)",     note: "→ godt, gode" },
    { id: "kald",   no: "kald",    en: "cold",                note: "→ kaldt, kalde" },
    { id: "varm",   no: "varm",    en: "warm",                note: "→ varmt, varme" },
    { id: "lang",   no: "lang",    en: "long / tall",         note: "→ langt, lange" },
    { id: "kort",   no: "kort",    en: "short",               note: "→ kort, korte" },
    { id: "fin",    no: "fin",     en: "nice / fine" },
    { id: "billig", no: "billig",  en: "cheap" },
    { id: "dyr",    no: "dyr",     en: "expensive" },
  ],
  grammar: [
    {
      title: "Adjective agreement in Norwegian",
      content: `Adjectives agree with the noun they modify in gender and number:

<strong>Indefinite:</strong>
en stor bil (masc) · et stort hus (neuter) · en stor jente (fem)

<strong>Definite and plural:</strong> add <strong>-e</strong>
den store bilen · det store huset · de store bilene

Rule of thumb: indefinite neuter = add <strong>-t</strong>. Definite/plural = add <strong>-e</strong>.`,
    },
    {
      title: "Predicate position",
      content: `When the adjective follows 'er' (is), it still agrees with the subject:

Bilen er stor. (The car is big.)
Huset er stort. (The house is big.) ← neuter -t
Bilene er store. (The cars are big.) ← plural -e`,
    },
  ],
  sentences: [
    { no: "Det er et stort hus.",          en: "It is a big house." },
    { no: "Den gamle mannen sitter.",      en: "The old man is sitting." },
    { no: "Bilen er ny.",                  en: "The car is new." },
    { no: "Det er kaldt i dag.",           en: "It is cold today." },
    { no: "Hun har en fin hund.",          en: "She has a nice dog." },
    { no: "De store husene er dyre.",      en: "The big houses are expensive." },
  ],
  fillBlanks: [
    { template: "Det er et ___ hus.",      answer: "stort",  hint: "big (neuter)" },
    { template: "Den ___ mannen sitter.",  answer: "gamle",  hint: "old (definite)" },
    { template: "Det er ___ i dag.",       answer: "kaldt",  hint: "cold (neuter predicate)" },
    { template: "Hun har en ___ bil.",     answer: "ny",     hint: "new (masc indefinite)" },
  ],
  multiChoice: [
    { q: "Neuter form of 'stor'?", options: ["store","stor","stort","storts"], answer: 2 },
    { q: "'Den gamle bilen' uses -e because:", options: ["it's plural","it's neuter","it's definite","it's feminine"], answer: 2 },
    { q: "Plural form of 'god'?", options: ["godt","god","gode","gods"], answer: 2 },
  ],
  extractHighlightIds: ["stor","liten","gammel","ny","god2","kald","varm"],
  testQuestions: [
    { q: "Neuter of 'stor'?",         answer: "stort" },
    { q: "Definite/plural of 'stor'?",answer: "store" },
    { q: "Neuter of 'god'?",          answer: "godt" },
    { q: "Neuter of 'ny'?",           answer: "nytt" },
    { q: "Translate: 'big house' (neuter indef.)", answer: "et stort hus" },
    { q: "Translate: 'It is cold'",   answer: "det er kaldt" },
    { q: "Translate: 'the old man'",  answer: "den gamle mannen" },
    { q: "Translate: 'expensive'",    answer: "dyr" },
    { q: "Translate: 'cheap'",        answer: "billig" },
    { q: "Adjective after 'er' with neuter subject gets?", answer: "-t", accept:["-t","t"] },
  ],
};

/**
 * lesson-15.js — Possessives
 */
LESSONS_DATA[15] = {
  title: "Possessiver",
  subtitle: "Possessives",
  color: "#85ec57",
  vocab: [
    { id: "min",   no: "min",   en: "my (masc/fem)",     note: "→ mitt (neuter), mine (plural)" },
    { id: "mitt",  no: "mitt",  en: "my (neuter)" },
    { id: "mine",  no: "mine",  en: "my (plural)" },
    { id: "din",   no: "din",   en: "your (masc/fem)",   note: "→ ditt, dine" },
    { id: "hans",  no: "hans",  en: "his" },
    { id: "hennes",no: "hennes",en: "her" },
    { id: "var",   no: "vår",   en: "our (masc/fem)",    note: "→ vårt, våre" },
    { id: "deres2",no: "deres", en: "your (pl.) / their"},
    { id: "ens",   no: "sin",   en: "his/her own (reflexive)", note: "Only used for subject's own possession" },
  ],
  grammar: [
    {
      title: "Possessives agree with the noun",
      content: `Norwegian possessives agree with the noun they describe, not the possessor:

<strong>min</strong> bil (my car — masc)
<strong>mitt</strong> hus (my house — neuter)
<strong>mine</strong> bøker (my books — plural)

Same pattern for din/ditt/dine (your), vår/vårt/våre (our).`,
    },
    {
      title: "Possessive placement — post-nominal",
      content: `In Norwegian, possessives often come AFTER the noun (with definite noun):
bilen min (my car — lit. "the car mine")
huset mitt (my house)

Both orders are correct — pre-nominal without article OR post-nominal with definite:
<em>min bil</em> = <em>bilen min</em>`,
    },
    {
      title: "Sin — reflexive possessive",
      content: `<strong>Sin/sitt/sine</strong> = the subject's own (avoids ambiguity):
Han tar <strong>sin</strong> bil. (He takes his [own] car.)
Han tar <strong>hans</strong> bil. (He takes his [someone else's] car.)`,
    },
  ],
  sentences: [
    { no: "Det er min bil.",              en: "That is my car." },
    { no: "Huset mitt er stort.",         en: "My house is big." },
    { no: "Boken hans er gammel.",        en: "His book is old." },
    { no: "Vi er i vår leilighet.",       en: "We are in our apartment." },
    { no: "Hun tar sin veske.",           en: "She takes her (own) bag." },
  ],
  fillBlanks: [
    { template: "Det er ___ bil.",        answer: "min",    hint: "my (masc)" },
    { template: "Huset ___ er stort.",    answer: "mitt",   hint: "my (neuter)" },
    { template: "Vi er i ___ leilighet.", answer: "vår",    hint: "our (masc)" },
    { template: "Hun tar ___ veske.",     answer: "sin",    hint: "her own" },
  ],
  multiChoice: [
    { q: "Neuter of 'min' (my)?", options: ["mine","min","mitt","mins"], answer: 2 },
    { q: "'Sin' is used when?", options: ["referring to another person","referring to subject's own possession","always","never in speech"], answer: 1 },
    { q: "'Bilen min' vs 'min bil':", options: ["different meaning","only first is correct","both are correct","second is formal"], answer: 2 },
  ],
  extractHighlightIds: ["min","mitt","mine","din","hans","hennes","var"],
  testQuestions: [
    { q: "Translate: 'my car' (masc)",   answer: "min bil", accept:["min bil","bilen min"] },
    { q: "Translate: 'my house' (neuter)",answer:"mitt hus", accept:["mitt hus","huset mitt"] },
    { q: "Translate: 'his'",             answer: "hans" },
    { q: "Translate: 'her'",             answer: "hennes" },
    { q: "Translate: 'our' (masc)",      answer: "vår", accept:["vår","var"] },
    { q: "Neuter of 'vår'?",             answer: "vårt", accept:["vårt","vart"] },
    { q: "Translate: 'my (plural)'",     answer: "mine" },
    { q: "Translate: 'your' (singular masc)", answer: "din" },
    { q: "'Sin' means?",                 answer: "his/her own", accept:["own","reflexive possessive","subject's own"] },
    { q: "Plural of 'din'?",             answer: "dine" },
  ],
};
