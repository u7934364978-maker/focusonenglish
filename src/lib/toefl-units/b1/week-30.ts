import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 30;
const LEVEL = 'b1';

export const B1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'practice_set',
  title: 'Time Management Strategies',
  explanation: 'Final preparation for Time Management Strategies.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The most important factor during a Time Management Strategies is:',
      options: ['Speed', 'Accuracy', 'Both Speed and Accuracy'],
      correctAnswer: 'Both Speed and Accuracy',
      explanation: 'TOEFL requires managing time without sacrificing quality.',
      points: 1
    }
  ]
};

export const B1_WEEK_30 = createToeflUnit(
  'toefl-b1-w30',
  'Week 30: Time Management Strategies',
  'Final stretch focusing on Time Management Strategies.',
  ['Consolidate Time Management Strategies skills', 'Complete full-length practice', 'Final strategy adjustments'],
  [B1_W${UNIT_ID}_BLOCK1]
);
