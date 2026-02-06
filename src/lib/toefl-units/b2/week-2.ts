import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 2;
const LEVEL = 'b2';

const B2_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'reading-comprehension' : 'listening',
  title: 'Introduction to TOEFL B2 Level',
  explanation: 'Advanced practice focusing on Introduction to TOEFL B2 Level.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A critical element of Introduction to TOEFL B2 Level at B2 level is:',
      options: ['Detailed analysis', 'Basic understanding', 'Quick skimming'],
      correctAnswer: 'Detailed analysis',
      explanation: 'B2 requires a deeper level of analysis than B1.',
      points: 2
    }
  ]
};

export const B2_WEEK_2 = createToeflUnit(
  'toefl-b2-w2',
  'Week 2: Introduction to TOEFL B2 Level',
  'Advancing TOEFL skills at B2 level focusing on Introduction to TOEFL B2 Level.',
  ['Analyze Introduction to TOEFL B2 Level in academic contexts', 'Improve accuracy in complex tasks', 'Expand academic vocabulary'],
  [B2_WFIXED_BLOCK1]
);
