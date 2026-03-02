/**
 * lesson-16.js — Past Tense: weak & strong verbs
 */
LESSONS_DATA[16] = {
  title: "Preteritum",
  subtitle: "Past Tense — Weak & Strong Verbs",
  color: "#47d278",
  vocab: [
    { id: "snakket", no: "snakket",  en: "spoke / talked",   note: "-et past (weak group 1)" },
    { id: "jobbet",  no: "jobbet",   no2:"jobba",  en: "worked",           note: "-et / -a" },
    { id: "leste",   no: "leste",    en: "read (past)",      note: "-te past (weak group 2)" },
    { id: "kjopte",  no: "kjøpte",   en: "bought" },
    { id: "var",     no: "var",      en: "was / were",       note: "Irregular: 'å være' → var" },
    { id: "hadde",   no: "hadde",    en: "had",              note: "Irregular: 'å ha' → hadde" },
    { id: "kom",     no: "kom",      en: "came",             note: "Strong: 'å komme' → kom" },
    { id: "dro",     no: "dro",      en: "went (away)",      note: "Strong: 'å dra' → dro" },
    { id: "sa",      no: "sa",       en: "said",             note: "Strong: 'å si' → sa" },
    { id: "so",      no: "sov",      en: "slept",            note: "Strong: 'å sove' → sov" },
    { id: "fikk",    no: "fikk",     en: "got / received",   note: "Strong: 'å få' → fikk" },
    { id: "visste",  no: "visste",   en: "knew",             note: "'å vite' → visste" },
  ],
  grammar: [
    {
      title: "Weak verbs: -et and -te",
      content: `Most Norwegian verbs are weak — they form past tense by adding a suffix to the stem.

Group 1 (-et): Long stem or ending in double consonant
snakke → snakk<strong>et</strong>   jobbe → jobb<strong>et</strong>

Group 2 (-te): Short stem (single consonant)
lese → les<strong>te</strong>   kjøpe → kjøp<strong>te</strong>

In spoken Bokmål, Group 1 verbs often use <strong>-a</strong> (snakka, jobba).`,
    },
    {
      title: "Strong verbs: vowel change",
      content: `Strong verbs change their stem vowel — like English sing/sang/sung:

komme → <strong>kom</strong>   dra → <strong>dro</strong>   si → <strong>sa</strong>
sove → <strong>sov</strong>    få → <strong>fikk</strong>    se → <strong>så</strong>

These must be memorised individually. The most common ones appear in every sentence.`,
    },
    {
      title: "Past tense is the same for all persons",
      content: `Like present tense, Norwegian past tense does NOT change by person:
Jeg snakket · Du snakket · Han snakket · Vi snakket · De snakket

One form covers all. Only the pronouns change.`,
    },
  ],
  sentences: [
    { no: "Jeg snakket med henne i går.",  en: "I spoke with her yesterday." },
    { no: "Hun var ikke hjemme.",          en: "She was not home." },
    { no: "De kom for sent.",              en: "They came too late." },
    { no: "Han hadde ingen penger.",       en: "He had no money." },
    { no: "Vi dro til Bergen.",            en: "We went to Bergen." },
    { no: "Jeg visste det ikke.",          en: "I didn't know that." },
  ],
  fillBlanks: [
    { template: "Jeg ___ med henne.",      answer: "snakket", hint: "spoke (past of snakke)" },
    { template: "Hun ___ ikke hjemme.",    answer: "var",     hint: "was" },
    { template: "De ___ for sent.",        answer: "kom",     hint: "came" },
    { template: "Han ___ ingen penger.",   answer: "hadde",   hint: "had" },
    { template: "Vi ___ til Bergen.",      answer: "dro",     hint: "went" },
  ],
  multiChoice: [
    { q: "Past of 'å snakke' (Group 1)?", options: ["snakker","snakkte","snakket","snakte"], answer: 2 },
    { q: "Past of 'å komme' (strong)?",   options: ["kommet","komte","kom","kommen"], answer: 2 },
    { q: "Past tense changes per person?", options: ["yes","no","only for 'er'","only plural"], answer: 1 },
  ],
  extractHighlightIds: ["snakket","var","hadde","kom","dro","sa","fikk"],
  testQuestions: [
    { q: "Past of 'å snakke'?",        answer: "snakket" },
    { q: "Past of 'å være'?",          answer: "var" },
    { q: "Past of 'å ha'?",            answer: "hadde" },
    { q: "Past of 'å komme'?",         answer: "kom" },
    { q: "Past of 'å dra'?",           answer: "dro" },
    { q: "Past of 'å få'?",            answer: "fikk" },
    { q: "Past of 'å si'?",            answer: "sa" },
    { q: "Group 1 weak past suffix?",  answer: "-et", accept:["-et","et"] },
    { q: "Group 2 weak past suffix?",  answer: "-te", accept:["-te","te"] },
    { q: "Translate: 'I spoke with her'", answer: "jeg snakket med henne" },
  ],
};

/**
 * lesson-17.js — Conjunctions
 */
LESSONS_DATA[17] = {
  title: "Konjunksjoner",
  subtitle: "og, men, fordi, når, hvis, så",
  color: "#47d278",
  vocab: [
    { id: "og",     no: "og",     en: "and" },
    { id: "men",    no: "men",    en: "but" },
    { id: "fordi",  no: "fordi",  en: "because" },
    { id: "naarkonj",no:"når",    en: "when (conjunction)" },
    { id: "hvis",   no: "hvis",   en: "if" },
    { id: "saa",    no: "så",     en: "so / then" },
    { id: "eller",  no: "eller",  en: "or" },
    { id: "at",     no: "at",     en: "that (subordinating)" },
    { id: "selv",   no: "selv om",en: "even though" },
    { id: "enda",   no: "enda",   en: "still / even" },
  ],
  grammar: [
    {
      title: "Coordinating conjunctions (no inversion)",
      content: `<strong>og, men, eller, så</strong> join two main clauses — word order stays normal after them:

Jeg er trøtt, <strong>men</strong> jeg jobber.
Han spiser, <strong>og</strong> hun drikker.`,
    },
    {
      title: "Subordinating conjunctions — ikke before verb",
      content: `<strong>fordi, når, hvis, at</strong> introduce sub-clauses. In sub-clauses:
1. No V2 inversion (subject comes first)
2. <strong>Ikke</strong> comes BEFORE the verb

Jeg er lei fordi jeg <strong>ikke</strong> sover.
Hvis du <strong>ikke</strong> kommer, ringer jeg.`,
    },
    {
      title: "Så — coordination and result",
      content: `<strong>Så</strong> = "so" or "then" — a very common linking word:
Det regner, <strong>så</strong> jeg tar paraplyen. (so I take the umbrella)
<strong>Så</strong> hva gjør vi? (So what do we do?)`,
    },
  ],
  sentences: [
    { no: "Jeg er trøtt, men jeg jobber.",      en: "I am tired, but I work." },
    { no: "Han kommer fordi han vil hjelpe.",   en: "He comes because he wants to help." },
    { no: "Jeg ringer deg når jeg er hjemme.",  en: "I'll call you when I'm home." },
    { no: "Hvis det regner, blir vi inne.",     en: "If it rains, we stay inside." },
    { no: "Det er kaldt, så vi tar bussen.",    en: "It's cold, so we take the bus." },
  ],
  fillBlanks: [
    { template: "Han jobber ___ han er trøtt.",  answer: "selv om", hint: "even though" },
    { template: "Jeg er lei ___ jeg ikke sover.", answer: "fordi",  hint: "because" },
    { template: "Kaffe ___ te?",                  answer: "eller",  hint: "or" },
    { template: "___ det regner, blir vi inne.",  answer: "hvis",   hint: "if" },
  ],
  multiChoice: [
    { q: "In a sub-clause, 'ikke' goes:", options: ["after verb","before verb","at end","at start"], answer: 1 },
    { q: "'Fordi' means:", options: ["when","if","because","but"], answer: 2 },
    { q: "Which is a coordinating conjunction?", options: ["fordi","hvis","når","men"], answer: 3 },
  ],
  extractHighlightIds: ["og","men","fordi","naarkonj","hvis","saa","eller","at"],
  testQuestions: [
    { q: "Translate: 'and'",         answer: "og" },
    { q: "Translate: 'but'",         answer: "men" },
    { q: "Translate: 'because'",     answer: "fordi" },
    { q: "Translate: 'if'",          answer: "hvis" },
    { q: "Translate: 'when' (conj)", answer: "når", accept:["når","nar"] },
    { q: "Translate: 'or'",          answer: "eller" },
    { q: "Translate: 'so / then'",   answer: "så", accept:["så","sa"] },
    { q: "Translate: 'that' (subord.)",answer:"at" },
    { q: "In sub-clause, ikke goes before or after verb?", answer: "before", accept:["before","before verb"] },
    { q: "Translate: 'even though'", answer: "selv om" },
  ],
};

/**
 * lesson-18.js — Reflexives: seg, selv, reciprocals
 */
LESSONS_DATA[18] = {
  title: "Refleksiver",
  subtitle: "seg, selv, reciprocals",
  color: "#47d278",
  vocab: [
    { id: "seg",      no: "seg",      en: "himself/herself/itself/themselves", note: "Reflexive pronoun for 3rd person" },
    { id: "meg",      no: "meg",      en: "myself (1st sing.)" },
    { id: "deg",      no: "deg",      en: "yourself (2nd sing.)" },
    { id: "oss",      no: "oss",      en: "ourselves" },
    { id: "dere2",    no: "dere",     en: "yourselves" },
    { id: "selv2",    no: "selv",     en: "oneself / -self (emphatic)" },
    { id: "hverandre",no:"hverandre", en: "each other (reciprocal)" },
    { id: "kle",      no: "kle seg",  en: "to dress (oneself)" },
    { id: "vaske",    no: "vaske seg",en: "to wash oneself" },
    { id: "glede",    no: "glede seg",en: "to look forward to" },
    { id: "sette",    no: "sette seg",en: "to sit down" },
  ],
  grammar: [
    {
      title: "Reflexive pronouns",
      content: `When the subject and object are the same person, use a reflexive pronoun:

1st sing: Jeg vasker <strong>meg</strong>. (I wash myself.)
2nd sing: Du vasker <strong>deg</strong>. (You wash yourself.)
3rd (all): Han/hun/det vasker <strong>seg</strong>. (He/she washes himself/herself.)
1st pl: Vi vasker <strong>oss</strong>. (We wash ourselves.)`,
    },
    {
      title: "Selv — emphatic",
      content: `<strong>Selv</strong> adds emphasis "oneself/myself/yourself":
Jeg gjør det <strong>selv</strong>. (I do it myself.)
Hun bor alene av <strong>seg selv</strong>. (She lives alone by herself.)`,
    },
    {
      title: "Hverandre — reciprocal",
      content: `<strong>Hverandre</strong> = "each other" / "one another":
De elsker <strong>hverandre</strong>. (They love each other.)
Vi hjelper <strong>hverandre</strong>. (We help each other.)`,
    },
  ],
  sentences: [
    { no: "Han vasker seg.",                   en: "He washes himself." },
    { no: "Jeg kler på meg.",                  en: "I get dressed." },
    { no: "De elsker hverandre.",              en: "They love each other." },
    { no: "Sett deg ned!",                     en: "Sit down!" },
    { no: "Jeg gjør det selv.",                en: "I do it myself." },
    { no: "Hun gleder seg til ferien.",        en: "She is looking forward to the holiday." },
  ],
  fillBlanks: [
    { template: "Han vasker ___.",              answer: "seg",       hint: "himself (3rd person)" },
    { template: "Jeg kler på ___.",             answer: "meg",       hint: "myself (1st person)" },
    { template: "De hjelper ___.",              answer: "hverandre", hint: "each other" },
    { template: "Jeg gjør det ___.",            answer: "selv",      hint: "myself (emphatic)" },
  ],
  multiChoice: [
    { q: "'Seg' is used for:", options: ["1st person","2nd person","3rd person","all persons"], answer: 2 },
    { q: "'Hverandre' means:", options: ["himself","themselves","each other","oneself"], answer: 2 },
    { q: "Reflexive for 'vi' (we)?", options: ["meg","deg","seg","oss"], answer: 3 },
  ],
  extractHighlightIds: ["seg","selv2","hverandre","kle","glede","sette"],
  testQuestions: [
    { q: "Reflexive for 'han/hun/de'?", answer: "seg" },
    { q: "Reflexive for 'jeg'?",        answer: "meg" },
    { q: "Reflexive for 'du'?",         answer: "deg" },
    { q: "Reflexive for 'vi'?",         answer: "oss" },
    { q: "Translate: 'each other'",     answer: "hverandre" },
    { q: "Translate: 'myself (emphatic)'", answer: "selv" },
    { q: "Translate: 'He washes himself'", answer: "han vasker seg" },
    { q: "Translate: 'to dress oneself'",  answer: "kle seg" },
    { q: "Translate: 'to look forward to'",answer:"glede seg" },
    { q: "Translate: 'They love each other'", answer: "de elsker hverandre" },
  ],
};

/**
 * lesson-19.js — Synthesis: role-play, monologue, simulated dialogue
 */
LESSONS_DATA[19] = {
  title: "Syntese",
  subtitle: "Role-play, Monologue, Simulated Dialogue",
  color: "#47d278",
  vocab: [
    { id: "intro",   no: "La meg presentere meg.",en: "Let me introduce myself." },
    { id: "syns",    no: "Jeg synes at",          en: "I think that / I find that" },
    { id: "tror",    no: "Jeg tror at",           en: "I believe that" },
    { id: "haaper",  no: "Jeg håper at",          en: "I hope that" },
    { id: "trenger2",no: "Jeg trenger",           en: "I need" },
    { id: "lurer",   no: "Jeg lurer på",          en: "I'm wondering about" },
    { id: "faktisk", no: "faktisk",               en: "actually / in fact" },
    { id: "egentlig",no: "egentlig",              en: "actually / really (contradiction)" },
    { id: "likevel", no: "likevel",               en: "anyway / nonetheless" },
    { id: "dessuten",no: "dessuten",              en: "furthermore / besides" },
    { id: "altsa",   no: "altså",                 en: "so / in other words" },
    { id: "nemlig",  no: "nemlig",                en: "you see / that is to say" },
  ],
  grammar: [
    {
      title: "Building complex sentences",
      content: `Lesson 19 is about combining everything. A complete statement might use:
V2 word order + modal + infinitive + negation + conjunction + sub-clause:

<em>Jeg vil egentlig ikke dra, men jeg må fordi hun trenger hjelp.</em>
(I don't really want to go, but I must because she needs help.)`,
    },
    {
      title: "Discourse markers",
      content: `These words connect ideas and make speech sound natural:
<strong>Faktisk</strong> — actually (adding surprising info)
<strong>Egentlig</strong> — actually (contradicting or softening)
<strong>Dessuten</strong> — furthermore
<strong>Altså</strong> — so, in other words
<strong>Nemlig</strong> — you see (explaining)`,
    },
    {
      title: "Self-introduction template",
      content: `Hei! Jeg heter [name].
Jeg er [age] år gammel og jeg er fra [place].
Jeg bor i [city] og jobber som [job].
Jeg liker å [hobby] og snakker [languages].
Det er veldig hyggelig å møte deg!`,
    },
  ],
  sentences: [
    { no: "La meg presentere meg.",               en: "Let me introduce myself." },
    { no: "Jeg synes at norsk er vanskelig.",     en: "I think Norwegian is difficult." },
    { no: "Egentlig vil jeg ikke, men jeg must.", en: "I don't really want to, but I must." },
    { no: "Jeg lurer på om det er sant.",         en: "I'm wondering if it's true." },
    { no: "Dessuten er det veldig dyrt.",         en: "Furthermore, it's very expensive." },
    { no: "Altså, hva gjør vi nå?",              en: "So, what do we do now?" },
    { no: "Det er nemlig ikke så enkelt.",        en: "It's not that simple, you see." },
  ],
  fillBlanks: [
    { template: "Jeg ___ at norsk er morsomt.",   answer: "synes",   hint: "think / find" },
    { template: "Jeg ___ at de kommer.",           answer: "håper",   hint: "hope" },
    { template: "___ er det dyrt.",               answer: "dessuten",hint: "furthermore" },
    { template: "Jeg ___ på om det stemmer.",     answer: "lurer",   hint: "am wondering" },
  ],
  multiChoice: [
    { q: "'Egentlig' is used to:", options: ["add info","contradict or soften","explain","list items"], answer: 1 },
    { q: "'Nemlig' means:", options: ["actually","anyway","you see / that is","furthermore"], answer: 2 },
    { q: "'Altså' means:", options: ["still","so / in other words","even though","just"], answer: 1 },
  ],
  extractHighlightIds: ["intro","syns","tror","haaper","faktisk","egentlig","likevel","dessuten","altsa","nemlig"],
  testQuestions: [
    { q: "Translate: 'I think that'",        answer: "jeg synes at", accept:["jeg synes at","jeg tror at"] },
    { q: "Translate: 'I hope that'",         answer: "jeg håper at", accept:["jeg håper at","jeg haper at"] },
    { q: "Translate: 'actually (adding)'",   answer: "faktisk" },
    { q: "Translate: 'actually (softening)'",answer: "egentlig" },
    { q: "Translate: 'furthermore'",         answer: "dessuten" },
    { q: "Translate: 'so / in other words'", answer: "altså", accept:["altså","altsa"] },
    { q: "Translate: 'you see'",             answer: "nemlig" },
    { q: "Translate: 'I'm wondering about'", answer: "jeg lurer på" },
    { q: "Translate: 'anyway / nonetheless'",answer: "likevel" },
    { q: "Translate: 'Let me introduce myself'", answer: "la meg presentere meg" },
  ],
};
