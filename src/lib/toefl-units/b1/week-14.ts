import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 14;
const LEVEL = 'b1';

// SHARDS 1-2: Meteorology Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Atmospheric Phenomena',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "precipitation"?',
      'The word "humidity" refers to:',
      'What is an "air mass"?',
      'A "front" is:',
      'What does "condensation" mean?',
      'The term "evaporation" relates to:',
      'What is "barometric pressure"?',
      'An "anemometer" measures:',
      'What is "convection"?',
      'The word "troposphere" means:'
    ][i],
    options: [
      ['Any form of water falling from the sky', 'A type of rock', 'A strong wind'],
      ['Amount of water vapor in the air', 'The temperature of the sea', 'The speed of light'],
      ['A large body of air with uniform properties', 'A group of clouds', 'A space station'],
      ['Boundary between two air masses', 'The back of a building', 'A type of storm'],
      ['Water vapor changing to liquid', 'Liquid changing to gas', 'Ice melting'],
      ['Liquid changing to gas', 'Gas changing to liquid', 'Rain falling'],
      ['Pressure of the atmosphere', 'The weight of water', 'Wind speed'],
      ['Wind speed', 'Rainfall', 'Temperature'],
      ['Transfer of heat by movement of fluid', 'Direct heat from the sun', 'Freezing'],
      ['The lowest layer of the atmosphere', 'The highest layer', 'A type of storm']
    ][i],
    correctAnswer: [
      'Any form of water falling from the sky', 'Amount of water vapor in the air', 'A large body of air with uniform properties',
      'Boundary between two air masses', 'Water vapor changing to liquid', 'Liquid changing to gas',
      'Pressure of the atmosphere', 'Wind speed', 'Transfer of heat by movement of fluid',
      'The lowest layer of the atmosphere'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Severe Weather & Climate',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "cyclone"?',
      'A "monsoon" is:',
      'What is "drought"?',
      'The term "blizzard" refers to:',
      'What is an "isobar"?',
      'A "jet stream" is:',
      'What is "climate"?',
      'The word "meteorology" means:',
      'What is "albedo"?',
      'A "typhoon" is:'
    ][i],
    options: [
      ['A system of winds rotating inward', 'A dry desert', 'A sunny day'],
      ['A seasonal prevailing wind', 'A type of food', 'A loud noise'],
      ['Prolonged period of low rainfall', 'A flood', 'A snowstorm'],
      ['Severe snowstorm with high winds', 'A light rain', 'A hot breeze'],
      ['Line on a map connecting points of equal pressure', 'A type of cloud', 'A mountain range'],
      ['Narrow band of strong wind in upper atmosphere', 'A river', 'A type of plane'],
      ['Long-term pattern of weather', 'What happens today', 'A type of plant'],
      ['The study of the atmosphere', 'The study of space', 'The study of oceans'],
      ['Reflectivity of a surface', 'The color of the sky', 'The depth of the sea'],
      ['A mature tropical cyclone in the Pacific', 'A tornado in USA', 'A type of boat']
    ][i],
    correctAnswer: [
      'A system of winds rotating inward', 'A seasonal prevailing wind', 'Prolonged period of low rainfall',
      'Severe snowstorm with high winds', 'Line on a map connecting points of equal pressure', 'Narrow band of strong wind in upper atmosphere',
      'Long-term pattern of weather', 'The study of the atmosphere', 'Reflectivity of a surface',
      'A mature tropical cyclone in the Pacific'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Future Continuous', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: By tomorrow evening, it ____ raining.`, options: ['will be', 'will', 'is'], correctAnswer: 'will be', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Adverbs of Degree', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: The humidity is ____ high today.`, options: ['extremely', 'extreme', 'extremity'], correctAnswer: 'extremely', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: The El Niño Phenomenon', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What is El Niño?`, options: ['Warming of ocean surface', 'Cooling of air', 'A type of bird'], correctAnswer: 'Warming of ocean surface', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Cloud Formations', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Which clouds bring rain?`, options: ['Cumulonimbus', 'Cirrus', 'Stratus'], correctAnswer: 'Cumulonimbus', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Weather Forecast', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the predicted high?`, options: ['30 degrees', '10 degrees', '45 degrees'], correctAnswer: '30 degrees', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Climate Change Debate', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the main concern?`, options: ['Global warming', 'New clouds', 'The moon'], correctAnswer: 'Global warming', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Descriptive Verbs (Forecast, Predict)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Verb Question ${i+1}: Define "Forecast".`, options: ['Predict weather', 'History report', 'Cooking instruction'], correctAnswer: 'Predict weather', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Meteorology Roots (Baro, Hydro, Thermo)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Root Question ${i+1}: "Thermo-" means:`, options: ['Heat', 'Water', 'Air'], correctAnswer: 'Heat', points: 1 })) };

export const B1_WEEK_14 = createShardedToeflUnit(
  'toefl-b1-w14',
  'Week 14: Meteorology & Climate Science',
  'Learn how the atmosphere works and how we predict the weather.',
  ['Identify atmospheric phenomena and severe weather types', 'Understand climate patterns and measurement tools', 'Use future continuous and adverbs of degree'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
