import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 7;
const LEVEL = 'c1';

const C1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Listening: Nuance and Implicit Meaning',
  explanation: 'Advanced C1 practice focusing on Listening: Nuance and Implicit Meaning.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A defining characteristic of Listening: Nuance and Implicit Meaning at C1 level is:',
      options: ['Subtle logical nuances', 'Direct factual recall', 'Basic main ideas'],
      correctAnswer: 'Subtle logical nuances',
      explanation: 'C1 requires identifying implicit meanings and complex logical structures.',
      points: 3
    }
  ]
};

export const C1_WEEK_7 = createToeflUnit(
  'toefl-c1-w7',
  'Week 7: Listening: Nuance and Implicit Meaning',
  'Mastering high-level TOEFL skills at C1 level focusing on Listening: Nuance and Implicit Meaning.',
  ['Deconstruct complex Listening: Nuance and Implicit Meaning in academic texts', 'Identify implicit information and authorial tone', 'Utilize sophisticated academic vocabulary'],
  [C1_WFIXED_BLOCK1]
);
