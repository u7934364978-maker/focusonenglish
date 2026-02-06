import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 17;
const LEVEL = 'b2';

// SHARDS 1-2: Reading Review - Inference and Rhetorical Purpose
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading-comprehension',
  title: 'Reading: Inference Mastery',
  explanation: 'Practicing identifying information that is implied but not explicitly stated.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `What can be inferred from the statement: "While the initial results were promising, the subsequent trials failed to replicate the effect"?`,
    options: [
      'The initial results were likely a fluke or error',
      'The technology is ready for market',
      'The scientists decided to stop the research',
      'The first trial was more expensive'
    ],
    correctAnswer: 'The initial results were likely a fluke or error',
    explanation: 'If later trials cannot replicate an effect, it suggests the first success was not a reliable finding.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading-comprehension',
  title: 'Reading: Rhetorical Purpose',
  explanation: 'Understanding WHY an author included a specific detail or sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Why does the author mention "the invention of the printing press" in a passage about the Reformation?`,
    options: [
      'To explain a key factor that facilitated the spread of ideas',
      'To provide a history of book manufacturing',
      'To criticize the cost of early Bibles',
      'To prove that Luther was an inventor'
    ],
    correctAnswer: 'To explain a key factor that facilitated the spread of ideas',
    explanation: 'In academic texts, historical inventions are often cited to show cause-and-effect relationships with social movements.',
    points: 2
  }))
};

// SHARDS 3-4: Listening Review - Pragmatics and Speaker Intent
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Listening: Understanding the Speaker\'s Purpose',
  explanation: 'Identifying the underlying reason why a student is visiting a professor or office.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `A student says: "I was wondering if there's any chance of an extension on the paper, given the circumstances." What is the purpose?`,
    options: ['To request more time for an assignment', 'To complain about the grading policy', 'To ask for a recommendation letter', 'To report a technical problem'],
    correctAnswer: 'To request more time for an assignment',
    explanation: '"Extension" in an academic context almost always refers to a deadline change.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Listening: Recognizing Irony and Nuance',
  explanation: 'Identifying when a speaker\'s meaning differs from their literal words.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `A professor says: "Oh, great. Another change to the syllabus mid-semester. Just what we needed." What is the professor's attitude?`,
    options: ['Annoyed', 'Excited', 'Confused', 'Supportive'],
    correctAnswer: 'Annoyed',
    explanation: 'The use of "Oh, great" in this context is sarcastic, expressing frustration with the disruption.',
    points: 2
  }))
};

// SHARDS 5-6: Integrated Vocabulary Review
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Academic Collocations for Science',
  explanation: 'Common word pairings used in Biology, Chemistry, and Physics passages.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Which word completes the collocation? "The researchers were able to ________ a hypothesis based on the preliminary data."`,
    options: ['formulate', 'make', 'do', 'say'],
    correctAnswer: 'formulate',
    explanation: 'In academic writing, we "formulate a hypothesis".',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Words for Logical Relationships',
  explanation: 'Vocabulary used to connect ideas in Reading and Listening sections.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which word shows a result? "The ice caps are melting. ________, sea levels are expected to rise."`,
    options: ['Consequently', 'Nevertheless', 'Similarly', 'Furthermore'],
    correctAnswer: 'Consequently',
    explanation: '"Consequently" is used to show a direct result of the previous statement.',
    points: 2
  }))
};

// SHARDS 7-8: Advanced Note-taking for Listening
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Identifying Main Ideas in Lectures',
  explanation: 'Distinguishing between the professor\'s primary topic and supporting anecdotes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `If a professor starts with "Today we'll look at the impact of the Industrial Revolution on urban planning," what is the core topic?`,
    options: ['Urban planning changes during the Industrial Revolution', 'History of steam engines', 'Socialism in the 19th century', 'Architectural styles of factories'],
    correctAnswer: 'Urban planning changes during the Industrial Revolution',
    explanation: 'The "impact of A on B" is a common lecture structure for main idea questions.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Connecting Details to Concepts',
  explanation: 'Practice linking specific examples mentioned in a lecture to the larger academic theory.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `A professor discusses "camoflauge" and then mentions the "peppered moth." What is the moth's role?`,
    options: ['A specific example of camoflauge in action', 'A type of predator', 'A reason for extinction', 'An exception to the rule'],
    correctAnswer: 'A specific example of camoflauge in action',
    explanation: 'In TOEFL, specific animals or people are almost always used as examples of the general concept being taught.',
    points: 2
  }))
};

// SHARDS 9-10: Review of Question Types
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'reading-comprehension',
  title: 'Reading: Summary Questions',
  explanation: 'Learning to distinguish between major ideas and minor details for the final summary question.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which of these is usually NOT a correct answer in a Reading Summary question?`,
    options: ['A minor detail or example mentioned briefly', 'A main point from a body paragraph', 'A synthesis of the entire passage', 'A recurring theme'],
    correctAnswer: 'A minor detail or example mentioned briefly',
    explanation: 'Summary questions require the "big picture" ideas, not supporting details.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'B2 Reading and Listening Review',
  explanation: 'Consolidating strategies for the first two sections of the TOEFL.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `What is the best strategy if you encounter an unknown word in a reading passage?`,
    options: ['Use context clues from surrounding sentences', 'Stop and look it up immediately', 'Give up on that paragraph', 'Guess based on the first letter'],
    correctAnswer: 'Use context clues from surrounding sentences',
    explanation: 'Contextual analysis is a key B2/C1 skill for the Reading section.',
    points: 2
  }))
};

export const B2_WEEK_17 = createShardedToeflUnit(
  'toefl-b2-w17',
  'Week 17: Mixed Review: Reading and Listening',
  'Consolidating B2-level Reading and Listening strategies with focus on inference and purpose.',
  ['Master inference in complex academic texts', 'Identify rhetorical purpose of author details', 'Recognize speaker intent and pragmatics in conversations', 'Distinguish main ideas from supporting details in lectures'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
