import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 12;
const LEVEL = 'b2';

// SHARDS 1-2: Review of Speaking Templates
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Template Review: Task 1 (Independent)',
  explanation: 'Consolidating the structure for personal preference and opinion tasks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which is the most effective structure for a 45-second Independent Speaking response?`,
    options: [
      'Opinion (5s) + Reason 1 (15s) + Reason 2 (15s) + Conclusion (5s)',
      'Just talk until the timer stops',
      'Explain only one reason for 45 seconds',
      'Read the prompt aloud for 20 seconds'
    ],
    correctAnswer: 'Opinion (5s) + Reason 1 (15s) + Reason 2 (15s) + Conclusion (5s)',
    explanation: 'A balanced response with two clear reasons and examples is the gold standard for Task 1 at B2 level.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Template Review: Task 2 (Campus)',
  explanation: 'Refining the summary structure for campus announcements and student opinions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `In Task 2, how much time should you spend summarizing the reading passage?`,
    options: ['10-15 seconds', '30 seconds', '45 seconds', '5 seconds'],
    correctAnswer: '10-15 seconds',
    explanation: 'The bulk of your score comes from summarizing the student\'s opinion, so keep the reading summary brief.',
    points: 2
  }))
};

// SHARDS 3-4: Integrated Task Review - Synthesis Errors
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Common Error: Over-summarizing the Reading',
  explanation: 'Learning to prioritize the listening content in Tasks 2 and 3.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `If you spend 40 seconds summarizing the reading in Task 3, what will likely happen?`,
    options: [
      'You will run out of time for the professor\'s example.',
      'You will get a higher score for detail.',
      'The rater will be impressed by your reading speed.',
      'You will have more time for the conclusion.'
    ],
    correctAnswer: 'You will run out of time for the professor\'s example.',
    explanation: 'Task 3 is about showing how the example illustrates the theory. If you miss the example, your score will drop significantly.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Common Error: Misrepresenting the Speaker',
  explanation: 'Ensuring your summary accurately reflects who said what.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which attribution is CORRECT for Task 3?`,
    options: [
      '"The professor illustrates this concept with the example of..."',
      '"The reading passage gives the example of..."',
      '"I think the experiment shows that..."',
      '"The student says the theory is..."'
    ],
    correctAnswer: '"The professor illustrates this concept with the example of..."',
    explanation: 'In Task 3, the reading provides the definition, and the professor provides the illustration/example.',
    points: 2
  }))
};

// SHARDS 5-6: Advanced Academic Vocabulary for Speaking
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Academic Verbs for Summarizing Lectures',
  explanation: 'Using precise verbs like "contends," "asserts," "illustrates," and "demonstrates".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Which verb is best for introducing a professor\'s main argument? "The professor ________ that the traditional theory of migration is outdated."`,
    options: ['contends', 'says', 'tells', 'looks'],
    correctAnswer: 'contends',
    explanation: '"Contends" or "Argues" is more academic than "says" and helps your B2 vocabulary score.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Words for Categorization and Classification',
  explanation: 'Using terms like "categories," "types," "aspects," and "dimensions" in Task 4.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Professor: "There are two distinct types of memory: short-term and long-term." How should you start?`,
    options: [
      '"The professor discusses two distinct categories of memory..."',
      '"The professor talks about memory things..."',
      '"Memory is divided into two pieces..."',
      '"Memory is like a box with two parts..."'
    ],
    correctAnswer: '"The professor discusses two distinct categories of memory..."',
    explanation: 'Using academic words like "distinct categories" shows higher level proficiency than "parts" or "pieces".',
    points: 2
  }))
};

// SHARDS 7-8: Managing Stress and Mental Fatigue
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'The Speaking Section: Staying Focused',
  explanation: 'Strategies for maintaining energy after the Reading and Listening sections.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `The Speaking section occurs immediately after the Listening section. How should you prepare during the 10-minute break?`,
    options: [
      'Drink water, stretch, and mentally review your templates.',
      'Panic about the Listening section.',
      'Try to sleep.',
      'Talk to other test-takers.'
    ],
    correctAnswer: 'Drink water, stretch, and mentally review your templates.',
    explanation: 'The 10-minute break is crucial for resetting your brain and preparing your "speaking muscles".',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Recovering from a "Freeze"',
  explanation: 'What to do if your mind goes blank during the preparation or speaking time.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `If you forget your next point while speaking, the best strategy is:`,
    options: [
      'Summarize your previous point using different words while you think.',
      'Stop speaking until you remember.',
      'Say "I forgot" into the microphone.',
      'Start crying.'
    ],
    correctAnswer: 'Summarize your previous point using different words while you think.',
    explanation: 'This "stalling" technique maintains fluency while giving your brain a few seconds to recover the next point.',
    points: 2
  }))
};

// SHARDS 9-10: Final Mock Speaking Checkpoints
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Success Criteria: Language Use',
  explanation: 'Reviewing the rubrics for grammar and vocabulary variety.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `To get a high score in "Language Use," you should:`,
    options: [
      'Use a variety of sentence structures and avoid repeating the same words.',
      'Only use short, simple sentences.',
      'Speak as fast as possible.',
      'Use slang to sound more natural.'
    ],
    correctAnswer: 'Use a variety of sentence structures and avoid repeating the same words.',
    explanation: 'Variety in grammar and lexis is a key component of the TOEFL speaking rubric.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Success Criteria: Topic Development',
  explanation: 'Reviewing the rubrics for coherence and progression of ideas.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `"Topic Development" refers to:`,
    options: [
      'How well you answer the prompt and organize your ideas logically.',
      'How much you know about the subject.',
      'How good your accent is.',
      'How loud you speak.'
    ],
    correctAnswer: 'How well you answer the prompt and organize your ideas logically.',
    explanation: 'Topic development is about the logic and completeness of your response, not your personal knowledge of the academic topic.',
    points: 2
  }))
};

export const B2_WEEK_12 = createShardedToeflUnit(
  'toefl-b2-w12',
  'Week 12: Speaking: Full Review and Mock Practice',
  'Final review of all Speaking strategies, templates, and rubrics to ensure B2-level success.',
  ['Consolidate templates for all 4 Speaking tasks', 'Avoid common synthesis and attribution errors', 'Apply advanced academic vocabulary', 'Manage stress and recover from speaking "freezes"'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
