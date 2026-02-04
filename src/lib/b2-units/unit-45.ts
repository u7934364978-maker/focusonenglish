import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 45;

// ============================================
// BLOCK 1: GRAMMAR - MODAL DEDUCTION (PRESENT)
// ============================================
export const B2_U45_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Speculating about the Universe',
  grammarPoint: 'Modal Deduction',
  explanation: 'Use must, might/could, and can\'t to express degrees of certainty about the present.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'That light in the sky ___ be a planet.',
      'There ___ be life on Mars, but we haven\'t found it yet.',
      'It ___ be an alien; it looks like a drone.',
      'The stars ___ be very far away.',
      'That telescope ___ cost a fortune!',
      'He ___ be an astronaut; he\'s wearing a suit.',
      'It ___ be a meteor; it\'s moving too slowly.',
      'There ___ be other galaxies beyond ours.',
      'She ___ be interested in astronomy; she has so many books about it.',
      'It ___ be easy living on a space station.'
    ][i],
    options: [
      ['must', 'can\'t', 'might'],
      ['could', 'must', 'can\'t'],
      ['can\'t', 'must', 'should'],
      ['must', 'may', 'can'],
      ['must', 'might', 'can\'t'],
      ['must', 'could', 'may'],
      ['can\'t', 'must', 'might'],
      ['might', 'must', 'can\'t'],
      ['must', 'could', 'may'],
      ['can\'t', 'must', 'could']
    ][i],
    correctAnswer: [
      'might',
      'could',
      'can\'t',
      'must',
      'must',
      'must',
      'can\'t',
      'might',
      'must',
      'can\'t'
    ][i],
    explanation: 'Using modals to reflect the level of certainty in the present.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - MODAL DEDUCTION (PAST)
// ============================================
export const B2_U45_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Analyzing Past Missions',
  grammarPoint: 'Modal Deduction',
  explanation: 'Use modal + have + past participle to speculate about the past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'They ___ (must / leave) Earth early this morning.',
      'He ___ (can\'t / see) the moon from there.',
      'The mission ___ (might / be) a failure.',
      'She ___ (must / feel) amazing when she landed.',
      'The engine ___ (could / fail) due to the heat.',
      'They ___ (can\'t / find) any water on that planet.',
      'I ___ (must / forget) to turn off the telescope.',
      'The signal ___ (might / be) blocked by the mountain.',
      'They ___ (must / be) exhausted after the space walk.',
      'It ___ (can\'t / be) a comet; it didn\'t have a tail.'
    ][i],
    correctAnswer: [
      'must have left',
      'can\'t have seen',
      'might have been',
      'must have felt',
      'could have failed',
      'can\'t have found',
      'must have forgotten',
      'might have been',
      'must have been',
      'can\'t have been'
    ][i],
    explanation: 'Expressing past possibilities and certainties with perfect modals.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - THE COSMOS & CELESTIAL BODIES
// ============================================
export const B2_U45_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Stars, Planets and Beyond',
  explanation: 'Vocabulary for objects in space and the structure of the universe.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The Earth ___ (orbits) the Sun.',
      'Jupiter is the largest ___ (planet) in our solar system.',
      'A ___ (comet) has a long tail of ice and dust.',
      'The Milky Way is our ___ (galaxy).',
      'The moon is a natural ___ (satellite).',
      'Stars are made of burning ___ (gas).',
      'A ___ (meteor) is often called a falling star.',
      'Black holes have immense ___ (gravity).',
      'We live in the ___ (Solar) System.',
      'The ___ (universe) is vast and mysterious.'
    ][i],
    correctAnswer: [
      'orbits',
      'planet',
      'comet',
      'galaxy',
      'satellite',
      'gas',
      'meteor',
      'gravity',
      'Solar',
      'universe'
    ][i],
    explanation: 'Essential terms for describing celestial bodies.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - MISSIONS & TECHNOLOGY
// ============================================
export const B2_U45_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Space Missions and Exploration',
  explanation: 'Terms for spacecraft, launches, and the exploration process.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The rocket will ___ (launch) at dawn.',
      'The ___ (spacecraft) entered the atmosphere.',
      'The mission was a huge ___ (success).',
      'The ___ (astronauts) performed a space walk.',
      'They are building a ___ (base) on the moon.',
      'The ___ (shuttle) returned to Earth safely.',
      'We used a ___ (probe) to study the planet\'s surface.',
      'The ___ (countdown) has already begun.',
      'She is a ___ (specialist) in aerospace engineering.',
      'The ___ (landing) was very smooth.'
    ][i],
    options: [
      ['launch', 'jump', 'go'],
      ['spacecraft', 'car', 'plane'],
      ['success', 'fail', 'win'],
      ['astronauts', 'drivers', 'pilots'],
      ['base', 'house', 'city'],
      ['shuttle', 'bus', 'train'],
      ['probe', 'camera', 'tool'],
      ['countdown', 'timer', 'clock'],
      ['specialist', 'expert', 'doctor'],
      ['landing', 'falling', 'sitting']
    ][i],
    correctAnswer: [
      'launch',
      'spacecraft',
      'success',
      'astronauts',
      'base',
      'shuttle',
      'probe',
      'countdown',
      'specialist',
      'landing'
    ][i],
    explanation: 'Vocabulary for technical aspects of space travel.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U45_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Exploring the Unknown',
  explanation: 'Form nouns, adjectives, and verbs related to space and exploration.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (EXPLORE) of space is expensive.',
      'It was a ___ (MYSTERY) object in the sky.',
      'The ___ (GRAVITY) pull of the sun is strong.',
      'We need to ___ (VARY) the satellite\'s orbit.',
      'The ___ (SCIENTIST) evidence is clear.',
      'The mission was ___ (DANGER).',
      'She has a ___ (FASCINATE) for the stars.',
      'The planet is ___ (HABIT).',
      'The ___ (DISCOVER) of water was huge.',
      'The ___ (EQUIP) must be robust.'
    ][i],
    correctAnswer: [
      'exploration',
      'mysterious',
      'gravitational',
      'vary',
      'scientific',
      'dangerous',
      'fascination',
      'habitable',
      'discovery',
      'equipment'
    ][i],
    explanation: 'Transforming root words into space-related terminology.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE SEARCH FOR LIFE
// ============================================
export const B2_U45_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Are We Alone?',
  explanation: 'Read about the "Goldilocks Zone" and the search for extraterrestrial life.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the "Goldilocks Zone"?' : 'What is the most common sign of life scientists look for?',
    options: [['The region around a star where conditions are just right for liquid water', 'A very cold area', 'A place with lots of gold'], ['Water and organic molecules', 'Radio signals', 'Buildings']][i % 2],
    correctAnswer: i < 5 ? 'The region around a star where conditions are just right for liquid water' : 'Water and organic molecules',
    explanation: 'Identifying scientific concepts in a text about astrobiology.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - SPACE TOURISM
// ============================================
export const B2_U45_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: A Ticket to the Moon',
  explanation: 'Listen to a report about the future of commercial space travel.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the main barrier to widespread space tourism mentioned?`,
    options: ['High costs and technical risks', 'Lack of interest', 'Bad weather in space', 'No hotels'],
    correctAnswer: 'High costs and technical risks',
    explanation: 'Listening for challenges and obstacles in a new industry.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - SPECULATIVE ESSAYS
// ============================================
export const B2_U45_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Drafting a Speculative Essay',
  explanation: 'Identify the best way to structure an essay about future possibilities.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a speculative topic:',
      'To express a high degree of probability:',
      'To express a low degree of probability:',
      'To use a formal phrase for "it is possible":',
      'To conclude with a future prediction:',
      'To highlight a scientific consensus:',
      'To acknowledge uncertainty:',
      'To describe a hypothetical scenario:',
      'To reference a famous astronaut:',
      'To use a precise verb for "finding":'
    ][i],
    options: [
      ['The question of whether life exists elsewhere is...', 'Is there life?', 'Aliens, yes or no?'],
      ['It is highly likely that...', 'Maybe...', 'It could happen.'],
      ['The chances of this occurring are slim.', 'It won\'t happen.', 'No way.'],
      ['It is conceivable that...', 'I can imagine...', 'It might be.'],
      ['In the coming decades, we will undoubtedly see...', 'In the future, things will change.', 'Soon, we will go.'],
      ['There is a growing consensus among scientists that...', 'Most scientists think...', 'They all say:'],
      ['Admittedly, much remains unknown about...', 'We don\'t know.', 'It is a mystery.'],
      ['Suppose humanity were to establish a colony on Mars...', 'What if we go to Mars?', 'Imagine Mars.'],
      ['As Neil Armstrong famously stated,', 'Armstrong said...', 'Look at Armstrong:'],
      ['Recent missions have detected...', 'They found...', 'They saw...']
    ][i],
    correctAnswer: [
      'The question of whether life exists elsewhere is...',
      'It is highly likely that...',
      'The chances of this occurring are slim.',
      'It is conceivable that...',
      'In the coming decades, we will undoubtedly see...',
      'There is a growing consensus among scientists that...',
      'Admittedly, much remains unknown about...',
      'Suppose humanity were to establish a colony on Mars...',
      'As Neil Armstrong famously stated,',
      'Recent missions have detected...'
    ][i],
    explanation: 'Choosing the correct register for speculative and scientific writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SPECULATING ON SPACE
// ============================================
export const B2_U45_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: What if we found aliens?',
  explanation: 'How to use modals of deduction naturally in conversation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally express your belief that the moon landing was real?`,
    options: ['It must have been real; the evidence is overwhelming.', 'I think it happened.', 'It was real.', 'Yeah, they went there.'],
    correctAnswer: 'It must have been real; the evidence is overwhelming.',
    explanation: 'Using "must have been" to express strong conviction about past events.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U45_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 45',
  explanation: 'Consolidation of Modal Deduction and Space Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'That ___ (must/can\'t) be Jupiter; it\'s too bright.' : 'The rocket ___ (launch/landed) safely on the platform.',
    options: i < 5 ? ['must', 'can\'t', 'might'] : ['launch', 'landed', 'probe'],
    correctAnswer: i < 5 ? 'must' : 'landed',
    explanation: 'Final check of key concepts from Unit 45.',
    points: 1
  }))
};

export const B2_UNIT_45 = createB2Unit(
  'b2-u45',
  'Space Exploration',
  'Journey to the stars while mastering the language of deduction and speculation to explore the mysteries of our universe.',
  ['Use modals of deduction for present and past situations accurately', 'Speculate about possibilities using a range of certainty markers', 'Acquire vocabulary for celestial bodies, space missions, and aerospace technology'],
  [
    B2_U45_BLOCK1, B2_U45_BLOCK2, B2_U45_BLOCK3, B2_U45_BLOCK4, B2_U45_BLOCK5,
    B2_U45_BLOCK6, B2_U45_BLOCK7, B2_U45_BLOCK8, B2_U45_BLOCK9, B2_U45_BLOCK10
  ]
);
