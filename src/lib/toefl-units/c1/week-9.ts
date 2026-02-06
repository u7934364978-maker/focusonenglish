import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 9;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'C1 Writing: The Objective Opening',
  explanation: 'Setting the stage for a balanced comparison of two academic sources.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which introductory sentence is most appropriate for a C1-level Integrated Writing task?`,
    options: [
      '"The lecture calls into question the veracity of the claims made in the reading passage regarding..."',
      '"The reading and listening are about two different things and I will tell you why."',
      '"I think the professor is much smarter than the person who wrote the reading."',
      '"First I will summarize the reading and then I will summarize the lecture."'
    ],
    correctAnswer: '"The lecture calls into question the veracity of the claims made in the reading passage regarding..."',
    explanation: 'C1 writing requires an objective, academic tone that immediately identifies the relationship between sources.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'C1 Writing: Paragraph Symmetry',
  explanation: 'Ensuring each paragraph addresses one point from BOTH sources.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `What does "symmetry" in an integrated essay paragraph mean?`,
    options: [
      'Presenting a reading point and its corresponding listening counter-point in roughly equal detail',
      'Using the exact same number of words in every sentence',
      'Writing the reading information in the first half of the essay and the listening in the second half',
      'Ensuring the font size is the same for every paragraph'
    ],
    correctAnswer: 'Presenting a reading point and its corresponding listening counter-point in roughly equal detail',
    explanation: 'Symmetry makes the comparison easy for the rater to follow and demonstrates logical organization.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'C1 Writing: Advanced Paraphrasing - "Synonym Stacking"',
  explanation: 'Combining synonym choice with grammatical restructuring.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `If the text says "The population declined rapidly," which paraphrase is most sophisticated?`,
    options: [
      '"The demographic experienced a precipitous downturn."',
      '"The people went down fast."',
      '"There were fewer people in the city."',
      '"The population declined rapidly according to the text."'
    ],
    correctAnswer: '"The demographic experienced a precipitous downturn."',
    explanation: 'Using precise academic synonyms ("demographic," "precipitous downturn") is key to a C1 score.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'C1 Writing: Transitioning Between Sources',
  explanation: 'Using "On the other hand," "Conversely," and "This directly contradicts..."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which connector best introduces the professor's opposing viewpoint?`,
    options: ['"In stark contrast to the author\'s assertion,"', '"Also,"', '"For example,"', '"Next,"'],
    correctAnswer: '"In stark contrast to the author\'s assertion,"',
    explanation: 'Strong, explicit connectors are required to guide the rater through the synthesis.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Reporting Verbs of Dispute',
  explanation: 'Verbs like "Refutes," "Disputes," "Challenges," and "Casts doubt on."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If a professor "refutes" an argument, they are ________.`,
    options: [
      'Proving it to be wrong or false',
      'Asking a question about it',
      'Agreeing with it partially',
      'Writing a book about it'
    ],
    correctAnswer: 'Proving it to be wrong or false',
    explanation: 'Reporting verbs of dispute are essential for Task 1, where the listening usually opposes the reading.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Evidence & Proof Terms',
  explanation: 'Words like "Empirical," "Anecdotal," "Quantifiable," and "Substantial."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `"Empirical evidence" is evidence that is based on ________.`,
    options: [
      'Observation and experiment rather than theory or pure logic',
      'Stories told by friends and family',
      'What someone "feels" is right',
      'Old myths and legends'
    ],
    correctAnswer: 'Observation and experiment rather than theory or pure logic',
    explanation: 'Using terms like "empirical" shows you understand the nature of academic proof.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Nominalization for Concise Reporting',
  explanation: 'Turning verbs into nouns to pack more information into a sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which sentence uses nominalization to report the professor\'s point most effectively?`,
    options: [
      '"The professor\'s dismissal of the data hinges on the lack of a control group."',
      '"The professor dismissed the data because there was no control group."',
      '"He says the data is bad because they didn\'t have a control."',
      '"Dismissing the data was what the professor did."'
    ],
    correctAnswer: '"The professor\'s dismissal of the data hinges on the lack of a control group."',
    explanation: 'Nominalization ("The professor\'s dismissal") is a hallmark of sophisticated academic writing.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Complex Clause Integration',
  explanation: 'Using "Not only does the lecturer refute X, but she also suggests Y."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Choose the sentence that correctly integrates two related counter-points.`,
    options: [
      '"Not only does the lecturer dispute the timeline, but she also challenges the underlying methodology."',
      '"The lecturer disputes the timeline and also challenges the methodology."',
      '"She disputes the timeline and also she challenges the methodology."',
      '"Timeline is disputed and methodology is challenged by her."'
    ],
    correctAnswer: '"Not only does the lecturer dispute the timeline, but she also challenges the underlying methodology."',
    explanation: 'Using correlative conjunctions ("Not only... but also...") shows high-level grammatical control.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Avoiding Personal Opinion in Task 1',
  explanation: 'Remaining a neutral reporter of the two sources.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `In Task 1, you should NEVER use which of the following phrases?`,
    options: [
      '"In my opinion, the reading is more convincing than the lecture."',
      '"The author contends that..."',
      '"The lecturer argues that..."',
      '"On the other hand,"'
    ],
    correctAnswer: '"In my opinion, the reading is more convincing than the lecture."',
    explanation: 'Task 1 is purely about *summarizing* and *comparing* the two sources, not providing your own view.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Final Proofreading Checklist',
  explanation: 'Scanning for subject-verb agreement and article errors in the last 2 minutes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Which is the most common minor error that C1 writers should look for in their final check?`,
    options: [
      'Missing or incorrect articles (the, a, an)',
      'Forgetting how to spell their own name',
      'Using too many difficult words',
      'Writing too many sentences'
    ],
    correctAnswer: 'Missing or incorrect articles (the, a, an)',
    explanation: 'Even high-level writers often make minor slips with articles under time pressure.',
    points: 2
  }))
};

export const C1_WEEK_9 = createShardedToeflUnit(
  'toefl-c1-w9',
  'Week 9: Advanced Writing - Integrated Task Mastery',
  'Perfecting the objective synthesis and comparison of academic sources in Writing Task 1 at a C1 level.',
  ['Execute an objective and sophisticated introductory paragraph', 'Maintain symmetry between reading and listening points', 'Master advanced paraphrasing and synonym stacking', 'Utilize nominalization and complex clause integration'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
