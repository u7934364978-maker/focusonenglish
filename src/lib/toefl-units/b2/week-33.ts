import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 33;
const LEVEL = 'b2';

// SHARDS 1-2: Mock Simulation - Reading Review
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Mock 1: Reading Performance Analysis',
  explanation: 'Evaluating your ability to maintain speed and accuracy throughout two full passages.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A successful mock reading session is one where you ________.`,
    options: [
      'Complete all questions within the 36-minute time limit',
      'Read every word of the passage three times',
      'Finish early and close the test',
      'Guess on every question to save time'
    ],
    correctAnswer: 'Complete all questions within the 36-minute time limit',
    explanation: 'Pacing is the most critical factor in a full-length mock simulation.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'Mock 1: Identifying Pattern Errors',
  explanation: 'Recognizing if you are consistently missing the same question types.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `If you missed all "Inference" questions in the mock, you should ________.`,
    options: [
      'Review the specific logic for that question type',
      'Assume the test was too hard',
      'Stop practicing Reading and focus on Speaking',
      'Change your guessing letter to "C"'
    ],
    correctAnswer: 'Review the specific logic for that question type',
    explanation: 'Mocks are diagnostic tools; use them to identify and fix specific weaknesses.',
    points: 2
  }))
};

// SHARDS 3-4: Mock Simulation - Listening Review
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Mock 1: Listening Concentration',
  explanation: 'Assessing your focus during the 28-minute Listening section.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Concentration fatigue in Listening usually starts during the ________.`,
    options: [
      'Second or third lecture',
      'First conversation',
      'Very last question',
      'Instructions'
    ],
    correctAnswer: 'Second or third lecture',
    explanation: 'Lectures are longer and more demanding than conversations, requiring sustained attention.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Mock 1: Note-taking Efficiency',
  explanation: 'Did your notes actually help you answer the questions?',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `If you have lots of notes but can't find the answers, you should ________.`,
    options: [
      'Simplify your notes to focus on the hierarchy of ideas',
      'Write even more words next time',
      'Stop taking notes entirely',
      'Use different colored pens'
    ],
    correctAnswer: 'Simplify your notes to focus on the hierarchy of ideas',
    explanation: 'Note-taking should capture the logical structure, not every minor detail.',
    points: 2
  }))
};

// SHARDS 5-6: Mock Simulation - Speaking Review
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Mock 1: Speaking Timing Mastery',
  explanation: 'Ensuring you didn\'t get cut off before finishing your main points.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If you were cut off in Task 2, you likely spent too much time on ________.`,
    options: [
      'The reading summary',
      'The student\'s reasons',
      'The introduction',
      'Your own opinion'
    ],
    correctAnswer: 'The reading summary',
    explanation: 'A common mistake is spending 30 seconds on the reading, leaving no time for the audio content.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Mock 1: Speaking Delivery Quality',
  explanation: 'Reviewing your recorded mock for flow and pronunciation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `When reviewing your mock recordings, you should listen for ________.`,
    options: [
      'Consistent pacing and clear intonation',
      'If you sound like a native speaker',
      'How many "um"s you can count',
      'If you used "big" words correctly'
    ],
    correctAnswer: 'Consistent pacing and clear intonation',
    explanation: 'Delivery is about being easy to understand, not about being perfect.',
    points: 2
  }))
};

// SHARDS 7-8: Mock Simulation - Writing Review
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Mock 1: Writing Task 1 Synthesis',
  explanation: 'Did you successfully contrast all three points from the lecture?',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `The most important part of the Integrated Writing mock is ________.`,
    options: [
      'Covering all three points of contradiction',
      'Writing exactly 300 words',
      'Having a very long conclusion',
      'Using the word "however" in every sentence'
    ],
    correctAnswer: 'Covering all three points of contradiction',
    explanation: 'Completeness of the synthesis is the primary grading factor for Task 1.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Mock 1: Writing Task 2 Engagement',
  explanation: 'Analyzing the quality of your contribution to the academic discussion.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `A strong Task 2 response in the mock should ________.`,
    options: [
      'Address the professor\'s question and add a new perspective',
      'Agree with the student you liked best',
      'Only talk about your personal life',
      'Summarize the other students\' posts'
    ],
    correctAnswer: 'Address the professor\'s question and add a new perspective',
    explanation: 'Engagement and unique contribution are key for the Academic Discussion task.',
    points: 2
  }))
};

// SHARDS 9-10: Advanced Strategy - Mock Recovery
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Mock Recovery: Analyzing Missed Questions',
  explanation: 'Why did you get that answer wrong? Was it logic, vocabulary, or time?',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `When you miss a question in the mock, you should ________.`,
    options: [
      'Determine if the error was due to comprehension or strategy',
      'Ignore it and move to the next mock',
      'Delete the mock and start over',
      'Assume the question was flawed'
    ],
    correctAnswer: 'Determine if the error was due to comprehension or strategy',
    explanation: 'Understanding the *cause* of the error is the only way to prevent it next time.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Mock Recovery: The 24-Hour Rule',
  explanation: 'Reviewing your performance while the experience is still fresh.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Ideally, you should review your mock exam results ________.`,
    options: [
      'Within 24 hours of finishing the test',
      'One month later',
      'Never',
      'Right before the real test'
    ],
    correctAnswer: 'Within 24 hours of finishing the test',
    explanation: 'Prompt review allows you to remember your thought process during each question.',
    points: 2
  }))
};

export const B2_WEEK_33 = createShardedToeflUnit(
  'toefl-b2-w33',
  'Week 33: Full Mock Exam Simulation I',
  'A complete diagnostic experience designed to identify remaining weak spots across all four sections.',
  ['Evaluate pacing and time management in Reading', 'Assess sustained attention in Listening', 'Review delivery and timing in Speaking', 'Analyze synthesis and engagement in Writing'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
