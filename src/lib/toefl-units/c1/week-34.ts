import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 34;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'C1 Reading: Identifying "Almost Right" Distractors',
  explanation: 'Learning to reject options that are partially true but ultimately incorrect.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A common "distractor" in C1 Reading is an option that ________.`,
    options: [
      'Uses words from the passage but misinterprets the relationship between them',
      'Is completely unrelated to the topic',
      'Is written in a different language',
      'Is much shorter than the correct answer'
    ],
    correctAnswer: 'Uses words from the passage but misinterprets the relationship between them',
    explanation: 'The TOEFL often uses "familiar words" in "incorrect logic" to trap students who are skimming.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'C1 Reading: Categorization Table Mastery',
  explanation: 'Sorting complex ideas into a summary table with 100% accuracy.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `In a 2-column categorization table, a "junk" option is often ________.`,
    options: [
      'A minor detail that is true but does not represent a main category',
      'A sentence with a spelling error',
      'A summary of the entire passage',
      'The first sentence of the text'
    ],
    correctAnswer: 'A minor detail that is true but does not represent a main category',
    explanation: 'Tables require "Major Ideas." True but minor details are the most dangerous distractors.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Decoding Inferred Purpose',
  explanation: 'Understanding *why* a speaker says something based on their prosody.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `If a professor says "Well, I *suppose* that is one way to look at it," their tone is likely ________.`,
    options: ['"skeptical"', '"enthusiastic"', '"indifferent"', '"angry"'],
    correctAnswer: '"skeptical"',
    explanation: 'Stress on "suppose" combined with a falling intonation usually indicates academic doubt.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: Identifying Subtle Sarcasm',
  explanation: 'Recognizing when a speaker is using irony to make a point.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which phrase is most likely sarcastic in a campus conversation?`,
    options: [
      '"Oh, great. Another 50-page reading for Tuesday."',
      '"I really enjoy studying in the library."',
      '"The professor is very knowledgeable."',
      '"I need to buy a new textbook."'
    ],
    correctAnswer: '"Oh, great. Another 50-page reading for Tuesday."',
    explanation: 'Using positive words (great) for a negative situation (50-page reading) is a clear sign of sarcasm.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Polish: Academic Collocations Drill 1',
  explanation: 'Using "Verbs + Nouns" that naturally go together in academic English.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Which verb collocates with "a hypothesis"?`,
    options: ['"formulate"', '"do"', '"make"', '"create"'],
    correctAnswer: '"formulate"',
    explanation: '"Formulate a hypothesis" is the standard academic collocation.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Polish: Academic Collocations Drill 2',
  explanation: 'Focusing on "Adverb + Adjective" pairs (e.g., "diametrically opposed").',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Two theories that are completely different are ________ opposed.`,
    options: ['"diametrically"', '"widely"', '"vastly"', '"highly"'],
    correctAnswer: '"diametrically"',
    explanation: '"Diametrically opposed" is a high-level way to express total contradiction.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'reading',
  title: 'C1 Reading: The "Implicit Meaning" Trap',
  explanation: 'Answering questions where the info is "suggested" but not "stated."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `If a passage says "Species X survived whereas Species Y did not," what is implied?`,
    options: [
      'Species X possessed a trait or adaptation that Species Y lacked',
      'Species Y was larger than Species X',
      'Both species are now extinct',
      'Species X killed Species Y'
    ],
    correctAnswer: 'Species X possessed a trait or adaptation that Species Y lacked',
    explanation: 'Contrastive sentences (whereas) imply a difference in capability or condition.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'C1 Listening: Tracking Complex Relationships',
  explanation: 'Understanding how multiple historical or scientific factors interact.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `If Factor A "exacerbates" Factor B, then Factor B ________.`,
    options: ['"becomes worse"', '"disappears"', '"becomes better"', '"stays the same"'],
    correctAnswer: '"becomes worse"',
    explanation: '"Exacerbate" means to make a problem, bad situation, or negative feeling worse.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'C1 Polish: Precision Synonyms',
  explanation: 'Choosing the word with the exact right "shade" of meaning.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which word is best for a "small, almost invisible" difference?`,
    options: ['"subtle"', '"minor"', '"weak"', '"low"'],
    correctAnswer: '"subtle"',
    explanation: '"Subtle" specifically refers to something so delicate or precise as to be difficult to analyze or describe.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'grammar',
  title: 'C1 Polish: Final Punctuation & Flow',
  explanation: 'Using semicolons, colons, and dashes to create "professional" sentence variety.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Which sentence uses a colon correctly to introduce a list of reasons?`,
    options: [
      '"The theory failed for three reasons: lack of data, poor methodology, and bias."',
      '"The reasons were: data, methods, and bias."',
      '"Reasons: data, methods, bias, were why it failed."',
      '"Because of: data, methods, and bias, it failed."'
    ],
    correctAnswer: '"The theory failed for three reasons: lack of data, poor methodology, and bias."',
    explanation: 'A colon should follow a complete independent clause when introducing a list.',
    points: 2
  }))
};

export const C1_WEEK_34 = createShardedToeflUnit(
  'toefl-c1-w34',
  'Week 34: Final Polish - Reading & Listening Precision',
  'Eliminating minor errors and refining interpretative skills in Reading and Listening through advanced distractor analysis, tone decoding, and academic collocation mastery.',
  ['Identify and reject sophisticated distractor patterns in high-level Reading passages', 'Master complex categorization and summary tables with absolute precision', 'Decode inferred speaker purpose and subtle attitude through prosodic analysis', 'Apply a broad range of high-tier academic collocations in receptive tasks'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
