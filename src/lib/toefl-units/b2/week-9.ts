import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 9;
const LEVEL = 'b2';

export const B2_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 3 == 0 ? 'reading-comprehension' : 'listening',
  title: 'Reading: Inference and Rhetorical Purpose',
  explanation: 'Advanced practice focusing on Reading: Inference and Rhetorical Purpose.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A critical element of Reading: Inference and Rhetorical Purpose at B2 level is:',
      options: ['Detailed analysis', 'Basic understanding', 'Quick skimming'],
      correctAnswer: 'Detailed analysis',
      explanation: 'B2 requires a deeper level of analysis than B1.',
      points: 2
    }
  ]
};

export const B2_WEEK_9 = createToeflUnit(
  'toefl-b2-w9',
  'Week 9: Reading: Inference and Rhetorical Purpose',
  'Advancing TOEFL skills at B2 level focusing on Reading: Inference and Rhetorical Purpose.',
  ['Analyze Reading: Inference and Rhetorical Purpose in academic contexts', 'Improve accuracy in complex tasks', 'Expand academic vocabulary'],
  [B2_W${UNIT_ID}_BLOCK1]
);
