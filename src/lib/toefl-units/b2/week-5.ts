import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 5;
const LEVEL = 'b2';

const B2_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'reading-comprehension' : 'listening',
  title: 'Reading: Negative Factual Information',
  explanation: 'Advanced practice focusing on Reading: Negative Factual Information.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A critical element of Reading: Negative Factual Information at B2 level is:',
      options: ['Detailed analysis', 'Basic understanding', 'Quick skimming'],
      correctAnswer: 'Detailed analysis',
      explanation: 'B2 requires a deeper level of analysis than B1.',
      points: 2
    }
  ]
};

export const B2_WEEK_5 = createToeflUnit(
  'toefl-b2-w5',
  'Week 5: Reading: Negative Factual Information',
  'Advancing TOEFL skills at B2 level focusing on Reading: Negative Factual Information.',
  ['Analyze Reading: Negative Factual Information in academic contexts', 'Improve accuracy in complex tasks', 'Expand academic vocabulary'],
  [B2_WFIXED_BLOCK1]
);
