import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 46;

export const C1_U46_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Architectural Terminology',
  explanation: 'Advanced terms for discussing building design, styles, and structural elements.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The building is a masterpiece of ___ . (architecture)',
      'The ___ of the cathedral is stunning. (facade)',
      '___ design focuses on the relationship between buildings and nature. (organic)',
      'The skyscraper has a glass ___ . (exterior)',
      'The ___ of the structure is very modern. (geometry)',
      'He is a follower of the ___ style. (brutal)',
      'The ___ was designed by a famous architect. (blueprint)',
      'The bridge is a marvel of ___ . (engineer)',
      'The ___ of the interior is very spacious. (layout)',
      'The city is known for its ___ heritage. (architect)'
    ][i],
    correctAnswer: [
      'architecture',
      'facade',
      'Organic',
      'exterior',
      'geometry',
      'brutalist',
      'blueprint',
      'engineering',
      'layout',
      'architectural'
    ][i],
    explanation: 'Correct architectural terminology.',
    points: 1
  }))
};

export const C1_U46_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Urban Aesthetics & Design',
  explanation: 'Identifying and defining concepts related to the visual and functional aspects of urban design.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "minimalism" in architecture?',
      'What is "postmodernism" in architecture?',
      'What is "sustainability" in building design?',
      'What is "urban density"?',
      'What is "mixed-use" architecture?',
      'What is "renovation"?',
      'What is "landmark"?',
      'What is "skyline"?',
      'What is "infrastructure"?',
      'What is "landscape architecture"?'
    ][i],
    options: [
      ['Focus on simplicity and essential elements', 'Using lots of colors', 'Old style'],
      ['Reaction against modernism, often playful', 'Simple and clean', 'A type of paint'],
      ['Design that minimizes environmental impact', 'Expensive design', 'Large buildings'],
      ['Number of people in a given urban area', 'Weight of a building', 'Height of a city'],
      ['Combining residential and commercial uses', 'Only houses', 'Only shops'],
      ['Action of improving a building', 'Building a new one', 'Destroying one'],
      ['Object or feature that is easily recognized', 'A type of park', 'A map'],
      ['Outline of a city against the sky', 'A tall building', 'A map'],
      ['Basic physical and organizational structures', 'The furniture', 'The paint'],
      ['Design of outdoor public areas', 'Designing houses', 'Gardening']
    ][i],
    correctAnswer: [
      'Focus on simplicity and essential elements',
      'Reaction against modernism, often playful',
      'Design that minimizes environmental impact',
      'Number of people in a given urban area',
      'Combining residential and commercial uses',
      'Action of improving a building',
      'Object or feature that is easily recognized',
      'Outline of a city against the sky',
      'Basic physical and organizational structures',
      'Design of outdoor public areas'
    ][i],
    explanation: 'Correct definition of architectural or urban concept.',
    points: 1
  }))
};

export const C1_U46_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Relative Clauses for Detailed Description',
  explanation: 'Using defining and non-defining relative clauses to provide precise information about buildings and places.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'The building, ___ was built in 1920, is being restored.',
      'The architect ___ designed this is world-famous.',
      'The city, ___ I grew up, is very different now.',
      'The materials ___ were used are all sustainable.',
      'The style, ___ is very modern, is quite controversial.',
      'The tower, ___ top is hidden in the clouds, is very tall.',
      'The area ___ the museum is located is very busy.',
      'The house ___ she lives in is very old.',
      'The window, ___ was broken, has been fixed.',
      'The square ___ we met is now a park.'
    ][i],
    options: [
      ['which', 'that', 'who'],
      ['who', 'which', 'whom'],
      ['where', 'which', 'that'],
      ['that', 'which', 'who'],
      ['which', 'that', 'who'],
      ['whose', 'which', 'who'],
      ['where', 'which', 'that'],
      ['which', 'where', 'that'],
      ['which', 'that', 'who'],
      ['where', 'which', 'that']
    ][i],
    correctAnswer: [
      'which',
      'who',
      'where',
      'that',
      'which',
      'whose',
      'where',
      'which',
      'which',
      'where'
    ][i],
    explanation: 'Correct use of relative clauses.',
    points: 1
  }))
};

export const unit46: Lesson = createC1Unit(
  'c1-u46',
  'Architecture & Urban Aesthetics',
  'Advanced vocabulary and grammar for discussing building design, architectural styles, and urban aesthetics.',
  ['Use precise architectural and structural terminology', 'Identify and define key concepts in urban design', 'Apply relative clauses for detailed descriptions of buildings and places'],
  [
    C1_U46_BLOCK1, C1_U46_BLOCK2, C1_U46_BLOCK3,
    C1_U46_BLOCK1, C1_U46_BLOCK2, C1_U46_BLOCK3,
    C1_U46_BLOCK1, C1_U46_BLOCK2, C1_U46_BLOCK3, C1_U46_BLOCK1
  ]
);
