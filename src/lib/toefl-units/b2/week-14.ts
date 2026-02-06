import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 14;
const LEVEL = 'b2';

const B2_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'writing' : 'speaking',
  title: 'Speaking Task 1 (B2 Strategy)',
  explanation: 'Production practice focusing on Speaking Task 1 (B2 Strategy).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To achieve a high score in Speaking Task 1 (B2 Strategy), you should focus on:',
      options: ['Clarity and structure', 'Using very rare words', 'Speaking/writing as much as possible'],
      correctAnswer: 'Clarity and structure',
      explanation: 'Structure and clarity are fundamental for B2 production tasks.',
      points: 2
    }
  ]
};

export const B2_WEEK_14 = createToeflUnit(
  'toefl-b2-w14',
  'Week 14: Speaking Task 1 (B2 Strategy)',
  'Mastering Speaking Task 1 (B2 Strategy) for the TOEFL iBT at B2 level.',
  ['Perfect the organization of Speaking Task 1 (B2 Strategy) responses', 'Improve synthesis of multiple sources', 'Enhance grammatical variety and accuracy'],
  [B2_WFIXED_BLOCK1]
);
