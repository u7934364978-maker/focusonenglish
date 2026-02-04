import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 51;

export const C1_U51_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Astrophysics & Exploration',
  explanation: 'Advanced terms for discussing space travel, celestial bodies, and the cosmos.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ of the universe is still a mystery. (expand)',
      'A ___ is a point of infinite density. (singular)',
      'We are searching for ___ life. (extra-terrestrial)',
      'The spacecraft entered the planet\'s ___ . (orbit)',
      '___ is the study of the origin of the universe. (cosmology)',
      'The ___ of the mission was a success. (launch)',
      'Scientists are looking for habitable ___ . (exoplanet)',
      'A ___ occurs when a star explodes. (supernova)',
      'Space ___ is a major concern for satellite safety. (debris)',
      'Interstellar travel remains ___ for now. (hypothetical)'
    ][i],
    correctAnswer: [
      'expansion',
      'singularity',
      'extraterrestrial',
      'orbit',
      'Cosmology',
      'launch',
      'exoplanets',
      'supernova',
      'debris',
      'hypothetical'
    ][i],
    explanation: 'Correct space exploration terminology.',
    points: 1
  }))
};

export const C1_U51_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Space Ethics & Future Concepts',
  explanation: 'Identifying and defining concepts related to the colonization of space and future technologies.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "terraforming"?',
      'What is "space tourism"?',
      'What does "multi-planetary" mean?',
      'What is "microgravity"?',
      'What is an "asteroid mining"?',
      'What is "astrology"?',
      'What is "light-year"?',
      'What is a "black hole"?',
      'What is "the Fermi Paradox"?',
      'What is "deep space exploration"?'
    ][i],
    options: [
      ['Transforming a planet to be like Earth', 'Mapping stars', 'Building a rocket'],
      ['Traveling to space for recreation', 'Moving to another planet', 'Living on the moon'],
      ['Existing on more than one planet', 'Living in a city', 'Traveling fast'],
      ['Condition in which people/objects appear weightless', 'Very heavy gravity', 'No air'],
      ['Extracting resources from asteroids', 'Digging on Earth', 'Looking for aliens'],
      ['Study of movements of celestial bodies for divination', 'Science of stars', 'A type of physics'],
      ['Distance light travels in one year', 'A measurement of time', 'A very fast speed'],
      ['Region of space where gravity prevents light from escaping', 'A dark planet', 'An empty room'],
      ['Conflict between lack of evidence and high probability of ET life', 'A math problem', 'A type of rocket'],
      ['Exploration of space beyond our moon', 'Exploration of oceans', 'Studying the sun']
    ][i],
    correctAnswer: [
      'Transforming a planet to be like Earth',
      'Traveling to space for recreation',
      'Existing on more than one planet',
      'Condition in which people/objects appear weightless',
      'Extracting resources from asteroids',
      'Study of movements of celestial bodies for divination',
      'Distance light travels in one year',
      'Region of space where gravity prevents light from escaping',
      'Conflict between lack of evidence and high probability of ET life',
      'Exploration of space beyond our moon'
    ][i],
    explanation: 'Correct definition of space exploration concept.',
    points: 1
  }))
};

export const C1_U51_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Future in the Past for Scientific Speculation',
  explanation: 'Using structures like "was going to", "was about to", or "would be" to describe past predictions and speculations about the future.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'They thought we ___ on Mars by 2020.',
      'The mission ___ launched when the error was found.',
      'Few imagined how difficult space travel ___ .',
      'It ___ a new era of exploration.',
      'We believed that technology ___ the solution.',
      'The spacecraft ___ land, but it crashed.',
      'Nobody knew then that a private company ___ first.',
      'It was a discovery that ___ change everything.',
      'They ___ start the countdown when the weather turned.',
      'We assumed that space ___ become affordable.'
    ][i],
    options: [
      ['would be living', 'will be living', 'are living'],
      ['was about to be', 'is about to be', 'about to'],
      ['would be', 'will be', 'is'],
      ['was to be', 'is to be', 'to be'],
      ['would provide', 'will provide', 'provide'],
      ['was going to', 'is going to', 'going to'],
      ['would succeed', 'will succeed', 'succeed'],
      ['would eventually', 'eventually will', 'eventually'],
      ['were just about to', 'are just about to', 'just about'],
      ['would soon', 'will soon', 'soon']
    ][i],
    correctAnswer: [
      'would be living',
      'was about to be',
      'would be',
      'was to be',
      'would provide',
      'was going to',
      'would succeed',
      'would eventually',
      'were just about to',
      'would soon'
    ][i],
    explanation: 'Correct use of the "future in the past" structure.',
    points: 1
  }))
};

export const unit51: Lesson = createC1Unit(
  'c1-u51',
  'Space Exploration & The New Frontier',
  'Advanced vocabulary and grammar for discussing astrophysics, space travel, and past speculations about the future.',
  ['Use precise terminology for astrophysics and space exploration', 'Identify and define key concepts in future space technology', 'Apply "future in the past" structures to discuss scientific speculations'],
  [
    C1_U51_BLOCK1, C1_U51_BLOCK2, C1_U51_BLOCK3,
    C1_U51_BLOCK1, C1_U51_BLOCK2, C1_U51_BLOCK3,
    C1_U51_BLOCK1, C1_U51_BLOCK2, C1_U51_BLOCK3, C1_U51_BLOCK1
  ]
);
