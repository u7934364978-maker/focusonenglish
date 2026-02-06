import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 24;
const LEVEL = 'b2';

// SHARDS 1-2: Advanced Writing - Complex Synthesis (Task 1)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Writing: Nuanced Contrasts',
  explanation: 'Using subordinating conjunctions to show complex relationships between sources.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which sentence shows the best B2-level synthesis?`,
    options: [
      'Even though the reading suggests X, the professor provides evidence that Y is actually the case.',
      'The reading says X. The professor says Y. They are different.',
      'X is in the reading but the professor talks about Y.',
      'Although X, Y is true.'
    ],
    correctAnswer: 'Even though the reading suggests X, the professor provides evidence that Y is actually the case.',
    explanation: 'Using "Even though" with a formal structure demonstrates higher linguistic control.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Writing: Integrated Task Flow',
  explanation: 'Ensuring your body paragraphs have a consistent "Reading vs. Listening" rhythm.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `A typical body paragraph in the Integrated task should start with ________.`,
    options: [
      'The point from the reading passage',
      'Your own opinion of the topic',
      'A summary of the entire lecture',
      'The conclusion of the essay'
    ],
    correctAnswer: 'The point from the reading passage',
    explanation: 'Starting with the reading\'s claim allows you to then introduce the professor\'s counter-point logically.',
    points: 2
  }))
};

// SHARDS 3-4: Advanced Writing - Academic Discussion Nuance (Task 2)
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'Writing: Qualifying Your Opinion',
  explanation: 'Using "Hedging" to make your arguments sound more scholarly.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Which phrase is an example of "Hedging"?`,
    options: ['It could be argued that...', 'This is 100% true.', 'Everyone knows that...', 'I am sure that...'],
    correctAnswer: 'It could be argued that...',
    explanation: 'Hedging phrases show that you understand academic arguments are often complex and not absolute.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'Writing: Expanding on Others\' Contributions',
  explanation: 'Techniques for disagreeing or agreeing with "Sarah" or "David" politely and effectively.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `If you disagree with David, which opening is most effective?`,
    options: [
      'While David makes a valid point about X, he fails to consider Y.',
      'David is wrong about everything he said.',
      'I dont like Davids idea because it is bad.',
      'David said X, but I will talk about Z.'
    ],
    correctAnswer: 'While David makes a valid point about X, he fails to consider Y.',
    explanation: 'Acknowledging the other perspective before presenting your own is a hallmark of sophisticated discussion.',
    points: 2
  }))
};

// SHARDS 5-6: Advanced Vocabulary - Lexical Variety
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Writing: Avoiding Overused Words',
  explanation: 'Replacing "important," "good," and "think" with academic synonyms.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Instead of "very important," use:`,
    options: ['pivotal', 'big', 'needed', 'useful'],
    correctAnswer: 'pivotal',
    explanation: '"Pivotal" or "crucial" are much stronger academic choices for "important."',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Writing: Abstract Analytical Verbs',
  explanation: 'Using verbs that describe the ACTION of an argument (e.g., validate, underscore).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which verb means "to emphasize a point"?`,
    options: ['underscore', 'understand', 'understate', 'undermine'],
    correctAnswer: 'underscore',
    explanation: '"Underscore" is a common academic verb used to show the importance of a specific piece of evidence.',
    points: 2
  }))
};

// SHARDS 7-8: Advanced Grammar - Cohesion and Punctuation
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Writing: Semicolons and Conjunctive Adverbs',
  explanation: 'Mastering the use of "however," "therefore," and "moreover" with proper punctuation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which sentence is punctuated correctly?`,
    options: [
      'The data was inconclusive; therefore, more research is needed.',
      'The data was inconclusive therefore, more research is needed.',
      'The data was inconclusive; therefore more research is needed.',
      'The data was inconclusive, therefore, more research is needed.'
    ],
    correctAnswer: 'The data was inconclusive; therefore, more research is needed.',
    explanation: 'A semicolon followed by a conjunctive adverb and a comma is the correct way to link two independent clauses.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Writing: Reduced Relative Clauses',
  explanation: 'Shortening sentences for a more sophisticated, professional tone.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which is a reduced version of "The student who was studying in the library"?`,
    options: [
      'The student studying in the library',
      'The student studies in the library',
      'Studying student library',
      'The student in library'
    ],
    correctAnswer: 'The student studying in the library',
    explanation: 'Reduced relative clauses help make your writing more concise and advanced.',
    points: 2
  }))
};

// SHARDS 9-10: Strategy and Proofreading
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Writing: Developing a Topic Sentence',
  explanation: 'Ensuring every paragraph has a clear, debatable claim.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which is the best topic sentence for a paragraph about remote work?`,
    options: [
      'Remote work offers significant environmental benefits by reducing commuting emissions.',
      'I like to work from home because it is comfortable.',
      'Many people work from home these days.',
      'Working from home is a thing that happens now.'
    ],
    correctAnswer: 'Remote work offers significant environmental benefits by reducing commuting emissions.',
    explanation: 'A good topic sentence is specific, academic, and introduces a clear point of discussion.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Writing: Avoiding Emotional Language',
  explanation: 'Maintaining an objective, third-person perspective in academic tasks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Which phrase should be avoided in the Integrated task?`,
    options: ['I think the reading is wrong.', 'The lecturer refutes the claim.', 'Evidence suggests that...', 'Contrary to the reading...'],
    correctAnswer: 'I think the reading is wrong.',
    explanation: 'You should never give your own opinion in the Integrated Writing task; focus entirely on the relationship between the sources.',
    points: 2
  }))
};

export const B2_WEEK_24 = createShardedToeflUnit(
  'toefl-b2-w24',
  'Week 24: Advanced Writing Strategy',
  'Mastering academic synthesis, sophisticated discussion techniques, and high-level grammatical cohesion.',
  ['Refine nuanced synthesis in Integrated Writing', 'Apply hedging and qualifying language in Academic Discussion', 'Use analytical verbs and academic synonyms', 'Master complex punctuation and reduced clauses'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
