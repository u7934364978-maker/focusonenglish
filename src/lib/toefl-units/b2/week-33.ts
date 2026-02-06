import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 33;
const LEVEL = 'b2';

export const B2_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'practice_set',
  title: 'Understanding Nuance and Tone (Listening)',
  explanation: 'Final intensive practice for Understanding Nuance and Tone (Listening).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'During a Understanding Nuance and Tone (Listening), the focus should shift to:',
      options: ['Consistency under pressure', 'Learning new rules', 'Relaxing'],
      correctAnswer: 'Consistency under pressure',
      explanation: 'Consistency and stamina are key for the final weeks of TOEFL prep.',
      points: 2
    }
  ]
};

export const B2_WEEK_33 = createToeflUnit(
  'toefl-b2-w33',
  'Week 33: Understanding Nuance and Tone (Listening)',
  'Final preparation phase for the TOEFL iBT at B2 level.',
  ['Consolidate Understanding Nuance and Tone (Listening) performance', 'Handle full-length mock exams', 'Refine time-saving strategies'],
  [B2_W${UNIT_ID}_BLOCK1]
);
