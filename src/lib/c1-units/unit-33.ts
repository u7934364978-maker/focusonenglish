import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 33;

export const C1_U33_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Political Vocabulary',
  explanation: 'Advanced terms for discussing politics, government, and elections.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The country is a parliamentary ___ . (democrat)',
      'He is a ___ for the conservative party. (candidate)',
      'The election ___ was very intense. (campaign)',
      'There was a high ___ at the polls. (turn)',
      'The government has a large ___ . (major)',
      'She is a prominent ___ . (politic)',
      'The bill was passed by ___ . (legislate)',
      'The regime was accused of ___ . (corrupt)',
      '___ is the right to vote. (suffrage)',
      'The two parties formed a ___ . (coalition)'
    ][i],
    correctAnswer: [
      'democracy',
      'candidate',
      'campaign',
      'turnout',
      'majority',
      'politician',
      'legislature',
      'corruption',
      'Suffrage',
      'coalition'
    ][i],
    explanation: 'Correct political terminology.',
    points: 1
  }))
};

export const C1_U33_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Ideologies & Governance',
  explanation: 'Identifying and defining various political ideologies and systems of governance.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "liberalism"?',
      'What is "conservatism"?',
      'What is "socialism"?',
      'What is "communism"?',
      'What is "anarchism"?',
      'What is "authoritarianism"?',
      'What is a "theocracy"?',
      'What is a "monarchy"?',
      'What is "populism"?',
      'What is "nationalism"?'
    ][i],
    options: [
      ['Focus on individual liberty and rights', 'Preference for tradition', 'State control of economy'],
      ['Preference for tradition and stability', 'Focus on change', 'No government'],
      ['Social ownership and egalitarianism', 'Private ownership', 'Rule by religious leaders'],
      ['Classless society with state control', 'Focus on religion', 'Rule by a king'],
      ['Belief in the abolition of government', 'Strong government', 'Rule by the elite'],
      ['Strict obedience to authority', 'Full freedom', 'Democratic rule'],
      ['Government by religious leaders', 'Government by the people', 'No government'],
      ['Rule by a king or queen', 'Rule by a group', 'Rule by a president'],
      ['Appeal to "the people" against elites', 'Focus on world peace', 'Focus on technology'],
      ['Identification with one\'s own nation', 'Love of nature', 'Focus on cities']
    ][i],
    correctAnswer: [
      'Focus on individual liberty and rights',
      'Preference for tradition and stability',
      'Social ownership and egalitarianism',
      'Classless society with state control',
      'Belief in the abolition of government',
      'Strict obedience to authority',
      'Government by religious leaders',
      'Rule by a king or queen',
      'Appeal to "the people" against elites',
      'Identification with one\'s own nation'
    ][i],
    explanation: 'Correct definition of political ideology or system.',
    points: 1
  }))
};

export const C1_U33_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Advanced Modals for Political Speculation',
  explanation: 'Using modals to discuss political possibilities and certainties.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'The government ___ change its policy soon.',
      'There ___ be a snap election.',
      'He ___ have won if he had more support.',
      'The treaty ___ be signed by Friday.',
      'They ___ not have reached an agreement.',
      'Protests ___ continue despite the ban.',
      'The law ___ have been passed earlier.',
      'We ___ see a shift in public opinion.',
      'The leader ___ have resigned by now.',
      'It ___ be argued that the system is broken.'
    ][i],
    options: [
      ['might well', 'well might', 'might good'],
      ['could conceivably', 'conceivably could', 'could'],
      ['might', 'must', 'should'],
      ['is due to', 'due to', 'due'],
      ['can', 'may', 'could'],
      ['are bound to', 'bound to', 'will bound to'],
      ['ought to', 'ought', 'should have'],
      ['are likely to', 'likely to', 'likely'],
      ['should', 'must', 'can'],
      ['could reasonably', 'reasonably could', 'could']
    ][i],
    correctAnswer: [
      'might well',
      'could conceivably',
      'might',
      'is due to',
      'may',
      'are bound to',
      'ought to',
      'are likely to',
      'should',
      'could reasonably'
    ][i],
    explanation: 'Correct use of modals for political speculation.',
    points: 1
  }))
};

export const unit33: Lesson = createC1Unit(
  'c1-u33',
  'Political Systems & Ideologies',
  'Advanced vocabulary and grammar for discussing political structures, beliefs, and speculative outcomes.',
  ['Use complex political and governmental terminology', 'Identify and define various political ideologies and systems', 'Speculate about political events using advanced modals'],
  [
    C1_U33_BLOCK1, C1_U33_BLOCK2, C1_U33_BLOCK3,
    C1_U33_BLOCK1, C1_U33_BLOCK2, C1_U33_BLOCK3,
    C1_U33_BLOCK1, C1_U33_BLOCK2, C1_U33_BLOCK3, C1_U33_BLOCK1
  ]
);
