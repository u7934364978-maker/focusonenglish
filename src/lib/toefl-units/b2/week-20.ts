import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 20;
const LEVEL = 'b2';

const B2_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'writing' : 'speaking',
  title: 'Advanced Note-taking for Speaking',
  explanation: 'Production practice focusing on Advanced Note-taking for Speaking.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To achieve a high score in Advanced Note-taking for Speaking, you should focus on:',
      options: ['Clarity and structure', 'Using very rare words', 'Speaking/writing as much as possible'],
      correctAnswer: 'Clarity and structure',
      explanation: 'Structure and clarity are fundamental for B2 production tasks.',
      points: 2
    }
  ]
};

export const B2_WEEK_20 = createToeflUnit(
  'toefl-b2-w20',
  'Week 20: Advanced Note-taking for Speaking',
  'Mastering Advanced Note-taking for Speaking for the TOEFL iBT at B2 level.',
  ['Perfect the organization of Advanced Note-taking for Speaking responses', 'Improve synthesis of multiple sources', 'Enhance grammatical variety and accuracy'],
  [B2_WFIXED_BLOCK1]
);
