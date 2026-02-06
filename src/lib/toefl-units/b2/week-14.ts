import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 14;
const LEVEL = 'b2';

// SHARDS 1-2: Academic Discussion - Understanding the Prompt
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Academic Discussion: Task Requirements',
  explanation: 'Understanding the goal of the Academic Discussion task (Task 2).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `In the Writing for an Academic Discussion task, you are expected to:`,
    options: [
      'Contribute to a discussion by stating an opinion and supporting it',
      'Summarize a lecture and a reading passage',
      'Write a 500-word academic research paper',
      'Correct the grammar of other students'
    ],
    correctAnswer: 'Contribute to a discussion by stating an opinion and supporting it',
    explanation: 'Task 2 requires you to read a professor\'s question and two student responses, then add your own contribution.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Analyzing Student Responses',
  explanation: 'Identifying the main arguments in the two provided student posts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Why is it important to read the other students' responses before writing your own?`,
    options: [
      'To acknowledge their points and add a new perspective',
      'To copy their vocabulary',
      'To agree with both of them',
      'To prove that they are both wrong'
    ],
    correctAnswer: 'To acknowledge their points and add a new perspective',
    explanation: 'A high-scoring response refers to the other students\' ideas (e.g., "While I agree with Sarah that...") while adding original thought.',
    points: 2
  }))
};

// SHARDS 3-4: Developing a Strong Argument
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'Stating Your Position Clearly',
  explanation: 'Mastering phrases to introduce your own point of view.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Which is a formal way to introduce your opinion in an academic discussion?`,
    options: [
      'From my perspective, it is more beneficial to...',
      'I think that maybe...',
      'Like Sarah said, I like...',
      'Basically, the best thing is...'
    ],
    correctAnswer: 'From my perspective, it is more beneficial to...',
    explanation: '"From my perspective" or "I am of the opinion that" are more formal and appropriate for an academic context.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'Supporting with Specific Examples',
  explanation: 'Moving from general statements to specific, concrete evidence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which is the best way to support the claim: "Remote work improves productivity"?`,
    options: [
      'For instance, employees can save time on commuting and focus more on their tasks.',
      'Remote work is just better for everyone.',
      'I like working from home because I can wear pajamas.',
      'Many people believe that productivity is important.'
    ],
    correctAnswer: 'For instance, employees can save time on commuting and focus more on their tasks.',
    explanation: 'Specific examples (saving time on commuting) provide stronger support than generalities or purely personal anecdotes.',
    points: 2
  }))
};

// SHARDS 5-6: Acknowledging and Refuting
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Agreement and Partial Agreement',
  explanation: 'Using phrases to build on or modify existing arguments.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Which phrase builds on another student's point? "________ Kelly's point about cost, I would add that..."`,
    options: ['Building on', 'Ignoring', 'Instead of', 'Despite'],
    correctAnswer: 'Building on',
    explanation: '"Building on" or "Expanding on" shows that you are actively participating in the discussion.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Polite Disagreement in Academic Settings',
  explanation: 'Mastering the art of disagreeing without being confrontational.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `How should you disagree with a student named Paul?`,
    options: [
      'While Paul makes a valid point about X, I believe Y is more critical because...',
      'Paul is completely wrong about everything.',
      'I dont like Paul\'s idea at all.',
      'Paul should read the question again.'
    ],
    correctAnswer: 'While Paul makes a valid point about X, I believe Y is more critical because...',
    explanation: 'Acknowledge the other person\'s point first ("While Paul makes a valid point") before presenting your own view.',
    points: 2
  }))
};

// SHARDS 7-8: Cohesion and Advanced Vocabulary
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Sentence Connectors for Logic',
  explanation: 'Using "Consequently," "Moreover," "Nonetheless," and "Therefore".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Choose the best connector: "Education is expensive. ________, the long-term benefits far outweigh the initial costs."`,
    options: ['Nonetheless', 'Therefore', 'Furthermore', 'Similarly'],
    correctAnswer: 'Nonetheless',
    explanation: '"Nonetheless" or "However" shows a contrast between the high cost and the high benefits.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Using Academic Collocations',
  explanation: 'Learning common word pairings like "play a role," "provide insight," and "address an issue".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which verb collocates best? "The government should take steps to ________ the problem of urban sprawl."`,
    options: ['address', 'do', 'look', 'make'],
    correctAnswer: 'address',
    explanation: 'We "address a problem" or "address an issue" in formal academic English.',
    points: 2
  }))
};

// SHARDS 9-10: Efficiency and Word Count
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Conciseness in Short Tasks',
  explanation: 'Learning to be impactful within the 100-word recommendation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `The recommended length for the Academic Discussion task is at least 100 words. What should you prioritize?`,
    options: [
      'Quality of ideas and grammatical accuracy',
      'Writing as many words as possible (e.g., 500)',
      'Repeating your main point five times',
      'Using as many commas as possible'
    ],
    correctAnswer: 'Quality of ideas and grammatical accuracy',
    explanation: 'A well-written 120-word response will score higher than a repetitive 200-word one.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Final Writing Checklist',
  explanation: 'Reviewing the essential steps before submitting Task 2.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `In the last 2 minutes of the task, you should:`,
    options: [
      'Check for subject-verb agreement and spelling errors',
      'Add a new paragraph',
      'Look at the clock and panic',
      'Ask the professor a question'
    ],
    correctAnswer: 'Check for subject-verb agreement and spelling errors',
    explanation: 'Proofreading for minor errors can be the difference between a 4 and a 5.',
    points: 2
  }))
};

export const B2_WEEK_14 = createShardedToeflUnit(
  'toefl-b2-w14',
  'Week 14: Writing: Academic Discussion Contribution',
  'Mastering the Writing for an Academic Discussion task with focus on argument development and peer interaction.',
  ['Analyze student responses for contribution points', 'State formal academic opinions clearly', 'Support claims with concrete evidence', 'Use academic collocations and reporting verbs'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
