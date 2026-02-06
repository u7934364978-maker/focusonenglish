import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 31;
const LEVEL = 'b2';

// SHARDS 1-2: Stamina - Maintaining Focus
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Stamina: The Two-Hour Challenge',
  explanation: 'Preparing for the mental fatigue that occurs halfway through the test.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `When you feel your concentration slipping during a long lecture, you should ________.`,
    options: [
      'Refocus on the structure (intro, main points, examples)',
      'Stop taking notes and just listen',
      'Look around the room to rest your eyes',
      'Try to write down every single word'
    ],
    correctAnswer: 'Refocus on the structure (intro, main points, examples)',
    explanation: 'Focusing on the "skeleton" of the talk helps you re-engage even if you missed a few seconds.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Stamina: Transitioning Sections',
  explanation: 'Clearing your mind of the previous section to focus on the next.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `After the Reading section ends, you should ________.`,
    options: [
      'Forget about your Reading answers and focus entirely on Listening',
      'Worry about that one Reading question you weren\'t sure about',
      'Ask the person next to you what they answered',
      'Try to calculate your Reading score'
    ],
    correctAnswer: 'Forget about your Reading answers and focus entirely on Listening',
    explanation: 'Compartmentalizing each section prevents stress from one affecting your performance in the next.',
    points: 2
  }))
};

// SHARDS 3-4: Stress Management - Handling Difficult Items
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'Stress: The "Impossible" Question',
  explanation: 'Making a strategic guess and moving on without losing confidence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `If you encounter a question where all options seem wrong, the best strategy is ________.`,
    options: [
      'Eliminate the obviously wrong ones and make an educated guess',
      'Leave it blank and hope for the best',
      'Spend 5 minutes analyzing the grammar of the question',
      'Get angry at the test designers'
    ],
    correctAnswer: 'Eliminate the obviously wrong ones and make an educated guess',
    explanation: 'Educated guessing is a necessary skill for maintaining the pace of the exam.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'Stress: Speaking Under Pressure',
  explanation: 'Techniques for starting your response even when you feel nervous.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `When the "beep" sounds for Speaking, you should ________.`,
    options: [
      'Start with a memorized "filler" phrase to get your voice moving',
      'Wait for 5 seconds to make sure you are ready',
      'Whisper your response first',
      'Hold your breath until the end'
    ],
    correctAnswer: 'Start with a memorized "filler" phrase to get your voice moving',
    explanation: 'Starting immediately with a phrase like "In this set of materials..." helps overcome the initial "freeze."',
    points: 2
  }))
};

// SHARDS 5-6: Decision Making - Time vs. Accuracy
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Strategy: Prioritizing High-Value Tasks',
  explanation: 'Ensuring you finish the sections that have the most impact on your score.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `In Writing, it is better to have ________ than ________.`,
    options: [
      'A complete essay with basic grammar / A half-finished essay with perfect grammar',
      'A very short essay / A medium-length essay',
      'Many spelling mistakes / No spelling mistakes',
      'One long paragraph / Three short paragraphs'
    ],
    correctAnswer: 'A complete essay with basic grammar / A half-finished essay with perfect grammar',
    explanation: 'Task completion and structure are heavily weighted in the TOEFL Writing rubric.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Strategy: The "Mark for Review" Tool',
  explanation: 'Using the interface features to your advantage in Reading.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `You should only "Mark for Review" a question if ________.`,
    options: [
      'You have made an initial guess and think you can solve it with more time',
      'You have no idea what the answer is',
      'You want to check every single question at the end',
      'The question is very easy'
    ],
    correctAnswer: 'You have made an initial guess and think you can solve it with more time',
    explanation: 'Don\'t waste time reviewing questions where you are unlikely to find a better answer.',
    points: 2
  }))
};

// SHARDS 7-8: Mental Environment - Test Center Reality
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Environment: Dealing with Noise',
  explanation: 'Techniques for staying focused when other students are speaking.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `If other students are speaking while you are doing the Writing section, you should ________.`,
    options: [
      'Focus intensely on your screen and use your headphones',
      'Complain to the test administrator immediately',
      'Try to listen to what they are saying',
      'Start speaking as well to drown them out'
    ],
    correctAnswer: 'Focus intensely on your screen and use your headphones',
    explanation: 'The TOEFL is a "shared" environment; mental discipline is part of the test.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Environment: Using Scratch Paper',
  explanation: 'Advanced organization for your notes to prevent confusion.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Your scratch paper should be ________.`,
    options: [
      'Organized into clear sections for each task',
      'Covered in messy doodles',
      'Used only for the Speaking section',
      'Given back to the examiner blank'
    ],
    correctAnswer: 'Organized into clear sections for each section',
    explanation: 'Clear organization prevents you from looking at the wrong notes during a speaking or writing task.',
    points: 2
  }))
};

// SHARDS 9-10: Final Prep Mindset
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Mindset: Visualizing Success',
  explanation: 'Reducing anxiety by mentally rehearsing the test-day procedure.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Visualizing the test experience can help ________.`,
    options: [
      'Reduce anxiety and improve performance',
      'Make the test shorter',
      'Give you the correct answers',
      'Replace actual studying'
    ],
    correctAnswer: 'Reduce anxiety and improve performance',
    explanation: 'Mental preparation is as important as linguistic preparation for high-stakes exams.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Mindset: Growth vs. Fixed',
  explanation: 'Maintaining a positive attitude toward "difficult" sections.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `If you find a section difficult, you should tell yourself: ________.`,
    options: [
      '"I can handle this; I\'ve trained for this."',
      '"I am terrible at English."',
      '"The test is unfair."',
      '"I am going to fail."'
    ],
    correctAnswer: '"I can handle this; I\'ve trained for this."',
    explanation: 'Positive self-talk maintains the cognitive resources needed for problem-solving.',
    points: 2
  }))
};

export const B2_WEEK_31 = createShardedToeflUnit(
  'toefl-b2-w31',
  'Week 31: Advanced Test Strategies: Stress and Stamina',
  'Mastering the psychological and logistical challenges of the full TOEFL iBT exam.',
  ['Maintain peak focus during the 2-hour testing window', 'Handle difficult questions and time pressure without panic', 'Develop noise-reduction and scratch paper organization techniques', 'Apply visualization and positive mindset for test day'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
