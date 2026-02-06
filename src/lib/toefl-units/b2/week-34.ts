import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 34;
const LEVEL = 'b2';

// SHARDS 1-2: Mock 2 - Consistency in Reading
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Mock 2: Eliminating Careless Errors',
  explanation: 'Focusing on accuracy by carefully reading all options before choosing.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A "careless error" in Reading often happens when you ________.`,
    options: [
      'Pick the first answer that looks good without reading the others',
      'Read the passage too slowly',
      'Use a dictionary during the test',
      'Follow the process of elimination'
    ],
    correctAnswer: 'Pick the first answer that looks good without reading the others',
    explanation: 'Always verify all four options to ensure you haven\'t fallen for a distractor.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'Mock 2: Performance Under Pressure',
  explanation: 'Maintaining your strategy even when you feel the clock ticking.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `If you have only 5 minutes left for the last 4 questions, you should ________.`,
    options: [
      'Focus on the questions that don\'t require re-reading large sections',
      'Panic and click random answers',
      'Read the entire passage again',
      'Give up on the last passage'
    ],
    correctAnswer: 'Focus on the questions that don\'t require re-reading large sections',
    explanation: 'Vocabulary and reference questions are often faster to solve than inference or prose summary.',
    points: 2
  }))
};

// SHARDS 3-4: Mock 2 - Listening Stamina
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Mock 2: Sustaining Academic Interest',
  explanation: 'Engaging with the lecture content to improve retention.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `The best way to stay engaged during a boring lecture is to ________.`,
    options: [
      'Mentally ask yourself questions about the professor\'s points',
      'Focus on the wall behind the computer',
      'Think about what you will eat after the test',
      'Try to count the number of words used'
    ],
    correctAnswer: 'Mentally ask yourself questions about the professor\'s points',
    explanation: 'Active listening (questioning the material) is a powerful tool for memory and focus.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Mock 2: Interpreting Implicit Meaning',
  explanation: 'Final check on your ability to hear what is NOT said.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Implicit meaning is often conveyed through ________.`,
    options: [
      'The speaker\'s tone and emphasis',
      'The length of the lecture',
      'The volume of the recording',
      'The specific date mentioned'
    ],
    correctAnswer: 'The speaker\'s tone and emphasis',
    explanation: 'How something is said is often as important as what is said in TOEFL Listening.',
    points: 2
  }))
};

// SHARDS 5-6: Mock 2 - Speaking Consistency
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Mock 2: Balancing Content and Delivery',
  explanation: 'Ensuring your delivery doesn\'t suffer because you are searching for words.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `In Speaking, it is better to use ________ than to ________.`,
    options: [
      'Simpler words fluently / Complex words with long pauses',
      'Complex words with pauses / Simple words fluently',
      'A very loud voice / A normal voice',
      'Only one reason / Two reasons'
    ],
    correctAnswer: 'Simpler words fluently / Complex words with long pauses',
    explanation: 'Fluency and delivery are major components of the Speaking score.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Mock 2: Final Transition Check',
  explanation: 'Are your transitions natural or do they sound forced?',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which transition sounds most natural for concluding a Task 1 response?`,
    options: [
      '"For these reasons, I believe that X is the better choice."',
      '"I am finished now."',
      '"That is all I have to say about this."',
      '"I will stop talking here."'
    ],
    correctAnswer: '"For these reasons, I believe that X is the better choice."',
    explanation: 'A clear, brief conclusion helps signal the end of your response to the rater.',
    points: 2
  }))
};

// SHARDS 7-8: Mock 2 - Writing Quality Control
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Mock 2: Integrated Writing Accuracy',
  explanation: 'Ensuring you didn\'t misinterpret the lecture\'s counter-arguments.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `A "fatal error" in Task 1 is ________.`,
    options: [
      'Claiming the professor agreed with the reading when they disagreed',
      'Using a semicolon incorrectly',
      'Writing 220 words instead of 250',
      'Forgetting the title of the passage'
    ],
    correctAnswer: 'Claiming the professor agreed with the reading when they disagreed',
    explanation: 'Misinterpreting the core relationship between the sources is a major scoring error.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Mock 2: Academic Discussion Voice',
  explanation: 'Maintaining a formal yet conversational tone in your post.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `In Task 2, you should avoid ________.`,
    options: [
      'Slang and overly informal language',
      'Referencing the other students',
      'Stating your opinion clearly',
      'Using academic verbs'
    ],
    correctAnswer: 'Slang and overly informal language',
    explanation: 'The context is an academic discussion board, so a respectful, formal tone is required.',
    points: 2
  }))
};

// SHARDS 9-10: Managing the Plateau
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Strategy: Breaking Through a Score Plateau',
  explanation: 'What to do if your mock scores aren\'t increasing.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `To break a score plateau, you should focus on ________.`,
    options: [
      'Analyzing the underlying reason for your mistakes (e.g., specific grammar points)',
      'Taking more mocks without reviewing them',
      'Giving up on the goal score',
      'Buying new textbooks'
    ],
    correctAnswer: 'Analyzing the underlying reason for your mistakes (e.g., specific grammar points)',
    explanation: 'Plateaus are often caused by recurring minor issues that need specific attention.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Strategy: Maintaining Motivation',
  explanation: 'Staying positive as you approach the end of your 36-week journey.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `The final weeks before the test should be about ________.`,
    options: [
      'Consolidating your existing skills and building confidence',
      'Learning 500 new words a day',
      'Changing your entire strategy',
      'Studying for 12 hours a day'
    ],
    correctAnswer: 'Consolidating your existing skills and building confidence',
    explanation: 'Confidence is a key performance factor on test day.',
    points: 2
  }))
};

export const B2_WEEK_34 = createShardedToeflUnit(
  'toefl-b2-w34',
  'Week 34: Full Mock Exam Simulation II',
  'Final fine-tuning of strategies with a focus on consistency, accuracy, and managing the final weeks of preparation.',
  ['Eliminate careless errors in Reading', 'Enhance listening engagement and nuance detection', 'Balance fluency and delivery in Speaking', 'Ensure high accuracy in Writing synthesis'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
