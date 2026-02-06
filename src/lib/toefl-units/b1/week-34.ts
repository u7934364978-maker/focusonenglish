import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 34;
const LEVEL = 'b1';

const B1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Reading Review - Inference & Purpose',
  explanation: 'Final preparation for Reading Review - Inference & Purpose.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The most important factor during a Reading Review - Inference & Purpose is:',
      options: ['Speed', 'Accuracy', 'Both Speed and Accuracy'],
      correctAnswer: 'Both Speed and Accuracy',
      explanation: 'TOEFL requires managing time without sacrificing quality.',
      points: 1
    }
  ]
};

export const B1_WEEK_34 = createToeflUnit(
  'toefl-b1-w34',
  'Week 34: Reading Review - Inference & Purpose',
  'Final stretch focusing on Reading Review - Inference & Purpose.',
  ['Consolidate Reading Review - Inference & Purpose skills', 'Complete full-length practice', 'Final strategy adjustments'],
  [B1_WFIXED_BLOCK1]
);
