import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 15;
const LEVEL = 'b2';

// SHARDS 1-2: Advanced Grammar for Writing - The Passive Voice
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Passive Voice in Academic Writing',
  explanation: 'Using the passive voice to maintain an objective and formal tone.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Rewrite the active sentence into a formal passive one: "The researchers conducted the experiment in 2022."`,
    options: [
      'The experiment was conducted in 2022.',
      'The experiment was conducting in 2022.',
      'In 2022, the experiment conducted.',
      'Conducting the experiment happened in 2022.'
    ],
    correctAnswer: 'The experiment was conducted in 2022.',
    explanation: 'Passive voice shifts the focus to the action (the experiment) rather than the actors (the researchers).',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Avoiding Personal Pronouns',
  explanation: 'Transforming "I think" statements into objective academic observations.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which is the most formal way to replace "I think the data is wrong"?`,
    options: [
      'It appears that the data may be inaccurate.',
      'I think the data has errors.',
      'Maybe the data is not good.',
      'The data is definitely wrong, in my opinion.'
    ],
    correctAnswer: 'It appears that the data may be inaccurate.',
    explanation: 'Using "It appears that" or "Evidence suggests" creates a more professional academic tone.',
    points: 2
  }))
};

// SHARDS 3-4: Coherence and Punctuation
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'Mastering the Semicolon and Colon',
  explanation: 'Using advanced punctuation to link related independent clauses.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Which sentence uses a semicolon correctly?`,
    options: [
      'The results were inconclusive; therefore, more research is needed.',
      'The results were inconclusive; and more research is needed.',
      'The results; were inconclusive therefore research is needed.',
      'Because the results were inconclusive; research is needed.'
    ],
    correctAnswer: 'The results were inconclusive; therefore, more research is needed.',
    explanation: 'A semicolon is used to join two independent clauses without a coordinating conjunction (like "and" or "but").',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'Parallel Structure in Lists',
  explanation: 'Ensuring consistent grammatical form in lists of actions or ideas.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which sentence follows parallel structure?`,
    options: [
      'The program aims at reducing costs, improving efficiency, and increasing profit.',
      'The program aims at reducing costs, to improve efficiency, and profit increases.',
      'The program aims at cost reduction, improving efficiency, and to increase profit.',
      'The program aims to reduce costs, improving efficiency, and profit.'
    ],
    correctAnswer: 'The program aims at reducing costs, improving efficiency, and increasing profit.',
    explanation: 'Parallel structure requires all items in a list to use the same grammatical form (in this case, gerunds: -ing verbs).',
    points: 2
  }))
};

// SHARDS 5-6: Advanced Connectors for Logical Flow
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Expressing Causality (Cause and Effect)',
  explanation: 'Using "Due to," "As a result of," "Attribute to," and "Stem from".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Choose the correct preposition: "The decline in sales was attributed ________ a lack of innovation."`,
    options: ['to', 'with', 'from', 'by'],
    correctAnswer: 'to',
    explanation: 'We say something is "attributed to" a specific cause.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Qualifying Arguments (Hedging)',
  explanation: 'Using words like "possibly," "tends to," "likely," and "suggests" to avoid overgeneralization.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which sentence is a better academic claim?`,
    options: [
      'The data suggests that the trend may continue.',
      'The trend will definitely continue.',
      'The trend always continues.',
      'Everyone knows the trend continues.'
    ],
    correctAnswer: 'The data suggests that the trend may continue.',
    explanation: 'Academic writing avoids absolute statements. Using "suggests" and "may" shows a sophisticated understanding of data.',
    points: 2
  }))
};

// SHARDS 7-8: Relative Clauses and Complex Sentences
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Non-defining Relative Clauses',
  explanation: 'Adding extra information using "which" or "who" with commas.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Select the correctly punctuated sentence:`,
    options: [
      'The new policy, which was implemented last month, has been successful.',
      'The new policy which was implemented last month has been successful.',
      'The new policy, that was implemented last month, has been successful.',
      'The new policy which, was implemented last month, has been successful.'
    ],
    correctAnswer: 'The new policy, which was implemented last month, has been successful.',
    explanation: 'Non-defining relative clauses (extra info) must be set off by commas and use "which" (not "that").',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Reduced Relative Clauses',
  explanation: 'Making your writing more concise by removing relative pronouns.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which is a correct reduction of: "The students who are enrolled in the course must attend"?`,
    options: [
      'The students enrolled in the course must attend.',
      'The students enrolling in the course must attend.',
      'The students enroll in the course must attend.',
      'The students in course enrolled must attend.'
    ],
    correctAnswer: 'The students enrolled in the course must attend.',
    explanation: 'Reducing relative clauses ("who are enrolled" -> "enrolled") makes your writing more professional.',
    points: 2
  }))
};

// SHARDS 9-10: Punctuation and Flow Review
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Punctuation: The "Oxford Comma"',
  explanation: 'Ensuring clarity in lists of three or more items.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which sentence uses the Oxford Comma (serial comma) correctly?`,
    options: [
      'He studied biology, chemistry, and physics.',
      'He studied biology chemistry and physics.',
      'He studied biology, chemistry and physics.',
      'He studied biology, chemistry and, physics.'
    ],
    correctAnswer: 'He studied biology, chemistry, and physics.',
    explanation: 'The comma before "and" in a list of three or more items is standard in TOEFL-style American English.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Maintaining Tone Consistency',
  explanation: 'Identifying and removing informal or slang terms from your writing.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Which word is too informal for a TOEFL essay?`,
    options: ['Kids', 'Children', 'Youth', 'Adolescents'],
    correctAnswer: 'Kids',
    explanation: 'In academic writing, use "children" or "students" instead of "kids".',
    points: 2
  }))
};

export const B2_WEEK_15 = createShardedToeflUnit(
  'toefl-b2-w15',
  'Week 15: Writing: Advanced Grammar and Coherence',
  'Refining the technical aspects of B2-level writing, including complex grammar, punctuation, and flow.',
  ['Use passive voice for formal academic tone', 'Apply semicolons and parallel structure correctly', 'Qualify arguments using hedging language', 'Reduce relative clauses for conciseness'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
