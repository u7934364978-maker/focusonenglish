import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 20;
const LEVEL = 'c1';

export const C1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Sophisticated Rhetorical Devices for Speaking',
  explanation: 'Advanced C1 production focusing on Sophisticated Rhetorical Devices for Speaking.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To attain a score of 28+ in Sophisticated Rhetorical Devices for Speaking, a student must demonstrate:',
      options: ['Syntactic complexity and lexical precision', 'Perfect pronunciation only', 'High speed of delivery'],
      correctAnswer: 'Syntactic complexity and lexical precision',
      explanation: 'C1 requires both advanced grammatical structures and highly specific academic vocabulary.',
      points: 3
    }
  ]
};

export const C1_WEEK_20 = createToeflUnit(
  'toefl-c1-w20',
  'Week 20: Sophisticated Rhetorical Devices for Speaking',
  'Mastering Sophisticated Rhetorical Devices for Speaking at C1 level with focus on sophistication and precision.',
  ['Perfect the delivery of Sophisticated Rhetorical Devices for Speaking responses', 'Integrate complex ideas with academic flair', 'Maintain high accuracy under strict time constraints'],
  [C1_W${UNIT_ID}_BLOCK1]
);
