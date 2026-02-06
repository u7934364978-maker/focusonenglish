import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 32;
const LEVEL = 'b2';

// SHARDS 1-2: Reading Traps - Word Matches & Broadness
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Reading Traps: The "Word Match" Distractor',
  explanation: 'Why options that use words from the text are often incorrect.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A "Word Match" trap is an option that ________.`,
    options: [
      'Uses keywords from the passage but changes the relationship between them',
      'Is written in a different language',
      'Uses only synonyms and no original words',
      'Is always the longest option'
    ],
    correctAnswer: 'Uses keywords from the passage but changes the relationship between them',
    explanation: 'TOEFL often uses familiar words to lure students into picking an answer that doesn\'t actually make sense logically.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'Reading Traps: Too Broad vs. Too Narrow',
  explanation: 'Identifying options that are technically true but don\'t answer the specific question.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `An answer that is "too broad" ________.`,
    options: [
      'Covers more information than what is supported by the specific paragraph',
      'Is only one word long',
      'Is only about a minor detail',
      'Contradicts the main idea'
    ],
    correctAnswer: 'Covers more information than what is supported by the specific paragraph',
    explanation: 'Broad answers sound like general truths but often go beyond what the text actually proves.',
    points: 2
  }))
};

// SHARDS 3-4: Listening Traps - Partial Truths & Misinterpretations
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Listening Traps: The Partial Truth',
  explanation: 'Recognizing options that are half-right and half-wrong.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `If an option is 90% correct but has one incorrect detail, you should ________.`,
    options: [
      'Eliminate it immediately',
      'Pick it because it\'s mostly right',
      'Assume the error is a typo',
      'Wait for the audio to replay'
    ],
    correctAnswer: 'Eliminate it immediately',
    explanation: 'In TOEFL, an answer must be 100% supported by the evidence to be correct.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Listening Traps: Misinterpreting Tone',
  explanation: 'Avoiding errors caused by ignoring the speaker\'s intonation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `A common trap in "Stance" questions is an option that ________.`,
    options: [
      'Matches the speaker\'s words but ignores their negative tone',
      'Is spoken by a different person',
      'Is shorter than the other options',
      'Uses complex vocabulary'
    ],
    correctAnswer: 'Matches the speaker\'s words but ignores their negative tone',
    explanation: 'A speaker might say "Great idea" sarcastically, meaning the opposite of the literal words.',
    points: 2
  }))
};

// SHARDS 5-6: Speaking Traps - Memorized vs. Natural
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Speaking Traps: Over-reliance on Templates',
  explanation: 'Ensuring your response doesn\'t sound like a robot.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `The "Robotic" trap happens when a student ________.`,
    options: [
      'Uses a template but doesn\'t adapt it to the specific topic',
      'Speaks with a perfect accent',
      'Pauses for 1 second between sentences',
      'Uses too many academic words'
    ],
    correctAnswer: 'Uses a template but doesn\'t adapt it to the specific topic',
    explanation: 'Templates are tools, but your response must still feel like a natural answer to the specific prompt.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Speaking Traps: Summary vs. Synthesis',
  explanation: 'Avoiding the trap of just repeating the reading in Task 3.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `In Task 3, spending 40 seconds on the reading summary is a trap because ________.`,
    options: [
      'You won\'t have enough time for the professor\'s example',
      'The reading is more important than the example',
      'The examiner already read the passage',
      'The professor doesn\'t like summaries'
    ],
    correctAnswer: 'You won\'t have enough time for the professor\'s example',
    explanation: 'The bulk of your score in Task 3 comes from explaining the lecture example.',
    points: 2
  }))
};

// SHARDS 7-8: Writing Traps - Off-Topic & Complexity
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Writing Traps: The "Off-Topic" Argument',
  explanation: 'Staying strictly within the bounds of the prompt.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `In the Academic Discussion task, you fall into a trap if you ________.`,
    options: [
      'Write about the general topic but ignore the professor\'s specific question',
      'Agree with both students',
      'Write exactly 120 words',
      'Use the first person ("I")'
    ],
    correctAnswer: 'Write about the general topic but ignore the professor\'s specific question',
    explanation: 'Directly answering the professor\'s question is a core requirement for a high score.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Writing Traps: False Complexity',
  explanation: 'Avoiding "big words" that are used incorrectly.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `The "Thesaurus" trap occurs when a student ________.`,
    options: [
      'Uses a complex word in a way that doesn\'t make sense in the sentence',
      'Uses too many simple words',
      'Spells a word correctly',
      'Writes a very long introduction'
    ],
    correctAnswer: 'Uses a complex word in a way that doesn\'t make sense in the sentence',
    explanation: 'Accuracy is more important than complexity. Only use "big words" if you are 100% sure of their meaning and usage.',
    points: 2
  }))
};

// SHARDS 9-10: Process of Elimination Mastery
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Strategy: Eliminating the "Almost Right"',
  explanation: 'Practice in finding the one fatal flaw in a distractor.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `If you are down to two options, you should look for ________.`,
    options: [
      'The option that has NO unproven assumptions',
      'The option that uses the most technical language',
      'The option that sounds more "academic"',
      'The option that is longest'
    ],
    correctAnswer: 'The option that has NO unproven assumptions',
    explanation: 'The correct TOEFL answer is always the one that is 100% provable from the text.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Strategy: Confidence through Elimination',
  explanation: 'Trusting your ability to find three wrong answers.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `The "Process of Elimination" is effective because ________.`,
    options: [
      'It is often easier to see why an answer is wrong than why it is right',
      'It makes the test faster',
      'It confuses the computer',
      'It allows you to skip reading the passage'
    ],
    correctAnswer: 'It is often easier to see why an answer is wrong than why it is right',
    explanation: 'Finding logical flaws in distractors is a reliable way to arrive at the correct answer.',
    points: 2
  }))
};

export const B2_WEEK_32 = createShardedToeflUnit(
  'toefl-b2-w32',
  'Week 32: Final Review: Identifying TOEFL "Trap" Patterns',
  'Mastering the ability to distinguish between high-level distractors and correct answers across all sections.',
  ['Identify "Word Match" and "Too Broad" traps in Reading', 'Recognize "Partial Truths" and "Misinterpreted Tone" in Listening', 'Avoid "Robotic" templates and summary traps in Speaking', 'Master the Process of Elimination for high-stakes decision making'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
