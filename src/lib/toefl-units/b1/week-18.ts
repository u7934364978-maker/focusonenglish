import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 18;
const LEVEL = 'b1';

export const B1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Speaking Task 3 - Integrated Academic',
  explanation: 'Practice exercises for Speaking Task 3 - Integrated Academic.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A key strategy for Speaking Task 3 - Integrated Academic is:',
      options: ['Taking clear notes', 'Memorizing full sentences', 'Speaking very fast'],
      correctAnswer: 'Taking clear notes',
      explanation: 'Note-taking is essential for integrated TOEFL tasks.',
      points: 1
    }
  ]
};

export const B1_WEEK_18 = createToeflUnit(
  'toefl-b1-w18',
  'Week 18: Speaking Task 3 - Integrated Academic',
  'Deep dive into Speaking Task 3 - Integrated Academic for the TOEFL iBT.',
  ['Master Speaking Task 3 - Integrated Academic strategies', 'Improve response organization', 'Practice under timed conditions'],
  [B1_W${UNIT_ID}_BLOCK1]
);
