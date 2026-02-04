import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 16;

export const C1_U16_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Describing Trends & Changes',
  explanation: 'Advanced verbs and adverbs for describing data fluctuations and patterns.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The numbers ___ sharply in June. (increase)',
      'There was a ___ decline in sales. (gradual)',
      'Prices have been ___ for months. (fluctuate)',
      'The market reached a ___ last year. (peak)',
      'Sales ___ after the initial boost. (level off)',
      'The unemployment rate ___ . (plummet)',
      'There is a ___ correlation here. (strong)',
      'The data ___ a clear upward trend. (reveal)',
      'The growth was ___ . (exponential)',
      'The figures ___ significantly. (vary)'
    ][i],
    correctAnswer: [
      'surged',
      'gradual',
      'fluctuating',
      'peak',
      'leveled off',
      'plummeted',
      'strong',
      'reveals',
      'exponential',
      'vary'
    ][i],
    explanation: 'Correct vocabulary for data description.',
    points: 1
  }))
};

export const C1_U16_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Reporting Data and Results',
  explanation: 'Formal structures for introducing and summarizing findings.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'How to introduce a summary:',
      'How to highlight a specific point:',
      'How to show contrast between datasets:',
      'How to refer to a visual aid:',
      'How to express caution about results:',
      'How to state a conclusion:',
      'How to refer to previous research:',
      'How to describe a causal link:',
      'How to summarize a trend:',
      'How to suggest further research:'
    ][i],
    options: [
      ['Overall, the data suggests...', 'In conclusion...', 'Finally...'],
      ['In particular, it is worth noting...', 'Notably...', 'Especially...'],
      ['In contrast, the second group...', 'However...', 'But...'],
      ['As illustrated in Figure 2...', 'Look at the graph.', 'The picture shows...'],
      ['It should be noted that...', 'Maybe...', 'I think...'],
      ['It can be concluded that...', 'So...', 'Therefore...'],
      ['Consistent with earlier studies...', 'Like before...', 'As others said...'],
      ['This is attributed to...', 'This happens because...', 'The cause is...'],
      ['There is an upward trend.', 'Things go up.', 'It\'s rising.'],
      ['Further research is required.', 'We need more info.', 'Keep looking.']
    ][i],
    correctAnswer: [
      'Overall, the data suggests...',
      'In particular, it is worth noting...',
      'In contrast, the second group...',
      'As illustrated in Figure 2...',
      'It should be noted that...',
      'It can be concluded that...',
      'Consistent with earlier studies...',
      'This is attributed to...',
      'There is an upward trend.',
      'Further research is required.'
    ][i],
    explanation: 'Formal academic reporting structure.',
    points: 1
  }))
};

export const C1_U16_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Analyzing Complex Data',
  explanation: 'Vocabulary for critical analysis and interpretation of information.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'We must ___ the underlying factors.',
      'The findings are ___ of a larger issue.',
      'The evidence is ___ .',
      'There is a ___ between these two events.',
      'The results are ___ with our hypothesis.',
      'We need to ___ the validity of the data.',
      'The study ___ the importance of...',
      'The implications are ___ .',
      'The data is ___ .',
      'We must ___ the findings carefully.'
    ][i],
    correctAnswer: [
      'scrutinize',
      'indicative',
      'compelling',
      'discrepancy',
      'consistent',
      'verify',
      'underscores',
      'far-reaching',
      'conclusive',
      'interpret'
    ][i],
    explanation: 'Correct academic analysis vocabulary.',
    points: 1
  }))
};

export const unit16: Lesson = createC1Unit(
  'c1-u16',
  'Academic Reports & Data Analysis',
  'Language for describing data, trends, and results in academic and professional reports.',
  ['Describe complex trends and patterns in data', 'Use formal structures for reporting results', 'Analyze and interpret findings critically'],
  [
    C1_U16_BLOCK1, C1_U16_BLOCK2, C1_U16_BLOCK3,
    C1_U16_BLOCK1, C1_U16_BLOCK2, C1_U16_BLOCK3,
    C1_U16_BLOCK1, C1_U16_BLOCK2, C1_U16_BLOCK3, C1_U16_BLOCK1
  ]
);
