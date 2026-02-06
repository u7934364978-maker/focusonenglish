import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 28;
const LEVEL = 'b2';

// SHARDS 1-2: Writing Task 1 - Detail Selection
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Integrated Writing: Identifying Key Points',
  explanation: 'Selecting the most important information from the reading to be contrasted in the lecture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `In the Integrated Writing task, the most important part of your essay is ________.`,
    options: [
      'The relationship between the lecture and the reading',
      'Your own opinion on the topic',
      'A long introduction about the subject',
      'The number of synonyms you used'
    ],
    correctAnswer: 'The relationship between the lecture and the reading',
    explanation: 'The task is to explain how the lecture challenges or supports specific points in the reading.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Integrated Writing: Accurately Reporting the Lecture',
  explanation: 'Ensuring you capture the professor\'s evidence, not just their main claim.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `If the lecture provides a study that contradicts the reading, you must ________.`,
    options: [
      'Explain the study\'s findings as evidence',
      'Just say the lecture disagreed',
      'Ignore the study and focus on the reading',
      'Write about a different study you know'
    ],
    correctAnswer: 'Explain the study\'s findings as evidence',
    explanation: 'Capturing the *evidence* used in the lecture is crucial for a high score in the integrated task.',
    points: 2
  }))
};

// SHARDS 3-4: Writing Task 1 - Synthesizing Counterpoints
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'Integrated Writing: Contrastive Transitions',
  explanation: 'Using complex connectors to show the opposition between sources.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Which transition best shows contrast? "The reading suggests X; ________, the professor argues Y."`,
    options: ['conversely', 'furthermore', 'similarly', 'consequently'],
    correctAnswer: 'conversely',
    explanation: '"Conversely," "on the other hand," and "in contrast" are excellent for showing opposition.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'Integrated Writing: Summarizing with Precision',
  explanation: 'Combining ideas efficiently without losing the core meaning.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `A good summary of a lecture point should be ________.`,
    options: [
      'Clear, concise, and focused on the evidence',
      'A word-for-word transcript',
      'A very long paragraph with many adjectives',
      'Written in the first person ("I think...")'
    ],
    correctAnswer: 'Clear, concise, and focused on the evidence',
    explanation: 'Efficiency is key; you have 20 minutes to synthesize three major points.',
    points: 2
  }))
};

// SHARDS 5-6: Writing Task 2 - Academic Discussion Strategy
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Academic Discussion: Taking a Clear Stance',
  explanation: 'Stating your position immediately and supporting it logically.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `In the Academic Discussion task, your stance should be ________.`,
    options: [
      'Clearly stated in the first or second sentence',
      'Hidden until the end of the post',
      'Neutral, agreeing with everyone',
      'A secret'
    ],
    correctAnswer: 'Clearly stated in the first or second sentence',
    explanation: 'Directness is valued in this short-format task (approx. 100 words).',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Academic Discussion: Supporting with Logic',
  explanation: 'Providing reasons that directly address the professor\'s prompt.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which type of support is most effective for a short academic post?`,
    options: [
      'A logical reason followed by a brief example',
      'A long, personal story from your childhood',
      'Repeating the same point five times',
      'Listing 20 different ideas without explaining them'
    ],
    correctAnswer: 'A logical reason followed by a brief example',
    explanation: 'The "Reason + Example" structure provides the most impact within the word limit.',
    points: 2
  }))
};

// SHARDS 7-8: Academic Discussion - Engaging with Others
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Academic Discussion: Agreement & Disagreement',
  explanation: 'Referencing student posts while maintaining your own voice.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which phrase is best for disagreeing politely?`,
    options: [
      '"While Kelly makes a valid point about X, I believe Y because..."',
      '"Kelly is wrong about everything."',
      '"I don\'t want to talk about what Kelly said."',
      '"Kelly should read more about this topic."'
    ],
    correctAnswer: '"While Kelly makes a valid point about X, I believe Y because..."',
    explanation: 'The "While [Person] says X, I believe Y" structure is a sophisticated way to engage in a discussion.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Academic Discussion: Unique Contribution',
  explanation: 'Adding a new perspective rather than just repeating other students.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `To get a high score, your post should ________.`,
    options: [
      'Add a new idea or a different perspective to the discussion',
      'Summarize what the other two students said',
      'Be exactly 500 words long',
      'Only use words with more than 10 letters'
    ],
    correctAnswer: 'Add a new idea or a different perspective to the discussion',
    explanation: 'Your contribution should advance the conversation, not just recap it.',
    points: 2
  }))
};

// SHARDS 9-10: Cohesion & Final Editing
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Writing: Paragraph Cohesion',
  explanation: 'Ensuring your sentences flow logically using pronouns and linkers.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which is an example of a cohesive device?`,
    options: [
      'Using "This policy" to refer back to a previously mentioned plan',
      'Capitalizing every word in the sentence',
      'Using the word "and" 20 times in one paragraph',
      'Writing in all capital letters'
    ],
    correctAnswer: 'Using "This policy" to refer back to a previously mentioned plan',
    explanation: 'Cohesion helps the reader follow your argument without getting lost.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Writing: The 2-Minute Proofread',
  explanation: 'Common B2-level errors to check for before submitting.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `What is a common "high-frequency" error for B2 learners?`,
    options: [
      'Subject-verb agreement (e.g., "The professor say" vs "says")',
      'Forgetting how to spell their own name',
      'Writing the entire essay in the wrong language',
      'Using too many periods'
    ],
    correctAnswer: 'Subject-verb agreement (e.g., "The professor say" vs "says")',
    explanation: 'Basic grammatical accuracy is still a major factor in the B2 scoring rubric.',
    points: 2
  }))
};

export const B2_WEEK_28 = createShardedToeflUnit(
  'toefl-b2-w28',
  'Week 28: Full-Length Writing Mastery',
  'Intensive practice for both Writing tasks with a focus on synthesis, argumentation, and cohesion.',
  ['Select and contrast key details in Integrated Writing', 'Master contrastive transitions and precise summaries', 'Develop unique contributions in Academic Discussion', 'Refine cohesion and eliminate high-frequency grammar errors'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
