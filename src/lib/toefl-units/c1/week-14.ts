import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 14;
const LEVEL = 'c1';

export const C1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Speaking Task 1 (C1 Master Level)',
  explanation: 'Advanced C1 production focusing on Speaking Task 1 (C1 Master Level).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To attain a score of 28+ in Speaking Task 1 (C1 Master Level), a student must demonstrate:',
      options: ['Syntactic complexity and lexical precision', 'Perfect pronunciation only', 'High speed of delivery'],
      correctAnswer: 'Syntactic complexity and lexical precision',
      explanation: 'C1 requires both advanced grammatical structures and highly specific academic vocabulary.',
      points: 3
    }
  ]
};

export const C1_WEEK_14 = createToeflUnit(
  'toefl-c1-w14',
  'Week 14: Speaking Task 1 (C1 Master Level)',
  'Mastering Speaking Task 1 (C1 Master Level) at C1 level with focus on sophistication and precision.',
  ['Perfect the delivery of Speaking Task 1 (C1 Master Level) responses', 'Integrate complex ideas with academic flair', 'Maintain high accuracy under strict time constraints'],
  [C1_W${UNIT_ID}_BLOCK1]
);
