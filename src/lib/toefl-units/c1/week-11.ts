import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 11;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'C1 Listening: Function Questions',
  explanation: 'Understanding *why* a speaker says something (e.g., to clarify, to challenge, to transition).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A professor says: "Now, I know what you're thinking—that this theory seems a bit far-fetched." What is the function of this statement?`,
    options: [
      'To anticipate and address a potential student objection',
      'To admit that the lecture is poorly planned',
      'To ask the students for their personal opinions',
      'To introduce a new and unrelated topic'
    ],
    correctAnswer: 'To anticipate and address a potential student objection',
    explanation: 'Anticipating objections is a common rhetorical move in academic lectures.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'C1 Listening: Detecting Sarcasm and Irony',
  explanation: 'Identifying when a speaker\'s literal meaning differs from their intended meaning through tone.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `A speaker says with a downward intonation: "Oh, great. Another delay in the research funding." What is their attitude?`,
    options: ['Frustrated', 'Excited', 'Indifferent', 'Confused'],
    correctAnswer: 'Frustrated',
    explanation: 'Intonation is key to detecting irony and emotional subtext in listening passages.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Identifying Digressions',
  explanation: 'Recognizing when a professor briefly leaves the main topic to share an anecdote or side note.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `How can you tell a professor has returned to the main topic after a digression?`,
    options: [
      'They use phrases like "But getting back to..." or "Returning to our earlier point..."',
      'They stop talking completely',
      'They ask the students to leave the room',
      'They repeat the same joke three times'
    ],
    correctAnswer: 'They use phrases like "But getting back to..." or "Returning to our earlier point..."',
    explanation: 'Lexical markers of transition help you map the structure of the lecture.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: Stance and Degree of Certainty',
  explanation: 'Distinguishing between a proven fact and a tentative hypothesis based on qualifiers.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `If a professor uses the words "purportedly" and "allegedly," they are ________.`,
    options: [
      'Expressing doubt or distancing themselves from the claim',
      'Expressing absolute certainty and support',
      'Reporting their own original research findings',
      'Angry at the person who made the claim'
    ],
    correctAnswer: 'Expressing doubt or distancing themselves from the claim',
    explanation: 'Qualifiers like "purportedly" indicate that the speaker is not vouching for the truth of the statement.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'C1 Listening: Inferred Meanings in Conversations',
  explanation: 'Understanding what is implied but not explicitly stated in campus interactions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `A student asks: "Is there any way I can get an extension?" and the professor replies: "You do realize the final grades are due tomorrow, right?" What is the professor implying?`,
    options: [
      'That an extension is virtually impossible',
      'That they will grant the extension happily',
      'That the student should check the syllabus',
      'That they have forgotten when the deadline is'
    ],
    correctAnswer: 'That an extension is virtually impossible',
    explanation: 'Rhetorical questions in response to requests often signal a negative answer.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'C1 Listening: Organization of Complex Information',
  explanation: 'Identifying organizational patterns like process, comparison/contrast, or cause/effect.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which transition word signals a "contrast" in the professor's argument?`,
    options: ['Conversely', 'Furthermore', 'Consequently', 'Specifically'],
    correctAnswer: 'Conversely',
    explanation: '"Conversely" introduces a statement that is the opposite of the one just made.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'C1 Listening: Understanding Emphasis via Stress',
  explanation: 'Recognizing how emphatic stress changes the meaning of a sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `A speaker says: "I didn't say *he* stole the money." What is the implication?`,
    options: [
      'Someone else might have stolen the money',
      'The money wasn\'t stolen at all',
      'The speaker is lying about the whole thing',
      'He stole something other than money'
    ],
    correctAnswer: 'Someone else might have stolen the money',
    explanation: 'Contrastive stress shifts the focus of the sentence to a specific element.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'C1 Listening: Recognizing Self-Correction',
  explanation: 'Identifying when a speaker realizes an error and fixes it mid-sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `What phrase usually signals a speaker's self-correction?`,
    options: ['"Or rather..."', '"By the way..."', '"In conclusion..."', '"As I was saying..."'],
    correctAnswer: '"Or rather..."',
    explanation: '"Or rather" is a common marker used to refine or correct a previous statement.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'listening',
  title: 'C1 Listening: Predicting Outcomes of Conversations',
  explanation: 'Using context to determine the likely next step for the student or professor.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `After the professor suggests a specific book in the library, what will the student likely do?`,
    options: [
      'Go to the library or check the online catalog',
      'Drop the course immediately',
      'Argue with the librarian',
      'Write a new book themselves'
    ],
    correctAnswer: 'Go to the library or check the online catalog',
    explanation: 'Predicting the "next step" is a common inference question in campus conversations.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'listening',
  title: 'C1 Listening: Synthesis of Multiple Perspectives',
  explanation: 'Tracking how different students contribute to a classroom discussion led by a professor.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `In a multi-speaker classroom discussion, the "central question" is usually ________.`,
    options: [
      'Introduced by the professor at the start of the lecture',
      'Hidden at the very end of the recording',
      'Determined by the student who speaks the loudest',
      'Changed every two minutes'
    ],
    correctAnswer: 'Introduced by the professor at the start of the lecture',
    explanation: 'Identifying the initial framing of the discussion helps you organize all subsequent points.',
    points: 2
  }))
};

export const C1_WEEK_11 = createShardedToeflUnit(
  'toefl-c1-w11',
  'Week 11: Listening - High-Level Rhetorical Analysis',
  'Analyzing the attitude, function, and organizational structure of complex academic lectures and campus conversations.',
  ['Identify the rhetorical function of specific phrases and sentences', 'Detect sarcasm, irony, and subtle emotional states through tone', 'Differentiate between facts, hypotheses, and tentative claims', 'Track organizational patterns and shifts in complex information'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
