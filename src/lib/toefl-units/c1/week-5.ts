import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 5;
const LEVEL = 'c1';

const C1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Reading: Subtle Inferences in Academic Texts',
  explanation: 'Advanced C1 practice focusing on Reading: Subtle Inferences in Academic Texts.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A defining characteristic of Reading: Subtle Inferences in Academic Texts at C1 level is:',
      options: ['Subtle logical nuances', 'Direct factual recall', 'Basic main ideas'],
      correctAnswer: 'Subtle logical nuances',
      explanation: 'C1 requires identifying implicit meanings and complex logical structures.',
      points: 3
    }
  ]
};

export const C1_WEEK_5 = createToeflUnit(
  'toefl-c1-w5',
  'Week 5: Reading: Subtle Inferences in Academic Texts',
  'Mastering high-level TOEFL skills at C1 level focusing on Reading: Subtle Inferences in Academic Texts.',
  ['Deconstruct complex Reading: Subtle Inferences in Academic Texts in academic texts', 'Identify implicit information and authorial tone', 'Utilize sophisticated academic vocabulary'],
  [C1_WFIXED_BLOCK1]
);
