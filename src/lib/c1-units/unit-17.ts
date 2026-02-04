import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 17;

export const C1_U17_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Future in the Past Structures',
  grammarPoint: 'Future in the Past',
  explanation: 'Using "was going to", "was to", "was about to", "would" to describe past perspectives on the future.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'I ___ going to call you, but I forgot.',
      'The meeting ___ to take place yesterday.',
      'They ___ about to leave when it rained.',
      'He knew he ___ regret his decision.',
      'We ___ to have finished by now.',
      'Little did she know she ___ win.',
      'I ___ just starting when you arrived.',
      'The event ___ scheduled for Friday.',
      'I ___ going to tell him the truth.',
      'They ___ to meet at the station.'
    ][i],
    correctAnswer: [
      'was',
      'was',
      'were',
      'would',
      'were',
      'would',
      'was',
      'was',
      'was',
      'were'
    ][i],
    explanation: 'Correct future in the past form.',
    points: 1
  }))
};

export const C1_U17_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Was to vs. Was going to',
  explanation: 'Distinguishing between formal arrangements and personal intentions in the past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'The treaty ___ be signed in Paris.',
      'I ___ buy a new car, but I changed my mind.',
      'The king ___ visit the city next month.',
      'They ___ stay for dinner, but they left.',
      'The project ___ be completed in 2020.',
      'I ___ go to the gym, but I was tired.',
      'The meeting ___ held behind closed doors.',
      'She ___ start her new job yesterday.',
      'We ___ fly to Rome, but the flight was cancelled.',
      'The documents ___ be destroyed.'
    ][i],
    options: [
      ['was to', 'was going to', 'was'],
      ['was going to', 'was to', 'was'],
      ['was to', 'was going to', 'is to'],
      ['were going to', 'were to', 'were'],
      ['was to', 'was going to', 'is to'],
      ['was going to', 'was to', 'was'],
      ['was to be', 'was going to be', 'is to be'],
      ['was to', 'was going to', 'was'],
      ['were going to', 'were to', 'were'],
      ['were to', 'were going to', 'were']
    ][i],
    correctAnswer: [
      'was to',
      'was going to',
      'was to',
      'were going to',
      'was to',
      'was going to',
      'was to be',
      'was going to',
      'were going to',
      'were to'
    ][i],
    explanation: 'Correct choice based on formality and context.',
    points: 1
  }))
};

export const C1_U17_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Narrative Future in the Past',
  explanation: 'Using "would" and other structures in storytelling to describe what lay ahead.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'He knew it ___ be a long night.',
      'She ___ soon realize her mistake.',
      'They ___ never meet again.',
      'It ___ be several years before they returned.',
      'He ___ go on to become a great leader.',
      'Little did they know what ___ happen next.',
      'The worst ___ yet to come.',
      'It ___ changed everything.',
      'She ___ never forget that day.',
      'They ___ regret their actions.'
    ][i],
    correctAnswer: [
      'would',
      'would',
      'would',
      'was to',
      'was to',
      'would',
      'was',
      'would',
      'would',
      'would'
    ][i],
    explanation: 'Correct narrative future in the past structure.',
    points: 1
  }))
};

export const unit17: Lesson = createC1Unit(
  'c1-u17',
  'Future in the Past',
  'Describing actions that were planned or expected at a point in the past.',
  ['Master "was to" vs "was going to"', 'Use "would" for narrative future in the past', 'Apply future in the past structures in professional reporting'],
  [
    C1_U17_BLOCK1, C1_U17_BLOCK2, C1_U17_BLOCK3,
    C1_U17_BLOCK1, C1_U17_BLOCK2, C1_U17_BLOCK3,
    C1_U17_BLOCK1, C1_U17_BLOCK2, C1_U17_BLOCK3, C1_U17_BLOCK1
  ]
);
