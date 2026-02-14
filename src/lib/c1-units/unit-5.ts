import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 5;

// ============================================
// BLOCK 1: GRAMMAR - PASSIVE REPORTING VERBS
// ============================================
export const C1_U5_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Passive Reporting Verbs',
  grammarPoint: 'Impersonal Passive',
 explanation: 'Use structures like It is said that... or He is thought to be... for [[objective|objetivo]] reporting.',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'It is ___ that the company is facing financial difficulties.',
      'He is ___ to be hiding somewhere in the city.',
 'The [[protesters|manifestantes]] are ___ to have blocked the main road.',  'It is ___ that the new law will be [[passed|aprobada]] next month.',  'The painting is ___ to be a [[fake|falsificación]].',       'She is ___ to be planning a comeback.',
 'It was ___ that the medicine had [[harmful|dañinos]] side effects.',       'They are ___ to have reached an agreement.',
      'He is ___ to be the richest man in the country.',
      'It is ___ that the project will cost millions.'
    ][i],
    options: [
      ['believing', 'believe', 'believed'],
      ['thinking', 'thought', 'think'],
      ['reporting', 'report', 'reported'],
      ['expected', 'expecting', 'expect'],
      ['alleging', 'allege', 'alleged'],
      ['rumouring', 'rumour', 'rumoured'],
      ['claiming', 'claim', 'claimed'],
      ['understanding', 'understand', 'understood'],
      ['say', 'said', 'saying'],
      ['estimated', 'estimating', 'estimate']
    ][i],
    correctAnswer: [
      'believed',
      'thought',
      'reported',
      'expected',
      'alleged',
      'rumoured',
      'claimed',
      'understood',
      'said',
      'estimated'
    ][i],
    explanation: 'Passive reporting verbs are common in formal news and academic contexts.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - CAUSATIVE PASSIVES
// ============================================
export const C1_U5_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Causative Passives (Have/Get something done)',
  explanation: 'Use "have/get + object + past participle" when someone else does a service for you.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'We need to have the roof ___ before winter.',
      'I got my hair ___ at the new salon.',
 'The CEO had his speech ___ by a professional [[ghostwriter|escritor fantasma]].',  'She had her [[passport|pasaporte]] ___ yesterday.',       'We finally got the kitchen ___ after months of waiting.',
      'He needs to have his car ___ as soon as possible.',
      'I\'ll have the documents ___ to your office by noon.',
      'They had their house ___ while they were on holiday.',
 'We got the [[leak|fuga]] ___ by a plumber.',       'She had her teeth ___ last week.'
    ][i],
    options: [
      ['repairing', 'repaired', 'repair'],
      ['cuts', 'cutting', 'cut'],
      ['write', 'writing', 'written'],
      ['stealing', 'stolen', 'steal'],
      ['renovate', 'renovating', 'renovated'],
      ['service', 'servicing', 'serviced'],
      ['delivered', 'deliver', 'delivering'],
      ['burgle', 'burgling', 'burgled'],
      ['fixing', 'fixed', 'fix'],
      ['whitening', 'whitened', 'whiten']
    ][i],
    correctAnswer: [
      'repaired',
      'cut',
      'written',
      'stolen',
      'renovated',
      'serviced',
      'delivered',
      'burgled',
      'fixed',
      'whitened'
    ][i],
    explanation: 'Causative structure for services and unfortunate events.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - REPORTS AND STATEMENTS
// ============================================
export const C1_U5_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Reports & Statements',
 explanation: 'Vocabulary for [[formal|formales]] announcements and reporting.',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
 'The [[spokesperson|portavoz]] issued a formal ___ regarding the incident.',       'The government has ___ a new initiative to combat crime.',
 'There is no [[evidence|evidencia]] to ___ his claims.',       'The report ___ the need for urgent action.',
 'He ___ any [[involvement|implicación]] in the scandal.',       'The committee will ___ a decision by Friday.',
      'The witness ___ having seen the suspect.',
      'The company released a ___ explaining the delay.',
      'The researchers ___ their findings in a prestigious journal.',
 'She ___ the importance of [[teamwork|trabajo en equipo]].'     ][i],
    options: [
      ['remark', 'opinion', 'statement'],
      ['advertised', 'published', 'announced'],
      ['undergo', 'sustain', 'substantiate'],
      ['points', 'shows', 'highlights'],
      ['denied', 'refused', 'rejected'],
      ['reach', 'make', 'get'],
      ['remembered', 'reminded', 'recalled'],
      ['newspaper', 'journal', 'press release'],
      ['published', 'printed', 'wrote'],
      ['focused', 'stressed', 'emphasized']
    ][i],
    correctAnswer: [
      'statement',
      'announced',
      'substantiate',
      'highlights',
      'denied',
      'reach',
      'recalled',
      'press release',
      'published',
      'emphasized'
    ][i],
    explanation: 'Professional vocabulary for reporting and communicating information.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: USE OF ENGLISH - TRANSFORMATION
// ============================================
export const C1_U5_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'key-word-transformation',
  title: 'Passive Transformation',
 explanation: 'Rewrite the sentence using the [[key word|palabra clave]].',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'key-word-transformation',
    sentence: [
      'People say he is a genius.',
      'Someone stole my car yesterday.',
      'A professional is painting our house.',
      'They think the thief has left the country.',
      'I need to fix my computer.',
      'It is expected that the prices will rise.',
      'He had his tonsils removed when he was five.',
      'They allege that she committed the crime.',
      'Someone should check the engine.',
      'They believe the document is authentic.'
    ][i],
    keyWord: [
      'SAID',
      'HAD',
      'HAVING',
      'THOUGHT',
      'GET',
      'EXPECTED',
      'OUT',
      'ALLEGED',
      'HAVE',
      'BELIEVED'
    ][i],
    startOfAnswer: [
      'He ___',
      'I ___',
      'We are ___',
      'The thief ___',
      'I need to ___',
      'Prices ___',
      'He had ___',
      'She ___',
      'You should ___',
      'The document ___'
    ][i],
    correctAnswer: [
      'is said to be a genius',
      'had my car stolen yesterday',
      'having our house painted',
      'is thought to have left the country',
      'get my computer fixed',
      'are expected to rise',
      'his tonsils out when he was five',
      'is alleged to have committed the crime',
      'have the engine checked',
      'is believed to be authentic'
    ][i],
    explanation: 'Transforming active sentences into various passive and causative forms.',
    points: 2
  }))
};

// ============================================
// BLOCK 5: MIXED PRACTICE
// ============================================
export const C1_U5_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Passive & Impersonal Review',
 explanation: 'Final check of Unit 5 [[concepts|conceptos]].',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'multiple-choice',
    question: [
      'The suspect is ___ to be hiding in London.',
      'We had the garden ___ by a landscaper.',
      'It is widely ___ that the economy is recovering.',
 'He got his [[wallet|billetera]] ___ on the train.',       'The results are expected ___ published tomorrow.',
      'She had her book ___ by a top publisher.',
      'It was ___ that the company was bankrupt.',
      'They are understood ___ reached an agreement.',
      'We need to get the windows ___ .',
      'The report is alleged ___ inaccurate.'
    ][i],
    options: [
      ['think', 'thinking', 'thought'],
      ['redesign', 'redesigning', 'redesigned'],
      ['accept', 'accepting', 'accepted'],
      ['steal', 'stealing', 'stolen'],
      ['be', 'being', 'to be'],
      ['publish', 'publishing', 'published'],
      ['rumour', 'rumouring', 'rumoured'],
      ['have', 'having', 'to have'],
      ['clean', 'cleaning', 'cleaned'],
      ['be', 'being', 'to be']
    ][i],
    correctAnswer: [
      'thought',
      'redesigned',
      'accepted',
      'stolen',
      'to be',
      'published',
      'rumoured',
      'to have',
      'cleaned',
      'to be'
    ][i],
    explanation: 'Review of advanced passive structures and collocations.',
    points: 1
  }))
};

export const unit5 = createC1Unit(
  'c1-u5',
  'Complex Passives & Impersonal Structures',
  'Master impersonal passive reporting and causative structures for formal English.',
  ['Use passive reporting verbs effectively', 'Master causative structures (have/get something done)', 'Identify formal reporting vocabulary'],
  [
    C1_U5_BLOCK1, C1_U5_BLOCK2, C1_U5_BLOCK3, C1_U5_BLOCK4, C1_U5_BLOCK5
  ]
);
