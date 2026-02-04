import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 49;

export const C1_U49_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Psychological Vocabulary',
  explanation: 'Advanced terms for discussing psychology, mental processes, and behavior.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      '___ is the study of the mind. (psychology)',
      'The ___ of the patient is improving. (mental)',
      'He is a ___ by profession. (psychiatry)',
      'The trauma had a profound ___ on her. (impact)',
      'She is suffering from chronic ___ . (anxious)',
      'The ___ of the study were quite revealing. (find)',
      'We need to understand the ___ of addiction. (mechanism)',
      '___ therapy can be very effective. (cognitive)',
      'He has a ___ to overthink things. (tend)',
      'The ___ of personality is complex. (develop)'
    ][i],
    correctAnswer: [
      'Psychology',
      'mentality',
      'psychiatrist',
      'impact',
      'anxiety',
      'findings',
      'mechanisms',
      'Cognitive',
      'tendency',
      'development'
    ][i],
    explanation: 'Correct psychological terminology.',
    points: 1
  }))
};

export const C1_U49_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Behavioral Concepts & Theories',
  explanation: 'Identifying and defining concepts related to human behavior and psychological theories.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "cognitive dissonance"?',
      'What is "neuroplasticity"?',
      'What is "emotional intelligence"?',
      'What is "the placebo effect"?',
      'What is "subconscious"?',
      'What is "classical conditioning"?',
      'What is "nature vs nurture"?',
      'What is "resilience" in psychology?',
      'What is "empathy"?',
      'What is "self-actualization"?'
    ][i],
    options: [
      ['Inconsistency between beliefs and actions', 'Hearing loud noises', 'A type of dance'],
      ['Brain\'s ability to reorganize itself', 'Plastic in the brain', 'A hard skull'],
      ['Ability to understand and manage emotions', 'Being very smart', 'Working fast'],
      ['Improvement from a fake treatment', 'A type of drug', 'A fast car'],
      ['Part of the mind not currently in focus', 'Under a boat', 'A quiet person'],
      ['Learning through association', 'Going to school', 'Physical exercise'],
      ['Debate over influence of biology vs environment', 'Gardening', 'A type of farm'],
      ['Ability to recover from adversity', 'Being strong', 'Living a long life'],
      ['Ability to understand another\'s feelings', 'Sympathy', 'Being nice'],
      ['Realization of one\'s full potential', 'Buying a house', 'Getting a job']
    ][i],
    correctAnswer: [
      'Inconsistency between beliefs and actions',
      'Brain\'s ability to reorganize itself',
      'Ability to understand and manage emotions',
      'Improvement from a fake treatment',
      'Part of the mind not currently in focus',
      'Learning through association',
      'Debate over influence of biology vs environment',
      'Ability to recover from adversity',
      'Ability to understand another\'s feelings',
      'Realization of one\'s full potential'
    ][i],
    explanation: 'Correct definition of psychological concept.',
    points: 1
  }))
};

export const C1_U49_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Conditional Sentences for Behavioral Outcomes',
  explanation: 'Using complex conditional structures to discuss hypothetical psychological scenarios and outcomes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'If he ___ more support, he might have recovered faster.',
      'Provided that she ___ regularly, her anxiety decreases.',
      'Had we ___ earlier, we could have prevented it.',
      'If they ___ to treatment, the prognosis is good.',
      'Unless he ___ the issue, it will persist.',
      'If you ___ to listen, you can learn a lot.',
      'Supposing we ___ the variables, what would happen?',
      'If she ___ different, she would have reacted differently.',
      'Should you ___ any symptoms, contact a doctor.',
      'If I ___ in your position, I would seek help.'
    ][i],
    options: [
      ['had had', 'has', 'had'],
      ['exercises', 'exercise', 'exercised'],
      ['intervened', 'intervene', 'intervening'],
      ['respond', 'responds', 'responded'],
      ['addresses', 'address', 'addressed'],
      ['were', 'are', 'is'],
      ['changed', 'change', 'changing'],
      ['were', 'was', 'is'],
      ['notice', 'notices', 'noticed'],
      ['were', 'was', 'am']
    ][i],
    correctAnswer: [
      'had had',
      'exercises',
      'intervened',
      'respond',
      'addresses',
      'were',
      'changed',
      'were',
      'notice',
      'were'
    ][i],
    explanation: 'Correct use of complex conditional structures.',
    points: 1
  }))
};

export const unit49: Lesson = createC1Unit(
  'c1-u49',
  'Psychology & Human Behavior',
  'Advanced vocabulary and grammar for discussing psychological theories, human behavior, and mental health.',
  ['Use precise psychological and behavioral terminology', 'Identify and define key psychological concepts and theories', 'Apply complex conditional structures to discuss behavioral outcomes'],
  [
    C1_U49_BLOCK1, C1_U49_BLOCK2, C1_U49_BLOCK3,
    C1_U49_BLOCK1, C1_U49_BLOCK2, C1_U49_BLOCK3,
    C1_U49_BLOCK1, C1_U49_BLOCK2, C1_U49_BLOCK3, C1_U49_BLOCK1
  ]
);
