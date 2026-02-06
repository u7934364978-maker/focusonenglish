import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 28;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'writing',
  title: 'C1 Writing: Cleft Sentences for Focus',
  explanation: 'Using "It is [X] that..." to emphasize the most important part of a claim.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which sentence uses a "cleft" structure to emphasize the *cause* of a phenomenon?`,
    options: [
      '"It is the sudden drop in temperature that triggers the migration process."',
      '"The sudden drop in temperature triggers the migration process."',
      '"Migration happens because it gets cold suddenly."',
      '"A drop in temperature is what makes them migrate."'
    ],
    correctAnswer: '"It is the sudden drop in temperature that triggers the migration process."',
    explanation: 'Cleft sentences are highly effective for directing the reader\'s attention to a specific cause or agent.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'writing',
  title: 'C1 Writing: Negative Inversion',
  explanation: 'Using "Never," "Seldom," or "Rarely" at the beginning of a sentence for rhetorical power.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Complete the sentence: "Rarely ________ such a dramatic shift in public opinion."`,
    options: [
      '"have we witnessed"',
      '"we have witnessed"',
      '"witnessed we"',
      '"we witnessed"'
    ],
    correctAnswer: '"have we witnessed"',
    explanation: 'Negative adverbs at the start of a sentence require subject-auxiliary inversion.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'writing',
  title: 'C1 Writing: Participle Clauses for Density',
  explanation: 'Reducing relative clauses into participle phrases (e.g., "The theory, developed in...").',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Which sentence is more academically dense due to a participle clause?`,
    options: [
      '"The theory, developed in the late 19th century, remains influential today."',
      '"The theory was developed in the late 19th century and it is still influential today."',
      '"They developed the theory in the 19th century and it is influential now."',
      '"Because it was developed in the 19th century, the theory is influential."'
    ],
    correctAnswer: '"The theory, developed in the late 19th century, remains influential today."',
    explanation: 'Participle clauses allow you to embed extra information without adding unnecessary conjunctions.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'writing',
  title: 'C1 Writing: "Wh-" Clefts for Thesis Statements',
  explanation: 'Using "What is needed is..." or "What the evidence suggests is..."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `A strong opening for an Academic Discussion response could be: ________.`,
    options: [
      '"What the lecturer seems to overlook is the long-term environmental impact."',
      '"I think the lecturer is wrong about the environment."',
      '"The environment is important and the lecturer forgot it."',
      '"It is bad for the environment and I will explain why."'
    ],
    correctAnswer: '"What the lecturer seems to overlook is the long-term environmental impact."',
    explanation: '"Wh-" clefts create a strong, authoritative tone suitable for C1 level arguments.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Writing: Rhetorical Verbs',
  explanation: 'Using "Exacerbate," "Underlie," "Manifest," and "Predispose."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If a new law makes a problem worse, the law ________ the problem.`,
    options: ['"exacerbates"', '"alleviates"', '"underlies"', '"manifests"'],
    correctAnswer: '"exacerbates"',
    explanation: '"Exacerbate" is a precise academic term for making a problem, bad situation, or negative feeling worse.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'writing',
  title: 'C1 Writing: Relative Clauses with Prepositions',
  explanation: 'Using "The method by which," "The extent to which," and "The context in which."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which phrase is the most formal way to describe a process?`,
    options: [
      '"The mechanism by which the cells divide..."',
      '"The way that the cells divide..."',
      '"How the cells divide..."',
      '"The process where the cells divide..."'
    ],
    correctAnswer: '"The mechanism by which the cells divide..."',
    explanation: 'Prepositional relative clauses (by which, in which) are hallmark features of C1 academic writing.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'writing',
  title: 'C1 Writing: Modal Verbs for "Stance"',
  explanation: 'Using "Should," "Ought to," "Must," and "Might" to convey necessity or possibility.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `To suggest a cautious possibility, use: ________.`,
    options: [
      '"This could potentially lead to a shift in..."',
      '"This will lead to a shift in..."',
      '"This must lead to a shift in..."',
      '"This is leading to a shift in..."'
    ],
    correctAnswer: '"This could potentially lead to a shift in..."',
    explanation: 'Combining "could" and "potentially" creates a nuanced, academic hedge.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'writing',
  title: 'C1 Writing: Syntactic Parallelism in Lists',
  explanation: 'Ensuring every item in a list has the same grammatical form.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which sentence demonstrates correct parallelism?`,
    options: [
      '"The study involves collecting data, analyzing results, and reporting findings."',
      '"The study involves data collection, to analyze results, and reporting findings."',
      '"The study involves collecting data, results analysis, and reporting findings."',
      '"The study involves to collect data, analyze results, and reporting findings."'
    ],
    correctAnswer: '"The study involves collecting data, analyzing results, and reporting findings."',
    explanation: 'Parallelism (Gerund, Gerund, and Gerund) is essential for clarity in complex academic lists.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'writing',
  title: 'C1 Writing: Advanced Comparison with "Be that as it may"',
  explanation: 'Using complex transition phrases to bridge opposing paragraphs.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `The phrase "Be that as it may" is synonymous with: ________.`,
    options: ['"Nevertheless"', '"Furthermore"', '"In addition"', '"Consequently"'],
    correctAnswer: '"Nevertheless"',
    explanation: '"Be that as it may" is a highly formal way to introduce a counter-point despite what has just been said.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'writing',
  title: 'C1 Writing: Maximum engagement in Academic Discussion',
  explanation: 'Using rhetorical questions or direct addresses to make your argument more compelling.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `A compelling way to close an Academic Discussion response is: ________.`,
    options: [
      '"Can we truly afford to ignore the societal cost of such a policy?"',
      '"That is why I think the policy is bad."',
      '"Thank you for your time, Professor."',
      '"In conclusion, the policy has many problems."'
    ],
    correctAnswer: '"Can we truly afford to ignore the societal cost of such a policy?"',
    explanation: 'A final rhetorical question leaves a strong impression and demonstrates high-level persuasive skill.',
    points: 2
  }))
};

export const C1_WEEK_28 = createShardedToeflUnit(
  'toefl-c1-w28',
  'Week 28: Writing - Maximum Syntactic Variety',
  'Mastering complex grammatical structures including cleft sentences, inversion, and participle clauses to achieve maximum syntactic variety and academic impact.',
  ['Implement "Cleft" and "Wh-Cleft" sentences to emphasize core arguments', 'Utilize negative inversion for rhetorical power and formal tone', 'Apply participle clauses to increase informational density and academic complexity', 'Master syntactic parallelism and prepositional relative clauses for structural precision'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
