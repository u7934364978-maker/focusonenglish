import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 2;

// ============================================
// BLOCK 1: GRAMMAR - PAST PERFECT CONTINUOUS
// ============================================
export const B2_U2_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Past Perfect Continuous Formation',
  grammarPoint: 'Past Perfect Continuous',
  explanation: 'Use had been + -ing for actions that were in progress up to a point in the past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'I ___ (wait) for two hours when the train finally arrived.',
      'She ___ (study) all night, so she was exhausted.',
      'They ___ (live) in London for five years before they moved to Paris.',
      'How long ___ you ___ (work) there when the company closed?',
      'He ___ (not/feel) well, so he went home early.',
      'The ground was wet because it ___ (rain).',
      'We ___ (expect) the news for a long time.',
      'She ___ (try) to call him all day without success.',
      'They ___ (play) football for an hour when it started to snow.',
      'I ___ (think) about quitting my job before I got the promotion.'
    ][i],
    correctAnswer: [
      'had been waiting',
      'had been studying',
      'had been living',
      'had, been working',
      'had not been feeling',
      'had been raining',
      'had been expecting',
      'had been trying',
      'had been playing',
      'had been thinking'
    ][i],
    explanation: 'Emphasis on duration or process before a past point.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - PAST PERFECT SIMPLE VS CONTINUOUS
// ============================================
export const B2_U2_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Past Perfect Simple vs Continuous',
  grammarPoint: 'Past Perfect',
  explanation: 'Simple focuses on the result; Continuous focuses on the duration.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'I ___ the book, so I knew the ending.',
      'I ___ the book for hours when my eyes started to hurt.',
      'They ___ all the food before we arrived.',
      'They ___ for three hours before they found the house.',
      'She ___ five letters that morning.',
      'She ___ letters all morning.',
      'He ___ his car twice that month.',
      'He ___ his car for an hour when it started to rain.',
      'We ___ the news before you told us.',
      'We ___ about the news when the phone rang.'
    ][i],
    options: [
      ['had read', 'had been reading'],
      ['had been reading', 'had read'],
      ['had eaten', 'had been eating'],
      ['had been walking', 'had walked'],
      ['had written', 'had been writing'],
      ['had been writing', 'had written'],
      ['had washed', 'had been washing'],
      ['had been washing', 'had washed'],
      ['had heard', 'had been hearing'],
      ['had been talking', 'had talked']
    ][i],
    correctAnswer: [
      'had read',
      'had been reading',
      'had eaten',
      'had been walking',
      'had written',
      'had been writing',
      'had washed',
      'had been washing',
      'had heard',
      'had been talking'
    ][i],
    explanation: 'Distinction between completed action and ongoing process.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - PHRASAL VERBS (LIFE EVENTS)
// ============================================
export const B2_U2_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Phrasal Verbs: Life Events',
  explanation: 'Common phrasal verbs for personal experiences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'I ___ in a small village.',
      'He decided to ___ from his job.',
      'We need to ___ the problem together.',
      'She ___ that she had made a mistake.',
      'They ___ a new business last year.',
      'I ___ an old friend at the supermarket.',
      'The wedding was ___ until next month.',
      'I need to ___ my notes before the exam.',
      'He ___ as a very intelligent person.',
      'She ___ the courage to speak up.'
    ][i],
    options: [
      ['grew up', 'brought up', 'took up'],
      ['step down', 'give up', 'break down'],
      ['face up to', 'look up to', 'get up to'],
      ['found out', 'put out', 'turned out'],
      ['set up', 'take up', 'make up'],
      ['ran into', 'ran over', 'ran out of'],
      ['put off', 'put on', 'put out'],
      ['go over', 'go off', 'go on'],
      ['comes across', 'comes about', 'comes along'],
      ['summoned up', 'took up', 'held up']
    ][i],
    correctAnswer: [
      'grew up',
      'step down',
      'face up to',
      'found out',
      'set up',
      'ran into',
      'put off',
      'go over',
      'comes across',
      'summoned up'
    ][i],
    explanation: 'Phrasal verbs in the context of life and experiences.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - COLLOCATIONS (EXPERIENCES)
// ============================================
export const B2_U2_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Collocations: Experiences',
  explanation: 'Words that naturally go together.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'fill-blank',
    question: [
      'I have a ___ (vivid) memory of my first day at school.',
      'It was a ___ (life) changing experience.',
      'He has a wide ___ (range) of interests.',
      'I want to ___ (gain) more experience in this field.',
      'She made a ___ (lasting) impression on me.',
      'The trip was a once in a ___ (lifetime) opportunity.',
      'I had a ___ (gut) feeling that something was wrong.',
      'We had a ___ (heated) argument about politics.',
      'He takes great ___ (pride) in his work.',
      'It\'s important to ___ (keep) an open mind.'
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
    explanation: 'Common B2-level collocations.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U2_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Personal Growth',
  explanation: 'Change the form of the word to fit the sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'His ___ (ACHIEVE) are truly remarkable.',
      'We need to focus on personal ___ (DEVELOP).',
      'She is a very ___ (AMBIT) person.',
      'The experience was very ___ (VALUE).',
      'It was an ___ (FORGET) trip.',
      'He showed great ___ (DETERMINE).',
      'We need to find a ___ (SOLVE) to the problem.',
      'The results were highly ___ (SATISFY).',
      'Her ___ (CONFIDENT) grew over time.',
      'The book provides useful ___ (INFORM).'
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
    explanation: 'Noun, adjective, and adverb formations.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - NARRATIVE STRUCTURE
// ============================================
export const B2_U2_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: An Unexpected Journey',
  explanation: 'Read the narrative and identify the sequence of events.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What had the narrator done before the journey started?' : 'How long had they been traveling when the incident occurred?',
    options: [['Packed their bags', 'Called a friend', 'Bought a map', 'Sold their car'], ['Three days', 'Two weeks', 'One month', 'Five hours']][i % 2],
    correctAnswer: i < 5 ? 'Packed their bags' : 'Three days',
    explanation: 'Identifying sequence and duration in text.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - UNDERSTANDING CONTEXT
// ============================================
export const B2_U2_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Past Situations',
  explanation: 'Listen and determine what had been happening.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `Speaker ${i + 1} looks exhausted. What have they been doing?`,
    options: ['Working long hours', 'Traveling', 'Exercising', 'Studying'],
    correctAnswer: 'Working long hours',
    explanation: 'Inferring background actions from current state.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - NARRATIVE CONNECTORS
// ============================================
export const B2_U2_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Narrative Connectors',
  explanation: 'Choose the best connector for a story.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      '___ I had finished my work, I left.',
      'We were walking ___ we heard a scream.',
      '___ he was tired, he kept going.',
      'The party had started ___ we arrived.',
      'I hadn\'t seen him ___ 2010.',
      'She was crying ___ she had lost her dog.',
      '___, we reached the summit.',
      'I stayed at home ___ it was raining.',
      'He had been working there ___ he graduated.',
      '___ I realized my mistake, it was too late.'
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
    explanation: 'Using connectors to create flow in narratives.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DESCRIBING PAST EXPERIENCES
// ============================================
export const B2_U2_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Describing Past Experiences',
  explanation: 'Identify natural ways to talk about the past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally start a story about a trip?`,
    options: ['You\'ll never guess what happened...', 'I will tell you a story.', 'In the past I went...', 'Once upon a time...'],
    correctAnswer: 'You\'ll never guess what happened...',
    explanation: 'Conversational openers for storytelling.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U2_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 2',
  explanation: 'Consolidation of Unit 2 topics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Identify the correct Past Perfect Continuous form.' : 'Choose the correct phrasal verb.',
    options: i < 5 ? ['had been waiting', 'has been waiting', 'was waiting'] : ['grew up', 'set up', 'ran into'],
    correctAnswer: i < 5 ? 'had been waiting' : 'grew up',
    explanation: 'Review of Unit 2 concepts.',
    points: 1
  }))
};

export const B2_UNIT_2 = createB2Unit(
  'b2-u2',
  'Past Perfect Continuous & Background Events',
  'Master the use of past perfect continuous and describe life experiences.',
  ['Form past perfect continuous correctly', 'Use phrasal verbs for life events', 'Use narrative connectors'],
  [
    B2_U2_BLOCK1, B2_U2_BLOCK2, B2_U2_BLOCK3, B2_U2_BLOCK4, B2_U2_BLOCK5,
    B2_U2_BLOCK6, B2_U2_BLOCK7, B2_U2_BLOCK8, B2_U2_BLOCK9, B2_U2_BLOCK10
  ]
);
