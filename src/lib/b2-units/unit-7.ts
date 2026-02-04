import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 7;

// ============================================
// BLOCK 1: GRAMMAR - MODALS OF DEDUCTION (PRESENT)
// ============================================
export const B2_U7_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Modals of Deduction: Present',
  grammarPoint: 'Modal Deduction',
  explanation: 'Use must, might, could, and can\'t to speculate about current situations.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'She ___ be at home. Her car is in the driveway.',
      'He ___ be the father. They look exactly alike!',
      'That ___ be true. It\'s impossible!',
      'They ___ be on holiday. I haven\'t seen them all week.',
      'She ___ be hungry. She just ate a huge lunch.',
      'He ___ be from Italy. He has a very strong Italian accent.',
      'That ___ be his sister. She looks much younger.',
      'They ___ be rich. They have a massive house and three cars.',
      'He ___ be working. He never answers his phone during the day.',
      'She ___ be tired. She\'s been working for twelve hours.'
    ][i],
    options: [
      ['must', 'can\'t', 'might'],
      ['must', 'could', 'can\'t'],
      ['can\'t', 'must', 'could'],
      ['might', 'must', 'can\'t'],
      ['can\'t', 'must', 'could'],
      ['must', 'might', 'could'],
      ['could', 'must', 'can\'t'],
      ['must', 'could', 'can\'t'],
      ['might', 'must', 'could'],
      ['must', 'might', 'could']
    ][i],
    correctAnswer: [
      'must',
      'must',
      'can\'t',
      'might',
      'can\'t',
      'must',
      'could',
      'must',
      'might',
      'must'
    ][i],
    explanation: 'Choosing the correct modal based on the degree of certainty.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - MODALS OF DEDUCTION (PAST)
// ============================================
export const B2_U7_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Modals of Deduction: Past',
  grammarPoint: 'Modal Deduction',
  explanation: 'Use must have, might have, could have, and can\'t have + past participle for past speculation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'She ___ (must/leave) her keys at work.',
      'He ___ (can\'t/see) us. He didn\'t wave.',
      'They ___ (might/forget) about the meeting.',
      'I ___ (could/leave) my bag on the bus.',
      'She ___ (must/be) very happy when she heard the news.',
      'He ___ (can\'t/finish) the report already. It was 50 pages!',
      'They ___ (might/go) to the cinema.',
      'I ___ (could/make) a mistake.',
      'She ___ (must/take) the wrong train.',
      'He ___ (can\'t/hear) you because of the noise.'
    ][i],
    correctAnswer: [
      'must have left',
      'can\'t have seen',
      'might have forgotten',
      'could have left',
      'must have been',
      'can\'t have finished',
      'might have gone',
      'could have made',
      'must have taken',
      'can\'t have heard'
    ][i],
    explanation: 'Speculating about past events with varying certainty.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - FAMILY RELATIONSHIPS
// ============================================
export const B2_U7_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Extended Family & Relationships',
  explanation: 'Vocabulary for family members and complex dynamics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'My father\'s brother is my ___ (uncle).',
      'My sister\'s daughter is my ___ (niece).',
      'My wife\'s mother is my ___ (mother-in-law).',
      'My brother\'s son is my ___ (nephew).',
      'My mother\'s new husband is my ___ (stepfather).',
      'We are ___ (distant) relatives; we haven\'t met in years.',
      'She is my ___ (godmother).',
      'He is my ___ (cousin) once removed.',
      'They are ___ (siblings).',
      'My ___ (ancestors) came from Ireland.'
    ][i],
    correctAnswer: [
      'uncle',
      'niece',
      'mother-in-law',
      'nephew',
      'stepfather',
      'distant',
      'godmother',
      'cousin',
      'siblings',
      'ancestors'
    ][i],
    explanation: 'Advanced family terminology.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - GENERATIONAL TERMS
// ============================================
export const B2_U7_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Generations & Society',
  explanation: 'Terms for different age groups and social changes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'People born between 1946 and 1964 are called ___.',
      'The ___ gap is the difference in opinions between young and old.',
      'A person who is very old is ___.',
      'The younger ___ is more tech-savvy.',
      'We need to bridge the ___ between generations.',
      'The ___ population is growing in many countries.',
      'She is in her ___ (between 20 and 29).',
      'The ___ (middle-aged) people are often the main breadwinners.',
      'He is a ___ (toddler).',
      'They are ___ (newlyweds).'
    ][i],
    options: [
      ['Baby Boomers', 'Millennials', 'Gen X'],
      ['generation', 'age', 'opinion'],
      ['elderly', 'ancient', 'old'],
      ['generation', 'group', 'people'],
      ['divide', 'bridge', 'gap'],
      ['aging', 'growing', 'old'],
      ['twenties', 'teens', 'thirties'],
      ['middle-aged', 'adult', 'senior'],
      ['toddler', 'infant', 'child'],
      ['newlyweds', 'couples', 'partners']
    ][i],
    correctAnswer: [
      'Baby Boomers',
      'generation',
      'elderly',
      'generation',
      'gap',
      'aging',
      'twenties',
      'middle-aged',
      'toddler',
      'newlyweds'
    ][i],
    explanation: 'Sociological and age-related vocabulary.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (FAMILY)
// ============================================
export const B2_U7_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Family Dynamics',
  explanation: 'Form words from the given roots.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'Their ___ (RELATION) is very complicated.',
      'He had a very happy ___ (CHILD).',
      'The ___ (MARRY) ceremony was beautiful.',
      'She is a very ___ (MOTHER) person.',
      'They live in a quiet ___ (NEIGHBOR).',
      'He showed great ___ (GENEROUS) to his family.',
      'The ___ (INHERIT) was divided among the children.',
      'She has a strong ___ (LIKE) to her mother.',
      'They celebrate their ___ (ANNIVERSARY) every year.',
      'The ___ (GROW) of the family was unexpected.'
    ][i],
    correctAnswer: [
      'relationship',
      'childhood',
      'marriage',
      'motherly',
      'neighborhood',
      'generosity',
      'inheritance',
      'likeness',
      'anniversary',
      'growth'
    ][i],
    explanation: 'Family-themed word formation exercises.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE GENERATION GAP
// ============================================
export const B2_U7_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Bridging the Divide',
  explanation: 'Read the article about generational differences and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the main cause of the "generation gap" according to the text?' : 'How can families improve communication across generations?',
    options: [['Technology', 'Money', 'Travel', 'Food'], ['Active listening', 'Giving gifts', 'Watching TV', 'Moving away']][i % 2],
    correctAnswer: i < 5 ? 'Technology' : 'Active listening',
    explanation: 'Extracting key themes from a social commentary text.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - SPECULATING ABOUT PEOPLE
// ============================================
export const B2_U7_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Who are they?',
  explanation: 'Listen and use modals of deduction to identify relationships.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `Based on the conversation, they ___ be siblings.`,
    options: ['must', 'can\'t', 'might', 'could'],
    correctAnswer: 'must',
    explanation: 'Deducing relationships from verbal cues.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - DESCRIBING FAMILY HISTORY
// ============================================
export const B2_U7_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Ancestry & Heritage',
  explanation: 'Choose the most appropriate phrase for a family history essay.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce family origins:',
      'To describe a long-held tradition:',
      'To mention an ancestor:',
      'To describe a family secret:',
      'To mention immigration:',
      'To describe family values:',
      'To mention a family heirloom:',
      'To describe a family reunion:',
      'To mention genetics:',
      'To summarize family impact:'
    ][i],
    options: [
      ['My ancestors hail from...', 'My family is from...', 'We come from...'],
      ['A tradition passed down through generations', 'Something we always do', 'Old habit'],
      ['My great-grandfather was...', 'One old guy was...', 'A relative was...'],
      ['A closely guarded family secret', 'Something we don\'t say', 'Quiet info'],
      ['They emigrated in search of...', 'They moved for...', 'They left to...'],
      ['The core values of my family include...', 'What we like is...', 'Family stuff:'],
      ['A cherished family heirloom', 'Old thing we keep', 'Family item'],
      ['A large-scale family gathering', 'Big party', 'Meeting everyone'],
      ['It runs in the family', 'We all have it', 'Genetic thing'],
      ['The legacy of my family continues...', 'Family is good.', 'In short...']
    ][i],
    correctAnswer: [
      'My ancestors hail from...',
      'A tradition passed down through generations',
      'My great-grandfather was...',
      'A closely guarded family secret',
      'They emigrated in search of...',
      'The core values of my family include...',
      'A cherished family heirloom',
      'A large-scale family gathering',
      'It runs in the family',
      'The legacy of my family continues...'
    ][i],
    explanation: 'Using sophisticated language to describe heritage.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SPECULATING ABOUT PHOTOS
// ============================================
export const B2_U7_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Speculating about Photos',
  explanation: 'Identify the best phrases for FCE Speaking Part 2 speculation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `Looking at this old photo, they ___ be related because of their eyes.`,
    options: ['might', 'must', 'can\'t', 'are'],
    correctAnswer: 'might',
    explanation: 'Using speculative language in oral descriptions.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U7_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 7',
  explanation: 'Consolidation of Unit 7 topics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Choose the correct past modal of deduction.' : 'Choose the best word for a family relative.',
    options: i < 5 ? ['must have seen', 'must saw', 'must have see'] : ['niece', 'uncle', 'stepfather'],
    correctAnswer: i < 5 ? 'must have seen' : 'niece',
    explanation: 'Review of Unit 7 concepts.',
    points: 1
  }))
};

export const B2_UNIT_7 = createB2Unit(
  'b2-u7',
  'Family Dynamics & Generations',
  'Master modals of deduction and explore family heritage.',
  ['Use modals of deduction for present and past', 'Identify extended family members', 'Discuss generational differences'],
  [
    B2_U7_BLOCK1, B2_U7_BLOCK2, B2_U7_BLOCK3, B2_U7_BLOCK4, B2_U7_BLOCK5,
    B2_U7_BLOCK6, B2_U7_BLOCK7, B2_U7_BLOCK8, B2_U7_BLOCK9, B2_U7_BLOCK10
  ]
);
