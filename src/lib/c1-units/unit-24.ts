import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 24;

export const C1_U24_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Nuanced Emotions',
  explanation: 'Advanced adjectives for precise expression of feelings.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'I was absolutely ___ when I heard the news. (devastate)',
      'She felt ___ after the long journey. (exhilarate)',
      'He was ___ by the lack of progress. (exasperate)',
      'I\'m a bit ___ about the future. (apprehend)',
      'They were ___ with joy. (ecstatic)',
      'She felt ___ after the argument. (subdue)',
      'He was ___ by the complicated instructions. (bewilder)',
      'I\'m quite ___ about the outcome. (optimistic)',
      'She was ___ when she saw the puppy. (overjoy)',
      'He felt ___ in the unfamiliar city. (disorient)'
    ][i],
    correctAnswer: [
      'devastated',
      'exhilarated',
      'exasperated',
      'apprehensive',
      'ecstatic',
      'subdued',
      'bewildered',
      'optimistic',
      'overjoyed',
      'disoriented'
    ][i],
    explanation: 'Correct advanced adjective for emotions.',
    points: 1
  }))
};

export const C1_U24_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Emotional Idioms',
  explanation: 'Idiomatic expressions for expressing feelings.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What does "on cloud nine" mean?',
      'What does "down in the dumps" mean?',
      'What does "over the moon" mean?',
      'What does "at the end of one\'s tether" mean?',
      'What does "beside oneself" mean?',
      'What does "shaken up" mean?',
      'What does "bottle up" mean?',
      'What does "get a grip" mean?',
      'What does "fly off the handle" mean?',
      'What does "keep a stiff upper lip" mean?'
    ][i],
    options: [
      ['Very happy', 'Very high', 'Lost'],
      ['Sad/depressed', 'In a hole', 'Dirty'],
      ['Extremely happy', 'In space', 'A astronaut'],
      ['No patience left', 'Holding a rope', 'Tired'],
      ['Extremely upset/emotional', 'Next to someone', 'Multiple people'],
      ['Disturbed/upset', 'Moving', 'Mixing'],
      ['Hide emotions', 'Put in a bottle', 'Drink'],
      ['Control emotions', 'Hold something', 'Understand'],
      ['Lose temper', 'Fly away', 'Break a door'],
      ['Hide emotions/be brave', 'Wear lipstick', 'Have a cold']
    ][i],
    correctAnswer: [
      'Very happy',
      'Sad/depressed',
      'Extremely happy',
      'No patience left',
      'Extremely upset/emotional',
      'Disturbed/upset',
      'Hide emotions',
      'Control emotions',
      'Lose temper',
      'Hide emotions/be brave'
    ][i],
    explanation: 'Correct definition of emotional idioms.',
    points: 1
  }))
};

export const C1_U24_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Emphasis for Emotions',
  explanation: 'Using intensifiers and structures to emphasize feelings.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'I was ___ disappointed.',
      'It was ___ terrifying.',
      'I\'m ___ sorry.',
      'That is ___ ridiculous.',
      'I was ___ shocked.',
      'What ___ me most was her attitude.',
      'It ___ was a great experience.',
      'I ___ appreciate your help.',
      'I\'m ___ grateful.',
      'It was ___ amazing.'
    ][i],
    options: [
      ['bitterly', 'highly', 'totally'],
      ['utterly', 'very', 'a bit'],
      ['terribly', 'good', 'fast'],
      ['perfectly', 'utterly', 'truly'],
      ['deeply', 'long', 'wide'],
      ['upset', 'upsetting', 'upsets'],
      ['genuinely', 'genuine', 'genuineness'],
      ['truly', 'true', 'truth'],
      ['immensely', 'big', 'large'],
      ['simply', 'simple', 'simplification']
    ][i],
    correctAnswer: [
      'bitterly',
      'utterly',
      'terribly',
      'utterly',
      'deeply',
      'upsets',
      'genuinely',
      'truly',
      'immensely',
      'simply'
    ][i],
    explanation: 'Correct use of emphasis and intensifiers.',
    points: 1
  }))
};

export const unit24: Lesson = createC1Unit(
  'c1-u24',
  'Expressing Feelings & Nuanced Emotions',
  'Refining the ability to express complex emotions with precision and emphasis.',
  ['Use advanced adjectives for nuanced emotions', 'Apply emotional idioms correctly', 'Use intensifiers and emphatic structures to express feelings'],
  [
    C1_U24_BLOCK1, C1_U24_BLOCK2, C1_U24_BLOCK3,
    C1_U24_BLOCK1, C1_U24_BLOCK2, C1_U24_BLOCK3,
    C1_U24_BLOCK1, C1_U24_BLOCK2, C1_U24_BLOCK3, C1_U24_BLOCK1
  ]
);
