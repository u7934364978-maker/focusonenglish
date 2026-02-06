import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 18;
const LEVEL = 'b2';

// SHARDS 1-2: Speaking Review - Task 1 and 2
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Speaking: Task 1 Strategy Review',
  explanation: 'Recapping the structure for independent speaking tasks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A good Task 1 response should include ________ clear reason(s) with supporting examples.`,
    options: ['Two', 'One', 'Five', 'None'],
    correctAnswer: 'Two',
    explanation: 'For a 45-second response, providing two reasons with brief examples is the most effective structure.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'Speaking: Task 2 Synthesis Review',
  explanation: 'Reviewing how to integrate the reading passage with the student\'s opinion.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which should be the MAIN focus of your Task 2 speaking response?`,
    options: ['The students opinion and reasons', 'The reading passage details', 'Your own opinion of the change', 'The history of the university'],
    correctAnswer: 'The students opinion and reasons',
    explanation: 'Task 2 is an integrated task where the goal is to report the student\'s reaction to a campus change.',
    points: 2
  }))
};

// SHARDS 3-4: Writing Review - Task 1 (Integrated)
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'Writing: Integrated Task Template Review',
  explanation: 'Confirming the relationship between the reading and the lecture in Task 1.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `In the Integrated Writing task, the professor usually ________ the claims made in the reading.`,
    options: ['challenges', 'supports', 'ignores', 'copies'],
    correctAnswer: 'challenges',
    explanation: 'In almost all TOEFL Integrated Writing tasks, the lecture provides counter-arguments to the reading passage.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'Writing: Accurate Reporting Verbs',
  explanation: 'Choosing the right verbs to describe the lecturer\'s points.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which verb is most appropriate? "The lecturer ________ the idea that the new policy will be effective."`,
    options: ['disputes', 'suggests', 'agrees', 'mentions'],
    correctAnswer: 'disputes',
    explanation: '"Disputes" or "Refutes" are strong, academic verbs for challenging an idea.',
    points: 2
  }))
};

// SHARDS 5-6: Writing Review - Task 2 (Academic Discussion)
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Academic Discussion: Building on Others\' Points',
  explanation: 'Practice referencing student responses in Task 2.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Which phrase effectively references another student?`,
    options: [
      'While I agree with Sarah that X is important, I also believe Y...',
      'Sarah said X but I dont like that.',
      'I am going to talk about something different than Sarah.',
      'Sarah is a student who wrote a response.'
    ],
    correctAnswer: 'While I agree with Sarah that X is important, I also believe Y...',
    explanation: 'Referencing others shows you are participating in a discussion, which is part of the task requirement.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Academic Discussion: Developing Your Contribution',
  explanation: 'Focusing on adding unique value to the discussion.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Your contribution should be approximately ________ words long.`,
    options: ['100', '500', '50', '1000'],
    correctAnswer: '100',
    explanation: 'The recommended length for the Academic Discussion task is at least 100 words.',
    points: 2
  }))
};

// SHARDS 7-8: Production Accuracy - Grammar & Lexis
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Grammar for Speaking: Using Conditionals',
  explanation: 'Improving sophistication by using hypothetical structures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which is the correct second conditional? "If the university ________ more resources, students ________ more successful."`,
    options: ['provided / would be', 'provides / will be', 'providing / are', 'provide / were'],
    correctAnswer: 'provided / would be',
    explanation: 'The second conditional (If + past, would + verb) is used for hypothetical or unlikely situations.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Grammar for Writing: Complex Sentences',
  explanation: 'Using subordinating conjunctions to combine ideas.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Combine these sentences: "The lecture was difficult. I understood the main points."`,
    options: [
      'Although the lecture was difficult, I understood the main points.',
      'The lecture was difficult but main points I understood.',
      'Because the lecture was difficult I understood points.',
      'Difficult was the lecture so understood main points.'
    ],
    correctAnswer: 'Although the lecture was difficult, I understood the main points.',
    explanation: '"Although" creates a subordinate clause, making the sentence structure more complex and academic.',
    points: 2
  }))
};

// SHARDS 9-10: Self-Correction and Fluency
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Speaking: Maintaining Fluency',
  explanation: 'Strategies for avoiding long silences or excessive fillers.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Instead of saying "um" or "uh," what is a better way to pause?`,
    options: ['A brief silent pause', 'Saying "I am thinking"', 'Repeating the last word', 'Coughing'],
    correctAnswer: 'A brief silent pause',
    explanation: 'Natural, brief silences are less disruptive to your fluency score than repetitive vocal fillers.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Writing: Final Proofreading Checkpoints',
  explanation: 'Identifying common mistakes to check for in the final 2 minutes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `What should you check for during the final proofread of your Task 2 response?`,
    options: ['Subject-verb agreement and spelling', 'The names of the students again', 'If you used enough big words', 'If the professor is happy'],
    correctAnswer: 'Subject-verb agreement and spelling',
    explanation: 'Minor grammatical and spelling errors are the most common reason for a score reduction at the B2 level.',
    points: 2
  }))
};

export const B2_WEEK_18 = createShardedToeflUnit(
  'toefl-b2-w18',
  'Week 18: Mixed Review: Speaking and Writing',
  'Consolidating B2-level Speaking and Writing strategies with focus on integration and academic discussion.',
  ['Review templates for Independent and Integrated Speaking', 'Master synthesis in Integrated Writing', 'Practice referencing others in Academic Discussion', 'Improve grammatical accuracy and fluency in production'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
