import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 29;
const LEVEL = 'b2';

// SHARDS 1-2: Reading - Complex Inference & Synthesis
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Reading: Connecting Ideas Across Paragraphs',
  explanation: 'Practice with questions that require synthesizing information from different parts of the text.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which type of Reading question is most likely to require information from MULTIPLE paragraphs?`,
    options: ['Prose Summary', 'Vocabulary', 'Factual Information', 'Reference'],
    correctAnswer: 'Prose Summary',
    explanation: 'Prose Summary questions require an understanding of the passage as a whole.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'Reading: Advanced Inference with Evidence',
  explanation: 'Ensuring your inferences are based on textual evidence, not outside knowledge.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `When inferring, you must always be able to ________ in the passage.`,
    options: [
      'Point to the specific evidence that supports your conclusion',
      'Find the exact words of the answer',
      'Name the author of the text',
      'Translate the sentence into your native language'
    ],
    correctAnswer: 'Point to the specific evidence that supports your conclusion',
    explanation: 'Even though inferences aren\'t stated directly, they must be logically necessary based on the text.',
    points: 2
  }))
};

// SHARDS 3-4: Listening - Complex Pragmatics & Nuance
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Listening: Subtle Speaker Attitudes',
  explanation: 'Identifying irony, sarcasm, or genuine enthusiasm in academic contexts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `If a professor says, "Oh, sure, because that worked so well last time," with a falling intonation, they are likely being ________.`,
    options: ['Sarcastic', 'Enthusiastic', 'Confused', 'Informative'],
    correctAnswer: 'Sarcastic',
    explanation: 'Intonation and context are key to understanding the speaker\'s true meaning in TOEFL Listening.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Listening: Handling Rapid Speech',
  explanation: 'Strategies for following the main argument when the speaker is talking quickly.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `When the speaker is talking quickly, your notes should focus on ________.`,
    options: [
      'Nouns, verbs, and transition markers',
      'Prepositions and articles',
      'Spelling every word correctly',
      'Drawing detailed pictures'
    ],
    correctAnswer: 'Nouns, verbs, and transition markers',
    explanation: 'Content words (nouns/verbs) and logical markers (but/so/however) carry the most meaning.',
    points: 2
  }))
};

// SHARDS 5-6: Integrated Vocabulary Review
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Prefixes and Suffixes',
  explanation: 'Using word parts to decode unfamiliar academic vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `The prefix "sub-" in words like "subsequent" or "subsurface" usually means ________.`,
    options: ['Under or following', 'Against or opposite', 'Many or multiple', 'Large or great'],
    correctAnswer: 'Under or following',
    explanation: 'Knowing common prefixes helps you guess the meaning of academic terms you haven\'t seen before.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Synonyms for "Change"',
  explanation: 'Expanding your range for describing transformations in both Reading and Listening.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which word is a more academic synonym for "change"?`,
    options: ['alteration', 'fix', 'move', 'start'],
    correctAnswer: 'alteration',
    explanation: '"Alteration," "modification," and "transformation" are common in TOEFL academic contexts.',
    points: 2
  }))
};

// SHARDS 7-8: Advanced Grammar Review
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Grammar: Nominalization',
  explanation: 'Turning verbs into nouns to create more formal, academic sentences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Instead of saying "They studied the birds and found...", a more academic way is: "The ________ of the birds revealed..."`,
    options: ['study', 'studying', 'studied', 'student'],
    correctAnswer: 'study',
    explanation: 'Nominalization (using "study" as a noun) is a hallmark of formal academic English.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Grammar: Participial Phrases',
  explanation: 'Using -ing or -ed phrases at the beginning of sentences for variety.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Complete the sentence: "________ by the results, the researchers decided to repeat the experiment."`,
    options: ['Surprised', 'Surprising', 'Surprise', 'Surprisingly'],
    correctAnswer: 'Surprised',
    explanation: 'Past participial phrases (Surprised by...) provide efficient background information in a sentence.',
    points: 2
  }))
};

// SHARDS 9-10: Strategic Time Allocation
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Strategy: Fatigue Management',
  explanation: 'Staying sharp during the first hour of the test (Reading & Listening).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `To avoid burnout during the Listening section, you should ________.`,
    options: [
      'Take deep breaths between each audio clip',
      'Close your eyes while taking notes',
      'Try to remember everything without writing it down',
      'Listen to your own music instead'
    ],
    correctAnswer: 'Take deep breaths between each audio clip',
    explanation: 'Managing your physical and mental state is crucial for a 2-hour high-stakes exam.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Strategy: Double-Checking in Reading',
  explanation: 'Using any leftover time effectively to review flagged questions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `If you have 2 minutes left at the end of the Reading section, you should ________.`,
    options: [
      'Check your "Mark for Review" questions',
      'Sit quietly and wait for the time to end',
      'Go back and re-read the first paragraph',
      'Change all your answers to "B"'
    ],
    correctAnswer: 'Check your "Mark for Review" questions',
    explanation: 'Always use every available second to verify your reasoning on difficult questions.',
    points: 2
  }))
};

export const B2_WEEK_29 = createShardedToeflUnit(
  'toefl-b2-w29',
  'Week 29: Intensive Mixed Review: Reading and Listening',
  'Simulating the first half of the TOEFL iBT with a focus on synthesis, nuance, and stamina.',
  ['Connect ideas across multiple paragraphs in Reading', 'Identify subtle speaker attitudes and irony in Listening', 'Master academic word parts and nominalization', 'Apply fatigue management and review strategies'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
