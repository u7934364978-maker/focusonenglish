import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 4;

// ============================================
// BLOCK 1: GRAMMAR - MODAL VERBS FOR SPECULATION
// ============================================
export const C1_U4_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Speculation and Deduction',
  grammarPoint: 'Modals of Speculation',
 explanation: 'Use modal verbs to express different levels of [[certainty|certeza]] about the present and past.',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The lights are off. They ___ be at home.',
      'He ___ have forgotten about the meeting; he\'s usually very punctual.',
      'That ___ be Sarah. She\'s in Paris this week.',
      'I\'m not sure where he is. He ___ be in the library.',
 'The evidence is [[overwhelming|abrumadora]]; he ___ be the thief.',       'You ___ be joking! There\'s no way that\'s true.',
      'She ___ have seen him. She was at work all day.',
      'They ___ have got lost. They know this area well.',
      'It ___ be easy living in such a remote place.',
      'He ___ well have been lying about his age.'
    ][i],
    options: [
      ['must', 'might', 'can\'t'],
      ['might', 'must', 'should'],
      ['mustn\'t', 'couldn\'t', 'can\'t'],
      ['should', 'might', 'must'],
      ['can', 'ought to', 'must'],
      ['may', 'could', 'must'],
      ['mustn\'t', 'shouldn\'t', 'can\'t'],
      ['must', 'can', 'might'],
      ['mustn\'t', 'shouldn\'t', 'can\'t'],
      ['must', 'should', 'may']
    ][i],
    correctAnswer: [
      'can\'t',
      'might',
      'can\'t',
      'might',
      'must',
      'must',
      'can\'t',
      'might',
      'can\'t',
      'may'
    ][i],
    explanation: 'Choosing the correct modal based on the level of certainty.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - MODAL PERFECTS
// ============================================
export const C1_U4_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Past Speculation (Modal Perfects)',
 explanation: 'Use modal + have + [[past participle|participio pasado]] for past events.',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'I can\'t find my keys. I ___ them at the office.',
      'He didn\'t come to the party. He ___ about it.',
      'She ___ him. She was in a different city.',
      'You ___ very surprised when you heard the news.',
      'The report ___ by now. I sent it days ago.',
      'The team ___ hard to achieve these results.',
      'He ___ the email. I\'ve had no response.',
      'The burglar ___ through the window; it was locked.',
      'I ___ my phone in the taxi.',
      'They ___ lost. They have a GPS.'
    ][i],
    options: [
      ['should have left', 'can have left', 'must have left'],
      ['might have forgotten', 'must have forgotten', 'should have forgotten'],
      ['mustn\'t have seen', 'shouldn\'t have seen', 'can\'t have seen'],
      ['might have been', 'should have been', 'must have been'],
      ['must have arrived', 'can have arrived', 'should have arrived'],
      ['might have worked', 'should have worked', 'must have worked'],
      ['must not have seen', 'should not have seen', 'might not have seen'],
      ['mustn\'t have come', 'shouldn\'t have come', 'couldn\'t have come'],
      ['must have left', 'should have left', 'may have left'],
      ['mustn\'t have got', 'shouldn\'t have got', 'can\'t have got']
    ][i],
    correctAnswer: [
      'must have left',
      'might have forgotten',
      'can\'t have seen',
      'must have been',
      'should have arrived',
      'must have worked',
      'might not have seen',
      'couldn\'t have come',
      'may have left',
      'can\'t have got'
    ][i],
    explanation: 'Using modal perfects for past deductions.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - DEGREES OF CERTAINTY
// ============================================
export const C1_U4_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Adverbs of Probability',
 explanation: 'Use adverbs to add [[nuance|matiz]] to your statements.',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'It is ___ possible that the meeting will be postponed.',
      'The situation is ___ to improve next year.',
      'There is ___ doubt that the company will face challenges.',
      'He is ___ likely to win the election.',
      'She is ___ certain to be promoted.',
      'It\'s ___ that he will refuse the offer.',
      'They are ___ to have arrived by now.',
      'There is every ___ that the project will be a success.',
      'He ___ well have been lying.',
      'It ___ have been his sister you saw.'
    ][i],
    options: [
      ['surely', 'must', 'conceivably'],
      ['must', 'likely', 'bound'],
      ['some', 'no', 'little'],
      ['must', 'can', 'highly'],
      ['just', 'more', 'almost'],
      ['surely', 'certain', 'highly probable'],
      ['can', 'might', 'unlikely'],
      ['chance', 'point', 'likelihood'],
      ['must', 'should', 'may'],
      ['must', 'should', 'could well']
    ][i],
    correctAnswer: [
      'conceivably',
      'bound',
      'little',
      'highly',
      'almost',
      'highly probable',
      'unlikely',
      'likelihood',
      'may',
      'could well'
    ][i],
    explanation: 'Sophisticated vocabulary for expressing probability.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: USE OF ENGLISH - TRANSFORMATION
// ============================================
export const C1_U4_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'key-word-transformation',
  title: 'Nuance Transformation',
 explanation: 'Rewrite the sentence using the [[key word|palabra clave]].',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'key-word-transformation',
    sentence: [
      'I\'m sure he didn\'t mean to offend you.',
      'It\'s possible that they missed the train.',
      'It was a mistake to tell him the truth.',
      'I\'m certain she is at work.',
      'I\'m sure the keys are in the kitchen.',
      'Perhaps he forgot about the meeting.',
      'It\'s very likely that the price will go up.',
      'I\'m sure she didn\'t see me.',
      'It\'s impossible that he finished so quickly.',
      'It\'s probable that they are still waiting.'
    ][i],
    keyWord: [
      'CAN\'T',
      'MAY',
      'SHOULDN\'T',
      'MUST',
      'BOUND',
      'MIGHT',
      'EVERY',
      'HAVE',
      'COULDN\'T',
      'WELL'
    ][i],
    startOfAnswer: [
      'He ___',
      'They ___',
      'You ___',
      'She ___',
      'The keys ___',
      'He ___',
      'There is ___',
      'She ___',
      'He ___',
      'They ___'
    ][i],
    correctAnswer: [
      'can\'t have meant to offend you',
      'may have missed the train',
      'shouldn\'t have told him the truth',
      'must be at work',
      'are bound to be in the kitchen',
      'might have forgotten about the meeting',
      'every likelihood that the price will go up',
      'can\'t have seen me',
      'couldn\'t have finished so quickly',
      'may well be still waiting'
    ][i],
    explanation: 'Transformation exercises for speculation and certainty.',
    points: 2
  }))
};

// ============================================
// BLOCK 5: MIXED PRACTICE
// ============================================
export const C1_U4_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Nuance Review',
 explanation: 'Final check of Unit 4 [[concepts|conceptos]].',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'multiple-choice',
    question: [
      'Given the circumstances, he ___ have been aware of the risks.',
      'I ___ a bit surprised if she doesn\'t win.',
      'The results ___ a clear trend toward improvement.',
      'It is of ___ importance to remain objective.',
      'She has a ___ knowledge of the subject.',
      'The project is ___ schedule.',
      'We need to ___ the underlying causes.',
      'The results ___ the hypothesis.',
      'There is a ___ difference between the two.',
      'The research provides ___ evidence.'
    ][i],
    options: [
      ['can', 'should', 'must'],
      ['am', 'will be', 'would be'],
      ['show', 'say', 'reveal'],
      ['high', 'top', 'paramount'],
      ['deep', 'wide', 'profound'],
      ['after', 'late', 'behind'],
      ['look', 'deal', 'address'],
      ['hold', 'give', 'support'],
      ['large', 'wide', 'striking'],
      ['strong', 'big', 'compelling']
    ][i],
    correctAnswer: [
      'must',
      'would be',
      'reveal',
      'paramount',
      'profound',
      'behind',
      'address',
      'support',
      'striking',
      'compelling'
    ][i],
    explanation: 'Review of advanced structures and vocabulary.',
    points: 1
  }))
};

export const unit4 = createC1Unit(
  'c1-u4',
  'The Art of Nuance',
  'Master modal verbs for speculation and sophisticated adverbs of probability.',
  ['Use modal perfects for past deduction', 'Incorporate adverbs of probability', 'Express degrees of certainty with precision'],
  [
    C1_U4_BLOCK1, C1_U4_BLOCK2, C1_U4_BLOCK3, C1_U4_BLOCK4, C1_U4_BLOCK5
  ]
);
