import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 13;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'C1 Rhetoric: Identifying Implicit Purpose',
  explanation: 'Determining the author\'s goal when it isn\'t explicitly stated (e.g., to satirize, to advocate, to remain neutral).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `An author writes a detailed account of a failed policy using dry, technical language but highlighting only the most absurd outcomes. What is the likely purpose?`,
    options: [
      'To provide a subtly satirical critique of the policy',
      'To provide an objective and supportive historical record',
      'To ask the reader for personal donations',
      'To promote the policy to a new audience'
    ],
    correctAnswer: 'To provide a subtly satirical critique of the policy',
    explanation: 'Rhetorical analysis often involves looking at the gap between tone and content.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'C1 Rhetoric: The Use of "Hedging"',
  explanation: 'Analyzing how authors use cautious language (e.g., "appears to," "suggests") to maintain academic credibility.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Why would an author use the phrase "it is generally perceived" instead of "it is a fact"?`,
    options: [
      'To acknowledge that the viewpoint is common but potentially debatable',
      'Because they are unsure of the basic facts',
      'To make the sentence longer and more impressive',
      'To confuse the reader about the truth'
    ],
    correctAnswer: 'To acknowledge that the viewpoint is common but potentially debatable',
    explanation: 'Hedging is a key feature of high-level academic discourse.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'reading',
  title: 'C1 Rhetoric: Concessions and Refutations',
  explanation: 'Identifying when an author admits a counter-point before dismantling it.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Which phrase signals a "concession" in a persuasive argument?`,
    options: ['"Admittedly,"', '"Furthermore,"', '"Therefore,"', '"Primarily,"'],
    correctAnswer: '"Admittedly,"',
    explanation: '"Admittedly" introduces a fact that might seem to go against the author\'s main point.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'reading',
  title: 'C1 Rhetoric: Persuasion via Selective Evidence',
  explanation: 'Analyzing how an author chooses specific data points to lead the reader to a conclusion.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `If an author mentions only the successes of a program and ignores its high cost, they are ________.`,
    options: [
      'Presenting a biased argument to gain support',
      'Providing a comprehensive and balanced review',
      'Trying to save the reader time',
      'Writing a purely fictional story'
    ],
    correctAnswer: 'Presenting a biased argument to gain support',
    explanation: 'Critical reading involves noticing what is *missing* from an argument.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Rhetorical Lexicon',
  explanation: 'Terms like "Polemic," "Apologetic," "Pragmatic," and "Ideological."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `A "polemic" piece of writing is characterized by ________.`,
    options: [
      'A strong verbal or written attack on someone else\'s opinions',
      'A calm and neutral summary of historical events',
      'A collection of scientific data without any analysis',
      'A poem written for a special occasion'
    ],
    correctAnswer: 'A strong verbal or written attack on someone else\'s opinions',
    explanation: 'Knowing these terms helps in answering "purpose" and "attitude" questions.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Rhetorical Verbs',
  explanation: 'Using "Elucidate," "Corroborate," "Substantiate," and "Refute."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `To "corroborate" a claim means to ________.`,
    options: [
      'Provide evidence that supports or confirms it',
      'Argue that it is completely false',
      'Ignore it in favor of a better claim',
      'Translate it into another language'
    ],
    correctAnswer: 'Provide evidence that supports or confirms it',
    explanation: 'These verbs are essential for describing the relationships between ideas in Task 1 Writing.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'grammar',
  title: 'C1 Rhetoric: Parallelism for Emphasis',
  explanation: 'Analyzing how authors use repetitive structures to build momentum.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which sentence demonstrates effective academic parallelism?`,
    options: [
      '"The study aims to identify the cause, to analyze the effect, and to propose a solution."',
      '"The study aims to identify the cause, analysis of the effect, and then proposing a solution."',
      '"They identified the cause, they saw the effect, and they also solve it."',
      '"Identifying causes, analyzing effects, and solution proposal are the goals."'
    ],
    correctAnswer: '"The study aims to identify the cause, to analyze the effect, and to propose a solution."',
    explanation: 'Parallel structure makes complex ideas easier to follow and more persuasive.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'grammar',
  title: 'C1 Rhetoric: Passive Voice for Objectivity',
  explanation: 'Understanding when the passive voice is used to shift focus from the actor to the action.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Why is the passive voice often used in scientific abstracts?`,
    options: [
      'To emphasize the process or result rather than the individual researcher',
      'Because researchers are shy and don\'t want to use "I"',
      'To make the text harder to read and more "academic"',
      'To hide who actually did the work'
    ],
    correctAnswer: 'To emphasize the process or result rather than the individual researcher',
    explanation: 'Passive voice helps maintain the "objective" stance required in many academic fields.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'reading',
  title: 'C1 Rhetoric: Challenging Assumptions',
  explanation: 'Identifying when an author questions the basic premises of a common theory.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `If an author begins a paragraph with "While it is often taken for granted that...", what are they likely about to do?`,
    options: [
      'Challenge a commonly held belief',
      'Support the commonly held belief with new data',
      'Define a new technical term',
      'End the passage abruptly'
    ],
    correctAnswer: 'Challenge a commonly held belief',
    explanation: 'The phrase "taken for granted" signals that the author believes the assumption may be flawed.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'mixed',
  title: 'C1 Rhetoric: Tone Comparison',
  explanation: 'Distinguishing between "Detached," "Dismissive," "Commendatory," and "Ambivalent."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `A "dismissive" tone toward a theory implies that the author thinks the theory is ________.`,
    options: [
      'Not worth serious consideration or time',
      'The most important breakthrough in years',
      'Extremely complex and hard to understand',
      'Something that everyone should believe in'
    ],
    correctAnswer: 'Not worth serious consideration or time',
    explanation: 'Identifying tone is crucial for the "Attitude" questions in the Listening section.',
    points: 2
  }))
};

export const C1_WEEK_13 = createShardedToeflUnit(
  'toefl-c1-w13',
  'Week 13: Analyzing Authorial Intent',
  'Mastering the ability to identify the underlying purpose, tone, and persuasive strategies in high-level academic discourse.',
  ['Identify implicit authorial purpose and goals in complex texts', 'Recognize and use academic "hedging" and qualifiers', 'Analyze the structure of concessions and refutations in arguments', 'Detect and interpret subtle shifts in authorial tone'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
