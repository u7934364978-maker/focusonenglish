import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 40;

export const C1_U40_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Global Issues Review',
  explanation: 'Consolidating vocabulary for environment, economy, politics, and healthcare.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ effect is warming the planet.',
      'A tax on imported goods is a ___ .',
      'The country is a parliamentary ___ .',
      'Be careful with your digital ___ .',
      'Every human being has ___ rights.',
      'Technology can be a double-edged ___ .',
      'The city is experiencing rapid ___ .',
      'The school has a rigorous ___ .',
      'The patient is in a ___ condition.',
      'We must reduce our carbon ___ .'
    ][i],
    correctAnswer: [
      'greenhouse',
      'tariff',
      'democracy',
      'footprint',
      'inalienable',
      'sword',
      'urbanization',
      'curriculum',
      'critical',
      'footprint'
    ][i],
    explanation: 'Review of global issues vocabulary.',
    points: 1
  }))
};

export const C1_U40_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Media & Concepts Review',
  explanation: 'Consolidating concepts for media literacy, social justice, and urban planning.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "media literacy"?',
      'What is "confirmation bias"?',
      'What is "systemic racism"?',
      'What is "intersectionality"?',
      'What is "algorithmic bias"?',
      'What is a "smart city"?',
      'What is "pedagogy"?',
      'What is a "pandemic"?',
      'What is "liberalism"?',
      'What is "protectionism"?'
    ][i],
    options: [
      ['Ability to analyze media messages', 'Reading books', 'Watching TV'],
      ['Favoring info that confirms beliefs', 'Checking facts', 'Finding new info'],
      ['Racism embedded in societal structures', 'Individuals being mean', 'A type of law'],
      ['Overlapping social identities and discrimination', 'A road junction', 'A type of math'],
      ['Unfair outcomes from algorithms', 'A fast computer', 'A type of math'],
      ['City using tech to improve services', 'A city with many schools', 'A clean city'],
      ['The method and practice of teaching', 'A type of school', 'A student'],
      ['Global outbreak of a disease', 'Local outbreak', 'A type of medicine'],
      ['Focus on individual liberty and rights', 'Preference for tradition', 'State control'],
      ['Restricting imports to help local industry', 'Protecting the environment', 'Security']
    ][i],
    correctAnswer: [
      'Ability to analyze media messages',
      'Favoring info that confirms beliefs',
      'Racism embedded in societal structures',
      'Overlapping social identities and discrimination',
      'Unfair outcomes from algorithms',
      'City using tech to improve services',
      'The method and practice of teaching',
      'Global outbreak of a disease',
      'Focus on individual liberty and rights',
      'Restricting imports to help local industry'
    ][i],
    explanation: 'Review of Module 4 concepts.',
    points: 1
  }))
};

export const C1_U40_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Advanced Grammar Review',
  explanation: 'Consolidating subjunctive, passive reporting, and future tenses.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'It is vital that he ___ present.',
      'AI is said ___ the way we work.',
      '___ the congestion, people still drive.',
      'The ___ of the program was a success.',
      'By next year, they ___ a cure.',
      'We demand that the prisoner ___ released.',
      'The technology is reported ___ developed in secret.',
      '___ it is expensive, many live in the center.',
      'There is a need for better ___ of resources.',
      'We ___ with the consequences for decades.'
    ][i],
    options: [
      ['be', 'is', 'was'],
      ['to be changing', 'changing', 'to change'],
      ['Despite', 'Although', 'Even'],
      ['implementation', 'implementing', 'implement'],
      ['will have found', 'will find', 'will be finding'],
      ['be', 'is', 'was'],
      ['to have been', 'to be', 'being'],
      ['Although', 'Despite', 'However'],
      ['allocation', 'allocating', 'allocate'],
      ['will be dealing', 'will have dealt', 'deal']
    ][i],
    correctAnswer: [
      'be',
      'to be changing',
      'Despite',
      'implementation',
      'will have found',
      'be',
      'to have been',
      'Although',
      'allocation',
      'will be dealing'
    ][i],
    explanation: 'Review of advanced grammar from Module 4.',
    points: 1
  }))
};

export const unit40: Lesson = createC1Unit(
  'c1-u40',
  'Module 4 Review & Consolidation',
  'Comprehensive review of Global Issues & Media Literacy topics.',
  ['Consolidate global issues and media literacy vocabulary', 'Review and apply key concepts for social and urban issues', 'Apply advanced grammar from Module 4 in context'],
  [
    C1_U40_BLOCK1, C1_U40_BLOCK2, C1_U40_BLOCK3,
    C1_U40_BLOCK1, C1_U40_BLOCK2, C1_U40_BLOCK3,
    C1_U40_BLOCK1, C1_U40_BLOCK2, C1_U40_BLOCK3, C1_U40_BLOCK1
  ]
);
