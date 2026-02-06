import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 7;
const LEVEL = 'b1';

// SHARDS 1-2: Business & Economics Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Markets & Finance',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "inflation"?',
      'The word "revenue" refers to:',
      'What is a "monopoly"?',
      'A "deficit" occurs when:',
      'What does "diversification" mean?',
      'The term "capital" relates to:',
      'What is an "asset"?',
      'A "subsidy" is:',
      'What is "liquidity"?',
      'The word "commodity" means:'
    ][i],
    options: [
      ['General increase in prices', 'Decrease in prices', 'A type of gas'],
      ['Total income', 'Total expenses', 'A new product'],
      ['Exclusive control of a market', 'A small shop', 'A type of game'],
      ['Spending exceeds income', 'Income exceeds spending', 'A team wins'],
      ['Spreading investments to reduce risk', 'Focusing on one item', 'Buying a car'],
      ['Financial wealth or assets', 'The main city', 'Large letters'],
      ['A useful or valuable thing', 'A debt', 'A type of plant'],
      ['Financial aid from government', 'A type of tax', 'A fine'],
      ['Ease of converting to cash', 'Water levels', 'Speed of sound'],
      ['A raw material that can be bought', 'A finished car', 'A service']
    ][i],
    correctAnswer: [
      'General increase in prices', 'Total income', 'Exclusive control of a market',
      'Spending exceeds income', 'Spreading investments to reduce risk', 'Financial wealth or assets',
      'A useful or valuable thing', 'Financial aid from government', 'Ease of converting to cash',
      'A raw material that can be bought'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Management & Trade',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "logistics"?',
      'A "merger" is:',
      'What is "globalization"?',
      'The term "outsourcing" refers to:',
      'What is "entrepreneurship"?',
      'A "stakeholder" is:',
      'What is "negotiation"?',
      'The word "quota" means:',
      'What is "arbitrage"?',
      'A "tariff" is:'
    ][i],
    options: [
      ['Detailed coordination of complex operations', 'Writing a book', 'Cooking food'],
      ['Combining two companies', 'Closing a business', 'Hiring an intern'],
      ['International integration and influence', 'Staying in one city', 'Local farming'],
      ['Obtaining goods from outside suppliers', 'Internal production', 'Firing staff'],
      ['Starting and managing a business', 'Working for a salary', 'Retiring'],
      ['Anyone interested or affected by a business', 'A vampire killer', 'A type of wood'],
      ['Discussion aimed at reaching agreement', 'Fighting', 'Sleeping'],
      ['A fixed share or limit', 'A type of quote', 'A math formula'],
      ['Simultaneous buying and selling to profit', 'Saving money', 'Gambling'],
      ['A tax on imports or exports', 'A type of ship', 'A road sign']
    ][i],
    correctAnswer: [
      'Detailed coordination of complex operations', 'Combining two companies', 'International integration and influence',
      'Obtaining goods from outside suppliers', 'Starting and managing a business', 'Anyone interested or affected by a business',
      'Discussion aimed at reaching agreement', 'A fixed share or limit', 'Simultaneous buying and selling to profit',
      'A tax on imports or exports'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Conditionals Type 1 & 2', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: If prices rise, demand ____ fall.`, options: ['will', 'would', 'shall'], correctAnswer: 'will', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Business Prepositions', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: The company is ____ financial trouble.`, options: ['in', 'at', 'on'], correctAnswer: 'in', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: Supply and Demand', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What happens when supply is low?`, options: ['Prices rise', 'Prices drop', 'No change'], correctAnswer: 'Prices rise', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: The Stock Market', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What is a "Bull Market"?`, options: ['Rising prices', 'Falling prices', 'Flat market'], correctAnswer: 'Rising prices', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: CEO Interview', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the future plan?`, options: ['Expand to Europe', 'Close the office', 'Launch a car'], correctAnswer: 'Expand to Europe', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Economics Podcast', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What caused the crisis?`, options: ['Bad loans', 'Good weather', 'New tech'], correctAnswer: 'Bad loans', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Financial Verbs', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Verb Question ${i+1}: Define "Invest".`, options: ['Put money into to earn profit', 'Spend on food', 'Lose money'], correctAnswer: 'Put money into to earn profit', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Economic Indicators', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Indicator Question ${i+1}: GDP stands for:`, options: ['Gross Domestic Product', 'Good Day People', 'General Data Point'], correctAnswer: 'Gross Domestic Product', points: 1 })) };

export const B1_WEEK_7 = createShardedToeflUnit(
  'toefl-b1-w7',
  'Week 7: Business & Economics',
  'Master the language of trade, finance, and global markets.',
  ['Analyze economic trends and data', 'Use conditional sentences for business scenarios', 'Define core financial and management terms'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
