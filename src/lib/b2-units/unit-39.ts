import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 39;

// ============================================
// BLOCK 1: GRAMMAR - OBLIGATION & NECESSITY
// ============================================
export const B2_U39_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Modals: Rules for Adventure',
  grammarPoint: 'Modal Obligation',
  explanation: 'Use must (personal obligation), have to (rules), and need to (necessity).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'You ___ wear a helmet at all times.',
      'We ___ to bring our own climbing gear.',
      'You ___ sign a waiver before you start.',
      'He ___ train harder if he wants to climb Everest.',
      'You ___ not leave the trail without a guide.',
      'I ___ to renew my travel insurance.',
      'Drivers ___ follow the local regulations.',
      'You ___ be at least 18 to participate.',
      'We ___ to wait for the weather to clear up.',
      'You ___ check your equipment every morning.'
    ][i],
    options: [
      ['must', 'should', 'might'],
      ['have', 'must', 'should'],
      ['must', 'may', 'can'],
      ['needs to', 'must to', 'have to'],
      ['must', 'don\'t have to', 'needn\'t'],
      ['have', 'must', 'should'],
      ['must', 'can', 'may'],
      ['have to', 'need', 'ought'],
      ['had', 'must', 'should'],
      ['must', 'can', 'may']
    ][i],
    correctAnswer: [
      'must',
      'have',
      'must',
      'needs to',
      'must',
      'have',
      'must',
      'have to',
      'had',
      'must'
    ][i],
    explanation: 'Choosing the correct modal based on the source and strength of the obligation.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - ADVICE, PERMISSION & PROHIBITION
// ============================================
export const B2_U39_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Modals: Advice and Permissions',
  grammarPoint: 'Modal Obligation',
  explanation: 'Use should/ought to for advice, can/may/be allowed to for permission, and can\'t/mustn\'t for prohibition.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'You ___ (should) definitely try scuba diving.',
      'Are we ___ (allowed) to take photos here?',
      'You ___ (mustn\'t) touch any of the equipment.',
      'He ___ (ought) to be more careful in the water.',
      'You ___ (can) use my compass if you want.',
      '___ (May) I ask a question about the safety rules?',
      'We ___ (don\'t have to) wear a wetsuit if it\'s warm.',
      'You ___ (shouldn\'t) go hiking alone at night.',
      'Is she ___ (permitted) to join the group?',
      'You ___ (needn\'t) worry about the transport; it\'s included.'
    ][i],
    correctAnswer: [
      'should',
      'allowed',
      'mustn\'t',
      'ought',
      'can',
      'May',
      'don\'t have to',
      'shouldn\'t',
      'permitted',
      'needn\'t'
    ][i],
    explanation: 'Using modals to express advice, permissions, and lack of necessity.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - ADVENTURE TRAVEL & EXTREME SPORTS
// ============================================
export const B2_U39_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Thrills and Risks',
  explanation: 'Terms for adventurous activities and the associated risks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'We went ___ (white-water) rafting on the Zambezi river.',
      'He is a fan of ___ (skydiving) and other extreme sports.',
      'The ___ (expedition) to the North Pole took two months.',
      'You need a lot of ___ (courage) to go bungee jumping.',
      'The climb was very ___ (treacherous) due to the ice.',
      'She loves ___ (trekking) in the Himalayas.',
      'It was a ___ (high-risk) activity that required training.',
      'The ___ (thrill) of the ride was amazing.',
      'They are planning an ___ (overland) journey across Africa.',
      'Safety should always be the top ___ (priority).'
    ][i],
    correctAnswer: [
      'white-water',
      'skydiving',
      'expedition',
      'courage',
      'treacherous',
      'trekking',
      'high-risk',
      'thrill',
      'overland',
      'priority'
    ][i],
    explanation: 'Core vocabulary for describing adventure travel and extreme sports.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - SAFETY GEAR & PROCEDURES
// ============================================
export const B2_U39_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Equipment and Safety',
  explanation: 'Terms for safety equipment and emergency protocols.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'Make sure your ___ (harness) is fastened correctly.',
      'We need a first-aid ___ (kit) for the hike.',
      'Always carry a ___ (compass) and a map.',
      'The lifeboat is equipped with ___ (flares).',
      'You must follow the safety ___ (briefing).',
      'The ___ (life-jacket) will keep you afloat.',
      'Check the ___ (weather) forecast before you leave.',
      'He is a certified ___ (instructor).',
      'We practiced the ___ (emergency) drill.',
      'The ___ (rescue) team arrived within minutes.'
    ][i],
    options: [
      ['harness', 'belt', 'rope'],
      ['kit', 'box', 'set'],
      ['compass', 'watch', 'glass'],
      ['flares', 'lights', 'fires'],
      ['briefing', 'talk', 'meeting'],
      ['life-jacket', 'swim-suit', 'coat'],
      ['weather', 'sky', 'wind'],
      ['instructor', 'teacher', 'coach'],
      ['emergency', 'safety', 'fast'],
      ['rescue', 'save', 'help']
    ][i],
    correctAnswer: [
      'harness',
      'kit',
      'compass',
      'flares',
      'briefing',
      'life-jacket',
      'weather',
      'instructor',
      'emergency',
      'rescue'
    ][i],
    explanation: 'Essential terms for safety and emergency management.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (RISK)
// ============================================
export const B2_U39_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Adventure and Safety',
  explanation: 'Form words related to risk, safety, and bravery.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'Safety is ___ (CRITICAL) in this sport.',
      'He is a very ___ (ADVENTURE) person.',
      'The ___ (BRAVE) of the rescue team was praised.',
      'It was a highly ___ (HAZARD) journey.',
      'We were impressed by his ___ (SKILFUL).',
      'The ___ (EQUIP) must be checked regularly.',
      'The situation was ___ (DANGER).',
      'We need a ___ (RELY) guide.',
      'The ___ (PRECAUTION) measures were effective.',
      'She showed great ___ (ENDURE) during the race.'
    ][i],
    correctAnswer: [
      'critical',
      'adventurous',
      'bravery',
      'hazardous',
      'skill',
      'equipment',
      'dangerous',
      'reliable',
      'precautionary',
      'endurance'
    ][i],
    explanation: 'Applying word formation rules to risk-related topics.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - SURVIVAL STORIES
// ============================================
export const B2_U39_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Surviving the Wild',
  explanation: 'Read about an incredible story of survival and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What was the most important factor in their survival?' : 'What should you do if you get lost in the mountains?',
    options: [['Mental strength and staying calm', 'Having lots of food', 'Lucky weather'], ['Stay where you are and seek shelter', 'Keep walking', 'Run downhill']][i % 2],
    correctAnswer: i < 5 ? 'Mental strength and staying calm' : 'Stay where you are and seek shelter',
    explanation: 'Analyzing survival strategies and decision-making under pressure.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AN ADVENTURE GUIDE
// ============================================
export const B2_U39_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Preparing for Your First Jump',
  explanation: 'Listen to a skydiving instructor giving a pre-jump briefing.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the most common mistake beginners make?`,
    options: ['Holding their breath during the jump', 'Closing their eyes', 'Forgetting their name', 'Trying to pull the parachute too early'],
    correctAnswer: 'Holding their breath during the jump',
    explanation: 'Listening for instructions and common pitfalls in extreme sports.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - SAFETY GUIDELINES
// ============================================
export const B2_U39_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Drafting a Safety Handbook',
  explanation: 'Identify the clearest and most effective way to write safety rules.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To state a mandatory rule:',
      'To give a strongly recommended advice:',
      'To describe a prohibited action:',
      'To provide emergency contact info:',
      'To use a verb for checking gear:',
      'To explain a safety procedure:',
      'To highlight a potential hazard:',
      'To address a participant directly:',
      'To summarize the safety policy:',
      'To use formal vocabulary for "following rules":'
    ][i],
    options: [
      ['Helmets must be worn at all times.', 'Wear a helmet.', 'It is good to wear a helmet.'],
      ['You are strongly advised to carry a whistle.', 'Carry a whistle.', 'Get a whistle.'],
      ['Under no circumstances should you feed the wildlife.', 'Don\'t feed animals.', 'No animals.'],
      ['In the event of an emergency, call...', 'If bad stuff happens, call...', 'Help line:'],
      ['Inspect your harness for signs of wear.', 'Check your belt.', 'Look at the rope.'],
      ['Should the weather deteriorate, return to base.', 'If it rains, come back.', 'Go home if bad weather.'],
      ['Be aware of falling rocks in this area.', 'Rocks fall.', 'Watch out.'],
      ['As a participant, you are responsible for...', 'You must do...', 'It is your job.'],
      ['Our primary concern is the safety of our guests.', 'We like safety.', 'Safe is good.'],
      ['Compliance with these regulations is mandatory.', 'Follow the rules.', 'Do what we say.']
    ][i],
    correctAnswer: [
      'Helmets must be worn at all times.',
      'You are strongly advised to carry a whistle.',
      'Under no circumstances should you feed the wildlife.',
      'In the event of an emergency, call...',
      'Inspect your harness for signs of wear.',
      'Should the weather deteriorate, return to base.',
      'Be aware of falling rocks in this area.',
      'As a participant, you are responsible for...',
      'Our primary concern is the safety of our guests.',
      'Compliance with these regulations is mandatory.'
    ][i],
    explanation: 'Using appropriate instructional and formal language for safety documentation.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - GIVING AND ASKING FOR ADVICE
// ============================================
export const B2_U39_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Concern and Warning',
  explanation: 'Learn how to give warnings and advice naturally in an adventurous context.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally warn a friend about a slippery rock?`,
    options: ['Watch out! That rock is really slippery.', 'Be careful, the rock is bad.', 'The rock has water.', 'Don\'t step there.'],
    correctAnswer: 'Watch out! That rock is really slippery.',
    explanation: 'Using appropriate exclamations and warnings in spoken English.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U39_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 39',
  explanation: 'Consolidation of Modals of Obligation and Adventure Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'You ___ (must/can) follow the guide\'s instructions.' : 'We ___ (don\'t have to/mustn\'t) bring our own gear; it is provided.',
    options: i < 5 ? ['must', 'can', 'may'] : ['don\'t have to', 'mustn\'t', 'needn\'t'],
    correctAnswer: i < 5 ? 'must' : 'don\'t have to',
    explanation: 'Verifying the mastery of obligation and necessity modals.',
    points: 1
  }))
};

export const B2_UNIT_39 = createB2Unit(
  'b2-u39',
  'Adventure Travel & Safety',
  'Master the language of obligation and necessity while exploring the thrill of adventure and the importance of safety.',
  ['Use modals of obligation, permission, and necessity correctly', 'Apply appropriate advice and prohibition structures', 'Understand key vocabulary for extreme sports, safety gear, and emergency procedures'],
  [
    B2_U39_BLOCK1, B2_U39_BLOCK2, B2_U39_BLOCK3, B2_U39_BLOCK4, B2_U39_BLOCK5,
    B2_U39_BLOCK6, B2_U39_BLOCK7, B2_U39_BLOCK8, B2_U39_BLOCK9, B2_U39_BLOCK10
  ]
);
