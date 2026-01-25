import { SentenceBuildingExercise, SentenceBuildingChallenge, Word } from './exercise-types';

// Helper function to create words
const createWords = (wordsData: Array<[string, Word['type'], string?, string?]>): Word[] => {
  return wordsData.map(([text, type, hint, translation], index) => ({
    id: `word-${index}-${text}`,
    text,
    type,
    hint,
    translation
  }));
};

// BEGINNER LEVEL CHALLENGES (A1-A2)
const beginnerChallenges: SentenceBuildingChallenge[] = [
  {
    id: 'sb-1',
    prompt: 'Form a sentence: "I am a student"',
    targetSentence: 'I am a student',
    words: createWords([
      ['I', 'subject', 'The person speaking', 'Yo'],
      ['am', 'verb', 'To be (present, 1st person)', 'soy'],
      ['a', 'article', 'Indefinite article', 'un/una'],
      ['student', 'object', 'Person who studies', 'estudiante']
    ]),
    difficulty: 'easy',
    grammarFocus: 'Present Simple - To Be',
    tips: [
      'English sentences follow: Subject + Verb + Object',
      '"I" always takes "am" as the verb',
      'Use "a" before singular countable nouns'
    ],
    points: 5,
    acceptableVariations: []
  },
  {
    id: 'sb-2',
    prompt: 'Ask a question: "Where do you live?"',
    targetSentence: 'Where do you live?',
    words: createWords([
      ['Where', 'adverb', 'Question word for places', '¿Dónde?'],
      ['do', 'auxiliary', 'Auxiliary for questions', '(auxiliar)'],
      ['you', 'subject', 'The person you are talking to', 'tú'],
      ['live', 'verb', 'To have a home', 'vives'],
      ['?', 'complement', 'Question mark', '?']
    ]),
    difficulty: 'easy',
    grammarFocus: 'Present Simple - Questions with "do"',
    tips: [
      'Questions with "do" follow: Question word + do + subject + verb',
      '"Where" asks about places',
      'Don\'t forget the question mark!'
    ],
    points: 5,
    acceptableVariations: []
  },
  {
    id: 'sb-3',
    prompt: 'Form a sentence: "She likes coffee"',
    targetSentence: 'She likes coffee',
    words: createWords([
      ['She', 'subject', '3rd person singular (female)', 'Ella'],
      ['likes', 'verb', 'To enjoy (3rd person)', 'le gusta'],
      ['coffee', 'object', 'A drink', 'café']
    ]),
    difficulty: 'easy',
    grammarFocus: 'Present Simple - 3rd person singular',
    tips: [
      'With he/she/it, verbs get an "-s" or "-es"',
      '"like" becomes "likes" for she/he/it'
    ],
    points: 5,
    acceptableVariations: []
  }
];

// INTERMEDIATE LEVEL CHALLENGES (B1-B2)
const intermediateChallenges: SentenceBuildingChallenge[] = [
  {
    id: 'sb-4',
    prompt: 'Form a sentence: "I have been studying English for two years"',
    targetSentence: 'I have been studying English for two years',
    words: createWords([
      ['I', 'subject', 'The speaker', 'Yo'],
      ['have', 'auxiliary', 'Present Perfect auxiliary', 'he'],
      ['been', 'auxiliary', 'Past participle of "be"', 'estado'],
      ['studying', 'verb', 'Learning (continuous form)', 'estudiando'],
      ['English', 'object', 'The language', 'inglés'],
      ['for', 'preposition', 'Duration of time', 'por/durante'],
      ['two', 'determiner', 'Number', 'dos'],
      ['years', 'complement', 'Time period', 'años']
    ]),
    difficulty: 'medium',
    grammarFocus: 'Present Perfect Continuous - Duration',
    tips: [
      'Present Perfect Continuous: have/has + been + verb-ing',
      'Use "for" with duration of time',
      'Shows an action that started in the past and continues'
    ],
    points: 10,
    acceptableVariations: [
      'I have been studying English for 2 years'
    ]
  },
  {
    id: 'sb-5',
    prompt: 'Form a conditional: "If I had more time, I would travel more"',
    targetSentence: 'If I had more time, I would travel more',
    words: createWords([
      ['If', 'conjunction', 'Conditional starter', 'Si'],
      ['I', 'subject', 'The speaker', 'yo'],
      ['had', 'verb', 'Past tense of have', 'tuviera'],
      ['more', 'determiner', 'Greater quantity', 'más'],
      ['time', 'object', 'Available hours/days', 'tiempo'],
      [',', 'complement', 'Comma separator', ','],
      ['I', 'subject', 'The speaker (repeated)', 'yo'],
      ['would', 'auxiliary', 'Conditional modal', '(condicional)'],
      ['travel', 'verb', 'To go places', 'viajaría'],
      ['more', 'adverb', 'Greater amount', 'más']
    ]),
    difficulty: 'medium',
    grammarFocus: 'Second Conditional - Hypothetical situations',
    tips: [
      'Second Conditional: If + past simple, would + infinitive',
      'Used for unreal or unlikely situations in the present',
      'Don\'t forget the comma after the "if" clause'
    ],
    points: 10,
    acceptableVariations: []
  },
  {
    id: 'sb-6',
    prompt: 'Form a passive sentence: "The book was written by Shakespeare"',
    targetSentence: 'The book was written by Shakespeare',
    words: createWords([
      ['The', 'article', 'Definite article', 'El'],
      ['book', 'subject', 'Thing being talked about', 'libro'],
      ['was', 'auxiliary', 'Past tense of "be"', 'fue'],
      ['written', 'verb', 'Past participle of write', 'escrito'],
      ['by', 'preposition', 'Shows who did the action', 'por'],
      ['Shakespeare', 'complement', 'The author', 'Shakespeare']
    ]),
    difficulty: 'medium',
    grammarFocus: 'Passive Voice - Past Simple',
    tips: [
      'Passive: be + past participle',
      'Use "by" to show who did the action',
      'Focus is on the book, not the writer'
    ],
    points: 10,
    acceptableVariations: []
  },
  {
    id: 'sb-7',
    prompt: 'Form a negative question: "Haven\'t you finished your homework yet?"',
    targetSentence: 'Haven\'t you finished your homework yet?',
    words: createWords([
      ['Haven\'t', 'auxiliary', 'Negative contraction of have not', 'No has'],
      ['you', 'subject', 'The person addressed', 'tú'],
      ['finished', 'verb', 'Past participle of finish', 'terminado'],
      ['your', 'determiner', 'Possessive', 'tu'],
      ['homework', 'object', 'School work', 'tarea'],
      ['yet', 'adverb', 'Until now', 'todavía'],
      ['?', 'complement', 'Question mark', '?']
    ]),
    difficulty: 'medium',
    grammarFocus: 'Present Perfect - Negative Questions',
    tips: [
      'Negative question: Haven\'t/Hasn\'t + subject + past participle',
      '"yet" is commonly used in negative questions',
      'Expresses surprise or expectation'
    ],
    points: 10,
    acceptableVariations: [
      'Have you not finished your homework yet?'
    ]
  }
];

// ADVANCED LEVEL CHALLENGES (C1-C2)
const advancedChallenges: SentenceBuildingChallenge[] = [
  {
    id: 'sb-8',
    prompt: 'Form a complex sentence: "The project that we started last month has been completed successfully"',
    targetSentence: 'The project that we started last month has been completed successfully',
    words: createWords([
      ['The', 'article', 'Definite article', 'El'],
      ['project', 'subject', 'Main subject', 'proyecto'],
      ['that', 'pronoun', 'Relative pronoun', 'que'],
      ['we', 'subject', 'Who did it', 'nosotros'],
      ['started', 'verb', 'Past simple of start', 'empezamos'],
      ['last', 'adjective', 'Previous', 'pasado'],
      ['month', 'complement', 'Time period', 'mes'],
      ['has', 'auxiliary', 'Present Perfect auxiliary', 'ha'],
      ['been', 'auxiliary', 'Passive auxiliary', 'sido'],
      ['completed', 'verb', 'Past participle', 'completado'],
      ['successfully', 'adverb', 'In a successful way', 'exitosamente']
    ]),
    difficulty: 'hard',
    grammarFocus: 'Relative Clauses + Present Perfect Passive',
    tips: [
      'Relative clause defines which project',
      'Main clause uses Present Perfect Passive',
      'Order: Main subject + relative clause + main verb phrase + adverb'
    ],
    points: 15,
    acceptableVariations: []
  },
  {
    id: 'sb-9',
    prompt: 'Form a sentence with inversion: "Not only did she pass the exam, but she also got the highest score"',
    targetSentence: 'Not only did she pass the exam, but she also got the highest score',
    words: createWords([
      ['Not', 'adverb', 'Negative', 'No'],
      ['only', 'adverb', 'Limiting word', 'solo'],
      ['did', 'auxiliary', 'Past auxiliary', '(auxiliar)'],
      ['she', 'subject', '3rd person female', 'ella'],
      ['pass', 'verb', 'To succeed', 'aprobar'],
      ['the', 'article', 'Definite article', 'el'],
      ['exam', 'object', 'Test', 'examen'],
      [',', 'complement', 'Comma', ','],
      ['but', 'conjunction', 'Contrasting', 'sino'],
      ['she', 'subject', '(repeated)', 'ella'],
      ['also', 'adverb', 'In addition', 'también'],
      ['got', 'verb', 'Past of get', 'obtuvo'],
      ['the', 'article', 'Definite article', 'la'],
      ['highest', 'adjective', 'Superlative', 'más alta'],
      ['score', 'object', 'Points', 'calificación']
    ]),
    difficulty: 'hard',
    grammarFocus: 'Inversion with "Not only"',
    tips: [
      'After "Not only" at the start, use question word order (did + subject + verb)',
      'The second part uses normal word order',
      'Shows emphasis and adds extra information'
    ],
    points: 15,
    acceptableVariations: []
  },
  {
    id: 'sb-10',
    prompt: 'Form a sentence: "I wish I had studied harder when I was younger"',
    targetSentence: 'I wish I had studied harder when I was younger',
    words: createWords([
      ['I', 'subject', 'The speaker', 'Yo'],
      ['wish', 'verb', 'To desire', 'desearía'],
      ['I', 'subject', '(repeated)', 'yo'],
      ['had', 'auxiliary', 'Past Perfect auxiliary', 'hubiera'],
      ['studied', 'verb', 'Past participle', 'estudiado'],
      ['harder', 'adverb', 'With more effort', 'más duro'],
      ['when', 'conjunction', 'Time reference', 'cuando'],
      ['I', 'subject', '(repeated)', 'yo'],
      ['was', 'verb', 'Past of be', 'era'],
      ['younger', 'adjective', 'Less old', 'más joven']
    ]),
    difficulty: 'hard',
    grammarFocus: 'Third Conditional / Past Wishes',
    tips: [
      'I wish + Past Perfect = regret about the past',
      'Shows something you didn\'t do but now wish you had',
      'Structure: I wish + subject + had + past participle'
    ],
    points: 15,
    acceptableVariations: []
  }
];

// COMPLETE EXERCISE
export const sentenceBuildingExercise: SentenceBuildingExercise = {
  id: 'ex-sentence-building-1',
  type: 'sentence-building',
  title: '🏗️ Interactive Sentence Builder',
  description: 'Learn to form English sentences intuitively by dragging and dropping words in the correct order. Color-coded hints help you identify different types of words!',
  instructions: 'Drag words from the bottom to the sentence area above. You can also click words to add/remove them. Follow the color hints to build grammatically correct sentences!',
  challenges: [
    ...beginnerChallenges,
    ...intermediateChallenges,
    ...advancedChallenges
  ],
  showHints: true,
  showTranslations: true,
  timeLimit: 600 // 10 minutes total
};

// BEGINNER ONLY EXERCISE
export const sentenceBuildingBeginnerExercise: SentenceBuildingExercise = {
  id: 'ex-sentence-building-beginner',
  type: 'sentence-building',
  title: '🌱 Sentence Builder for Beginners',
  description: 'Start your English journey by learning to form simple sentences. Perfect for A1-A2 level students!',
  instructions: 'Drag and drop words to form sentences. Colors show different types of words. Take your time and use the tips if you need help!',
  challenges: beginnerChallenges,
  showHints: true,
  showTranslations: true,
  timeLimit: 300 // 5 minutes
};

// INTERMEDIATE ONLY EXERCISE
export const sentenceBuildingIntermediateExercise: SentenceBuildingExercise = {
  id: 'ex-sentence-building-intermediate',
  type: 'sentence-building',
  title: '📈 Sentence Builder for Intermediate Learners',
  description: 'Practice more complex sentence structures including conditionals, passive voice, and perfect tenses. For B1-B2 level students.',
  instructions: 'Build sentences using advanced grammar structures. Pay attention to word order and grammar rules!',
  challenges: intermediateChallenges,
  showHints: true,
  showTranslations: false, // More challenging without translations
  timeLimit: 400 // ~6-7 minutes
};

// ADVANCED ONLY EXERCISE
export const sentenceBuildingAdvancedExercise: SentenceBuildingExercise = {
  id: 'ex-sentence-building-advanced',
  type: 'sentence-building',
  title: '🎓 Sentence Builder for Advanced Learners',
  description: 'Master complex English structures including inversion, relative clauses, and advanced conditionals. For C1-C2 level students.',
  instructions: 'Construct sophisticated sentences using advanced grammar. Challenge yourself without hints or translations!',
  challenges: advancedChallenges,
  showHints: false, // No color hints - more challenging
  showTranslations: false, // No translations - advanced level
  timeLimit: 450 // ~7-8 minutes
};
