import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 16;
const LEVEL = 'b2';

const B2_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'writing' : 'speaking',
  title: 'Speaking Task 2 (Advanced Synthesis)',
  explanation: 'Production practice focusing on Speaking Task 2 (Advanced Synthesis).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To achieve a high score in Speaking Task 2 (Advanced Synthesis), you should focus on:',
      options: ['Clarity and structure', 'Using very rare words', 'Speaking/writing as much as possible'],
      correctAnswer: 'Clarity and structure',
      explanation: 'Structure and clarity are fundamental for B2 production tasks.',
      points: 2
    }
  ]
};

export const B2_WEEK_16 = createToeflUnit(
  'toefl-b2-w16',
  'Week 16: Speaking Task 2 (Advanced Synthesis)',
  'Mastering Speaking Task 2 (Advanced Synthesis) for the TOEFL iBT at B2 level.',
  ['Perfect the organization of Speaking Task 2 (Advanced Synthesis) responses', 'Improve synthesis of multiple sources', 'Enhance grammatical variety and accuracy'],
  [B2_WFIXED_BLOCK1]
);
