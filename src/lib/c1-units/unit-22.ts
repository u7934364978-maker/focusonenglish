import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 22;

export const C1_U22_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Socializing Idioms',
  explanation: 'Common idioms used when meeting people and social situations.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'We really hit it ___ from the start. (off)',
      'I need to ___ the ice at the party. (break)',
      'She is the life and ___ of the party. (soul)',
      'We should ___ base next week. (touch)',
      'I\'m just going to ___ with the flow. (go)',
      'He\'s a bit of a cold ___ . (fish)',
      'They get along like a house on ___ . (fire)',
      'It was a real eye-___ experience. (open)',
      'I don\'t want to be a wet ___ . (blanket)',
      'We are on the same ___ . (page)'
    ][i],
    correctAnswer: [
      'off',
      'break',
      'soul',
      'touch',
      'go',
      'fish',
      'fire',
      'opening',
      'blanket',
      'wavelength'
    ][i],
    explanation: 'Correct idiom for social interaction.',
    points: 1
  }))
};

export const C1_U22_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Relationship Phrasal Verbs',
  explanation: 'Phrasal verbs commonly used to describe relationships.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What does "fall out" mean?',
      'What does "make up" mean?',
      'What does "look up to" mean?',
      'What does "drift apart" mean?',
      'What does "hit it off" mean?',
      'What does "put up with" mean?',
      'What does "settle down" mean?',
      'What does "count on" mean?',
      'What does "get over" mean?',
      'What does "keep in touch" mean?'
    ][i],
    options: [
      ['To argue', 'To fall down', 'To lose something'],
      ['To reconcile', 'To invent', 'To apply cosmetics'],
      ['To admire', 'To look above', 'To search'],
      ['To lose closeness', 'To move away', 'To sleep'],
      ['To like each other immediately', 'To hit someone', 'To leave'],
      ['To tolerate', 'To lift', 'To place'],
      ['To start a stable life', 'To sit', 'To relax'],
      ['To rely on', 'To count numbers', 'To expect'],
      ['To recover from', 'To climb over', 'To finish'],
      ['To maintain contact', 'To touch someone', 'To hold']
    ][i],
    correctAnswer: [
      'To argue',
      'To reconcile',
      'To admire',
      'To lose closeness',
      'To like each other immediately',
      'To tolerate',
      'To start a stable life',
      'To rely on',
      'To recover from',
      'To maintain contact'
    ][i],
    explanation: 'Correct definition of relationship phrasal verbs.',
    points: 1
  }))
};

export const C1_U22_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Relationship Idioms',
  explanation: 'Idiomatic expressions for describing people and their bonds.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "fair-weather friend"?',
      'What does "see eye to eye" mean?',
      'What does "speak the same language" mean?',
      'What is a "know-it-all"?',
      'What does "clear the air" mean?',
      'What does "bury the hatchet" mean?',
      'What is "blood is thicker than water"?',
      'What does "behind someone\'s back" mean?',
      'What is an "old flame"?',
      'What does "keep someone at arm\'s length" mean?'
    ][i],
    options: [
      ['Friend only in good times', 'Friend who likes weather', 'A meteorologist'],
      ['To agree', 'To stare', 'To have good vision'],
      ['To have similar ideas', 'To be bilingual', 'To talk a lot'],
      ['Someone who thinks they know everything', 'A genius', 'A librarian'],
      ['To resolve a conflict', 'To open a window', 'To breathe'],
      ['To stop a conflict', 'To hide a tool', 'To dig a hole'],
      ['Family is most important', 'Blood is dense', 'Family is difficult'],
      ['Without their knowledge', 'Physically behind them', 'Secretly'],
      ['A former partner', 'A fire', 'An old friend'],
      ['To avoid intimacy', 'To push someone', 'To be tall']
    ][i],
    correctAnswer: [
      'Friend only in good times',
      'To agree',
      'To have similar ideas',
      'Someone who thinks they know everything',
      'To resolve a conflict',
      'To stop a conflict',
      'Family is most important',
      'Without their knowledge',
      'A former partner',
      'To avoid intimacy'
    ][i],
    explanation: 'Correct relationship idiom definition.',
    points: 1
  }))
};

export const unit22: Lesson = createC1Unit(
  'c1-u22',
  'Idioms for Socializing & Relationships',
  'Expanding vocabulary with advanced idioms and phrasal verbs for social and personal contexts.',
  ['Use social idioms naturally in conversation', 'Apply relationship phrasal verbs correctly', 'Understand and use relationship-themed idioms'],
  [
    C1_U22_BLOCK1, C1_U22_BLOCK2, C1_U22_BLOCK3,
    C1_U22_BLOCK1, C1_U22_BLOCK2, C1_U22_BLOCK3,
    C1_U22_BLOCK1, C1_U22_BLOCK2, C1_U22_BLOCK3, C1_U22_BLOCK1
  ]
);
