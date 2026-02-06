import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 19;
const LEVEL = 'b2';

// SHARDS 1-2: Reading Review - Inference & Rhetorical Purpose
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Reading: Inference Question Strategies',
  explanation: 'Recapping how to identify information that is strongly implied but not stated.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `In an "Inference" question, the correct answer is usually ________.`,
    options: [
      'A logical conclusion based on evidence in the text',
      'A direct quote from the passage',
      'Information that contradicts the main idea',
      'The authors personal opinion'
    ],
    correctAnswer: 'A logical conclusion based on evidence in the text',
    explanation: 'Inference questions require you to go one step beyond the literal text to find what must be true based on the provided facts.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'Reading: Rhetorical Purpose Questions',
  explanation: 'Understanding WHY an author included specific information or examples.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which phrase is a common signal for a Rhetorical Purpose question?`,
    options: [
      'Why does the author mention...?',
      'What is the main idea of...?',
      'According to paragraph 2...',
      'Which of the following is NOT true...?'
    ],
    correctAnswer: 'Why does the author mention...?',
    explanation: 'Rhetorical Purpose questions ask about the function of a specific word, phrase, or sentence in the context of the whole passage.',
    points: 2
  }))
};

// SHARDS 3-4: Listening Review - Pragmatics (Speaker's Stance/Attitude)
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Listening: Understanding Speaker\'s Attitude',
  explanation: 'Identifying tone and stance through word choice and intonation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `If a professor says, "Wait, let me rephrase that," they are most likely ________.`,
    options: [
      'Clarifying a previous point',
      'Ending the lecture',
      'Changing the topic completely',
      'Asking a student a question'
    ],
    correctAnswer: 'Clarifying a previous point',
    explanation: 'Rephrasing is a common signal that the professor wants to ensure the concept is understood correctly.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Listening: Rhetorical Function Questions',
  explanation: 'Reviewing questions that ask about the meaning of a specific phrase in context.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `What does the speaker imply when they say, "It’s not exactly common knowledge"?`,
    options: [
      'The information is specialized or rare',
      'Everyone should already know this',
      'The speaker is lying',
      'The lecture is almost over'
    ],
    correctAnswer: 'The information is specialized or rare',
    explanation: 'This phrase suggests that the topic is technical or not part of general daily awareness.',
    points: 2
  }))
};

// SHARDS 5-6: Academic Vocabulary - Tier 2 & 3
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Abstract Academic Nouns',
  explanation: 'Mastering nouns used to describe theories and processes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `The ________ of the study was to determine the effect of light on plant growth.`,
    options: ['objective', 'objection', 'obligation', 'obscurity'],
    correctAnswer: 'objective',
    explanation: '"Objective" is a common academic synonym for "goal" or "purpose."',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Verbs of Analysis',
  explanation: 'Reviewing verbs used to describe intellectual work.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Scientists must ________ the data before drawing any conclusions.`,
    options: ['scrutinize', 'summarize', 'skip', 'suspend'],
    correctAnswer: 'scrutinize',
    explanation: '"Scrutinize" means to examine something very closely and carefully, essential in academic contexts.',
    points: 2
  }))
};

// SHARDS 7-8: Grammar Review - Passive Voice and Modals
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Grammar: Advanced Passive Voice',
  explanation: 'Focusing on impersonal passive structures common in academic reading.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Complete the sentence: "It ________ that the pyramids were built over several decades."`,
    options: ['is widely believed', 'widely believes', 'has widely believed', 'believing widely'],
    correctAnswer: 'is widely believed',
    explanation: 'The structure "It is + past participle + that" is used to report common beliefs or theories.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Grammar: Modals of Possibility',
  explanation: 'Using modals to express degrees of certainty in academic claims.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which modal expresses the LOWEST level of certainty? "This discovery ________ lead to a breakthrough."`,
    options: ['might', 'will', 'must', 'can'],
    correctAnswer: 'might',
    explanation: '"Might" expresses a possibility but with significant uncertainty, common in scientific hedging.',
    points: 2
  }))
};

// SHARDS 9-10: Error Analysis & Strategy
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Reading: Eliminating Trap Answers',
  explanation: 'Identifying why "almost correct" answers are actually wrong.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `A common "trap" in Reading questions is an option that ________.`,
    options: [
      'Contains words from the text but changes the meaning',
      'Uses too many synonyms',
      'Is located at the end of the paragraph',
      'Is written in a different font'
    ],
    correctAnswer: 'Contains words from the text but changes the meaning',
    explanation: 'TOEFL often uses "word matches" to distract students from the actual logic or relationship described in the text.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Listening: Note-taking Consistency',
  explanation: 'Refining your system for maximum efficiency during lectures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `When taking notes, you should focus on ________ rather than ________.`,
    options: [
      'Relationships between ideas / Every single word',
      'Spelling everything correctly / Drawing pictures',
      'Names of students / The professors points',
      'The speed of the speaker / The content'
    ],
    correctAnswer: 'Relationships between ideas / Every single word',
    explanation: 'Capturing the hierarchy and flow (e.g., Cause -> Effect) is more important than transcribing the lecture.',
    points: 2
  }))
};

export const B2_WEEK_19 = createShardedToeflUnit(
  'toefl-b2-w19',
  'Week 19: Mixed Review: Reading and Listening',
  'Mastering high-level inference, rhetorical purpose, and pragmatic understanding in academic contexts.',
  ['Perfect Inference and Rhetorical Purpose strategies in Reading', 'Identify speaker stance and pragmatic meaning in Listening', 'Master abstract academic vocabulary and analytical verbs', 'Apply advanced passive voice and modal hedging'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
