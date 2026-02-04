import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 56;

export const C1_U56_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Future Transport Terminology',
  explanation: 'Advanced terms for discussing innovative transport solutions and infrastructure.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      '___ vehicles could reduce traffic accidents. (autonomous)',
      'The ___ train is a high-speed rail system. (maglev)',
      '___ pods are a form of personal rapid transit. (driver)',
      'We need to improve our transport ___ . (infrastructure)',
      'The ___ of logistics is crucial for efficiency. (automation)',
      '___ drones could deliver packages. (delivery)',
      '___ mobility aims for sustainable transport. (smart)',
      'The ___ loop is a proposed high-speed system. (hyper)',
      '___ congestion remains a major urban issue. (traffic)',
      '___ fuel cells are a clean energy source. (hydrogen)'
    ][i],
    correctAnswer: [
      'Autonomous',
      'maglev',
      'Driverless',
      'infrastructure',
      'automation',
      'Delivery',
      'Smart',
      'hyper',
      'Traffic',
      'Hydrogen'
    ][i],
    explanation: 'Correct transport terminology.',
    points: 1
  }))
};

export const C1_U56_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Innovative Transport Concepts',
  explanation: 'Identifying and defining concepts related to the future of transit and logistics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "MaaS" (Mobility as a Service)?',
      'What is "last-mile delivery"?',
      'What is "intermodal transport"?',
      'What is "V2X" (Vehicle-to-Everything)?',
      'What is a "vertical take-off and landing" (VTOL)?',
      'What is "urban air mobility" (UAM)?',
      'What is "telecommuting"?',
      'What is "shared mobility"?',
      'What is "micromobility"?',
      'What is "decarbonization" in transport?'
    ][i],
    options: [
      ['Integration of various transport services into one', 'A type of car', 'A new road'],
      ['The final leg of a delivery process', 'A long delivery', 'A fast delivery'],
      ['Using multiple modes of transport for one trip', 'One mode of transport', 'A type of train'],
      ['Communication between a vehicle and its surroundings', 'A type of engine', 'A radio station'],
      ['Aircraft that can take off and land vertically', 'A normal plane', 'A helicopter'],
      ['Air transport in urban environments', 'Flying to the moon', 'A type of cloud'],
      ['Working from home instead of commuting', 'Working on a train', 'Working at a desk'],
      ['Shared use of transport services like bike-sharing', 'Sharing a car with a friend', 'A public bus'],
      ['Small, lightweight vehicles like e-scooters', 'A small car', 'A toy bike'],
      ['Reducing carbon emissions from transport', 'Cleaning a car', 'A type of fuel']
    ][i],
    correctAnswer: [
      'Integration of various transport services into one',
      'The final leg of a delivery process',
      'Using multiple modes of transport for one trip',
      'Communication between a vehicle and its surroundings',
      'Aircraft that can take off and land vertically',
      'Air transport in urban environments',
      'Working from home instead of commuting',
      'Shared use of transport services like bike-sharing',
      'Small, lightweight vehicles like e-scooters',
      'Reducing carbon emissions from transport'
    ][i],
    explanation: 'Correct definition of innovative transport concept.',
    points: 1
  }))
};

export const C1_U56_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Future Tenses for Predictions & Plans',
  explanation: 'Using advanced future tenses to discuss developments and expectations in transport.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'By 2050, autonomous cars ___ commonplace.',
      'We ___ using maglev trains soon.',
      'The new system ___ operational by next year.',
      'I think we ___ see more electric planes.',
      'The project ___ completed by the end of the month.',
      'They ___ developing the prototype for years.',
      '___ we have flying taxis in the future?',
      'The government ___ to invest in high-speed rail.',
      'By the time we arrive, the train ___ left.',
      'We ___ towards a more sustainable future.'
    ][i],
    options: [
      ['will have become', 'become', 'became'],
      ['will be', 'are', 'were'],
      ['is to be', 'was', 'be'],
      ['will', 'do', 'did'],
      ['is to be', 'was', 'be'],
      ['will have been', 'have been', 'were'],
      ['Will', 'Do', 'Did'],
      ['is set', 'sets', 'setting'],
      ['will have', 'has', 'had'],
      ['are heading', 'head', 'headed']
    ][i],
    correctAnswer: [
      'will have become',
      'will be',
      'is to be',
      'will',
      'is to be',
      'will have been',
      'Will',
      'is set',
      'will have',
      'are heading'
    ][i],
    explanation: 'Correct use of future tenses for predictions and plans.',
    points: 1
  }))
};

export const unit56: Lesson = createC1Unit(
  'c1-u56',
  'The Future of Transport',
  'Advanced vocabulary and grammar for discussing innovative transport, infrastructure, and future expectations.',
  ['Use precise terminology for future transport solutions', 'Identify and define key concepts in transit and logistics', 'Apply advanced future tenses to discuss developments and plans'],
  [
    C1_U56_BLOCK1, C1_U56_BLOCK2, C1_U56_BLOCK3,
    C1_U56_BLOCK1, C1_U56_BLOCK2, C1_U56_BLOCK3,
    C1_U56_BLOCK1, C1_U56_BLOCK2, C1_U56_BLOCK3, C1_U56_BLOCK1
  ]
);
