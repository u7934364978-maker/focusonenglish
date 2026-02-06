import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 35;
const LEVEL = 'b2';

const B2_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Mock Exam 1 (B2)',
  explanation: 'Final intensive practice for Mock Exam 1 (B2).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'During a Mock Exam 1 (B2), the focus should shift to:',
      options: ['Consistency under pressure', 'Learning new rules', 'Relaxing'],
      correctAnswer: 'Consistency under pressure',
      explanation: 'Consistency and stamina are key for the final weeks of TOEFL prep.',
      points: 2
    }
  ]
};

export const B2_WEEK_35 = createToeflUnit(
  'toefl-b2-w35',
  'Week 35: Mock Exam 1 (B2)',
  'Final preparation phase for the TOEFL iBT at B2 level.',
  ['Consolidate Mock Exam 1 (B2) performance', 'Handle full-length mock exams', 'Refine time-saving strategies'],
  [B2_WFIXED_BLOCK1]
);
