import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 26;
const LEVEL = 'c1';

export const C1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'practice_set',
  title: 'Full Reading Practice (C1 Advanced)',
  explanation: 'Advanced C1 intensive practice for Full Reading Practice (C1 Advanced).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'During a C1 level Full Reading Practice (C1 Advanced), the primary objective is:',
      options: ['Polishing nuances and consistency', 'Learning new grammar', 'Translating complex words'],
      correctAnswer: 'Polishing nuances and consistency',
      explanation: 'At C1 level, the focus shifts to absolute precision and maintaining performance under maximum pressure.',
      points: 3
    }
  ]
};

export const C1_WEEK_26 = createToeflUnit(
  'toefl-c1-w26',
  'Week 26: Full Reading Practice (C1 Advanced)',
  'Ultimate preparation phase for the TOEFL iBT at C1 mastery level.',
  ['Execute Full Reading Practice (C1 Advanced) with total accuracy', 'Analyze complex patterns in mock exams', 'Finalize elite-level exam strategies'],
  [C1_W${UNIT_ID}_BLOCK1]
);
