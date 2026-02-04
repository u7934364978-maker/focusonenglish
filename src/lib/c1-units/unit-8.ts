import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 8;

export const C1_U8_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Gerunds & Infinitives: Subtle Differences',
  grammarPoint: 'Gerunds & Infinitives',
  explanation: 'Advanced usage of gerunds and infinitives where the meaning changes slightly or significantly.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'I remember ___ the door when I left.',
      'Remember ___ the door when you leave.',
      'He stopped ___ some bread on his way home.',
      'He stopped ___ bread because of his diet.',
      'I regret ___ you that the event is cancelled.',
      'I regret ___ so much money yesterday.',
      'The house needs ___ .',
      'I need ___ the house.',
      'She tried ___ the heavy door, but it wouldn\'t budge.',
      'Try ___ some lemon juice in your tea.'
    ][i],
    options: [
      ['locking', 'to lock', 'locked'],
      ['to lock', 'locking', 'lock'],
      ['to buy', 'buying', 'buy'],
      ['buying', 'to buy', 'buy'],
      ['to inform', 'informing', 'inform'],
      ['spending', 'to spend', 'spend'],
      ['painting', 'to paint', 'painted'],
      ['to paint', 'painting', 'paint'],
      ['to open', 'opening', 'open'],
      ['adding', 'to add', 'add']
    ][i],
    correctAnswer: [
      'locking',
      'to lock',
      'to buy',
      'buying',
      'to inform',
      'spending',
      'painting',
      'to paint',
      'to open',
      'adding'
    ][i],
    explanation: 'Correct use of gerund vs infinitive based on context.',
    points: 1
  }))
};

export const C1_U8_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Perfect & Passive Infinitives',
  explanation: 'Using complex infinitive forms to express time and voice.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'He seems ___ finished the report.',
      'I hope ___ invited to the party.',
      'She claimed ___ seen the movie already.',
      'The car appears ___ been stolen.',
      'I\'d like ___ told the truth.',
      'He pretended ___ been sleeping.',
      'The documents need ___ signed.',
      'I expect ___ informed of any changes.',
      'She was lucky ___ found her wallet.',
      'They were sorry ___ missed the flight.'
    ][i],
    correctAnswer: [
      'to have',
      'to be',
      'to have',
      'to have',
      'to be',
      'to have',
      'to be',
      'to be',
      'to have',
      'to have'
    ][i],
    explanation: 'Correct complex infinitive form.',
    points: 1
  }))
};

export const C1_U8_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Verbs + Prepositions + Gerunds',
  explanation: 'Verbs that require a specific preposition followed by a gerund.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'He apologized ___ being late.',
      'They insisted ___ paying for dinner.',
      'She succeeded ___ passing the exam.',
      'I am thinking ___ moving to London.',
      'He complained ___ having too much work.',
      'They dream ___ winning the lottery.',
      'I object ___ being treated like a child.',
      'She thanked me ___ helping her.',
      'He is used ___ working late.',
      'We look forward ___ meeting you.'
    ][i],
    options: [
      ['for', 'of', 'to'],
      ['on', 'in', 'at'],
      ['in', 'on', 'at'],
      ['of', 'on', 'about'],
      ['about', 'of', 'for'],
      ['of', 'about', 'on'],
      ['to', 'for', 'at'],
      ['for', 'of', 'with'],
      ['to', 'at', 'with'],
      ['to', 'for', 'at']
    ][i],
    correctAnswer: [
      'for',
      'on',
      'in',
      'of',
      'about',
      'of',
      'to',
      'for',
      'to',
      'to'
    ][i],
    explanation: 'Correct preposition + gerund combination.',
    points: 1
  }))
};

export const unit8: Lesson = createC1Unit(
  'c1-u8',
  'Gerunds & Infinitives: Advanced',
  'Deep dive into complex patterns with gerunds and infinitives, including changes in meaning.',
  ['Master subtle differences between gerunds and infinitives', 'Use perfect and passive infinitive forms', 'Correctly use verbs followed by prepositions and gerunds'],
  [
    C1_U8_BLOCK1, C1_U8_BLOCK2, C1_U8_BLOCK3,
    C1_U8_BLOCK1, C1_U8_BLOCK2, C1_U8_BLOCK3,
    C1_U8_BLOCK1, C1_U8_BLOCK2, C1_U8_BLOCK3, C1_U8_BLOCK1
  ]
);
