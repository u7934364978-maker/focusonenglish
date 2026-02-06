import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 20;
const LEVEL = 'b2';

// SHARDS 1-2: Reading - Summary & Organization
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Reading: Summary Question Mastery',
  explanation: 'Practicing how to distinguish main ideas from supporting details for the 2-point summary question.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which of the following describes a "Major Idea" in a Reading passage?`,
    options: [
      'An idea that relates directly to the thesis of the whole text',
      'A specific date or name mentioned once',
      'A minor example that illustrates a sub-point',
      'The first sentence of the third paragraph'
    ],
    correctAnswer: 'An idea that relates directly to the thesis of the whole text',
    explanation: 'Summary questions require you to pick the three most important points that summarize the entire passage.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'Reading: Sentence Insertion Strategy',
  explanation: 'Using transition words and pronouns to find the correct spot for a new sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `If the sentence to insert starts with "This result, however, was unexpected," where should it go?`,
    options: [
      'After a sentence describing a specific result',
      'At the very beginning of the passage',
      'After a sentence discussing a different topic',
      'Before the experiment is even mentioned'
    ],
    correctAnswer: 'After a sentence describing a specific result',
    explanation: 'The phrase "This result" is a cohesive device that must follow the description of the result itself.',
    points: 2
  }))
};

// SHARDS 3-4: Listening - Connecting Content
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Listening: Table/Grid Questions',
  explanation: 'Organizing complex information into categories as heard in the lecture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `In a classification table question, you must correctly ________ features to their respective categories.`,
    options: ['assign', 'ignore', 'alphabetize', 'remove'],
    correctAnswer: 'assign',
    explanation: 'These questions test your ability to track which features belong to which concepts during a lecture.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Listening: Understanding Organization',
  explanation: 'Identifying the overall structure of a lecture (e.g., chronological, comparison, cause/effect).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `A lecture that discusses the similarities and differences between two species is using which structure?`,
    options: ['Comparison and Contrast', 'Chronological Order', 'Problem and Solution', 'Simple Description'],
    correctAnswer: 'Comparison and Contrast',
    explanation: 'Recognizing the organizational pattern helps you predict the type of information that will follow.',
    points: 2
  }))
};

// SHARDS 5-6: Speaking - Integrated Tasks (3 & 4)
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Speaking: Task 3 (Academic Reading/Lecture)',
  explanation: 'Summarizing an academic concept and how a specific example illustrates it.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `In Task 3, you should spend MOST of your time explaining ________.`,
    options: [
      'The example from the lecture',
      'The definition from the reading',
      'Your own personal experience',
      'The history of the topic'
    ],
    correctAnswer: 'The example from the lecture',
    explanation: 'The primary goal is to show how the lecture example fits the reading definition.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Speaking: Task 4 (Academic Lecture Only)',
  explanation: 'Synthesizing two points or two examples from a single lecture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `A typical Task 4 lecture describes two ________ of a main concept.`,
    options: ['ways/types/examples', 'reasons to disagree', 'students opinions', 'reading passages'],
    correctAnswer: 'ways/types/examples',
    explanation: 'The professor usually explains a concept by providing two distinct examples or sub-types.',
    points: 2
  }))
};

// SHARDS 7-8: Writing - Synthesis and Nuance
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Writing: Contrastive Conjunctions',
  explanation: 'Using transitions to highlight the disagreement between reading and listening.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which word pair works best for contrast? "________ the reading claims X, the professor ________ that Y is true."`,
    options: ['While / argues', 'Because / says', 'Since / agrees', 'If / doubts'],
    correctAnswer: 'While / argues',
    explanation: '"While" sets up the contrast, and "argues" is a strong academic verb for the counter-point.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Writing: Academic Discussion Stance',
  explanation: 'Using hedging and qualifying language to sound more academic.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which sentence sounds most professional?`,
    options: [
      'This evidence suggests that the theory may be flawed.',
      'This evidence proves the theory is 100% wrong.',
      'I think the theory is bad and everyone knows it.',
      'The theory is not good because of the evidence.'
    ],
    correctAnswer: 'This evidence suggests that the theory may be flawed.',
    explanation: 'Using "suggests" and "may" shows academic caution, which is highly valued in the writing score.',
    points: 2
  }))
};

// SHARDS 9-10: Integrated Vocabulary & Error Check
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Prefixes and Roots',
  explanation: 'Using word parts to decode unfamiliar academic terms.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `What does the prefix "multi-" mean in words like "multifaceted" or "multidisciplinary"?`,
    options: ['Many', 'One', 'Small', 'False'],
    correctAnswer: 'Many',
    explanation: 'Knowing common roots and prefixes helps you understand academic vocabulary on the fly.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Strategy: Time Management across All Sections',
  explanation: 'Optimizing your remaining time for maximum scoring potential.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `In the Reading section, how much time should you spend per passage (including questions)?`,
    options: ['18 minutes', '5 minutes', '40 minutes', '10 minutes'],
    correctAnswer: '18 minutes',
    explanation: 'With 36 minutes for 2 passages, 18 minutes per passage is the target for a balanced performance.',
    points: 2
  }))
};

export const B2_WEEK_20 = createShardedToeflUnit(
  'toefl-b2-w20',
  'Week 20: Comprehensive Mixed Review',
  'A full-spectrum review of Reading, Listening, Speaking, and Writing strategies at the B2 level.',
  ['Master Summary and Insertion questions in Reading', 'Excel at Table and Organization questions in Listening', 'Refine Integrated Speaking Tasks 3 and 4', 'Enhance synthesis and hedging in Writing'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
