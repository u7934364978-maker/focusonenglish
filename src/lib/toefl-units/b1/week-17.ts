import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 17;
const LEVEL = 'b1';

export const B1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Writing Task 1 - Integrated Task',
  explanation: 'Practice exercises for Writing Task 1 - Integrated Task.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A key strategy for Writing Task 1 - Integrated Task is:',
      options: ['Taking clear notes', 'Memorizing full sentences', 'Speaking very fast'],
      correctAnswer: 'Taking clear notes',
      explanation: 'Note-taking is essential for integrated TOEFL tasks.',
      points: 1
    }
  ]
};

export const B1_WEEK_17 = createToeflUnit(
  'toefl-b1-w17',
  'Week 17: Writing Task 1 - Integrated Task',
  'Deep dive into Writing Task 1 - Integrated Task for the TOEFL iBT.',
  ['Master Writing Task 1 - Integrated Task strategies', 'Improve response organization', 'Practice under timed conditions'],
  [B1_W${UNIT_ID}_BLOCK1]
);
