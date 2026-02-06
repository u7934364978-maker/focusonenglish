import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 10;
const LEVEL = 'b2';

export const B2_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 3 == 0 ? 'reading-comprehension' : 'listening',
  title: 'Listening: Connecting Information',
  explanation: 'Advanced practice focusing on Listening: Connecting Information.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A critical element of Listening: Connecting Information at B2 level is:',
      options: ['Detailed analysis', 'Basic understanding', 'Quick skimming'],
      correctAnswer: 'Detailed analysis',
      explanation: 'B2 requires a deeper level of analysis than B1.',
      points: 2
    }
  ]
};

export const B2_WEEK_10 = createToeflUnit(
  'toefl-b2-w10',
  'Week 10: Listening: Connecting Information',
  'Advancing TOEFL skills at B2 level focusing on Listening: Connecting Information.',
  ['Analyze Listening: Connecting Information in academic contexts', 'Improve accuracy in complex tasks', 'Expand academic vocabulary'],
  [B2_W${UNIT_ID}_BLOCK1]
);
