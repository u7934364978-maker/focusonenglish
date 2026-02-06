import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 20;
const LEVEL = 'b1';

export const B1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Writing - Cohesion and Connectors',
  explanation: 'Practice exercises for Writing - Cohesion and Connectors.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A key strategy for Writing - Cohesion and Connectors is:',
      options: ['Taking clear notes', 'Memorizing full sentences', 'Speaking very fast'],
      correctAnswer: 'Taking clear notes',
      explanation: 'Note-taking is essential for integrated TOEFL tasks.',
      points: 1
    }
  ]
};

export const B1_WEEK_20 = createToeflUnit(
  'toefl-b1-w20',
  'Week 20: Writing - Cohesion and Connectors',
  'Deep dive into Writing - Cohesion and Connectors for the TOEFL iBT.',
  ['Master Writing - Cohesion and Connectors strategies', 'Improve response organization', 'Practice under timed conditions'],
  [B1_W${UNIT_ID}_BLOCK1]
);
