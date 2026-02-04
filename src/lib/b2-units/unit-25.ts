import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 25;

// ============================================
// BLOCK 1: GRAMMAR - CAUSATIVE HAVE
// ============================================
export const B2_U25_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Causative: Have something done',
  grammarPoint: 'Causative',
  explanation: 'Use "have + object + past participle" when someone does something for you.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'I had the solar panels ___ (install) yesterday.',
      'We are going to have the roof ___ (repair).',
      'She has her car ___ (service) every year.',
      'He had his hair ___ (cut) last week.',
      'They had the windows ___ (clean) by a professional.',
      'I need to have my eyes ___ (test).',
      'We had the report ___ (write) by a consultant.',
      'She is having her house ___ (paint) right now.',
      'I had my computer ___ (fix) at the shop.',
      'They had the project ___ (approve) by the board.'
    ][i],
    options: [
      ['installed', 'install', 'installing'],
      ['repaired', 'repair', 'repairing'],
      ['serviced', 'service', 'servicing'],
      ['cut', 'cuts', 'cutting'],
      ['cleaned', 'clean', 'cleaning'],
      ['tested', 'test', 'testing'],
      ['written', 'write', 'writing'],
      ['painted', 'paint', 'painting'],
      ['fixed', 'fix', 'fixing'],
      ['approved', 'approve', 'approving']
    ][i],
    correctAnswer: [
      'installed',
      'repaired',
      'serviced',
      'cut',
      'cleaned',
      'tested',
      'written',
      'painted',
      'fixed',
      'approved'
    ][i],
    explanation: 'Using the past participle in causative structures.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - CAUSATIVE GET
// ============================================
export const B2_U25_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Causative: Get someone to do something',
  grammarPoint: 'Causative',
  explanation: 'Use "get + person + to + infinitive" to mean you persuade or arrange for someone to do something.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'I got my brother ___ (help) me with the solar panels.',
      'We got the technician ___ (fix) the inverter.',
      'She got her friend ___ (lend) her the book.',
      'He got the kids ___ (clean) their room.',
      'I got the manager ___ (approve) the budget.',
      'They got the experts ___ (conduct) the study.',
      'She got the plumber ___ (repair) the leak.',
      'I got my colleague ___ (check) the data.',
      'We got the neighbors ___ (join) the project.',
      'He got his boss ___ (give) him a raise.'
    ][i],
    correctAnswer: [
      'to help',
      'to fix',
      'to lend',
      'to clean',
      'to approve',
      'to conduct',
      'to repair',
      'to check',
      'to join',
      'to give'
    ][i],
    explanation: 'Using the to-infinitive after "get" + person.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - RENEWABLE ENERGY
// ============================================
export const B2_U25_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Clean Energy Sources',
  explanation: 'Vocabulary for various types of renewable energy.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      '___ (Solar) power uses energy from the sun.',
      '___ (Wind) turbines convert wind into electricity.',
      '___ (Hydroelectric) power comes from moving water.',
      '___ (Geothermal) energy is heat from inside the Earth.',
      '___ (Biomass) uses organic material for fuel.',
      'Nuclear energy is low-___ (carbon) but controversial.',
      'We need to increase the ___ (share) of renewables.',
      'A solar ___ (panel) can be installed on the roof.',
      'The wind ___ (farm) is located on the coast.',
      'Energy ___ (storage) is a major technical challenge.'
    ][i],
    correctAnswer: [
      'Solar',
      'Wind',
      'Hydroelectric',
      'Geothermal',
      'Biomass',
      'carbon',
      'share',
      'panel',
      'farm',
      'storage'
    ][i],
    explanation: 'Core terms for renewable energy technology.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - ENERGY EFFICIENCY & GRID
// ============================================
export const B2_U25_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'The Smart Grid and Efficiency',
  explanation: 'Terms for managing and saving energy.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'We need to improve energy ___ (efficiency).',
      'A ___ (smart) grid can manage demand better.',
      'Energy ___ (conservation) is about using less.',
      'The house has excellent ___ (insulation).',
      'LED bulbs are more energy-___ (efficient).',
      'We use a ___ (meter) to track consumption.',
      'The goal is to reach net ___ (zero) emissions.',
      '___ (Renewables) are replacing fossil fuels.',
      'The power ___ (grid) needs modernization.',
      'Electric vehicles can ___ (charge) at night.'
    ][i],
    options: [
      ['efficiency', 'power', 'speed'],
      ['smart', 'fast', 'big'],
      ['conservation', 'saving', 'holding'],
      ['insulation', 'walls', 'roof'],
      ['efficient', 'fast', 'bright'],
      ['meter', 'box', 'clock'],
      ['zero', 'low', 'small'],
      ['Renewables', 'Oils', 'Gas'],
      ['grid', 'line', 'net'],
      ['charge', 'fill', 'load']
    ][i],
    correctAnswer: [
      'efficiency',
      'smart',
      'conservation',
      'insulation',
      'efficient',
      'meter',
      'zero',
      'Renewables',
      'grid',
      'charge'
    ][i],
    explanation: 'Vocabulary for energy management and saving.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (ENERGY)
// ============================================
export const B2_U25_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Powering the Future',
  explanation: 'Form words related to energy and technology.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (ELECTRIC) car is becoming popular.',
      'We need to increase ___ (PRODUCE) of solar energy.',
      'The ___ (EFFICIENT) of the new turbine is high.',
      'The ___ (CONSTRUCT) of the dam took five years.',
      'There is a lot of ___ (INNOVATE) in battery tech.',
      'The ___ (RELY) of wind power is improving.',
      'The ___ (ENVIRONMENT) impact of coal is huge.',
      'We need ___ (SUSTAIN) energy solutions.',
      'The ___ (POPULAR) of green energy is growing.',
      'He is a well-known ___ (SPECIFY) in renewables.'
    ][i],
    correctAnswer: [
      'electric',
      'production',
      'efficiency',
      'construction',
      'innovation',
      'reliability',
      'environmental',
      'sustainable',
      'popularity',
      'specialist'
    ][i],
    explanation: 'Forming nouns and adjectives from energy-related bases.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE RISE OF SOLAR
// ============================================
export const B2_U25_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Solar Energy for All',
  explanation: 'Read the article about solar power adoption and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Why has the cost of solar panels dropped?' : 'What is a major disadvantage of solar power?',
    options: [['Better manufacturing and technology', 'Government bans', 'Less sun', 'People don\'t want them'], ['It only works during the day', 'It is too expensive', 'It is dangerous', 'It makes noise']][i % 2],
    correctAnswer: i < 5 ? 'Better manufacturing and technology' : 'It only works during the day',
    explanation: 'Comprehending technical and economic aspects of energy.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - GREEN ENERGY NEWS
// ============================================
export const B2_U25_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Investing in the Future',
  explanation: 'Listen to the financial report on green energy investments.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `Which renewable source received the most investment last year?`,
    options: ['Solar', 'Wind', 'Geothermal', 'Hydroelectric'],
    correctAnswer: 'Solar',
    explanation: 'Listening for comparative data and trends.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - PROPOSALS
// ============================================
export const B2_U25_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Proposing a Green Initiative',
  explanation: 'Choose the best phrase for a proposal to install solar panels in an office.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To state the aim of the proposal:',
      'To provide background information:',
      'To outline the benefits:',
      'To mention the cost:',
      'To address potential concerns:',
      'To suggest a timeline:',
      'To call for a decision:',
      'To conclude with a vision:',
      'To refer to expert advice:',
      'To show a return on investment:'
    ][i],
    options: [
      ['The purpose of this proposal is to...', 'I want solar.', 'Here is an idea:'],
      ['Currently, our energy costs are...', 'We pay a lot.', 'Info:'],
      ['The primary advantages of this move include...', 'It is good because...', 'Benefits:'],
      ['While the initial investment is high...', 'It is expensive.', 'Cost:'],
      ['Any disruption during installation will be kept to a minimum.', 'Don\'t worry.', 'No problem:'],
      ['We propose that the project starts in...', 'When?', 'Start:'],
      ['I would like to request approval for...', 'Yes or no?', 'Ask:'],
      ['In conclusion, this move will position us as a leader in...', 'The end.', 'Final word:'],
      ['According to the energy audit...', 'Someone said...', 'Source:'],
      ['We expect to break even within five years.', 'We get money back.', 'Profit:']
    ][i],
    correctAnswer: [
      'The purpose of this proposal is to...',
      'Currently, our energy costs are...',
      'The primary advantages of this move include...',
      'While the initial investment is high...',
      'Any disruption during installation will be kept to a minimum.',
      'We propose that the project starts in...',
      'I would like to request approval for...',
      'In conclusion, this move will position us as a leader in...',
      'According to the energy audit...',
      'We expect to break even within five years.'
    ][i],
    explanation: 'Using formal and structured language for business proposals.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - ARRANGING SERVICES
// ============================================
export const B2_U25_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Getting Things Done',
  explanation: 'Identify natural ways to arrange for a service.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally ask a company to install solar panels?`,
    options: ['I\'d like to have some solar panels installed on my roof.', 'Install panels for me.', 'I want panels.', 'Can you do solar?'],
    correctAnswer: 'I\'d like to have some solar panels installed on my roof.',
    explanation: 'Using the causative "have" in polite requests.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U25_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 25',
  explanation: 'Consolidation of Causative and Energy Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'I had the inverter ___ (fix).' : 'I got them ___ (help) me.',
    options: i < 5 ? ['fixed', 'fix', 'fixing'] : ['to help', 'helping', 'help'],
    correctAnswer: i < 5 ? 'fixed' : 'to help',
    explanation: 'Review of causative patterns.',
    points: 1
  }))
};

export const B2_UNIT_25 = createB2Unit(
  'b2-u25',
  'Renewable Energy',
  'Master the causative have and get while exploring the world of sustainable energy solutions.',
  ['Use "have something done" and "get someone to do something" correctly', 'Identify and use vocabulary for renewable energy sources and efficiency', 'Analyze and write proposals for green initiatives'],
  [
    B2_U25_BLOCK1, B2_U25_BLOCK2, B2_U25_BLOCK3, B2_U25_BLOCK4, B2_U25_BLOCK5,
    B2_U25_BLOCK6, B2_U25_BLOCK7, B2_U25_BLOCK8, B2_U25_BLOCK9, B2_U25_BLOCK10
  ]
);
