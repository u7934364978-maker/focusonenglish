import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 19;
const LEVEL = 'c1';

export const C1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Speaking Task 4 (Mastering High-Level Lectures)',
  explanation: 'Advanced C1 production focusing on Speaking Task 4 (Mastering High-Level Lectures).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To attain a score of 28+ in Speaking Task 4 (Mastering High-Level Lectures), a student must demonstrate:',
      options: ['Syntactic complexity and lexical precision', 'Perfect pronunciation only', 'High speed of delivery'],
      correctAnswer: 'Syntactic complexity and lexical precision',
      explanation: 'C1 requires both advanced grammatical structures and highly specific academic vocabulary.',
      points: 3
    }
  ]
};

export const C1_WEEK_19 = createToeflUnit(
  'toefl-c1-w19',
  'Week 19: Speaking Task 4 (Mastering High-Level Lectures)',
  'Mastering Speaking Task 4 (Mastering High-Level Lectures) at C1 level with focus on sophistication and precision.',
  ['Perfect the delivery of Speaking Task 4 (Mastering High-Level Lectures) responses', 'Integrate complex ideas with academic flair', 'Maintain high accuracy under strict time constraints'],
  [C1_W${UNIT_ID}_BLOCK1]
);
