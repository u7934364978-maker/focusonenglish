// ===============================================
// MÓDULO 1, LECCIÓN 1: VERB TO BE - CONTENIDO COMPLETO DETALLADO
// Este archivo contiene todos los ejercicios con contenido real y funcional
// ===============================================

// Note: We use 'any' type to avoid circular dependency with course-data-a1.ts
// The actual types are enforced when imported in course-data-a1.ts

// ============================================
// GRAMMAR EXERCISE 1: Formation and Use
// ============================================
export const A1_M1_L1_GRAMMAR_1 = {
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
    },
    {
      id: 'a1-m1-l1-g1-q9',
      type: 'multiple-choice',
      question: 'They ___ doctors.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'are',
      explanation: '"They" always takes "are". They are doctors.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q10',
      type: 'multiple-choice',
      question: 'My sister ___ a nurse.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'is',
      explanation: '"My sister" (she) takes "is". My sister is a nurse.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q11',
      type: 'fill-blank',
      question: 'We ___ from London.',
      correctAnswer: 'are',
      acceptableAnswers: ['are', "'re"],
      explanation: '"We" always takes "are". We are from London.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q12',
      type: 'multiple-choice',
      question: 'The book ___ interesting.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'is',
      explanation: '"The book" (it) takes "is". The book is interesting.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q13',
      type: 'fill-blank',
      question: 'My parents ___ happy.',
      correctAnswer: 'are',
      acceptableAnswers: ['are', "'re"],
      explanation: '"My parents" (they) takes "are". My parents are happy.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q14',
      type: 'multiple-choice',
      question: 'I ___ tired today.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'am',
      explanation: '"I" always takes "am". I am tired today.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q15',
      type: 'fill-blank',
      question: 'She ___ my best friend.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: '"She" takes "is". She is my best friend.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q16',
      type: 'multiple-choice',
      question: 'You ___ very kind.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'are',
      explanation: '"You" always takes "are". You are very kind.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q17',
      type: 'fill-blank',
      question: 'The cat ___ black.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: '"The cat" (it) takes "is". The cat is black.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q18',
      type: 'multiple-choice',
      question: 'We ___ in the same class.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'are',
      explanation: '"We" takes "are". We are in the same class.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q19',
      type: 'fill-blank',
      question: 'Tom ___ my brother.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: '"Tom" (he) takes "is". Tom is my brother.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q20',
      type: 'multiple-choice',
      question: 'They ___ at home now.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'are',
      explanation: '"They" takes "are". They are at home now.',
      points: 1
    }
  ]
};

// ============================================
// GRAMMAR EXERCISE 2: Practice
// ============================================
export const A1_M1_L1_GRAMMAR_2 = {
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
    },
    {
      id: 'a1-m1-l1-g2-q9',
      type: 'multiple-choice',
      question: '___ you a doctor?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Are',
      explanation: 'Questions with "you" use "Are". Are you a doctor?',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q10',
      type: 'fill-blank',
      question: 'They ___ from Spain. (negative)',
      correctAnswer: 'aren\'t',
      acceptableAnswers: ['aren\'t', 'are not', 'arent', 'are  not'],
      explanation: 'Negative with "they": They aren\'t from Spain.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q11',
      type: 'multiple-choice',
      question: '___ she your sister?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Is',
      explanation: 'Questions with "she" use "Is". Is she your sister?',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q12',
      type: 'fill-blank',
      question: 'I ___ happy today. (negative)',
      correctAnswer: '\'m not',
      acceptableAnswers: ['\'m not', 'am not', 'm not'],
      explanation: 'Negative with "I": I\'m not happy / I am not happy.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q13',
      type: 'multiple-choice',
      question: '___ they students?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Are',
      explanation: 'Questions with "they" use "Are". Are they students?',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q14',
      type: 'fill-blank',
      question: 'The book ___ on the table. (negative)',
      correctAnswer: 'isn\'t',
      acceptableAnswers: ['isn\'t', 'is not', 'isnt'],
      explanation: 'Negative with "it": The book isn\'t on the table.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q15',
      type: 'multiple-choice',
      question: '___ I late?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Am',
      explanation: 'Questions with "I" use "Am". Am I late?',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q16',
      type: 'fill-blank',
      question: 'We ___ tired. (negative)',
      correctAnswer: 'aren\'t',
      acceptableAnswers: ['aren\'t', 'are not', 'arent'],
      explanation: 'Negative with "we": We aren\'t tired.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q17',
      type: 'multiple-choice',
      question: '___ it cold today?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Is',
      explanation: 'Questions with "it" use "Is". Is it cold today?',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q18',
      type: 'fill-blank',
      question: 'My parents ___ at home. (negative)',
      correctAnswer: 'aren\'t',
      acceptableAnswers: ['aren\'t', 'are not', 'arent'],
      explanation: 'Negative with "they": My parents aren\'t at home.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q19',
      type: 'multiple-choice',
      question: '___ your name John?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Is',
      explanation: 'Questions with singular noun use "Is". Is your name John?',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q20',
      type: 'fill-blank',
      question: 'She ___ a teacher. (negative)',
      correctAnswer: 'isn\'t',
      acceptableAnswers: ['isn\'t', 'is not', 'isnt'],
      explanation: 'Negative with "she": She isn\'t a teacher.',
      points: 1
    }
  ]
};

// ============================================
// READING EXERCISE
// ============================================
export const A1_M1_L1_READING = {
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
    },
    {
      id: 'a1-m1-l1-r1-q9',
      type: 'multiple-choice',
      question: 'How old is Maria?',
      options: ['20', '21', '22', '23'],
      correctAnswer: '22',
      explanation: 'The text says "I am 22 years old."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q10',
      type: 'multiple-choice',
      question: 'What does Maria study?',
      options: ['Spanish', 'French', 'English', 'Math'],
      correctAnswer: 'English',
      explanation: 'The text says "I study English in London."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q11',
      type: 'multiple-choice',
      question: 'Where does Maria study?',
      options: ['Spain', 'America', 'London', 'England'],
      correctAnswer: 'London',
      explanation: 'The text says "I study English in London."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q12',
      type: 'true-false',
      question: 'Tom is a teacher.',
      correctAnswer: 'false',
      explanation: 'The text says "He is a student too."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q13',
      type: 'true-false',
      question: 'Mrs. Brown is nice and friendly.',
      correctAnswer: 'true',
      explanation: 'The text says "She is very nice and friendly."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q14',
      type: 'multiple-choice',
      question: 'Where is Tom from?',
      options: ['Spain', 'England', 'America', 'London'],
      correctAnswer: 'England',
      explanation: 'The text says "He is from England."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q15',
      type: 'true-false',
      question: 'Maria and Tom are happy in their English class.',
      correctAnswer: 'true',
      explanation: 'The text says "We are happy in our English class."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q16',
      type: 'multiple-choice',
      question: 'How are the classmates described?',
      options: ['Unfriendly', 'Friendly and helpful', 'Quiet', 'Boring'],
      correctAnswer: 'Friendly and helpful',
      explanation: 'The text says "They are friendly and helpful."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q17',
      type: 'true-false',
      question: 'London is exciting and interesting.',
      correctAnswer: 'true',
      explanation: 'The text says "It is exciting and interesting."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q18',
      type: 'multiple-choice',
      question: 'What does Maria say about the classroom?',
      options: ['Small and uncomfortable', 'Big and comfortable', 'Old and small', 'New and beautiful'],
      correctAnswer: 'Big and comfortable',
      explanation: 'The text says "The classroom is big and comfortable."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q19',
      type: 'true-false',
      question: 'Maria is a teacher.',
      correctAnswer: 'false',
      explanation: 'The text says "I am a student."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q20',
      type: 'true-false',
      question: 'Maria and Tom are lucky to study in London.',
      correctAnswer: 'true',
      explanation: 'The text says "We are lucky to study here!"',
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
export const A1_M1_L1_LISTENING = {
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
export const A1_M1_L1_SPEAKING = {
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
export const A1_M1_L1_WRITING = {
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
export const A1_M1_L1_PRONUNCIATION = {
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
  ],
  questions: [
    {
      id: 'a1-m1-l1-pronun-q1',
      type: 'multiple-choice',
      question: 'How do you pronounce "I am"?',
      options: ['/aɪ æm/', '/iː æm/', '/aɪ eɪm/', '/iː eɪm/'],
      correctAnswer: '/aɪ æm/',
      explanation: 'The correct pronunciation is /aɪ æm/. "I" sounds like "eye" and "am" has a short "a" sound.',
      points: 1
    },
    {
      id: 'a1-m1-l1-pronun-q2',
      type: 'multiple-choice',
      question: 'What is the contracted form of "I am"?',
      options: ["I'm", "Im", "I'am", "Iam"],
      correctAnswer: "I'm",
      explanation: 'The contraction of "I am" is "I\'m" with an apostrophe.',
      points: 1
    },
    {
      id: 'a1-m1-l1-pronun-q3',
      type: 'multiple-choice',
      question: 'Which word has the weak form /ə/ in "I am a student"?',
      options: ['I', 'am', 'a', 'student'],
      correctAnswer: 'a',
      explanation: 'The article "a" is pronounced with the weak form /ə/ (schwa sound) before consonants.',
      points: 1
    },
    {
      id: 'a1-m1-l1-pronun-q4',
      type: 'multiple-choice',
      question: 'How do you pronounce "you are"?',
      options: ['/juː ɑːr/', '/jɔː ɑːr/', '/juː eər/', '/jəʊ ɑːr/'],
      correctAnswer: '/juː ɑːr/',
      explanation: 'The correct pronunciation is /juː ɑːr/. "You" rhymes with "too" and "are" has a long "a" sound.',
      points: 1
    },
    {
      id: 'a1-m1-l1-pronun-q5',
      type: 'true-false',
      question: 'The contraction "he\'s" can mean both "he is" and "he has".',
      correctAnswer: 'True',
      explanation: 'True. "He\'s" can be a contraction of both "he is" (He\'s a teacher) and "he has" (He\'s finished).',
      points: 1
    },
    {
      id: 'a1-m1-l1-pronun-q6',
      type: 'fill-blank',
      question: 'Write the contraction: "They are" = ___',
      correctAnswer: "They're",
      acceptableAnswers: ["They're", "they're", "Theyre", "theyre"],
      explanation: 'The contraction of "they are" is "they\'re".',
      points: 1
    }
  ]
};

// ============================================
// VOCABULARY EXERCISE 1
// ============================================
export const A1_M1_L1_VOCABULARY_1 = {
  id: 'a1-m1-l1-vocabulary-1',
  type: 'vocabulary',
  title: 'Vocabulary: Personal Information',
  vocabularySet: [
    { word: 'name', definition: 'what you are called', example: 'My name is Maria.' },
    { word: 'age', definition: 'how old you are', example: 'I am 25 years old.' },
    { word: 'country', definition: 'the place where you are from', example: 'I am from Spain.' },
    { word: 'job', definition: 'the work you do', example: 'I am a teacher.' },
    { word: 'student', definition: 'a person who studies', example: 'She is a student.' },
    { word: 'teacher', definition: 'a person who teaches', example: 'He is a teacher.' },
    { word: 'happy', definition: 'feeling pleased', example: 'I am happy today.' },
    { word: 'friendly', definition: 'kind and nice to others', example: 'They are friendly.' }
  ],
  questions: [
    {
      id: 'a1-m1-l1-v1-q1',
      type: 'multiple-choice',
      question: 'What is a "student"?',
      options: ['A person who teaches', 'A person who studies', 'A person who works', 'A place to learn'],
      correctAnswer: 'A person who studies',
      explanation: 'A student is someone who learns or studies at school, college, or university.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q2',
      type: 'multiple-choice',
      question: 'What does "friendly" mean?',
      options: ['Angry', 'Sad', 'Kind and nice', 'Tired'],
      correctAnswer: 'Kind and nice',
      explanation: 'Friendly means being kind, nice, and pleasant to others.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q3',
      type: 'fill-blank',
      question: 'My ___ is John. (what you are called)',
      correctAnswer: 'name',
      explanation: 'Your name is what people call you. Example: My name is John.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q4',
      type: 'fill-blank',
      question: 'I am 30 years old. That is my ___.',
      correctAnswer: 'age',
      explanation: 'Age tells us how old someone is. Example: I am 30 years old.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q5',
      type: 'multiple-choice',
      question: 'What is a "teacher"?',
      options: ['A person who studies', 'A person who teaches', 'A person who cooks', 'A person who drives'],
      correctAnswer: 'A person who teaches',
      explanation: 'A teacher is someone who helps others learn and teaches lessons.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q6',
      type: 'fill-blank',
      question: 'I am from Spain. Spain is my ___.',
      correctAnswer: 'country',
      acceptableAnswers: ['country', 'Country'],
      explanation: 'A country is the place where you are from. Example: Spain, Canada, Japan.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q7',
      type: 'multiple-choice',
      question: 'Which is a pronoun?',
      options: ['book', 'she', 'happy', 'work'],
      correctAnswer: 'she',
      explanation: '"She" is a subject pronoun.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q8',
      type: 'fill-blank',
      question: '___ am a student. (first person pronoun)',
      correctAnswer: 'I',
      acceptableAnswers: ['I'],
      explanation: '"I" is the first person singular subject pronoun.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q9',
      type: 'multiple-choice',
      question: 'What is the plural of "I"?',
      options: ['You', 'We', 'They', 'Us'],
      correctAnswer: 'We',
      explanation: '"We" is the plural of "I".',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q10',
      type: 'fill-blank',
      question: '___ is my friend. (pronoun for male)',
      correctAnswer: 'He',
      acceptableAnswers: ['He', 'he'],
      explanation: '"He" is the male subject pronoun.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q11',
      type: 'multiple-choice',
      question: 'Which pronoun refers to things?',
      options: ['He', 'She', 'It', 'They'],
      correctAnswer: 'It',
      explanation: '"It" is used for things and animals.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q12',
      type: 'fill-blank',
      question: '___ are students. (plural pronoun)',
      correctAnswer: 'They',
      acceptableAnswers: ['They', 'they'],
      explanation: '"They" is the third person plural pronoun.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q13',
      type: 'multiple-choice',
      question: 'Which pronoun do we use for a girl?',
      options: ['He', 'She', 'It', 'They'],
      correctAnswer: 'She',
      explanation: '"She" is used for females.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q14',
      type: 'fill-blank',
      question: '___ are happy. (pronoun for speaker + others)',
      correctAnswer: 'We',
      acceptableAnswers: ['We', 'we'],
      explanation: '"We" includes the speaker and other people.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q15',
      type: 'multiple-choice',
      question: 'Which is correct: "He are" or "He is"?',
      options: ['He are', 'He is', 'Both', 'Neither'],
      correctAnswer: 'He is',
      explanation: '"He is" is correct. "He" takes "is".',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q16',
      type: 'fill-blank',
      question: '___ is a book. (pronoun for thing)',
      correctAnswer: 'It',
      acceptableAnswers: ['It', 'it'],
      explanation: '"It" is used for things.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q17',
      type: 'multiple-choice',
      question: 'Can we use "you" for one person or many people?',
      options: ['Only one person', 'Only many people', 'Both', 'Neither'],
      correctAnswer: 'Both',
      explanation: '"You" can be singular or plural.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q18',
      type: 'fill-blank',
      question: '___ am from Spain. (which pronoun?)',
      correctAnswer: 'I',
      acceptableAnswers: ['I'],
      explanation: 'Only "I" takes "am".',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q19',
      type: 'multiple-choice',
      question: 'Which pronoun for "my brother"?',
      options: ['I', 'He', 'She', 'We'],
      correctAnswer: 'He',
      explanation: '"My brother" is male, so we use "he".',
      points: 1
    },
    {
      id: 'a1-m1-l1-v1-q20',
      type: 'fill-blank',
      question: 'My sisters ___ doctors. Use the pronoun: ___',
      correctAnswer: 'They',
      acceptableAnswers: ['They', 'they'],
      explanation: '"My sisters" = "they" (plural).',
      points: 1
    }
  ]
};

// ============================================
// VOCABULARY EXERCISE 2
// ============================================
export const A1_M1_L1_VOCABULARY_2 = {
  id: 'a1-m1-l1-vocabulary-2',
  type: 'vocabulary',
  title: 'Vocabulary: Feelings and Emotions',
  vocabularySet: [
    { word: 'tired', definition: 'needing rest', example: 'I am tired after work.' },
    { word: 'excited', definition: 'very happy about something', example: 'We are excited about the trip!' },
    { word: 'sad', definition: 'unhappy', example: 'She is sad today.' },
    { word: 'angry', definition: 'very upset', example: 'He is angry about the news.' },
    { word: 'surprised', definition: 'feeling unexpected', example: 'I am surprised by the gift!' },
    { word: 'hungry', definition: 'needing food', example: 'They are hungry for lunch.' },
    { word: 'busy', definition: 'having a lot to do', example: 'We are busy with homework.' },
    { word: 'ready', definition: 'prepared', example: 'I am ready for the test.' }
  ],
  questions: [
    {
      id: 'a1-m1-l1-v2-q1',
      type: 'fill-blank',
      question: 'I need to sleep. I am ___.',
      correctAnswer: 'tired',
      acceptableAnswers: ['tired', 'Tired'],
      explanation: 'When you need rest or sleep, you feel tired.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q2',
      type: 'fill-blank',
      question: 'The birthday party is today! I am ___!',
      correctAnswer: 'excited',
      acceptableAnswers: ['excited', 'Excited', 'happy', 'Happy'],
      explanation: 'When something good is happening, you feel excited or happy.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q3',
      type: 'multiple-choice',
      question: 'What does "hungry" mean?',
      options: ['Needing sleep', 'Needing food', 'Needing water', 'Needing rest'],
      correctAnswer: 'Needing food',
      explanation: 'Hungry means you need to eat food. Example: I am hungry, let\'s have lunch!',
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q4',
      type: 'multiple-choice',
      question: 'If you are "ready", you are...',
      options: ['Tired', 'Prepared', 'Sad', 'Angry'],
      correctAnswer: 'Prepared',
      explanation: 'Ready means you are prepared for something. Example: I am ready for the exam.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q5',
      type: 'fill-blank',
      question: 'I have a lot of work. I am very ___.',
      correctAnswer: 'busy',
      acceptableAnswers: ['busy', 'Busy'],
      explanation: 'When you have many things to do, you are busy.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q6',
      type: 'true-false',
      question: 'If you are "surprised", something unexpected happened.',
      correctAnswer: 'True',
      explanation: 'True. Surprised means something happened that you did not expect.',
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q7',
      type: 'multiple-choice',
      question: 'What is the negative form of "I am"?',
      options: ["I amn't", "I'm not", "I not", "I aren't"],
      correctAnswer: "I'm not",
      explanation: "The negative is I'm not or I am not.",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q8',
      type: 'fill-blank',
      question: 'Short form of "she is": ___',
      correctAnswer: "she's",
      acceptableAnswers: ["she's", "shes"],
      explanation: "She is = She's",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q9',
      type: 'multiple-choice',
      question: 'What is the negative of "they are"?',
      options: ["they amn't", "they isn't", "they aren't", "they not"],
      correctAnswer: "they aren't",
      explanation: "The negative is they aren't or they are not.",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q10',
      type: 'fill-blank',
      question: 'Long form of "we\'re": ___',
      correctAnswer: 'we are',
      acceptableAnswers: ['we are', 'We are'],
      explanation: "We're = we are",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q11',
      type: 'multiple-choice',
      question: 'What is the short form of "it is"?',
      options: ["its", "it's", "its'", "it is"],
      correctAnswer: "it's",
      explanation: "It is = It's (with apostrophe)",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q12',
      type: 'fill-blank',
      question: 'Negative of "he is": ___',
      correctAnswer: "he isn't",
      acceptableAnswers: ["he isn't", 'he is not', 'he isnt'],
      explanation: "He is not = He isn't",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q13',
      type: 'multiple-choice',
      question: 'Long form of "I\'m"?',
      options: ['I are', 'I is', 'I am', 'I be'],
      correctAnswer: 'I am',
      explanation: "I'm = I am",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q14',
      type: 'fill-blank',
      question: 'Short form of "you are not": ___',
      correctAnswer: "you aren't",
      acceptableAnswers: ["you aren't", "you're not", 'you arent'],
      explanation: "You are not = You aren't or You're not",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q15',
      type: 'multiple-choice',
      question: 'What is the short form of "she is not"?',
      options: ["she amn't", "she isn't", "she aren't", "she not"],
      correctAnswer: "she isn't",
      explanation: "She is not = She isn't",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q16',
      type: 'fill-blank',
      question: 'Long form of "they\'re not": ___',
      correctAnswer: 'they are not',
      acceptableAnswers: ['they are not', 'They are not'],
      explanation: "They're not = They are not",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q17',
      type: 'multiple-choice',
      question: 'What is "we are" in short form?',
      options: ["wa're", "we're", "wer", "w'are"],
      correctAnswer: "we're",
      explanation: "We are = We're",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q18',
      type: 'fill-blank',
      question: 'Negative long form of "it is": ___',
      correctAnswer: 'it is not',
      acceptableAnswers: ['it is not', 'It is not'],
      explanation: "The negative is: it is not (or it isn't)",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q19',
      type: 'multiple-choice',
      question: 'Short form of "I am not"?',
      options: ["I amn't", "I'm not", "I not", "I aren't"],
      correctAnswer: "I'm not",
      explanation: "I am not = I'm not",
      points: 1
    },
    {
      id: 'a1-m1-l1-v2-q20',
      type: 'fill-blank',
      question: 'Short form of "they are": ___',
      correctAnswer: "they're",
      acceptableAnswers: ["they're", 'theyre'],
      explanation: "They are = They're",
      points: 1
    }
  ]
};

// Export all exercises for Module 1, Lesson 1


// ============================================
// SENTENCE COMPLETION EXERCISE
// ============================================
export const A1_M1_L1_SENTENCE_COMPLETION = {
  id: 'a1-m1-l1-sentence-completion',
  type: 'sentence-completion',
  title: 'Complete the Sentences',
  instructions: 'Complete each sentence with the correct form of "to be" (am, is, are).',
  sentences: [
    {
      id: 'sc1',
      prompt: 'My name ___ Maria.',
      correctCompletion: 'is',
      options: ['am', 'is', 'are'],
      explanation: 'We use "is" with third person singular (he, she, it, my name).',
      points: 1
    },
    {
      id: 'sc2',
      prompt: 'I ___ from London.',
      correctCompletion: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'We always use "am" with "I".',
      points: 1
    },
    {
      id: 'sc3',
      prompt: 'You ___ a good student.',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: 'We use "are" with "you".',
      points: 1
    },
    {
      id: 'sc4',
      prompt: 'They ___ my friends.',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: 'We use "are" with "they".',
      points: 1
    },
    {
      id: 'sc5',
      prompt: 'She ___ happy today.',
      correctCompletion: 'is',
      options: ['am', 'is', 'are'],
      explanation: 'We use "is" with "she".',
      points: 1
    },
    {
      id: 'sc6',
      prompt: 'We ___ in the classroom.',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: 'We use "are" with "we".',
      points: 1
    },
    {
      id: 'sc7',
      prompt: 'My friends ___ very kind.',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: '"My friends" (they) takes "are".',
      points: 1
    },
    {
      id: 'sc8',
      prompt: 'The weather ___ nice today.',
      correctCompletion: 'is',
      options: ['am', 'is', 'are'],
      explanation: '"The weather" (it) takes "is".',
      points: 1
    },
    {
      id: 'sc9',
      prompt: 'I ___ not tired.',
      correctCompletion: 'am',
      options: ['am', 'is', 'are'],
      explanation: '"I" always takes "am". I am not tired.',
      points: 1
    },
    {
      id: 'sc10',
      prompt: 'The cats ___ in the garden.',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: '"The cats" (they) takes "are".',
      points: 1
    },
    {
      id: 'sc11',
      prompt: 'My mother ___ a nurse.',
      correctCompletion: 'is',
      options: ['am', 'is', 'are'],
      explanation: '"My mother" (she) takes "is".',
      points: 1
    },
    {
      id: 'sc12',
      prompt: 'You ___ welcome.',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: '"You" takes "are". You are welcome.',
      points: 1
    },
    {
      id: 'sc13',
      prompt: 'It ___ cold outside.',
      correctCompletion: 'is',
      options: ['am', 'is', 'are'],
      explanation: '"It" takes "is". It is cold outside.',
      points: 1
    },
    {
      id: 'sc14',
      prompt: 'We ___ ready.',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: '"We" takes "are". We are ready.',
      points: 1
    },
    {
      id: 'sc15',
      prompt: 'The door ___ open.',
      correctCompletion: 'is',
      options: ['am', 'is', 'are'],
      explanation: '"The door" (it) takes "is".',
      points: 1
    },
    {
      id: 'sc16',
      prompt: 'My brothers ___ tall.',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: '"My brothers" (they) takes "are".',
      points: 1
    },
    {
      id: 'sc17',
      prompt: 'The car ___ new.',
      correctCompletion: 'is',
      options: ['am', 'is', 'are'],
      explanation: '"The car" (it) takes "is".',
      points: 1
    },
    {
      id: 'sc18',
      prompt: 'I ___ hungry.',
      correctCompletion: 'am',
      options: ['am', 'is', 'are'],
      explanation: '"I" takes "am". I am hungry.',
      points: 1
    },
    {
      id: 'sc19',
      prompt: 'They ___ at school.',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: '"They" takes "are". They are at school.',
      points: 1
    },
    {
      id: 'sc20',
      prompt: 'The book ___ interesting.',
      correctCompletion: 'is',
      options: ['am', 'is', 'are'],
      explanation: '"The book" (it) takes "is".',
      points: 1
    }
  ]
};

// ============================================
// ERROR IDENTIFICATION EXERCISE
// ============================================
export const A1_M1_L1_ERROR_IDENTIFICATION = {
  id: 'a1-m1-l1-error-identification',
  type: 'error-identification',
  title: 'Find the Errors',
  instructions: 'Read each sentence. If there is an error with the verb "to be", identify and correct it. If the sentence is correct, select "No error".',
  sentences: [
    {
      id: 'ei1',
      sentence: 'I is a teacher.',
      hasError: true,
      errorWord: 'is',
      correction: 'am',
      explanation: 'Incorrect! We use "am" with "I", not "is". Correct: I am a teacher.',
      points: 1
    },
    {
      id: 'ei2',
      sentence: 'She are from Spain.',
      hasError: true,
      errorWord: 'are',
      correction: 'is',
      explanation: 'Incorrect! We use "is" with "she", not "are". Correct: She is from Spain.',
      points: 1
    },
    {
      id: 'ei3',
      sentence: 'They are students.',
      hasError: false,
      explanation: 'Correct! This sentence has no errors.',
      points: 1
    },
    {
      id: 'ei4',
      sentence: 'He am happy.',
      hasError: true,
      errorWord: 'am',
      correction: 'is',
      explanation: 'Incorrect! We use "is" with "he", not "am". Correct: He is happy.',
      points: 1
    },
    {
      id: 'ei5',
      sentence: 'We is tired.',
      hasError: true,
      errorWord: 'is',
      correction: 'are',
      explanation: 'Incorrect! We use "are" with "we", not "is". Correct: We are tired.',
      points: 1
    },
    {
      id: 'ei6',
      sentence: 'You are my friend.',
      hasError: false,
      explanation: 'Correct! This sentence has no errors.',
      points: 1
    },
    {
      id: 'ei7',
      sentence: 'She are happy.',
      hasError: true,
      errorWord: 'are',
      correction: 'is',
      explanation: 'Use "is" with "she". Correct: She is happy.',
      points: 1
    },
    {
      id: 'ei8',
      sentence: 'I is a student.',
      hasError: true,
      errorWord: 'is',
      correction: 'am',
      explanation: 'Use "am" with "I". Correct: I am a student.',
      points: 1
    },
    {
      id: 'ei9',
      sentence: 'We is tired.',
      hasError: true,
      errorWord: 'is',
      correction: 'are',
      explanation: 'Use "are" with "we". Correct: We are tired.',
      points: 1
    },
    {
      id: 'ei10',
      sentence: 'The book is on the table.',
      hasError: false,
      explanation: 'Correct! No errors.',
      points: 1
    },
    {
      id: 'ei11',
      sentence: 'My friends is nice.',
      hasError: true,
      errorWord: 'is',
      correction: 'are',
      explanation: 'Use "are" with plural. Correct: My friends are nice.',
      points: 1
    },
    {
      id: 'ei12',
      sentence: 'You is welcome.',
      hasError: true,
      errorWord: 'is',
      correction: 'are',
      explanation: 'Use "are" with "you". Correct: You are welcome.',
      points: 1
    },
    {
      id: 'ei13',
      sentence: 'It are cold today.',
      hasError: true,
      errorWord: 'are',
      correction: 'is',
      explanation: 'Use "is" with "it". Correct: It is cold today.',
      points: 1
    },
    {
      id: 'ei14',
      sentence: 'I am from Spain.',
      hasError: false,
      explanation: 'Correct! No errors.',
      points: 1
    },
    {
      id: 'ei15',
      sentence: 'They is students.',
      hasError: true,
      errorWord: 'is',
      correction: 'are',
      explanation: 'Use "are" with "they". Correct: They are students.',
      points: 1
    },
    {
      id: 'ei16',
      sentence: 'My mother are a doctor.',
      hasError: true,
      errorWord: 'are',
      correction: 'is',
      explanation: 'Use "is" with singular. Correct: My mother is a doctor.',
      points: 1
    },
    {
      id: 'ei17',
      sentence: 'We are happy today.',
      hasError: false,
      explanation: 'Correct! No errors.',
      points: 1
    },
    {
      id: 'ei18',
      sentence: 'The cars is new.',
      hasError: true,
      errorWord: 'is',
      correction: 'are',
      explanation: 'Use "are" with plural. Correct: The cars are new.',
      points: 1
    },
    {
      id: 'ei19',
      sentence: 'She am my sister.',
      hasError: true,
      errorWord: 'am',
      correction: 'is',
      explanation: 'Use "is" with "she". Correct: She is my sister.',
      points: 1
    },
    {
      id: 'ei20',
      sentence: 'You and I am friends.',
      hasError: true,
      errorWord: 'am',
      correction: 'are',
      explanation: 'Use "are" with "you and I" (we). Correct: You and I are friends.',
      points: 1
    }
  ]
};

// ============================================
// GAP FILL TEXT EXERCISE
// ============================================
export const A1_M1_L1_GAP_FILL = {
  id: 'a1-m1-l1-gap-fill',
  type: 'gap-fill-text',
  title: 'Complete the Text',
  instructions: 'Read the text and fill in the gaps with the correct form of "to be" (am, is, are).',
  text: `Hello! My name {{1}} John and I {{2}} from New York. I {{3}} 25 years old. I {{4}} a teacher. 

My sister {{5}} Sarah. She {{6}} 22 years old and she {{7}} a student. We {{8}} very close. Our parents {{9}} doctors. They {{10}} very busy, but they {{11}} happy.

My best friend {{12}} Tom. He {{13}} from London. We {{14}} friends since university. Tom and I {{15}} both teachers now.

My family {{16}} very important to me. I {{17}} lucky to have them. They {{18}} always there for me. My life {{19}} good. I {{20}} grateful for everything.`,
  gaps: [
    {
      id: 'gap1',
      gapNumber: 1,
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      acceptableAlternatives: ["'s"],
      explanation: '"My name" takes "is" (third person singular).',
      points: 1
    },
    {
      id: 'gap2',
      gapNumber: 2,
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      acceptableAlternatives: ["'m"],
      explanation: '"I" always takes "am".',
      points: 1
    },
    {
      id: 'gap3',
      gapNumber: 3,
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      acceptableAlternatives: ["'m"],
      explanation: '"I" always takes "am".',
      points: 1
    },
    {
      id: 'gap4',
      gapNumber: 4,
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      acceptableAlternatives: ["'m"],
      explanation: '"I" always takes "am".',
      points: 1
    },
    {
      id: 'gap5',
      gapNumber: 5,
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      acceptableAlternatives: ["'s"],
      explanation: '"My sister" (she) takes "is".',
      points: 1
    },
    {
      id: 'gap6',
      gapNumber: 6,
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      acceptableAlternatives: ["'s"],
      explanation: '"She" takes "is".',
      points: 1
    },
    {
      id: 'gap7',
      gapNumber: 7,
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      acceptableAlternatives: ["'s"],
      explanation: '"She" takes "is".',
      points: 1
    },
    {
      id: 'gap8',
      gapNumber: 8,
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      acceptableAlternatives: ["'re"],
      explanation: '"We" takes "are".',
      points: 1
    },
    {
      id: 'gap9',
      gapNumber: 9,
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      acceptableAlternatives: ["'re"],
      explanation: '"Our parents" (they) takes "are".',
      points: 1
    },
    {
      id: 'gap10',
      gapNumber: 10,
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      acceptableAlternatives: ["'re"],
      explanation: '"They" takes "are".',
      points: 1
    },
    {
      id: 'gap11',
      gapNumber: 11,
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      acceptableAlternatives: ["'re"],
      explanation: '"They" takes "are".',
      points: 1
    },
    {
      id: 'gap12',
      gapNumber: 12,
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      acceptableAlternatives: ["'s"],
      explanation: '"My best friend" (he) takes "is".',
      points: 1
    },
    {
      id: 'gap13',
      gapNumber: 13,
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      acceptableAlternatives: ["'s"],
      explanation: '"He" takes "is".',
      points: 1
    },
    {
      id: 'gap14',
      gapNumber: 14,
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      acceptableAlternatives: ["'re"],
      explanation: '"We" takes "are".',
      points: 1
    },
    {
      id: 'gap15',
      gapNumber: 15,
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      acceptableAlternatives: ["'re"],
      explanation: '"Tom and I" (we) takes "are".',
      points: 1
    },
    {
      id: 'gap16',
      gapNumber: 16,
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      acceptableAlternatives: ["'s"],
      explanation: '"My family" takes "is" (singular unit).',
      points: 1
    },
    {
      id: 'gap17',
      gapNumber: 17,
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      acceptableAlternatives: ["'m"],
      explanation: '"I" always takes "am".',
      points: 1
    },
    {
      id: 'gap18',
      gapNumber: 18,
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      acceptableAlternatives: ["'re"],
      explanation: '"They" takes "are".',
      points: 1
    },
    {
      id: 'gap19',
      gapNumber: 19,
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      acceptableAlternatives: ["'s"],
      explanation: '"My life" (it) takes "is".',
      points: 1
    },
    {
      id: 'gap20',
      gapNumber: 20,
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      acceptableAlternatives: ["'m"],
      explanation: '"I" takes "am". I am grateful.',
      points: 1
    }
  ]
};

// ============================================
// SENTENCE REORDERING EXERCISE
// ============================================
export const A1_M1_L1_SENTENCE_REORDERING = {
  id: 'a1-m1-l1-sentence-reordering',
  type: 'sentence-reordering',
  title: 'Put the Words in Order',
  instructions: 'Arrange the words to make correct sentences with the verb "to be".',
  items: [
    {
      id: 'sr1',
      shuffledSentences: ['a', 'student', 'I', 'am'],
      correctOrder: [2, 3, 0, 1],
      context: 'Make a sentence about being a student',
      explanation: 'Correct order: I am a student. (Subject + verb to be + complement)',
      points: 1
    },
    {
      id: 'sr2',
      shuffledSentences: ['She', 'from', 'is', 'Italy'],
      correctOrder: [0, 2, 1, 3],
      context: 'Make a sentence about nationality',
      explanation: 'Correct order: She is from Italy. (Subject + verb to be + from + country)',
      points: 1
    },
    {
      id: 'sr3',
      shuffledSentences: ['We', 'teachers', 'are'],
      correctOrder: [0, 2, 1],
      context: 'Make a sentence about a job',
      explanation: 'Correct order: We are teachers. (Subject + verb to be + job)',
      points: 1
    },
    {
      id: 'sr4',
      shuffledSentences: ['happy', 'They', 'are', 'very'],
      correctOrder: [1, 2, 3, 0],
      context: 'Make a sentence about feelings',
      explanation: 'Correct order: They are very happy. (Subject + verb to be + adverb + adjective)',
      points: 1
    },
    {
      id: 'sr5',
      shuffledSentences: ['in', 'You', 'London', 'are'],
      correctOrder: [1, 3, 0, 2],
      context: 'Make a sentence about location',
      explanation: 'Correct order: You are in London. (Subject + verb to be + in + place)',
      points: 1
    },
    {
      id: 'sr6',
      shuffledSentences: ['old', 'years', 'I', 'am', '20'],
      correctOrder: [2, 3, 4, 1, 0],
      context: 'Make a sentence about age',
      explanation: 'Correct order: I am 20 years old. (Subject + verb to be + number + years old)',
      points: 1
    },
    {
      id: 'sr7',
      shuffledSentences: ['is', 'My', 'name', 'Maria'],
      correctOrder: [1, 2, 0, 3],
      context: 'Make a sentence about name',
      explanation: 'Correct order: My name is Maria. (Possessive + noun + verb + name)',
      points: 1
    },
    {
      id: 'sr8',
      shuffledSentences: ['a', 'He', 'is', 'doctor'],
      correctOrder: [1, 2, 0, 3],
      context: 'Make a sentence about profession',
      explanation: 'Correct order: He is a doctor. (Subject + verb + article + job)',
      points: 1
    },
    {
      id: 'sr9',
      shuffledSentences: ['They', 'friends', 'good', 'are'],
      correctOrder: [0, 3, 1, 2],
      context: 'Make a sentence with adjective',
      explanation: 'Correct order: They are good friends. (Subject + verb + adjective + noun)',
      points: 1
    },
    {
      id: 'sr10',
      shuffledSentences: ['from', 'I', 'Spain', 'am'],
      correctOrder: [1, 3, 0, 2],
      context: 'Make a sentence about origin',
      explanation: 'Correct order: I am from Spain. (Subject + verb + from + country)',
      points: 1
    },
    {
      id: 'sr11',
      shuffledSentences: ['is', 'She', 'beautiful', 'very'],
      correctOrder: [1, 0, 3, 2],
      context: 'Make a sentence with adverb',
      explanation: 'Correct order: She is very beautiful. (Subject + verb + adverb + adjective)',
      points: 1
    },
    {
      id: 'sr12',
      shuffledSentences: ['school', 'at', 'We', 'are'],
      correctOrder: [2, 3, 1, 0],
      context: 'Make a sentence about location',
      explanation: 'Correct order: We are at school. (Subject + verb + at + place)',
      points: 1
    },
    {
      id: 'sr13',
      shuffledSentences: ['old', 'years', '30', 'am', 'I'],
      correctOrder: [4, 3, 2, 1, 0],
      context: 'Make a sentence about age',
      explanation: 'Correct order: I am 30 years old. (Subject + verb + number + years old)',
      points: 1
    },
    {
      id: 'sr14',
      shuffledSentences: ['is', 'The', 'book', 'interesting'],
      correctOrder: [1, 2, 0, 3],
      context: 'Make a sentence describing something',
      explanation: 'Correct order: The book is interesting. (Article + noun + verb + adjective)',
      points: 1
    },
    {
      id: 'sr15',
      shuffledSentences: ['tired', 'They', 'very', 'are'],
      correctOrder: [1, 3, 2, 0],
      context: 'Make a sentence with very',
      explanation: 'Correct order: They are very tired. (Subject + verb + very + adjective)',
      points: 1
    },
    {
      id: 'sr16',
      shuffledSentences: ['My', 'doctor', 'father', 'is', 'a'],
      correctOrder: [0, 2, 3, 4, 1],
      context: 'Make a sentence about family member',
      explanation: 'Correct order: My father is a doctor. (Possessive + noun + verb + article + job)',
      points: 1
    },
    {
      id: 'sr17',
      shuffledSentences: ['students', 'are', 'We', 'university'],
      correctOrder: [2, 1, 3, 0],
      context: 'Make a sentence about being students',
      explanation: 'Correct order: We are university students. (Subject + verb + adjective + noun)',
      points: 1
    },
    {
      id: 'sr18',
      shuffledSentences: ['is', 'cold', 'It', 'today'],
      correctOrder: [2, 0, 1, 3],
      context: 'Make a sentence about weather',
      explanation: 'Correct order: It is cold today. (Subject + verb + adjective + time)',
      points: 1
    },
    {
      id: 'sr19',
      shuffledSentences: ['sisters', 'My', 'nurses', 'are'],
      correctOrder: [1, 0, 3, 2],
      context: 'Make a sentence about family',
      explanation: 'Correct order: My sisters are nurses. (Possessive + noun + verb + job)',
      points: 1
    },
    {
      id: 'sr20',
      shuffledSentences: ['am', 'I', 'happy', 'very'],
      correctOrder: [1, 0, 3, 2],
      context: 'Make a sentence about feeling',
      explanation: 'Correct order: I am very happy. (Subject + verb + adverb + adjective)',
      points: 1
    }
  ]
};

export const A1_M1_L1_ALL_EXERCISES = [
  A1_M1_L1_GRAMMAR_1,
  A1_M1_L1_GRAMMAR_2,
  A1_M1_L1_READING,
  A1_M1_L1_LISTENING,
  A1_M1_L1_SPEAKING,
  A1_M1_L1_WRITING,
  A1_M1_L1_PRONUNCIATION,
  A1_M1_L1_VOCABULARY_1,
  A1_M1_L1_VOCABULARY_2,
  A1_M1_L1_SENTENCE_COMPLETION,
  A1_M1_L1_ERROR_IDENTIFICATION,
  A1_M1_L1_GAP_FILL,
  A1_M1_L1_SENTENCE_REORDERING
];
