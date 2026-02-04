import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 50;

export const C1_U50_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Culture & Arts Review',
  explanation: 'Consolidating vocabulary for art, literature, cinema, music, and fashion.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      '___ art does not represent external reality.',
      'The main character in a story is the ___ .',
      'The ___ of the film is breathtaking.',
      'Traditional music is part of our cultural ___ .',
      'She has an ___ sense of style.',
      'The ___ of the building is stunning.',
      'The dish is a perfect example of ___ cuisine.',
      '___ is the study of knowledge.',
      'The ___ of the novel is set in Paris.',
      'She gave a powerful ___ in the play.'
    ][i],
    correctAnswer: [
      'Abstract',
      'protagonist',
      'cinematography',
      'heritage',
      'impeccable',
      'facade',
      'fusion',
      'Epistemology',
      'narrative',
      'performance'
    ][i],
    explanation: 'Review of culture and arts vocabulary.',
    points: 1
  }))
};

export const C1_U50_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Concepts & Theories Review',
  explanation: 'Consolidating concepts for philosophy, psychology, and urban design.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "existentialism"?',
      'What is "cognitive dissonance"?',
      'What is "minimalism" in architecture?',
      'What is "haute couture"?',
      'What is "stream of consciousness"?',
      'What is "magical realism"?',
      'What is "biophilic design"?',
      'What is "slow food"?',
      'What is "empiricism"?',
      'What is "neuroplasticity"?'
    ][i],
    options: [
      ['Focus on individual existence and freedom', 'Belief in nothing', 'A type of science'],
      ['Inconsistency between beliefs and actions', 'Hearing loud noises', 'A type of dance'],
      ['Focus on simplicity and essential elements', 'Using lots of colors', 'Old style'],
      ['High-end custom-made fashion', 'Cheap clothing', 'Sportswear'],
      ['Depicting a character\'s thoughts as they occur', 'A fast river', 'A type of poem'],
      ['Realistic story with magical elements', 'A magic show', 'A fantasy novel'],
      ['Incorporating nature into architecture', 'Painting with green', 'Gardening'],
      ['Movement promoting local food and traditional cooking', 'Eating slowly', 'Cooking with steam'],
      ['Theory that knowledge comes from experience', 'Thinking fast', 'Being emotional'],
      ['Brain\'s ability to reorganize itself', 'Plastic in the brain', 'A hard skull']
    ][i],
    correctAnswer: [
      'Focus on individual existence and freedom',
      'Inconsistency between beliefs and actions',
      'Focus on simplicity and essential elements',
      'High-end custom-made fashion',
      'Depicting a character\'s thoughts as they occur',
      'Realistic story with magical elements',
      'Incorporating nature into architecture',
      'Movement promoting local food and traditional cooking',
      'Theory that knowledge comes from experience',
      'Brain\'s ability to reorganize itself'
    ][i],
    explanation: 'Review of Module 5 concepts.',
    points: 1
  }))
};

export const C1_U50_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Advanced Grammar Consolidation',
  explanation: 'Consolidating participle clauses, inversion, cleft sentences, and relative clauses.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      '___ by the landscape, he painted all day.',
      'Never ___ I read such a compelling story.',
      '___ I loved most was the acting.',
      'The building, ___ was built in 1920, is old.',
      'She wore a ___ red silk dress.',
      '___ the exhibition, I felt at peace.',
      'Only then ___ he realize the truth.',
      '___ impressed me was the music.',
      'The architect ___ designed this is famous.',
      'If he ___ more support, he might have won.'
    ][i],
    options: [
      ['Inspired', 'Inspiring', 'Inspiration'],
      ['had', 'did', 'have'],
      ['What', 'It', 'That'],
      ['which', 'that', 'who'],
      ['beautiful long', 'long beautiful', 'beautifully long'],
      ['Visiting', 'Visited', 'Visit'],
      ['did', 'do', 'have'],
      ['What', 'It', 'That'],
      ['who', 'which', 'whom'],
      ['had had', 'has', 'had']
    ][i],
    correctAnswer: [
      'Inspired',
      'had',
      'What',
      'which',
      'beautiful long',
      'Visiting',
      'did',
      'What',
      'who',
      'had had'
    ][i],
    explanation: 'Review of advanced grammar from Module 5.',
    points: 1
  }))
};

export const unit50: Lesson = createC1Unit(
  'c1-u50',
  'Module 5 Review & Consolidation',
  'Comprehensive review of Culture, Arts & The Human Experience topics.',
  ['Consolidate culture and arts vocabulary', 'Review and apply key concepts from philosophy and psychology', 'Apply advanced grammar from Module 5 in context'],
  [
    C1_U50_BLOCK1, C1_U50_BLOCK2, C1_U50_BLOCK3,
    C1_U50_BLOCK1, C1_U50_BLOCK2, C1_U50_BLOCK3,
    C1_U50_BLOCK1, C1_U50_BLOCK2, C1_U50_BLOCK3, C1_U50_BLOCK1
  ]
);
