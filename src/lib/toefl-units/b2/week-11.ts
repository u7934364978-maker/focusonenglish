import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 11;
const LEVEL = 'b2';

export const B2_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 3 == 0 ? 'reading-comprehension' : 'listening',
  title: 'Reading: Sentence Simplification',
  explanation: 'Advanced practice focusing on Reading: Sentence Simplification.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A critical element of Reading: Sentence Simplification at B2 level is:',
      options: ['Detailed analysis', 'Basic understanding', 'Quick skimming'],
      correctAnswer: 'Detailed analysis',
      explanation: 'B2 requires a deeper level of analysis than B1.',
      points: 2
    }
  ]
};

export const B2_WEEK_11 = createToeflUnit(
  'toefl-b2-w11',
  'Week 11: Reading: Sentence Simplification',
  'Advancing TOEFL skills at B2 level focusing on Reading: Sentence Simplification.',
  ['Analyze Reading: Sentence Simplification in academic contexts', 'Improve accuracy in complex tasks', 'Expand academic vocabulary'],
  [B2_W${UNIT_ID}_BLOCK1]
);
