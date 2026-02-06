import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 8;
const LEVEL = 'b2';

const B2_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'reading-comprehension' : 'listening',
  title: 'Reading: Vocabulary and Reference',
  explanation: 'Advanced practice focusing on Reading: Vocabulary and Reference.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A critical element of Reading: Vocabulary and Reference at B2 level is:',
      options: ['Detailed analysis', 'Basic understanding', 'Quick skimming'],
      correctAnswer: 'Detailed analysis',
      explanation: 'B2 requires a deeper level of analysis than B1.',
      points: 2
    }
  ]
};

export const B2_WEEK_8 = createToeflUnit(
  'toefl-b2-w8',
  'Week 8: Reading: Vocabulary and Reference',
  'Advancing TOEFL skills at B2 level focusing on Reading: Vocabulary and Reference.',
  ['Analyze Reading: Vocabulary and Reference in academic contexts', 'Improve accuracy in complex tasks', 'Expand academic vocabulary'],
  [B2_WFIXED_BLOCK1]
);
