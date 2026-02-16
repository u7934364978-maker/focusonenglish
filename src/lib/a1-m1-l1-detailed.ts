// A1 Module 1 Lesson 1: Greetings and Personal Information
// Redesigned to match the high-quality format of units 5, 6, and 7
// Focus: Greetings, farewells, basic courtesy, Subject Pronouns (I, you), Verb 'to be' (am, are)

import { Exercise } from './exercise-types';

// ============================================
// GRAMMAR EXERCISE 1: Greetings & Subject Pronouns (I, you)
// ============================================
export const A1_M1_L1_GRAMMAR_1: Exercise = {
  id: 'a1-m1-l1-grammar-1',
  type: 'grammar',
  title: 'Greetings and Subject Pronouns (I, you)',
  grammarPoint: 'Basic Greetings & First/Second Person Pronouns',
  explanation: `In English, we use different greetings depending on the time of day and the situation. 
  
  **Common Greetings:**
  • Hello / Hi (Informal)
  • Good morning (Until 12:00 PM)
  • Good afternoon (12:00 PM to 6:00 PM)
  • Good evening (After 6:00 PM)
  
  **Subject Pronouns (I, you):**
  We use pronouns to replace or refer to people.
  • **I**: Used when talking about yourself (always capitalized).
  • **You**: Used when talking to one person (singular) or more people (plural).
  
  **Examples:**
  • "Hello, **I** am Maria."
  • "How are **you**?"
  • "**I** am fine, thank **you**."`,
  examples: [
    'Hello, I am John.',
    'Hi, how are you?',
    'Good morning! I am your teacher.',
    'Nice to meet you.',
    'I am from Spain. Are you from England?'
  ],
  questions: [
    {
      id: 'a1-m1-l1-g1-q1',
      type: 'multiple-choice',
      question: '___ am Sarah. Nice to meet you.',
      options: ['You', 'I', 'Me', 'He'],
      correctAnswer: 'I',
      explanation: 'We use "I" to talk about ourselves. It is always capitalized.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q2',
      type: 'multiple-choice',
      question: 'Hello! How are ___?',
      options: ['I', 'you', 'me', 'your'],
      correctAnswer: 'you',
      explanation: 'We use "you" when speaking directly to another person.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q3',
      type: 'multiple-choice',
      question: 'It is 9:00 AM. You say: "Good ___!"',
      options: ['afternoon', 'evening', 'night', 'morning'],
      correctAnswer: 'morning',
      explanation: 'We use "Good morning" before 12:00 PM.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q4',
      type: 'fill-blank',
      question: 'Nice to meet ___.',
      correctAnswer: 'you',
      acceptableAnswers: ['you'],
      explanation: 'The common phrase is "Nice to meet you".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q5',
      type: 'true-false',
      question: 'The pronoun "i" is always written in lowercase.',
      correctAnswer: 'False',
      explanation: 'False. The pronoun "I" is always capitalized.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q6',
      type: 'multiple-choice',
      question: 'It is 3:00 PM. You say: "Good ___!"',
      options: ['morning', 'afternoon', 'evening', 'night'],
      correctAnswer: 'afternoon',
      explanation: 'We use "Good afternoon" between 12:00 PM and 6:00 PM.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q7',
      type: 'fill-blank',
      question: 'Hello, ___ am from Mexico. And you?',
      correctAnswer: 'I',
      acceptableAnswers: ['I'],
      explanation: 'Use "I" to talk about your origin.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q8',
      type: 'multiple-choice',
      question: 'When you leave, you say: "___!"',
      options: ['Hello', 'Hi', 'Goodbye', 'Good morning'],
      correctAnswer: 'Goodbye',
      explanation: '"Goodbye" is used when leaving or finishing a conversation.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q9',
      type: 'multiple-choice',
      question: 'It is 8:00 PM. You arrive at a restaurant. You say: "Good ___!"',
      options: ['morning', 'afternoon', 'evening', 'night'],
      correctAnswer: 'evening',
      explanation: 'We use "Good evening" as a greeting after 6:00 PM. "Good night" is for leaving.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q10',
      type: 'fill-blank',
      question: 'How ___ you? - I am fine, thanks.',
      correctAnswer: 'are',
      acceptableAnswers: ['are'],
      explanation: 'The verb "are" is used with "you".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q11',
      type: 'multiple-choice',
      question: 'Informal way to say "Hello":',
      options: ['Good morning', 'Hi', 'Goodbye', 'Good evening'],
      correctAnswer: 'Hi',
      explanation: '"Hi" is a very common informal greeting.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q12',
      type: 'true-false',
      question: 'You can say "Good morning" at 11:30 AM.',
      correctAnswer: 'True',
      explanation: 'True. 11:30 AM is before noon.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q13',
      type: 'multiple-choice',
      question: 'I ___ a student. Are ___ a student too?',
      options: ['is / you', 'am / you', 'are / I', 'am / I'],
      correctAnswer: 'am / you',
      explanation: 'We use "am" with "I" and "are" with "you".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q14',
      type: 'fill-blank',
      question: 'See ___ later!',
      correctAnswer: 'you',
      acceptableAnswers: ['you'],
      explanation: '"See you later" is a common way to say goodbye.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q15',
      type: 'multiple-choice',
      question: 'Which is correct?',
      options: ['i am happy.', 'I am happy.', 'me am happy.', 'Am I happy?'],
      correctAnswer: 'I am happy.',
      explanation: '"I" must be capitalized, and it is the subject of the sentence.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q16',
      type: 'fill-blank',
      question: '___ morning, class!',
      correctAnswer: 'Good',
      acceptableAnswers: ['Good', 'good'],
      explanation: '"Good morning" is the standard formal greeting for the morning.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q17',
      type: 'multiple-choice',
      question: 'When you meet someone for the first time, you say:',
      options: ['Goodbye', 'Nice to meet you', 'How are you', 'Hi'],
      correctAnswer: 'Nice to meet you',
      explanation: '"Nice to meet you" is the standard polite phrase for first-time introductions.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q18',
      type: 'true-false',
      question: ' "You" can refer to one person or many people.',
      correctAnswer: 'True',
      explanation: 'True. "You" is both singular and plural in English.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q19',
      type: 'fill-blank',
      question: 'I ___ fine, thank you.',
      correctAnswer: 'am',
      acceptableAnswers: ['am', "'m"],
      explanation: 'The verb "am" follows the pronoun "I".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q20',
      type: 'multiple-choice',
      question: 'Which greeting is formal?',
      options: ['Hi', 'Hello', 'Good morning', 'Hey'],
      correctAnswer: 'Good morning',
      explanation: 'Time-based greetings like "Good morning" are more formal than "Hi" or "Hey".',
      points: 1
    }
  ]
};

// ============================================
// GRAMMAR EXERCISE 2: Verb 'to be' (am, are) Affirmative
// ============================================
export const A1_M1_L1_GRAMMAR_2: Exercise = {
  id: 'a1-m1-l1-grammar-2',
  type: 'grammar',
  title: "Verb 'to be' (am, are) Affirmative",
  grammarPoint: "Affirmative forms of 'to be' for I and You",
  explanation: `The verb **to be** is used to describe identity, nationality, profession, and feelings.
  
  **Forms for I and You:**
  • **I am** (Contraction: **I'm**)
  • **You are** (Contraction: **You're**)
  
  **Usage Examples:**
  • **Identity**: I am John. / You are Sarah.
  • **Profession**: I am a teacher. / You are a student.
  • **Origin**: I am from Canada. / You are from Brazil.
  • **Feelings**: I am happy. / You are tired.
  
  *Note: Contractions are very common in spoken English!*`,
  examples: [
    "I'm a doctor.",
    "You are very intelligent.",
    "I am from Italy.",
    "You're welcome.",
    "I'm 25 years old."
  ],
  questions: [
    {
      id: 'a1-m1-l1-g2-q1',
      type: 'multiple-choice',
      question: 'I ___ a student.',
      options: ['am', 'are', 'is', 'be'],
      correctAnswer: 'am',
      explanation: 'We always use "am" with the first person "I".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q2',
      type: 'multiple-choice',
      question: 'You ___ my friend.',
      options: ['am', 'are', 'is', 'be'],
      correctAnswer: 'are',
      explanation: 'We use "are" with the pronoun "you".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q3',
      type: 'fill-blank',
      question: 'I___ from New York.',
      correctAnswer: "'m",
      acceptableAnswers: ["'m", ' am'],
      explanation: 'I\'m is the contraction of "I am".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q4',
      type: 'fill-blank',
      question: 'You___ welcome.',
      correctAnswer: "'re",
      acceptableAnswers: ["'re", ' are'],
      explanation: 'You\'re is the contraction of "You are".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q5',
      type: 'true-false',
      question: 'We say "I are a teacher."',
      correctAnswer: 'False',
      explanation: 'False. We say "I am a teacher."',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q6',
      type: 'multiple-choice',
      question: 'Select the correct contraction for "I am":',
      options: ["I'is", "I're", "I'm", "Im"],
      correctAnswer: "I'm",
      explanation: '"I\'m" is the only correct contraction for "I am".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q7',
      type: 'multiple-choice',
      question: 'Select the correct contraction for "You are":',
      options: ["You'm", "You's", "You're", "Youre"],
      correctAnswer: "You're",
      explanation: '"You\'re" is the correct contraction for "You are".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q8',
      type: 'fill-blank',
      question: 'I ___ 30 years old.',
      correctAnswer: 'am',
      acceptableAnswers: ['am', "'m"],
      explanation: 'In English, we use "to be" to express age.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q9',
      type: 'multiple-choice',
      question: 'You ___ very kind.',
      options: ['am', 'are', 'is', 'be'],
      correctAnswer: 'are',
      explanation: '"You are" is used to describe qualities of a person.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q10',
      type: 'true-false',
      question: '"You are from Paris" is correct.',
      correctAnswer: 'True',
      explanation: 'True. This is the correct grammar for origin.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q11',
      type: 'fill-blank',
      question: 'Hello! I ___ your new neighbor.',
      correctAnswer: 'am',
      acceptableAnswers: ['am', "'m"],
      explanation: 'Use "am" to introduce yourself.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q12',
      type: 'multiple-choice',
      question: 'Which one is NOT a contraction?',
      options: ["I'm", "You're", "I am", "They're"],
      correctAnswer: "I am",
      explanation: '"I am" is the full form, not a contraction.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q13',
      type: 'fill-blank',
      question: 'I ___ happy to meet you.',
      correctAnswer: 'am',
      acceptableAnswers: ['am', "'m"],
      explanation: 'Verb "to be" is used for feelings/emotions.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q14',
      type: 'multiple-choice',
      question: 'You ___ in room 5.',
      options: ['am', 'are', 'is', 'be'],
      correctAnswer: 'are',
      explanation: 'Use "are" to indicate location for "you".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q15',
      type: 'true-false',
      question: 'The contraction for "You are" is "Your".',
      correctAnswer: 'False',
      explanation: 'False. The contraction is "You\'re". "Your" is a possessive adjective.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q16',
      type: 'fill-blank',
      question: 'I ___ hungry.',
      correctAnswer: 'am',
      acceptableAnswers: ['am', "'m"],
      explanation: 'Use "am" to describe physical states.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q17',
      type: 'multiple-choice',
      question: 'You ___ a pilot.',
      options: ['am', 'are', 'is', 'be'],
      correctAnswer: 'are',
      explanation: 'Use "are" for professions with "you".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q18',
      type: 'fill-blank',
      question: 'I ___ Australian.',
      correctAnswer: 'am',
      acceptableAnswers: ['am', "'m"],
      explanation: 'Use "am" for nationalities.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q19',
      type: 'true-false',
      question: '"I\'m" and "I am" mean the same thing.',
      correctAnswer: 'True',
      explanation: 'True. "I\'m" is just the shorter version.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q20',
      type: 'multiple-choice',
      question: 'Complete: Hello! ___ am David.',
      options: ['You', 'Me', 'I', 'He'],
      correctAnswer: 'I',
      explanation: 'I is the subject pronoun for self-introduction.',
      points: 1
    }
  ]
};

// ============================================
// READING EXERCISE
// ============================================
export const A1_M1_L1_READING: Exercise = {
  id: 'a1-m1-l1-reading-1',
  type: 'reading',
  title: 'Reading: Meeting at the Airport',
  text: `
# Meeting at the Airport

**Paul**: Good morning! Are you Sarah?
**Sarah**: Hello! Yes, I am Sarah Miller. And you?
**Paul**: I am Paul. I am your driver. 
**Sarah**: Nice to meet you, Paul.
**Paul**: Nice to meet you too. Welcome to London! 
**Sarah**: Thank you! I am very happy to be here.
**Paul**: Good. Are you from New York?
**Sarah**: No, I am from Chicago. 
**Paul**: Oh, Chicago! It is a great city. 
**Sarah**: Yes, it is. 
**Paul**: Well, come with me. The car is here.
**Sarah**: Thank you, Paul.
`,
  wordCount: 105,
  readingTime: 2,
  questions: [
    {
      id: 'a1-m1-l1-r-q1',
      type: 'multiple-choice',
      question: 'What is the woman\'s name?',
      options: ['Maria Miller', 'Sarah Miller', 'Sarah Paul', 'Paula Miller'],
      correctAnswer: 'Sarah Miller',
      explanation: 'She says "I am Sarah Miller".',
      points: 1
    },
    {
      id: 'a1-m1-l1-r-q2',
      type: 'multiple-choice',
      question: 'What is Paul\'s job?',
      options: ['Teacher', 'Doctor', 'Driver', 'Pilot'],
      correctAnswer: 'Driver',
      explanation: 'Paul says "I am your driver".',
      points: 1
    },
    {
      id: 'a1-m1-l1-r-q3',
      type: 'multiple-choice',
      question: 'Where are they?',
      options: ['At a school', 'At a hospital', 'At the airport', 'At a restaurant'],
      correctAnswer: 'At the airport',
      explanation: 'The title and the context of a driver meeting someone indicate they are at the airport.',
      points: 1
    },
    {
      id: 'a1-m1-l1-r-q4',
      type: 'true-false',
      question: 'Sarah is from New York.',
      correctAnswer: 'False',
      explanation: 'False. Sarah says "No, I am from Chicago".',
      points: 1
    },
    {
      id: 'a1-m1-l1-r-q5',
      type: 'multiple-choice',
      question: 'How does Sarah feel?',
      options: ['Sad', 'Happy', 'Tired', 'Angry'],
      correctAnswer: 'Happy',
      explanation: 'Sarah says "I am very happy to be here".',
      points: 1
    },
    {
      id: 'a1-m1-l1-r-q6',
      type: 'true-false',
      question: 'They are in London.',
      correctAnswer: 'True',
      explanation: 'True. Paul says "Welcome to London!".',
      points: 1
    }
  ]
};

// ============================================
// LISTENING EXERCISE
// ============================================
export const A1_M1_L1_LISTENING: Exercise = {
  id: 'a1-m1-l1-listening-1',
  type: 'listening',
  title: 'Listening: At the Information Desk',
  audioUrl: '/audio/a1-m1-l1-listening-1.mp3', // Placeholder URL
  transcript: `
**Officer**: Good afternoon. Can I help you?
**Student**: Hello. Yes, I am a new student. 
**Officer**: Great! What is your name?
**Student**: My name is Luis Garcia.
**Officer**: How do you spell your first name?
**Student**: L-U-I-S.
**Officer**: Thank you, Luis. And where are you from?
**Student**: I am from Spain. I am from Madrid.
**Officer**: Excellent. Welcome to the school!
**Student**: Thank you. Have a nice day!
**Officer**: You too. Goodbye!
`,
  questions: [
    {
      id: 'a1-m1-l1-l-q1',
      type: 'multiple-choice',
      question: 'What time of day is it?',
      options: ['Morning', 'Afternoon', 'Evening', 'Night'],
      correctAnswer: 'Afternoon',
      explanation: 'The officer starts with "Good afternoon".',
      points: 1
    },
    {
      id: 'a1-m1-l1-l-q2',
      type: 'multiple-choice',
      question: 'What is the student\'s first name?',
      options: ['Luis', 'Lucas', 'Louis', 'Luigi'],
      correctAnswer: 'Luis',
      explanation: 'He says his name is Luis Garcia.',
      points: 1
    },
    {
      id: 'a1-m1-l1-l-q3',
      type: 'fill-blank',
      question: 'He is from ___.',
      correctAnswer: 'Spain',
      acceptableAnswers: ['Spain', 'spain'],
      explanation: 'Luis says "I am from Spain".',
      points: 1
    },
    {
      id: 'a1-m1-l1-l-q4',
      type: 'multiple-choice',
      question: 'What is his city?',
      options: ['Barcelona', 'Valencia', 'Madrid', 'Seville'],
      correctAnswer: 'Madrid',
      explanation: 'He says "I am from Madrid".',
      points: 1
    },
    {
      id: 'a1-m1-l1-l-q5',
      type: 'true-false',
      question: 'Luis is a teacher.',
      correctAnswer: 'False',
      explanation: 'False. He says "I am a new student".',
      points: 1
    },
    {
      id: 'a1-m1-l1-l-q6',
      type: 'multiple-choice',
      question: 'What does the officer say at the end?',
      options: ['Hello', 'Good morning', 'Goodbye', 'Hi'],
      correctAnswer: 'Goodbye',
      explanation: 'The officer says "Goodbye!" at the end of the conversation.',
      points: 1
    }
  ]
};

// ============================================
// SPEAKING EXERCISE
// ============================================
export const A1_M1_L1_SPEAKING: Exercise = {
  id: 'a1-m1-l1-speaking-1',
  type: 'speaking',
  title: 'Speaking: Introduce Yourself',
  instructions: 'Record yourself introducing yourself. Use the prompts below.',
  prompts: [
    'Say hello.',
    'Say your name.',
    'Say where you are from.',
    'Say "Nice to meet you".'
  ],
  evaluationCriteria: [
    'Clear pronunciation of greetings.',
    'Correct use of "I am".',
    'Accuracy of "from [Country]".',
    'Intonation of the greeting.'
  ],
  questions: [
    {
      id: 'a1-m1-l1-s-q1',
      type: 'speaking',
      question: 'Introduce yourself formally.',
      expectedAnswer: 'Hello, I am [Name]. I am from [Country]. Nice to meet you.',
      points: 2
    }
  ]
};

// ============================================
// WRITING EXERCISE
// ============================================
export const A1_M1_L1_WRITING: Exercise = {
  id: 'a1-m1-l1-writing-1',
  type: 'writing',
  title: 'Writing: My Personal ID',
  instructions: 'Write a short introduction about yourself (20-40 words). Include your name, your country, and your job or status as a student.',
  prompt: 'Write your personal introduction.',
  minWords: 20,
  maxWords: 40,
  rubric: [
    {
      criterion: 'Grammar',
      description: 'Correct use of "I am" and capitalization of "I".',
      maxScore: 4
    },
    {
      criterion: 'Vocabulary',
      description: 'Use of greetings and basic personal info.',
      maxScore: 3
    },
    {
      criterion: 'Punctuation',
      description: 'Correct use of periods and commas.',
      maxScore: 3
    }
  ]
};

// ============================================
// ALL EXERCISES CONSOLIDATED
// ============================================
export const A1_M1_L1_ALL_EXERCISES: Exercise[] = [
  A1_M1_L1_GRAMMAR_1,
  A1_M1_L1_GRAMMAR_2,
  A1_M1_L1_READING,
  A1_M1_L1_LISTENING,
  A1_M1_L1_SPEAKING,
  A1_M1_L1_WRITING
];
