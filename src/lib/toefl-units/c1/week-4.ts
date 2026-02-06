import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 4;
const LEVEL = 'c1';

export const C1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'reading-comprehension' : 'listening',
  title: 'Reading: Complex Rhetorical Purpose',
  explanation: 'Advanced C1 practice focusing on Reading: Complex Rhetorical Purpose.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A defining characteristic of Reading: Complex Rhetorical Purpose at C1 level is:',
      options: ['Subtle logical nuances', 'Direct factual recall', 'Basic main ideas'],
      correctAnswer: 'Subtle logical nuances',
      explanation: 'C1 requires identifying implicit meanings and complex logical structures.',
      points: 3
    }
  ]
};

export const C1_WEEK_4 = createToeflUnit(
  'toefl-c1-w4',
  'Week 4: Reading: Complex Rhetorical Purpose',
  'Mastering high-level TOEFL skills at C1 level focusing on Reading: Complex Rhetorical Purpose.',
  ['Deconstruct complex Reading: Complex Rhetorical Purpose in academic texts', 'Identify implicit information and authorial tone', 'Utilize sophisticated academic vocabulary'],
  [C1_W${UNIT_ID}_BLOCK1]
);
