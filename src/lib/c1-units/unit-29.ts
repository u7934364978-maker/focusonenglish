import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 29;

export const C1_U29_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Diversity & Inclusion Vocabulary',
  explanation: 'Terms related to cultural awareness and inclusivity.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'We value ___ in the workplace. (diverse)',
      '___ is essential for a fair society. (include)',
      'We must be aware of our unconscious ___ . (bias)',
      '___ competence is a key skill. (culture)',
      'She is an ___ for equality. (advocate)',
      'We should celebrate our ___ . (difference)',
      '___ communication helps avoid misunderstandings. (effective)',
      'We need to foster an ___ environment. (inclusive)',
      '___ is about fairness and justice. (equity)',
      'We should be ___ of other perspectives. (respect)'
    ][i],
    correctAnswer: [
      'diversity',
      'Inclusion',
      'biases',
      'Cultural',
      'advocate',
      'differences',
      'Cross-cultural',
      'inclusive',
      'Equity',
      'respectful'
    ][i],
    explanation: 'Correct term for diversity and inclusion.',
    points: 1
  }))
};

export const C1_U29_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Cultural Dimensions',
  explanation: 'Concepts used to describe and compare different cultures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "high-context" communication?',
      'What is "low-context" communication?',
      'What is "power distance"?',
      'What is "individualism"?',
      'What is "collectivism"?',
      'What is "uncertainty avoidance"?',
      'What is "long-term orientation"?',
      'What is "ethnocentrism"?',
      'What is "cultural relativism"?',
      'What is "stereotyping"?'
    ][i],
    options: [
      ['Implicit and relies on context', 'Direct and explicit', 'Fast talking'],
      ['Direct and explicit', 'Implicit and relies on context', 'Slow talking'],
      ['Acceptance of hierarchy', 'Physical distance', 'Speed of work'],
      ['Focus on individual goals', 'Focus on group goals', 'Living alone'],
      ['Focus on group goals', 'Focus on individual goals', 'Living together'],
      ['Preference for rules and stability', 'Liking surprises', 'Avoiding people'],
      ['Focus on future rewards', 'Focus on the past', 'Focus on today'],
      ['Believing your culture is superior', 'Learning a new language', 'Traveling'],
      ['Understanding culture in its own context', 'Judging others', 'Ignoring culture'],
      ['Generalized belief about a group', 'Taking photos', 'Buying souvenirs']
    ][i],
    correctAnswer: [
      'Implicit and relies on context',
      'Direct and explicit',
      'Acceptance of hierarchy',
      'Focus on individual goals',
      'Focus on group goals',
      'Preference for rules and stability',
      'Focus on future rewards',
      'Believing your culture is superior',
      'Understanding culture in its own context',
      'Generalized belief about a group'
    ][i],
    explanation: 'Correct definition of cultural dimension concepts.',
    points: 1
  }))
};

export const C1_U29_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'writing-analysis',
  title: 'Inclusive Language',
  explanation: 'Choosing language that is respectful and inclusive of all groups.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'Instead of "manpower", use:',
      'Instead of "chairman", use:',
      'Instead of "disabled person", use:',
      'Instead of "stewardess", use:',
      'Instead of "businessman", use:',
      'Instead of "mankind", use:',
      'Instead of "he/she" (when gender unknown), use:',
      'Instead of "elderly", use:',
      'Instead of "foreigner", use:',
      'Instead of "crazy/insane", use:'
    ][i],
    options: [
      ['Workforce/staffing', 'Boypower', 'Human power'],
      ['Chair/chairperson', 'Man-in-charge', 'Boss'],
      ['Person with a disability', 'Handicapped', 'Invalid'],
      ['Flight attendant', 'Air girl', 'Plane helper'],
      ['Business person/professional', 'Money man', 'Worker'],
      ['Humankind/humanity', 'Man-world', 'People'],
      ['They/them', 'It', 'That person'],
      ['Older adults/seniors', 'Old people', 'The aged'],
      ['International guest/resident', 'Alien', 'Outsider'],
      ['Unpredictable/irrational', 'Mad', 'Mental']
    ][i],
    correctAnswer: [
      'Workforce/staffing',
      'Chair/chairperson',
      'Person with a disability',
      'Flight attendant',
      'Business person/professional',
      'Humankind/humanity',
      'They/them',
      'Older adults/seniors',
      'International guest/resident',
      'Unpredictable/irrational'
    ][i],
    explanation: 'Correct use of inclusive language.',
    points: 1
  }))
};

export const unit29: Lesson = createC1Unit(
  'c1-u29',
  'Cross-Cultural Communication & Diversity',
  'Building cultural intelligence and inclusive communication skills for a globalized world.',
  ['Use terminology related to diversity and inclusion correctly', 'Understand key dimensions of cultural difference', 'Apply inclusive language in various contexts'],
  [
    C1_U29_BLOCK1, C1_U29_BLOCK2, C1_U29_BLOCK3,
    C1_U29_BLOCK1, C1_U29_BLOCK2, C1_U29_BLOCK3,
    C1_U29_BLOCK1, C1_U29_BLOCK2, C1_U29_BLOCK3, C1_U29_BLOCK1
  ]
);
