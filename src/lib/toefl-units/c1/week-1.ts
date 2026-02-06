import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 1;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'C1 Reading: Theoretical Physics & String Theory',
  explanation: 'Analyzing extremely dense academic texts with abstract concepts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `The passage suggests that the primary obstacle to proving string theory is ________.`,
    options: [
      'The inability to observe dimensions beyond the standard three spatial ones',
      'A lack of interest among the general scientific community',
      'The exorbitant cost of building larger particle accelerators',
      'Mathematical inconsistencies that cannot be resolved'
    ],
    correctAnswer: 'The inability to observe dimensions beyond the standard three spatial ones',
    explanation: 'The text emphasizes the theoretical nature of extra dimensions and the difficulty of empirical verification.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'C1 Reading: Evolutionary Biology Nuances',
  explanation: 'Distinguishing between subtle evolutionary theories (e.g., punctuated equilibrium vs. phyletic gradualism).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `In the context of the passage, the word "stasis" refers to ________.`,
    options: [
      'A period of little or no evolutionary change',
      'A rapid burst of speciation',
      'The complete extinction of a lineage',
      'The geographic isolation of a population'
    ],
    correctAnswer: 'A period of little or no evolutionary change',
    explanation: 'In evolutionary biology, stasis refers to the long intervals where species remain relatively unchanged in the fossil record.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Advanced Biological Research',
  explanation: 'Lectures featuring heavy terminology and complex experimental designs.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Why does the professor mention the "control group" in the CRISPR experiment?`,
    options: [
      'To highlight the necessity of establishing a baseline for comparison',
      'To criticize the researchers for a flawed methodology',
      'To explain how gene editing is naturally occurring',
      'To suggest that the results were statistically insignificant'
    ],
    correctAnswer: 'To highlight the necessity of establishing a baseline for comparison',
    explanation: 'Control groups are mentioned as a fundamental part of the scientific method to ensure experimental validity.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: Interdisciplinary Scientific Lectures',
  explanation: 'Lectures that bridge multiple fields (e.g., Biochemistry and Ethics).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `What is the speaker's stance on the commercialization of genetic data?`,
    options: [
      'Cautiously pessimistic about privacy protections',
      'Unreservedly enthusiastic about medical breakthroughs',
      'Indifferent to the legal implications',
      'Strongly in favor of government-only data management'
    ],
    correctAnswer: 'Cautiously pessimistic about privacy protections',
    explanation: 'The speaker uses phrases like "vulnerable to misuse" and "lagging legislation" to express concern.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Scientific Reporting & Verbs',
  explanation: 'Precise verbs used in academic journals.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Which verb best replaces "shows" in the sentence: "The data shows a clear correlation between the variables"?`,
    options: ['Corroborates', 'Notices', 'Expects', 'Supposes'],
    correctAnswer: 'Corroborates',
    explanation: 'Corroborates is a more precise academic term meaning to support or confirm a finding.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Abstract Scientific Nouns',
  explanation: 'High-level nouns for scientific concepts (e.g., Paradigm, Hypothesis, Empirical).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `A "paradigm shift" in science refers to ________.`,
    options: [
      'A fundamental change in approach or underlying assumptions',
      'A minor correction to a mathematical formula',
      'The discovery of a new celestial body',
      'A change in the funding of a research project'
    ],
    correctAnswer: 'A fundamental change in approach or underlying assumptions',
    explanation: 'A paradigm shift represents a major revolution in scientific thought.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Nominalization in Scientific Writing',
  explanation: 'Converting verbs and adjectives into nouns to sound more academic.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which sentence uses nominalization most effectively for a formal tone?`,
    options: [
      'The investigation into the cause of the reaction was inconclusive.',
      'Scientists investigated why the reaction happened but didn\'t find the answer.',
      'Looking into the reaction led to nothing.',
      'They checked the reaction and couldn\'t say why.'
    ],
    correctAnswer: 'The investigation into the cause of the reaction was inconclusive.',
    explanation: 'Converting "investigated" to "The investigation" creates a more formal, academic tone.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Passive Voice in Lab Reports',
  explanation: 'Using the passive voice to maintain objectivity in scientific contexts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Identify the sentence that uses the passive voice to emphasize the process over the actor.`,
    options: [
      'The samples were sterilized using high-pressure steam.',
      'We sterilized the samples with steam.',
      'A machine sterilized the samples.',
      'Sterilization happened because of steam.'
    ],
    correctAnswer: 'The samples were sterilized using high-pressure steam.',
    explanation: 'The passive voice is standard in scientific writing to focus on the objects and processes.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Synthesizing Multiple Scientific Sources',
  explanation: 'Comparing theories from different academic perspectives.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `When synthesizing two conflicting scientific theories, you should first ________.`,
    options: [
      'Identify the specific points of disagreement between the researchers',
      'Choose the theory you like better',
      'Explain why the older theory is completely wrong',
      'Ignore the math and focus on the pictures'
    ],
    correctAnswer: 'Identify the specific points of disagreement between the researchers',
    explanation: 'Academic synthesis requires a clear understanding of where theories diverge.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Managing Time in Dense Reading',
  explanation: 'Strategies for the most challenging C1-level passages.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `If you encounter a highly technical term that is not defined in the text, you should ________.`,
    options: [
      'Infer its meaning from the surrounding context and continue reading',
      'Stop and try to find a dictionary (which isn\'t allowed)',
      'Skip the entire paragraph',
      'Assume the question will not be about that word'
    ],
    correctAnswer: 'Infer its meaning from the surrounding context and continue reading',
    explanation: 'TOEFL C1 Reading expects you to use context clues to handle unfamiliar technical jargon.',
    points: 2
  }))
};

export const C1_WEEK_1 = createShardedToeflUnit(
  'toefl-c1-w1',
  'Week 1: Advanced Academic Reading - The Sciences',
  'Deep dive into complex scientific discourse, featuring String Theory, CRISPR, and evolutionary nuances at a C1 level.',
  ['Analyze dense theoretical physics passages', 'Identify subtle distinctions in evolutionary biology', 'Master scientific reporting vocabulary', 'Utilize nominalization for formal academic tone'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
