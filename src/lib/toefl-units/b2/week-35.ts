import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 35;
const LEVEL = 'b2';

// SHARDS 1-2: Reading - Final Strategy Review
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Reading: The "Speed and Accuracy" Balance',
  explanation: 'Final reminder of the 18-minute rule and the process of elimination.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `In the final week before the test, your Reading focus should be on ________.`,
    options: [
      'Refining your ability to quickly eliminate 2-3 wrong answers',
      'Learning 100 new technical terms',
      'Reading entire encyclopedias',
      'Changing your note-taking style'
    ],
    correctAnswer: 'Refining your ability to quickly eliminate 2-3 wrong answers',
    explanation: 'Speed comes from being able to see why distractors are wrong quickly.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'Reading: Prose Summary Final Tips',
  explanation: 'Choosing major ideas over minor details one last time.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `If an option is a true statement from the text but only mentions a minor example, is it a correct "Prose Summary" answer?`,
    options: ['No', 'Yes', 'Only if it has synonyms', 'Only if it\'s long'],
    correctAnswer: 'No',
    explanation: 'Prose Summary answers MUST be "major" ideas that support the primary thesis of the passage.',
    points: 2
  }))
};

// SHARDS 3-4: Listening - Final Strategy Review
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Listening: Predicting the Questions',
  explanation: 'Using your notes to anticipate what the computer will ask.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `You can often predict a Listening question based on ________.`,
    options: [
      'Where the professor emphasized a point or listed several items',
      'The length of the student\'s questions',
      'The number of times the professor coughed',
      'The alphabetical order of the lecture topic'
    ],
    correctAnswer: 'Where the professor emphasized a point or listed several items',
    explanation: 'Emphasized points, lists, and "why" explanations are high-probability question areas.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Listening: Handling Memory Gaps',
  explanation: 'What to do if you don\'t have a note for a specific question.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `If you don't have a note for a detail question, you should ________.`,
    options: [
      'Choose the option that is most consistent with the main idea',
      'Wait for the audio to replay (it won\'t)',
      'Close your eyes and hope',
      'Ask the examiner for help'
    ],
    correctAnswer: 'Choose the option that is most consistent with the main idea',
    explanation: 'Even if you missed a detail, the correct answer will rarely contradict the overall theme of the lecture.',
    points: 2
  }))
};

// SHARDS 5-6: Speaking - Template & Flow Final Check
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Speaking: The "Opening" Countdown',
  explanation: 'Having your first 5 seconds ready for every task.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Which is a strong opening for Speaking Task 3?`,
    options: [
      '"The reading defines [Term] as X, and the professor provides an example of this by..."',
      '"I will talk about the reading and then the lecture."',
      '"The term is very interesting to me."',
      '"Wait, let me start again."'
    ],
    correctAnswer: '"The reading defines [Term] as X, and the professor provides an example of this by..."',
    explanation: 'A strong, practiced opening builds confidence and establishes your response structure immediately.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Speaking: Intonation and Pacing',
  explanation: 'Final reminder to sound like a human, not a list of words.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Natural intonation in English involves ________.`,
    options: [
      'Rising pitch at the end of a question and falling at the end of a statement',
      'Speaking at the exact same pitch for 45 seconds',
      'Whispering the whole time',
      'Yelling the main points'
    ],
    correctAnswer: 'Rising pitch at the end of a question and falling at the end of a statement',
    explanation: 'Standard English intonation patterns make your response much easier for the rater to follow.',
    points: 2
  }))
};

// SHARDS 7-8: Writing - Structure & Accuracy Final Check
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Writing: Integrated Task Symmetry',
  explanation: 'Ensuring your essay has a balanced 1:1 relationship between sources.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `For every point mentioned from the reading in Task 1, you should ________.`,
    options: [
      'Immediately provide the corresponding counter-argument from the lecture',
      'Write two more points from the reading',
      'Include a personal story',
      'End the paragraph'
    ],
    correctAnswer: 'Immediately provide the corresponding counter-argument from the lecture',
    explanation: 'Symmetry in your comparison is the most effective way to organize the integrated essay.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Writing: Academic Discussion Polish',
  explanation: 'Final check for grammatical precision and lexical variety.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `In Task 2, you can boost your score by ________.`,
    options: [
      'Using precise academic reporting verbs (e.g., "suggests," "argues")',
      'Using "happy" words',
      'Writing in all capital letters',
      'Using as many exclamation points as possible'
    ],
    correctAnswer: 'Using precise academic reporting verbs (e.g., "suggests," "argues")',
    explanation: 'Reporting verbs show your ability to handle academic discussion conventions.',
    points: 2
  }))
};

// SHARDS 9-10: Test Day Readiness
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Strategy: The Night Before the Test',
  explanation: 'How to prepare physically and mentally for the big day.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `The night before your TOEFL test, you should ________.`,
    options: [
      'Get 8 hours of sleep and relax',
      'Study until 3:00 AM',
      'Drink 10 cups of coffee',
      'Learn a new grammar rule'
    ],
    correctAnswer: 'Get 8 hours of sleep and relax',
    explanation: 'Rest is more beneficial than last-minute cramming for a skill-based exam like the TOEFL.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Strategy: Final Confidence Boost',
  explanation: 'You have completed 35 weeks of training—you are ready!',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `What is the most important thing to bring to the test center (besides your ID)?`,
    options: [
      'A positive and confident attitude',
      'Your own dictionary',
      'A snack for the computer',
      'Your 35-week study plan'
    ],
    correctAnswer: 'A positive and confident attitude',
    explanation: 'Confidence allows your training to shine through under pressure.',
    points: 2
  }))
};

export const B2_WEEK_35 = createShardedToeflUnit(
  'toefl-b2-w35',
  'Week 35: Final "Quick Hits" Strategy Review',
  'A rapid-fire review of the most essential strategies, checklists, and mindsets for TOEFL success.',
  ['Refine rapid elimination techniques in Reading', 'Anticipate Listening questions using emphasis cues', 'Polish Speaking openings and intonation', 'Ensure symmetry and academic tone in Writing'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
