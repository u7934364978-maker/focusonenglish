import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 29;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'C1 Reading: Distant Referents',
  explanation: 'Identifying the noun a pronoun refers to when it is 2-3 sentences away.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `The word "this" in the final sentence of paragraph 3 likely refers to ________.`,
    options: [
      'The overarching theory introduced at the beginning of the passage',
      'The specific data point mentioned in the previous sentence',
      'The author\'s personal opinion',
      'A future experiment that hasn\'t happened yet'
    ],
    correctAnswer: 'The overarching theory introduced at the beginning of the passage',
    explanation: 'At the C1 level, reference questions often point to large, abstract concepts introduced much earlier in the text.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'C1 Reading: Identifying Internal Contradictions',
  explanation: 'Spotting where the text mentions an exception that seems to invalidate a previous claim.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `The author mentions the "Plateau Effect" to ________.`,
    options: [
      'Show an exception to the general rule of steady progress',
      'Prove that the rule is always correct',
      'Explain why the topic is boring',
      'Give a name to a new mountain range'
    ],
    correctAnswer: 'Show an exception to the general rule of steady progress',
    explanation: 'Academic texts often present a "Rule" followed by a "Nuance" or "Exception" to show depth.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'reading',
  title: 'C1 Reading: Synthesis of Disparate Data Points',
  explanation: 'Connecting a fact from paragraph 1 with an implication in paragraph 4.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Based on the description of "arid conditions" in paragraph 1 and the "root structures" in paragraph 4, what can be inferred?`,
    options: [
      'The plant species adapted its roots specifically to maximize water absorption',
      'The plant does not need water at all',
      'The plant grew roots to protect itself from predators',
      'The plant prefers rainy environments'
    ],
    correctAnswer: 'The plant species adapted its roots specifically to maximize water absorption',
    explanation: 'Inference questions often require bridging information from two geographically distinct parts of the passage.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'reading',
  title: 'C1 Reading: Detecting Authorial Tone Shifts',
  explanation: 'Identifying when the author moves from objective reporting to critical analysis.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `The author\'s tone in the final paragraph can be best described as ________.`,
    options: [
      'Cautionary and skeptical',
      'Enthusiastic and celebratory',
      'Completely neutral and indifferent',
      'Angry and aggressive'
    ],
    correctAnswer: 'Cautionary and skeptical',
    explanation: 'Tone is often revealed through subtle word choices (e.g., "alleged," "supposed," "yet to be seen").',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'C1 Reading: Advanced "Purpose" Questions',
  explanation: 'Why does the author use a specific "analogy"?',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `The author compares the "economic cycle" to a "pendulum" in order to ________.`,
    options: [
      'Emphasize the predictable and repetitive nature of the fluctuations',
      'Show that the economy is like a clock',
      'Suggest that the economy is dangerous',
      'Explain why people should save money'
    ],
    correctAnswer: 'Emphasize the predictable and repetitive nature of the fluctuations',
    explanation: 'Analogies are used to make abstract concepts more concrete and understandable.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Reading: High-Level Discourse Markers',
  explanation: 'Understanding "Insofar as," "To the extent that," and "Notwithstanding."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `The phrase "Insofar as" is used to ________.`,
    options: [
      'Specify the degree or extent to which a statement is true',
      'Introduce a new topic completely',
      'Show that the author is finished writing',
      'Ask the reader a question'
    ],
    correctAnswer: 'Specify the degree or extent to which a statement is true',
    explanation: '"Insofar as" is a precise way to limit the scope of a claim.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'reading',
  title: 'C1 Reading: Synthesis of Conflicting Theories',
  explanation: 'Understanding how "Theory A" and "Theory B" compete to explain the same data.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `According to the passage, the primary difference between the "Gradualist" and "Saltationist" views is ________.`,
    options: [
      'The speed at which evolutionary changes occur',
      'Whether evolution happens at all',
      'The type of animals that evolve',
      'The color of the fossils found'
    ],
    correctAnswer: 'The speed at which evolutionary changes occur',
    explanation: 'C1 reading passages often center on a debate between two or more academic perspectives.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'reading',
  title: 'C1 Reading: Advanced Schematic Mapping',
  explanation: 'Connecting a "Result" in paragraph 5 to a "Method" in paragraph 2.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `The "unanticipated outcome" mentioned in the conclusion was caused by ________.`,
    options: [
      'A flaw in the sampling method described in paragraph 2',
      'The author making a mistake in calculation',
      'The weather during the experiment',
      'The passage not having enough information'
    ],
    correctAnswer: 'A flaw in the sampling method described in paragraph 2',
    explanation: 'Synthesis questions often link a failure or success at the end to a procedural choice at the beginning.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'reading',
  title: 'C1 Reading: Decoding Implicit Stance',
  explanation: 'Reading between the lines to find the author\'s true perspective.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `By using the word "purported" before "breakthrough," the author implies that the discovery ________.`,
    options: [
      'Is claimed to be significant but its value is actually questionable',
      'Is definitely the most important discovery of the year',
      'Was made by a very famous person',
      'Is a total secret'
    ],
    correctAnswer: 'Is claimed to be significant but its value is actually questionable',
    explanation: '"Purported" is a high-level skeptical modifier.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'reading',
  title: 'C1 Reading: The "Big Picture" Synthesis',
  explanation: 'Summarizing the primary rhetorical goal of a complex, multi-topic text.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `The overarching purpose of this passage is to ________.`,
    options: [
      'Evaluate the historical progression and current limitations of [Concept X]',
      'Provide a simple list of facts about [Concept X]',
      'Tell a funny story about the people who discovered [Concept X]',
      'Argue that [Concept X] should be banned'
    ],
    correctAnswer: 'Evaluate the historical progression and current limitations of [Concept X]',
    explanation: 'C1 summaries (Prose Summary questions) require identifying the "Evaluate" or "Analyze" nature of the text.',
    points: 2
  }))
};

export const C1_WEEK_29 = createShardedToeflUnit(
  'toefl-c1-w29',
  'Week 29: Reading - Inter-textual Synthesis',
  'Developing advanced reading skills to synthesize information across disparate sections of a text, identify internal contradictions, and decode distant or abstract referents.',
  ['Connect and synthesize information across geographically distinct parts of a passage', 'Identify internal contradictions, exceptions, and nuances within academic arguments', 'Resolve distant and abstract "Reference" items through logical mapping', 'Decode authorial tone shifts and implicit stances using subtle lexical cues'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
