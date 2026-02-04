import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 54;

export const C1_U54_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Renewable Energy Vocabulary',
  explanation: 'Advanced terms for discussing solar, wind, and other clean energy sources.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      '___ energy is harnessed from the sun. (solar)',
      'We need to ___ our economy. (carbon)',
      '___ power is a major clean energy source. (wind)',
      'The ___ of fossil fuels is declining. (use)',
      '___ power comes from falling water. (hydro)',
      'We must invest in energy ___ . (storage)',
      '___ energy is heat from the earth. (geo)',
      'The ___ of the grid is essential. (modern)',
      '___ tech can help mitigate climate change. (clean)',
      'We should focus on ___ development. (sustain)'
    ][i],
    correctAnswer: [
      'Solar',
      'decarbonize',
      'Wind',
      'consumption',
      'Hydroelectric',
      'storage',
      'Geothermal',
      'modernization',
      'Clean',
      'sustainable'
    ][i],
    explanation: 'Correct renewable energy terminology.',
    points: 1
  }))
};

export const C1_U54_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Clean Tech Concepts',
  explanation: 'Identifying and defining concepts related to environmental technology and sustainability.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "carbon capture"?',
      'What is "green hydrogen"?',
      'What is "nuclear fusion"?',
      'What is "bioenergy"?',
      'What is a "smart grid"?',
      'What is "energy efficiency"?',
      'What is "circular economy"?',
      'What is "electric vehicle" (EV)?',
      'What is "zero-emission"?',
      'What is "sustainable aviation fuel" (SAF)?'
    ][i],
    options: [
      ['Capturing CO2 emissions from sources', 'Planting trees', 'Building a wall'],
      ['Hydrogen produced using renewable energy', 'Green paint', 'A type of gas'],
      ['Energy produced by fusing atomic nuclei', 'A big explosion', 'A type of battery'],
      ['Energy from organic matter', 'Energy from the sun', 'Energy from water'],
      ['Modernized electrical grid using digital tech', 'A clever person', 'A type of map'],
      ['Using less energy for the same service', 'Using no energy', 'Using cheap energy'],
      ['Economy aimed at eliminating waste', 'A round market', 'A type of money'],
      ['Vehicle powered by electricity', 'A fast car', 'A toy car'],
      ['Releasing no pollutants', 'Releasing very little', 'A clean room'],
      ['Biofuel used to power aircraft', 'Gas for cars', 'A type of cloud']
    ][i],
    correctAnswer: [
      'Capturing CO2 emissions from sources',
      'Hydrogen produced using renewable energy',
      'Energy produced by fusing atomic nuclei',
      'Energy from organic matter',
      'Modernized electrical grid using digital tech',
      'Using less energy for the same service',
      'Economy aimed at eliminating waste',
      'Vehicle powered by electricity',
      'Releasing no pollutants',
      'Biofuel used to power aircraft'
    ][i],
    explanation: 'Correct definition of clean tech concept.',
    points: 1
  }))
};

export const C1_U54_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Adverbs & Adverbial Phrases for Emphasis',
  explanation: 'Using advanced adverbs and phrases to emphasize points about environmental urgency and solutions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'We must ___ reduce emissions.',
      'It is ___ important to act now.',
      'The technology is ___ improving.',
      '___ , we need a new approach.',
      'The situation is ___ critical.',
      'We are ___ dependent on fossil fuels.',
      '___ speaking, the results are positive.',
      'We must ___ embrace clean energy.',
      'The change is ___ necessary.',
      '___ , we have a lot to do.'
    ][i],
    options: [
      ['drastically', 'drastic', 'drastically more'],
      ['crucially', 'crucial', 'crucialness'],
      ['steadily', 'steady', 'steadiness'],
      ['Undoubtedly', 'Doubtless', 'Doubt'],
      ['increasingly', 'increase', 'increased'],
      ['heavily', 'heavy', 'heaviness'],
      ['Broadly', 'Broad', 'Broaden'],
      ['wholeheartedly', 'whole', 'heart'],
      ['absolutely', 'absolute', 'absoluteness'],
      ['Frankly', 'Frank', 'Frankness']
    ][i],
    correctAnswer: [
      'drastically',
      'crucially',
      'steadily',
      'Undoubtedly',
      'increasingly',
      'heavily',
      'Broadly',
      'wholeheartedly',
      'absolutely',
      'Frankly'
    ][i],
    explanation: 'Correct use of emphatic adverbs and phrases.',
    points: 1
  }))
};

export const unit54: Lesson = createC1Unit(
  'c1-u54',
  'Renewable Energy & Clean Tech',
  'Advanced vocabulary and grammar for discussing clean energy, environmental technology, and emphasizing environmental urgency.',
  ['Use precise terminology for renewable energy and clean tech', 'Identify and define key environmental technology concepts', 'Apply emphatic adverbs and adverbial phrases in context'],
  [
    C1_U54_BLOCK1, C1_U54_BLOCK2, C1_U54_BLOCK3,
    C1_U54_BLOCK1, C1_U54_BLOCK2, C1_U54_BLOCK3,
    C1_U54_BLOCK1, C1_U54_BLOCK2, C1_U54_BLOCK3, C1_U54_BLOCK1
  ]
);
