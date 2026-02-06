import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 33;
const LEVEL = 'b1';

const B1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Listening Review - Distractors & Nuances',
  explanation: 'Final preparation for Listening Review - Distractors & Nuances.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The most important factor during a Listening Review - Distractors & Nuances is:',
      options: ['Speed', 'Accuracy', 'Both Speed and Accuracy'],
      correctAnswer: 'Both Speed and Accuracy',
      explanation: 'TOEFL requires managing time without sacrificing quality.',
      points: 1
    }
  ]
};

export const B1_WEEK_33 = createToeflUnit(
  'toefl-b1-w33',
  'Week 33: Listening Review - Distractors & Nuances',
  'Final stretch focusing on Listening Review - Distractors & Nuances.',
  ['Consolidate Listening Review - Distractors & Nuances skills', 'Complete full-length practice', 'Final strategy adjustments'],
  [B1_WFIXED_BLOCK1]
);
