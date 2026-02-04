import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 14;

export const C1_U14_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Multi-word Prepositions',
  grammarPoint: 'Prepositions',
  explanation: 'Using complex prepositions like "in spite of", "with regard to", "by means of".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'We succeeded ___ of the difficulties.',
      'I am writing with ___ to your email.',
      'They solved it by ___ of a new tool.',
      'He left the house ___ account of the rain.',
      'We did it for the ___ of the children.',
      '___ light of recent events, we must act.',
      'He was at the ___ of his captors.',
      'I am speaking on ___ of my colleagues.',
      'They are in ___ of a new manager.',
      'We are ___ addition to the team.'
    ][i],
    correctAnswer: [
      'in spite',
      'regard',
      'means',
      'on',
      'sake',
      'In',
      'mercy',
      'behalf',
      'search',
      'in'
    ][i],
    explanation: 'Correct multi-word preposition part.',
    points: 1
  }))
};

export const C1_U14_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Prepositional Phrases in Formal Writing',
  explanation: 'Using prepositional phrases to link ideas professionally.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'Instead of "Because of", use:',
      'Instead of "About", use:',
      'Instead of "Using", use:',
      'Instead of "Besides", use:',
      'Instead of "Except for", use:',
      'Instead of "In front of", use:',
      'Instead of "Considering", use:',
      'Instead of "Despite", use:',
      'Instead of "According to", use:',
      'Instead of "Instead of", use:'
    ][i],
    options: [
      ['On account of', 'Because of', 'Due to'],
      ['With reference to', 'About', 'Regarding'],
      ['By means of', 'Using', 'Through'],
      ['In addition to', 'Besides', 'As well as'],
      ['With the exception of', 'Except for', 'Apart from'],
      ['In the presence of', 'In front of', 'Before'],
      ['In light of', 'Considering', 'Taking into account'],
      ['Notwithstanding', 'Despite', 'In spite of'],
      ['In accordance with', 'According to', 'As per'],
      ['In lieu of', 'Instead of', 'In place of']
    ][i],
    correctAnswer: [
      'On account of',
      'With reference to',
      'By means of',
      'In addition to',
      'With the exception of',
      'In the presence of',
      'In light of',
      'Notwithstanding',
      'In accordance with',
      'In lieu of'
    ][i],
    explanation: 'More formal prepositional phrasing.',
    points: 1
  }))
};

export const C1_U14_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Prepositions + -ing Forms',
  explanation: 'Using prepositional phrases followed by gerunds.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'He succeeded by ___ hard.',
      'In spite of ___ tired, she finished.',
      'With the aim of ___ the goal...',
      'Instead of ___ out, we stayed home.',
      'Besides ___ talented, she is kind.',
      'They left without ___ goodbye.',
      'For fear of ___ seen, he hid.',
      'On ___ the news, she cried.',
      'Apart from ___ a bit late...',
      'By virtue of ___ the manager...'
    ][i],
    correctAnswer: [
      'working',
      'being',
      'achieving',
      'going',
      'being',
      'saying',
      'being',
      'hearing',
      'arriving',
      'being'
    ][i],
    explanation: 'Correct gerund after preposition.',
    points: 1
  }))
};

export const unit14: Lesson = createC1Unit(
  'c1-u14',
  'Complex Prepositional Phrases',
  'Mastering multi-word prepositions and their usage in formal and academic writing.',
  ['Use multi-word prepositions accurately', 'Apply formal prepositional phrases in writing', 'Structure sentences with prepositions and gerunds'],
  [
    C1_U14_BLOCK1, C1_U14_BLOCK2, C1_U14_BLOCK3,
    C1_U14_BLOCK1, C1_U14_BLOCK2, C1_U14_BLOCK3,
    C1_U14_BLOCK1, C1_U14_BLOCK2, C1_U14_BLOCK3, C1_U14_BLOCK1
  ]
);
