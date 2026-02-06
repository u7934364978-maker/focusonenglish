import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 32;
const LEVEL = 'b1';

const B1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Vocabulary Review - Advanced Academic',
  explanation: 'Final preparation for Vocabulary Review - Advanced Academic.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The most important factor during a Vocabulary Review - Advanced Academic is:',
      options: ['Speed', 'Accuracy', 'Both Speed and Accuracy'],
      correctAnswer: 'Both Speed and Accuracy',
      explanation: 'TOEFL requires managing time without sacrificing quality.',
      points: 1
    }
  ]
};

export const B1_WEEK_32 = createToeflUnit(
  'toefl-b1-w32',
  'Week 32: Vocabulary Review - Advanced Academic',
  'Final stretch focusing on Vocabulary Review - Advanced Academic.',
  ['Consolidate Vocabulary Review - Advanced Academic skills', 'Complete full-length practice', 'Final strategy adjustments'],
  [B1_WFIXED_BLOCK1]
);
