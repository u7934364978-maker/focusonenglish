import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 20;

// ============================================
// BLOCK 1: GRAMMAR REVIEW - FUTURE TENSES
// ============================================
export const B2_U20_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Review: Future Continuous and Future Perfect',
  grammarPoint: 'Future Tenses',
  explanation: 'Recap of using future tenses for actions in progress and completed actions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'This time next week, I ___ (sunbathe) in Bali.' : 'By the end of the month, I ___ (finish) the project.',
    options: i < 5 ? ['will be sunbathing', 'will sunbathe', 'will have sunbathed'] : ['will have finished', 'will be finishing', 'will finish'],
    correctAnswer: i < 5 ? 'will be sunbathing' : 'will have finished',
    explanation: 'Differentiating between state in progress and completion.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR REVIEW - PASSIVE VOICE
// ============================================
export const B2_U20_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Review: Passive Voice All Tenses',
  grammarPoint: 'Passive Voice',
  explanation: 'Recap of passive structures across various tenses.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'The house ___ (build) in 1920.',
      'A new bridge ___ (construct) at the moment.',
      'The email ___ (already/send).',
      'The car ___ (repair) when I arrived.',
      'The files ___ (must/save) before closing.',
      'The meeting ___ (hold) in the main hall.',
      'The results ___ (not/publish) yet.',
      'The winner ___ (announce) tomorrow.',
      'My bike ___ (steal) last night.',
      'English ___ (speak) all over the world.'
    ][i],
    correctAnswer: [
      'was built',
      'is being constructed',
      'has already been sent',
      'was being repaired',
      'must be saved',
      'is held',
      'have not been published',
      'will be announced',
      'was stolen',
      'is spoken'
    ][i],
    explanation: 'Choosing the correct passive form for the context.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: GRAMMAR REVIEW - MODALS OF DEDUCTION
// ============================================
export const B2_U20_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Review: Modals of Deduction',
  grammarPoint: 'Modal Verbs',
  explanation: 'Recap of speculations about the present and past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'He is not here. He ___ be at home.' : 'He looks sad. He ___ (have) bad news.',
    options: i < 5 ? ['must', 'can\'t', 'might'] : ['must have had', 'can\'t have had', 'might not have had'],
    correctAnswer: i < 5 ? 'might' : 'must have had',
    explanation: 'Using modals to show degrees of certainty.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: GRAMMAR REVIEW - REPORTED SPEECH
// ============================================
export const B2_U20_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Review: Reported Speech',
  grammarPoint: 'Reported Speech',
  explanation: 'Recap of reporting statements, questions, and commands.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      '"I am tired," he said. -> He said that he ___ tired.',
      '"Will you come?" she asked. -> She asked me if I ___ come.',
      '"Don\'t touch that," he said. -> He told me ___ touch that.',
      '"I have seen it," they said. -> They said that they ___ seen it.',
      '"Where is it?" she asked. -> She asked me where it ___.'
    ][i % 5],
    options: [
      ['was', 'is', 'be'],
      ['would', 'will', 'did'],
      ['not to', 'to not', 'don\'t'],
      ['had', 'have', 'did'],
      ['was', 'is', 'were']
    ][i % 5],
    correctAnswer: [
      'was',
      'would',
      'not to',
      'had',
      'was'
    ][i % 5],
    explanation: 'Focusing on backshifting and structure.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: GRAMMAR REVIEW - CLEFT SENTENCES & ARTICLES
// ============================================
export const B2_U20_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Review: Cleft Sentences and Articles',
  explanation: 'Recap of emphasis and article usage.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      '___ I want is a coffee.',
      'It was Jane ___ called you.',
      '___ (The/A) internet has changed everything.',
      'He is ___ (a/an) honest man.',
      '___ (zero/the) money is important.',
      '___ I love is the weather here.',
      'It was in Paris ___ we met.',
      '___ (The/A) United Kingdom is in Europe.',
      'I need ___ (a/an) umbrella.',
      '___ (zero/the) happiness is vital.'
    ][i],
    correctAnswer: [
      'What',
      'who',
      'The',
      'an',
      '',
      'What',
      'that',
      'The',
      'an',
      ''
    ][i],
    explanation: 'Consolidating emphasis and article rules.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: VOCABULARY REVIEW - WORK & BUSINESS
// ============================================
export const B2_U20_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'vocabulary',
  title: 'Review: Work and Business',
  explanation: 'Recap of professional and economic terms.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The company is currently in a ___ (recession).' : 'He is a successful ___ (entrepreneur).',
    options: i < 5 ? ['recession', 'growth', 'boom'] : ['entrepreneur', 'worker', 'intern'],
    correctAnswer: i < 5 ? 'recession' : 'entrepreneur',
    explanation: 'Review of Module 2 vocabulary.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: VOCABULARY REVIEW - TECHNOLOGY
// ============================================
export const B2_U20_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'vocabulary',
  title: 'Review: Technology and Innovation',
  explanation: 'Recap of tech and security terms.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'fill-blank',
    question: [
      'We need to ___ (upgrade) our software.',
      'AI uses complex ___ (algorithms).',
      '___ (Phishing) is a type of cybercrime.',
      'The app is very ___ (user-friendly).',
      '___ (Encryption) protects your data.'
    ][i % 5],
    correctAnswer: [
      'upgrade',
      'algorithms',
      'Phishing',
      'user-friendly',
      'Encryption'
    ][i % 5],
    explanation: 'Testing tech-related vocabulary.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: USE OF ENGLISH - WORD FORMATION REVIEW
// ============================================
export const B2_U20_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'word-formation',
  title: 'Review: Word Formation',
  explanation: 'Recap of word transformations from Module 2.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (DEVELOP) of technology is fast.',
      'He is very ___ (AMBIT).',
      'The ___ (EFFICIENT) of the team is high.',
      'The ___ (STABLE) of the market is at risk.',
      'She has great ___ (LEAD) skills.'
    ][i % 5],
    correctAnswer: [
      'development',
      'ambitious',
      'efficiency',
      'stability',
      'leadership'
    ][i % 5],
    explanation: 'Review of common word families.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: READING COMPREHENSION REVIEW
// ============================================
export const B2_U20_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'reading-comprehension',
  title: 'Review: Module 2 Topics',
  explanation: 'Recap of reading skills and topics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the main challenge of remote work?' : 'What is one benefit of globalization?',
    options: i < 5 ? ['Isolation', 'Better internet', 'More coffee'] : ['Lower prices', 'Less trade', 'More borders'],
    correctAnswer: i < 5 ? 'Isolation' : 'Lower prices',
    explanation: 'Review of key concepts from texts.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: LISTENING COMPREHENSION REVIEW
// ============================================
export const B2_U20_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'listening',
  title: 'Review: Listening Skills',
  explanation: 'Recap of listening tasks from Module 2.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: `In a formal meeting, what is the agenda used for?`,
    options: ['To list topics for discussion', 'To take a break', 'To eat lunch', 'To call friends'],
    correctAnswer: 'To list topics for discussion',
    explanation: 'Review of professional contexts.',
    points: 1
  }))
};

export const B2_UNIT_20 = createB2Unit(
  'b2-u20',
  'Module 2 Review',
  'Consolidate your knowledge of technology, work, and business while reviewing the grammar and vocabulary of Module 2.',
  ['Review all major grammar points from Units 11-19', 'Reinforce vocabulary for work, business, and technology', 'Assess your progress before moving to Module 3'],
  [
    B2_U20_BLOCK1, B2_U20_BLOCK2, B2_U20_BLOCK3, B2_U20_BLOCK4, B2_U20_BLOCK5,
    B2_U20_BLOCK6, B2_U20_BLOCK7, B2_U20_BLOCK8, B2_U20_BLOCK9, B2_U20_BLOCK10
  ]
);
