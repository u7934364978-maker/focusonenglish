import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 16;
const LEVEL = 'c1';

export const C1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Speaking Task 2 (Synthesizing Abstract Concepts)',
  explanation: 'Advanced C1 production focusing on Speaking Task 2 (Synthesizing Abstract Concepts).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To attain a score of 28+ in Speaking Task 2 (Synthesizing Abstract Concepts), a student must demonstrate:',
      options: ['Syntactic complexity and lexical precision', 'Perfect pronunciation only', 'High speed of delivery'],
      correctAnswer: 'Syntactic complexity and lexical precision',
      explanation: 'C1 requires both advanced grammatical structures and highly specific academic vocabulary.',
      points: 3
    }
  ]
};

export const C1_WEEK_16 = createToeflUnit(
  'toefl-c1-w16',
  'Week 16: Speaking Task 2 (Synthesizing Abstract Concepts)',
  'Mastering Speaking Task 2 (Synthesizing Abstract Concepts) at C1 level with focus on sophistication and precision.',
  ['Perfect the delivery of Speaking Task 2 (Synthesizing Abstract Concepts) responses', 'Integrate complex ideas with academic flair', 'Maintain high accuracy under strict time constraints'],
  [C1_W${UNIT_ID}_BLOCK1]
);
