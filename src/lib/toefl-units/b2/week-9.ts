import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 9;
const LEVEL = 'b2';

// SHARDS 1-2: Independent Speaking - Strategy & Opinion
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Independent Speaking: Templates and Transition Words',
  explanation: 'Mastering transitions and logical connectors for Task 1.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which transition word best fits this context: "Some people prefer to study alone. ________, I believe group study is more effective for complex topics."`,
    options: ['However', 'In addition', 'For example', 'Furthermore'],
    correctAnswer: 'However',
    explanation: 'At B2 level, you must show contrast using words like "However" or "On the other hand".',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Developing Arguments: Expressing Preferences',
  explanation: 'Practice formulating clear reasons and examples for personal opinions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `When answering the prompt "Do you prefer living in a big city or a small town?", which is the most structured way to start?`,
    options: [
      'In my opinion, living in a big city is better because...',
      'I like cities.',
      'Small towns are quiet.',
      'I dont know, both are okay.'
    ],
    correctAnswer: 'In my opinion, living in a big city is better because...',
    explanation: 'A structured response starts with a clear statement of preference followed by a "because" clause.',
    points: 2
  }))
};

// SHARDS 3-4: Integrated Speaking (Task 2) - Campus Situations
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Task 2: Summarizing University Announcements',
  explanation: 'Identifying the main change and the reasons provided in a reading passage.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `In TOEFL Speaking Task 2, after reading a short passage about a campus change, your primary goal in the response is to:`,
    options: [
      'State the change and explain a students opinion about it',
      'Give your own opinion about the change',
      'Read the passage aloud',
      'Write an essay about university life'
    ],
    correctAnswer: 'State the change and explain a students opinion about it',
    explanation: 'Task 2 is integrated: you must summarize the reading and the listening (the opinion).',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Task 2: Identifying Reasons for Disagreement',
  explanation: 'Focusing on the specific reasons a student might disagree with a campus policy.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `If a student says "The new library policy is ridiculous because most students study at night," what is their main objection?`,
    options: ['Inconvenient timing', 'Cost of books', 'Noise levels', 'Lack of space'],
    correctAnswer: 'Inconvenient timing',
    explanation: 'The mention of studying "at night" indicates a concern with the library hours.',
    points: 2
  }))
};

// SHARDS 5-6: Integrated Speaking (Task 3) - Academic Reading + Lecture
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading-comprehension',
  title: 'Task 3: Defining Academic Concepts',
  explanation: 'Learning to identify definitions in short academic texts (e.g., Psychology, Biology).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `The text defines "Cognitive Dissonance" as a state of mental discomfort when holding two conflicting beliefs. How should you introduce this in your speaking response?`,
    options: [
      'According to the reading, cognitive dissonance is...',
      'I think cognitive dissonance is...',
      'The professor said cognitive dissonance is...',
      'The book was boring.'
    ],
    correctAnswer: 'According to the reading, cognitive dissonance is...',
    explanation: 'Citing the source ("the reading") is crucial for a high score in Task 3.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Task 3: Connecting Examples to Theory',
  explanation: 'Using the professor\'s example to illustrate the concept from the reading.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `If the reading is about "Altruism" and the professor gives an example of a bird warning others about a predator, what is the birds action?`,
    options: ['An example of altruism', 'A predator behavior', 'A mating ritual', 'A hunting strategy'],
    correctAnswer: 'An example of altruism',
    explanation: 'In Task 3, the professor provides an example that directly illustrates the theory in the reading.',
    points: 2
  }))
};

// SHARDS 7-8: Integrated Speaking (Task 4) - Academic Lecture Only
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Task 4: Structuring Lecture Summaries',
  explanation: 'Identifying the two main points or examples in a lecture summary task.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `In Task 4, the professor usually discusses a concept and then provides:`,
    options: [
      'Two examples or two sub-categories',
      'One long story about their childhood',
      'A list of vocabulary words',
      'A debate with a student'
    ],
    correctAnswer: 'Two examples or two sub-categories',
    explanation: 'Most Task 4 lectures follow a clear 1-concept-2-examples structure.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Task 4: Taking Notes for Technical Details',
  explanation: 'Focusing on capturing specific details from academic lectures (e.g., Biology, Economics).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `If the professor says "Product placement is effective because it creates subconscious brand recognition," what is the benefit?`,
    options: ['Subconscious recognition', 'Low cost', 'Fast delivery', 'High quality'],
    correctAnswer: 'Subconscious recognition',
    explanation: 'Note-taking should focus on keywords like "subconscious recognition" to explain the "why".',
    points: 2
  }))
};

// SHARDS 9-10: Fluency, Intonation, and Review
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Improving Fluency: Avoiding Fillers',
  explanation: 'Learning to use "pauses" effectively instead of "um" and "uh".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Instead of saying "um" when you forget a word, what is a better strategy at B2 level?`,
    options: [
      'Take a brief silent pause',
      'Say "I dont know"',
      'Repeat the last word five times',
      'Stop speaking entirely'
    ],
    correctAnswer: 'Take a brief silent pause',
    explanation: 'Natural pauses are better than excessive "ums" and "ahs" for fluency scores.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Speaking Review: Integrated Strategies',
  explanation: 'Comprehensive review of all 4 Speaking Tasks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Which task is the ONLY one where you express your own personal opinion?`,
    options: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
    correctAnswer: 'Task 1',
    explanation: 'Tasks 2, 3, and 4 are integrated summaries. Only Task 1 (Independent) asks for your own opinion.',
    points: 2
  }))
};

export const B2_WEEK_9 = createShardedToeflUnit(
  'toefl-b2-w9',
  'Week 9: Speaking: Independent and Integrated Tasks',
  'Developing B2-level proficiency in all four TOEFL Speaking tasks with focus on structure and templates.',
  ['Master Independent Speaking templates', 'Summarize campus announcements effectively', 'Connect academic theories with professor examples', 'Identify lecture structure in Task 4'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
