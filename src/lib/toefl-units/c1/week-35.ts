import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 35;
const LEVEL = 'c1';

export const C1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'practice_set',
  title: 'C1 Level Mock Exam 1',
  explanation: 'Advanced C1 intensive practice for C1 Level Mock Exam 1.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'During a C1 level C1 Level Mock Exam 1, the primary objective is:',
      options: ['Polishing nuances and consistency', 'Learning new grammar', 'Translating complex words'],
      correctAnswer: 'Polishing nuances and consistency',
      explanation: 'At C1 level, the focus shifts to absolute precision and maintaining performance under maximum pressure.',
      points: 3
    }
  ]
};

export const C1_WEEK_35 = createToeflUnit(
  'toefl-c1-w35',
  'Week 35: C1 Level Mock Exam 1',
  'Ultimate preparation phase for the TOEFL iBT at C1 mastery level.',
  ['Execute C1 Level Mock Exam 1 with total accuracy', 'Analyze complex patterns in mock exams', 'Finalize elite-level exam strategies'],
  [C1_W${UNIT_ID}_BLOCK1]
);
