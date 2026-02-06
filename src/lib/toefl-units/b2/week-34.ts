import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 34;
const LEVEL = 'b2';

export const B2_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'practice_set',
  title: 'Advanced Inference and Logic (Reading)',
  explanation: 'Final intensive practice for Advanced Inference and Logic (Reading).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'During a Advanced Inference and Logic (Reading), the focus should shift to:',
      options: ['Consistency under pressure', 'Learning new rules', 'Relaxing'],
      correctAnswer: 'Consistency under pressure',
      explanation: 'Consistency and stamina are key for the final weeks of TOEFL prep.',
      points: 2
    }
  ]
};

export const B2_WEEK_34 = createToeflUnit(
  'toefl-b2-w34',
  'Week 34: Advanced Inference and Logic (Reading)',
  'Final preparation phase for the TOEFL iBT at B2 level.',
  ['Consolidate Advanced Inference and Logic (Reading) performance', 'Handle full-length mock exams', 'Refine time-saving strategies'],
  [B2_W${UNIT_ID}_BLOCK1]
);
