import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 30;

// ============================================
// BLOCK 1: GRAMMAR REVIEW - ADVANCED CONDITIONALS
// ============================================
export const B2_U30_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Review: Third and Mixed Conditionals',
  explanation: 'Consolidate your knowledge of unreal past situations and their present effects.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'If they ___ (act) sooner, the species wouldn\'t have gone extinct.' : 'If I ___ (be) more aware, I would have signed the petition.',
    options: i < 5 ? ['had acted', 'acted', 'would act'] : ['were', 'had been', 'am'],
    correctAnswer: i < 5 ? 'had acted' : 'were',
    explanation: 'Reviewing complex conditional structures.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR REVIEW - INVERSION
// ============================================
export const B2_U30_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Review: Emphatic Inversion',
  explanation: 'Practice using inversion after negative and limiting adverbials.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'Never ___ (have) I seen such a bias in the news.',
      'Seldom ___ (do) we see such a large protest.',
      'Only then ___ (did) I realize it was fake news.',
      'Not only ___ (be) it viral, but it was also true.',
      'Little ___ (did) he know about the changes.',
      'Rarely ___ (have) they visited the sanctuary.',
      'Under no circumstances ___ (should) you trust it.',
      'No way ___ (can) we ignore this issue.',
      'Hardly ___ (had) he started when he was stopped.',
      'Scarcely ___ (had) they arrived when it rained.'
    ][i],
    correctAnswer: [
      'have',
      'do',
      'did',
      'is',
      'did',
      'have',
      'should',
      'can',
      'had',
      'had'
    ][i],
    explanation: 'Testing subject-auxiliary inversion rules.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY REVIEW - THE ENVIRONMENT
// ============================================
export const B2_U30_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Review: Environment & Biodiversity',
  explanation: 'Key terms for ecology and conservation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The loss of ___ (biodiversity) is a global crisis.',
      'We must protect the natural ___ (habitat).',
      'The species is now ___ (endangered).',
      'We need more ___ (sustainable) solutions.',
      '___ (Renewable) energy is the future.',
      'The ___ (ecosystem) is very delicate.',
      'Carbon ___ (footprint) must be reduced.',
      '___ (Pollution) affects everyone.',
      'The animal is on the brink of ___ (extinction).',
      '___ (Conservation) efforts are working.'
    ][i],
    correctAnswer: [
      'biodiversity',
      'habitat',
      'endangered',
      'sustainable',
      'renewable',
      'ecosystem',
      'footprint',
      'pollution',
      'extinction',
      'conservation'
    ][i],
    explanation: 'Reviewing environmental vocabulary.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY REVIEW - SOCIAL ISSUES & MEDIA
// ============================================
export const B2_U30_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Review: Society and Media',
  explanation: 'Terms for activism, journalism, and social justice.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'They are fighting for ___ (equality) and justice.' : 'The headline was pure ___ (clickbait).',
    options: i < 5 ? ['equality', 'equal', 'equally'] : ['clickbait', 'news', 'paper'],
    correctAnswer: i < 5 ? 'equality' : 'clickbait',
    explanation: 'Reviewing social and media vocabulary.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH REVIEW - WORD FORMATION
// ============================================
export const B2_U30_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Review: Word Formation Module 3',
  explanation: 'Practice forming words from all Module 3 topics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (ORGANIZE) of the event was perfect.',
      'He is a very ___ (INFLUENCE) speaker.',
      'The ___ (ACCURATE) of the data is key.',
      '___ (DISCRIMINATE) is unacceptable.',
      'We need more ___ (TOLERATE).',
      'The ___ (FREE) of the press is vital.',
      'It was an ___ (ENVIRONMENT) choice.',
      'She showed great ___ (INITIATE).',
      'The ___ (REDUCE) was significant.',
      'The ___ (COMMUNICATE) was clear.'
    ][i],
    correctAnswer: [
      'organization',
      'influential',
      'accuracy',
      'Discrimination',
      'tolerance',
      'freedom',
      'environmental',
      'initiative',
      'reduction',
      'communication'
    ][i],
    explanation: 'Consolidating word formation skills.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING REVIEW - GLOBAL CHALLENGES
// ============================================
export const B2_U30_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The World in 2050',
  explanation: 'Read the summary of Module 3 themes and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the main challenge for the future?' : 'How can we solve these problems?',
    options: [['Climate change and inequality', 'Better phones', 'More travel'], ['Through global cooperation', 'By ignoring them', 'By waiting']][i % 2],
    correctAnswer: i < 5 ? 'Climate change and inequality' : 'Through global cooperation',
    explanation: 'Synthesizing knowledge from the entire module.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING REVIEW - VOICES OF CHANGE
// ============================================
export const B2_U30_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: A Summary of Module 3',
  explanation: 'Listen to the wrap-up of the topics discussed in this module.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What was the most important lesson from this module?`,
    options: ['The power of individual and collective action', 'That the news is always true', 'That the environment is fine', 'That grammar is easy'],
    correctAnswer: 'The power of individual and collective action',
    explanation: 'Reflecting on the core messages of the module.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING REVIEW - FORMAL REGISTER
// ============================================
export const B2_U30_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing: Formal and Academic Style',
  explanation: 'Identify the most appropriate formal structures for reports and essays.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'To report a widespread belief:' : 'To describe a process formally:',
    options: i < 5 ? ['It is widely believed that...', 'Everyone thinks...', 'People say...'] : ['The method by which...', 'How they do it...', 'The way...'],
    correctAnswer: i < 5 ? 'It is widely believed that...' : 'The method by which...',
    explanation: 'Reviewing formal writing conventions.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING REVIEW - EXPRESSING VIEWS
// ============================================
export const B2_U30_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Opinions with Emphasis',
  explanation: 'Review the use of inversion and advanced reporting in speech.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `Which is the most emphatic way to start a point?`,
    options: ['Not only is this important, but it is urgent.', 'It is important.', 'I think it\'s good.', 'This is a point.'],
    correctAnswer: 'Not only is this important, but it is urgent.',
    explanation: 'Reviewing spoken emphasis techniques.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MODULE 3 FINAL TEST
// ============================================
export const B2_U30_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Module 3 Final Assessment',
  explanation: 'Final check of all Module 3 grammar and vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The suspect is believed ___ (flee) the country.' : 'Rarely ___ (do) we see such courage.',
    options: i < 5 ? ['to have fled', 'to flee', 'fleeing'] : ['do', 'we do', 'did'],
    correctAnswer: i < 5 ? 'to have fled' : 'do',
    explanation: 'Final verification of complex grammar mastery.',
    points: 1
  }))
};

export const B2_UNIT_30 = createB2Unit(
  'b2-u30',
  'Module 3 Review',
  'Consolidate your learning from Module 3, covering social issues, environment, and media with advanced grammar and vocabulary.',
  ['Review advanced conditionals and inversion', 'Consolidate environmental, social, and media vocabulary', 'Assess formal and academic registers in writing and speaking'],
  [
    B2_U30_BLOCK1, B2_U30_BLOCK2, B2_U30_BLOCK3, B2_U30_BLOCK4, B2_U30_BLOCK5,
    B2_U30_BLOCK6, B2_U30_BLOCK7, B2_U30_BLOCK8, B2_U30_BLOCK9, B2_U30_BLOCK10
  ]
);
