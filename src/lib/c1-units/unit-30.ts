import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 30;

export const C1_U30_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Social Fluency Review',
  explanation: 'Consolidating social idioms, fillers, and networking phrases.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'We really hit it ___ from the start.',
      'To be ___ , I don\'t really agree.',
      'He\'s the life and ___ of the party.',
      'We should touch ___ next week.',
      'I\'m just going to go with the ___ .',
      'It was an eye-___ experience.',
      'Mind if I ___ you?',
      'So, what ___ you here?',
      'It was a ___ meeting you.',
      'Be careful with your digital ___ .'
    ][i],
    correctAnswer: [
      'off',
      'honest',
      'soul',
      'base',
      'flow',
      'opening',
      'join',
      'brings',
      'pleasure',
      'footprint'
    ][i],
    explanation: 'Review of social fluency vocabulary.',
    points: 1
  }))
};

export const C1_U30_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Rhetoric & Culture Review',
  explanation: 'Consolidating rhetorical devices and cross-cultural concepts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is an "oxymoron"?',
      'What is "alliteration"?',
      'What is "hyperbole"?',
      'What is "low-context" communication?',
      'What is "power distance"?',
      'What is "individualism"?',
      'What is "netiquette"?',
      'What is "ghosting"?',
      'What is "inclusive language"?',
      'What is "cultural relativism"?'
    ][i],
    options: [
      ['Contradictory terms together', 'A type of ox', 'A fast car'],
      ['Repetition of initial consonant sounds', 'Repetition of vowels', 'A type of poem'],
      ['Exaggeration for emphasis', 'Speaking quietly', 'A small comment'],
      ['Direct and explicit', 'Implicit and relies on context', 'Fast talking'],
      ['Acceptance of hierarchy', 'Physical distance', 'Speed of work'],
      ['Focus on individual goals', 'Focus on group goals', 'Living alone'],
      ['Online etiquette', 'A type of net', 'Internet security'],
      ['Stopping all contact suddenly', 'Talking about ghosts', 'A type of photo filter'],
      ['Respectful language for all groups', 'Language only for some', 'Secret language'],
      ['Understanding culture in its own context', 'Judging others', 'Ignoring culture']
    ][i],
    correctAnswer: [
      'Contradictory terms together',
      'Repetition of initial consonant sounds',
      'Exaggeration for emphasis',
      'Direct and explicit',
      'Acceptance of hierarchy',
      'Focus on individual goals',
      'Online etiquette',
      'Stopping all contact suddenly',
      'Respectful language for all groups',
      'Understanding culture in its own context'
    ][i],
    explanation: 'Review of rhetorical and cultural concepts.',
    points: 1
  }))
};

export const C1_U30_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Advanced Social Grammar Review',
  explanation: 'Consolidating question tags, emphasis, and conditionals.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'You\'ve met him, ___?',
      'Let\'s start, ___?',
      '___ we need is a plan.',
      'Never ___ I seen such beauty.',
      'If you ___ me, I would have helped.',
      'Supposing we ___ to their terms...',
      'I ___ was a great talk.',
      'It was her courage ___ inspired us.',
      'Seldom ___ such talent appear.',
      'He hardly ever talks, ___?'
    ][i],
    options: [
      ['haven\'t you', 'hadn\'t you', 'have you'],
      ['shall we', 'will we', 'do we'],
      ['What', 'It', 'That'],
      ['have', 'had', 'did'],
      ['had asked', 'asked', 'ask'],
      ['agreed', 'agree', 'agreeing'],
      ['genuinely', 'genuine', 'genuineness'],
      ['that', 'who', 'which'],
      ['does', 'did', 'is'],
      ['does he', 'doesn\'t he', 'did he']
    ][i],
    correctAnswer: [
      'haven\'t you',
      'shall we',
      'What',
      'have',
      'had asked',
      'agreed',
      'genuinely',
      'that',
      'does',
      'does he'
    ][i],
    explanation: 'Review of advanced grammar for social interaction.',
    points: 1
  }))
};

export const unit30: Lesson = createC1Unit(
  'c1-u30',
  'Module 3 Review & Consolidation',
  'Comprehensive review of Advanced Communication & Social Interaction topics.',
  ['Consolidate social fluency and networking language', 'Review rhetorical devices and cultural intelligence concepts', 'Apply advanced grammar in social and persuasive contexts'],
  [
    C1_U30_BLOCK1, C1_U30_BLOCK2, C1_U30_BLOCK3,
    C1_U30_BLOCK1, C1_U30_BLOCK2, C1_U30_BLOCK3,
    C1_U30_BLOCK1, C1_U30_BLOCK2, C1_U30_BLOCK3, C1_U30_BLOCK1
  ]
);
