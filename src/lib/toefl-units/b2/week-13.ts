import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 13;
const LEVEL = 'b2';

// SHARDS 1-2: Integrated Writing - Structure and Templates
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Integrated Writing: The Standard Structure',
  explanation: 'Understanding the 4-paragraph structure for the Integrated Task.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `What is the most effective structure for the Integrated Writing Task?`,
    options: [
      'Intro + Point 1 + Point 2 + Point 3',
      'One long paragraph summarizing everything',
      'Reading summary + My opinion + Conclusion',
      'Intro + Reading Point 1 + Lecture Point 1 + Conclusion'
    ],
    correctAnswer: 'Intro + Point 1 + Point 2 + Point 3',
    explanation: 'Each body paragraph should compare one point from the reading with its corresponding counterpoint from the lecture.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Linking Words for Comparison and Contrast',
  explanation: 'Mastering transitions like "On the other hand," "Conversely," and "In contrast".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which transition word best introduces a counter-argument from the lecture? "The reading claims that the policy will save money. ________, the professor argues it will increase costs."`,
    options: ['However', 'Furthermore', 'Consequently', 'Similarly'],
    correctAnswer: 'However',
    explanation: '"However" or "On the contrary" are essential for showing the disagreement between the reading and the lecture.',
    points: 2
  }))
};

// SHARDS 3-4: Integrated Writing - Paraphrasing the Reading
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'reading-comprehension',
  title: 'Paraphrasing Reading Points',
  explanation: 'Learning to rewrite the reading\'s main ideas without copying word-for-word.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Reading: "The implementation of the new technology will lead to a significant reduction in energy consumption." Which is the best paraphrase?`,
    options: [
      'The new tech will help save a lot of power.',
      'Implementation of new tech leads to reduction in energy consumption.',
      'Energy consumption is bad for the environment.',
      'The professor disagrees with energy savings.'
    ],
    correctAnswer: 'The new tech will help save a lot of power.',
    explanation: 'A good paraphrase changes the structure and vocabulary while maintaining the core meaning.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'reading-comprehension',
  title: 'Identifying the Reading\'s 3 Points',
  explanation: 'Quickly scanning the reading to find the three supporting arguments.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `In the Integrated Task reading, where are the three main supporting points usually found?`,
    options: [
      'At the beginning of each body paragraph',
      'Only in the conclusion',
      'In the first sentence of the essay',
      'They are hidden in the details'
    ],
    correctAnswer: 'At the beginning of each body paragraph',
    explanation: 'The reading usually has an intro and three body paragraphs, each starting with a clear point.',
    points: 2
  }))
};

// SHARDS 5-6: Integrated Writing - Synthesizing the Lecture
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Capturing the Lecture\'s Counter-arguments',
  explanation: 'Note-taking focus: How the professor specifically challenges the reading.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If the reading says a dinosaur was a "slow scavenger" and the professor mentions its "powerful leg muscles," what is the lecture point?`,
    options: [
      'The dinosaur was likely a fast predator.',
      'The dinosaur had weak legs.',
      'The dinosaur ate only plants.',
      'The reading is correct.'
    ],
    correctAnswer: 'The dinosaur was likely a fast predator.',
    explanation: 'The professor uses the "powerful legs" detail to contradict the "slow scavenger" theory.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Reporting Verbs for the Professor',
  explanation: 'Using "claims," "argues," "challenges," and "casts doubt on".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which phrase is most common in Integrated Writing? "The professor ________ the validity of the reading's claims."`,
    options: ['casts doubt on', 'thinks about', 'reads aloud', 'agrees with'],
    correctAnswer: 'casts doubt on',
    explanation: '"Casts doubt on" is a classic TOEFL reporting phrase for the Integrated Writing task.',
    points: 2
  }))
};

// SHARDS 7-8: Grammar and Accuracy in Writing
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Subject-Verb Agreement in Formal Writing',
  explanation: 'Ensuring correct grammar when summarizing academic content.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Select the correct form: "Each of the points raised by the professor ________ the reading passage."`,
    options: ['contradicts', 'contradict', 'contradicting', 'are contradict'],
    correctAnswer: 'contradicts',
    explanation: '"Each" is a singular subject, so it requires the singular verb "contradicts".',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Using Complex Sentence Structures',
  explanation: 'Combining sentences with "Although," "While," and "Even though".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Combine these ideas: "The reading says X. The lecture says Y."`,
    options: [
      'While the reading suggests X, the lecturer argues Y.',
      'The reading says X and the lecture says Y.',
      'The reading says X but Y.',
      'X and Y are different.'
    ],
    correctAnswer: 'While the reading suggests X, the lecturer argues Y.',
    explanation: 'Using "While" at the start of a sentence creates a complex structure that improves your score.',
    points: 2
  }))
};

// SHARDS 9-10: Self-Correction and Timing
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Proofreading for Common Spelling Errors',
  explanation: 'Identifying common academic spelling mistakes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which spelling is correct for this academic context?`,
    options: ['Environment', 'Enviroment', 'Enviorment', 'Environement'],
    correctAnswer: 'Environment',
    explanation: 'Spelling accuracy is important for the highest score levels in B2 writing.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Integrated Writing Review',
  explanation: 'Final checkpoints for the Integrated Task.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Should you include your own personal opinion in the Integrated Writing Task?`,
    options: [
      'No, focus only on the reading and the lecture.',
      'Yes, in the conclusion.',
      'Yes, in every paragraph.',
      'Only if you disagree with the professor.'
    ],
    correctAnswer: 'No, focus only on the reading and the lecture.',
    explanation: 'The Integrated Task is purely a summary of the relationship between two sources. Do NOT add your own views.',
    points: 2
  }))
};

export const B2_WEEK_13 = createShardedToeflUnit(
  'toefl-b2-w13',
  'Week 13: Writing: Integrated Task Mastery',
  'Mastering the synthesis of reading and listening materials for the Integrated Writing task.',
  ['Organize responses into a 4-paragraph structure', 'Use formal contrast transitions', 'Paraphrase reading points accurately', 'Capture specific lecture counter-arguments'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
