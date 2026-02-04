import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 10;

export const C1_U10_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Inversion & Cleft Sentences Review',
  grammarPoint: 'Inversion & Cleft Sentences',
  explanation: 'Review of emphasis techniques covered in Module 1.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'Seldom ___ I heard such a beautiful voice.',
      'Under no circumstances ___ the alarm be disabled.',
      'What I ___ is more time to complete the task.',
      'It was only then ___ I realized the truth.',
      'Hardly ___ I arrived when the phone rang.',
      'Not only ___ he late, but he was also rude.',
      'Only by ___ hard will you succeed.',
      'Little ___ they know what was in store for them.',
      'It is the ___ that needs updating.',
      'All I ___ was a simple explanation.'
    ][i],
    correctAnswer: [
      'have',
      'should',
      'need',
      'that',
      'had',
      'was',
      'working',
      'did',
      'software',
      'wanted'
    ][i],
    explanation: 'Correct use of emphasis structures.',
    points: 1
  }))
};

export const C1_U10_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Passive & Participle Review',
  explanation: 'Review of reporting structures and clause reduction.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'He is said ___ the most successful CEO.',
      '___ from the top, the view is amazing.',
      'It has been ___ that the project is on track.',
      'The book ___ on the table is mine.',
      '___ finished the work, they went home.',
      'The students ___ expected to arrive early.',
      '___ by the storm, the house was damaged.',
      'It is rumored ___ they are splitting up.',
      'The person ___ to you is my boss.',
      '___ that he was wrong, he apologized.'
    ][i],
    options: [
      ['to be', 'being', 'is'],
      ['Seen', 'Seeing', 'Having seen'],
      ['reported', 'report', 'reporting'],
      ['lying', 'lain', 'lay'],
      ['Having', 'After', 'On'],
      ['are', 'is', 'have'],
      ['Damaged', 'Damaging', 'Having damaged'],
      ['that', 'if', 'whether'],
      ['speaking', 'spoken', 'to speak'],
      ['Realizing', 'Realized', 'Having realized']
    ][i],
    correctAnswer: [
      'to be',
      'Seen',
      'reported',
      'lying',
      'Having',
      'are',
      'Damaged',
      'that',
      'speaking',
      'Realizing'
    ][i],
    explanation: 'Review of complex grammar points.',
    points: 1
  }))
};

export const C1_U10_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Module 1 Vocabulary Review',
  explanation: 'Review of advanced phrasal verbs, idioms, and formal vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'We need to come ___ with a new plan.',
      'Don\'t beat around the ___ .',
      'The success boils ___ to preparation.',
      'He has a chip on his ___ .',
      'We ran ___ of time.',
      'She hit the ___ on the head.',
      'Let\'s call it a ___ .',
      'The plan fell ___ due to lack of funds.',
      'He takes ___ his father.',
      'I\'m feeling under the ___ .'
    ][i],
    correctAnswer: [
      'up',
      'bush',
      'down',
      'shoulder',
      'out',
      'nail',
      'day',
      'through',
      'after',
      'weather'
    ][i],
    explanation: 'Review of idiomatic and phrasal language.',
    points: 1
  }))
};

export const unit10: Lesson = createC1Unit(
  'c1-u10',
  'Module 1 Review & Assessment',
  'Comprehensive review of advanced structures, inversion, cleft sentences, and participle clauses.',
  ['Consolidate all grammar and vocabulary from Module 1', 'Identify and correct advanced errors', 'Demonstrate mastery of C1 emphasis techniques'],
  [
    C1_U10_BLOCK1, C1_U10_BLOCK2, C1_U10_BLOCK3,
    C1_U10_BLOCK1, C1_U10_BLOCK2, C1_U10_BLOCK3,
    C1_U10_BLOCK1, C1_U10_BLOCK2, C1_U10_BLOCK3, C1_U10_BLOCK1
  ]
);
