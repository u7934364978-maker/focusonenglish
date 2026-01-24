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
      question: 'Complete: My name ___ Sarah.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'is',
      explanation: 'We use "is" with singular nouns like "name".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q10',
      type: 'multiple-choice',
      question: 'Complete: Maria and Juan ___ from Mexico.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'are',
      explanation: 'We use "are" with plural subjects (Maria and Juan = they).',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q11',
      type: 'multiple-choice',
      question: 'Complete: My sister ___ a doctor.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'is',
      explanation: 'We use "is" with he/she/it. "My sister" = she.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q12',
      type: 'multiple-choice',
      question: 'Complete: The book ___ on the table.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'is',
      explanation: 'We use "is" with singular objects. "The book" = it.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q13',
      type: 'multiple-choice',
      question: 'Complete: My parents ___ Italian.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'are',
      explanation: 'We use "are" with plural nouns. "Parents" = they.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q14',
      type: 'multiple-choice',
      question: 'Complete: London ___ in England.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'is',
      explanation: 'We use "is" with singular places. "London" = it.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q15',
      type: 'multiple-choice',
      question: 'Complete: I ___ hungry right now.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'am',
      explanation: 'We use "am" with "I" to describe feelings.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q16',
      type: 'multiple-choice',
      question: 'Complete: The students ___ in the classroom.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'are',
      explanation: 'We use "are" with plural nouns. "Students" = they.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q17',
      type: 'multiple-choice',
      question: 'Complete: My friend ___ very friendly.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'is',
      explanation: 'We use "is" with singular nouns. "My friend" = he/she.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q18',
      type: 'multiple-choice',
      question: 'Complete: The weather ___ beautiful today.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'is',
      explanation: 'We use "is" with "the weather" (= it).',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q19',
      type: 'multiple-choice',
      question: 'Complete: We ___ ready to go.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'are',
      explanation: 'We use "are" with "we".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g1-q20',
      type: 'multiple-choice',
      question: 'Complete: This ___ my new phone.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'is',
      explanation: 'We use "is" with singular demonstratives. "This" refers to one thing = it.',
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
      type: 'fill-blank',
      question: 'My parents ___ at work.',
      correctAnswer: 'are',
      acceptableAnswers: ['are', "'re"],
      explanation: 'Use "are" with plural nouns. "My parents" = they.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q10',
      type: 'fill-blank',
      question: 'The coffee ___ hot.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Use "is" with singular nouns. "Coffee" = it.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q11',
      type: 'fill-blank',
      question: 'My brother ___ tall.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Use "is" with he/she. "My brother" = he.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q12',
      type: 'fill-blank',
      question: 'We ___ tired today.',
      correctAnswer: 'are',
      acceptableAnswers: ['are', "'re"],
      explanation: 'Use "are" with "we".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q13',
      type: 'fill-blank',
      question: 'The movie ___ interesting.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Use "is" with singular things. "The movie" = it.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q14',
      type: 'fill-blank',
      question: 'My sister and I ___ students.',
      correctAnswer: 'are',
      acceptableAnswers: ['are', "'re"],
      explanation: 'Use "are" with "my sister and I" = we.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q15',
      type: 'fill-blank',
      question: 'The children ___ in the garden.',
      correctAnswer: 'are',
      acceptableAnswers: ['are', "'re"],
      explanation: 'Use "are" with plural nouns. "Children" = they.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q16',
      type: 'fill-blank',
      question: 'This book ___ expensive.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Use "is" with singular objects. "This book" = it.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q17',
      type: 'fill-blank',
      question: 'I ___ happy to see you.',
      correctAnswer: 'am',
      acceptableAnswers: ['am', "'m"],
      explanation: 'Use "am" with "I".',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q18',
      type: 'fill-blank',
      question: 'The students ___ in class.',
      correctAnswer: 'are',
      acceptableAnswers: ['are', "'re"],
      explanation: 'Use "are" with plural nouns. "Students" = they.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q19',
      type: 'fill-blank',
      question: 'My car ___ blue.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Use "is" with singular possessions. "My car" = it.',
      points: 1
    },
    {
      id: 'a1-m1-l1-g2-q20',
      type: 'fill-blank',
      question: 'You and Tom ___ friends.',
      correctAnswer: 'are',
      acceptableAnswers: ['are', "'re"],
      explanation: 'Use "are" with "you and Tom" (plural).',
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
      type: 'fill-blank',
      question: 'Maria is ___ years old.',
      correctAnswer: '22',
      acceptableAnswers: ['22', 'twenty-two', 'twenty two'],
      explanation: 'The text says "I am 22 years old."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q10',
      type: 'fill-blank',
      question: 'Maria studies English in ___.',
      correctAnswer: 'London',
      acceptableAnswers: ['London', 'london'],
      explanation: 'The text says "I study English in London."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q11',
      type: 'multiple-choice',
      question: 'What is Mrs. Brown like?',
      options: ['Nice and friendly', 'Strict and serious', 'Boring', 'Angry'],
      correctAnswer: 'Nice and friendly',
      explanation: 'The text says "She is very nice and friendly."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q12',
      type: 'true-false',
      question: 'Maria and Tom are happy in their English class.',
      correctAnswer: 'true',
      explanation: 'The text says "We are happy in our English class."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q13',
      type: 'fill-blank',
      question: 'Tom is from ___.',
      correctAnswer: 'England',
      acceptableAnswers: ['England', 'england'],
      explanation: 'The text says "He is from England."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q14',
      type: 'multiple-choice',
      question: 'What adjectives describe the classroom?',
      options: ['Small and old', 'Big and comfortable', 'Dark and cold', 'Noisy and crowded'],
      correctAnswer: 'Big and comfortable',
      explanation: 'The text says "The classroom is big and comfortable."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q15',
      type: 'true-false',
      question: 'Maria is a teacher.',
      correctAnswer: 'false',
      explanation: 'The text says "I am a student."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q16',
      type: 'fill-blank',
      question: 'The teacher\'s name is Mrs. ___.',
      correctAnswer: 'Brown',
      acceptableAnswers: ['Brown', 'brown'],
      explanation: 'The text says "Our teacher is Mrs. Brown."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q17',
      type: 'multiple-choice',
      question: 'How are the classmates described?',
      options: ['Unfriendly and rude', 'Friendly and helpful', 'Quiet and shy', 'Lazy and tired'],
      correctAnswer: 'Friendly and helpful',
      explanation: 'The text says "They are friendly and helpful."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q18',
      type: 'true-false',
      question: 'London is described as boring.',
      correctAnswer: 'false',
      explanation: 'The text says London is "exciting and interesting."',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q19',
      type: 'fill-blank',
      question: 'Maria and Tom are ___ to study in London.',
      correctAnswer: 'lucky',
      acceptableAnswers: ['lucky', 'Lucky'],
      explanation: 'The text says "We are lucky to study here!"',
      points: 1
    },
    {
      id: 'a1-m1-l1-r1-q20',
      type: 'multiple-choice',
      question: 'What do Maria and Tom study?',
      options: ['Spanish', 'French', 'English', 'German'],
      correctAnswer: 'English',
      explanation: 'The text says "I study English in London."',
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
    },
    {
      id: 'a1-m1-l1-list-q7',
      type: 'fill-blank',
      question: 'John is a ___.',
      correctAnswer: 'teacher',
      acceptableAnswers: ['teacher', 'Teacher'],
      explanation: 'John clearly states his profession: "I am a teacher."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q8',
      type: 'multiple-choice',
      question: 'Where do John and Sarah live?',
      options: ['Canada', 'USA', 'London', 'Paris'],
      correctAnswer: 'London',
      explanation: 'John says "We are happy in our new home in London."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q9',
      type: 'true-false',
      question: 'John is single.',
      correctAnswer: 'false',
      explanation: 'John says "I am married", so he is not single.',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q10',
      type: 'fill-blank',
      question: 'John has ___ children.',
      correctAnswer: 'two',
      acceptableAnswers: ['two', 'Two', '2'],
      explanation: 'John says "I have two children."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q11',
      type: 'multiple-choice',
      question: 'What is the relationship between John and Sarah?',
      options: ['They are friends', 'They are colleagues', 'They are married', 'They are neighbors'],
      correctAnswer: 'They are married',
      explanation: 'John says "My wife is a doctor", indicating Sarah is his wife.',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q12',
      type: 'true-false',
      question: 'Sarah is older than John.',
      correctAnswer: 'false',
      explanation: 'John is 35 and Sarah is 33, so John is older.',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q13',
      type: 'fill-blank',
      question: "John's wife's name is ___.",
      correctAnswer: 'Sarah',
      acceptableAnswers: ['Sarah', 'sarah'],
      explanation: 'John introduces his wife: "Her name is Sarah."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q14',
      type: 'multiple-choice',
      question: 'How do John and Sarah feel about their home?',
      options: ['They are sad', 'They are angry', 'They are happy', 'They are worried'],
      correctAnswer: 'They are happy',
      explanation: 'John says "We are happy in our new home."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q15',
      type: 'true-false',
      question: 'Their home in London is old.',
      correctAnswer: 'false',
      explanation: 'John says "our new home", not old home.',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q16',
      type: 'multiple-choice',
      question: 'What country is John from?',
      options: ['United Kingdom', 'United States', 'Canada', 'Australia'],
      correctAnswer: 'Canada',
      explanation: 'John states "I am from Canada."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q17',
      type: 'fill-blank',
      question: 'John is ___ years old.',
      correctAnswer: '35',
      acceptableAnswers: ['35', 'thirty-five', 'thirty five'],
      explanation: 'John says "I am 35 years old."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q18',
      type: 'true-false',
      question: 'Sarah works in the medical profession.',
      correctAnswer: 'true',
      explanation: 'Sarah is a doctor, which is a medical profession.',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q19',
      type: 'multiple-choice',
      question: 'How many people are in John\'s family?',
      options: ['Two', 'Three', 'Four', 'Five'],
      correctAnswer: 'Four',
      explanation: 'John, Sarah, and their two children make four people.',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q20',
      type: 'fill-blank',
      question: 'Sarah is ___ years old.',
      correctAnswer: '33',
      acceptableAnswers: ['33', 'thirty-three', 'thirty three'],
      explanation: 'John says "She is 33 years old" about Sarah.',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q21',
      type: 'multiple-choice',
      question: 'What word describes their home?',
      options: ['Old', 'Small', 'New', 'Expensive'],
      correctAnswer: 'New',
      explanation: 'John says "our new home in London."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q22',
      type: 'true-false',
      question: 'Both John and Sarah have jobs.',
      correctAnswer: 'true',
      explanation: 'John is a teacher and Sarah is a doctor, so both work.',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q23',
      type: 'multiple-choice',
      question: 'Which word best describes John\'s marital status?',
      options: ['Single', 'Married', 'Divorced', 'Widowed'],
      correctAnswer: 'Married',
      explanation: 'John explicitly says "I am married."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q24',
      type: 'fill-blank',
      question: 'John and Sarah are ___ in their new home.',
      correctAnswer: 'happy',
      acceptableAnswers: ['happy', 'Happy'],
      explanation: 'John says "We are happy in our new home."',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q25',
      type: 'true-false',
      question: 'John is younger than 40 years old.',
      correctAnswer: 'true',
      explanation: 'John is 35 years old, which is younger than 40.',
      points: 1
    },
    {
      id: 'a1-m1-l1-list-q26',
      type: 'multiple-choice',
      question: 'What is John\'s profession?',
      options: ['Engineer', 'Doctor', 'Teacher', 'Lawyer'],
      correctAnswer: 'Teacher',
      explanation: 'John introduces himself saying "I am a teacher."',
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
    }
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
  A1_M1_L1_PRONUNCIATION,
  A1_M1_L1_VOCABULARY_1,
  A1_M1_L1_VOCABULARY_2
];
