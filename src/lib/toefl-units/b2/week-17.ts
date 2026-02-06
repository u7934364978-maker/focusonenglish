import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 17;
const LEVEL = 'b2';

export const B2_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Writing Task 1 (B2 Integration)',
  explanation: 'Production practice focusing on Writing Task 1 (B2 Integration).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To achieve a high score in Writing Task 1 (B2 Integration), you should focus on:',
      options: ['Clarity and structure', 'Using very rare words', 'Speaking/writing as much as possible'],
      correctAnswer: 'Clarity and structure',
      explanation: 'Structure and clarity are fundamental for B2 production tasks.',
      points: 2
    }
  ]
};

export const B2_WEEK_17 = createToeflUnit(
  'toefl-b2-w17',
  'Week 17: Writing Task 1 (B2 Integration)',
  'Mastering Writing Task 1 (B2 Integration) for the TOEFL iBT at B2 level.',
  ['Perfect the organization of Writing Task 1 (B2 Integration) responses', 'Improve synthesis of multiple sources', 'Enhance grammatical variety and accuracy'],
  [B2_W${UNIT_ID}_BLOCK1]
);
