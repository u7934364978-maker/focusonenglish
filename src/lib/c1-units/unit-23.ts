import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 23;

export const C1_U23_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Humor & Sarcasm Terms',
  explanation: 'Vocabulary for describing types of humor and sarcastic remarks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'He has a very ___ sense of humor. (dry)',
      'That was a ___ remark. (sarcasm)',
      'She is known for her ___ wit. (sharp)',
      'It was a ___ comedy. (slap)',
      'I love ___ humor. (black)',
      'He made a ___ comment about the food. (wry)',
      'That joke was quite ___ . (pun)',
      'She has a ___ sense of humor. (quirk)',
      'The movie was ___ . (hilarious)',
      'I didn\'t get the ___ . (irony)'
    ][i],
    correctAnswer: [
      'dry',
      'sarcastic',
      'sharp',
      'slapstick',
      'black',
      'wry',
      'punny',
      'quirky',
      'hilarious',
      'irony'
    ][i],
    explanation: 'Correct vocabulary for describing humor.',
    points: 1
  }))
};

export const C1_U23_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Types of Humor',
  explanation: 'Identifying different styles of humor and comedic devices.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "slapstick"?',
      'What is a "pun"?',
      'What is "satire"?',
      'What is "deadpan"?',
      'What is "dark humor"?',
      'What is an "understatement"?',
      'What is "self-deprecating"?',
      'What is a "one-liner"?',
      'What is "irony"?',
      'What is "sarcasm"?'
    ][i],
    options: [
      ['Physical comedy', 'Verbal comedy', 'A type of movie'],
      ['A play on words', 'A serious comment', 'A type of animal'],
      ['Humor used for social critique', 'A happy story', 'A scary movie'],
      ['Humorous delivery without emotion', 'A dead person', 'A flat joke'],
      ['Humor about taboo subjects', 'Humor in the dark', 'A sad joke'],
      ['Making something seem less important', 'Speaking quietly', 'A small comment'],
      ['Making fun of oneself', 'Making fun of others', 'Being humble'],
      ['A short joke', 'A long story', 'A drawing'],
      ['Contrast between expectation and reality', 'A coincidence', 'A lie'],
      ['Use of irony to mock or convey contempt', 'A type of food', 'A loud laugh']
    ][i],
    correctAnswer: [
      'Physical comedy',
      'A play on words',
      'Humor used for social critique',
      'Humorous delivery without emotion',
      'Humor about taboo subjects',
      'Making something seem less important',
      'Making fun of oneself',
      'A short joke',
      'Contrast between expectation and reality',
      'Use of irony to mock or convey contempt'
    ][i],
    explanation: 'Correct definition of humor types.',
    points: 1
  }))
};

export const C1_U23_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Identifying Sarcasm & Irony',
  explanation: 'Discerning the intended meaning behind ironic or sarcastic statements.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      '"Great weather, isn\'t it?" (during a storm)',
      '"Oh, brilliant! I just lost my keys."',
      '"You\'re so helpful." (to someone doing nothing)',
      '"I love working on weekends." (complaining)',
      '"Nice one!" (after someone drops something)',
      '"Of course, because I have nothing better to do."',
      '"Wow, you\'re early!" (to someone 30 mins late)',
      '"I couldn\'t care less." (often used sarcastically)',
      '"Thanks for the heads up." (when told too late)',
      '"Another day in paradise." (in a stressful office)'
    ][i],
    options: [
      ['Sarcasm', 'Sincerity', 'Literal'],
      ['Irony', 'Happiness', 'Exclamation'],
      ['Sarcasm', 'Praise', 'Literal'],
      ['Sarcasm', 'Joy', 'Literal'],
      ['Sarcasm', 'Compliment', 'Literal'],
      ['Sarcasm', 'Willingness', 'Literal'],
      ['Sarcasm', 'Punctuality', 'Literal'],
      ['Indifference', 'Care', 'Sarcasm'],
      ['Sarcasm', 'Gratitude', 'Literal'],
      ['Irony/Sarcasm', 'Vacation', 'Literal']
    ][i],
    correctAnswer: [
      'Sarcasm',
      'Irony',
      'Sarcasm',
      'Sarcasm',
      'Sarcasm',
      'Sarcasm',
      'Sarcasm',
      'Sarcasm',
      'Sarcasm',
      'Irony/Sarcasm'
    ][i],
    explanation: 'Correct identification of sarcasm or irony.',
    points: 1
  }))
};

export const unit23: Lesson = createC1Unit(
  'c1-u23',
  'Humor, Irony & Sarcasm in English',
  'Understanding the nuances of English humor, sarcasm, and irony.',
  ['Identify different types of English humor', 'Recognize sarcasm and irony in context', 'Use humor-related vocabulary correctly'],
  [
    C1_U23_BLOCK1, C1_U23_BLOCK2, C1_U23_BLOCK3,
    C1_U23_BLOCK1, C1_U23_BLOCK2, C1_U23_BLOCK3,
    C1_U23_BLOCK1, C1_U23_BLOCK2, C1_U23_BLOCK3, C1_U23_BLOCK1
  ]
);
