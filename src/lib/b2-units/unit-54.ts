import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 54;

// ============================================
// BLOCK 1: GRAMMAR - INVERSION (NEGATIVE ADVERBIALS)
// ============================================
export const B2_U54_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Formal City Proposals',
  grammarPoint: 'Inversion',
  explanation: 'Use inversion (auxiliary + subject) after negative or restrictive adverbials (Never, Rarely, Seldom, Little) for formal emphasis.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'Never ___ (we/have/seen) such a rapid urban expansion.',
      'Rarely ___ (cities/prioritize) green spaces over profit.',
      'Seldom ___ (one/finds) a city with no traffic issues.',
      'Little ___ (they/know) that the plan would be rejected.',
      'Only then ___ (the council/realize) the need for change.',
      'Not only ___ (it/is/polluting), but it is also expensive.',
      'Hardly ___ (had/the park/opened) when it became crowded.',
      'Under no circumstances ___ (we/should/ignore) local residents.',
      'At no time ___ (the mayor/informed) us of the new project.',
      'On no account ___ (must/the heritage site/be) demolished.'
    ][i],
    correctAnswer: [
      'have we seen',
      'do cities prioritize',
      'does one find',
      'did they know',
      'did the council realize',
      'is it polluting',
      'had the park opened',
      'should we ignore',
      'did the mayor inform',
      'must the heritage site be'
    ][i],
    explanation: 'Using inversion for formal emphasis and rhetorical style.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - INVERSION (CONDITIONALS & ONLY)
// ============================================
export const B2_U54_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Sustainable Infrastructure',
  grammarPoint: 'Inversion with Only and Conditionals',
  explanation: 'Inversion occurs after "Only after", "Only when", and in formal conditionals without "if".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'Only after the meeting ___ (the architect/showed) the blueprints.',
      'Only when we recycle ___ (we/will/save) the planet.',
      'Were I the mayor, I ___ (would/invest) in public transport.',
      'Had we known about the pollution, we ___ (would/not/have/moved).',
      'Should you need more info, ___ (please/contact) the office.',
      'Only if it rains ___ (the construction/will/stop).',
      'Not until 2050 ___ (the city/will/be) carbon neutral.',
      'Were it not for the bridge, the commute ___ (would/be) longer.',
      'Only by reducing traffic ___ (we/can/improve) air quality.',
      'Had the plan been better, it ___ (would/have/succeeded).'
    ][i],
    correctAnswer: [
      'did the architect show',
      'will we save',
      'would invest',
      'would not have moved',
      'please contact',
      'will the construction stop',
      'will the city be',
      'would be',
      'can we improve',
      'would have succeeded'
    ][i],
    explanation: 'Formal inversion in complex sentence structures.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - URBAN PLANNING
// ============================================
export const B2_U54_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'The Modern Metropolis',
  explanation: 'Terms for city design, infrastructure, and urban challenges.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The city is suffering from urban ___ (sprawl).',
      'We need to improve the public ___ (infrastructure).',
      'The new building is a ___ (landmark) of modern design.',
      '___ (Congestion) in the city center is a major problem.',
      'The neighborhood is undergoing ___ (gentrification).',
      'We are creating more ___ (pedestrian) zones.',
      'The project aims for sustainable ___ (development).',
      'The city has a lot of ___ (affordable) housing.',
      'The ___ (commute) to the suburbs takes an hour.',
      'We are investing in ___ (renewable) energy for the city.'
    ][i],
    correctAnswer: [
      'sprawl',
      'infrastructure',
      'landmark',
      'Congestion',
      'gentrification',
      'pedestrian',
      'development',
      'affordable',
      'commute',
      'renewable'
    ][i],
    explanation: 'Key vocabulary for discussing urban environments and planning.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - SUSTAINABILITY & ENVIRONMENT
// ================= ::::::::::::::::::::::::::::::
export const B2_U54_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Greener Cities',
  explanation: 'Vocabulary for eco-friendly urban initiatives and environmental protection.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The city is reducing its carbon ___ (footprint).',
      'We are promoting the use of ___ (electric) vehicles.',
      'The park provides a much-needed green ___ (space).',
      'We must tackle the issue of air ___ (pollution).',
      'The new bins encourage waste ___ (segregation).',
      'The building uses energy-___ (efficient) technology.',
      'We are protecting the local ___ (biodiversity).',
      'The city is planning to plant more ___ (trees).',
      'The river is being cleaned to restore its ___ (ecosystem).',
      'We need to encourage a more ___ (sustainable) lifestyle.'
    ][i],
    options: [
      ['footprint', 'mark', 'trace'],
      ['electric', 'power', 'battery'],
      ['space', 'room', 'area'],
      ['pollution', 'dirt', 'smoke'],
      ['segregation', 'division', 'split'],
      ['efficient', 'fast', 'smart'],
      ['biodiversity', 'life', 'nature'],
      ['trees', 'plants', 'flowers'],
      ['ecosystem', 'balance', 'cycle'],
      ['sustainable', 'long', 'good']
    ][i],
    correctAnswer: [
      'footprint',
      'electric',
      'space',
      'pollution',
      'segregation',
      'efficient',
      'biodiversity',
      'trees',
      'ecosystem',
      'sustainable'
    ][i],
    explanation: 'Environmental vocabulary in an urban planning context.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U54_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Urban Transformation',
  explanation: 'Form nouns, adjectives, and verbs related to city life and change.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (REHABILITATE) of the old docks was a success.',
      'The city is becoming more ___ (ACCESSIBLE) for disabled people.',
      '___ (URBAN) is a global trend.',
      'The architect designed an ___ (INNOVATE) bridge.',
      'We need to find a ___ (SUSTAIN) way to grow.',
      'The ___ (RESIDENT) areas are very quiet.',
      'The project will increase ___ (CONNECT) between districts.',
      'The council is focused on ___ (ENVIRON) protection.',
      'He works as an urban ___ (PLAN).',
      'The city showed great ___ (RESILIENT) after the flood.'
    ][i],
    correctAnswer: [
      'rehabilitation',
      'accessible',
      'Urbanization',
      'innovative',
      'sustainable',
      'residential',
      'connectivity',
      'environmental',
      'planner',
      'resilience'
    ][i],
    explanation: 'Transforming roots into words describing urban development.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE 15-MINUTE CITY
// ============================================
export const B2_U54_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The 15-Minute City Concept',
  explanation: 'Read about the urban planning concept where all essentials are within a 15-minute walk or bike ride.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the primary goal of the 15-minute city?' : 'How does this concept impact car usage?',
    options: [['To reduce the need for long commutes', 'To make cities bigger', 'To increase traffic'], ['It aims to significantly decrease car dependency', 'It encourages people to buy faster cars', 'It has no impact']][i % 2],
    correctAnswer: i < 5 ? 'To reduce the need for long commutes' : 'It aims to significantly decrease car dependency',
    explanation: 'Comprehending modern urban design philosophies and their benefits.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AN URBAN PLANNER\'S VISION
// ============================================
export const B2_U54_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Designing for People',
  explanation: 'Listen to an interview with an urban planner discussing the importance of human-centric design.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What should be at the heart of city planning according to the speaker?`,
    options: ['The needs and well-being of the residents', 'Maximizing space for cars', 'Building the tallest skyscrapers', 'Cutting costs at any price'],
    correctAnswer: 'The needs and well-being of the residents',
    explanation: 'Listening for core values in public service and design.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - FORMAL PROPOSALS
// ================= ::::::::::::::::::::::::
export const B2_U54_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Pitching a Green Initiative',
  explanation: 'Choose the most professional language for a formal urban proposal.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce the purpose of the proposal:',
      'To state the problem being addressed:',
      'To suggest a specific solution:',
      'To outline the benefits of the project:',
      'To mention the budget and funding:',
      'To use inversion for impact:',
      'To conclude the proposal:',
      'To refer to successful examples:',
      'To express the urgency of the matter:',
      'To invite feedback from stakeholders:'
    ][i],
    options: [
      ['The aim of this proposal is to outline...', 'I am writing to say...', 'Here is an idea:'],
      ['Currently, the city faces significant challenges regarding...', 'The city is a mess.', 'Things are bad because...'],
      ['It is recommended that the council implements...', 'Why don\'t we build...', 'We should do this:'],
      ['The implementation of this project would result in...', 'It will be good.', 'People will be happy.'],
      ['The estimated cost of the project is...', 'It costs about...', 'We need money.'],
      ['Rarely has a project offered such clear advantages.', 'We haven\'t seen a good project like this.', 'This is a great project.'],
      ['In conclusion, it is vital that we...', 'That\'s all.', 'Bye for now.'],
      ['Taking inspiration from successful models in Europe...', 'Like in other places...', 'They did it there.'],
      ['It is imperative that action be taken immediately.', 'Hurry up.', 'We need to move fast.'],
      ['We welcome the input of the local community.', 'Tell us what you think.', 'Ask questions here.']
    ][i],
    correctAnswer: [
      'The aim of this proposal is to outline...',
      'Currently, the city faces significant challenges regarding...',
      'It is recommended that the council implements...',
      'The implementation of this project would result in...',
      'The estimated cost of the project is...',
      'Rarely has a project offered such clear advantages.',
      'In conclusion, it is vital that we...',
      'Taking inspiration from successful models in Europe...',
      'It is imperative that action be taken immediately.',
      'We welcome the input of the local community.'
    ][i],
    explanation: 'Using formal and persuasive language for civic proposals.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING CITY LIFE
// ================= ::::::::::::::::::::::::
export const B2_U54_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Under no circumstances should we...',
  explanation: 'How to use inversion naturally in formal discussions to express strong opinions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you emphasize a strong objection to a plan?`,
    options: ['Under no circumstances should we allow this development.', 'We shouldn\'t do it.', 'I don\'t like the idea.', 'No way.'],
    correctAnswer: 'Under no circumstances should we allow this development.',
    explanation: 'Using formal structures to convey conviction and authority.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U54_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 54',
  explanation: 'Consolidation of Inversion and Urban Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Never ___ (I have/have I) seen a more beautiful city.' : 'Urban ___ (sprawl/growth) is a major issue.',
    options: i < 5 ? ['I have', 'have I', 'I had'] : ['sprawl', 'growth', 'jump'],
    correctAnswer: i < 5 ? 'have I' : 'sprawl',
    explanation: 'Final check of key concepts from Unit 54.',
    points: 1
  }))
};

export const B2_UNIT_54 = createB2Unit(
  'b2-u54',
  'Urban Planning & Sustainable Cities',
  'Master the art of formal emphasis using inversion while exploring the complexities of designing sustainable, human-centric cities.',
  ['Apply inversion correctly for formal impact and rhetorical emphasis', 'Acquire vocabulary for infrastructure, gentrification, and eco-initiatives', 'Draft formal urban proposals and discuss civic issues with authority'],
  [
    B2_U54_BLOCK1, B2_U54_BLOCK2, B2_U54_BLOCK3, B2_U54_BLOCK4, B2_U54_BLOCK5,
    B2_U54_BLOCK6, B2_U54_BLOCK7, B2_U54_BLOCK8, B2_U54_BLOCK9, B2_U54_BLOCK10
  ]
);
