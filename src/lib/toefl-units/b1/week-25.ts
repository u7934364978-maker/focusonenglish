import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 25;
const LEVEL = 'b1';

const B1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: '',
  explanation: 'Final preparation for .',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The most important factor during a  is:',
      options: ['Speed', 'Accuracy', 'Both Speed and Accuracy'],
      correctAnswer: 'Both Speed and Accuracy',
      explanation: 'TOEFL requires managing time without sacrificing quality.',
      points: 1
    }
  ]
};

export const B1_WEEK_25 = createToeflUnit(
  'toefl-b1-w25',
  'Week 25: ',
  'Final stretch focusing on .',
  ['Consolidate  skills', 'Complete full-length practice', 'Final strategy adjustments'],
  [B1_WFIXED_BLOCK1]
);
