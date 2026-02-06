import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 3;
const LEVEL = 'b1';

// SHARDS 1-2: Natural Sciences Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Biological Concepts',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is an "organism"?',
      'The process of "evolution" means:',
      'What is a "habitat"?',
      'A "species" is a group of organisms that:',
      'What is "photosynthesis"?',
      'The "ecosystem" includes:',
      'What does "extinct" mean?',
      'An "adaptation" is a trait that:',
      'What is "metabolism"?',
      'A "predator" is an animal that:'
    ][i],
    options: [
      ['A living thing', 'A type of rock', 'A musical instrument'],
      ['Gradual change over time', 'Sudden explosion', 'Staying the same'],
      ['The natural home of a plant or animal', 'A laboratory', 'A city park'],
      ['Can breed and produce fertile offspring', 'Look identical', 'Live in different continents'],
      ['Plants making food from light', 'Animals hunting', 'Water evaporating'],
      ['Living and non-living things in an area', 'Only animals', 'Only weather patterns'],
      ['No longer exists', 'Is very common', 'Lives in the ocean'],
      ['Helps an organism survive', 'Makes an organism weak', 'Is useless'],
      ['Chemical processes for life', 'A type of exercise', 'A part of the brain'],
      ['Hunts and eats other animals', 'Eats only plants', 'Lives in a cave']
    ][i],
    correctAnswer: [
      'A living thing', 'Gradual change over time', 'The natural home of a plant or animal',
      'Can breed and produce fertile offspring', 'Plants making food from light',
      'Living and non-living things in an area', 'No longer exists', 'Helps an organism survive',
      'Chemical processes for life', 'Hunts and eats other animals'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Environmental Science',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "pollution"?',
      'The "atmosphere" is:',
      'What is "biodiversity"?',
      'A "renewable" resource is:',
      'What is "conservation"?',
      'The "greenhouse effect" refers to:',
      'What is "sustainability"?',
      'A "climate" is:',
      'What is "erosion"?',
      'An "emission" is:'
    ][i],
    options: [
      ['Harmful substances in the environment', 'Clean air', 'Pure water'],
      ['The envelope of gases surrounding Earth', 'The bottom of the ocean', 'The core of the planet'],
      ['Variety of life in the world', 'One type of animal', 'A desert area'],
      ['Naturally replenished', 'Used once and gone', 'Very expensive'],
      ['Protecting natural resources', 'Destroying forests', 'Using more energy'],
      ['Trapping of heat in the atmosphere', 'A type of paint', 'Building more houses'],
      ['Meeting needs without compromising the future', 'Rapid consumption', 'Ending all production'],
      ['Long-term weather patterns', 'A rainy day', 'A sudden storm'],
      ['Wearing away of land', 'Building a mountain', 'Planting trees'],
      ['Discharge of gas or radiation', 'Taking in oxygen', 'A type of solid waste']
    ][i],
    correctAnswer: [
      'Harmful substances in the environment', 'The envelope of gases surrounding Earth',
      'Variety of life in the world', 'Naturally replenished', 'Protecting natural resources',
      'Trapping of heat in the atmosphere', 'Meeting needs without compromising the future',
      'Long-term weather patterns', 'Wearing away of land', 'Discharge of gas or radiation'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Conditional Sentences (Type 0 & 1)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Condition Question ${i+1}: If water reaches 100 degrees, it ____.`, options: ['boils', 'boiled', 'will boil'], correctAnswer: 'boils', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Modal Verbs of Probability', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Modal Question ${i+1}: It ____ rain tomorrow, but we aren't sure.`, options: ['might', 'must', 'should'], correctAnswer: 'might', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: Marine Biology', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What is the role of coral reefs?`, options: ['Protect coastline', 'Make salt', 'Produce oil'], correctAnswer: 'Protect coastline', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Renewable Energy', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Why is solar energy popular?`, options: ['Infinite source', 'Works at night', 'Cheap storage'], correctAnswer: 'Infinite source', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Ecology Lab', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What should the students measure?`, options: ['pH levels', 'Color', 'Taste'], correctAnswer: 'pH levels', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Botany Lecture', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: How do seeds disperse?`, options: ['Wind and animals', 'Static electricity', 'Only humans'], correctAnswer: 'Wind and animals', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Prefixes in Science (Bio, Geo, Hydro)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Prefix Question ${i+1}: "Geo-" refers to:`, options: ['Earth', 'Water', 'Life'], correctAnswer: 'Earth', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Scientific Method Terminology', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Method Question ${i+1}: A "hypothesis" is:`, options: ['A testable prediction', 'A proven fact', 'A type of graph'], correctAnswer: 'A testable prediction', points: 1 })) };

export const B1_WEEK_3 = createShardedToeflUnit(
  'toefl-b1-w3',
  'Week 3: Natural Sciences & Environment',
  'Explore biology, ecology, and environmental challenges with academic rigor.',
  ['Identify key biological terms', 'Understand cause-effect in ecology', 'Use modals of probability correctly'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
