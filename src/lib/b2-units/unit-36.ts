import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 36;

// ============================================
// BLOCK 1: GRAMMAR - CAUSATIVE HAVE/GET (SOMETHING DONE)
// ============================================
export const B2_U36_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Causative: Have/Get Something Done',
  grammarPoint: 'Causative',
  explanation: 'Use have/get + object + past participle when someone else does a service for you.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'I need to have my car ___ (repair).',
      'She is getting her hair ___ (cut) tomorrow.',
      'We had the house ___ (paint) last summer.',
      'They will have the groceries ___ (deliver) to their door.',
      'You should get your eyes ___ (test) regularly.',
      'I had my phone ___ (fix) at the shop.',
      'She got her dress ___ (alter) for the wedding.',
      'We are having a new kitchen ___ (install).',
      'He had his tooth ___ (extract) by the dentist.',
      'I must get this document ___ (translate) soon.'
    ][i],
    options: [
      ['repaired', 'repair', 'repairing'],
      ['cut', 'cuts', 'cutting'],
      ['painted', 'paint', 'painting'],
      ['delivered', 'deliver', 'delivering'],
      ['tested', 'test', 'testing'],
      ['fixed', 'fix', 'fixing'],
      ['altered', 'alter', 'altering'],
      ['installed', 'install', 'installing'],
      ['extracted', 'extract', 'extracting'],
      ['translated', 'translate', 'translating']
    ][i],
    correctAnswer: [
      'repaired',
      'cut',
      'painted',
      'delivered',
      'tested',
      'fixed',
      'altered',
      'installed',
      'extracted',
      'translated'
    ][i],
    explanation: 'Using the past participle after the object in causative structures.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - CAUSATIVE: HAVE VS GET (PERSON)
// ============================================
export const B2_U36_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Causative: Getting Someone to Do Something',
  grammarPoint: 'Causative',
  explanation: 'Use "have + person + verb (base)" or "get + person + to + verb" to talk about delegating or persuading.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'I had the assistant ___ (check) the price.',
      'She got her friend ___ (help) her with the shopping.',
      'We had the manager ___ (explain) the policy.',
      'They got the technician ___ (fix) the computer.',
      'I\'ll have the courier ___ (collect) the package.',
      'Can you get the kids ___ (tidy) their rooms?',
      'The company had a consultant ___ (review) the strategy.',
      'She got the tailor ___ (shorten) her trousers.',
      'He had the waiter ___ (bring) some more water.',
      'I managed to get the shop ___ (give) me a refund.'
    ][i],
    correctAnswer: [
      'check',
      'to help',
      'explain',
      'to fix',
      'collect',
      'to tidy',
      'review',
      'to shorten',
      'bring',
      'to give'
    ][i],
    explanation: 'Distinguishing between "have someone do" and "get someone to do".',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - SHOPPING & CONSUMER BEHAVIOR
// ============================================
export const B2_U36_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'The Modern Consumer',
  explanation: 'Terms for shopping habits, retail, and customer experience.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'I love browsing in ___ (independent) boutiques.',
      'She is a ___ (compulsive) shopper who can\'t stop buying.',
      'We went on a shopping ___ (spree) at the weekend.',
      'The item was a real ___ (bargain) at half price.',
      'I always keep my ___ (receipt) in case I need a refund.',
      'The shop has a very generous ___ (loyalty) program.',
      'Many people prefer ___ (online) shopping for convenience.',
      'The ___ (aisles) of the supermarket were very crowded.',
      'He asked for a ___ (discount) on the floor model.',
      'The product was unfortunately out of ___ (stock).'
    ][i],
    correctAnswer: [
      'independent',
      'compulsive',
      'spree',
      'bargain',
      'receipt',
      'loyalty',
      'online',
      'aisles',
      'discount',
      'stock'
    ][i],
    explanation: 'Core vocabulary for describing modern retail and consumer habits.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - ADVERTISING TECHNIQUES
// ============================================
export const B2_U36_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Marketing and Persuasion',
  explanation: 'Terms for how companies sell products and influence audiences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The ___ (brand) loyalty of their customers is impressive.',
      'The ad uses a very catchy ___ (slogan).',
      'They are running a large-scale ___ (advertising) campaign.',
      'The celebrity ___ (endorsement) boosted sales significantly.',
      '___ (Subliminal) messages in ads are controversial.',
      'The company is targeting a specific ___ (demographic).',
      'They use ___ (pop-up) ads on their website.',
      'The ___ (billboard) was visible from the motorway.',
      'They are trying to create a ___ (buzz) around the new launch.',
      'The ___ (commercial) was aired during the Super Bowl.'
    ][i],
    options: [
      ['brand', 'name', 'mark'],
      ['slogan', 'song', 'word'],
      ['advertising', 'publicity', 'notice'],
      ['endorsement', 'support', 'help'],
      ['Subliminal', 'Hidden', 'Fast'],
      ['demographic', 'group', 'people'],
      ['pop-up', 'jump', 'open'],
      ['billboard', 'sign', 'poster'],
      ['buzz', 'noise', 'talk'],
      ['commercial', 'ad', 'video']
    ][i],
    correctAnswer: [
      'brand',
      'slogan',
      'advertising',
      'endorsement',
      'Subliminal',
      'demographic',
      'pop-up',
      'billboard',
      'buzz',
      'commercial'
    ][i],
    explanation: 'Vocabulary for the techniques and tools of the advertising industry.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (COMMERCIALISM)
// ============================================
export const B2_U36_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Trade & Consumption',
  explanation: 'Form words related to buying, selling, and services.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (CONSUME) society we live in has pros and cons.',
      'This product is highly ___ (ADVERTISE) on social media.',
      'We are looking for a ___ (RELY) service provider.',
      'The ___ (COMMERCE) of the holidays is often criticized.',
      'They offered a very ___ (COMPETE) price.',
      'The ___ (SATISFY) of our customers is our priority.',
      'It was an ___ (EXPENSE) purchase but worth it.',
      'The ___ (OWN) of the shop is a local businessman.',
      'The ___ (DELIVER) will arrive between 9 and 5.',
      'She showed great ___ (PERSUADE) skills in the negotiation.'
    ][i],
    correctAnswer: [
      'consumer',
      'advertised',
      'reliable',
      'commercialization',
      'competitive',
      'satisfaction',
      'expensive',
      'owner',
      'delivery',
      'persuasive'
    ][i],
    explanation: 'Applying word formation rules to commercial and service contexts.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE PSYCHOLOGY OF ADVERTISING
// ============================================
export const B2_U36_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Why We Buy What We Buy',
  explanation: 'Read about the psychological triggers in marketing and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the "scarcity principle" in advertising?' : 'How does emotional branding work?',
    options: [['Creating a sense of urgency (limited time/stock)', 'Making things cheap', 'Using many colors'], ['By connecting a product to a feeling or value', 'By showing the price clearly', 'By using logical arguments']][i % 2],
    correctAnswer: i < 5 ? 'Creating a sense of urgency (limited time/stock)' : 'By connecting a product to a feeling or value',
    explanation: 'Analyzing the strategies used to influence consumer behavior.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - CONSUMER RIGHTS
// ============================================
export const B2_U36_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Knowing Your Rights as a Shopper',
  explanation: 'Listen to a legal expert explaining what to do if a product is faulty.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the first step if you buy a broken electronic item?`,
    options: ['Return it to the shop with the receipt', 'Call the manufacturer immediately', 'Throw it away', 'Write a post on social media'],
    correctAnswer: 'Return it to the shop with the receipt',
    explanation: 'Listening for practical advice on consumer protection.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - COMPLAINT EMAILS
// ============================================
export const B2_U36_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: A Formal Letter of Complaint',
  explanation: 'Identify the most effective and professional way to express dissatisfaction.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To state the reason for writing:',
      'To describe the faulty product:',
      'To express disappointment politely:',
      'To mention a service you had done:',
      'To ask for a specific resolution:',
      'To set a deadline for a response:',
      'To use a formal sign-off:',
      'To refer to the original purchase:',
      'To highlight the poor quality:',
      'To mention the impact of the problem:'
    ][i],
    options: [
      ['I am writing to express my dissatisfaction with...', 'I am angry about...', 'Fix this now.'],
      ['The appliance I purchased failed to function as...', 'It broke.', 'It\'s not working.'],
      ['Needless to say, I was very disappointed by...', 'I am sad.', 'Bad service.'],
      ['I had the boiler serviced by your team, but...', 'You fixed my boiler.', 'Boiler check.'],
      ['I would like to request a full refund or a...', 'Give me money.', 'Change it.'],
      ['I look forward to hearing from you within 7 days.', 'Answer fast.', 'Soon please.'],
      ['Yours faithfully,', 'Best,', 'Thanks.'],
      ['With reference to order number #12345...', 'About my stuff...', 'The thing I bought.'],
      ['The craftsmanship was far below the expected...', 'It\'s made badly.', 'Poor job.'],
      ['This has caused me significant inconvenience.', 'It was a problem.', 'I am annoyed.']
    ][i],
    correctAnswer: [
      'I am writing to express my dissatisfaction with...',
      'The appliance I purchased failed to function as...',
      'Needless to say, I was very disappointed by...',
      'I had the boiler serviced by your team, but...',
      'I would like to request a full refund or a...',
      'I look forward to hearing from you within 7 days.',
      'Yours faithfully,',
      'With reference to order number #12345...',
      'The craftsmanship was far below the expected...',
      'This has caused me significant inconvenience.'
    ][i],
    explanation: 'Using appropriate formal register for consumer advocacy.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - NEGOTIATING A DEAL
// ============================================
export const B2_U36_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Persuading and Bargaining',
  explanation: 'Learn how to use "get" and persuasive language in a shop.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally ask for a discount on a damaged item?`,
    options: ['Since it\'s a bit scratched, could you get the manager to lower the price?', 'Make it cheaper.', 'Discount?', 'I want it for less.'],
    correctAnswer: 'Since it\'s a bit scratched, could you get the manager to lower the price?',
    explanation: 'Using the causative "get" and polite persuasion in speech.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U36_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 36',
  explanation: 'Consolidation of Causative have/get and Consumer Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'I\'ll have the assistant ___ (bring) the item.' : 'She got the dress ___ (alter) for the party.',
    options: i < 5 ? ['bring', 'to bring', 'brought'] : ['altered', 'alter', 'altering'],
    correctAnswer: i < 5 ? 'bring' : 'altered',
    explanation: 'Reviewing the nuances of different causative structures.',
    points: 1
  }))
};

export const B2_UNIT_36 = createB2Unit(
  'b2-u36',
  'Consumerism & Advertising',
  'Analyze the impact of advertising and consumer culture while mastering causative structures.',
  ['Use have/get something done for services correctly', 'Distinguish between have someone do and get someone to do', 'Understand vocabulary for shopping habits, marketing, and consumer rights'],
  [
    B2_U36_BLOCK1, B2_U36_BLOCK2, B2_U36_BLOCK3, B2_U36_BLOCK4, B2_U36_BLOCK5,
    B2_U36_BLOCK6, B2_U36_BLOCK7, B2_U36_BLOCK8, B2_U36_BLOCK9, B2_U36_BLOCK10
  ]
);
