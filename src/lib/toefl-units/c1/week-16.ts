import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 16;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'C1 Listening: Hidden Agendas',
  explanation: 'Identifying when a speaker is trying to influence or persuade without being obvious.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A student says: "I know you're busy, but I noticed you're the only professor who really understands this niche topic." What is the student's hidden agenda?`,
    options: [
      'To flatter the professor into agreeing to help them',
      'To provide an objective review of the professor\'s expertise',
      'To complain about the other professors',
      'To drop the course'
    ],
    correctAnswer: 'To flatter the professor into agreeing to help them',
    explanation: 'Flattery is often used as a precursor to a request in campus conversations.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'C1 Listening: Degrees of Agreement',
  explanation: 'Distinguishing between "partial agreement" and "full endorsement."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `A professor says: "That's one way to look at it, but it doesn't quite capture the complexity of the situation." This is an example of ________.`,
    options: ['Partial agreement with a significant caveat', 'Full and enthusiastic agreement', 'Total and angry disagreement', 'A complete change of topic'],
    correctAnswer: 'Partial agreement with a significant caveat',
    explanation: 'Polite academic disagreement often begins with a small concession.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Detecting Shifts in Classroom Opinion',
  explanation: 'Tracking how a student\'s view changes after hearing a classmate or professor.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `A student says: "Oh, I see. I hadn't considered the economic impact." This indicates that ________.`,
    options: [
      'The student has changed or refined their original opinion',
      'The student is bored and wants to leave',
      'The student is disagreeing even more strongly now',
      'The student has forgotten what they were saying'
    ],
    correctAnswer: 'The student has changed or refined their original opinion',
    explanation: 'Words like "Oh, I see" signal a moment of realization or perspective shift.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: Analyzing Speaker Reliability',
  explanation: 'Determining if a speaker is an expert, a biased observer, or an uninformed participant.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `If a student says "I haven't really done the reading, but I think...", how should you weight their opinion?`,
    options: [
      'As potentially uninformed or speculative',
      'As the most important point in the discussion',
      'As a proven scientific fact',
      'As a lie intended to deceive the professor'
    ],
    correctAnswer: 'As potentially uninformed or speculative',
    explanation: 'Evaluating the source of information is a key C1-level listening skill.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'C1 Listening: Understanding Parenthetical Comments',
  explanation: 'Identifying information that is added as an "aside" and its relevance.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `A professor says: "The Roman Empire—which, by the way, lasted much longer than most people realize—had a complex legal system." What is the purpose of the comment about the empire\'s duration?`,
    options: [
      'To provide extra context that isn\'t the main focus but adds depth',
      'To correct a student\'s previous mistake',
      'To introduce the main topic of the lecture',
      'To end the discussion of the Roman Empire'
    ],
    correctAnswer: 'To provide extra context that isn\'t the main focus but adds depth',
    explanation: 'Parenthetical comments (asides) provide supplementary information without derailing the main point.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'C1 Listening: Interpreting Hedging in Speech',
  explanation: 'Analyzing how "possibly," "perhaps," and "to some extent" soften a speaker\'s claims.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `When a professor uses several hedging words in one sentence, they are likely ________.`,
    options: [
      'Being very cautious about making a definitive statement',
      'Trying to confuse the students',
      'Showing that they don\'t know anything about the topic',
      'Being very aggressive and certain'
    ],
    correctAnswer: 'Being very cautious about making a definitive statement',
    explanation: 'Hedging in speech indicates intellectual humility or the presence of conflicting data.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'C1 Listening: Detecting Tone in Academic Disputes',
  explanation: 'Identifying the emotional temperature of a debate between two scholars.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Two researchers are debating. One says: "With all due respect, your methodology is fundamentally flawed." What is the tone?`,
    options: ['Formally adversarial', 'Playful and joking', 'Indifferent', 'Supportive'],
    correctAnswer: 'Formally adversarial',
    explanation: 'Phrases like "With all due respect" often precede a harsh but professional critique.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'C1 Listening: Recognizing Implicit Definitions',
  explanation: 'Identifying when a speaker defines a term through context rather than a direct statement.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `A professor says: "This 'trophic cascade'—this ripple effect starting from the top predator—changes everything." What is a trophic cascade?`,
    options: [
      'A ripple effect starting from a top predator',
      'A type of waterfall found in the jungle',
      'A new method for counting fish',
      'A disaster caused by too much rain'
    ],
    correctAnswer: 'A ripple effect starting from a top predator',
    explanation: 'Apposition (placing two descriptions together) is a common way to define terms in speech.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'listening',
  title: 'C1 Listening: Identifying Subtle Transitions',
  explanation: 'Recognizing shifts in topic that aren\'t marked by "Next" or "Secondly."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `A professor says: "That covers the 'what'. Now, let's look at the 'why'." This is a transition between ________.`,
    options: [
      'Description and explanation',
      'The beginning and the end of the class',
      'Two different students',
      'A fact and a lie'
    ],
    correctAnswer: 'Description and explanation',
    explanation: 'Understanding the logical purpose of transitions helps you map the lecture\'s structure.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'listening',
  title: 'C1 Listening: Inferring Future Actions',
  explanation: 'Determining the most logical next step based on the conclusion of a conversation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `A student says: "I'll definitely look into that internship program you mentioned." What will they likely do next?`,
    options: [
      'Research the internship program online or contact the office',
      'Forget about the internship completely',
      'Start a new job at a grocery store',
      'Go on a long vacation'
    ],
    correctAnswer: 'Research the internship program online or contact the office',
    explanation: 'Inferring "next steps" requires understanding the speaker\'s stated intent.',
    points: 2
  }))
};

export const C1_WEEK_16 = createShardedToeflUnit(
  'toefl-c1-w16',
  'Week 16: Listening - Subtle Nuance and Speaker Purpose',
  'Mastering the ability to detect hidden agendas, degrees of certainty, and subtle shifts in opinion during complex academic discussions.',
  ['Identify hidden agendas and persuasive intent in campus conversations', 'Distinguish between varying degrees of agreement and endorsement', 'Track and analyze shifts in opinion during multi-speaker discussions', 'Interpret the relevance and purpose of asides and parenthetical comments'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
