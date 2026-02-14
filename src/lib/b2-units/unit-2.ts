import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 2;

// ============================================
// BLOCK 1: GRAMMAR - PAST PERFECT CONTINUOUS
// ============================================
export const B2_U2_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Past Perfect Continuous: Educational Background',
  grammarPoint: 'Past Perfect Continuous',
  explanation: 'Use had been + -ing for educational activities that were in progress up to a point in the past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'I ___ (study) pedagogy for three years when I decided to specialize in special needs education.',
      'She ___ (research) her thesis for months before she finally found the key references.',
      'They ___ (prepare) for the entrance exam all summer, so they were ready for the challenge.',
      'How long ___ you ___ (teach) when you were promoted to head of department?',
      'He ___ (not/attend) lectures regularly, so he struggled with the final project.',
      'The classroom was messy because the students ___ (work) on a group project.',
      'We ___ (expect) a change in the curriculum for a long time before it was announced.',
      'She ___ (try) to master advanced calculus all semester without much success.',
      'They ___ (practice) their presentation for an hour when the projector broke.',
      'I ___ (think) about applying for a PhD before I received the scholarship offer.'
    ][i],
    correctAnswer: [
      'had been studying',
      'had been researching',
      'had been preparing',
      'had, been teaching',
      'had not been attending',
      'had been working',
      'had been expecting',
      'had been trying',
      'had been practicing',
      'had been thinking'
    ][i],
    explanation: 'Emphasis on duration of educational activities before a past point.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - PAST PERFECT SIMPLE VS CONTINUOUS
// ============================================
export const B2_U2_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Simple vs Continuous in Academia',
  grammarPoint: 'Past Perfect',
  explanation: 'Simple focuses on the academic result; Continuous focuses on the duration of the study process.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'I ___ the entire textbook, so I felt confident for the exam.',
      'I ___ the textbook for hours when my eyes started to get tired.',
      'They ___ all the research papers before the seminar started.',
      'They ___ for three hours before they finally understood the theory.',
      'She ___ five essays that semester.',
      'She ___ essays all weekend to meet the deadline.',
      'He ___ the lab results twice before submitting the report.',
      'He ___ in the lab for an hour when the alarm went off.',
      'We ___ about the scholarship before the official email arrived.',
      'We ___ about the new policy when the professor walked in.'
    ][i],
    options: [
      ['had read', 'had been reading'],
      ['had been reading', 'had read'],
      ['had reviewed', 'had been reviewing'],
      ['had been debating', 'had debated'],
      ['had written', 'had been writing'],
      ['had been writing', 'had written'],
      ['had checked', 'had been checking'],
      ['had been working', 'had worked'],
      ['had heard', 'had been hearing'],
      ['had been talking', 'had talked']
    ][i],
    correctAnswer: [
      'had read',
      'had been reading',
      'had reviewed',
      'had been debating',
      'had written',
      'had been writing',
      'had checked',
      'had been working',
      'had heard',
      'had been talking'
    ][i],
    explanation: 'Distinction between completed academic tasks and ongoing study processes.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - PHRASAL VERBS (ACADEMIC LIFE)
// ============================================
export const B2_U2_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Phrasal Verbs: Academic Success',
  explanation: 'Common phrasal verbs used in educational contexts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'It is important to ___ with your assignments.',
      'He decided to ___ of the course after the first month.',
      'We need to ___ the main theories in this chapter.',
      'She ___ that the exam was harder than expected.',
      'They ___ a new study group last semester.',
      'I ___ an old professor at the graduation ceremony.',
      'The deadline for the essay was ___ until next Friday.',
      'I need to ___ my notes before the mid-term.',
      'He ___ as a very dedicated student.',
      'She ___ the courage to present her research.'
    ][i],
    options: [
      ['keep up', 'bring up', 'take up'],
      ['drop out', 'give up', 'break down'],
      ['go over', 'look up to', 'get up to'],
      ['found out', 'put out', 'turned out'],
      ['set up', 'take up', 'make up'],
      ['ran into', 'ran over', 'ran out of'],
      ['put off', 'put on', 'put out'],
      ['look over', 'go off', 'go on'],
      ['comes across', 'comes about', 'comes along'],
      ['summoned up', 'took up', 'held up']
    ][i],
    correctAnswer: [
      'keep up',
      'drop out',
      'go over',
      'found out',
      'set up',
      'ran into',
      'put off',
      'look over',
      'comes across',
      'summoned up'
    ][i],
    explanation: 'Phrasal verbs relevant to studying and academic life.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - COLLOCATIONS (EDUCATION)
// ============================================
export const B2_U2_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Collocations: Learning & Achievement',
  explanation: 'Academic words that naturally go together.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'fill-blank',
    question: [
      'She has a ___ (vivid) memory of her first day at university.',
      'It was a ___ (life) changing educational experience.',
      'The school offers a wide ___ (range) of subjects.',
      'I want to ___ (gain) more knowledge in this field.',
      'The lecture made a ___ (lasting) impression on me.',
      'Studying abroad was a once in a ___ (lifetime) opportunity.',
      'I had a ___ (gut) feeling that the answer was correct.',
      'The students had a ___ (heated) debate about ethics.',
      'He takes great ___ (pride) in his academic work.',
      'It\'s important to ___ (keep) an open mind when learning.'
    ][i],
    correctAnswer: [
      'vivid',
      'life',
      'range',
      'gain',
      'lasting',
      'lifetime',
      'gut',
      'heated',
      'pride',
      'keep'
    ][i],
    explanation: 'Essential B2 collocations for educational topics.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U2_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Academic Growth',
  explanation: 'Change the form of the word to fit the educational context.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'His academic ___ (ACHIEVE) are truly remarkable.',
      'We need to focus on professional ___ (DEVELOP).',
      'She is a very ___ (AMBIT) student.',
      'The feedback was very ___ (VALUE) for my project.',
      'The graduation was an ___ (FORGET) event.',
      'He showed great ___ (DETERMINE) to pass the exam.',
      'We need to find a ___ (SOLVE) to the math problem.',
      'The student\'s progress was highly ___ (SATISFY).',
      'Her ___ (CONFIDENT) in public speaking grew.',
      'The library provides useful ___ (INFORM).'
    ][i],
    correctAnswer: [
      'achievements',
      'development',
      'ambitious',
      'valuable',
      'unforgettable',
      'determination',
      'solution',
      'satisfactory',
      'confidence',
      'information'
    ][i],
    explanation: 'Common word transformations in educational texts.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - EDUCATIONAL PATHWAYS
// ============================================
export const B2_U2_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Lifelong Learning',
  explanation: 'Read about different educational paths and identify details.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What had the student done before enrolling in the course?' : 'How long had they been researching when they made the discovery?',
    options: [['Completed a foundation year', 'Worked in a bank', 'Traveled abroad', 'Learned a language'], ['Three years', 'Two months', 'Six weeks', 'Five days']][i % 2],
    correctAnswer: i < 5 ? 'Completed a foundation year' : 'Three years',
    explanation: 'Identifying background events and duration in an educational context.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - CLASSROOM CONTEXT
// ============================================
export const B2_U2_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Learning Situations',
  explanation: 'Listen to descriptions of students and determine their background.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `The student looks very prepared for the seminar. What have they been doing?`,
    options: ['Reading the required literature', 'Attending workshops', 'Working on a project', 'Practicing their speech'],
    correctAnswer: 'Reading the required literature',
    explanation: 'Inferring previous study habits from current academic performance.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - ACADEMIC CONNECTORS
// ============================================
export const B2_U2_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Linking Ideas in Essays',
  explanation: 'Choose the best connector to link ideas in an academic essay.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      '___ I had finished the research, I started writing.',
      'We were studying ___ the library closed.',
      '___ the course was difficult, she persevered.',
      'I had mastered the basics ___ the term ended.',
      'I hadn\'t taken an exam ___ 2015.',
      'She was stressed ___ she had three deadlines.',
      '___, she graduated with honors.',
      'I enrolled in the course ___ I wanted to upskill.',
      'He had been teaching ___ he finished his degree.',
      '___ I understood the concept, the lesson was over.'
    ][i],
    options: [
      ['Once', 'While', 'During'],
      ['when', 'while', 'as soon as'],
      ['Although', 'Despite', 'However'],
      ['by the time', 'since', 'until'],
      ['since', 'for', 'during'],
      ['because', 'so', 'although'],
      ['Eventually', 'At first', 'Initially'],
      ['as', 'so', 'while'],
      ['ever since', 'during', 'for'],
      ['By the time', 'While', 'As']
    ][i],
    correctAnswer: [
      'Once',
      'when',
      'Although',
      'by the time',
      'since',
      'because',
      'Eventually',
      'as',
      'ever since',
      'By the time'
    ][i],
    explanation: 'Using appropriate connectors to improve the flow of academic writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING EDUCATION
// ============================================
export const B2_U2_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Describing Educational Experiences',
  explanation: 'Identify natural ways to talk about your studies and background.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally start talking about your university days?`,
    options: ['Looking back at my time at university...', 'I will say my education.', 'In the past I studied...', 'When I was a small child...'],
    correctAnswer: 'Looking back at my time at university...',
    explanation: 'Natural openers for discussing educational history.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED ACADEMIC REVIEW
// ============================================
export const B2_U2_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review: Unit 2 Education',
  explanation: 'Consolidation of Unit 2 topics within an educational context.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Identify the correct Past Perfect Continuous for study.' : 'Choose the correct phrasal verb for academia.',
    options: i < 5 ? ['had been studying', 'has been studying', 'was studying'] : ['drop out', 'set up', 'ran into'],
    correctAnswer: i < 5 ? 'had been studying' : 'drop out',
    explanation: 'Comprehensive review of Unit 2 education-themed concepts.',
    points: 1
  }))
};

export const B2_UNIT_2 = createB2Unit(
  'b2-u2',
  'Educational Backgrounds & Lifelong Learning',
  'Explore past educational experiences and the importance of continuous learning.',
  ['Use past perfect continuous for educational history', 'Master academic phrasal verbs and collocations', 'Apply narrative connectors in formal contexts'],
  [
    B2_U2_BLOCK1, B2_U2_BLOCK2, B2_U2_BLOCK3, B2_U2_BLOCK4, B2_U2_BLOCK5,
    B2_U2_BLOCK6, B2_U2_BLOCK7, B2_U2_BLOCK8, B2_U2_BLOCK9, B2_U2_BLOCK10
  ]
);
