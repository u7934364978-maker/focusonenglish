import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 24;
const LEVEL = 'b1';

export const B1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Writing - Paraphrasing Techniques',
  explanation: 'Practice exercises for Writing - Paraphrasing Techniques.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A key strategy for Writing - Paraphrasing Techniques is:',
      options: ['Taking clear notes', 'Memorizing full sentences', 'Speaking very fast'],
      correctAnswer: 'Taking clear notes',
      explanation: 'Note-taking is essential for integrated TOEFL tasks.',
      points: 1
    }
  ]
};

export const B1_WEEK_24 = createToeflUnit(
  'toefl-b1-w24',
  'Week 24: Writing - Paraphrasing Techniques',
  'Deep dive into Writing - Paraphrasing Techniques for the TOEFL iBT.',
  ['Master Writing - Paraphrasing Techniques strategies', 'Improve response organization', 'Practice under timed conditions'],
  [B1_W${UNIT_ID}_BLOCK1]
);
