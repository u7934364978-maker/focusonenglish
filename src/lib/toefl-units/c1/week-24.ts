import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 24;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'mixed',
  title: 'C1 Review: Rhetorical Function Analysis',
  explanation: 'Revisiting why authors and speakers use specific structures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `If a Reading passage uses the phrase "Contrary to popular belief," the author is likely preparing to ________.`,
    options: [
      'Present a counter-intuitive fact or theory',
      'Agree with the majority opinion',
      'End the passage immediately',
      'Ask the reader for their personal belief'
    ],
    correctAnswer: 'Present a counter-intuitive fact or theory',
    explanation: 'This phrase signals a rhetorical shift toward a less common or expert perspective.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'mixed',
  title: 'C1 Review: Advanced Synthesis Review',
  explanation: 'Connecting subtle listening details to abstract reading premises.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `In Task 1 Writing, if the lecture mentions a "funding shortage," and the reading mentions "universal implementation," the synthesis should focus on ________.`,
    options: [
      'The economic feasibility of the reading\'s proposal',
      'The history of the currency mentioned',
      'The professor\'s personal salary',
      'Why the reading is more interesting than the lecture'
    ],
    correctAnswer: 'The economic feasibility of the reading\'s proposal',
    explanation: '"Funding shortage" is a practical counter-point to the "universal implementation" ideal.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'reading',
  title: 'Simulation: C1 Reading - Academic Philosophy',
  explanation: 'A dense passage on "Logical Positivism" with abstract inference questions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `The passage implies that Logical Positivists would likely reject ________.`,
    options: [
      'Metaphysical claims that cannot be empirically verified',
      'The use of mathematics in science',
      'The importance of clear definitions',
      'Observations made through a telescope'
    ],
    correctAnswer: 'Metaphysical claims that cannot be empirically verified',
    explanation: 'Logical Positivism is characterized by its strict adherence to empirical verification.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Simulation: C1 Listening - Complex Biology Lecture',
  explanation: 'A lecture with multiple "apparent" digressions and speaker stance shifts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Why does the professor mention the "discovery of the Coelacanth"?`,
    options: [
      'To provide a real-world example of a "living fossil" that challenged previous assumptions',
      'To explain how to fish in the Indian Ocean',
      'To complain about the cost of deep-sea exploration',
      'To show a video of the fish'
    ],
    correctAnswer: 'To provide a real-world example of a "living fossil" that challenged previous assumptions',
    explanation: 'The Coelacanth is a classic academic example used to discuss evolutionary stability and unexpected discoveries.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'speaking',
  title: 'Simulation: C1 Speaking - Integration Challenge',
  explanation: 'Summarizing a multi-layered campus debate on "AI in Grading."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If the student argues that AI grading "lacks a human touch," your response should ________.`,
    options: [
      'Specifically define what "human touch" means in an academic context (e.g., feedback nuance)',
      'Just say the student doesn\'t like robots',
      'Give your own opinion on AI',
      'List the names of different AI programs'
    ],
    correctAnswer: 'Specifically define what "human touch" means in an academic context (e.g., feedback nuance)',
    explanation: 'Capturing the student\'s specific rationale is what separates a B2 response from a C1 response.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'writing',
  title: 'Simulation: C1 Writing - Synthesis Mastery',
  explanation: 'Drafting the "Concession and Counter" paragraph for a Task 1 item.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `The most "C1" way to transition from the concession to the counter is: ________.`,
    options: [
      '"Notwithstanding these potential benefits, the lecturer contends that..."',
      '"But the professor says the opposite because..."',
      '"I agree with the reading, but the listening is better."',
      '"First the reading is okay, then the listening is bad."'
    ],
    correctAnswer: '"Notwithstanding these potential benefits, the lecturer contends that..."',
    explanation: '"Notwithstanding" is a sophisticated preposition that demonstrates high lexical range.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'mixed',
  title: 'C1 Review: Advanced Grammatical Precision',
  explanation: 'Final check on inverted conditionals and complex relative clauses.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which sentence is grammatically correct and most formal?`,
    options: [
      '"Should the project fail to meet its objectives, the consequences would be dire."',
      '"If the project fails, it would be bad."',
      '"If the project will fail, the consequences are dire."',
      '"Should the project fails, the consequences would be dire."'
    ],
    correctAnswer: '"Should the project fail to meet its objectives, the consequences would be dire."',
    explanation: 'This inverted conditional (Should + subject + base verb) is the gold standard for formal academic English.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'mixed',
  title: 'C1 Review: Lexical Density Check',
  explanation: 'Replacing simple verbs with academic equivalents.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Replace "shows" in: "The research shows that..."`,
    options: ['"substantiates the claim that"', '"looks like"', '"tells us that"', '"gives us info that"'],
    correctAnswer: '"substantiates the claim that"',
    explanation: '"Substantiates" is more precise and academic than "shows."',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'mixed',
  title: 'C1 Review: Managing Timing Constraints',
  explanation: 'Strategies for the final 5 minutes of each section.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `If you have 2 minutes left in the Reading section and 3 questions remaining, you should ________.`,
    options: [
      'Quickly eliminate obviously wrong answers and make an educated guess',
      'Read the passage again from the beginning',
      'Panic and leave them blank',
      'Try to read every word of the remaining questions slowly'
    ],
    correctAnswer: 'Quickly eliminate obviously wrong answers and make an educated guess',
    explanation: 'Never leave a question blank on the TOEFL; guessing is always better than no answer.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'mixed',
  title: 'Block 2 Final: Error Log Consolidation',
  explanation: 'Identifying your most frequent "type" of mistake in Block 2.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `A student who consistently misses "Inference" questions should focus on ________ in Block 3.`,
    options: [
      'Identifying implicit connections between sentences rather than looking for literal words',
      'Reading faster',
      'Learning more vocabulary lists',
      'Listening to more music'
    ],
    correctAnswer: 'Identifying implicit connections between sentences rather than looking for literal words',
    explanation: 'Inference requires synthesizing what is *suggested* by the text, not just what is *stated*.',
    points: 2
  }))
};

export const C1_WEEK_24 = createShardedToeflUnit(
  'toefl-c1-w24',
  'Week 24: Block 2 Review and Full-Section Simulation',
  'A comprehensive review of Rhetorical Analysis skills followed by full-length simulated sections to test speed and accuracy under pressure.',
  ['Consolidate Rhetorical Analysis strategies across all four TOEFL sections', 'Perform at a high level in full-length simulations for Reading and Listening', 'Apply advanced grammatical and lexical range in integrated Speaking and Writing tasks', 'Develop a personalized strategy for managing time during the final minutes of the test'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
