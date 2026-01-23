// ===============================================
// MÓDULO 1, LECCIÓN 1: VERB TO BE - CONTENIDO COMPLETO DETALLADO
// Este archivo contiene todos los ejercicios con contenido real y funcional
// ===============================================

import type {
  Exercise,
  GrammarExercise,
  VocabularyExercise,
  ReadingExercise,
  ListeningExercise,
  WritingExercise,
  SpeakingExercise,
  PronunciationPracticeExercise,
  Question
} from './course-data-a1';

// ============================================
// GRAMMAR EXERCISE 1: Formation and Use
// ============================================
export const A1_M1_L1_GRAMMAR_1: GrammarExercise = {
  id: 'a1-m1-l1-grammar-1',
  type: 'grammar',
  title: 'Verb to be - Formation and Use',
  grammarPoint: 'Verb to be (am/is/are)',
  explanation: `
The verb "to be" is the most important verb in English. We use it to talk about:
• Who we are
• Where we are from
• Our age
• Our job
• How we feel

**Affirmative Forms:**

| Pronoun | Verb | Contraction |
|---------|------|-------------|
| I       | am   | I'm         |
| You     | are  | You're      |
| He      | is   | He's        |
| She     | is   | She's       |
| It      | is   | It's        |
| We      | are  | We're       |
| They    | are  | They're     |

**Examples:**
✓ I am a student. (I'm a student.)
✓ You are from Spain. (You're from Spain.)
✓ She is happy. (She's happy.)
✓ We are teachers. (We're teachers.)
✓ They are friends. (They're friends.)

**Usage:**
1. **Identity**: I am Maria. / He is John.
2. **Nationality**: She is American. / They are British.
3. **Age**: I am 25 years old.
4. **Job**: He is a doctor. / We are students.
5. **Feelings**: She is tired. / I am happy.
6. **Location**: We are in London.
  `,
  examples: [
    "I am happy today.",
    "You are my best friend.",
    "He is a teacher.",
    "She is from Italy.",
    "It is a beautiful day.",
    "We are students.",
    "They are at home."
  ],
  questions: [
    {
      id: 'a1-m1-l1-g1-q1',
      type: 'multiple-choice',
      question: 'Complete: I ___ a student.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'am',
      explanation: 'We use "am" with the pronoun "I".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q2',
      type: 'multiple-choice',
      question: 'Complete: She ___ happy.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'is',
      explanation: 'We use "is" with he, she, and it.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q3',
      type: 'multiple-choice',
      question: 'Complete: They ___ from Spain.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'are',
      explanation: 'We use "are" with you (singular/plural), we, and they.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q4',
      type: 'multiple-choice',
      question: 'Complete: We ___ teachers.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'are',
      explanation: 'We use "are" with "we".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q5',
      type: 'multiple-choice',
      question: 'Complete: He ___ my brother.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'is',
      explanation: 'We use "is" with "he".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q6',
      type: 'multiple-choice',
      question: 'Complete: You ___ very kind.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'are',
      explanation: 'We use "are" with "you".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q7',
      type: 'multiple-choice',
      question: 'Complete: It ___ cold today.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'is',
      explanation: 'We use "is" with "it".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q8',
      type: 'multiple-choice',
      question: 'Complete: I ___ 25 years old.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'am',
      explanation: 'We use "am" with "I".',
      points: 1
    }
  ]
};

// ============================================
// GRAMMAR EXERCISE 2: Practice
// ============================================
export const A1_M1_L1_GRAMMAR_2: GrammarExercise = {
  id: 'a1-m1-l1-grammar-2',
  type: 'grammar',
  title: 'Verb to be - Practice Exercises',
  grammarPoint: 'Verb to be - Practice',
  explanation: 'Now practice using the correct form of the verb "to be" in different contexts. Remember to choose between am, is, and are.',
  examples: [
    "I'm 30 years old.",
    "You're very kind.",
    "She's a nurse.",
    "We're in the classroom.",
    "They're my parents."
  ],
  questions: [
    {
      id: 'a1-m1-l1-g2-q1',
      type: 'fill-blank',
      question: 'I ___ from New York.',
      correctAnswer: 'am',
      acceptableAnswers: ['am', "'m"],
      explanation: 'Use "am" with "I".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q2',
      type: 'fill-blank',
      question: 'You ___ a good student.',
      correctAnswer: 'are',
      acceptableAnswers: ['are', "'re"],
      explanation: 'Use "are" with "you".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q3',
      type: 'fill-blank',
      question: 'It ___ a cat.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Use "is" with "it".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q4',
      type: 'fill-blank',
      question: 'We ___ in the park.',
      correctAnswer: 'are',
      acceptableAnswers: ['are', "'re"],
      explanation: 'Use "are" with "we".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q5',
      type: 'fill-blank',
      question: 'She ___ 25 years old.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Use "is" with "she".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q6',
      type: 'fill-blank',
      question: 'They ___ doctors.',
      correctAnswer: 'are',
      acceptableAnswers: ['are', "'re"],
      explanation: 'Use "are" with "they".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q7',
      type: 'fill-blank',
      question: 'My name ___ Carlos.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Use "is" because "my name" = it.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q8',
      type: 'fill-blank',
      question: 'London ___ in England.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Use "is" for places (London = it).',
      points: 1
    }
  ]
};

// ============================================
// READING EXERCISE
// ============================================
export const A1_M1_L1_READING: ReadingExercise = {
  id: 'a1-m1-l1-reading-1',
  type: 'reading',
  title: 'Reading: Meeting New Friends',
  text: `Hello! My name is Maria. I am from Spain. I am 22 years old and I am a student. I study English in London.

My friend is Tom. He is from England. He is 23 years old. He is a student too. We are in the same class.

Our teacher is Mrs. Brown. She is from America. She is very nice and friendly. She is a good teacher.

We are happy in our English class. The classroom is big and comfortable. Our classmates are from different countries. They are friendly and helpful.

London is a beautiful city. It is exciting and interesting. We are lucky to study here!`,
  wordCount: 112,
  readingTime: 2,
  questions: [
    {
      id: 'a1-m1-l1-r1-q1',
      type: 'multiple-choice',
      question: 'Where is Maria from?',
      options: ['England', 'Spain', 'America', 'London'],
      correctAnswer: 'Spain',
      explanation: 'The text says "I am from Spain."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q2',
      type: 'multiple-choice',
      question: 'How old is Tom?',
      options: ['22', '23', '24', '25'],
      correctAnswer: '23',
      explanation: 'The text says "He is 23 years old."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q3',
      type: 'multiple-choice',
      question: 'What is Mrs. Brown?',
      options: ['A student', 'A teacher', 'A doctor', 'A nurse'],
      correctAnswer: 'A teacher',
      explanation: 'The text says "She is a good teacher."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q4',
      type: 'true-false',
      question: 'Maria and Tom are in different classes.',
      correctAnswer: 'false',
      explanation: 'The text says "We are in the same class."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q5',
      type: 'true-false',
      question: 'The classroom is small.',
      correctAnswer: 'false',
      explanation: 'The text says "The classroom is big and comfortable."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q6',
      type: 'true-false',
      question: 'Mrs. Brown is from England.',
      correctAnswer: 'false',
      explanation: 'The text says "She is from America."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q7',
      type: 'multiple-choice',
      question: 'How is London described?',
      options: ['Boring', 'Small', 'Beautiful', 'Old'],
      correctAnswer: 'Beautiful',
      explanation: 'The text says "London is a beautiful city."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q8',
      type: 'true-false',
      question: 'The classmates are all from the same country.',
      correctAnswer: 'false',
      explanation: 'The text says "Our classmates are from different countries."',
      points: 1
    }
  ],
  vocabularyHelp: [
    { word: 'friendly', definition: 'kind and pleasant' },
    { word: 'classmate', definition: 'a person in the same class as you' },
    { word: 'comfortable', definition: 'giving a pleasant feeling' },
    { word: 'lucky', definition: 'having good fortune' },
    { word: 'exciting', definition: 'causing great enthusiasm' },
    { word: 'helpful', definition: 'willing to help others' }
  ]
};

// ============================================
// LISTENING EXERCISE
// ============================================
export const A1_M1_L1_LISTENING: ListeningExercise = {
  id: 'a1-m1-l1-listening-1',
  type: 'listening',
  audioUrl: '/audio/a1-m1-l1-listening-1.mp3',
  transcript: `Hello, my name is John. I am a teacher. I am from Canada. I am 35 years old. I am married and I have two children. My wife is a doctor. Her name is Sarah. She is 33 years old. We are happy in our new home in London.`,
  duration: 30,
  allowReplay: true,
  maxReplays: 3,
  questions: [
    {
      id: 'a1-m1-l1-list-q1',
      type: 'multiple-choice',
      question: 'What is John?',
      options: ['A doctor', 'A teacher', 'A student', 'An engineer'],
      correctAnswer: 'A teacher',
      explanation: 'John says "I am a teacher."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q2',
      type: 'multiple-choice',
      question: 'Where is John from?',
      options: ['USA', 'England', 'Canada', 'Australia'],
      correctAnswer: 'Canada',
      explanation: 'John says "I am from Canada."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q3',
      type: 'multiple-choice',
      question: 'How old is John?',
      options: ['30', '33', '35', '40'],
      correctAnswer: '35',
      explanation: 'John says "I am 35 years old."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q4',
      type: 'multiple-choice',
      question: "What is Sarah's job?",
      options: ['Teacher', 'Doctor', 'Nurse', 'Student'],
      correctAnswer: 'Doctor',
      explanation: 'John says "My wife is a doctor."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q5',
      type: 'true-false',
      question: 'John has three children.',
      correctAnswer: 'false',
      explanation: 'John says "I have two children."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q6',
      type: 'true-false',
      question: 'Sarah is 33 years old.',
      correctAnswer: 'true',
      explanation: 'John says "She is 33 years old."',
      points: 1
    }
  ]
};

// ============================================
// SPEAKING EXERCISE
// ============================================
export const A1_M1_L1_SPEAKING: SpeakingExercise = {
  id: 'a1-m1-l1-speaking-1',
  type: 'speaking',
  prompt: 'Introduce yourself using the verb "to be". Say your name, where you are from, your age, and your job or what you study. Speak for 30-60 seconds.',
  targetText: 'Hello, my name is... I am from... I am ... years old. I am a...',
  timeLimit: 60,
  evaluationCriteria: {
    pronunciation: true,
    fluency: true,
    grammar: true,
    vocabulary: true
  },
  hints: [
    'Start with: "Hello, my name is..."',
    'Use: "I am from..."',
    'Say your age: "I am ... years old"',
    'Talk about your job or studies: "I am a student" or "I am a teacher"',
    'You can add: "I am happy to be here"',
    'Try to speak slowly and clearly',
    'Don\'t worry about mistakes - practice makes perfect!'
  ]
};

// ============================================
// WRITING EXERCISE
// ============================================
export const A1_M1_L1_WRITING: WritingExercise = {
  id: 'a1-m1-l1-writing-1',
  type: 'writing',
  title: 'Writing: Introduce Yourself',
  prompt: 'Write a short paragraph (50-80 words) introducing yourself. Include your name, country, age, and occupation. Use the verb "to be" correctly.',
  wordLimit: { min: 50, max: 80 },
  timeLimit: 15,
  rubric: [
    {
      criteria: 'Content',
      points: 3,
      description: 'Includes name, country, age, and occupation'
    },
    {
      criteria: 'Grammar - Verb to be',
      points: 3,
      description: 'Uses "am", "is", "are" correctly'
    },
    {
      criteria: 'Vocabulary',
      points: 2,
      description: 'Uses appropriate vocabulary for A1 level'
    },
    {
      criteria: 'Organization',
      points: 2,
      description: 'Clear and logical paragraph structure'
    }
  ],
  tips: [
    'Start with "My name is..." or "I am..."',
    'Use "I am from..." to say your country',
    'Say your age: "I am ... years old"',
    'Mention your job or studies',
    'You can add extra information about your hobbies or family',
    'Check your spelling and grammar before submitting'
  ],
  exampleResponse: `My name is Laura and I am from Italy. I am 28 years old. I am a nurse and I work in a hospital. I am married and I have one child. My husband is a teacher. We are very happy together. I like my job because I help people every day.`
};

// ============================================
// PRONUNCIATION EXERCISE
// ============================================
export const A1_M1_L1_PRONUNCIATION: PronunciationPracticeExercise = {
  id: 'a1-m1-l1-pronunciation-1',
  type: 'pronunciation-practice',
  title: 'Pronunciation: Verb to be',
  targetSentences: [
    {
      text: "I am a student.",
      audioUrl: "/audio/a1-m1-l1-pronun-1.mp3",
      phonetic: "/aɪ æm ə ˈstuːdənt/"
    },
    {
      text: "You are my friend.",
      audioUrl: "/audio/a1-m1-l1-pronun-2.mp3",
      phonetic: "/juː ɑːr maɪ frend/"
    },
    {
      text: "He is from London.",
      audioUrl: "/audio/a1-m1-l1-pronun-3.mp3",
      phonetic: "/hiː ɪz frɒm ˈlʌndən/"
    },
    {
      text: "She is a teacher.",
      audioUrl: "/audio/a1-m1-l1-pronun-4.mp3",
      phonetic: "/ʃiː ɪz ə ˈtiːtʃər/"
    },
    {
      text: "We are happy.",
      audioUrl: "/audio/a1-m1-l1-pronun-5.mp3",
      phonetic: "/wiː ɑːr ˈhæpi/"
    },
    {
      text: "They are students.",
      audioUrl: "/audio/a1-m1-l1-pronun-6.mp3",
      phonetic: "/ðeɪ ɑːr ˈstuːdənts/"
    }
  ],
  focusPoints: [
    'Contractions: I\'m, you\'re, he\'s, she\'s, we\'re, they\'re',
    'Pronunciation of "are" /ɑːr/',
    'Weak form of "a" /ə/ before consonants',
    'Linking sounds in "I am" → "I\'m"'
  ],
  tips: [
    'Practice the contracted forms - they\'re very common in spoken English',
    'The vowel in "am" is short: /æm/',
    'In "are", the R sound is important in British English',
    'Listen carefully and repeat after each sentence',
    'Record yourself and compare with the model'
  ]
};

// Export all exercises for Module 1, Lesson 1
export const A1_M1_L1_ALL_EXERCISES = [
  A1_M1_L1_GRAMMAR_1,
  A1_M1_L1_GRAMMAR_2,
  A1_M1_L1_READING,
  A1_M1_L1_LISTENING,
  A1_M1_L1_SPEAKING,
  A1_M1_L1_WRITING,
  A1_M1_L1_PRONUNCIATION
];
