import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 20;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'C1 Listening: Mapping Hierarchical Information',
  explanation: 'Identifying the relationship between a broad category and its specific sub-types.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A professor says: "There are three primary drivers of urban sprawl. The first, and perhaps most significant, is the desire for lower density living." How should you map this?`,
    options: [
      'Urban Sprawl (Main) → Desire for lower density (Sub-point 1)',
      'Desire for lower density (Main) → Urban Sprawl (Sub-point 1)',
      'They are two unrelated topics',
      'The desire for lower density living is the opposite of urban sprawl'
    ],
    correctAnswer: 'Urban Sprawl (Main) → Desire for lower density (Sub-point 1)',
    explanation: 'Effective mapping requires distinguishing between the overarching topic and its constituent parts.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'C1 Listening: Classification Questions',
  explanation: 'Sorting details into the correct categories based on a complex lecture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `If the lecture compares "Classical Economics" and "Behavioral Economics," a classification question might ask you to ________.`,
    options: [
      'Assign specific traits (like "rationality") to the correct school of thought',
      'Choose which school of thought you personally prefer',
      'Name a third school of thought not mentioned in the lecture',
      'Define what "Economics" means in general'
    ],
    correctAnswer: 'Assign specific traits (like "rationality") to the correct school of thought',
    explanation: 'Classification questions test your ability to organize information accurately under time pressure.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Distinguishing Main Point from Illustration',
  explanation: 'Identifying when a detail is an essential part of the argument vs. a replaceable example.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `A professor says: "Social media impacts mental health. Take, for instance, the study on sleep deprivation." The "Main Point" is ________.`,
    options: [
      'The impact of social media on mental health',
      'The specific details of the sleep deprivation study',
      'That social media is always bad',
      'That everyone should stop using their phones'
    ],
    correctAnswer: 'The impact of social media on mental health',
    explanation: '"Take, for instance" signals that the following information is an illustration of a broader point.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: Tracking Parallel Arguments',
  explanation: 'Understanding lectures that present two competing theories simultaneously.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `In a lecture about "Nature vs. Nurture," how does the professor likely structure the information?`,
    options: [
      'By oscillating between evidence for nature and evidence for nurture',
      'By only talking about nature for the first 4 minutes',
      'By arguing that both are completely wrong',
      'By asking the students to vote on which they like better'
    ],
    correctAnswer: 'By oscillating between evidence for nature and evidence for nurture',
    explanation: 'Complex academic lectures often compare theories point-by-point.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Listening: Mapping Terminology',
  explanation: 'Terms like "Subsequent," "Constituent," "Prerequisite," and "Derivative."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If "Theory B" is a "derivative" of "Theory A," it means ________.`,
    options: [
      'Theory B developed from or was based on Theory A',
      'Theory B is the exact opposite of Theory A',
      'Theory B came before Theory A',
      'Theory B is much more important than Theory A'
    ],
    correctAnswer: 'Theory B developed from or was based on Theory A',
    explanation: 'Understanding the relationships between theories is crucial for classification questions.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'C1 Listening: Mapping Complex Processes',
  explanation: 'Identifying the correct order and dependencies in a scientific or historical process.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `If a step is described as a "prerequisite," it must happen ________.`,
    options: ['Before any other steps can proceed', 'After the whole process is finished', 'Simultaneously with all other steps', 'Only if the researcher wants it to'],
    correctAnswer: 'Before any other steps can proceed',
    explanation: '"Prerequisite" means something that is required as a prior condition.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'C1 Listening: Detecting "Ancillary" Details',
  explanation: 'Identifying information that is interesting but not central to the main argument.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `A professor says: "The artist lived in a small blue house—which isn't really important—but he painted mainly landscapes." The house color is ________.`,
    options: ['An ancillary detail', 'The main theme of the lecture', 'A critical piece of evidence', 'A lie'],
    correctAnswer: 'An ancillary detail',
    explanation: 'Learning what to *ignore* is as important as learning what to note.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'C1 Listening: Mapping Cause and Effect Loops',
  explanation: 'Understanding "feedback loops" where an effect becomes a new cause.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `In a "positive feedback loop" in climate science, a result like "melting ice" leads to ________.`,
    options: [
      'More warming, which causes even more ice to melt',
      'A cooling of the planet',
      'A complete stop to the melting process',
      'More snow falling in the desert'
    ],
    correctAnswer: 'More warming, which causes even more ice to melt',
    explanation: 'Feedback loops require tracking circular logical relationships.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'listening',
  title: 'C1 Listening: Mapping "Anomalies"',
  explanation: 'Identifying when a piece of data does NOT fit the predicted pattern of a theory.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `An "anomaly" in a scientific experiment is ________.`,
    options: [
      'A result that deviates from what is standard, normal, or expected',
      'A result that perfectly matches the theory',
      'The first time an experiment is ever done',
      'A type of equipment used in a laboratory'
    ],
    correctAnswer: 'A result that deviates from what is standard, normal, or expected',
    explanation: 'The TOEFL often tests your ability to identify the "exception to the rule."',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'mixed',
  title: 'C1 Listening: Multi-Selection Review',
  explanation: 'Practicing the "Choose 2 out of 4" or "Choose 3 out of 5" questions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `In a multi-selection question, you only get points if you ________.`,
    options: [
      'Select ALL the correct answers required by the prompt',
      'Select at least one correct answer',
      'Guess all the answers correctly',
      'Select the answer with the most words'
    ],
    correctAnswer: 'Select ALL the correct answers required by the prompt',
    explanation: 'Precision is key for multi-selection questions; partial credit is rarely given.',
    points: 2
  }))
};

export const C1_WEEK_20 = createShardedToeflUnit(
  'toefl-c1-w20',
  'Week 20: Listening - Complex Information Mapping',
  'Mastering the mental organization and note-taking required for dense, multi-layered academic lectures and complex classification tasks.',
  ['Map hierarchical relationships between main ideas and sub-points', 'Accurately categorize information into complex classification tables', 'Distinguish between core arguments and ancillary illustrations', 'Track circular logical relationships and feedback loops in science'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
