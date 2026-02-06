import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 19;
const LEVEL = 'b1';

const B1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'writing' : 'speaking',
  title: 'Speaking Task 4 - Integrated Lecture',
  explanation: 'Practice exercises for Speaking Task 4 - Integrated Lecture.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A key strategy for Speaking Task 4 - Integrated Lecture is:',
      options: ['Taking clear notes', 'Memorizing full sentences', 'Speaking very fast'],
      correctAnswer: 'Taking clear notes',
      explanation: 'Note-taking is essential for integrated TOEFL tasks.',
      points: 1
    }
  ]
};

export const B1_WEEK_19 = createToeflUnit(
  'toefl-b1-w19',
  'Week 19: Speaking Task 4 - Integrated Lecture',
  'Deep dive into Speaking Task 4 - Integrated Lecture for the TOEFL iBT.',
  ['Master Speaking Task 4 - Integrated Lecture strategies', 'Improve response organization', 'Practice under timed conditions'],
  [B1_WFIXED_BLOCK1]
);
