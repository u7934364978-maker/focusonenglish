import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 21;
const LEVEL = 'b2';

// SHARDS 1-2: Advanced Reading - Scientific Passages
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Reading: Scientific Methodology',
  explanation: 'Understanding the steps of an experiment as described in a reading passage.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `In a scientific passage, a "variable" refers to ________.`,
    options: ['A factor that is changed or tested', 'A constant value that never moves', 'The name of the scientist', 'The conclusion of the paper'],
    correctAnswer: 'A factor that is changed or tested',
    explanation: 'Academic scientific texts often discuss variables to explain how an experiment was structured.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'Reading: Deciphering Technical Definitions',
  explanation: 'Using context clues to understand highly specialized terminology.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `If a technical term is followed by "that is," the author is providing a ________.`,
    options: ['Definition or clarification', 'Counter-argument', 'List of examples', 'Conclusion'],
    correctAnswer: 'Definition or clarification',
    explanation: 'Signal phrases like "that is" or "in other words" are essential for identifying definitions in dense academic text.',
    points: 2
  }))
};

// SHARDS 3-4: Advanced Reading - Historical & Social Sciences
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'reading',
  title: 'Reading: Chronological Markers',
  explanation: 'Tracking shifts in time and their significance in historical passages.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `The phrase "Prior to this innovation" indicates that the following information happened ________ the innovation.`,
    options: ['Before', 'During', 'After', 'Exactly at the same time as'],
    correctAnswer: 'Before',
    explanation: '"Prior to" is a formal academic marker for events that preceded a specific point in time.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'reading',
  title: 'Reading: Identifying Causality',
  explanation: 'Distinguishing between events that happened together and events where one caused the other.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which word signals a causal relationship?`,
    options: ['Consequently', 'Similarly', 'Furthermore', 'Initially'],
    correctAnswer: 'Consequently',
    explanation: '"Consequently" or "As a result" signals that the following information is the effect of a previously mentioned cause.',
    points: 2
  }))
};

// SHARDS 5-6: Advanced Vocabulary - Discipline Specific
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Biological Processes',
  explanation: 'Mastering terms related to evolution, adaptation, and ecology.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `A species that ________ to its environment is more likely to survive and reproduce.`,
    options: ['adapts', 'adopts', 'adepts', 'admits'],
    correctAnswer: 'adapts',
    explanation: '"Adapt" refers to the process of change by which an organism becomes better suited to its environment.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Geological and Environmental Terms',
  explanation: 'Common vocabulary in passages about Earth science and climate change.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `The process of ________ wearing away rocks and soil by water or wind is called ________.`,
    options: ['erosion', 'eruption', 'evaporation', 'emission'],
    correctAnswer: 'erosion',
    explanation: '"Erosion" is a fundamental term in geological passages describing the wearing down of landforms.',
    points: 2
  }))
};

// SHARDS 7-8: Critical Reading - Tone and Bias
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'reading',
  title: 'Reading: Detecting Author Bias',
  explanation: 'Identifying subtle word choices that reveal the author\'s perspective.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `If an author describes a theory as "problematic" or "questionable," their tone is ________.`,
    options: ['Critical/Skeptical', 'Enthusiastic', 'Neutral', 'Indifferent'],
    correctAnswer: 'Critical/Skeptical',
    explanation: 'Words like "problematic" signal that the author has doubts or sees flaws in the theory.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'reading',
  title: 'Reading: Understanding Counter-Arguments',
  explanation: 'Tracking how an author presents and then refutes opposing views.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Phrase: "Proponents of the theory argue X; however, recent evidence suggests Y." What is the author\'s main point?`,
    options: ['Y is likely more accurate than X', 'X and Y are the same', 'X is definitely true', 'Neither X nor Y matters'],
    correctAnswer: 'Y is likely more accurate than X',
    explanation: 'The transition "however" signals that the author is moving away from the proponent\'s view to a new, likely preferred, perspective.',
    points: 2
  }))
};

// SHARDS 9-10: Academic Synonyms and Paraphrasing
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Reading: Advanced Paraphrasing Mastery',
  explanation: 'Identifying the option that best restates a complex sentence without changing the meaning.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Original: "The population decline was exacerbated by a lack of food." Paraphrase: ________`,
    options: [
      'Food shortages made the decrease in population worse.',
      'A lack of food caused the population to grow.',
      'The population declined before the food ran out.',
      'Food was irrelevant to the population decline.'
    ],
    correctAnswer: 'Food shortages made the decrease in population worse.',
    explanation: '"Exacerbated" means made worse, making this paraphrase the most accurate.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Reading: High-Frequency Academic Collocations',
  explanation: 'Mastering words that frequently appear together in scholarly writing.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Which word completes the collocation: "There is ________ evidence to support the claim."`,
    options: ['compelling', 'completing', 'competing', 'compiling'],
    correctAnswer: 'compelling',
    explanation: '"Compelling evidence" is a very common academic phrase meaning evidence that is very strong and convincing.',
    points: 2
  }))
};

export const B2_WEEK_21 = createShardedToeflUnit(
  'toefl-b2-w21',
  'Week 21: Advanced Reading Strategy',
  'Deepening comprehension of complex scientific and historical texts with a focus on methodology and causality.',
  ['Analyze scientific methodology and variables in text', 'Track chronological and causal relationships', 'Identify author bias and rhetorical shifts', 'Master high-level academic paraphrasing and collocations'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
