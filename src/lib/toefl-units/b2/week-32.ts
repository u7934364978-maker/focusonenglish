import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 32;
const LEVEL = 'b2';

const B2_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Complex Vocabulary in Academic Contexts',
  explanation: 'Final intensive practice for Complex Vocabulary in Academic Contexts.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'During a Complex Vocabulary in Academic Contexts, the focus should shift to:',
      options: ['Consistency under pressure', 'Learning new rules', 'Relaxing'],
      correctAnswer: 'Consistency under pressure',
      explanation: 'Consistency and stamina are key for the final weeks of TOEFL prep.',
      points: 2
    }
  ]
};

export const B2_WEEK_32 = createToeflUnit(
  'toefl-b2-w32',
  'Week 32: Complex Vocabulary in Academic Contexts',
  'Final preparation phase for the TOEFL iBT at B2 level.',
  ['Consolidate Complex Vocabulary in Academic Contexts performance', 'Handle full-length mock exams', 'Refine time-saving strategies'],
  [B2_WFIXED_BLOCK1]
);
