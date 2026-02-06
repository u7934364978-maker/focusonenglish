import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 21;
const LEVEL = 'b1';

const B1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'writing' : 'speaking',
  title: 'Speaking - Pronunciation and Pacing',
  explanation: 'Practice exercises for Speaking - Pronunciation and Pacing.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A key strategy for Speaking - Pronunciation and Pacing is:',
      options: ['Taking clear notes', 'Memorizing full sentences', 'Speaking very fast'],
      correctAnswer: 'Taking clear notes',
      explanation: 'Note-taking is essential for integrated TOEFL tasks.',
      points: 1
    }
  ]
};

export const B1_WEEK_21 = createToeflUnit(
  'toefl-b1-w21',
  'Week 21: Speaking - Pronunciation and Pacing',
  'Deep dive into Speaking - Pronunciation and Pacing for the TOEFL iBT.',
  ['Master Speaking - Pronunciation and Pacing strategies', 'Improve response organization', 'Practice under timed conditions'],
  [B1_WFIXED_BLOCK1]
);
