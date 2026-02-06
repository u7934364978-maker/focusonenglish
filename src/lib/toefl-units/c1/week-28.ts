import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 28;
const LEVEL = 'c1';

const C1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Full Speaking Practice (Mastery Feedback)',
  explanation: 'Advanced C1 intensive practice for Full Speaking Practice (Mastery Feedback).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'During a C1 level Full Speaking Practice (Mastery Feedback), the primary objective is:',
      options: ['Polishing nuances and consistency', 'Learning new grammar', 'Translating complex words'],
      correctAnswer: 'Polishing nuances and consistency',
      explanation: 'At C1 level, the focus shifts to absolute precision and maintaining performance under maximum pressure.',
      points: 3
    }
  ]
};

export const C1_WEEK_28 = createToeflUnit(
  'toefl-c1-w28',
  'Week 28: Full Speaking Practice (Mastery Feedback)',
  'Ultimate preparation phase for the TOEFL iBT at C1 mastery level.',
  ['Execute Full Speaking Practice (Mastery Feedback) with total accuracy', 'Analyze complex patterns in mock exams', 'Finalize elite-level exam strategies'],
  [C1_WFIXED_BLOCK1]
);
