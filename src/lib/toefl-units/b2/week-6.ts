import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 6;
const LEVEL = 'b2';

export const B2_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 3 == 0 ? 'reading-comprehension' : 'listening',
  title: 'Listening: Basic Comprehension (Lectures)',
  explanation: 'Advanced practice focusing on Listening: Basic Comprehension (Lectures).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A critical element of Listening: Basic Comprehension (Lectures) at B2 level is:',
      options: ['Detailed analysis', 'Basic understanding', 'Quick skimming'],
      correctAnswer: 'Detailed analysis',
      explanation: 'B2 requires a deeper level of analysis than B1.',
      points: 2
    }
  ]
};

export const B2_WEEK_6 = createToeflUnit(
  'toefl-b2-w6',
  'Week 6: Listening: Basic Comprehension (Lectures)',
  'Advancing TOEFL skills at B2 level focusing on Listening: Basic Comprehension (Lectures).',
  ['Analyze Listening: Basic Comprehension (Lectures) in academic contexts', 'Improve accuracy in complex tasks', 'Expand academic vocabulary'],
  [B2_W${UNIT_ID}_BLOCK1]
);
