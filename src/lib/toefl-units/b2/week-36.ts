import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 36;
const LEVEL = 'b2';

// SHARDS 1-10: The Ultimate Comprehensive Review & Simulation
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Simulation: Reading Section Challenge',
  explanation: 'Final 10 questions testing all Reading question types.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A "Negative Factual Information" question requires you to find ________.`,
    options: [
      'The one option NOT mentioned or contradicted in the text',
      'The main idea of the passage',
      'A synonym for a technical word',
      'The author\'s favorite hobby'
    ],
    correctAnswer: 'The one option NOT mentioned or contradicted in the text',
    explanation: 'These questions test your ability to verify details across a paragraph accurately.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'Simulation: The Inference Masterclass',
  explanation: 'Solving the toughest "Inference" questions one last time.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `To "infer" something in a TOEFL Reading passage means to ________.`,
    options: [
      'Identify an idea that is strongly suggested but not explicitly stated',
      'Copy a sentence directly from the text',
      'Guess what the author might write in their next book',
      'Translate the text into your native language'
    ],
    correctAnswer: 'Identify an idea that is strongly suggested but not explicitly stated',
    explanation: 'Inferences must be logically supported by the evidence provided in the passage.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Simulation: Lecture Structure Analysis',
  explanation: 'Identifying organizational patterns in complex lectures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `If a professor says, "Now, let's contrast this with...", the organizational pattern is likely ________.`,
    options: ['Comparison and Contrast', 'Chronological Order', 'Cause and Effect', 'Random'],
    correctAnswer: 'Comparison and Contrast',
    explanation: 'Transitions like "contrast" or "similarly" signal the structure of the lecture.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Simulation: Pragmatic Understanding Final',
  explanation: 'Detecting speaker stance and underlying meaning.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `A "Listen Again" question often focuses on ________.`,
    options: [
      'The speaker\'s tone or intent behind a specific phrase',
      'The spelling of a technical word',
      'The date mentioned in the introduction',
      'The volume of the speaker\'s voice'
    ],
    correctAnswer: 'The speaker\'s tone or intent behind a specific phrase',
    explanation: 'These questions ask "Why does the speaker say this?" or "What does the speaker imply?"',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Simulation: Independent Speaking Spontaneity',
  explanation: 'Handling unexpected topics with confidence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `In Speaking Task 1, if you can't think of a second reason, you should ________.`,
    options: [
      'Provide a very detailed personal example for your first reason',
      'Stop talking and wait for the timer to end',
      'Say "I don\'t know" repeatedly',
      'Repeat your first reason using the exact same words'
    ],
    correctAnswer: 'Provide a very detailed personal example for your first reason',
    explanation: 'One well-developed reason with a strong example is better than two underdeveloped or repetitive points.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Simulation: Integrated Speaking Synthesis',
  explanation: 'Perfectly merging reading and listening notes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `The most important part of Speaking Task 4 is ________.`,
    options: [
      'Explaining how the lecture examples illustrate the academic concept',
      'Reading the textbook definition out loud',
      'Summarizing the professor\'s biography',
      'Counting the number of words you say'
    ],
    correctAnswer: 'Explaining how the lecture examples illustrate the academic concept',
    explanation: 'The rater is looking for your ability to connect the "general" concept to the "specific" examples.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Simulation: Integrated Writing Precision',
  explanation: 'Flawless reporting of the lecture-reading relationship.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `In Task 1, you should avoid ________.`,
    options: [
      'Expressing your own personal opinion on the topic',
      'Using connectors like "However" or "In contrast"',
      'Summarizing the lecture points',
      'Paraphrasing the reading'
    ],
    correctAnswer: 'Expressing your own personal opinion on the topic',
    explanation: 'Task 1 is a objective synthesis task; your opinion is NOT required and may lower your score.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Simulation: Academic Discussion Engagement',
  explanation: 'Interacting meaningfully with other "students" in the forum.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `To show "high-level engagement" in Task 2, you can ________.`,
    options: [
      'Directly reference a point made by another student and build upon it',
      'Write a separate essay that ignores the other students',
      'Copy the other students\' sentences word-for-word',
      'Say that all the other students are wrong without explaining why'
    ],
    correctAnswer: 'Directly reference a point made by another student and build upon it',
    explanation: 'Building on existing points shows you are part of the academic conversation.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Simulation: Time Management Final Test',
  explanation: 'Balancing effort across the entire exam.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `If you have 5 minutes left in the Writing section, you should ________.`,
    options: [
      'Proofread for grammar, spelling, and punctuation errors',
      'Try to write a completely new fifth paragraph',
      'Close your laptop and leave',
      'Check your social media'
    ],
    correctAnswer: 'Proofread for grammar, spelling, and punctuation errors',
    explanation: 'Editing can fix minor slips that would otherwise impact your "Language Use" score.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Simulation: The Final Finish Line',
  explanation: 'Final reflection on your 36-week journey.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `What is the ultimate goal of this 36-week TOEFL course?`,
    options: [
      'To provide the skills and confidence to achieve your target score',
      'To make you memorize a dictionary',
      'To teach you how to repair a computer',
      'To learn how to cook American food'
    ],
    correctAnswer: 'To provide the skills and confidence to achieve your target score',
    explanation: 'You have done the work. You have the skills. Now go get your score!',
    points: 2
  }))
};

export const B2_WEEK_36 = createShardedToeflUnit(
  'toefl-b2-w36',
  'Week 36: The Ultimate TOEFL Simulation',
  'A final, comprehensive simulation of all TOEFL skills, designed to prove your readiness and cement your strategies.',
  ['Execute high-level Reading strategies under pressure', 'Demonstrate mastery of Lecture and Conversation listening', 'Deliver polished, spontaneous, and integrated Speaking responses', 'Produce sophisticated, accurate, and interactive Writing essays'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
