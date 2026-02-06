import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 16;
const LEVEL = 'b1';

// SHARDS 1-2: Botany Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Plant Anatomy & Physiology',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "photosynthesis"?',
      'The word "chlorophyll" refers to:',
      'What is a "stoma"?',
      'The "xylem" of a plant:',
      'What is "transpiration"?',
      'The term "phloem" relates to:',
      'What is "germination"?',
      'A "vascular" plant has:',
      'What is "pollen"?',
      'The word "deciduous" means:'
    ][i],
    options: [
      ['Process by which plants make food', 'How plants breathe', 'How plants grow tall'],
      ['Green pigment in plants', 'A type of root', 'A seed'],
      ['Small pore in a leaf', 'A large tree trunk', 'A type of flower'],
      ['Transports water', 'Transports food', 'Protects the plant'],
      ['Exhalation of water vapor through stomata', 'Drinking water', 'Growing leaves'],
      ['Transports sugars', 'Transports minerals', 'Stores water'],
      ['Process by which a plant grows from a seed', 'A plant dying', 'Leaves falling'],
      ['Tissues that conduct water and minerals', 'No roots', 'Only flowers'],
      ['Fine powder containing male gametes', 'A type of dirt', 'A liquid'],
      ['Shedding leaves annually', 'Evergreen', 'A type of cactus']
    ][i],
    correctAnswer: [
      'Process by which plants make food', 'Green pigment in plants', 'Small pore in a leaf',
      'Transports water', 'Exhalation of water vapor through stomata', 'Transports sugars',
      'Process by which a plant grows from a seed', 'Tissues that conduct water and minerals', 'Fine powder containing male gametes',
      'Shedding leaves annually'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Ecology & Diversity of Plants',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is an "angiosperm"?',
      'A "gymnosperm" is:',
      'What is "pollination"?',
      'The term "hybrid" refers to:',
      'What is "biodiversity" in plants?',
      'An "invasive" species:',
      'What is "succulent"?',
      'The word "perennial" means:',
      'What is "organic" farming?',
      'A "botanist" studies:'
    ][i],
    options: [
      ['A flowering plant', 'A plant with no flowers', 'A type of moss'],
      ['Plant with seeds not enclosed in an ovary (cones)', 'A fruit tree', 'A grass'],
      ['Transfer of pollen to allow fertilization', 'Cutting a tree', 'Watering plants'],
      ['Offspring of two different varieties', 'A pure breed', 'A plastic plant'],
      ['Variety of plant life', 'Only one type of tree', 'How fast plants grow'],
      ['Spreads and causes harm to the environment', 'Stays in one place', 'Is helpful'],
      ['Plant that stores water in thick leaves', 'A very dry plant', 'A tall tree'],
      ['Living for several years', 'Living for one season', 'A dead plant'],
      ['Farming without synthetic chemicals', 'Using lots of pesticides', 'Indoor farming'],
      ['Plants', 'Animals', 'Rocks']
    ][i],
    correctAnswer: [
      'A flowering plant', 'Plant with seeds not enclosed in an ovary (cones)', 'Transfer of pollen to allow fertilization',
      'Offspring of two different varieties', 'Variety of plant life', 'Spreads and causes harm to the environment',
      'Plant that stores water in thick leaves', 'Living for several years', 'Farming without synthetic chemicals',
      'Plants'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Subject-Verb Agreement', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: Every plant ____ water to survive.`, options: ['needs', 'need', 'needing'], correctAnswer: 'needs', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Collective Nouns', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: A ____ of trees was planted.`, options: ['grove', 'pack', 'herd'], correctAnswer: 'grove', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: Carnivorous Plants', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Why do they eat insects?`, options: ['To get nitrogen', 'Because they are angry', 'For water'], correctAnswer: 'To get nitrogen', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Giant Sequoias', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: How old can they be?`, options: ['Over 3,000 years', '10 years', '100 years'], correctAnswer: 'Over 3,000 years', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Botany Lab Instructions', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the first step?`, options: ['Prepare the slide', 'Clean the table', 'Read the book'], correctAnswer: 'Prepare the slide', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Forest Ecology Discussion', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the role of fungi?`, options: ['Decomposition', 'Eating trees', 'Providing shade'], correctAnswer: 'Decomposition', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Agricultural Verbs (Cultivate, Harvest)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Verb Question ${i+1}: Define "Harvest".`, options: ['Gather crops', 'Plant seeds', 'Water soil'], correctAnswer: 'Gather crops', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Botany Roots (Phyt, Chlor, Anth)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Root Question ${i+1}: "Phyt-" refers to:`, options: ['Plant', 'Animal', 'Light'], correctAnswer: 'Plant', points: 1 })) };

export const B1_WEEK_16 = createShardedToeflUnit(
  'toefl-b1-w16',
  'Week 16: Botany & Plant Science',
  'Explore the kingdom of plants, from cellular processes to vast forest ecosystems.',
  ['Identify plant structures and physiological processes', 'Understand plant diversity and ecological importance', 'Use subject-verb agreement and collective nouns correctly'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
