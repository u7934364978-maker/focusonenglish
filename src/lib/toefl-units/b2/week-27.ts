import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 27;
const LEVEL = 'b2';

// SHARDS 1-2: Speaking Task 1 - Spontaneity & Range
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Speaking Task 1: Generating Ideas Quickly',
  explanation: 'Techniques for choosing a side and finding two reasons in 15 seconds.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `In Speaking Task 1, if you can't think of a "true" personal opinion, you should ________.`,
    options: [
      'Choose the side that is easier to defend',
      'Wait until you think of the truth',
      'Tell the examiner you have no opinion',
      'Ask for a different topic'
    ],
    correctAnswer: 'Choose the side that is easier to defend',
    explanation: 'TOEFL Speaking Task 1 is about language ability, not personal truth. Pick the easiest path to a fluent response.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Speaking Task 1: Increasing Lexical Range',
  explanation: 'Using more specific adjectives and adverbs to boost your score.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Instead of saying a policy is "good," a higher-level word would be ________.`,
    options: ['beneficial', 'nice', 'ok', 'positive'],
    correctAnswer: 'beneficial',
    explanation: '"Beneficial," "advantageous," or "constructive" are better academic choices than "good."',
    points: 2
  }))
};

// SHARDS 3-4: Speaking Task 2 - Campus Integration
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'Speaking Task 2: Efficient Note-taking',
  explanation: 'Capturing the reading announcement and the student\'s two reasons.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `For Speaking Task 2, your notes should clearly separate ________.`,
    options: [
      'The reading change and the student\'s reaction',
      'The student\'s name and their age',
      'The university\'s history and the weather',
      'The transcript and your own ideas'
    ],
    correctAnswer: 'The reading change and the student\'s reaction',
    explanation: 'You must report the change from the reading and how the student feels about it.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'Speaking Task 2: Transition Mastery',
  explanation: 'Using smooth transitions to connect the reading and listening parts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which phrase smoothly connects the reading to the listening in Task 2?`,
    options: [
      '"The student opposes this idea for two main reasons."',
      '"I will now talk about the audio part."',
      '"The reading was short but the audio was long."',
      '"The professor is talking now."'
    ],
    correctAnswer: '"The student opposes this idea for two main reasons."',
    explanation: 'This clearly signals that you are moving from the context (reading) to the student\'s perspective (listening).',
    points: 2
  }))
};

// SHARDS 5-6: Speaking Task 3 - Academic Concept
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Speaking Task 3: Defining the Term',
  explanation: 'Synthesizing the reading definition into a one-sentence opening.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `In Task 3, your introduction should focus on ________.`,
    options: [
      'Defining the academic term from the reading',
      'Describing the professor\'s voice',
      'Mentioning the title of the textbook',
      'Discussing your own experience with the topic'
    ],
    correctAnswer: 'Defining the academic term from the reading',
    explanation: 'Task 3 requires you to explain an academic concept using the example provided in the lecture.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Speaking Task 3: Connecting Example to Theory',
  explanation: 'Ensuring your response shows HOW the example illustrates the concept.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `A high-scoring Task 3 response must ________.`,
    options: [
      'Explicitly link the lecture examples to the reading definition',
      'Only talk about the reading passage',
      'Only talk about the professor\'s story',
      'Ignore the definition entirely'
    ],
    correctAnswer: 'Explicitly link the lecture examples to the reading definition',
    explanation: 'Synthesis is the key—you must show how the professor\'s example demonstrates the theory.',
    points: 2
  }))
};

// SHARDS 7-8: Speaking Task 4 - Lecture Summary
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Speaking Task 4: Structural Balance',
  explanation: 'Allocating time between the two main points and their examples.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `In Speaking Task 4 (60 seconds), how should you divide your time?`,
    options: [
      'About 25-30 seconds for each main point',
      '50 seconds for the intro, 10 for the points',
      'Spend the whole time on the first point',
      'Finish in 30 seconds'
    ],
    correctAnswer: 'About 25-30 seconds for each main point',
    explanation: 'Balancing the two points and their respective examples ensures a complete summary.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Speaking Task 4: Paraphrasing the Lecture',
  explanation: 'Avoiding repeating the professor\'s exact words too often.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Paraphrasing in Task 4 helps demonstrate ________.`,
    options: [
      'Your vocabulary and comprehension skills',
      'That you didn\'t listen carefully',
      'That you are bored with the topic',
      'That the professor was wrong'
    ],
    correctAnswer: 'Your vocabulary and comprehension skills',
    explanation: 'Using your own words (where appropriate) shows you truly understand the material.',
    points: 2
  }))
};

// SHARDS 9-10: Advanced Flow & Delivery
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Delivery: Intonation for Emphasis',
  explanation: 'Using pitch to highlight key technical terms and transitions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `In English, we typically emphasize ________.`,
    options: [
      'New and important information (content words)',
      'Prepositions like "in" or "at"',
      'Articles like "a" or "the"',
      'The silent letters in words'
    ],
    correctAnswer: 'New and important information (content words)',
    explanation: 'Stressing content words helps the listener follow your main points more easily.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Delivery: Handling Mistakes',
  explanation: 'Quickly recovering from a slip-of-the-tongue without losing flow.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `If you make a small grammar mistake while speaking, what is the best strategy?`,
    options: [
      'Correct it quickly if possible, otherwise keep going',
      'Stop and start the whole sentence again',
      'Apologize to the microphone',
      'Stop speaking for 5 seconds'
    ],
    correctAnswer: 'Correct it quickly if possible, otherwise keep going',
    explanation: 'Maintaining flow is often more important for your score than 100% grammatical perfection.',
    points: 2
  }))
};

export const B2_WEEK_27 = createShardedToeflUnit(
  'toefl-b2-w27',
  'Week 27: Full-Length Speaking Mastery',
  'Intensive practice for all four Speaking tasks with a focus on spontaneity, integration, and delivery.',
  ['Master rapid idea generation for Task 1', 'Perfect integration of reading and listening in Tasks 2 and 3', 'Balance summaries effectively in Task 4', 'Refine intonation and error recovery for better delivery'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
