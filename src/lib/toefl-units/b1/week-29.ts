import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 29;
const LEVEL = 'b1';

const B1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Writing Mock - Academic Discussion & Integrated',
  explanation: 'Final preparation for Writing Mock - Academic Discussion & Integrated.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The most important factor during a Writing Mock - Academic Discussion & Integrated is:',
      options: ['Speed', 'Accuracy', 'Both Speed and Accuracy'],
      correctAnswer: 'Both Speed and Accuracy',
      explanation: 'TOEFL requires managing time without sacrificing quality.',
      points: 1
    }
  ]
};

export const B1_WEEK_29 = createToeflUnit(
  'toefl-b1-w29',
  'Week 29: Writing Mock - Academic Discussion & Integrated',
  'Final stretch focusing on Writing Mock - Academic Discussion & Integrated.',
  ['Consolidate Writing Mock - Academic Discussion & Integrated skills', 'Complete full-length practice', 'Final strategy adjustments'],
  [B1_WFIXED_BLOCK1]
);
