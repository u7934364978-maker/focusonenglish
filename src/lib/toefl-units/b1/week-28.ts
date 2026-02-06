import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 28;
const LEVEL = 'b1';

export const B1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'practice_set',
  title: 'Speaking Mock - All Tasks',
  explanation: 'Final preparation for Speaking Mock - All Tasks.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The most important factor during a Speaking Mock - All Tasks is:',
      options: ['Speed', 'Accuracy', 'Both Speed and Accuracy'],
      correctAnswer: 'Both Speed and Accuracy',
      explanation: 'TOEFL requires managing time without sacrificing quality.',
      points: 1
    }
  ]
};

export const B1_WEEK_28 = createToeflUnit(
  'toefl-b1-w28',
  'Week 28: Speaking Mock - All Tasks',
  'Final stretch focusing on Speaking Mock - All Tasks.',
  ['Consolidate Speaking Mock - All Tasks skills', 'Complete full-length practice', 'Final strategy adjustments'],
  [B1_W${UNIT_ID}_BLOCK1]
);
