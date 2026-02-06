import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 18;
const LEVEL = 'c1';

const C1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'writing' : 'speaking',
  title: 'Speaking Task 3 (Critical Analysis of Campus Issues)',
  explanation: 'Advanced C1 production focusing on Speaking Task 3 (Critical Analysis of Campus Issues).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To attain a score of 28+ in Speaking Task 3 (Critical Analysis of Campus Issues), a student must demonstrate:',
      options: ['Syntactic complexity and lexical precision', 'Perfect pronunciation only', 'High speed of delivery'],
      correctAnswer: 'Syntactic complexity and lexical precision',
      explanation: 'C1 requires both advanced grammatical structures and highly specific academic vocabulary.',
      points: 3
    }
  ]
};

export const C1_WEEK_18 = createToeflUnit(
  'toefl-c1-w18',
  'Week 18: Speaking Task 3 (Critical Analysis of Campus Issues)',
  'Mastering Speaking Task 3 (Critical Analysis of Campus Issues) at C1 level with focus on sophistication and precision.',
  ['Perfect the delivery of Speaking Task 3 (Critical Analysis of Campus Issues) responses', 'Integrate complex ideas with academic flair', 'Maintain high accuracy under strict time constraints'],
  [C1_WFIXED_BLOCK1]
);
