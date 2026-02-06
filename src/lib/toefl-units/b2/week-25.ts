import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 25;
const LEVEL = 'b2';

export const B2_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'practice_set',
  title: '',
  explanation: 'Final intensive practice for .',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'During a , the focus should shift to:',
      options: ['Consistency under pressure', 'Learning new rules', 'Relaxing'],
      correctAnswer: 'Consistency under pressure',
      explanation: 'Consistency and stamina are key for the final weeks of TOEFL prep.',
      points: 2
    }
  ]
};

export const B2_WEEK_25 = createToeflUnit(
  'toefl-b2-w25',
  'Week 25: ',
  'Final preparation phase for the TOEFL iBT at B2 level.',
  ['Consolidate  performance', 'Handle full-length mock exams', 'Refine time-saving strategies'],
  [B2_W${UNIT_ID}_BLOCK1]
);
