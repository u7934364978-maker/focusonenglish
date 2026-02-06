import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 25;
const LEVEL = 'b2';

// SHARDS 1-2: Advanced Reading - Factual & Negative Factual
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Reading: Advanced Factual Information',
  explanation: 'Identifying specific details in complex academic texts under time pressure.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `In a "Factual Information" question, you should look for ________.`,
    options: [
      'Specific details explicitly mentioned in the text',
      'The authors hidden bias',
      'A summary of the entire passage',
      'Information that is only hinted at'
    ],
    correctAnswer: 'Specific details explicitly mentioned in the text',
    explanation: 'Factual Information questions test your ability to find and understand information that is directly stated.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'Reading: Negative Factual Information',
  explanation: 'Mastering the "EXCEPT" and "NOT" questions efficiently.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `When answering a "NOT" or "EXCEPT" question, how many options are actually true according to the text?`,
    options: ['Three', 'Four', 'One', 'Zero'],
    correctAnswer: 'Three',
    explanation: 'In Negative Factual questions, three options are supported by the text, and you must find the one that is not.',
    points: 2
  }))
};

// SHARDS 3-4: Sentence Simplification & Insert Sentence
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'reading',
  title: 'Reading: Sentence Simplification',
  explanation: 'Choosing the sentence that best expresses the essential information.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `A correct simplification must keep the ________ while removing less important details.`,
    options: ['Main idea and essential relationships', 'Exact wording of the original', 'Longest words', 'Author\'s name'],
    correctAnswer: 'Main idea and essential relationships',
    explanation: 'Simplification requires maintaining the core logic (e.g., cause/effect) of the original sentence.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'reading',
  title: 'Reading: Insert Sentence Strategy',
  explanation: 'Understanding text cohesion and where new information fits logically.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which of these is a strong clue for placing an "Insert Sentence"?`,
    options: [
      'Pronouns like "this," "these," or "they"',
      'The number of syllables in the sentence',
      'The alphabetical order of the words',
      'The font size of the surrounding text'
    ],
    correctAnswer: 'Pronouns like "this," "these," or "they"',
    explanation: 'Reference words (pronouns) must point back to something already mentioned, which helps determine placement.',
    points: 2
  }))
};

// SHARDS 5-6: Prose Summary & Table Completion
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: Prose Summary Mastery',
  explanation: 'Distinguishing between major ideas and minor supporting details.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `In a Prose Summary question, you should AVOID options that are ________.`,
    options: [
      'Minor details or not mentioned in the text',
      'Summarizing a whole paragraph',
      'Written in academic English',
      'Using synonyms for keywords'
    ],
    correctAnswer: 'Minor details or not mentioned in the text',
    explanation: 'Prose Summary tasks require identifying the three most important points of the passage.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: Fill in a Table',
  explanation: 'Categorizing information based on conceptual relationships in the text.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Fill-in-a-table questions typically test your ability to ________.`,
    options: [
      'Organize and classify major ideas',
      'Calculate numerical data',
      'Define obscure vocabulary',
      'Identify the author\'s birth date'
    ],
    correctAnswer: 'Organize and classify major ideas',
    explanation: 'This task requires understanding how different concepts in the passage are related or categorized.',
    points: 2
  }))
};

// SHARDS 7-8: Reading Time Management
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Strategy: The 18-Minute Rule',
  explanation: 'Allocating time effectively across multiple reading passages.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `How much time should you ideally spend on ONE reading passage and its questions?`,
    options: ['18 minutes', '30 minutes', '10 minutes', '5 minutes'],
    correctAnswer: '18 minutes',
    explanation: 'With 36 minutes for two passages (or 54 for three), 18 minutes per passage is the standard benchmark.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Strategy: When to Skip a Question',
  explanation: 'Making smart decisions to maximize your score within the time limit.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `If a question is taking too long (over 2 minutes), what should you do?`,
    options: [
      'Guess, mark for review, and move on',
      'Keep reading until you find the answer',
      'Close your eyes and wait',
      'Quit the exam'
    ],
    correctAnswer: 'Guess, mark for review, and move on',
    explanation: 'TOEFL Reading allows you to return to questions. Don\'t let one difficult question waste your time for others.',
    points: 2
  }))
};

// SHARDS 9-10: Academic Context Vocabulary
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Scientific Processes',
  explanation: 'Words commonly found in life science and physical science passages.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `The process of ________ occurs when a liquid turns into a gas.`,
    options: ['evaporation', 'condensation', 'precipitation', 'sedimentation'],
    correctAnswer: 'evaporation',
    explanation: 'Evaporation is a fundamental scientific term frequently appearing in TOEFL science passages.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Historical Analysis',
  explanation: 'Words common in history and social science passages.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `The ________ of the new trade route led to significant economic growth.`,
    options: ['emergence', 'extinction', 'evasion', 'erosion'],
    correctAnswer: 'emergence',
    explanation: '"Emergence" refers to something coming into existence or becoming prominent.',
    points: 2
  }))
};

export const B2_WEEK_25 = createShardedToeflUnit(
  'toefl-b2-w25',
  'Week 25: Full-Length Reading Mastery',
  'Advanced practice for all TOEFL Reading question types with intensive time management focus.',
  ['Master Factual and Negative Factual question types', 'Perfect Sentence Simplification and Insertion strategies', 'Distinguish major ideas in Prose Summary and Table tasks', 'Implement efficient 18-minute time management per passage'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
