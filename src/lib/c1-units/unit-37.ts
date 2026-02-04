import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 37;

export const C1_U37_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Urban Planning Vocabulary',
  explanation: 'Advanced terms for discussing cities, planning, and urban development.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The city is experiencing rapid ___ . (urban)',
      'We need to improve the ___ . (infrastructure)',
      '___ areas are becoming overcrowded. (metropolis)',
      'There is a lot of ___ in the city center. (congest)',
      'We should focus on ___ development. (sustain)',
      '___ is the process of improving a neighborhood. (gentrify)',
      'The city has a lot of ___ . (amenity)',
      '___ transport is essential for commuters. (public)',
      'The ___ of the city is changing. (sky)',
      'We need more ___ spaces. (green)'
    ][i],
    correctAnswer: [
      'urbanization',
      'infrastructure',
      'Metropolitan',
      'congestion',
      'sustainable',
      'Gentrification',
      'amenities',
      'Public',
      'skyline',
      'green'
    ][i],
    explanation: 'Correct urban planning terminology.',
    points: 1
  }))
};

export const C1_U37_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Future City Concepts',
  explanation: 'Identifying and defining concepts related to smart cities and future urban living.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "smart city"?',
      'What is "urban sprawl"?',
      'What is "mixed-use development"?',
      'What is "transit-oriented development"?',
      'What is "walkability"?',
      'What is "affordable housing"?',
      'What is "urban renewal"?',
      'What is a "megacity"?',
      'What is "micro-living"?',
      'What is "biophilic design"?'
    ][i],
    options: [
      ['City using tech to improve services', 'A city with many schools', 'A clean city'],
      ['Uncontrolled expansion of urban areas', 'A type of park', 'Fast driving'],
      ['Blending residential, commercial, and cultural uses', 'Only houses', 'Only offices'],
      ['Development near public transport', 'Building roads', 'Flying cars'],
      ['How friendly an area is to walking', 'Running fast', 'Walking dogs'],
      ['Housing that is reasonably priced', 'Small houses', 'Free houses'],
      ['Improving older parts of a city', 'Building a new city', 'Moving away'],
      ['City with over 10 million people', 'A city on the moon', 'A small town'],
      ['Living in very small spaces', 'Living in a tent', 'Living with ants'],
      ['Incorporating nature into architecture', 'Painting with green', 'Gardening']
    ][i],
    correctAnswer: [
      'City using tech to improve services',
      'Uncontrolled expansion of urban areas',
      'Blending residential, commercial, and cultural uses',
      'Development near public transport',
      'How friendly an area is to walking',
      'Housing that is reasonably priced',
      'Improving older parts of a city',
      'City with over 10 million people',
      'Living in very small spaces',
      'Incorporating nature into architecture'
    ][i],
    explanation: 'Correct definition of urban concept.',
    points: 1
  }))
};

export const C1_U37_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Adverbial Clauses of Concession',
  explanation: 'Using linkers like "although", "despite", and "whereas" to show contrast in urban contexts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      '___ the congestion, people still drive.',
      '___ it is expensive, many live in the center.',
      'City life is fast, ___ country life is slow.',
      '___ the lack of space, the park is popular.',
      'They built more roads, ___ it didn\'t help.',
      '___ being small, the apartment is well-designed.',
      'The city is growing, ___ the economy is weak.',
      '___ what people say, the city is safe.',
      '___ the noise, I sleep well.',
      'He moved to the city ___ the high cost.'
    ][i],
    options: [
      ['Despite', 'Although', 'Even'],
      ['Although', 'Despite', 'However'],
      ['whereas', 'but', 'although'],
      ['Notwithstanding', 'Even', 'Though'],
      ['albeit', 'but', 'although'],
      ['Despite', 'Although', 'In spite'],
      ['even though', 'despite', 'whereas'],
      ['In spite of', 'Despite', 'Although'],
      ['In spite of', 'Although', 'Even'],
      ['notwithstanding', 'although', 'despite']
    ][i],
    correctAnswer: [
      'Despite',
      'Although',
      'whereas',
      'Notwithstanding',
      'albeit',
      'Despite',
      'even though',
      'In spite of',
      'In spite of',
      'notwithstanding'
    ][i],
    explanation: 'Correct use of adverbial clauses of concession.',
    points: 1
  }))
};

export const unit37: Lesson = createC1Unit(
  'c1-u37',
  'Urbanization & The Future of Cities',
  'Advanced vocabulary and grammar for discussing urban development, smart cities, and contrasted urban realities.',
  ['Use precise urban planning and development terminology', 'Identify and define key concepts for future cities', 'Apply adverbial clauses of concession to show contrast'],
  [
    C1_U37_BLOCK1, C1_U37_BLOCK2, C1_U37_BLOCK3,
    C1_U37_BLOCK1, C1_U37_BLOCK2, C1_U37_BLOCK3,
    C1_U37_BLOCK1, C1_U37_BLOCK2, C1_U37_BLOCK3, C1_U37_BLOCK1
  ]
);
