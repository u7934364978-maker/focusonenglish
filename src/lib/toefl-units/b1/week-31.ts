import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 31;
const LEVEL = 'b1';

const B1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Error Analysis & Correction',
  explanation: 'Final preparation for Error Analysis & Correction.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The most important factor during a Error Analysis & Correction is:',
      options: ['Speed', 'Accuracy', 'Both Speed and Accuracy'],
      correctAnswer: 'Both Speed and Accuracy',
      explanation: 'TOEFL requires managing time without sacrificing quality.',
      points: 1
    }
  ]
};

export const B1_WEEK_31 = createToeflUnit(
  'toefl-b1-w31',
  'Week 31: Error Analysis & Correction',
  'Final stretch focusing on Error Analysis & Correction.',
  ['Consolidate Error Analysis & Correction skills', 'Complete full-length practice', 'Final strategy adjustments'],
  [B1_WFIXED_BLOCK1]
);
