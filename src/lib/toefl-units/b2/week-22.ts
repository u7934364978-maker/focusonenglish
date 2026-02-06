import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 22;
const LEVEL = 'b2';

// SHARDS 1-2: Advanced Listening - Lecture Nuance
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'Listening: Subtle Shifts in Topic',
  explanation: 'Tracking how a professor transitions between sub-topics or introduces a "side note."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `If a professor says, "But that’s a topic for another day," they are ________.`,
    options: ['Setting aside a minor detail', 'Ending the class early', 'Starting a new major section', 'Asking for student questions'],
    correctAnswer: 'Setting aside a minor detail',
    explanation: 'Recognizing these transitions prevents you from focusing too much on irrelevant "asides" mentioned by the speaker.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'Listening: Complex Academic Definitions',
  explanation: 'Understanding technical concepts that are defined through multiple examples.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `When a professor uses a phrase like "In essence," they are about to ________.`,
    options: ['Summarize the core of a complex idea', 'Give a very long example', 'Introduce a new student', 'End the lecture'],
    correctAnswer: 'Summarize the core of a complex idea',
    explanation: '"In essence" signals a simplified or summarized version of the main concept being discussed.',
    points: 2
  }))
};

// SHARDS 3-4: Advanced Listening - Interaction Dynamics
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Listening: Student-Professor Interactions',
  explanation: 'Identifying when a student is correcting the professor or asking for clarification.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `If a student says, "Wait, I thought the experiment failed?", the student is ________.`,
    options: ['Expressing confusion or checking a fact', 'Starting a fight', 'Leaving the room', 'Giving a new theory'],
    correctAnswer: 'Expressing confusion or checking a fact',
    explanation: 'Student questions often serve as signals for key points that will be clarified or expanded upon in the answer.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Listening: Professor\'s Use of Sarcasm or Irony',
  explanation: 'Detecting when a speaker\'s literal words differ from their intended meaning.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `A professor says, "Great, just what we needed: another theory with no data." The professor is ________.`,
    options: ['Being skeptical or critical', 'Truly excited about the new theory', 'Asking for more theories', 'Ending the class'],
    correctAnswer: 'Being skeptical or critical',
    explanation: 'The use of "Great" in this context is ironic, showing that the professor actually views the lack of data as a problem.',
    points: 2
  }))
};

// SHARDS 5-6: Advanced Vocabulary - Formal vs. Informal Academic
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Campus Idioms and Phrasal Verbs',
  explanation: 'Common informal expressions heard in student-professor conversations.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If a student needs to "catch up on" their assignments, they ________.`,
    options: ['Are behind and need to do work', 'Are finished with everything', 'Want to start a new project', 'Are throwing their books away'],
    correctAnswer: 'Are behind and need to do work',
    explanation: '"Catch up on" is a frequent phrasal verb in campus-related conversations.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Formal Academic Signposts',
  explanation: 'Mastering words that structure a high-level academic lecture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which word is a formal way to introduce a final conclusion?`,
    options: ['Hence', 'Maybe', 'Anyway', 'Plus'],
    correctAnswer: 'Hence',
    explanation: '"Hence" is a high-level academic marker used to show a logical conclusion or result.',
    points: 2
  }))
};

// SHARDS 7-8: Critical Listening - Inferred Relationships
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Inferred Process Steps',
  explanation: 'Identifying the sequence of a process when it is not explicitly numbered.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `The professor mentions step A, then says, "But before that can happen, we need B." What is the order?`,
    options: ['B happens first, then A', 'A happens first, then B', 'A and B happen at the same time', 'Only B happens'],
    correctAnswer: 'B happens first, then A',
    explanation: 'Signals like "before that can happen" are crucial for tracking chronological order in lectures.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Connecting Indirect Evidence',
  explanation: 'Understanding how a small detail supports a much larger claim.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `If a professor mentions "unexpectedly low temperatures" in a lecture about a failed experiment, they are likely ________.`,
    options: [
      'Providing a possible cause for the failure',
      'Complaining about the weather',
      'Suggesting the equipment was broken',
      'Telling a joke'
    ],
    correctAnswer: 'Providing a possible cause for the failure',
    explanation: 'Listening for causal links between specific facts and the overall outcome of a study is a B2/C1 level skill.',
    points: 2
  }))
};

// SHARDS 9-10: Error Analysis & Strategy
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Listening: Recognizing Distractors',
  explanation: 'Identifying why some options seem right but are actually incorrect.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `A "distractor" in Listening often uses ________.`,
    options: [
      'The exact same words as the audio but in a wrong context',
      'Synonyms that mean something else',
      'Words that were never mentioned',
      'The name of a different professor'
    ],
    correctAnswer: 'The exact same words as the audio but in a wrong context',
    explanation: 'TOEFL often tests if you understood the RELATIONSHIP between words, not just the words themselves.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Listening: Managing Note-taking Spikes',
  explanation: 'What to do when the speaker starts talking very fast or gives a lot of data.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `When a professor lists several dates or names, you should ________.`,
    options: [
      'Note the significance of the list rather than every single detail',
      'Stop listening and write everything down',
      'Ask the computer to slow down',
      'Close your eyes and try to memorize'
    ],
    correctAnswer: 'Note the significance of the list rather than every single detail',
    explanation: 'TOEFL rarely tests every specific date; it tests WHY the professor is providing that list of examples.',
    points: 2
  }))
};

export const B2_WEEK_22 = createShardedToeflUnit(
  'toefl-b2-w22',
  'Week 22: Advanced Listening Strategy',
  'Focusing on technical lecture nuance, speaker attitude, and complex campus interactions.',
  ['Track subtle shifts in academic topics', 'Identify sarcasm, irony, and speaker stance', 'Master formal and informal campus vocabulary', 'Infer chronological and causal relationships in lectures'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
