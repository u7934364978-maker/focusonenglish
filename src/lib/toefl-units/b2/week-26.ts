import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 26;
const LEVEL = 'b2';

// SHARDS 1-2: Listening - Gist & Detail
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'Listening: Gist Purpose & Content',
  explanation: 'Identifying the main reason for a conversation or the primary topic of a lecture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A "Gist Purpose" question often asks ________.`,
    options: [
      'Why the student went to see the professor',
      'The exact date a historical event occurred',
      'The definition of a technical term',
      'The professor\'s favorite hobby'
    ],
    correctAnswer: 'Why the student went to see the professor',
    explanation: 'Gist Purpose questions focus on the overall reason for the interaction.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'Listening: Master Detail Questions',
  explanation: 'Learning to distinguish between essential details and parenthetical information.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `When listening for details, you should pay close attention to ________.`,
    options: [
      'Signal words like "for example" or "specifically"',
      'The background noise in the recording',
      'The gender of the speaker',
      'The number of breaths the speaker takes'
    ],
    correctAnswer: 'Signal words like "for example" or "specifically"',
    explanation: 'Signal words often introduce the specific examples or details that TOEFL asks about.',
    points: 2
  }))
};

// SHARDS 3-4: Function & Stance
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Listening: Understanding Function',
  explanation: 'Determining the meaning of a specific phrase within the context of the talk.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Function questions often replay a part of the audio and ask ________.`,
    options: [
      'What does the speaker mean when they say this?',
      'How many words did the speaker say?',
      'Is the speaker happy or sad?',
      'What is the speaker\'s name?'
    ],
    correctAnswer: 'What does the speaker mean when they say this?',
    explanation: 'Function questions test your understanding of pragmatic meaning—the intent behind the words.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Listening: Identifying Speaker Stance',
  explanation: 'Recognizing the speaker\'s attitude or degree of certainty.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which of these indicates a speaker\'s doubt or uncertainty?`,
    options: [
      '"I suppose it\'s possible, but..."',
      '"There is no question that..."',
      '"It is clear to everyone that..."',
      '"The evidence proves that..."'
    ],
    correctAnswer: '"I suppose it\'s possible, but..."',
    explanation: 'Hesitation markers and "but" often signal a nuanced or skeptical stance.',
    points: 2
  }))
};

// SHARDS 5-6: Organization & Connecting Content
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Listening: Understanding Organization',
  explanation: 'Recognizing how the professor structures the information in a lecture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `An "Organization" question might ask how the professor ________.`,
    options: [
      'Supports a specific point or theory',
      'Grades the students\' exams',
      'Prepared for the lecture',
      'Travels to the university'
    ],
    correctAnswer: 'Supports a specific point or theory',
    explanation: 'Organization questions look at the logical flow, such as chronological order or comparison/contrast.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Listening: Connecting Content',
  explanation: 'Practice with tables or charts that require connecting different parts of the lecture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Connecting Content questions often require you to ________.`,
    options: [
      'Match concepts with their descriptions',
      'Write a short essay about the lecture',
      'Draw a map of the campus',
      'Translate the lecture into another language'
    ],
    correctAnswer: 'Match concepts with their descriptions',
    explanation: 'These questions test your ability to synthesize information from throughout the entire audio clip.',
    points: 2
  }))
};

// SHARDS 7-8: Advanced Note-taking
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Strategy: Note-taking for Lectures',
  explanation: 'Advanced symbols and layout for 5-6 minute academic talks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Using a "T-chart" in your notes is most effective for ________.`,
    options: [
      'Comparison and contrast lectures',
      'Single-topic definitions',
      'Listening to music',
      'Calculating math problems'
    ],
    correctAnswer: 'Comparison and contrast lectures',
    explanation: 'A T-chart allows you to clearly separate and compare two different theories or species.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Strategy: Identifying Digressions',
  explanation: 'Learning when the professor is "off-topic" vs. providing a key example.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `When a professor tells a personal story, it is usually meant to ________.`,
    options: [
      'Illustrate a complex academic concept',
      'Waste the students\' time',
      'Show off their life experience',
      'Confuse the listeners'
    ],
    correctAnswer: 'Illustrate a complex academic concept',
    explanation: 'Personal anecdotes in TOEFL lectures almost always serve as illustrative examples for the main point.',
    points: 2
  }))
};

// SHARDS 9-10: Academic Vocabulary (Complex Topics)
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Environmental Science',
  explanation: 'Terms common in lectures about ecology and conservation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `The ________ of a species refers to its natural home or environment.`,
    options: ['habitat', 'habit', 'habitation', 'rehabilitation'],
    correctAnswer: 'habitat',
    explanation: 'Habitat is a core term in environmental and biological lectures on the TOEFL.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Business & Economics',
  explanation: 'Terms common in lectures about markets and consumer behavior.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `When the supply of a product is low but demand is high, the price usually ________.`,
    options: ['increases', 'decreases', 'stabilizes', 'disappears'],
    correctAnswer: 'increases',
    explanation: 'Understanding basic economic principles like supply and demand is often necessary for TOEFL Listening.',
    points: 2
  }))
};

export const B2_WEEK_26 = createShardedToeflUnit(
  'toefl-b2-w26',
  'Week 26: Full-Length Listening Mastery',
  'Advanced strategies for academic lectures and campus conversations with a focus on organization and stance.',
  ['Identify Gist and Detail with high accuracy', 'Master Function and Stance question types', 'Understand logical organization and connecting content', 'Develop advanced note-taking systems for long lectures'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
