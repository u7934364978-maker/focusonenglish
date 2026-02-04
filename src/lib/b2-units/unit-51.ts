import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 51;

// ============================================
// BLOCK 1: GRAMMAR - WISH & IF ONLY (PAST)
// ============================================
export const B2_U51_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Economic Regrets',
  grammarPoint: 'Wish/If Only',
  explanation: 'Use "wish/if only + past perfect" to express regrets about the past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'I wish I ___ (invest) in that company ten years ago.',
      'If only the government ___ (act) sooner to stop the crisis.',
      'She wishes she ___ (not / sell) her shares during the crash.',
      'If only we ___ (see) the signs of the recession earlier.',
      'I wish the bank ___ (not / close) my account.',
      'If only they ___ (lower) interest rates last year.',
      'He wishes he ___ (study) economics at university.',
      'If only I ___ (save) more money during the boom.',
      'She wishes she ___ (not / take) out such a large loan.',
      'If only the market ___ (stabilize) before the weekend.'
    ][i],
    correctAnswer: [
      'had invested',
      'had acted',
      'hadn\'t sold',
      'had seen',
      'hadn\'t closed',
      'had lowered',
      'had studied',
      'had saved',
      'hadn\'t taken',
      'had stabilized'
    ][i],
    explanation: 'Expressing regret about past economic decisions.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - THIRD CONDITIONAL
// ============================================
export const B2_U51_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Hypothetical Recoveries',
  grammarPoint: 'Third Conditional',
  explanation: 'Use "If + past perfect, would have + past participle" to describe hypothetical past situations.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'If the bank ___ (not / fail), the crisis wouldn\'t have been so severe.',
      'They would have avoided bankruptcy if they ___ (manage) their debt better.',
      'If the government ___ (provide) a stimulus package, the recovery would have been faster.',
      'We ___ (not / lose) our jobs if the factory hadn\'t closed.',
      'If I had bought gold, I ___ (make) a huge profit.',
      'The economy ___ (recover) sooner if interest rates had been lower.',
      'If they ___ (diversify) their investments, they wouldn\'t have lost everything.',
      'I would have started my own business if I ___ (have) enough capital.',
      'If the market ___ (not / crash), we would have retired by now.',
      'The country ___ (avoid) the recession if it had controlled inflation.'
    ][i],
    correctAnswer: [
      'hadn\'t failed',
      'had managed',
      'had provided',
      'wouldn\'t have lost',
      'would have made',
      'would have recovered',
      'had diversified',
      'had had',
      'hadn\'t crashed',
      'would have avoided'
    ][i],
    explanation: 'Using the third conditional for hypothetical economic scenarios.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - ECONOMY & FINANCE
// ============================================
export const B2_U51_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Economic Terms',
  explanation: 'Vocabulary for describing the economy, markets, and financial states.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The country is currently in a deep ___ (recession).',
      'The ___ (inflation) rate has risen to 5%.',
      'The central bank increased the interest ___ (rates).',
      'Many companies are facing ___ (bankruptcy).',
      'The stock ___ (market) crashed on Monday.',
      'We need to reduce our national ___ (debt).',
      'The government announced a new ___ (stimulus) package.',
      'The ___ (unemployment) rate is at a record high.',
      'The ___ (currency) has lost value against the dollar.',
      'There is a lack of ___ (consumer) confidence.'
    ][i],
    correctAnswer: [
      'recession',
      'inflation',
      'rates',
      'bankruptcy',
      'market',
      'debt',
      'stimulus',
      'unemployment',
      'currency',
      'consumer'
    ][i],
    explanation: 'Core vocabulary for discussing economic issues.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - BANKING & INVESTMENT
// ============================================
export const B2_U51_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Money Management',
  explanation: 'Terms for banking, loans, and personal finance.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'I need to take out a ___ (mortgage) to buy a house.',
      'The bank offered me a low-interest ___ (loan).',
      'She has a diversified ___ (portfolio) of shares.',
      'I want to ___ (invest) in renewable energy.',
      'You should always read the fine ___ (print) before signing.',
      'My savings ___ (account) has a low interest rate.',
      'He is struggling to pay his ___ (credit) card bill.',
      'The company paid a generous ___ (dividend).',
      'We need to find a more ___ (profitable) venture.',
      'The transaction fee is very ___ (high).'
    ][i],
    options: [
      ['mortgage', 'loan', 'credit'],
      ['loan', 'debt', 'bill'],
      ['portfolio', 'bag', 'box'],
      ['invest', 'spend', 'give'],
      ['print', 'paper', 'text'],
      ['account', 'box', 'card'],
      ['credit', 'money', 'cash'],
      ['dividend', 'gift', 'pay'],
      ['profitable', 'good', 'rich'],
      ['high', 'big', 'large']
    ][i],
    correctAnswer: [
      'mortgage',
      'loan',
      'portfolio',
      'invest',
      'print',
      'account',
      'credit',
      'dividend',
      'profitable',
      'high'
    ][i],
    explanation: 'Vocabulary for personal and corporate finance.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U51_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Economic Growth',
  explanation: 'Form nouns, adjectives, and verbs related to the economy.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The country needs more ___ (INVEST).',
      'He is a world-renowned ___ (ECONOMY).',
      'The ___ (STABLE) of the market is crucial.',
      'We need to ___ (MODERN) the financial system.',
      'The ___ (GROW) of the GDP was slow.',
      'It was an ___ (EXPENSE) mistake.',
      'She is a very ___ (SUCCESS) entrepreneur.',
      'The results were ___ (FINANCE) devastating.',
      'We are looking for a ___ (SOLVE) to the debt.',
      'The ___ (PROMPT) of the recovery was surprising.'
    ][i],
    correctAnswer: [
      'investment',
      'economist',
      'stability',
      'modernize',
      'growth',
      'expensive',
      'successful',
      'financially',
      'solution',
      'promptness'
    ][i],
    explanation: 'Transforming root words into economic terminology.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE 2008 CRISIS
// ============================================
export const B2_U51_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Lessons from the Past',
  explanation: 'Read a short article about the causes of the 2008 global financial crisis.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What was a primary cause of the 2008 crisis?' : 'How did governments respond to the crash?',
    options: [['The housing market bubble and subprime mortgages', 'Lack of oil', 'Too many taxes'], ['By providing massive bailouts for banks', 'By closing all banks', 'By doing nothing']][i % 2],
    correctAnswer: i < 5 ? 'The housing market bubble and subprime mortgages' : 'By providing massive bailouts for banks',
    explanation: 'Identifying the causes and consequences of historical economic events.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AN ECONOMIC FORECAST
// ============================================
export const B2_U51_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Predicting the Future',
  explanation: 'Listen to an economist predicting the market trends for the next year.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the speaker's main concern for the upcoming quarter?`,
    options: ['Persistent high inflation and energy costs', 'Too much money in the market', 'Lack of jobs', 'The weather'],
    correctAnswer: 'Persistent high inflation and energy costs',
    explanation: 'Listening for economic indicators and future risks.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - ECONOMIC REPORTS
// ============================================
export const B2_U51_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Summarizing Trends',
  explanation: 'Identify the most professional way to describe economic data.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To report a steady increase:',
      'To describe a volatile market:',
      'To mention a peak:',
      'To suggest a future trend:',
      'To conclude a financial summary:',
      'To highlight a risk factor:',
      'To describe a causal link:',
      'To provide a recommendation:',
      'To cite an economic study:',
      'To use a precise verb for "growing":'
    ][i],
    options: [
      ['The GDP has grown at a steady rate of 2%.', 'The GDP went up.', 'Money grew.'],
      ['The market has been extremely volatile lately.', 'The market is jumping around.', 'Prices are crazy.'],
      ['The inflation rate peaked in July.', 'Inflation was highest in July.', 'Top was July.'],
      ['All indicators suggest that...', 'I think...', 'It looks like:'],
      ['In summary, the economic outlook remains...', 'So it\'s okay.', 'Last words:'],
      ['A major risk factor is the rising cost of...', 'Watch out for...', 'Bad thing is:'],
      ['This can be directly attributed to...', 'This happened because of...', 'The reason is:'],
      ['It is advisable to diversify your...', 'Do this:', 'I think you should:'],
      ['According to the latest IMF report,', 'The IMF said...', 'Look at IMF:'],
      ['The sector expanded significantly.', 'The sector got bigger.', 'It grew a lot.']
    ][i],
    correctAnswer: [
      'The GDP has grown at a steady rate of 2%.',
      'The market has been extremely volatile lately.',
      'The inflation rate peaked in July.',
      'All indicators suggest that...',
      'In summary, the economic outlook remains...',
      'A major risk factor is the rising cost of...',
      'This can be directly attributed to...',
      'It is advisable to diversify your...',
      'According to the latest IMF report,',
      'The sector expanded significantly.'
    ][i],
    explanation: 'Using appropriate formal and technical register for economic writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING FINANCES
// ============================================
export const B2_U51_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: If I had known about the crash...',
  explanation: 'How to use wish and the third conditional naturally to discuss financial regrets.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally express a regret about not buying property?`,
    options: ['If only I had bought a house when prices were low.', 'I wish I buy a house.', 'If I bought a house, I am rich.', 'I should buy a house.'],
    correctAnswer: 'If only I had bought a house when prices were low.',
    explanation: 'Using "if only" with the past perfect to express deep regret.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U51_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 51',
  explanation: 'Consolidation of Wish, Third Conditional and Economic Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'I wish I ___ (had/have) saved more money.' : 'The country is in a ___ (recession/boom), so jobs are scarce.',
    options: i < 5 ? ['had', 'have', 'did'] : ['recession', 'boom', 'inflation'],
    correctAnswer: i < 5 ? 'had' : 'recession',
    explanation: 'Final check of key concepts from Unit 51.',
    points: 1
  }))
};

export const B2_UNIT_51 = createB2Unit(
  'b2-u51',
  'Global Economic Crisis',
  'Navigate the complexities of global finance while mastering the use of wish and the third conditional to analyze past economic events.',
  ['Use wish and if only correctly to express past regrets', 'Apply the third conditional accurately for hypothetical past scenarios', 'Acquire vocabulary for economic cycles, banking, and investment'],
  [
    B2_U51_BLOCK1, B2_U51_BLOCK2, B2_U51_BLOCK3, B2_U51_BLOCK4, B2_U51_BLOCK5,
    B2_U51_BLOCK6, B2_U51_BLOCK7, B2_U51_BLOCK8, B2_U51_BLOCK9, B2_U51_BLOCK10
  ]
);
