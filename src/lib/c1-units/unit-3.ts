import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 3;

// ============================================
// BLOCK 1: GRAMMAR - MIXED CONDITIONALS
// ============================================
export const C1_U3_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Mixed Conditionals',
  grammarPoint: 'Mixed Conditionals',
  explanation: 'Mixed conditionals combine different times (e.g., past cause, present effect).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'If I ___ (study) harder at school, I would have a better job now.',
      'If she ___ (not/be) so [[stubborn|terca]], she would have admitted her mistake.',
      'We would be on the plane now if we ___ (not/miss) the train.',
      'If I ___ (know) you were coming, I would have baked a [[cake|pastel]].',
      'If they ___ (be) more careful, they wouldn\'t be in this [[mess|lío]] now.',
      'If he ___ (not/spend) all his money, he could buy that car today.',
      'If I ___ (speak) better English, I would have got the job.',
      'If she ___ (not/lose) her [[passport|pasaporte]], she would be in Paris now.',
      'If we ___ (not/buy) that house, we would be much [[wealthier|más ricos]] today.',
      'If I ___ (not/have) to work today, I would have gone to the [[beach|playa]] yesterday.'
    ][i],
    correctAnswer: [
      'had studied',
      'were not',
      'had not missed',
      'had known',
      'had been',
      'had not spent',
      'spoke',
      'had not lost',
      'had not bought',
      'did not have'
    ][i],
    explanation: 'Mixed conditional structure: If + Past Perfect, would + base form (or vice versa).',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - INVERSION IN CONDITIONALS
// ============================================
export const C1_U3_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Inverted Conditionals',
  explanation: 'In formal English, [[inversion|inversión]] can replace "if".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      '___ you need any further [[assistance|asistencia]], please let us know.',
      '___ I to win the lottery, I would travel the world.',
      '___ he known about the meeting, he would have attended.',
      '___ it not for your help, I wouldn\'t have [[succeeded|tenido éxito]].',
      '___ you change your mind, the [[offer|oferta]] is still open.',
      '___ I been in your position, I would have done the same.',
      '___ we to lose the contract, the company would be in [[trouble|problemas]].',
      '___ she arrived on time, we wouldn\'t have started without her.',
      '___ you require more information, [[consult|consulte]] our website.',
      '___ it not been for the rain, we would have gone for a walk.'
    ][i],
    correctAnswer: [
      'Should',
      'Were',
      'Had',
      'Were',
      'Should',
      'Had',
      'Were',
      'Had',
      'Should',
      'Had'
    ][i],
    explanation: 'Using Should, Were, or Had at the start for formal conditionals.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: GRAMMAR - ALTERNATIVES TO 'IF'
// ============================================
export const C1_U3_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Alternatives to "If"',
  explanation: 'Use words like "unless", "provided", "supposing" to express [[conditions|condiciones]].',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      '___ you promise to be careful, you can borrow my car.',
      'I won\'t go ___ you come with me.',
      '___ he doesn\'t arrive soon, we\'ll have to start without him.',
      'You can stay here ___ you keep quiet.',
      '___ you won the lottery, what would you do?',
      'I\'ll take an [[umbrella|paraguas]] ___ it rains.',
      'We\'ll have the party indoors ___ the weather is bad.',
      '___ that you finish on time, you can leave early.',
      'He wouldn\'t have known ___ you had told him.',
      'I\'ll give you the money ___ you pay me back next week.'
    ][i],
    options: [
      ['Provided that', 'Unless', 'In case'],
      ['unless', 'if', 'provided'],
      ['Supposing', 'Assuming', 'In case'],
      ['as long as', 'unless', 'even if'],
      ['Supposing', 'Whether', 'Otherwise'],
      ['in case', 'unless', 'provided'],
      ['in the event that', 'unless', 'otherwise'],
      ['Assuming', 'Whether', 'In case'],
      ['unless', 'whether', 'otherwise'],
      ['on condition that', 'unless', 'in case']
    ][i],
    correctAnswer: [
      'Provided that',
      'unless',
      'Assuming',
      'as long as',
      'Supposing',
      'in case',
      'in the event that',
      'Assuming',
      'unless',
      'on condition that'
    ][i],
    explanation: 'Using varied conjunctions for conditional sentences.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: USE OF ENGLISH - TRANSFORMATION
// ============================================
export const C1_U3_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'key-word-transformation',
  title: 'Conditional Transformation',
  explanation: 'Rewrite the sentence using the [[key word|palabra clave]].',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'key-word-transformation',
    sentence: [
      'I didn\'t study, so I failed the test.',
      'If you need help, just ask.',
      'I would have come if I had known.',
      'He won\'t help you unless you ask him.',
      'I will only go if you come too.',
      'If it weren\'t for your help, I would have failed.',
      'He is so tought that he never gives up.',
      'I didn\'t see the sign, so I parked here.',
      'You can borrow it but you must return it.',
      'If I were a richer man, I\'d retire.'
    ][i],
    keyWord: [
      'STUDIED',
      'SHOULD',
      'HAD',
      'LONG',
      'PROVIDED',
      'BEEN',
      'WERE',
      'HAVE',
      'CONDITION',
      'WERE'
    ][i],
    startOfAnswer: [
      'If I ___',
      '___',
      '___',
      'As ___',
      '___',
      'Had it ___',
      '___',
      'I wouldn\'t ___',
      'On ___',
      '___'
    ][i],
    correctAnswer: [
      'had studied, I wouldn\'t have failed the test',
      'Should you need help, just ask',
      'Had I known, I would have come',
      'long as you ask him, he will help you',
      'Provided that you come too, I will go',
      'not been for your help, I would have failed',
      'Were he not so tough, he would give up',
      'have parked here if I had seen the sign',
      'condition that you return it, you can borrow it',
      'Were I a richer man, I\'d retire'
    ][i],
    explanation: 'C1 transformations focusing on conditionals.',
    points: 2
  }))
};

// ============================================
// BLOCK 5: VOCABULARY - RISK AND PROBABILITY
// ============================================
export const C1_U3_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'vocabulary',
  title: 'Risk & Probability',
  explanation: 'Vocabulary related to [[likelihood|probabilidad]] and danger.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'multiple-choice',
    question: [
      'The [[likelihood|probabilidad]] of success is quite high.',
      'It was a ___ decision that paid off in the end.',
      'There is a ___ chance that we will win.',
      'He is ___ to win the competition.',
      'The project is [[fraught|lleno]] with ___ .',
      'We need to assess the ___ before we proceed.',
      'It\'s a ___ situation that requires careful handling.',
      'The company is at ___ of bankruptcy.',
      'There is a ___ possibility of a delay.',
      'It is ___ certain that the price will rise.'
    ][i],
    options: [
      ['likelihood', 'possibility', 'chance'],
      ['risky', 'dangerous', 'safe'],
      ['slim', 'thin', 'small'],
      ['bound', 'sure', 'likely'],
      ['danger', 'risk', 'trouble'],
      ['risks', 'dangers', 'problems'],
      ['precarious', 'safe', 'stable'],
      ['risk', 'danger', 'point'],
      ['distinct', 'clear', 'vague'],
      ['almost', 'nearly', 'just']
    ][i],
    correctAnswer: [
      'likelihood',
      'risky',
      'slim',
      'bound',
      'risk',
      'risks',
      'precarious',
      'risk',
      'distinct',
      'almost'
    ][i],
    explanation: 'Vocabulary for speculating about outcomes.',
    points: 1
  }))
};

export const unit3 = createC1Unit(
  'c1-u3',
  'Subtle Conditionals',
  'Master mixed conditionals, inversion and advanced alternatives to "if".',
  ['Use mixed conditionals accurately', 'Employ formal inversion in conditional sentences', 'Identify and use alternatives to "if"'],
  [
    C1_U3_BLOCK1, C1_U3_BLOCK2, C1_U3_BLOCK3, C1_U3_BLOCK4, C1_U3_BLOCK5
  ]
);
