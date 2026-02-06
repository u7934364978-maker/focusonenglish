import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 30;
const LEVEL = 'b2';

const B2_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Advanced Time Management',
  explanation: 'Final intensive practice for Advanced Time Management.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'During a Advanced Time Management, the focus should shift to:',
      options: ['Consistency under pressure', 'Learning new rules', 'Relaxing'],
      correctAnswer: 'Consistency under pressure',
      explanation: 'Consistency and stamina are key for the final weeks of TOEFL prep.',
      points: 2
    }
  ]
};

export const B2_WEEK_30 = createToeflUnit(
  'toefl-b2-w30',
  'Week 30: Advanced Time Management',
  'Final preparation phase for the TOEFL iBT at B2 level.',
  ['Consolidate Advanced Time Management performance', 'Handle full-length mock exams', 'Refine time-saving strategies'],
  [B2_WFIXED_BLOCK1]
);
