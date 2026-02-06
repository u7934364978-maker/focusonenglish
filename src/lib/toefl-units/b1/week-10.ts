import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 10;
const LEVEL = 'b1';

// SHARDS 1-2: Environmental Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Ecosystems & Biodiversity',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is an "ecosystem"?',
      'The word "biodiversity" refers to:',
      'What is a "habitat"?',
      'An "endangered" species is:',
      'What does "sustainability" mean?',
      'The term "biomass" relates to:',
      'What is "conservation"?',
      'A "biome" is:',
      'What is "photosynthesis"?',
      'The word "predator" means:'
    ][i],
    options: [
      ['A biological community of interacting organisms', 'A type of rock', 'A computer system'],
      ['Variety of life in an area', 'The number of rocks in a desert', 'A type of machine'],
      ['Natural home or environment', 'A place where humans live only', 'A space station'],
      ['At risk of extinction', 'Very common', 'Recently discovered'],
      ['Ability to be maintained at a certain level', 'Being very fast', 'Using all resources at once'],
      ['Total mass of organisms in an area', 'The weight of water', 'The height of a tree'],
      ['Prevention of wasteful use of a resource', 'Destroying forests', 'Hunting animals'],
      ['A large naturally occurring community', 'A small garden', 'A single cell'],
      ['Process by which plants make food', 'How animals run', 'Rain falling'],
      ['An animal that naturally preys on others', 'An animal that eats only grass', 'A type of plant']
    ][i],
    correctAnswer: [
      'A biological community of interacting organisms', 'Variety of life in an area', 'Natural home or environment',
      'At risk of extinction', 'Ability to be maintained at a certain level', 'Total mass of organisms in an area',
      'Prevention of wasteful use of a resource', 'A large naturally occurring community', 'Process by which plants make food',
      'An animal that naturally preys on others'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Climate & Pollution',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the "greenhouse effect"?',
      'A "carbon footprint" is:',
      'What is "emissions"?',
      'The term "deforestation" refers to:',
      'What is "renewable energy"?',
      'An "aquifer" is:',
      'What is "smog"?',
      'The word "toxin" means:',
      'What is "glacier retreat"?',
      'A "contaminant" is:'
    ][i],
    options: [
      ['Trapping of the sun\'s warmth', 'Growing plants in a house', 'A type of paint'],
      ['Amount of carbon dioxide released', 'A shoe size', 'A type of fuel'],
      ['Production and discharge of something', 'Stopping a car', 'Cleaning a window'],
      ['Clearing of wide areas of trees', 'Planting a garden', 'Building a wooden house'],
      ['Energy from a source that is not depleted', 'Burning coal', 'Nuclear waste'],
      ['Underground layer of water-bearing rock', 'A type of fish', 'A fast river'],
      ['Fog or haze intensified by pollutants', 'Fresh air', 'Rain'],
      ['A poisonous substance', 'A type of vitamin', 'Pure water'],
      ['Shrinking of ice masses', 'Ice cubes melting in a glass', 'Snow falling'],
      ['A substance that makes something impure', 'A cleaning agent', 'A type of filter']
    ][i],
    correctAnswer: [
      'Trapping of the sun\'s warmth', 'Amount of carbon dioxide released', 'Production and discharge of something',
      'Clearing of wide areas of trees', 'Energy from a source that is not depleted', 'Underground layer of water-bearing rock',
      'Fog or haze intensified by pollutants', 'A poisonous substance', 'Shrinking of ice masses',
      'A substance that makes something impure'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Adverbial Clauses of Cause/Result', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: ____ pollution is high, we must act.`, options: ['Since', 'Although', 'Despite'], correctAnswer: 'Since', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Modal Verbs of Suggestion', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: Governments ____ implement stricter laws.`, options: ['should', 'must', 'might'], correctAnswer: 'should', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: The Great Barrier Reef', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What is coral bleaching?`, options: ['Loss of color due to stress', 'Adding white paint', 'Growth of new coral'], correctAnswer: 'Loss of color due to stress', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Amazon Rainforest', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Why is it the "lungs of the planet"?`, options: ['It produces oxygen', 'It looks like a lung', 'It is very loud'], correctAnswer: 'It produces oxygen', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Ecology Lecture', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is a "keystone species"?`, options: ['Species on which others depend', 'A very fast animal', 'A type of plant'], correctAnswer: 'Species on which others depend', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Sustainability Seminar', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the main message?`, options: ['Reduce, Reuse, Recycle', 'Buy more plastic', 'Drive bigger cars'], correctAnswer: 'Reduce, Reuse, Recycle', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Environmental Verbs', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Environmental Verb ${i+1}: Define "Mitigate".`, options: ['Make less severe', 'Increase', 'Ignore'], correctAnswer: 'Make less severe', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Prefixes (Eco, Geo, Hydro)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Prefix Question ${i+1}: "Hydro-" relates to:`, options: ['Water', 'Earth', 'Life'], correctAnswer: 'Water', points: 1 })) };

export const B1_WEEK_10 = createShardedToeflUnit(
  'toefl-b1-w10',
  'Week 10: Environmental Science',
  'Study the delicate balance of nature and the challenges of conservation.',
  ['Understand ecological relationships and terminology', 'Use cause and result structures in academic writing', 'Analyze climate change data and solutions'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
