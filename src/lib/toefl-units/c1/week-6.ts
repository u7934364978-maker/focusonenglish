import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 6;
const LEVEL = 'c1';

const C1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Listening: High-Density Lectures',
  explanation: 'Advanced C1 practice focusing on Listening: High-Density Lectures.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A defining characteristic of Listening: High-Density Lectures at C1 level is:',
      options: ['Subtle logical nuances', 'Direct factual recall', 'Basic main ideas'],
      correctAnswer: 'Subtle logical nuances',
      explanation: 'C1 requires identifying implicit meanings and complex logical structures.',
      points: 3
    }
  ]
};

export const C1_WEEK_6 = createToeflUnit(
  'toefl-c1-w6',
  'Week 6: Listening: High-Density Lectures',
  'Mastering high-level TOEFL skills at C1 level focusing on Listening: High-Density Lectures.',
  ['Deconstruct complex Listening: High-Density Lectures in academic texts', 'Identify implicit information and authorial tone', 'Utilize sophisticated academic vocabulary'],
  [C1_WFIXED_BLOCK1]
);
