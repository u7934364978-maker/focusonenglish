import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 22;
const LEVEL = 'c1';

const C1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'writing' : 'speaking',
  title: 'Fluency and Complexity in Integrated Speaking',
  explanation: 'Advanced C1 production focusing on Fluency and Complexity in Integrated Speaking.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To attain a score of 28+ in Fluency and Complexity in Integrated Speaking, a student must demonstrate:',
      options: ['Syntactic complexity and lexical precision', 'Perfect pronunciation only', 'High speed of delivery'],
      correctAnswer: 'Syntactic complexity and lexical precision',
      explanation: 'C1 requires both advanced grammatical structures and highly specific academic vocabulary.',
      points: 3
    }
  ]
};

export const C1_WEEK_22 = createToeflUnit(
  'toefl-c1-w22',
  'Week 22: Fluency and Complexity in Integrated Speaking',
  'Mastering Fluency and Complexity in Integrated Speaking at C1 level with focus on sophistication and precision.',
  ['Perfect the delivery of Fluency and Complexity in Integrated Speaking responses', 'Integrate complex ideas with academic flair', 'Maintain high accuracy under strict time constraints'],
  [C1_WFIXED_BLOCK1]
);
