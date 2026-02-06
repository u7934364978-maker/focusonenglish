import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 9;
const LEVEL = 'b1';

// SHARDS 1-2: Astronomy Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Celestial Bodies',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "nebula"?',
      'The word "galaxy" refers to:',
      'What is an "asteroid"?',
      'A "comet" is:',
      'What does "orbit" mean?',
      'The term "supernova" relates to:',
      'What is a "constellation"?',
      'A "black hole" is:',
      'What is "gravity"?',
      'The word "cosmos" means:'
    ][i],
    options: [
      ['A cloud of gas and dust', 'A small planet', 'A type of star'],
      ['A system of millions of stars', 'A single moon', 'A type of telescope'],
      ['A small rocky body orbiting the sun', 'A large gas giant', 'A shooting star'],
      ['A celestial object with a tail of gas', 'A piece of metal', 'A broken moon'],
      ['Curved path around a star or planet', 'To spin very fast', 'To crash'],
      ['A star that suddenly increases in brightness', 'A new planet', 'A type of rock'],
      ['A group of stars forming a pattern', 'A single bright star', 'A space station'],
      ['A region of space with intense gravity', 'A literal hole in a rock', 'A dark planet'],
      ['The force that attracts bodies', 'The speed of light', 'The heat of the sun'],
      ['The universe seen as a whole', 'A type of flower', 'A small part of Earth']
    ][i],
    correctAnswer: [
      'A cloud of gas and dust', 'A system of millions of stars', 'A small rocky body orbiting the sun',
      'A celestial object with a tail of gas', 'Curved path around a star or planet', 'A star that suddenly increases in brightness',
      'A group of stars forming a pattern', 'A region of space with intense gravity', 'The force that attracts bodies',
      'The universe seen as a whole'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Space Exploration',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "satellite"?',
      'An "observatory" is:',
      'What is "propulsion"?',
      'The term "astronaut" refers to:',
      'What is a "probe"?',
      'A "rover" is:',
      'What is "telemetry"?',
      'The word "payload" means:',
      'What is "microgravity"?',
      'A "trajectory" is:'
    ][i],
    options: [
      ['An object placed in orbit', 'A type of engine', 'A planet'],
      ['A room or building for observing stars', 'A place to sleep', 'A library'],
      ['The action of driving or pushing forward', 'Stopping a ship', 'Painting a rocket'],
      ['A person trained to travel in space', 'A robot', 'A type of star'],
      ['An unmanned exploratory spacecraft', 'A human explorer', 'A type of telescope'],
      ['A space exploration vehicle', 'A static base', 'A flying ship'],
      ['Automatic measurement and transmission of data', 'Speaking on the phone', 'Watching TV'],
      ['The carrying capacity of a vehicle', 'The weight of fuel', 'The cost of a trip'],
      ['Very weak gravity', 'Extremely strong gravity', 'No gravity at all'],
      ['The path followed by a projectile', 'A type of map', 'The speed of sound']
    ][i],
    correctAnswer: [
      'An object placed in orbit', 'A room or building for observing stars', 'The action of driving or pushing forward',
      'A person trained to travel in space', 'An unmanned exploratory spacecraft', 'A space exploration vehicle',
      'Automatic measurement and transmission of data', 'The carrying capacity of a vehicle', 'Very weak gravity',
      'The path followed by a projectile'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Adverbial Clauses of Time', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: ____ the sun sets, stars become visible.`, options: ['When', 'While', 'Before'], correctAnswer: 'When', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Participle Adjectives', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: The ____ stars were beautiful.`, options: ['twinkling', 'twinkled', 'twinkle'], correctAnswer: 'twinkling', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: The Big Bang Theory', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What does the theory explain?`, options: ['The origin of the universe', 'How to cook', 'The history of cars'], correctAnswer: 'The origin of the universe', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Life on Mars', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Why is Mars red?`, options: ['Iron oxide', 'Paint', 'Heat'], correctAnswer: 'Iron oxide', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: NASA Briefing', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the goal of the mission?`, options: ['To reach the Moon', 'To find aliens', 'To fix a satellite'], correctAnswer: 'To reach the Moon', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Astronomy Lab', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What are students observing?`, options: ['Jupiter\'s moons', 'The Sun', 'Earth\'s core'], correctAnswer: 'Jupiter\'s moons', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Space Verbs', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Space Verb ${i+1}: Define "Launch".`, options: ['Set in motion', 'Stop', 'Land'], correctAnswer: 'Set in motion', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Measurement in Space', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Question ${i+1}: A "light-year" measures:`, options: ['Distance', 'Time', 'Weight'], correctAnswer: 'Distance', points: 1 })) };

export const B1_WEEK_9 = createShardedToeflUnit(
  'toefl-b1-w9',
  'Week 9: Astronomy & Space Science',
  'Journey through the stars and explore the mysteries of the universe.',
  ['Identify celestial objects and space exploration tools', 'Use time clauses and adjectives for description', 'Understand cosmic theories and mission objectives'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
