import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 16;
const LEVEL = 'b1';

const B1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'writing' : 'speaking',
  title: 'Speaking Task 2 - Integrated Campus',
  explanation: 'Practice exercises for Speaking Task 2 - Integrated Campus.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A key strategy for Speaking Task 2 - Integrated Campus is:',
      options: ['Taking clear notes', 'Memorizing full sentences', 'Speaking very fast'],
      correctAnswer: 'Taking clear notes',
      explanation: 'Note-taking is essential for integrated TOEFL tasks.',
      points: 1
    }
  ]
};

export const B1_WEEK_16 = createToeflUnit(
  'toefl-b1-w16',
  'Week 16: Speaking Task 2 - Integrated Campus',
  'Deep dive into Speaking Task 2 - Integrated Campus for the TOEFL iBT.',
  ['Master Speaking Task 2 - Integrated Campus strategies', 'Improve response organization', 'Practice under timed conditions'],
  [B1_WFIXED_BLOCK1]
);
