import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 27;
const LEVEL = 'c1';

export const C1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'practice_set',
  title: 'Full Listening Practice (High Complexity)',
  explanation: 'Advanced C1 intensive practice for Full Listening Practice (High Complexity).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'During a C1 level Full Listening Practice (High Complexity), the primary objective is:',
      options: ['Polishing nuances and consistency', 'Learning new grammar', 'Translating complex words'],
      correctAnswer: 'Polishing nuances and consistency',
      explanation: 'At C1 level, the focus shifts to absolute precision and maintaining performance under maximum pressure.',
      points: 3
    }
  ]
};

export const C1_WEEK_27 = createToeflUnit(
  'toefl-c1-w27',
  'Week 27: Full Listening Practice (High Complexity)',
  'Ultimate preparation phase for the TOEFL iBT at C1 mastery level.',
  ['Execute Full Listening Practice (High Complexity) with total accuracy', 'Analyze complex patterns in mock exams', 'Finalize elite-level exam strategies'],
  [C1_W${UNIT_ID}_BLOCK1]
);
