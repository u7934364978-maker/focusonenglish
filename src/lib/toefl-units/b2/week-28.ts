import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 28;
const LEVEL = 'b2';

const B2_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Full Speaking Practice (B2 Level)',
  explanation: 'Final intensive practice for Full Speaking Practice (B2 Level).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'During a Full Speaking Practice (B2 Level), the focus should shift to:',
      options: ['Consistency under pressure', 'Learning new rules', 'Relaxing'],
      correctAnswer: 'Consistency under pressure',
      explanation: 'Consistency and stamina are key for the final weeks of TOEFL prep.',
      points: 2
    }
  ]
};

export const B2_WEEK_28 = createToeflUnit(
  'toefl-b2-w28',
  'Week 28: Full Speaking Practice (B2 Level)',
  'Final preparation phase for the TOEFL iBT at B2 level.',
  ['Consolidate Full Speaking Practice (B2 Level) performance', 'Handle full-length mock exams', 'Refine time-saving strategies'],
  [B2_WFIXED_BLOCK1]
);
