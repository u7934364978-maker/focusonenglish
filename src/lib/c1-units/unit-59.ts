import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 59;

export const C1_U59_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Biotechnology & Longevity Terminology',
  explanation: 'Advanced terms for discussing life extension, anti-aging, and biotechnological interventions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      '___ span refers to the length of time a person lives. (life)',
      '___ treatments aim to slow the aging process. (anti)',
      'The ___ of cells is a key part of aging. (senescence)',
      '___ medicine focuses on repairing or replacing tissues. (regen)',
      '___ editing can potentially eliminate hereditary diseases. (genome)',
      'The ___ of youth is a common metaphor in longevity. (fountain)',
      '___ enhancement could extend human life. (bio)',
      '___ therapies can rejuvenate aging skin. (cell)',
      'The ___ of death is a philosophical topic. (inevitability)',
      '___ engineering can create artificial organs. (tissue)'
    ][i],
    correctAnswer: [
      'Life',
      'anti-aging',
      'senescence',
      'Regenerative',
      'Genome',
      'fountain',
      'Biological',
      'Cellular',
      'inevitability',
      'Tissue'
    ][i],
    explanation: 'Correct biotechnology and longevity terminology.',
    points: 1
  }))
};

export const C1_U59_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Life Extension Concepts',
  explanation: 'Identifying and defining concepts related to longevity research and anti-aging.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "senolytic"?',
      'What is "telomere shortening"?',
      'What is "epigenetic clock"?',
      'What is "personalized medicine"?',
      'What is "cryonics"?',
      'What is "biohacking"?',
      'What is "gerontology"?',
      'What is "morbidity"?',
      'What is "healthspan"?',
      'What is "transhumanist" in longevity context?'
    ][i],
    options: [
      ['A drug that clears away senescent cells', 'A type of skin cream', 'A fast car'],
      ['Process linked to cellular aging', 'A short story', 'A type of string'],
      ['A way to measure biological age', 'A clock for a wall', 'A type of fruit'],
      ['Medical care tailored to individual genetics', 'A doctor you like', 'A type of pill'],
      ['Low-temperature preservation of humans', 'A type of ice cream', 'A winter sport'],
      ['Do-it-yourself biology aimed at self-improvement', 'A computer virus', 'A type of exercise'],
      ['Study of the biological aspects of aging', 'Study of plants', 'Study of rocks'],
      ['The state of being diseased or unhealthy', 'A type of bird', 'A sad movie'],
      ['Period of life spent in good health', 'A long road', 'A type of bridge'],
      ['Someone who believes in using tech to overcome death', 'A robot', 'A time traveler']
    ][i],
    correctAnswer: [
      'A drug that clears away senescent cells',
      'Process linked to cellular aging',
      'A way to measure biological age',
      'Medical care tailored to individual genetics',
      'Low-temperature preservation of humans',
      'Do-it-yourself biology aimed at self-improvement',
      'Study of the biological aspects of aging',
      'The state of being diseased or unhealthy',
      'Period of life spent in good health',
      'Someone who believes in using tech to overcome death'
    ][i],
    explanation: 'Correct definition of life extension or longevity concept.',
    points: 1
  }))
};

export const C1_U59_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Future in the Past for Unfulfilled Expectations',
  explanation: 'Using the "Future in the Past" structure to discuss ideas or expectations about longevity that have not yet been realized.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'We thought we ___ have a cure by now.',
      'They were ___ to release the treatment last year.',
      'It was ___ that life expectancy would double.',
      'I ___ hoping for a breakthrough.',
      'We ___ going to invest more in this research.',
      'It was ___ to be a revolutionary discovery.',
      'They ___ have started the trials months ago.',
      'We ___ expecting better results.',
      'It ___ have changed everything.',
      'I ___ sure they would succeed.'
    ][i],
    options: [
      ['would', 'will', 'do'],
      ['supposed', 'suppose', 'supposing'],
      ['expected', 'expect', 'expecting'],
      ['was', 'were', 'am'],
      ['were', 'was', 'are'],
      ['meant', 'mean', 'meaning'],
      ['should', 'could', 'must'],
      ['were', 'was', 'are'],
      ['would', 'will', 'did'],
      ['was', 'am', 'be']
    ][i],
    correctAnswer: [
      'would',
      'supposed',
      'expected',
      'was',
      'were',
      'meant',
      'should',
      'were',
      'would',
      'was'
    ][i],
    explanation: 'Correct use of future in the past to discuss unfulfilled expectations.',
    points: 1
  }))
};

export const unit59: Lesson = createC1Unit(
  'c1-u59',
  'Biotechnology & Longevity',
  'Advanced vocabulary and grammar for discussing anti-aging, life extension, and unfulfilled scientific expectations using the future in the past.',
  ['Use precise terminology for biotechnology and longevity', 'Identify and define key concepts in anti-aging research', 'Apply the future in the past structure to discuss unrealized expectations'],
  [
    C1_U59_BLOCK1, C1_U59_BLOCK2, C1_U59_BLOCK3,
    C1_U59_BLOCK1, C1_U59_BLOCK2, C1_U59_BLOCK3,
    C1_U59_BLOCK1, C1_U59_BLOCK2, C1_U59_BLOCK3, C1_U59_BLOCK1
  ]
);
