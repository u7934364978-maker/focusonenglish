import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 16;
const LEVEL = 'b2';

// SHARDS 1-2: Scoring Rubrics and Self-Assessment
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Understanding the Writing Rubric',
  explanation: 'Learning what raters look for in "Organization" and "Development".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A high-scoring Integrated essay (Task 1) must correctly describe:`,
    options: [
      'The relationship between the reading and the lecture',
      'The students personal opinion of the reading',
      'The biography of the professor',
      'Every single detail from the reading passage'
    ],
    correctAnswer: 'The relationship between the reading and the lecture',
    explanation: 'The Integrated Task is judged on how accurately and clearly you explain how the lecture challenges the reading.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Self-Correction Checklist',
  explanation: 'Identifying common B2-level writing errors during proofreading.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which is a critical error to check for in Task 2 (Academic Discussion)?`,
    options: [
      'Missing the actual question the professor asked',
      'Writing exactly 100 words',
      'Using the word "I"',
      'Mentioning Sarah and Kelly'
    ],
    correctAnswer: 'Missing the actual question the professor asked',
    explanation: 'Your response must directly address the professor\'s prompt to receive a high score for "Topic Development".',
    points: 2
  }))
};

// SHARDS 3-4: Time Management Strategies
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'Allocating Time: Integrated Task',
  explanation: 'How to spend your 20 minutes for the first writing task.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `What is the ideal time allocation for Task 1?`,
    options: [
      '2m Planning, 15m Writing, 3m Proofreading',
      '20m Writing as fast as possible',
      '10m Reading, 10m Writing',
      '5m Planning, 5m Writing, 10m Proofreading'
    ],
    correctAnswer: '2m Planning, 15m Writing, 3m Proofreading',
    explanation: 'Planning and proofreading are essential; 15 minutes is usually enough for a 150-225 word summary.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'Allocating Time: Academic Discussion',
  explanation: 'How to spend your 10 minutes for the second writing task.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `In Task 2, how much time should you spend reading the prompt and student posts?`,
    options: ['1-2 minutes', '5 minutes', '8 minutes', '30 seconds'],
    correctAnswer: '1-2 minutes',
    explanation: 'You need at least 7-8 minutes to write a thoughtful 100-word contribution.',
    points: 2
  }))
};

// SHARDS 5-6: Advanced Academic Style Review
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Replacing Weak Verbs',
  explanation: 'Using stronger, more descriptive verbs to improve your score.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Replace "get" in this sentence: "The company will GET more resources."`,
    options: ['acquire', 'have', 'do', 'take'],
    correctAnswer: 'acquire',
    explanation: '"Acquire," "Obtain," or "Secure" are more academic than "get".',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Replacing Vague Adjectives',
  explanation: 'Using precise adjectives like "substantial," "negligible," and "critical".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Replace "big" in: "There was a BIG change in the climate."`,
    options: ['significant', 'large', 'tall', 'wide'],
    correctAnswer: 'significant',
    explanation: '"Significant," "Substantial," or "Profound" are better academic choices for describing change.',
    points: 2
  }))
};

// SHARDS 7-8: Handling Challenging Topics
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Writing about Technology and Ethics',
  explanation: 'Practicing vocabulary for modern academic debates (AI, Privacy, etc.).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which phrase is useful for a debate on AI? "We must consider the ethical ________ of automated decision-making."`,
    options: ['implications', 'problems', 'things', 'reasons'],
    correctAnswer: 'implications',
    explanation: '"Ethical implications" is a high-level academic collocation.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Writing about Environmental Issues',
  explanation: 'Practicing vocabulary for Sustainability, Pollution, and Conservation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which verb fits best? "The city needs to ________ more sustainable waste management policies."`,
    options: ['implement', 'make', 'do', 'try'],
    correctAnswer: 'implement',
    explanation: 'We "implement policies" or "adopt practices" in formal English.',
    points: 2
  }))
};

// SHARDS 9-10: Final Writing Practice Checkpoints
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Avoiding Repetition',
  explanation: 'Using synonyms and pronouns to keep your writing varied and professional.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `The reading mentions "the experiment." How can you refer to it later to avoid repetition?`,
    options: ['This study', 'The thing', 'The experiment again', 'That one'],
    correctAnswer: 'This study',
    explanation: 'Using "This study," "The research," or "The investigation" as synonyms improves your score.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'The "So What?" Factor',
  explanation: 'Ensuring your conclusion or final sentence ties your argument back to the main topic.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `A strong Academic Discussion response should conclude by:`,
    options: [
      'Summarizing how your point addresses the professor\'s question',
      'Saying "thank you for reading"',
      'Asking the professor for a grade',
      'Listing your references'
    ],
    correctAnswer: 'Summarizing how your point addresses the professor\'s question',
    explanation: 'The final sentence should reinforce your contribution to the overall academic debate.',
    points: 2
  }))
};

export const B2_WEEK_16 = createShardedToeflUnit(
  'toefl-b2-w16',
  'Week 16: Writing: Final Review and Full Practice',
  'Comprehensive review of the Writing section, focusing on rubrics, style, and effective time management.',
  ['Analyze scoring rubrics for self-assessment', 'Implement efficient time management strategies', 'Replace weak vocabulary with academic alternatives', 'Handle complex topics like Ethics and Environment'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
