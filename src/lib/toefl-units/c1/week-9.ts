import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 9;
const LEVEL = 'c1';

export const C1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'reading-comprehension' : 'listening',
  title: 'Reading: Advanced Sentence Insertion',
  explanation: 'Advanced C1 practice focusing on Reading: Advanced Sentence Insertion.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A defining characteristic of Reading: Advanced Sentence Insertion at C1 level is:',
      options: ['Subtle logical nuances', 'Direct factual recall', 'Basic main ideas'],
      correctAnswer: 'Subtle logical nuances',
      explanation: 'C1 requires identifying implicit meanings and complex logical structures.',
      points: 3
    }
  ]
};

export const C1_WEEK_9 = createToeflUnit(
  'toefl-c1-w9',
  'Week 9: Reading: Advanced Sentence Insertion',
  'Mastering high-level TOEFL skills at C1 level focusing on Reading: Advanced Sentence Insertion.',
  ['Deconstruct complex Reading: Advanced Sentence Insertion in academic texts', 'Identify implicit information and authorial tone', 'Utilize sophisticated academic vocabulary'],
  [C1_W${UNIT_ID}_BLOCK1]
);
