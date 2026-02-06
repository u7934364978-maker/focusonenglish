import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 22;
const LEVEL = 'b2';

export const B2_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Intonation and Fluency in Speaking',
  explanation: 'Production practice focusing on Intonation and Fluency in Speaking.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To achieve a high score in Intonation and Fluency in Speaking, you should focus on:',
      options: ['Clarity and structure', 'Using very rare words', 'Speaking/writing as much as possible'],
      correctAnswer: 'Clarity and structure',
      explanation: 'Structure and clarity are fundamental for B2 production tasks.',
      points: 2
    }
  ]
};

export const B2_WEEK_22 = createToeflUnit(
  'toefl-b2-w22',
  'Week 22: Intonation and Fluency in Speaking',
  'Mastering Intonation and Fluency in Speaking for the TOEFL iBT at B2 level.',
  ['Perfect the organization of Intonation and Fluency in Speaking responses', 'Improve synthesis of multiple sources', 'Enhance grammatical variety and accuracy'],
  [B2_W${UNIT_ID}_BLOCK1]
);
