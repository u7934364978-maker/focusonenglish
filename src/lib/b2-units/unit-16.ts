import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 16;

// ============================================
// BLOCK 1: GRAMMAR - IT-CLEFT SENTENCES
// ============================================
export const B2_U16_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'It-Cleft Sentences',
  grammarPoint: 'Cleft Sentences',
  explanation: 'Use "It is/was... that..." to focus on a specific part of the sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'John started the company. -> It was John ___ started the company.',
      'We need innovation. -> It is innovation ___ we need.',
      'The market changed in 2008. -> It was in 2008 ___ the market changed.',
      'They failed because of lack of funding. -> It was lack of funding ___ caused the failure.',
      'I want to talk to the manager. -> It is the manager ___ I want to talk to.',
      'The CEO made the decision. -> It was the CEO ___ made the decision.',
      'We met at the startup hub. -> It was at the startup hub ___ we met.',
      'She came up with the idea. -> It was she ___ came up with the idea.',
      'He won the prize for his app. -> It was for his app ___ he won the prize.',
      'The team worked all night. -> It was the team ___ worked all night.'
    ][i],
    options: [
      ['who', 'which', 'what'],
      ['that', 'who', 'what'],
      ['that', 'when', 'which'],
      ['that', 'what', 'who'],
      ['that', 'what', 'who'],
      ['who', 'which', 'that'],
      ['that', 'where', 'which'],
      ['who', 'which', 'what'],
      ['that', 'which', 'what'],
      ['that', 'who', 'which']
    ][i],
    correctAnswer: [
      'who',
      'that',
      'that',
      'that',
      'that',
      'who',
      'that',
      'who',
      'that',
      'that'
    ][i],
    explanation: 'Identifying the focus of the cleft sentence.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - WH-CLEFT SENTENCES
// ============================================
export const B2_U16_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Wh-Cleft Sentences',
  grammarPoint: 'Cleft Sentences',
  explanation: 'Use "What... is/was..." to emphasize the action or the thing being talked about.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'I need a holiday. -> ___ I need is a holiday.',
      'She wants more responsibility. -> ___ she wants is more responsibility.',
      'We love about the job is the flexibility. -> ___ we love about the job is the flexibility.',
      'He said was "no". -> ___ he said was "no".',
      'They did was start a new brand. -> ___ they did was start a new brand.',
      'The company needs is better marketing. -> ___ the company needs is better marketing.',
      'I hate is being late. -> ___ I hate is being late.',
      'We discussed was the budget. -> ___ we discussed was the budget.',
      'He forgot was the meeting time. -> ___ he forgot was the meeting time.',
      'She realized was that she needed help. -> ___ she realized was that she needed help.'
    ][i],
    correctAnswer: 'What',
    explanation: 'Using "What" to initiate a cleft sentence for emphasis.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - STARTUPS & ENTREPRENEURSHIP
// ============================================
export const B2_U16_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'The Startup World',
  explanation: 'Vocabulary for new businesses and entrepreneurs.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'He is a successful serial ___ (entrepreneur).',
      'The startup secured a seed ___ (funding) round.',
      'We need to pitch our idea to venture ___ (capitalists).',
      'The company has a very high ___ (valuation).',
      'They are looking for an angel ___ (investor).',
      'The app has a lot of ___ (potential) for growth.',
      'We need to find our niche ___ (market).',
      'The startup is based in a tech ___ (incubator).',
      'They developed a ___ (prototype) of the product.',
      'The company went ___ (public) last year.'
    ][i],
    correctAnswer: [
      'entrepreneur',
      'funding',
      'capitalists',
      'valuation',
      'investor',
      'potential',
      'market',
      'incubator',
      'prototype',
      'public'
    ][i],
    explanation: 'Common terms in the entrepreneurship ecosystem.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - BUSINESS STRATEGY
// ============================================
export const B2_U16_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Business Strategy',
  explanation: 'Terms for planning and growing a business.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'We need a solid business ___ (plan).',
      'The goal is to ___ (scale) the business quickly.',
      'We are trying to ___ (disrupt) the industry.',
      'Customer ___ (acquisition) is our top priority.',
      'We need to improve our ___ (brand) awareness.',
      'The company has a competitive ___ (edge).',
      'We are looking for a strategic ___ (partnership).',
      'Our ___ (revenue) has increased by 20%.',
      'The ___ (profit) margin is quite low.',
      'We need to ___ (pivot) our strategy.'
    ][i],
    options: [
      ['plan', 'map', 'path'],
      ['scale', 'grow', 'make'],
      ['disrupt', 'break', 'change'],
      ['acquisition', 'buying', 'taking'],
      ['brand', 'name', 'face'],
      ['edge', 'side', 'point'],
      ['partnership', 'friendship', 'link'],
      ['revenue', 'money', 'cash'],
      ['profit', 'gain', 'win'],
      ['pivot', 'turn', 'move']
    ][i],
    correctAnswer: [
      'plan',
      'scale',
      'disrupt',
      'acquisition',
      'brand',
      'edge',
      'partnership',
      'revenue',
      'profit',
      'pivot'
    ][i],
    explanation: 'Business strategy and growth vocabulary.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (BUSINESS)
// ============================================
export const B2_U16_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Business Innovation',
  explanation: 'Form words related to entrepreneurship.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (ENTREPRENEUR) spirit is strong here.',
      'We are looking for ___ (INNOVATE) solutions.',
      'The ___ (INVEST) was a huge success.',
      'There is a lot of ___ (COMPETE) in the market.',
      'The ___ (GROWTH) of the company was rapid.',
      'He is a very ___ (AMBIT) founder.',
      'The ___ (PROFIT) of the venture is unclear.',
      'We need to improve our ___ (MARKET) strategy.',
      'The ___ (PRODUCT) of the team is impressive.',
      'She showed great ___ (LEAD) in the crisis.'
    ][i],
    correctAnswer: [
      'entrepreneurial',
      'innovative',
      'investment',
      'competition',
      'growth',
      'ambitious',
      'profitability',
      'marketing',
      'productivity',
      'leadership'
    ][i],
    explanation: 'Standard word formation in a business context.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - SUCCESSFUL STARTUP STORIES
// ============================================
export const B2_U16_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: From Garage to Global Giant',
  explanation: 'Read the story of a successful startup and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What was the founders\' biggest challenge?' : 'How did they overcome it?',
    options: [['Lack of funding', 'Bad idea', 'No team', 'Small office'], ['By finding an investor', 'By giving up', 'By working harder', 'By changing names']][i % 2],
    correctAnswer: i < 5 ? 'Lack of funding' : 'By finding an investor',
    explanation: 'Reading for detail in a narrative business text.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - PITCH DECK PRESENTATION
// ============================================
export const B2_U16_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Pitching to Investors',
  explanation: 'Listen to the pitch and identify the key components.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What problem is the startup trying to solve?`,
    options: ['Inefficient shipping', 'Low sales', 'High costs', 'Bad software'],
    correctAnswer: 'Inefficient shipping',
    explanation: 'Listening for problem/solution structure in a pitch.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - BUSINESS PITCHES
// ============================================
export const B2_U16_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Crafting a Pitch',
  explanation: 'Choose the most impactful phrase for a business pitch.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To grab attention:',
      'To state the problem:',
      'To introduce the solution:',
      'To talk about the market:',
      'To highlight the team:',
      'To mention competition:',
      'To explain the business model:',
      'To show traction:',
      'To make the "ask":',
      'To end with a call to action:'
    ][i],
    options: [
      ['Imagine a world where...', 'I have an idea.', 'Listen up.'],
      ['The problem we are addressing is...', 'Things are bad.', 'Issue:'],
      ['Our solution is a revolutionary...', 'We made this.', 'Solution:'],
      ['The total addressable market is...', 'Many people want it.', 'Market:'],
      ['Our team has a proven track record in...', 'We are good.', 'Team:'],
      ['Unlike our competitors, we offer...', 'Others are bad.', 'Versus:'],
      ['Our primary revenue stream is...', 'We make money by...', 'Money:'],
      ['We have already seen a 50% growth in...', 'People like it.', 'Proof:'],
      ['We are seeking $500k in seed funding.', 'Give us money.', 'Ask:'],
      ['Join us in transforming the industry.', 'Call me.', 'Bye.']
    ][i],
    correctAnswer: [
      'Imagine a world where...',
      'The problem we are addressing is...',
      'Our solution is a revolutionary...',
      'The total addressable market is...',
      'Our team has a proven track record in...',
      'Unlike our competitors, we offer...',
      'Our primary revenue stream is...',
      'We have already seen a 50% growth in...',
      'We are seeking $500k in seed funding.',
      'Join us in transforming the industry.'
    ][i],
    explanation: 'Using persuasive and professional language for entrepreneurship.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - GIVING A ELEVATOR PITCH
// ============================================
export const B2_U16_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: The Elevator Pitch',
  explanation: 'Identify the most effective way to summarize your business in 30 seconds.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `What is the most important thing to include in an elevator pitch?`,
    options: ['The unique value proposition', 'The full budget', 'The history of the company', 'The office location'],
    correctAnswer: 'The unique value proposition',
    explanation: 'Focusing on clarity and impact in short presentations.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U16_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 16',
  explanation: 'Consolidation of Cleft Sentences and Startup Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What we need ___ (be) more time.' : 'It was him ___ (who/that) suggested the pivot.',
    options: i < 5 ? ['is', 'are', 'was'] : ['who', 'which', 'what'],
    correctAnswer: i < 5 ? 'is' : 'who',
    explanation: 'Review of emphasis structures.',
    points: 1
  }))
};

export const B2_UNIT_16 = createB2Unit(
  'b2-u16',
  'Entrepreneurship & Startups',
  'Master the art of emphasis with cleft sentences while exploring the dynamic world of startups.',
  ['Use "It" and "Wh" cleft sentences for emphasis', 'Understand key startup and business strategy vocabulary', 'Craft and deliver an effective business pitch'],
  [
    B2_U16_BLOCK1, B2_U16_BLOCK2, B2_U16_BLOCK3, B2_U16_BLOCK4, B2_U16_BLOCK5,
    B2_U16_BLOCK6, B2_U16_BLOCK7, B2_U16_BLOCK8, B2_U16_BLOCK9, B2_U16_BLOCK10
  ]
);
