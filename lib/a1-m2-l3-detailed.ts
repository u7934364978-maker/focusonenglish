// A1 Module 2 Lesson 3: There is/There are + Prepositions of Place
// Complete exercises with all types

// Import the existing traditional exercises
import { A1_MODULE_2_LESSON_3 } from './a1-module2-lesson3';

// ============================================
// SENTENCE COMPLETION EXERCISE
// ============================================
export const A1_M2_L3_SENTENCE_COMPLETION = {
  id: 'a1-m2-l3-sentence-completion',
  type: 'sentence-completion',
  title: 'Complete Sentences with There is/There are',
  instructions: 'Complete each sentence using "there is" or "there are".',
  sentences: [
    {
      id: 'sc1',
      prompt: '___ a book on the table.',
      correctCompletion: 'There is',
      options: ['There is', 'There are', 'Is there', 'Are there'],
      explanation: 'Use "There is" with singular nouns (a book).',
      points: 1
    },
    {
      id: 'sc2',
      prompt: '___ three chairs in the room.',
      correctCompletion: 'There are',
      options: ['There is', 'There are', 'Is there', 'Are there'],
      explanation: 'Use "There are" with plural nouns (three chairs).',
      points: 1
    },
    {
      id: 'sc3',
      prompt: '___ a supermarket near here?',
      correctCompletion: 'Is there',
      options: ['There is', 'There are', 'Is there', 'Are there'],
      explanation: 'Questions with singular use "Is there".',
      points: 1
    },
    {
      id: 'sc4',
      prompt: '___ any parks in your city?',
      correctCompletion: 'Are there',
      options: ['There is', 'There are', 'Is there', 'Are there'],
      explanation: 'Questions with plural use "Are there".',
      points: 1
    },
    {
      id: 'sc5',
      prompt: 'The cat is ___ the table.',
      correctCompletion: 'under',
      options: ['under', 'in', 'on', 'behind'],
      explanation: 'Under = debajo de.',
      points: 1
    },
    {
      id: 'sc6',
      prompt: 'My house is ___ the school.',
      correctCompletion: 'next to',
      options: ['next to', 'in', 'on', 'under'],
      explanation: 'Next to = al lado de.',
      points: 1
    }
  ]
};

// ============================================
// ERROR IDENTIFICATION EXERCISE
// ============================================
export const A1_M2_L3_ERROR_IDENTIFICATION = {
  id: 'a1-m2-l3-error-identification',
  type: 'error-identification',
  title: 'Find Errors with There is/There are',
  instructions: 'Find and correct errors related to there is/there are.',
  sentences: [
    {
      id: 'ei1',
      sentence: 'There are a cat on the sofa.',
      hasError: true,
      errorWord: 'are',
      correction: 'is',
      explanation: 'Use "There is" with singular nouns. Correct: There is a cat on the sofa.',
      points: 1
    },
    {
      id: 'ei2',
      sentence: 'There is three books on the desk.',
      hasError: true,
      errorWord: 'is',
      correction: 'are',
      explanation: 'Use "There are" with plural nouns. Correct: There are three books on the desk.',
      points: 1
    },
    {
      id: 'ei3',
      sentence: 'Is there any shops near here?',
      hasError: true,
      errorWord: 'Is',
      correction: 'Are',
      explanation: 'Use "Are there" with plural nouns. Correct: Are there any shops near here?',
      points: 1
    },
    {
      id: 'ei4',
      sentence: 'There is a park next to my house.',
      hasError: false,
      explanation: 'Correct! This sentence has no errors.',
      points: 1
    },
    {
      id: 'ei5',
      sentence: 'The book is in the table.',
      hasError: true,
      errorWord: 'in',
      correction: 'on',
      explanation: 'Use "on" for surfaces. Correct: The book is on the table.',
      points: 1
    },
    {
      id: 'ei6',
      sentence: 'There are a computer in my room.',
      hasError: true,
      errorWord: 'are',
      correction: 'is',
      explanation: 'Use "There is" with singular. Correct: There is a computer in my room.',
      points: 1
    }
  ]
};

// ============================================
// GAP FILL TEXT EXERCISE
// ============================================
export const A1_M2_L3_GAP_FILL = {
  id: 'a1-m2-l3-gap-fill',
  type: 'gap-fill-text',
  title: 'My Living Room',
  instructions: 'Fill in the gaps with the correct words.',
  text: `My living room is very nice. {{1}} a big sofa {{2}} the window. The sofa is blue and comfortable.

{{3}} a TV {{4}} the wall. Next to the TV, {{5}} some plants. I love plants!

{{6}} the sofa, there is a small table. {{7}} the table, there are some books and magazines. My cat likes to sleep {{8}} the table.

There {{9}} any chairs in my living room, but there are two cushions on the floor. Behind the sofa, there {{10}} a lamp.

I really love my living room!`,
  gaps: [
    {
      id: 'gap1',
      gapNumber: 1,
      correctAnswer: 'There is',
      options: ['There is', 'There are', 'Is there'],
      explanation: 'Singular noun (a big sofa).',
      points: 1
    },
    {
      id: 'gap2',
      gapNumber: 2,
      correctAnswer: 'next to',
      options: ['next to', 'under', 'in'],
      explanation: 'Next to = al lado de.',
      points: 1
    },
    {
      id: 'gap3',
      gapNumber: 3,
      correctAnswer: 'There is',
      options: ['There is', 'There are', 'Are there'],
      explanation: 'Singular noun (a TV).',
      points: 1
    },
    {
      id: 'gap4',
      gapNumber: 4,
      correctAnswer: 'on',
      options: ['on', 'in', 'under'],
      explanation: 'On the wall = en la pared.',
      points: 1
    },
    {
      id: 'gap5',
      gapNumber: 5,
      correctAnswer: 'there are',
      options: ['there are', 'there is', 'is there'],
      explanation: 'Plural noun (some plants).',
      points: 1
    },
    {
      id: 'gap6',
      gapNumber: 6,
      correctAnswer: 'In front of',
      options: ['In front of', 'Behind', 'Under'],
      explanation: 'In front of = delante de.',
      points: 1
    },
    {
      id: 'gap7',
      gapNumber: 7,
      correctAnswer: 'On',
      options: ['On', 'In', 'Under'],
      explanation: 'On the table = sobre la mesa.',
      points: 1
    },
    {
      id: 'gap8',
      gapNumber: 8,
      correctAnswer: 'under',
      options: ['under', 'on', 'in'],
      explanation: 'Under = debajo de.',
      points: 1
    },
    {
      id: 'gap9',
      gapNumber: 9,
      correctAnswer: 'aren\'t',
      options: ['aren\'t', 'isn\'t', 'are'],
      explanation: 'Negative plural: there aren\'t any chairs.',
      points: 1
    },
    {
      id: 'gap10',
      gapNumber: 10,
      correctAnswer: 'is',
      options: ['is', 'are', 'isn\'t'],
      explanation: 'Singular noun (a lamp).',
      points: 1
    }
  ]
};

// ============================================
// SENTENCE REORDERING EXERCISE
// ============================================
export const A1_M2_L3_SENTENCE_REORDERING = {
  id: 'a1-m2-l3-sentence-reordering',
  type: 'sentence-reordering',
  title: 'Put the Words in Order',
  instructions: 'Arrange the words to make correct sentences.',
  items: [
    {
      id: 'sr1',
      shuffledSentences: ['is', 'There', 'table', 'a', 'the', 'on', 'book'],
      correctOrder: [1, 0, 6, 5, 4, 3, 2],
      context: 'Make a sentence about location',
      explanation: 'Correct order: There is a book on the table.',
      points: 1
    },
    {
      id: 'sr2',
      shuffledSentences: ['three', 'There', 'are', 'room', 'the', 'in', 'chairs'],
      correctOrder: [1, 2, 0, 6, 5, 4, 3],
      context: 'Make a sentence with plural',
      explanation: 'Correct order: There are three chairs in the room.',
      points: 1
    },
    {
      id: 'sr3',
      shuffledSentences: ['there', 'Is', 'near', 'here', 'supermarket', 'a', '?'],
      correctOrder: [1, 0, 5, 4, 2, 3, 6],
      context: 'Make a question',
      explanation: 'Correct order: Is there a supermarket near here?',
      points: 1
    },
    {
      id: 'sr4',
      shuffledSentences: ['cat', 'The', 'under', 'is', 'table', 'the'],
      correctOrder: [1, 0, 3, 2, 4, 5],
      context: 'Make a sentence with preposition',
      explanation: 'Correct order: The cat is under the table.',
      points: 1
    },
    {
      id: 'sr5',
      shuffledSentences: ['any', 'there', 'Are', 'parks', 'city', 'your', 'in', '?'],
      correctOrder: [2, 1, 0, 3, 6, 5, 4, 7],
      context: 'Make a question with plural',
      explanation: 'Correct order: Are there any parks in your city?',
      points: 1
    },
    {
      id: 'sr6',
      shuffledSentences: ['next', 'school', 'is', 'My', 'to', 'house', 'the'],
      correctOrder: [3, 5, 2, 0, 1, 4, 6],
      context: 'Make a sentence with next to',
      explanation: 'Correct order: My house is next to the school.',
      points: 1
    }
  ]
};

// ============================================
// COLLOCATION MATCHING EXERCISE
// ============================================
export const A1_M2_L3_COLLOCATION_MATCHING = {
  id: 'a1-m2-l3-collocation-matching',
  type: 'collocation-matching',
  title: 'Match Prepositions with Places',
  instructions: 'Match each phrase with the correct preposition.',
  pairs: [
    {
      id: 'cm1',
      word: '___ the table',
      correctMatch: 'on',
      distractors: ['in', 'at', 'under'],
      example: 'The book is on the table.',
      points: 1
    },
    {
      id: 'cm2',
      word: '___ the box',
      correctMatch: 'in',
      distractors: ['on', 'at', 'next'],
      example: 'The toy is in the box.',
      points: 1
    },
    {
      id: 'cm3',
      word: '___ the door',
      correctMatch: 'behind',
      distractors: ['on', 'in', 'at'],
      example: 'The bag is behind the door.',
      points: 1
    },
    {
      id: 'cm4',
      word: '___ the bed',
      correctMatch: 'under',
      distractors: ['in', 'at', 'between'],
      example: 'The cat is under the bed.',
      points: 1
    },
    {
      id: 'cm5',
      word: '___ the chair',
      correctMatch: 'next to',
      distractors: ['between', 'under', 'at'],
      example: 'The lamp is next to the chair.',
      points: 1
    },
    {
      id: 'cm6',
      word: '___ the TV',
      correctMatch: 'in front of',
      distractors: ['behind', 'under', 'between'],
      example: 'The sofa is in front of the TV.',
      points: 1
    }
  ]
};

// Export all exercises from the original file plus new B2-style exercises
export const A1_M2_L3_ALL_EXERCISES = [
  ...A1_MODULE_2_LESSON_3.exercises,
  A1_M2_L3_SENTENCE_COMPLETION,
  A1_M2_L3_ERROR_IDENTIFICATION,
  A1_M2_L3_GAP_FILL,
  A1_M2_L3_SENTENCE_REORDERING,
  A1_M2_L3_COLLOCATION_MATCHING
];
