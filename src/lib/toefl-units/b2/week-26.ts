import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 26;
const LEVEL = 'b2';

export const B2_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'practice_set',
  title: 'Full Reading Practice (B2 Level)',
  explanation: 'Final intensive practice for Full Reading Practice (B2 Level).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'During a Full Reading Practice (B2 Level), the focus should shift to:',
      options: ['Consistency under pressure', 'Learning new rules', 'Relaxing'],
      correctAnswer: 'Consistency under pressure',
      explanation: 'Consistency and stamina are key for the final weeks of TOEFL prep.',
      points: 2
    }
  ]
};

export const B2_WEEK_26 = createToeflUnit(
  'toefl-b2-w26',
  'Week 26: Full Reading Practice (B2 Level)',
  'Final preparation phase for the TOEFL iBT at B2 level.',
  ['Consolidate Full Reading Practice (B2 Level) performance', 'Handle full-length mock exams', 'Refine time-saving strategies'],
  [B2_W${UNIT_ID}_BLOCK1]
);
