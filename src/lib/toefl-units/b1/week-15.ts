import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 15;
const LEVEL = 'b1';

export const B1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: '',
  explanation: 'Practice exercises for .',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A key strategy for  is:',
      options: ['Taking clear notes', 'Memorizing full sentences', 'Speaking very fast'],
      correctAnswer: 'Taking clear notes',
      explanation: 'Note-taking is essential for integrated TOEFL tasks.',
      points: 1
    }
  ]
};

export const B1_WEEK_15 = createToeflUnit(
  'toefl-b1-w15',
  'Week 15: ',
  'Deep dive into  for the TOEFL iBT.',
  ['Master  strategies', 'Improve response organization', 'Practice under timed conditions'],
  [B1_W${UNIT_ID}_BLOCK1]
);
