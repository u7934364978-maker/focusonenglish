import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 32;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'writing',
  title: 'C1 Writing: The Precision Comparison Matrix',
  explanation: 'Ensuring every point in the reading has a direct, specific counter-point from the lecture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `In an Integrated Task, if the reading mentions "High Costs," the lecture usually ________.`,
    options: [
      'Provides a specific reason why those costs are actually an "investment" or are "offset by [X]"',
      'Agrees that things are expensive',
      'Talks about a completely different topic like "Quality"',
      'Says the reading is lying'
    ],
    correctAnswer: 'Provides a specific reason why those costs are actually an "investment" or are "offset by [X]"',
    explanation: 'C1 writing requires identifying the *specific logic* used to refute a point, not just the fact that it was refuted.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'writing',
  title: 'C1 Writing: Advanced Attribution Verbs',
  explanation: 'Using "posits," "contends," "refutes," "undermines," and "substantiates."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which verb best describes a professor proving the reading is wrong using new evidence?`,
    options: ['"undermines"', '"posits"', '"mentions"', '"repeats"'],
    correctAnswer: '"undermines"',
    explanation: '"Undermines" suggests that the lecturer is weakening the foundation of the reading\'s argument.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'writing',
  title: 'C1 Writing: Handling Conditional Evidence',
  explanation: 'Writing about results that "might" happen according to the sources.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `A correct way to summarize a tentative finding is: ________.`,
    options: [
      '"The lecturer suggests that the outcome is contingent upon the availability of funding."',
      '"The lecturer says the outcome will happen because of money."',
      '"The outcome happens if money is there."',
      '"Maybe it happens, says the lecturer."'
    ],
    correctAnswer: '"The lecturer suggests that the outcome is contingent upon the availability of funding."',
    explanation: '"Contingent upon" is a high-level way to express dependency/conditionality.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'writing',
  title: 'C1 Writing: Academic Discussion - Adding Value',
  explanation: 'Not just repeating "I agree with Student A," but adding a new dimension.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `How do you add "original value" in the Academic Discussion task?`,
    options: [
      'By introducing a new stakeholder or a long-term consequence not mentioned by others',
      'By copying the words of the most intelligent student',
      'By writing "I agree" five times',
      'By summarizing the professor\'s question'
    ],
    correctAnswer: 'By introducing a new stakeholder or a long-term consequence not mentioned by others',
    explanation: 'Adding a "new dimension" (e.g., "While Paul mentions cost, we must also consider the environmental impact...") is key for a high score.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'writing',
  title: 'C1 Writing: Syntactic Compression',
  explanation: 'Combining multiple small ideas into one complex, grammatically perfect sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Combine: "The theory is old. It lacks data. It is no longer used."`,
    options: [
      '"Obsolete and data-deficient, the theory has largely been abandoned by modern scholars."',
      '"The theory is old and it has no data so people don\'t use it."',
      '"Because it is old and has no data, they don\'t use the theory."',
      '"It is an old theory with no data and no usage."'
    ],
    correctAnswer: '"Obsolete and data-deficient, the theory has largely been abandoned by modern scholars."',
    explanation: 'Using adjectives like "obsolete" and "data-deficient" as modifiers at the start of the sentence is very C1.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'writing',
  title: 'C1 Writing: Strategic Hedging',
  explanation: 'Using "could," "might," "purportedly," and "potentially" to avoid over-generalization.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Why is hedging important in academic writing?`,
    options: [
      'It shows you recognize that most academic "facts" are theories with some uncertainty',
      'It helps you write more words to reach the limit',
      'It makes you sound like you are not sure of anything',
      'It is a rule from the dictionary'
    ],
    correctAnswer: 'It shows you recognize that most academic "facts" are theories with some uncertainty',
    explanation: 'Absolute statements (e.g., "This causes X") are often too simple for C1 academic contexts.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'writing',
  title: 'C1 Writing: The "Pivot" in Academic Discussion',
  explanation: 'Connecting your idea to another student\'s idea before moving in a new direction.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `A good pivot phrase is: ________.`,
    options: [
      '"While [Student A] makes a valid point regarding [X], I believe we are overlooking the crucial role of [Y]."',
      '"[Student A] is right, but here is my idea."',
      '"I agree with [Student A], and also [My Idea]."',
      '"What [Student A] said was interesting, now listen to me."'
    ],
    correctAnswer: '"While [Student A] makes a valid point regarding [X], I believe we are overlooking the crucial role of [Y]."',
    explanation: 'This "acknowledgment + redirection" structure is the gold standard for discussion tasks.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'writing',
  title: 'C1 Writing: Advanced Conclusion Strategies',
  explanation: 'Using the conclusion to synthesize the overall conflict between sources.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `In an Integrated conclusion, you should ________.`,
    options: [
      'Summarize the "fundamental disagreement" between the text and the lecture',
      'Repeat your introduction exactly',
      'Say "Thanks for reading my essay"',
      'List all the points again one by one'
    ],
    correctAnswer: 'Summarize the "fundamental disagreement" between the text and the lecture',
    explanation: 'A strong conclusion highlights the *relationship* between the two sources.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'writing',
  title: 'C1 Writing: Cohesive Chains',
  explanation: 'Using "This [Noun]" or "Such [Noun]" to link sentences (e.g., "This discrepancy leads to...").',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `How can you link: "The data is inconsistent. It causes problems for researchers."?`,
    options: [
      '"The data is inconsistent; this instability poses a significant challenge for researchers."',
      '"The data is inconsistent and it causes problems."',
      '"Because it is inconsistent, researchers have problems."',
      '"The data has inconsistency. This causes issues."'
    ],
    correctAnswer: '"The data is inconsistent; this instability poses a significant challenge for researchers."',
    explanation: 'Using a "Summary Noun" (instability) to refer back to a previous idea (inconsistent) is a high-level cohesive device.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'writing',
  title: 'C1 Writing: Precision in Parallelism',
  explanation: 'Ensuring complex lists are grammatically balanced.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Identify the sentence with correct parallel structure: ________.`,
    options: [
      '"The proposal aims to increase revenue, reduce waste, and foster innovation."',
      '"The proposal aims to increase revenue, reducing waste, and innovation."',
      '"The proposal aims for revenue increase, to reduce waste, and foster innovation."',
      '"The proposal aims increasing revenue, reduce waste, and fostering innovation."'
    ],
    correctAnswer: '"The proposal aims to increase revenue, reduce waste, and foster innovation."',
    explanation: 'Parallelism (to increase, [to] reduce, [to] foster) is essential for grammatical clarity at the C1 level.',
    points: 2
  }))
};

export const C1_WEEK_32 = createShardedToeflUnit(
  'toefl-c1-w32',
  'Week 32: Writing - Integrated Mastery & Academic Discussion',
  'Mastering high-level written synthesis and academic discourse through precision comparison, advanced attribution, and sophisticated discussion strategies.',
  ['Execute high-precision matching of reading and listening points in Integrated tasks', 'Apply advanced academic attribution and hedging to refine written tone', 'Develop original, value-added contributions in Academic Discussion tasks', 'Utilize complex syntactic compression and cohesive chains to enhance essay flow'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
