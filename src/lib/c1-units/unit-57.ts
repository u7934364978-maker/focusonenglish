import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 57;

export const C1_U57_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Space Exploration Terminology',
  explanation: 'Advanced terms for discussing space missions and astronomical discoveries.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ of the new telescope was successful. (launch)',
      'We are looking for signs of ___ life. (extra)',
      'The ___ mission will explore the outer planets. (voyage)',
      'Space ___ is a major challenge for missions. (debris)',
      'The ___ of Mars is a primary goal. (colonization)',
      '___ bodies include planets, stars, and moons. (celestial)',
      'The ___ of gravity is weaker on the Moon. (pull)',
      '___ rays can be harmful to astronauts. (cosmic)',
      'The ___ of the universe is vast. (expanse)',
      '___ physics helps us understand the stars. (astro)'
    ][i],
    correctAnswer: [
      'launch',
      'extraterrestrial',
      'voyager',
      'debris',
      'colonization',
      'Celestial',
      'pull',
      'Cosmic',
      'expanse',
      'Astrophysics'
    ][i],
    explanation: 'Correct space exploration terminology.',
    points: 1
  }))
};

export const C1_U57_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Astrobiology & Cosmic Phenomena',
  explanation: 'Identifying and defining concepts related to the search for life and space science.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "astrobiology"?',
      'What is an "exoplanet"?',
      'What is the "Goldilocks zone"?',
      'What is "terraforming"?',
      'What is a "supernova"?',
      'What is "dark matter"?',
      'What is a "black hole"?',
      'What is "cosmology"?',
      'What is "orbital mechanics"?',
      'What is a "nebula"?'
    ][i],
    options: [
      ['Study of life in the universe', 'Study of stars', 'Study of rocks'],
      ['Planet orbiting a star outside our solar system', 'A planet in our system', 'A moon'],
      ['Habitable zone around a star', 'A zone for bears', 'A hot zone'],
      ['Modifying a planet to make it Earth-like', 'Painting a planet', 'Building a wall'],
      ['Explosion of a massive star', 'A small star', 'A new planet'],
      ['Unseen matter that makes up most of the universe', 'Normal dirt', 'A type of gas'],
      ['Region of space with immense gravitational pull', 'A literal hole', 'A dark spot'],
      ['Study of the origin and evolution of the universe', 'Study of planets', 'Study of moons'],
      ['Study of the motions of objects in space', 'Fixing cars in space', 'A type of engine'],
      ['Giant cloud of gas and dust in space', 'A storm on Earth', 'A type of star']
    ][i],
    correctAnswer: [
      'Study of life in the universe',
      'Planet orbiting a star outside our solar system',
      'Habitable zone around a star',
      'Modifying a planet to make it Earth-like',
      'Explosion of a massive star',
      'Unseen matter that makes up most of the universe',
      'Region of space with immense gravitational pull',
      'Study of the origin and evolution of the universe',
      'Study of the motions of objects in space',
      'Giant cloud of gas and dust in space'
    ][i],
    explanation: 'Correct definition of astrobiology or cosmic phenomenon concept.',
    points: 1
  }))
};

export const C1_U57_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Modal Verbs for Speculation & Possibility',
  explanation: 'Using modal verbs to speculate about space discoveries and the existence of extraterrestrial life.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'There ___ be life on other planets.',
      'The mission ___ have found water.',
      'It ___ be impossible to reach other stars.',
      'We ___ discover more exoplanets soon.',
      'They ___ have underestimated the risks.',
      'The results ___ indicate signs of life.',
      'We ___ not be alone in the universe.',
      'The telescope ___ reveal new insights.',
      'It ___ have been a celestial anomaly.',
      'We ___ find the answers in our lifetime.'
    ][i],
    options: [
      ['might', 'do', 'are'],
      ['could', 'should', 'must'],
      ['may', 'can', 'is'],
      ['will', 'do', 'are'],
      ['must', 'can', 'are'],
      ['could', 'should', 'must'],
      ['might', 'are', 'do'],
      ['may', 'can', 'is'],
      ['could', 'should', 'must'],
      ['may', 'can', 'is']
    ][i],
    correctAnswer: [
      'might',
      'could',
      'may',
      'will',
      'must',
      'could',
      'might',
      'may',
      'could',
      'may'
    ][i],
    explanation: 'Correct use of modal verbs for speculation and possibility.',
    points: 1
  }))
};

export const unit57: Lesson = createC1Unit(
  'c1-u57',
  'Space Exploration & Astrobiology',
  'Advanced vocabulary and grammar for discussing space missions, the search for life, and cosmic phenomena using modal verbs for speculation.',
  ['Use precise terminology for space exploration', 'Identify and define key concepts in astrobiology and cosmology', 'Apply modal verbs for speculation about scientific discoveries'],
  [
    C1_U57_BLOCK1, C1_U57_BLOCK2, C1_U57_BLOCK3,
    C1_U57_BLOCK1, C1_U57_BLOCK2, C1_U57_BLOCK3,
    C1_U57_BLOCK1, C1_U57_BLOCK2, C1_U57_BLOCK3, C1_U57_BLOCK1
  ]
);
