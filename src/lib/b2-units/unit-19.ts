import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 19;

// ============================================
// BLOCK 1: GRAMMAR - DEFINITE ARTICLE (THE)
// ============================================
export const B2_U19_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Advanced Articles: The Definite Article',
  grammarPoint: 'Articles',
  explanation: 'Use "the" for specific things, unique items, and with some geographical names and institutions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      '___ economy of the Eurozone is recovering.',
      '___ IMF has predicted a slowdown.',
      '___ United States is a major player in trade.',
      '___ Pacific Ocean is vast.',
      'We visited ___ Netherlands last year.',
      '___ rich should pay more taxes.',
      'He is ___ best economist in the country.',
      'I live in ___ city center.',
      '___ environment is a global priority.',
      '___ sun rises in the east.'
    ][i],
    options: [
      ['The', 'A', '(zero)'],
      ['The', 'An', '(zero)'],
      ['The', 'A', '(zero)'],
      ['The', 'A', '(zero)'],
      ['the', 'a', '(zero)'],
      ['The', 'A', '(zero)'],
      ['the', 'a', 'an'],
      ['the', 'a', '(zero)'],
      ['The', 'An', '(zero)'],
      ['The', 'A', '(zero)']
    ][i],
    correctAnswer: Array(10).fill('the').map((v, idx) => idx < 3 || idx === 5 || idx === 8 || idx === 9 ? v.charAt(0).toUpperCase() + v.slice(1) : v)[i],
    explanation: 'Using "the" for specific or unique entities.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - INDEFINITE AND ZERO ARTICLE
// ============================================
export const B2_U19_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Indefinite and Zero Article',
  grammarPoint: 'Articles',
  explanation: 'Use a/an for non-specific singular countable nouns and zero article for plural or uncountable nouns in a general sense.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      '___ (zero) globalization has changed the world.',
      'He is ___ (an) expert in macroeconomics.',
      '___ (zero) interest rates are low.',
      'I have ___ (a) question about the budget.',
      '___ (zero) money doesn\'t buy happiness.',
      'She is ___ (a) consultant for the government.',
      'We need ___ (zero) information before we decide.',
      '___ (zero) technology is evolving fast.',
      'It was ___ (an) honor to meet him.',
      '___ (zero) people are worried about inflation.'
    ][i],
    correctAnswer: [
      '',
      'an',
      '',
      'a',
      '',
      'a',
      '',
      '',
      'an',
      ''
    ][i],
    explanation: 'Applying rules for non-specific and general contexts.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - ECONOMIC TRENDS
// ============================================
export const B2_U19_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Economic Trends',
  explanation: 'Vocabulary for describing the state of the economy.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The country is currently in a ___ (recession).',
      'The ___ (inflation) rate has reached 5%.',
      'We have seen a ___ (growth) in GDP.',
      'The ___ (unemployment) rate is falling.',
      'The stock ___ (market) is very volatile.',
      'Governments are worried about the national ___ (debt).',
      '___ (Interest) rates have increased again.',
      'The ___ (standard) of living is improving.',
      '___ (Fiscal) policy is used to control the economy.',
      'The ___ (currency) has weakened against the dollar.'
    ][i],
    correctAnswer: [
      'recession',
      'inflation',
      'growth',
      'unemployment',
      'market',
      'debt',
      'Interest',
      'standard',
      'Fiscal',
      'currency'
    ][i],
    explanation: 'Core vocabulary for economic discussions.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - GLOBALIZATION & TRADE
// ============================================
export const B2_U19_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Globalization and Trade',
  explanation: 'Terms for international business and global connections.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      '___ (Globalization) has led to more competition.',
      'We need a ___ (free) trade agreement.',
      'The ___ (supply) chain was disrupted.',
      'He works for a ___ (multinational) corporation.',
      '___ (Outsourcing) can reduce costs.',
      '___ (Emerging) markets are growing fast.',
      'We need to reduce trade ___ (barriers).',
      'The ___ (import) tax has increased.',
      '___ (Exports) have reached an all-time high.',
      'We live in a ___ (borderless) world.'
    ][i],
    options: [
      ['Globalization', 'Localization', 'Nationalization'],
      ['free', 'open', 'clear'],
      ['supply', 'fast', 'long'],
      ['multinational', 'big', 'global'],
      ['Outsourcing', 'In-sourcing', 'Buying'],
      ['Emerging', 'Growing', 'New'],
      ['barriers', 'walls', 'doors'],
      ['import', 'input', 'buy'],
      ['Exports', 'Outputs', 'Sales'],
      ['borderless', 'limitless', 'free']
    ][i],
    correctAnswer: [
      'Globalization',
      'free',
      'supply',
      'multinational',
      'Outsourcing',
      'Emerging',
      'barriers',
      'import',
      'Exports',
      'borderless'
    ][i],
    explanation: 'Vocabulary for international trade and global economic shifts.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (ECONOMY)
// ============================================
export const B2_U19_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Global Trends',
  explanation: 'Form words related to the economy.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (ECONOMY) situation is stable.',
      'Global ___ (DEPEND) is increasing.',
      'The ___ (STABLE) of the market is at risk.',
      'We need ___ (SUSTAIN) growth.',
      'The ___ (INEQUAL) between countries is huge.',
      'The ___ (DEVELOP) of the region is impressive.',
      'He is a very ___ (INFLUENCE) economist.',
      'The ___ (PRODUCT) of the factory is rising.',
      'We need to improve our ___ (COMPETE).',
      'The ___ (REDUCE) in poverty is a goal.'
    ][i],
    correctAnswer: [
      'economic',
      'dependence',
      'stability',
      'sustainable',
      'inequality',
      'development',
      'influential',
      'productivity',
      'competitiveness',
      'reduction'
    ][i],
    explanation: 'Common word transformations in an economic context.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE PROS AND CONS OF GLOBALIZATION
// ============================================
export const B2_U19_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: A World without Borders?',
  explanation: 'Read the article about globalization and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is one benefit of globalization?' : 'What is a common criticism?',
    options: [['Lower prices for consumers', 'More borders', 'Less trade', 'No competition'], ['Loss of local culture', 'Cheaper goods', 'More travel', 'Better tech']][i % 2],
    correctAnswer: i < 5 ? 'Lower prices for consumers' : 'Loss of local culture',
    explanation: 'Analyzing global socio-economic arguments.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - ECONOMIC REPORT
// ============================================
export const B2_U19_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: The Weekly Market Update',
  explanation: 'Listen to the financial reporter and answer the questions about the current trends.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What happened to the price of oil this week?`,
    options: ['It rose slightly', 'It fell sharply', 'It stayed the same', 'It reached an all-time high'],
    correctAnswer: 'It rose slightly',
    explanation: 'Listening for precise data and trends in a report.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - REPORTS & GRAPHS
// ============================================
export const B2_U19_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Describing Economic Data',
  explanation: 'Choose the best phrase to describe a trend in a graph.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To describe a sharp increase:',
      'To describe a gradual decrease:',
      'To describe a period of no change:',
      'To describe a peak:',
      'To describe a low point:',
      'To describe a fluctuation:',
      'To refer to a time period:',
      'To mention the source:',
      'To compare two trends:',
      'To conclude a description:'
    ][i],
    options: [
      ['Sales soared in the second quarter.', 'Sales went up.', 'Up!'],
      ['There was a steady decline in...', 'Down slowly.', 'Less.'],
      ['The figure remained stable for...', 'No change.', 'Same.'],
      ['Inflation reached a peak of 10%.', 'Top point:', 'Highest:'],
      ['Unemployment hit an all-time low.', 'Bottom point:', 'Lowest:'],
      ['Prices fluctuated throughout the year.', 'Up and down.', 'Change:'],
      ['Over the last decade, we have seen...', 'A long time.', 'Period:'],
      ['According to the data provided by...', 'Source says...', 'Data:'],
      ['In contrast to the previous year...', 'Versus last year.', 'Compare:'],
      ['Overall, the trend is positive.', 'Summary:', 'The end.']
    ][i],
    correctAnswer: [
      'Sales soared in the second quarter.',
      'There was a steady decline in...',
      'The figure remained stable for...',
      'Inflation reached a peak of 10%.',
      'Unemployment hit an all-time low.',
      'Prices fluctuated throughout the year.',
      'Over the last decade, we have seen...',
      'According to the data provided by...',
      'In contrast to the previous year...',
      'Overall, the trend is positive.'
    ][i],
    explanation: 'Using specific vocabulary for data analysis and graph description.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING ECONOMIC ISSUES
// ============================================
export const B2_U19_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Certainty about Trends',
  explanation: 'Identify natural ways to talk about economic predictions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally predict an economic recovery?`,
    options: ['There are clear signs of a recovery.', 'I think recovery.', 'Maybe recovery.', 'Recovery is coming.'],
    correctAnswer: 'There are clear signs of a recovery.',
    explanation: 'Using professional and nuanced language to discuss the future.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U19_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 19',
  explanation: 'Consolidation of Articles and Economic Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? '___ (The/A) unemployment is a major issue.' : 'He is ___ (a/an) economist.',
    options: i < 5 ? ['(zero article)', 'The', 'A'] : ['an', 'a', '(zero article)'],
    correctAnswer: i < 5 ? '(zero article)' : 'an',
    explanation: 'Review of article usage in general vs. specific contexts.',
    points: 1
  }))
};

export const B2_UNIT_19 = createB2Unit(
  'b2-u19',
  'Economic Trends',
  'Master the nuances of advanced article usage while exploring the complex world of global economics.',
  ['Use definite, indefinite, and zero articles correctly in abstract and specific contexts', 'Identify and use vocabulary for economic trends and globalization', 'Describe data and trends accurately in reports and discussions'],
  [
    B2_U19_BLOCK1, B2_U19_BLOCK2, B2_U19_BLOCK3, B2_U19_BLOCK4, B2_U19_BLOCK5,
    B2_U19_BLOCK6, B2_U19_BLOCK7, B2_U19_BLOCK8, B2_U19_BLOCK9, B2_U19_BLOCK10
  ]
);
