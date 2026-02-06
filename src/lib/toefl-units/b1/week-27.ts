import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 27;
const LEVEL = 'b1';

const B1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Listening Mock - Campus & Lectures',
  explanation: 'Final preparation for Listening Mock - Campus & Lectures.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The most important factor during a Listening Mock - Campus & Lectures is:',
      options: ['Speed', 'Accuracy', 'Both Speed and Accuracy'],
      correctAnswer: 'Both Speed and Accuracy',
      explanation: 'TOEFL requires managing time without sacrificing quality.',
      points: 1
    }
  ]
};

export const B1_WEEK_27 = createToeflUnit(
  'toefl-b1-w27',
  'Week 27: Listening Mock - Campus & Lectures',
  'Final stretch focusing on Listening Mock - Campus & Lectures.',
  ['Consolidate Listening Mock - Campus & Lectures skills', 'Complete full-length practice', 'Final strategy adjustments'],
  [B1_WFIXED_BLOCK1]
);
