// A1 Module 1 Lesson 3: Moods and Questions
// Redesigned to match the high-quality format of units 5, 6, and 7
// Focus: Adjectives of mood, Verb 'to be' negatives, Yes/No questions, and short answers

import { Exercise } from './exercise-types';

// ============================================
// GRAMMAR EXERCISE 1: Verb 'to be' Negatives (am not, isn't, aren't)
// ============================================
export const A1_M1_L3_GRAMMAR_1: Exercise = {
  id: 'a1-m1-l3-grammar-1',
  type: 'grammar',
  title: "Verb 'to be' Negatives",
  grammarPoint: "Negative forms of 'to be'",
  explanation: `To make a negative sentence with the verb **to be**, we add **not** after the verb.
  
  **Negative Forms:**
  • **I am not** (Contraction: **I'm not**)
  • **You are not** (Contractions: **You're not** / **You aren't**)
  • **He is not** (Contractions: **He's not** / **He isn't**)
  • **She is not** (Contractions: **She's not** / **She isn't**)
  • **It is not** (Contractions: **It's not** / **It isn't**)
  • **We are not** (Contractions: **We're not** / **We aren't**)
  • **They are not** (Contractions: **They're not** / **They aren't**)
  
  **Examples:**
  • "I **am not** sad."
  • "He **is not** at home."
  • "They **aren't** from Spain."`,
  examples: [
    "I'm not tired today.",
    "She isn't a doctor.",
    "We aren't from Italy.",
    "It isn't cold outside.",
    "You're not my teacher."
  ],
  questions: [
    {
      id: 'a1-m1-l3-g1-q1',
      type: 'multiple-choice',
      question: 'I ___ sad. I am happy!',
      options: ['am not', 'is not', 'are not', 'no am'],
      correctAnswer: 'am not',
      explanation: 'We use "am not" with "I".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q2',
      type: 'multiple-choice',
      question: 'He ___ from France. He is from Spain.',
      options: ['am not', 'isn\'t', 'aren\'t', 'not is'],
      correctAnswer: 'isn\'t',
      explanation: 'We use "isn\'t" (contraction of is not) with "he".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q3',
      type: 'multiple-choice',
      question: 'They ___ at school today.',
      options: ['am not', 'isn\'t', 'aren\'t', 'no are'],
      correctAnswer: 'aren\'t',
      explanation: 'We use "aren\'t" (contraction of are not) with "they".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q4',
      type: 'fill-blank',
      question: 'She ___ my sister. She is my friend.',
      correctAnswer: "isn't",
      acceptableAnswers: ["isn't", 'is not'],
      explanation: 'Use "is not" or "isn\'t" for singular third person.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q5',
      type: 'fill-blank',
      question: 'We ___ from England. We are from the USA.',
      correctAnswer: "aren't",
      acceptableAnswers: ["aren't", 'are not'],
      explanation: 'Use "are not" or "aren\'t" for plural subjects.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q6',
      type: 'multiple-choice',
      question: 'Which contraction is correct for "It is not"?',
      options: ["It'isnt", "It isn't", "It's not", "Both 2 and 3"],
      correctAnswer: 'Both 2 and 3',
      explanation: 'Both "It isn\'t" and "It\'s not" are correct contractions.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q7',
      type: 'true-false',
      question: 'We can say "I aren\'t tired."',
      correctAnswer: 'False',
      explanation: 'False. We must say "I am not tired" or "I\'m not tired".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q8',
      type: 'fill-blank',
      question: 'You ___ 20 years old. You are 25!',
      correctAnswer: "aren't",
      acceptableAnswers: ["aren't", 'are not', "'re not"],
      explanation: 'Use "are not" or contractions with "you".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q9',
      type: 'multiple-choice',
      question: 'The car ___ new. It is old.',
      options: ['am not', 'isn\'t', 'aren\'t', 'no'],
      correctAnswer: 'isn\'t',
      explanation: 'The car = it, so use "isn\'t".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q10',
      type: 'true-false',
      question: '"They\'re not" is a correct contraction.',
      correctAnswer: 'True',
      explanation: 'True. "They\'re not" is a common contraction of "They are not".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q11',
      type: 'fill-blank',
      question: 'I ___ hungry.',
      correctAnswer: "am not",
      acceptableAnswers: ["am not", "'m not"],
      explanation: 'Negative form for I.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q12',
      type: 'multiple-choice',
      question: 'My parents ___ here.',
      options: ['am not', 'isn\'t', 'aren\'t', 'not'],
      correctAnswer: 'aren\'t',
      explanation: '"My parents" (they) = aren\'t.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q13',
      type: 'fill-blank',
      question: 'It ___ hot today. It is cold.',
      correctAnswer: "isn't",
      acceptableAnswers: ["isn't", "is not", "'s not"],
      explanation: 'Negative form for it.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q14',
      type: 'multiple-choice',
      question: 'Which one is correct?',
      options: ["You no are a student.", "You are not a student.", "You not is a student.", "You am not a student."],
      correctAnswer: 'You are not a student.',
      explanation: '"You are not" is the correct negative form.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q15',
      type: 'true-false',
      question: '"He isn\'t" means the same as "He is not".',
      correctAnswer: 'True',
      explanation: 'True. "Isn\'t" is a contraction.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q16',
      type: 'fill-blank',
      question: 'London ___ in Italy.',
      correctAnswer: "isn't",
      acceptableAnswers: ["isn't", "is not", "'s not"],
      explanation: 'London = it, so use isn\'t.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q17',
      type: 'multiple-choice',
      question: 'We ___ tired.',
      options: ['am not', 'isn\'t', 'aren\'t', 'no'],
      correctAnswer: 'aren\'t',
      explanation: 'We = aren\'t.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q18',
      type: 'fill-blank',
      question: 'I ___ 10 years old. I am 20!',
      correctAnswer: "am not",
      acceptableAnswers: ["am not", "'m not"],
      explanation: 'Negative form for I.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q19',
      type: 'true-false',
      question: 'We use "don\'t" with the verb "to be" to make it negative.',
      correctAnswer: 'False',
      explanation: 'False. With "to be", we only add "not". We don\'t use "don\'t" (e.g., "I am not", not "I don\'t be").',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q20',
      type: 'multiple-choice',
      question: 'Which is correct?',
      options: ["She's not tired.", "She isn't tired.", "She is not tired.", "All are correct."],
      correctAnswer: 'All are correct.',
      explanation: 'All three forms are grammatically correct ways to express the negative.',
      points: 1
    }
  ]
};

// ============================================
// GRAMMAR EXERCISE 2: Verb 'to be' Yes/No Questions
// ============================================
export const A1_M1_L3_GRAMMAR_2: Exercise = {
  id: 'a1-m1-l3-grammar-2',
  type: 'grammar',
  title: "Verb 'to be' Yes/No Questions",
  grammarPoint: "Questions and short answers with 'to be'",
  explanation: `To make a question with the verb **to be**, we change the order: we put the verb **before** the subject.
  
  **Question Order:**
  • **Am I...?**
  • **Are you...?**
  • **Is he/she/it...?**
  • **Are we...?**
  • **Are they...?**
  
  **Short Answers:**
  • **Yes, I am. / No, I'm not.**
  • **Yes, you are. / No, you aren't.**
  • **Yes, he is. / No, he isn't.**
  • **Yes, they are. / No, they aren't.**
  
  *Note: We do NOT use contractions in affirmative short answers (Yes, I am - NOT Yes, I'm).*`,
  examples: [
    "Are you a student? - Yes, I am.",
    "Is she happy? - No, she isn't.",
    "Are they at home? - Yes, they are.",
    "Is it cold? - Yes, it is.",
    "Am I late? - No, you're not."
  ],
  questions: [
    {
      id: 'a1-m1-l3-g2-q1',
      type: 'multiple-choice',
      question: '___ you from Spain?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Are',
      explanation: 'We use "Are" for questions with "you".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q2',
      type: 'multiple-choice',
      question: '___ he a doctor?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Is',
      explanation: 'We use "Is" for questions with "he".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q3',
      type: 'fill-blank',
      question: '___ she your sister?',
      correctAnswer: 'Is',
      acceptableAnswers: ['Is', 'is'],
      explanation: 'Verb "is" before "she" for questions.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q4',
      type: 'multiple-choice',
      question: 'Are they happy? - Yes, they ___.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'are',
      explanation: 'Short answer affirmative for they.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q5',
      type: 'multiple-choice',
      question: 'Is it cold today? - No, it ___.',
      options: ['am not', 'isn\'t', 'aren\'t', 'no is'],
      correctAnswer: 'isn\'t',
      explanation: 'Short answer negative for it.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q6',
      type: 'fill-blank',
      question: '___ you and Tom friends? - Yes, we are.',
      correctAnswer: 'Are',
      acceptableAnswers: ['Are', 'are'],
      explanation: '"You and Tom" = plural, so use "Are".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q7',
      type: 'true-false',
      question: 'In a question, the subject comes BEFORE the verb "to be".',
      correctAnswer: 'False',
      explanation: 'False. In a question, the verb "to be" comes BEFORE the subject (e.g., "Are you...", not "You are...").',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q8',
      type: 'multiple-choice',
      question: 'Am I late? - No, you ___.',
      options: ['am not', 'aren\'t', 'isn\'t', 'not are'],
      correctAnswer: 'aren\'t',
      explanation: 'If the question is "Am I...?", the answer is "No, you aren\'t".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q9',
      type: 'fill-blank',
      question: '___ your name Luis? - Yes, it is.',
      correctAnswer: 'Is',
      acceptableAnswers: ['Is', 'is'],
      explanation: '"Your name" = it, so use "Is".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q10',
      type: 'true-false',
      question: 'Affirmative short answers like "Yes, I\'m" are correct.',
      correctAnswer: 'False',
      explanation: 'False. We do NOT use contractions in affirmative short answers. We say "Yes, I am".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q11',
      type: 'multiple-choice',
      question: '___ the students ready?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Are',
      explanation: '"Students" (plural) = are.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q12',
      type: 'fill-blank',
      question: 'Is she from Japan? - No, she ___.',
      correctAnswer: "isn't",
      acceptableAnswers: ["isn't", "is not"],
      explanation: 'Negative short answer for she.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q13',
      type: 'multiple-choice',
      question: '___ I in room 10?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Am',
      explanation: 'Am with I.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q14',
      type: 'true-false',
      question: '"Are you tired?" is a correct question.',
      correctAnswer: 'True',
      explanation: 'True. Verb before subject.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q15',
      type: 'fill-blank',
      question: '___ your parents at home?',
      correctAnswer: 'Are',
      acceptableAnswers: ['Are', 'are'],
      explanation: '"Parents" (plural) = are.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q16',
      type: 'multiple-choice',
      question: 'Are you hungry? - No, ___.',
      options: ["I am", "I'm not", "you aren't", "he isn't"],
      correctAnswer: "I'm not",
      explanation: 'The answer to "Are you...?" is "I am" or "I\'m not".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q17',
      type: 'fill-blank',
      question: '___ he your teacher?',
      correctAnswer: 'Is',
      acceptableAnswers: ['Is', 'is'],
      explanation: 'Is with he.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q18',
      type: 'multiple-choice',
      question: 'Is Maria 25? - Yes, ___.',
      options: ["he is", "she is", "it is", "she's"],
      correctAnswer: 'she is',
      explanation: 'No contractions in affirmative short answers.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q19',
      type: 'true-false',
      question: 'We can say "Is you from Spain?".',
      correctAnswer: 'False',
      explanation: 'False. We say "Are you from Spain?".',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q20',
      type: 'fill-blank',
      question: '___ we ready? - Yes, you are.',
      correctAnswer: 'Are',
      acceptableAnswers: ['Are', 'are'],
      explanation: 'Are with we.',
      points: 1
    }
  ]
};

// ============================================
// READING EXERCISE
// ============================================
export const A1_M1_L3_READING: Exercise = {
  id: 'a1-m1-l3-reading-1',
  type: 'reading',
  title: 'Reading: How are you today?',
  text: `
# How are you today?

**Emma**: Hi, Ben! How are you today?
**Ben**: Oh, hello Emma. I'm not very well, actually. I'm very tired.
**Emma**: I'm sorry to hear that. Are you sick?
**Ben**: No, I'm not sick. But I am very busy at work.
**Emma**: Oh, I see. What about your sister? Is she happy in her new job?
**Ben**: Yes, she is. She's very happy and excited. But my parents aren't happy today.
**Emma**: Why not? Are they sad?
**Ben**: No, they aren't sad. They are angry because the train is late!
**Emma**: Oh no! Well, I'm happy because it is Friday!
**Ben**: Haha, yes! I'm happy about that too.
`,
  wordCount: 120,
  readingTime: 2,
  questions: [
    {
      id: 'a1-m1-l3-r-q1',
      type: 'multiple-choice',
      question: 'How is Ben today?',
      options: ['He is sick', 'He is tired', 'He is happy', 'He is angry'],
      correctAnswer: 'He is tired',
      explanation: 'Ben says "I\'m very tired".',
      points: 1
    },
    {
      id: 'a1-m1-l3-r-q2',
      type: 'true-false',
      question: 'Ben is sick.',
      correctAnswer: 'False',
      explanation: 'False. Ben says "No, I\'m not sick".',
      points: 1
    },
    {
      id: 'a1-m1-l3-r-q3',
      type: 'multiple-choice',
      question: 'How is Ben\'s sister?',
      options: ['She is tired', 'She is sad', 'She is happy', 'She is angry'],
      correctAnswer: 'She is happy',
      explanation: 'Ben says "She\'s very happy and excited".',
      points: 1
    },
    {
      id: 'a1-m1-l3-r-q4',
      type: 'multiple-choice',
      question: 'Why are the parents angry?',
      options: ['They are sick', 'The train is late', 'Work is busy', 'It is Friday'],
      correctAnswer: 'The train is late',
      explanation: 'Ben says "They are angry because the train is late!".',
      points: 1
    },
    {
      id: 'a1-m1-l3-r-q5',
      type: 'true-false',
      question: 'Emma is happy.',
      correctAnswer: 'True',
      explanation: 'True. Emma says "I\'m happy because it is Friday!".',
      points: 1
    },
    {
      id: 'a1-m1-l3-r-q6',
      type: 'multiple-choice',
      question: 'What day is it?',
      options: ['Monday', 'Wednesday', 'Friday', 'Sunday'],
      correctAnswer: 'Friday',
      explanation: 'Emma mentions it is Friday.',
      points: 1
    }
  ]
};

// ============================================
// LISTENING EXERCISE
// ============================================
export const A1_M1_L3_LISTENING: Exercise = {
  id: 'a1-m1-l3-listening-1',
  type: 'listening',
  title: 'Listening: Are you happy?',
  audioUrl: '/audio/a1-m1-l3-listening-1.mp3', // Placeholder
  transcript: `
**Journalist**: Excuse me! I am from "City News". Are you happy today?
**Man**: Yes, I am! I'm very happy. It's a beautiful day.
**Journalist**: Great. And are you from this city?
**Man**: No, I'm not. I'm a tourist. I'm from Australia.
**Journalist**: Welcome! And what about your friend? Is he happy too?
**Man**: This is my brother, actually. He's not happy. He's hungry!
**Brother**: Yes, I am very hungry! Is there a restaurant near here?
**Journalist**: Yes, there is one in the park. Is it open?
**Man**: Let me see... yes, it is!
**Journalist**: Excellent. Thank you!
`,
  questions: [
    {
      id: 'a1-m1-l3-l-q1',
      type: 'multiple-choice',
      question: 'Who is the woman?',
      options: ['A teacher', 'A journalist', 'A doctor', 'A student'],
      correctAnswer: 'A journalist',
      explanation: 'She says "I am from City News".',
      points: 1
    },
    {
      id: 'a1-m1-l3-l-q2',
      type: 'true-false',
      question: 'The man is happy.',
      correctAnswer: 'True',
      explanation: 'True. He says "Yes, I am! I\'m very happy".',
      points: 1
    },
    {
      id: 'a1-m1-l3-l-q3',
      type: 'multiple-choice',
      question: 'Where is the man from?',
      options: ['England', 'USA', 'Australia', 'Canada'],
      correctAnswer: 'Australia',
      explanation: 'He says "I\'m from Australia".',
      points: 1
    },
    {
      id: 'a1-m1-l3-l-q4',
      type: 'multiple-choice',
      question: 'Who is the second man?',
      options: ['The first man\'s friend', 'The first man\'s brother', 'A manager', 'A driver'],
      correctAnswer: 'The first man\'s brother',
      explanation: 'The man says "This is my brother, actually".',
      points: 1
    },
    {
      id: 'a1-m1-l3-l-q5',
      type: 'true-false',
      question: 'The brother is happy.',
      correctAnswer: 'False',
      explanation: 'False. The man says "He\'s not happy. He\'s hungry!".',
      points: 1
    },
    {
      id: 'a1-m1-l3-l-q6',
      type: 'true-false',
      question: 'The restaurant is open.',
      correctAnswer: 'True',
      explanation: 'True. The man says "yes, it is!".',
      points: 1
    }
  ]
};

// ============================================
// SPEAKING EXERCISE
// ============================================
export const A1_M1_L3_SPEAKING: Exercise = {
  id: 'a1-m1-l3-speaking-1',
  type: 'speaking',
  title: 'Speaking: Feelings Q&A',
  instructions: 'Record yourself answering these questions about your feelings today.',
  prompts: [
    'Are you happy today?',
    'Are you tired?',
    'Are you hungry?',
    'Are you busy?'
  ],
  evaluationCriteria: [
    'Correct use of Yes/No short answers.',
    'Correct negative form "I am not".',
    'Pronunciation of adjectives (happy, tired, etc.).'
  ],
  questions: [
    {
      id: 'a1-m1-l3-s-q1',
      type: 'speaking',
      question: 'Answer: Are you happy today? Are you tired?',
      expectedAnswer: 'Yes, I am. / No, I am not. I am not tired.',
      points: 2
    }
  ]
};

// ============================================
// WRITING EXERCISE
// ============================================
export const A1_M1_L3_WRITING: Exercise = {
  id: 'a1-m1-l3-writing-1',
  type: 'writing',
  title: 'Writing: My Mood Diary',
  instructions: 'Write 4-5 short sentences (30-50 words) about how you and your family/friends are feeling today. Use negatives.',
  prompt: 'How are people feeling today?',
  minWords: 30,
  maxWords: 50,
  rubric: [
    {
      criterion: 'Grammar',
      description: 'Correct use of negative forms of "to be".',
      maxScore: 4
    },
    {
      criterion: 'Vocabulary',
      description: 'Use of mood adjectives.',
      maxScore: 3
    },
    {
      criterion: 'Accuracy',
      description: 'Subject-verb agreement.',
      maxScore: 3
    }
  ]
};

// ============================================
// ALL EXERCISES CONSOLIDATED
// ============================================
export const A1_M1_L3_ALL_EXERCISES: Exercise[] = [
  A1_M1_L3_GRAMMAR_1,
  A1_M1_L3_GRAMMAR_2,
  A1_M1_L3_READING,
  A1_M1_L3_LISTENING,
  A1_M1_L3_SPEAKING,
  A1_M1_L3_WRITING
];
