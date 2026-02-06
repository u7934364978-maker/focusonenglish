import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 23;
const LEVEL = 'b1';

export const B1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Speaking - Synthesizing Reading and Listening',
  explanation: 'Practice exercises for Speaking - Synthesizing Reading and Listening.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A key strategy for Speaking - Synthesizing Reading and Listening is:',
      options: ['Taking clear notes', 'Memorizing full sentences', 'Speaking very fast'],
      correctAnswer: 'Taking clear notes',
      explanation: 'Note-taking is essential for integrated TOEFL tasks.',
      points: 1
    }
  ]
};

export const B1_WEEK_23 = createToeflUnit(
  'toefl-b1-w23',
  'Week 23: Speaking - Synthesizing Reading and Listening',
  'Deep dive into Speaking - Synthesizing Reading and Listening for the TOEFL iBT.',
  ['Master Speaking - Synthesizing Reading and Listening strategies', 'Improve response organization', 'Practice under timed conditions'],
  [B1_W${UNIT_ID}_BLOCK1]
);
