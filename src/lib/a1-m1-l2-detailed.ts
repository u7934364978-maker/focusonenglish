// A1 Module 1 Lesson 2: Origins and Occupations
// Redesigned to match the high-quality format of units 5, 6, and 7
// Focus: Countries, nationalities, professions, Subject Pronouns (he, she, it, we, they), Verb 'to be' (is, are) affirmative

import { Exercise } from './exercise-types';

// ============================================
// GRAMMAR EXERCISE 1: Subject Pronouns (he, she, it, we, they)
// ============================================
export const A1_M1_L2_GRAMMAR_1: Exercise = {
  id: 'a1-m1-l2-grammar-1',
  type: 'grammar',
  title: 'Subject Pronouns (he, she, it, we, they)',
  grammarPoint: 'Third Person and Plural Subject Pronouns',
  explanation: `Subject pronouns replace nouns as the subject of a sentence. They tell us WHO or WHAT does the action.
  
  **Pronouns:**
  • **He**: Used for a man or a boy.
  • **She**: Used for a woman or a girl.
  • **It**: Used for things, animals, or places.
  • **We**: Used for yourself and at least one other person.
  • **They**: Used for two or more people, things, or animals.
  
  **Examples:**
  • "John is a doctor. → **He** is a doctor."
  • "Maria is from Italy. → **She** is from Italy."
  • "The car is red. → **It** is red."
  • "Tom and I are friends. → **We** are friends."
  • "The students are happy. → **They** are happy."`,
  examples: [
    'He is a teacher.',
    'She is Brazilian.',
    'It is a beautiful city.',
    'We are at school.',
    'They are from Japan.'
  ],
  questions: [
    {
      id: 'a1-m1-l2-g1-q1',
      type: 'multiple-choice',
      question: 'Peter is from England. ___ is English.',
      options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'],
      correctAnswer: 'He',
      explanation: 'Peter is a man, so we use "He".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q2',
      type: 'multiple-choice',
      question: 'Anna is a nurse. ___ is 24 years old.',
      options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[We|Nosotros]]'],
      correctAnswer: 'She',
      explanation: 'Anna is a woman, so we use "She".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q3',
      type: 'multiple-choice',
      question: 'The house is very big. ___ is white.',
      options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'],
      correctAnswer: 'It',
      explanation: 'The house is a thing, so we use "It".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q4',
      type: 'multiple-choice',
      question: 'My brother and I are students. ___ are in class.',
      options: ['[[We|Nosotros]]', '[[They|Ellos]]', '[[You|Tú/Ustedes]]', '[[I|Yo]]'],
      correctAnswer: 'We',
      explanation: '"My brother and I" includes yourself, so we use "We".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q5',
      type: 'multiple-choice',
      question: 'Mark and Lisa are married. ___ are from Canada.',
      options: ['[[We|Nosotros]]', '[[You|Tú/Ustedes]]', '[[They|Ellos]]', '[[He|Él]]'],
      correctAnswer: 'They',
      explanation: 'Mark and Lisa are two people (plural), so we use "They".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q6',
      type: 'fill-blank',
      question: 'This is my dog. ___ is very friendly.',
      correctAnswer: 'It',
      acceptableAnswers: ['It', 'it', 'He', 'he', 'She', 'she'],
      explanation: 'We usually use "It" for animals, though "He" or "She" is also used for pets.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q7',
      type: 'fill-blank',
      question: 'My sister is a pilot. ___ works for an airline.',
      correctAnswer: 'She',
      acceptableAnswers: ['She', 'she'],
      explanation: 'Sister is female, so use "She".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q8',
      type: 'true-false',
      question: 'We use "They" for a group of things.',
      correctAnswer: 'True',
      explanation: 'True. "They" is the plural for people, animals, and things.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q9',
      type: 'multiple-choice',
      question: 'The Eiffel Tower is in Paris. ___ is famous.',
      options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'],
      correctAnswer: 'It',
      explanation: 'The Eiffel Tower is a thing/monument.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q10',
      type: 'multiple-choice',
      question: 'Sam and David are brothers. ___ are tall.',
      options: ['[[He|Él]]', '[[They|Ellos]]', '[[We|Nosotros]]', '[[It|Eso/Ello]]'],
      correctAnswer: 'They',
      explanation: 'Plural subject (two people).',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q11',
      type: 'fill-blank',
      question: 'My mother is from Italy. ___ is Italian.',
      correctAnswer: 'She',
      acceptableAnswers: ['She', 'she'],
      explanation: 'Mother is female.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q12',
      type: 'true-false',
      question: 'We use "He" for a girl.',
      correctAnswer: 'False',
      explanation: 'False. We use "She" for a girl or woman.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q13',
      type: 'multiple-choice',
      question: 'The books are on the table. ___ are new.',
      options: ['[[It|Eso/Ello]]', '[[He|Él]]', '[[They|Ellos]]', '[[We|Nosotros]]'],
      correctAnswer: 'They',
      explanation: 'Books (plural) = They.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q14',
      type: 'fill-blank',
      question: 'Juan and I are from Mexico. ___ speak Spanish.',
      correctAnswer: 'We',
      acceptableAnswers: ['We', 'we'],
      explanation: '"Juan and I" = We.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q15',
      type: 'multiple-choice',
      question: 'The car is fast. ___ is a Ferrari.',
      options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'],
      correctAnswer: 'It',
      explanation: 'Car is an object.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q16',
      type: 'fill-blank',
      question: 'My father is a chef. ___ is at the restaurant.',
      correctAnswer: 'He',
      acceptableAnswers: ['He', 'he'],
      explanation: 'Father is male.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q17',
      type: 'multiple-choice',
      question: 'The cat is on the sofa. ___ is sleeping.',
      options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'],
      correctAnswer: 'It',
      explanation: 'Usually "It" for animals.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q18',
      type: 'true-false',
      question: 'We use "We" for a group of people that doesn\'t include us.',
      correctAnswer: 'False',
      explanation: 'False. We use "They" for a group that doesn\'t include us. "We" must include the speaker.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q19',
      type: 'fill-blank',
      question: 'Paris and London are cities. ___ are in Europe.',
      correctAnswer: 'They',
      acceptableAnswers: ['They', 'they'],
      explanation: 'Plural things/places = They.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q20',
      type: 'multiple-choice',
      question: 'Mrs. Jones is the manager. ___ is in her office.',
      options: ['He', 'She', 'It', 'We'],
      correctAnswer: 'She',
      explanation: 'Mrs. Jones is a woman.',
      points: 1
    }
  ]
};

// ============================================
// GRAMMAR EXERCISE 2: Verb 'to be' (is, are) Affirmative
// ============================================
export const A1_M1_L2_GRAMMAR_2: Exercise = {
  id: 'a1-m1-l2-grammar-2',
  type: 'grammar',
  title: "Verb 'to be' (is, are) Affirmative",
  grammarPoint: "Affirmative forms of 'to be' for 3rd Person and Plural",
  explanation: `We use **is** and **are** to complete sentences with different subjects.
  
  **Rules:**
  • **is**: Used with singular subjects (**he, she, it**).
  • **are**: Used with plural subjects (**we, they**) and **you**.
  
  **Contractions:**
  • He is → **He's**
  • She is → **She's**
  • It is → **It's**
  • We are → **We're**
  • They are → **They're**
  
  **Examples:**
  • "He **is** a doctor."
  • "They **are** from Brazil."
  • "It **is** a nice day."`,
  examples: [
    "She's a teacher.",
    "They are students.",
    "He is very happy.",
    "We're from Spain.",
    "It is 10 o'clock."
  ],
  questions: [
    {
      id: 'a1-m1-l2-g2-q1',
      type: 'multiple-choice',
      question: 'He ___ a teacher.',
      options: ['[[am|soy/estoy]]', '[[is|es/está]]', '[[are|eres/estás]]', '[[be|ser/estar]]'],
      correctAnswer: 'is',
      explanation: 'We use "is" with "he".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q2',
      type: 'multiple-choice',
      question: 'They ___ from Japan.',
      options: ['[[am|soy/estoy]]', '[[is|es/está]]', '[[are|son/están]]', '[[be|ser/estar]]'],
      correctAnswer: 'are',
      explanation: 'We use "are" with "they".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q3',
      type: 'multiple-choice',
      question: 'She ___ my sister.',
      options: ['[[am|soy/estoy]]', '[[is|es/está]]', '[[are|eres/estás]]', '[[be|ser/estar]]'],
      correctAnswer: 'is',
      explanation: 'We use "is" with "she".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q4',
      type: 'multiple-choice',
      question: 'We ___ happy.',
      options: ['[[am|soy/estoy]]', '[[is|es/está]]', '[[are|somos/estamos]]', '[[be|ser/estar]]'],
      correctAnswer: 'are',
      explanation: 'We use "are" with "we".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q5',
      type: 'fill-blank',
      question: 'It ___ a beautiful day.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Use "is" with "it".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q6',
      type: 'fill-blank',
      question: 'John and Mary ___ married.',
      correctAnswer: 'are',
      acceptableAnswers: ['are'],
      explanation: 'Plural subject (they) = are.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q7',
      type: 'multiple-choice',
      question: 'Which contraction is correct for "He is"?',
      options: ['[[Hes|Él es]]', '[[He\'s|Él es]]', '[[He\'is|él\'es]]', '[[H\'is|h\'es]]'],
      correctAnswer: "He's",
      explanation: '"He\'s" is the standard contraction.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q8',
      type: 'multiple-choice',
      question: 'Which contraction is correct for "They are"?',
      options: ['[[Theyr|ellos son]]', '[[Theyre|ellos son]]', '[[They\'re|Ellos son]]', '[[They\'ar|ellos\'son]]'],
      correctAnswer: "They're",
      explanation: '"They\'re" is the standard contraction.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q9',
      type: 'true-false',
      question: 'We say "We is from China."',
      correctAnswer: 'False',
      explanation: 'False. We say "We are from China."',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q10',
      type: 'fill-blank',
      question: 'My cat ___ black and white.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: '"My cat" = it, so use "is".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q11',
      type: 'multiple-choice',
      question: 'The students ___ in the library.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'are',
      explanation: '"Students" (plural) = they, so use "are".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q12',
      type: 'fill-blank',
      question: 'Paris ___ a city in France.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Paris = it, so use "is".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q13',
      type: 'multiple-choice',
      question: 'My parents ___ 60 years old.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'are',
      explanation: '"Parents" (plural) = they, so use "are".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q14',
      type: 'true-false',
      question: '"It\'s a cat" is the same as "It is a cat".',
      correctAnswer: 'True',
      explanation: 'True. "It\'s" is the contraction of "It is".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q15',
      type: 'fill-blank',
      question: 'The coffee ___ very hot.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Coffee = it, so use "is".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q16',
      type: 'multiple-choice',
      question: 'Tom and I ___ friends.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'are',
      explanation: '"Tom and I" = we, so use "are".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q17',
      type: 'fill-blank',
      question: 'She ___ a very good singer.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Use "is" with "she".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q18',
      type: 'multiple-choice',
      question: 'Your keys ___ on the table.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'are',
      explanation: '"Keys" (plural) = they, so use "are".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q19',
      type: 'true-false',
      question: 'Contractions are only for formal writing.',
      correctAnswer: 'False',
      explanation: 'False. Contractions are very common in spoken English and informal writing.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q20',
      type: 'fill-blank',
      question: 'The sky ___ blue today.',
      correctAnswer: 'is',
      acceptableAnswers: ['is', "'s"],
      explanation: 'Sky = it, so use "is".',
      points: 1
    }
  ]
};

// ============================================
// READING EXERCISE
// ============================================
export const A1_M1_L2_READING: Exercise = {
  id: 'a1-m1-l2-reading-1',
  type: 'reading',
  title: 'Reading: International Students Club',
  text: `
# International Students Club

Welcome to our club! We have students from many countries.

**Meet Mario**: He is from Italy. He is 21 years old. He is a student of Architecture. He is very friendly.

**Meet Yuki**: She is from Japan. She is 23 years old. She is a student of Medicine. She is very intelligent.

**Meet Carlos and Elena**: They are from Spain. They are 22 years old. They are students of Business. They are very happy here.

**Meet we (the managers)**: I am Alex and this is Sarah. We are from England. We are the club managers. We are here to help you!

The club is a great place to meet people. It is open every day.
`,
  wordCount: 135,
  readingTime: 3,
  questions: [
    {
      id: 'a1-m1-l2-r-q1',
      type: 'multiple-choice',
      question: 'Where is Mario from?',
      options: ['[[Spain|España]]', '[[Japan|Japón]]', '[[Italy|Italia]]', '[[England|Inglaterra]]'],
      correctAnswer: 'Italy',
      explanation: 'The text says "He is from Italy".',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q2',
      type: 'multiple-choice',
      question: 'What is Yuki studying?',
      options: ['[[Architecture|Arquitectura]]', '[[Business|Negocios]]', '[[Medicine|Medicina]]', '[[Art|Arte]]'],
      correctAnswer: 'Medicine',
      explanation: 'Yuki is a "student of Medicine".',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q3',
      type: 'multiple-choice',
      question: 'Where are Carlos and Elena from?',
      options: ['[[Italy|Italia]]', '[[Japan|Japón]]', '[[Spain|España]]', '[[Mexico|México]]'],
      correctAnswer: 'Spain',
      explanation: 'They are from Spain.',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q4',
      type: 'true-false',
      question: 'Alex and Sarah are students.',
      correctAnswer: 'False',
      explanation: 'False. They are the "club managers".',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q5',
      type: 'multiple-choice',
      question: 'How old is Yuki?',
      options: ['[[21|21]]', '[[22|22]]', '[[23|23]]', '[[24|24]]'],
      correctAnswer: '23',
      explanation: 'She is 23 years old.',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q6',
      type: 'true-false',
      question: 'The club is open every day.',
      correctAnswer: 'True',
      explanation: 'True. The last sentence says "It is open every day".',
      points: 1
    }
  ]
};

// ============================================
// LISTENING EXERCISE
// ============================================
export const A1_M1_L2_LISTENING: Exercise = {
  id: 'a1-m1-l2-listening-1',
  type: 'listening',
  title: 'Listening: Job Interviews',
  audioUrl: '/audio/a1-m1-l2-listening-1.mp3', // Placeholder URL
  transcript: `
**Interviewer**: Next person, please. Hello!
**Candidate 1**: Hi. I am Julia. 
**Interviewer**: Nice to meet you, Julia. What is your profession?
**Candidate 1**: I am a nurse. I am from Germany.
**Interviewer**: Great. And who is this?
**Candidate 1**: This is my friend, Hans. He is a doctor. He is from Germany too.
**Interviewer**: Excellent. Are you both from Berlin?
**Candidate 1**: No, we are from Munich.
**Interviewer**: Thank you. And what about these people?
**Candidate 1**: They are our colleagues. They are from England. They are teachers.
**Interviewer**: Perfect. Thank you for the information.
`,
  questions: [
    {
      id: 'a1-m1-l2-l-q1',
      type: 'multiple-choice',
      question: 'What is Julia\'s job?',
      options: ['[[Doctor|Doctor/a]]', '[[Nurse|Enfermero/a]]', '[[Teacher|Profesor/a]]', '[[Manager|Gerente]]'],
      correctAnswer: 'Nurse',
      explanation: 'She says "I am a nurse".',
      points: 1
    },
    {
      id: 'a1-m1-l2-l-q2',
      type: 'multiple-choice',
      question: 'Where is Julia from?',
      options: ['[[England|Inglaterra]]', '[[Spain|España]]', '[[Germany|Alemania]]', '[[USA|EE.UU.]]'],
      correctAnswer: 'Germany',
      explanation: 'She says "I am from Germany".',
      points: 1
    },
    {
      id: 'a1-m1-l2-l-q3',
      type: 'fill-blank',
      question: 'Hans is a ___.',
      correctAnswer: 'doctor',
      acceptableAnswers: ['doctor', 'Doctor'],
      explanation: 'Julia says "He is a doctor".',
      points: 1
    },
    {
      id: 'a1-m1-l2-l-q4',
      type: 'multiple-choice',
      question: 'What city are Julia and Hans from?',
      options: ['[[Berlin|Berlín]]', '[[Munich|Múnich]]', '[[Hamburg|Hamburgo]]', '[[Frankfurt|Fráncfort]]'],
      correctAnswer: 'Munich',
      explanation: 'She says "No, we are from Munich".',
      points: 1
    },
    {
      id: 'a1-m1-l2-l-q5',
      type: 'true-false',
      question: 'The colleagues are from Germany.',
      correctAnswer: 'False',
      explanation: 'False. She says "They are from England".',
      points: 1
    },
    {
      id: 'a1-m1-l2-l-q6',
      type: 'multiple-choice',
      question: 'What is the job of the colleagues?',
      options: ['[[Nurses|Enfermeros/as]]', '[[Doctors|Doctores/as]]', '[[Teachers|Profesores/as]]', '[[Pilots|Pilotos]]'],
      correctAnswer: 'Teachers',
      explanation: 'She says "They are teachers".',
      points: 1
    }
  ]
};

// ============================================
// SPEAKING EXERCISE
// ============================================
export const A1_M1_L2_SPEAKING: Exercise = {
  id: 'a1-m1-l2-speaking-1',
  type: 'speaking',
  title: 'Speaking: Describe your friend',
  instructions: 'Record yourself describing a friend. Use "He" or "She". Include their name, country, and job.',
  prompts: [
    'Introduce your friend.',
    'Say their name.',
    'Say their country.',
    'Say their job.',
    'Say one quality (e.g., "He is nice").'
  ],
  evaluationCriteria: [
    'Correct use of He/She.',
    'Correct use of "is".',
    'Pronunciation of occupations.',
    'Accuracy of nationality/country.'
  ],
  questions: [
    {
      id: 'a1-m1-l2-s-q1',
      type: 'speaking',
      question: 'Describe a friend or family member.',
      expectedAnswer: 'This is my [friend/brother/sister]. He/She is [Name]. He/She is from [Country]. He/She is a [Job].',
      points: 3
    }
  ]
};

// ============================================
// WRITING EXERCISE
// ============================================
export const A1_M1_L2_WRITING: Exercise = {
  id: 'a1-m1-l2-writing-1',
  type: 'writing',
  title: 'Writing: About my Team',
  instructions: 'Write a short text (30-50 words) about a team of 3 people (you and two others). Describe origins and jobs.',
  prompt: 'Write about your team.',
  minWords: 30,
  maxWords: 50,
  rubric: [
    {
      criterion: 'Pronoun Usage',
      description: 'Correct use of I, He, She, We, and They.',
      maxScore: 4
    },
    {
      criterion: 'Verb to be',
      description: 'Correct use of am, is, are.',
      maxScore: 3
    },
    {
      criterion: 'Content',
      description: 'Includes name, origin, and job for all 3 people.',
      maxScore: 3
    }
  ]
};

// ============================================
// ALL EXERCISES CONSOLIDATED
// ============================================
export const A1_M1_L2_ALL_EXERCISES: Exercise[] = [
  A1_M1_L2_GRAMMAR_1,
  A1_M1_L2_GRAMMAR_2,
  A1_M1_L2_READING,
  A1_M1_L2_LISTENING,
  A1_M1_L2_SPEAKING,
  A1_M1_L2_WRITING
];
