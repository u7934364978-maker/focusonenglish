import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 52;

// ============================================
// BLOCK 1: GRAMMAR - PASSIVE VOICE (ALL TENSES)
// ============================================
export const B2_U52_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Global Movement in the Passive',
  grammarPoint: 'Passive Voice',
  explanation: 'Using the passive voice to focus on the action rather than the doer in the context of migration.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The new policy ___ (be/announce) by the government yesterday.',
      'Refugees ___ (be/assist) by various NGOs at the moment.',
      'Millions of people ___ (be/force) to leave their homes by 2030.',
      'The borders ___ (be/close) for two months already.',
      'Work permits ___ (be/issue) to thousands of applicants next month.',
      'The law is ___ (be/review) by the committee.',
      'The data ___ (be/collect) over several years.',
      'Multiculturalism is ___ (be/embrace) by many cities.',
      'The application had ___ (be/reject) twice before.',
      'The integration program will ___ (be/launch) soon.'
    ][i],
    correctAnswer: [
      'was announced',
      'are being assisted',
      'will have been forced',
      'have been closed',
      'will be issued',
      'being reviewed',
      'was collected',
      'being embraced',
      'been rejected',
      'be launched'
    ][i],
    explanation: 'Choosing the correct passive tense for different temporal contexts.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - PASSIVE REPORTING & CAUSATIVE
// ============================================
export const B2_U52_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Reporting and Arranging',
  grammarPoint: 'Passive Voice',
  explanation: 'Using passive reporting (It is said that...) and causative (have something done) structures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'It is ___ (say) that the city is a melting pot of cultures.',
      'He is ___ (believe) to have arrived last night.',
      'She had her visa ___ (process) by an agency.',
      'It is ___ (think) that migration levels will stabilize.',
      'They are ___ (expect) to reach a decision soon.',
      'We need to have our documents ___ (translate) into English.',
      'It is ___ (report) that thousands were displaced.',
      'The suspect is ___ (allege) to have crossed the border illegally.',
      'He got his passport ___ (renew) at the consulate.',
      'It is ___ (know) that many languages are spoken here.'
    ][i],
    correctAnswer: [
      'said',
      'believed',
      'processed',
      'thought',
      'expected',
      'translated',
      'reported',
      'alleged',
      'renewed',
      'known'
    ][i],
    explanation: 'Mastering reporting passives and causative "have".',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - MIGRATION & CITIZENSHIP
// ============================================
export const B2_U52_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'People on the Move',
  explanation: 'Vocabulary for migration, residency, and global citizenship.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The city is a ___ (melting) pot of different ethnicities.',
      'He applied for ___ (citizenship) after living there for five years.',
      'They are seeking ___ (asylum) in a neighboring country.',
      'The ___ (brain) drain is a major issue for developing nations.',
      'Many people are looking for better ___ (opportunities) abroad.',
      'The ___ (integration) process can take a long time.',
      'She has dual ___ (nationality).',
      'There are many ___ (expatriates) living in Dubai.',
      'The government issued a ___ (residency) permit.',
      'We live in a ___ (multicultural) society.'
    ][i],
    correctAnswer: [
      'melting',
      'citizenship',
      'asylum',
      'brain',
      'opportunities',
      'integration',
      'nationality',
      'expatriates',
      'residency',
      'multicultural'
    ][i],
    explanation: 'Core terms for discussing human migration and its social effects.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - CHALLENGES & INTEGRATION
// ============================================
export const B2_U52_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Belonging and Identity',
  explanation: 'Terms for the social and personal aspects of moving to a new country.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The ___ (language) barrier can be difficult to overcome.',
      'He suffered from culture ___ (shock) when he first arrived.',
      'We should celebrate our ___ (diversity).',
      'There is a sense of ___ (belonging) in the community.',
      'They faced ___ (discrimination) in the job market.',
      'The ___ (heritage) of the immigrants is very rich.',
      'She is a first-___ (generation) immigrant.',
      'The city has many ___ (ethnic) neighborhoods.',
      'We need to promote social ___ (cohesion).',
      'He is a global ___ (citizen).'
    ][i],
    options: [
      ['language', 'words', 'talk'],
      ['shock', 'fear', 'surprise'],
      ['diversity', 'variety', 'many'],
      ['belonging', 'home', 'being'],
      ['discrimination', 'hate', 'bad'],
      ['heritage', 'history', 'family'],
      ['generation', 'time', 'age'],
      ['ethnic', 'culture', 'race'],
      ['cohesion', 'working', 'sticking'],
      ['citizen', 'person', 'member']
    ][i],
    correctAnswer: [
      'language',
      'shock',
      'diversity',
      'belonging',
      'discrimination',
      'heritage',
      'generation',
      'ethnic',
      'cohesion',
      'citizen'
    ][i],
    explanation: 'Vocabulary for the human side of migration.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U52_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Society',
  explanation: 'Form nouns, adjectives, and verbs related to society and migration.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      '___ (MIGRATE) is a global phenomenon.',
      'The city is very ___ (CULTURE).',
      'We need to improve ___ (INTEGRATE) programs.',
      'She showed great ___ (TOLERATE).',
      'The ___ (POPULATE) is growing rapidly.',
      'It was a ___ (HISTORY) moment for the nation.',
      'She is a very ___ (INFLUENCE) member of the community.',
      'The results were ___ (STATISTICS) significant.',
      'We are looking for a ___ (PEACE) solution.',
      'The ___ (RESIDE) are unhappy with the change.'
    ][i],
    correctAnswer: [
      'Migration',
      'multicultural',
      'integration',
      'tolerance',
      'population',
      'historical',
      'influential',
      'statistically',
      'peaceful',
      'residents'
    ][i],
    explanation: 'Transforming root words into social and migration terminology.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - GLOBAL CITIZENSHIP
// ============================================
export const B2_U52_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The Rise of the Global Nomad',
  explanation: 'Read about "digital nomads" and people who work remotely while traveling the world.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is a "digital nomad"?' : 'What is a challenge mentioned for this lifestyle?',
    options: [['A person who works online while living in different countries', 'A computer programmer', 'A tour guide'], ['Lack of stable routine and social isolation', 'Not enough sun', 'Too many computers']][i % 2],
    correctAnswer: i < 5 ? 'A person who works online while living in different countries' : 'Lack of stable routine and social isolation',
    explanation: 'Identifying modern trends in migration and work.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - INTEGRATION STORIES
// ============================================
export const B2_U52_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Finding a New Home',
  explanation: 'Listen to an interview with a woman who moved to Japan and her experience of integration.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What helped her the most in the integration process?`,
    options: ['Learning the local language and joining a club', 'Watching TV', 'Buying a car', 'Staying with other expats'],
    correctAnswer: 'Learning the local language and joining a club',
    explanation: 'Listening for integration strategies and success factors.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - FORMAL ARTICLES
// ============================================
export const B2_U52_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Reporting on Social Issues',
  explanation: 'Identify the best way to structure a formal article about migration.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a complex social topic:',
      'To present a neutral perspective:',
      'To use a passive structure for objectivity:',
      'To quote an expert formally:',
      'To conclude with a global view:',
      'To highlight a human story:',
      'To avoid generalizations:',
      'To describe a successful program:',
      'To use a formal connector for contrast:',
      'To use a punchy but professional title:'
    ][i],
    options: [
      ['The question of human migration is one of the most pressing issues of our time.', 'Migration is happening.', 'Many people move.'],
      ['While some see it as a challenge, others emphasize the benefits.', 'I like it, but some don\'t.', 'It is both good and bad.'],
      ['It is widely believed that...', 'Many people think...', 'I say that...'],
      ['According to Dr. [Name], a leading sociologist,', 'Dr. [Name] said...', 'Look at [Name]'],
      ['In an increasingly interconnected world, we must...', 'The world is one.', 'Bye.'],
      ['Take the case of [Name], who moved to...', 'One guy did...', 'Story of a person:'],
      ['Research suggests that many individuals...', 'Everyone does this...', 'All people are:'],
      ['The initiative has been highly effective in...', 'The plan worked.', 'It was good.'],
      ['Conversely, ...', 'But...', 'On the other side:'],
      ['The New Face of Global Citizenship', 'People moving around', 'Why we move']
    ][i],
    correctAnswer: [
      'The question of human migration is one of the most pressing issues of our time.',
      'While some see it as a challenge, others emphasize the benefits.',
      'It is widely believed that...',
      'According to Dr. [Name], a leading sociologist,',
      'In an increasingly interconnected world, we must...',
      'Take the case of [Name], who moved to...',
      'Research suggests that many individuals...',
      'The initiative has been highly effective in...',
      'Conversely, ...',
      'The New Face of Global Citizenship'
    ][i],
    explanation: 'Using sophisticated register and structure for social reporting.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING INTEGRATION
// ============================================
export const B2_U52_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Embracing Diversity',
  explanation: 'How to discuss multiculturalism and integration naturally using passive structures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you formally express the idea that diversity makes a city better?`,
    options: ['It is generally agreed that a diverse population enriches the cultural life of a city.', 'Diversity is good.', 'I like diverse cities.', 'Cities should have many cultures.'],
    correctAnswer: 'It is generally agreed that a diverse population enriches the cultural life of a city.',
    explanation: 'Using passive reporting and sophisticated vocabulary in spoken English.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U52_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 52',
  explanation: 'Consolidation of Passive Voice and Migration Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The visa ___ (was/were) issued yesterday.' : 'He is seeking ___ (asylum/citizenship) because of the war.',
    options: i < 5 ? ['was', 'were', 'been'] : ['asylum', 'citizenship', 'residency'],
    correctAnswer: i < 5 ? 'was' : 'asylum',
    explanation: 'Final check of key concepts from Unit 52.',
    points: 1
  }))
};

export const B2_UNIT_52 = createB2Unit(
  'b2-u52',
  'Human Migration & Society',
  'Explore the dynamics of global movement and multiculturalism while mastering the passive voice across all tenses.',
  ['Use the passive voice correctly in various tenses', 'Apply passive reporting and causative structures', 'Acquire vocabulary for migration, integration, and social cohesion'],
  [
    B2_U52_BLOCK1, B2_U52_BLOCK2, B2_U52_BLOCK3, B2_U52_BLOCK4, B2_U52_BLOCK5,
    B2_U52_BLOCK6, B2_U52_BLOCK7, B2_U52_BLOCK8, B2_U52_BLOCK9, B2_U52_BLOCK10
  ]
);
