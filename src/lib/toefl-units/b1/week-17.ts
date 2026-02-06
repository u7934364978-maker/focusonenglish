import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 17;
const LEVEL = 'b1';

// SHARDS 1-2: Zoology Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Animal Classification & Anatomy',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "vertebrate"?',
      'The word "mammal" refers to animals that:',
      'What is an "invertebrate"?',
      'The "circulatory system" of an animal:',
      'What is "metabolism"?',
      'The term "carnivore" relates to:',
      'What is an "herbivore"?',
      'An "omnivore" eats:',
      'What is "camouflage"?',
      'The word "hibernation" means:'
    ][i],
    options: [
      ['Animal with a backbone', 'Animal with no legs', 'A plant'],
      ['Have fur/hair and nurse young', 'Lay eggs only', 'Live underwater only'],
      ['Animal without a backbone', 'Animal with many legs', 'A robotic animal'],
      ['Transports blood', 'Digests food', 'Helps the animal think'],
      ['Chemical processes in a body', 'The speed of running', 'The color of fur'],
      ['Animal that eats meat', 'Animal that eats grass', 'Animal that eats rocks'],
      ['Animal that eats plants', 'Animal that eats everything', 'Animal that eats stars'],
      ['Both plants and animals', 'Only insects', 'Only fruit'],
      ['Disguise used to blend in', 'A loud noise', 'A type of food'],
      ['State of inactivity in winter', 'Running fast', 'Building a nest']
    ][i],
    correctAnswer: [
      'Animal with a backbone', 'Have fur/hair and nurse young', 'Animal without a backbone',
      'Transports blood', 'Chemical processes in a body', 'Animal that eats meat',
      'Animal that eats plants', 'Both plants and animals', 'Disguise used to blend in',
      'State of inactivity in winter'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Animal Behavior & Ecology',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "migration"?',
      'An "instinct" is:',
      'What is "territorial" behavior?',
      'The term "courtship" refers to:',
      'What is "social" behavior in animals?',
      'A "nocturnal" animal is active:',
      'What is "diurnal"?',
      'The word "predation" means:',
      'What is a "symbiotic" relationship?',
      'A "habitat" is:'
    ][i],
    options: [
      ['Seasonal movement', 'Staying in one cave', 'Sleeping all day'],
      ['Innate, fixed pattern of behavior', 'Something learned in school', 'A type of food'],
      ['Defending an area', 'Sharing food', 'Playing games'],
      ['Behavior to attract a mate', 'Fighting for a leader', 'Finding water'],
      ['Interacting with members of the same species', 'Living alone', 'Eating plants'],
      ['At night', 'During the day', 'Only in summer'],
      ['Active during the day', 'Active at night', 'Sleeping forever'],
      ['One organism killing another for food', 'Helping others', 'Growing tall'],
      ['Close interaction between different species', 'Fighting over territory', 'A type of cloud'],
      ['Natural home of an organism', 'A type of cage', 'A science lab']
    ][i],
    correctAnswer: [
      'Seasonal movement', 'Innate, fixed pattern of behavior', 'Defending an area',
      'Behavior to attract a mate', 'Interacting with members of the same species', 'At night',
      'Active during the day', 'One organism killing another for food', 'Close interaction between different species',
      'Natural home of an organism'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Modals of Ability (Can/Could/Able to)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: Cheetahs ____ run very fast.`, options: ['can', 'could', 'able'], correctAnswer: 'can', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Adjectives with -ed and -ing', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: The students were ____ by the animal's behavior.`, options: ['amazed', 'amazing', 'amaze'], correctAnswer: 'amazed', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: Honeybee Communication', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: How do bees tell others about food?`, options: ['The waggle dance', 'By shouting', 'Using lights'], correctAnswer: 'The waggle dance', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Elephant Intelligence', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What is a sign of their memory?`, options: ['Recognizing long-lost relatives', 'Eating grass', 'Sleeping in a group'], correctAnswer: 'Recognizing long-lost relatives', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Zoo Keeper Talk', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What do pandas eat most?`, options: ['Bamboo', 'Apples', 'Meat'], correctAnswer: 'Bamboo', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Animal Behavior Seminar', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is "imprinting"?`, options: ['Early life bond formation', 'Drawing on walls', 'Eating very fast'], correctAnswer: 'Early life bond formation', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Behavioral Verbs (Forage, Dominate)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Verb Question ${i+1}: Define "Forage".`, options: ['Search for food', 'Run away', 'Build a house'], correctAnswer: 'Search for food', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Zoology Roots (Zoo, Ornith, Ichthy)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Root Question ${i+1}: "Ornith-" refers to:`, options: ['Birds', 'Fish', 'Reptiles'], correctAnswer: 'Birds', points: 1 })) };

export const B1_WEEK_17 = createShardedToeflUnit(
  'toefl-b1-w17',
  'Week 17: Zoology & Animal Behavior',
  'Discover the incredible diversity of animal life and the complex behaviors that help them survive.',
  ['Identify animal classifications and physiological systems', 'Understand animal behaviors and ecological interactions', 'Use modals of ability and descriptive adjectives accurately'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
