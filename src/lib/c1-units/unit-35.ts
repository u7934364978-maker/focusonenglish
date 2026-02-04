import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 35;

export const C1_U35_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Human Rights Vocabulary',
  explanation: 'Advanced terms for discussing civil rights, equality, and justice.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'Every human being has ___ rights. (alien)',
      'They fought against systemic ___ . (discriminate)',
      '___ is a fundamental human right. (liberty)',
      'We must uphold the ___ of law. (rule)',
      'The treaty aims to prevent ___ . (genocide)',
      'She is a prominent human rights ___ . (active)',
      'There is a clear ___ of justice. (miscarry)',
      'We need to promote social ___ . (equity)',
      'The government was accused of ___ . (oppress)',
      '___ is the state of being free. (emancipate)'
    ][i],
    correctAnswer: [
      'inalienable',
      'discrimination',
      'Liberty',
      'rule',
      'genocide',
      'activist',
      'miscarriage',
      'equity',
      'oppression',
      'Emancipation'
    ][i],
    explanation: 'Correct human rights terminology.',
    points: 1
  }))
};

export const C1_U35_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Social Justice Concepts',
  explanation: 'Identifying and defining concepts related to social justice and activism.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "systemic racism"?',
      'What is "intersectionality"?',
      'What is "civil disobedience"?',
      'What is "advocacy"?',
      'What is "marginalization"?',
      'What is "glass ceiling"?',
      'What is "reparations"?',
      'What is "social mobility"?',
      'What is "humanitarian aid"?',
      'What is "grassroots activism"?'
    ][i],
    options: [
      ['Racism embedded in societal structures', 'Individuals being mean', 'A type of law'],
      ['Overlapping social identities and discrimination', 'A road junction', 'A type of math'],
      ['Peaceful refusal to obey certain laws', 'Fighting with police', 'Ignoring laws'],
      ['Public support for a cause or policy', 'Selling a product', 'Writing a book'],
      ['Treating a group as insignificant', 'Drawing on a page', 'Moving to the edge'],
      ['Invisible barrier to advancement', 'A window', 'A type of roof'],
      ['Compensation for past wrongs', 'Buying something', 'Fixing a car'],
      ['Ability to change social status', 'Using a phone', 'Moving to a new city'],
      ['Assistance to people in crisis', 'Giving money to friends', 'Buying food'],
      ['Activism starting from the community', 'Planting grass', 'Professional lobbying']
    ][i],
    correctAnswer: [
      'Racism embedded in societal structures',
      'Overlapping social identities and discrimination',
      'Peaceful refusal to obey certain laws',
      'Public support for a cause or policy',
      'Treating a group as insignificant',
      'Invisible barrier to advancement',
      'Compensation for past wrongs',
      'Ability to change social status',
      'Assistance to people in crisis',
      'Activism starting from the community'
    ][i],
    explanation: 'Correct definition of social justice concept.',
    points: 1
  }))
};

export const C1_U35_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'The Subjunctive for Demands & Urgency',
  explanation: 'Using the subjunctive mood to express importance, necessity, and formal demands.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'It is vital that he ___ present.',
      'We demand that the prisoner ___ released.',
      'It is essential that justice ___ served.',
      'I suggest that she ___ a lawyer.',
      'It is important that they ___ informed.',
      'The law requires that everyone ___ taxes.',
      'We propose that the policy ___ reviewed.',
      'It is necessary that the truth ___ told.',
      'I insist that he ___ an apology.',
      'It is crucial that we ___ now.'
    ][i],
    options: [
      ['be', 'is', 'was'],
      ['be', 'is', 'was'],
      ['be', 'is', 'was'],
      ['consult', 'consults', 'consulted'],
      ['be', 'are', 'were'],
      ['pay', 'pays', 'paid'],
      ['be', 'is', 'was'],
      ['be', 'is', 'was'],
      ['offer', 'offers', 'offered'],
      ['act', 'acts', 'acted']
    ][i],
    correctAnswer: [
      'be',
      'be',
      'be',
      'consult',
      'be',
      'pay',
      'be',
      'be',
      'offer',
      'act'
    ][i],
    explanation: 'Correct use of the subjunctive mood.',
    points: 1
  }))
};

export const unit35: Lesson = createC1Unit(
  'c1-u35',
  'Social Justice & Human Rights',
  'Advanced vocabulary and grammar for discussing human rights, social equity, and activism.',
  ['Use precise terminology for human rights and social justice', 'Identify and define key social justice concepts', 'Apply the subjunctive mood to express demands and urgency'],
  [
    C1_U35_BLOCK1, C1_U35_BLOCK2, C1_U35_BLOCK3,
    C1_U35_BLOCK1, C1_U35_BLOCK2, C1_U35_BLOCK3,
    C1_U35_BLOCK1, C1_U35_BLOCK2, C1_U35_BLOCK3, C1_U35_BLOCK1
  ]
);
