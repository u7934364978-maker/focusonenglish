import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 14;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'writing',
  title: 'C1 Synthesis: Identifying the Relationship',
  explanation: 'Recognizing if the lecture challenges, supports, or refines the reading passage.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `If the reading says a theory is "widely accepted" and the professor says it "fails to account for recent anomalies," the lecture ________ the reading.`,
    options: ['Casts doubt on', 'Fully supports', 'Summarizes', 'Ignores'],
    correctAnswer: 'Casts doubt on',
    explanation: 'Most TOEFL Writing Task 1 passages follow a "point-counterpoint" structure.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'writing',
  title: 'C1 Synthesis: Sophisticated Reporting Verbs',
  explanation: 'Using verbs like "Contends," "Asserts," "Disputes," and "Elaborates."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which verb best describes a professor providing more detail to support a reading's point?`,
    options: ['Elaborates', 'Contradicts', 'Refutes', 'Doubts'],
    correctAnswer: 'Elaborates',
    explanation: '"Elaborates" implies providing further explanation or detail on a subject.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'writing',
  title: 'C1 Synthesis: Advanced Transitions',
  explanation: 'Using "In stark contrast," "In a similar vein," and "Notwithstanding."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Complete the sentence: "The reading claims the project was a success. ________, the professor argues that it was an environmental disaster."`,
    options: ['Conversely', 'Similarly', 'Therefore', 'Moreover'],
    correctAnswer: 'Conversely',
    explanation: '"Conversely" is used to introduce an idea that is the opposite of the previous one.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 'writing', 0),
  type: 'writing',
  title: 'C1 Synthesis: Paraphrasing technical data',
  explanation: 'Changing the structure and vocabulary while keeping the exact meaning of complex information.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Original: "The chemical reaction was accelerated by the presence of a catalyst." Paraphrase: ________.`,
    options: [
      '"A catalyst served to speed up the chemical process."',
      '"The reaction was chemical because of a catalyst."',
      '"They used a catalyst and then the reaction happened."',
      '"Catalysts are important for reactions."'
    ],
    correctAnswer: '"A catalyst served to speed up the chemical process."',
    explanation: 'A good paraphrase maintains the relationship between technical concepts.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Synthesis: Evaluative Adjectives',
  explanation: 'Using words like "Plausible," "Dubious," "Compelling," and "Flawed."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If an argument is "compelling," it is ________.`,
    options: ['Very persuasive and convincing', 'Weak and easily proven wrong', 'Boring and too long', 'Completely fictional'],
    correctAnswer: 'Very persuasive and convincing',
    explanation: 'Evaluative adjectives help you describe the quality of the arguments presented.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'grammar',
  title: 'C1 Synthesis: Noun Clauses as Subjects',
  explanation: 'Using structures like "That the professor disagrees with the reading is evident when..."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Identify the sentence that uses a noun clause correctly for academic synthesis.`,
    options: [
      '"Whether the proposed solution is feasible remains a point of contention between the two sources."',
      '"If the solution is feasible or not, they disagree about it."',
      '"The solution feasibility is what they are talking about."',
      '"They disagree about if the solution is feasible."'
    ],
    correctAnswer: '"Whether the proposed solution is feasible remains a point of contention between the two sources."',
    explanation: 'Noun clauses starting with "Whether" or "That" are hallmark C1-level structures.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'writing',
  title: 'C1 Synthesis: Synthesizing Multiple Examples',
  explanation: 'Grouping related details from both sources to show a deeper understanding.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `When the professor provides three separate reasons to doubt the reading, you should ________.`,
    options: [
      'Devote a separate body paragraph (or clear sub-section) to each reason',
      'Put all three reasons into the introductory paragraph',
      'Only mention the most interesting reason',
      'Ignore the reasons and summarize the conclusion'
    ],
    correctAnswer: 'Devote a separate body paragraph (or clear sub-section) to each reason',
    explanation: 'Organizing your response around the professor\'s points is the most effective TOEFL strategy.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'C1 Synthesis: Connector variety',
  explanation: 'Avoiding repetition of "The professor says..." by using "The lecturer highlights...", "The speaker notes..."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which is NOT a good replacement for "The professor says"?`,
    options: ['"The professor screams..."', '"The lecturer points out..."', '"The speaker emphasizes..."', '"The academic posits..."'],
    correctAnswer: '"The professor screams..."',
    explanation: 'Maintain a formal, academic register at all times.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'writing',
  title: 'C1 Synthesis: Handling Ambiguity',
  explanation: 'Reporting when a source isn\'t entirely certain about a point.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `If the lecturer says "There might be some truth to this, but it's largely speculative," you should write: ________.`,
    options: [
      '"The lecturer acknowledges a possibility but ultimately dismisses the claim as unproven."',
      '"The lecturer agrees with the reading completely."',
      '"The lecturer says that the reading is a lie."',
      '"The lecturer is confused and doesn\'t know if it\'s true."'
    ],
    correctAnswer: '"The lecturer acknowledges a possibility but ultimately dismisses the claim as unproven."',
    explanation: 'Nuanced reporting of certainty levels is expected at the C1 level.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'writing',
  title: 'C1 Synthesis: Final Proofreading focus',
  explanation: 'Checking for "Source Confusion" (attributing the reading\'s point to the professor).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `The most common high-level error in Task 1 is ________.`,
    options: [
      'Accidentally mixing up which source made which point',
      'Using too many big words',
      'Writing too many words (over 400)',
      'Not using enough emojis'
    ],
    correctAnswer: 'Accidentally mixing up which source made which point',
    explanation: 'Carefully check your "attribution" (e.g., "The reading states..." vs "The professor argues...")',
    points: 2
  }))
};

export const C1_WEEK_14 = createShardedToeflUnit(
  'toefl-c1-w14',
  'Week 14: Complex Synthesis - Task 1 Writing Deep Dive',
  'Mastering the high-level integration of reading and listening materials into a cohesive, balanced academic summary.',
  ['Identify and accurately report the relationship between two academic sources', 'Use a wide variety of sophisticated reporting verbs and transition phrases', 'Paraphrase complex technical information without losing conceptual accuracy', 'Organize synthesized information into a logical, point-by-point structure'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
