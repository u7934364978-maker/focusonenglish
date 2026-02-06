import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 3;
const LEVEL = 'c1';

const C1_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading',
  title: 'Sophisticated Academic Lexis',
  explanation: 'Advanced C1 practice focusing on Sophisticated Academic Lexis.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'A defining characteristic of Sophisticated Academic Lexis at C1 level is:',
      options: ['Subtle logical nuances', 'Direct factual recall', 'Basic main ideas'],
      correctAnswer: 'Subtle logical nuances',
      explanation: 'C1 requires identifying implicit meanings and complex logical structures.',
      points: 3
    }
  ]
};

export const C1_WEEK_3 = createToeflUnit(
  'toefl-c1-w3',
  'Week 3: Sophisticated Academic Lexis',
  'Mastering high-level TOEFL skills at C1 level focusing on Sophisticated Academic Lexis.',
  ['Deconstruct complex Sophisticated Academic Lexis in academic texts', 'Identify implicit information and authorial tone', 'Utilize sophisticated academic vocabulary'],
  [C1_WFIXED_BLOCK1]
);
