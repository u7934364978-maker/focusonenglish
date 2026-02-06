import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 18;
const LEVEL = 'b1';

// SHARDS 1-2: Ecology Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Ecological Concepts',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "ecology"?',
      'The word "population" in ecology refers to:',
      'What is a "community"?',
      'An "ecosystem" includes:',
      'What does "biosphere" mean?',
      'The term "niche" relates to:',
      'What is "biodiversity"?',
      'A "habitat" is:',
      'What is a "limiting factor"?',
      'The word "succession" means:'
    ][i],
    options: [
      ['The study of organisms and their environment', 'The study of the mind', 'The study of space'],
      ['Organisms of same species in one area', 'The total number of people on Earth', 'A type of animal'],
      ['All populations in a particular area', 'A group of friends', 'A single organism'],
      ['All living and non-living things in an area', 'Only animals', 'Only plants'],
      ['The global sum of all ecosystems', 'A type of balloon', 'A science lab'],
      ['Role or position of a species in its environment', 'A small hole in a wall', 'A type of bird'],
      ['Variety of life in the world or habitat', 'Having many children', 'The speed of light'],
      ['Natural home of an organism', 'A cage in a zoo', 'A type of food'],
      ['Resource that limits growth of a population', 'A type of engine', 'A road sign'],
      ['Process of change in species structure of a community', 'Winning a race', 'Moving house']
    ][i],
    correctAnswer: [
      'The study of organisms and their environment', 'Organisms of same species in one area', 'All populations in a particular area',
      'All living and non-living things in an area', 'The global sum of all ecosystems', 'Role or position of a species in its environment',
      'Variety of life in the world or habitat', 'Natural home of an organism', 'Resource that limits growth of a population',
      'Process of change in species structure of a community'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Conservation & Sustainability',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "conservation"?',
      'A "renewable" resource is:',
      'What is "sustainability"?',
      'The term "endangered" refers to:',
      'What is "pollution"?',
      'An "invasive" species:',
      'What is "recycling"?',
      'The word "deforestation" means:',
      'What is "global warming"?',
      'A "nature reserve" is:'
    ][i],
    options: [
      ['Protecting and preserving natural resources', 'Using all resources fast', 'Hunting'],
      ['A resource that can be replaced naturally', 'A resource that will run out', 'A type of car'],
      ['Meeting needs without compromising the future', 'Being very rich', 'Using plastic only'],
      ['Species at risk of extinction', 'A common pet', 'A newly discovered animal'],
      ['Presence of harmful substances in environment', 'Cleaning the air', 'Fresh water'],
      ['Causes harm to the new environment', 'Stays in its home', 'Helps local species'],
      ['Converting waste into reusable material', 'Throwing trash in the sea', 'Burning plastic'],
      ['Clearing a wide area of trees', 'Planting a forest', 'Building a wooden house'],
      ['Gradual increase in Earth\'s temperature', 'The sun setting', 'Winter coming'],
      ['Area of land managed for conservation', 'A place to hunt', 'A city park']
    ][i],
    correctAnswer: [
      'Protecting and preserving natural resources', 'A resource that can be replaced naturally', 'Meeting needs without compromising the future',
      'Species at risk of extinction', 'Presence of harmful substances in environment', 'Causes harm to the new environment',
      'Converting waste into reusable material', 'Clearing a wide area of trees', 'Gradual increase in Earth\'s temperature',
      'Area of land managed for conservation'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Zero Conditional', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: If you heat ice, it ____.`, options: ['melts', 'melted', 'will melt'], correctAnswer: 'melts', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Comparative and Superlative Adverbs', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: This ecosystem is recovering ____ than expected.`, options: ['more quickly', 'quicklier', 'most quickly'], correctAnswer: 'more quickly', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: The Greenhouse Effect', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What traps heat?`, options: ['Greenhouse gases', 'The moon', 'Large mirrors'], correctAnswer: 'Greenhouse gases', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Renewable Energy Sources', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Name a renewable source.`, options: ['Solar power', 'Coal', 'Natural gas'], correctAnswer: 'Solar power', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Environmental Campaign', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What are they asking people to do?`, options: ['Reduce plastic use', 'Buy more cars', 'Cut down trees'], correctAnswer: 'Reduce plastic use', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Conservation Success Story', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: Which animal was saved?`, options: ['The Bald Eagle', 'The Dodo', 'The Dinosaur'], correctAnswer: 'The Bald Eagle', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Action Verbs (Preserve, Restore)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Verb Question ${i+1}: Define "Restore".`, options: ['Bring back to former condition', 'Destroy', 'Ignore'], correctAnswer: 'Bring back to former condition', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Ecology Prefixes (Eco, Bio, Anthro)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Prefix Question ${i+1}: "Eco-" relates to:`, options: ['Environment', 'Economy', 'Education'], correctAnswer: 'Environment', points: 1 })) };

export const B1_WEEK_18 = createShardedToeflUnit(
  'toefl-b1-w18',
  'Week 18: Ecology & Conservation',
  'Learn how living things interact with their environment and how we can protect our planet.',
  ['Understand core ecological concepts and terminology', 'Identify conservation strategies and sustainability practices', 'Use zero conditional and comparative adverbs correctly'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
