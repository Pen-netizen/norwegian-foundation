/**
 * lesson-01.js — Greetings & Polite Expressions
 */
LESSONS_DATA[1] = {
  title: "Hilsener & Høflighetsuttrykk",
  subtitle: "Greetings & Polite Expressions",
  color: "#c8e69e",

  vocab: [
    { id: "hei",        no: "Hei",             en: "Hello / Hi",          note: "The most common greeting" },
    { id: "hallo",      no: "Hallo",            en: "Hello",               note: "More formal than hei" },
    { id: "hadetheis",  no: "Ha det bra",       en: "Goodbye / Take care", note: "Lit. 'have it well'" },
    { id: "hade",       no: "Ha det",           en: "Bye",                 note: "Casual goodbye" },
    { id: "morn",       no: "God morgen",       en: "Good morning",        note: "Used before ~11am" },
    { id: "dag",        no: "God dag",          en: "Good day",            note: "Formal daytime greeting" },
    { id: "kveld",      no: "God kveld",        en: "Good evening",        note: "After ~6pm" },
    { id: "natt",       no: "God natt",         en: "Good night",          note: "Bedtime farewell" },
    { id: "takk",       no: "Takk",             en: "Thanks",              note: "Short, everyday" },
    { id: "takksa",     no: "Tusen takk",       en: "Thank you very much", note: "Lit. 'thousand thanks'" },
    { id: "vaersgod",   no: "Vær så god",       en: "You're welcome / Here you go", note: "Also said when handing something" },
    { id: "unnskyld",   no: "Unnskyld",         en: "Excuse me / Sorry",   note: "To apologise or get attention" },
    { id: "beklager",   no: "Beklager",         en: "I'm sorry",           note: "More formal apology" },
    { id: "vsnill",     no: "Vær så snill",     en: "Please",              note: "Lit. 'be so kind'" },
    { id: "hvordaner",  no: "Hvordan har du det?", en: "How are you?",     note: "Standard opener" },
    { id: "brajoeg",    no: "Jeg har det bra",  en: "I'm doing well",      note: "Standard answer" },
    { id: "ja",         no: "Ja",               en: "Yes" },
    { id: "nei",        no: "Nei",              en: "No" },
    { id: "javel",      no: "Ja vel",           en: "I see / Yes indeed",  note: "Acknowledging something" },
    { id: "selvfolg",   no: "Selvfølgelig",     en: "Of course",           note: "Can also be 'sjølsagt'" },
  ],

  grammar: [
    {
      title: "Basic Greeting Pattern",
      content: `In Norwegian, greetings are simple and direct. Unlike English, there is no verb conjugation to worry about yet.

<strong>Hei!</strong> — Hello! (used any time of day)
<strong>Hei hei!</strong> — Bye! (informal, said on departure)
<strong>Ha det!</strong> — Bye! (literally "have it")

Note: Norwegians often say "Hei hei" for both hello AND goodbye in very casual contexts.`,
    },
    {
      title: "Takk vs. Vær så god",
      content: `The exchange pair you'll use constantly:

When someone gives you something or does you a favour: <strong>Takk!</strong> (Thanks!)
Their reply: <strong>Vær så god.</strong> (You're welcome.)

<strong>Vær så god</strong> also means "here you are" when handing something to someone — you'll hear it at shops and restaurants constantly.`,
    },
    {
      title: "Unnskyld — double duty",
      content: `<strong>Unnskyld</strong> covers two situations:
• Getting someone's attention: "Excuse me, can I get past?"
• Apologising: "Sorry, I bumped into you."

For a more formal or heartfelt apology: <strong>Beklager.</strong>`,
    },
  ],

  // Sentences used in Mini-Games and Read tab
  sentences: [
    { no: "Hei! Jeg heter Anna.",        en: "Hi! My name is Anna." },
    { no: "Ha det bra!",                 en: "Goodbye! Take care!" },
    { no: "Tusen takk for hjelpen.",     en: "Thank you very much for the help." },
    { no: "Unnskyld, kan du hjelpe meg?",en: "Excuse me, can you help me?" },
    { no: "Vær så god.",                 en: "You're welcome / Here you go." },
    { no: "Ja, selvfølgelig!",           en: "Yes, of course!" },
    { no: "Nei, takk.",                  en: "No, thank you." },
    { no: "Hvordan har du det?",         en: "How are you?" },
    { no: "Jeg har det bra, takk.",      en: "I'm doing well, thanks." },
    { no: "God morgen! Sov du godt?",    en: "Good morning! Did you sleep well?" },
  ],

  // Mini-game fill-in-the-blank exercises
  fillBlanks: [
    { template: "___ ! Jeg heter Lars.", answer: "Hei", hint: "A casual greeting" },
    { template: "Tusen ___ for maten!", answer: "takk", hint: "Thank you (short form)" },
    { template: "Vær så ___.", answer: "god", hint: "You're welcome" },
    { template: "___, kan jeg sitte her?", answer: "Unnskyld", hint: "Excuse me" },
    { template: "God ___! Sov du godt?", answer: "morgen", hint: "Good ___" },
    { template: "Ja, ___!", answer: "selvfølgelig", hint: "Of course!" },
    { template: "Ha det ___!", answer: "bra", hint: "Goodbye / Take care" },
  ],

  // Multiple choice
  multiChoice: [
    {
      q: "How do you say 'excuse me' to get someone's attention?",
      options: ["Takk", "Unnskyld", "Beklager", "Hei"],
      answer: 1
    },
    {
      q: "What does 'Vær så god' mean when a cashier says it?",
      options: ["Thank you", "Goodbye", "Here you go / You're welcome", "Good morning"],
      answer: 2
    },
    {
      q: "Which is the most casual goodbye?",
      options: ["God kveld", "Ha det bra", "Ha det", "Selvfølgelig"],
      answer: 2
    },
    {
      q: "How do you say 'thank you very much'?",
      options: ["Takk", "Tusen takk", "Vær så snill", "Ja vel"],
      answer: 1
    },
  ],

  // Words highlighted in the extract for Lesson 1
  extractHighlightIds: ["hei", "takk", "ja", "nei"],

  // Test questions (needs 85% = 9/10 or better)
  testQuestions: [
    { q: "Translate: 'Hello'",                    answer: "hei", accept: ["hei", "hallo"] },
    { q: "Translate: 'Thank you very much'",       answer: "tusen takk" },
    { q: "Translate: 'You're welcome'",            answer: "vær så god" },
    { q: "Translate: 'Excuse me'",                 answer: "unnskyld" },
    { q: "Translate: 'Please'",                    answer: "vær så snill" },
    { q: "Translate: 'Goodbye / Take care'",       answer: "ha det bra", accept: ["ha det bra", "hade bra"] },
    { q: "Translate: 'Good morning'",              answer: "god morgen" },
    { q: "Translate: 'How are you?'",              answer: "hvordan har du det" },
    { q: "Translate: 'Of course'",                 answer: "selvfølgelig", accept: ["selvfølgelig", "sjolsagt", "sjølsagt"] },
    { q: "Translate: 'I'm doing well'",            answer: "jeg har det bra" },
  ],
};
