import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 39;

export const C1_U39_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Healthcare Vocabulary',
  explanation: 'Advanced terms for discussing medicine, public health, and hospitals.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The patient is in a ___ condition. (critic)',
      'We need to prevent the ___ of the virus. (transmit)',
      'He received a ___ for the flu. (vaccinate)',
      'The disease is highly ___ . (contagion)',
      'She works in the ___ care unit. (intensive)',
      'The ___ of the disease is uncertain. (prognose)',
      'We need to increase public ___ . (aware)',
      'The drug has several ___ effects. (side)',
      'He is ___ from surgery. (recover)',
      'The health system is under ___ . (strain)'
    ][i],
    correctAnswer: [
      'critical',
      'transmission',
      'vaccination',
      'contagious',
      'intensive',
      'prognosis',
      'awareness',
      'side',
      'recovering',
      'strain'
    ][i],
    explanation: 'Correct healthcare terminology.',
    points: 1
  }))
};

export const C1_U39_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Public Health & Pandemics',
  explanation: 'Identifying and defining concepts related to global health crises and public health responses.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "pandemic"?',
      'What is an "epidemic"?',
      'What is "herd immunity"?',
      'What is "quarantine"?',
      'What is "social distancing"?',
      'What is "contact tracing"?',
      'What is "telemedicine"?',
      'What is "preventative medicine"?',
      'What is a "pathogen"?',
      'What is "universal healthcare"?'
    ][i],
    options: [
      ['Global outbreak of a disease', 'Local outbreak', 'A type of medicine'],
      ['Widespread occurrence in a community', 'Global outbreak', 'A new virus'],
      ['Resistance to a disease within a population', 'A large farm', 'A type of group'],
      ['Isolating people who may have been exposed', 'Going on vacation', 'Staying home'],
      ['Maintaining physical space between people', 'Being anti-social', 'Walking outside'],
      ['Identifying people exposed to an infected person', 'Looking for someone', 'Writing a list'],
      ['Healthcare provided via technology', 'Medicine by phone', 'Buying drugs online'],
      ['Focus on preventing disease', 'Old medicine', 'Strong drugs'],
      ['Agent that causes disease', 'A type of doctor', 'A clean room'],
      ['Health coverage for all citizens', 'Free hospitals', 'Private insurance']
    ][i],
    correctAnswer: [
      'Global outbreak of a disease',
      'Widespread occurrence in a community',
      'Resistance to a disease within a population',
      'Isolating people who may have been exposed',
      'Maintaining physical space between people',
      'Identifying people exposed to an infected person',
      'Healthcare provided via technology',
      'Focus on preventing disease',
      'Agent that causes disease',
      'Health coverage for all citizens'
    ][i],
    explanation: 'Correct definition of public health concept.',
    points: 1
  }))
};

export const C1_U39_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Future Perfect & Future Continuous for Predictions',
  explanation: 'Using future tenses to make predictions about global health and recovery.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'By next year, they ___ a cure.',
      'We ___ from home for the foreseeable future.',
      'Scientists ___ new variants regularly.',
      'By 2030, the system ___ significantly.',
      'The virus ___ circulating for years.',
      'Will we ___ a normal life again soon?',
      'The economy ___ by the time this ends.',
      'We ___ with the consequences for decades.',
      'By the end of the month, the cases ___ .',
      'Research ___ at an accelerated pace.'
    ][i],
    options: [
      ['will have found', 'will find', 'will be finding'],
      ['will be working', 'will have worked', 'work'],
      ['will be monitoring', 'will monitor', 'monitor'],
      ['will have evolved', 'will evolve', 'evolving'],
      ['will be', 'will have been', 'is'],
      ['be living', 'have lived', 'live'],
      ['will have recovered', 'will recover', 'recovers'],
      ['will be dealing', 'will have dealt', 'deal'],
      ['will have peaked', 'will peak', 'peaking'],
      ['will be continuing', 'will continue', 'continues']
    ][i],
    correctAnswer: [
      'will have found',
      'will be working',
      'will be monitoring',
      'will have evolved',
      'will be',
      'be living',
      'will have recovered',
      'will be dealing',
      'will have peaked',
      'will be continuing'
    ][i],
    explanation: 'Correct use of future tenses for predictions.',
    points: 1
  }))
};

export const unit39: Lesson = createC1Unit(
  'c1-u39',
  'Healthcare & Global Pandemics',
  'Advanced vocabulary and grammar for discussing healthcare systems, pandemics, and health-related predictions.',
  ['Use precise healthcare and public health terminology', 'Identify and define key pandemic-related concepts', 'Apply future perfect and future continuous for health predictions'],
  [
    C1_U39_BLOCK1, C1_U39_BLOCK2, C1_U39_BLOCK3,
    C1_U39_BLOCK1, C1_U39_BLOCK2, C1_U39_BLOCK3,
    C1_U39_BLOCK1, C1_U39_BLOCK2, C1_U39_BLOCK3, C1_U39_BLOCK1
  ]
);
