import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 15;
const LEVEL = 'c1';

export const C1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Writing: Academic Discussion (Nuanced Arguments)',
  explanation: 'Advanced C1 production focusing on Writing: Academic Discussion (Nuanced Arguments).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To attain a score of 28+ in Writing: Academic Discussion (Nuanced Arguments), a student must demonstrate:',
      options: ['Syntactic complexity and lexical precision', 'Perfect pronunciation only', 'High speed of delivery'],
      correctAnswer: 'Syntactic complexity and lexical precision',
      explanation: 'C1 requires both advanced grammatical structures and highly specific academic vocabulary.',
      points: 3
    }
  ]
};

export const C1_WEEK_15 = createToeflUnit(
  'toefl-c1-w15',
  'Week 15: Writing: Academic Discussion (Nuanced Arguments)',
  'Mastering Writing: Academic Discussion (Nuanced Arguments) at C1 level with focus on sophistication and precision.',
  ['Perfect the delivery of Writing: Academic Discussion (Nuanced Arguments) responses', 'Integrate complex ideas with academic flair', 'Maintain high accuracy under strict time constraints'],
  [C1_W${UNIT_ID}_BLOCK1]
);
