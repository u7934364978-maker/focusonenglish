import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 22;
const LEVEL = 'b1';

const B1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'writing' : 'speaking',
  title: 'Writing - Developing an Argument',
  explanation: 'Practice exercises for Writing - Developing an Argument.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A key strategy for Writing - Developing an Argument is:',
      options: ['Taking clear notes', 'Memorizing full sentences', 'Speaking very fast'],
      correctAnswer: 'Taking clear notes',
      explanation: 'Note-taking is essential for integrated TOEFL tasks.',
      points: 1
    }
  ]
};

export const B1_WEEK_22 = createToeflUnit(
  'toefl-b1-w22',
  'Week 22: Writing - Developing an Argument',
  'Deep dive into Writing - Developing an Argument for the TOEFL iBT.',
  ['Master Writing - Developing an Argument strategies', 'Improve response organization', 'Practice under timed conditions'],
  [B1_WFIXED_BLOCK1]
);
