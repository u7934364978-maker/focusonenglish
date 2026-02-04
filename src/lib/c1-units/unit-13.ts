import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 13;

export const C1_U13_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Advanced Comparative Structures',
  grammarPoint: 'Comparatives',
  explanation: 'Using sophisticated comparative structures like "the..., the..." and comparative modifiers.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ we invest, the better the results.',
      'This model is ___ more efficient than the old one.',
      'The problem is getting ___ and worse.',
      'It\'s not ___ near as difficult as I thought.',
      'He is ___ the best player in the team.',
      'The results were ___ better than expected.',
      'It\'s ___ bit as good as they say.',
      'The ___ the better.',
      'She is ___ more talented than her sister.',
      'The situation is ___ from ideal.'
    ][i],
    correctAnswer: [
      'more',
      'considerably',
      'worse',
      'nowhere',
      'by far',
      'far',
      'every',
      'sooner',
      'infinitely',
      'far'
    ][i],
    explanation: 'Correct advanced comparative structure or modifier.',
    points: 1
  }))
};

export const C1_U13_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Double Comparatives & Parallel Change',
  explanation: 'Structures that show how one change depends on another.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'The ___ the better.',
      'The ___ you study, the higher your score.',
      'The ___ we wait, the worse it gets.',
      'The ___ the mountain, the thinner the air.',
      'The ___ the car, the more expensive it is.',
      'The ___ the book, the more I like it.',
      'The ___ the coffee, the more I enjoy it.',
      'The ___ the music, the harder it is to focus.',
      'The ___ the movie, the more bored I became.',
      'The ___ the day, the shorter the shadow.'
    ][i],
    options: [
      ['sooner', 'soonest', 'soon'],
      ['more', 'most', 'much'],
      ['longer', 'longest', 'long'],
      ['higher', 'highest', 'high'],
      ['faster', 'fastest', 'fast'],
      ['shorter', 'shortest', 'short'],
      ['stronger', 'strongest', 'strong'],
      ['louder', 'loudest', 'loud'],
      ['longer', 'longest', 'long'],
      ['brighter', 'brightest', 'bright']
    ][i],
    correctAnswer: [
      'sooner',
      'more',
      'longer',
      'higher',
      'faster',
      'shorter',
      'stronger',
      'louder',
      'longer',
      'brighter'
    ][i],
    explanation: 'Correct use of double comparatives.',
    points: 1
  }))
};

export const C1_U13_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Modifiers of Comparison',
  explanation: 'Adverbs used to modify adjectives and adverbs in comparison.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'It is ___ more expensive than I thought.',
      'The results are ___ similar to previous studies.',
      'She is ___ taller than her mother.',
      'This project is ___ more complex than the last.',
      'The weather is ___ better today.',
      'He is ___ less experienced than his colleague.',
      'The two versions are ___ identical.',
      'It is ___ the most beautiful place I\'ve seen.',
      'The gap is ___ widening.',
      'She is ___ better at math than me.'
    ][i],
    correctAnswer: [
      'slightly',
      'remarkably',
      'significantly',
      'infinitely',
      'marginally',
      'somewhat',
      'virtually',
      'quite',
      'steadily',
      'way'
    ][i],
    explanation: 'Correct adverbial modifier for comparison.',
    points: 1
  }))
};

export const unit13: Lesson = createC1Unit(
  'c1-u13',
  'Advanced Comparative Structures',
  'Exploring sophisticated ways to compare and contrast ideas using complex structures.',
  ['Use double comparatives accurately', 'Apply comparative modifiers for precision', 'Structure complex contrastive arguments'],
  [
    C1_U13_BLOCK1, C1_U13_BLOCK2, C1_U13_BLOCK3,
    C1_U13_BLOCK1, C1_U13_BLOCK2, C1_U13_BLOCK3,
    C1_U13_BLOCK1, C1_U13_BLOCK2, C1_U13_BLOCK3, C1_U13_BLOCK1
  ]
);
