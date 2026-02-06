import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 1;
const LEVEL = 'b2';

const B2_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'reading-comprehension' : 'listening',
  title: '',
  explanation: 'Advanced practice focusing on .',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A critical element of  at B2 level is:',
      options: ['Detailed analysis', 'Basic understanding', 'Quick skimming'],
      correctAnswer: 'Detailed analysis',
      explanation: 'B2 requires a deeper level of analysis than B1.',
      points: 2
    }
  ]
};

export const B2_WEEK_1 = createToeflUnit(
  'toefl-b2-w1',
  'Week 1: ',
  'Advancing TOEFL skills at B2 level focusing on .',
  ['Analyze  in academic contexts', 'Improve accuracy in complex tasks', 'Expand academic vocabulary'],
  [B2_WFIXED_BLOCK1]
);
