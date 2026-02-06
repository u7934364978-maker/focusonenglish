import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 23;
const LEVEL = 'b2';

export const B2_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Argument Development for Academic Discussion',
  explanation: 'Production practice focusing on Argument Development for Academic Discussion.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To achieve a high score in Argument Development for Academic Discussion, you should focus on:',
      options: ['Clarity and structure', 'Using very rare words', 'Speaking/writing as much as possible'],
      correctAnswer: 'Clarity and structure',
      explanation: 'Structure and clarity are fundamental for B2 production tasks.',
      points: 2
    }
  ]
};

export const B2_WEEK_23 = createToeflUnit(
  'toefl-b2-w23',
  'Week 23: Argument Development for Academic Discussion',
  'Mastering Argument Development for Academic Discussion for the TOEFL iBT at B2 level.',
  ['Perfect the organization of Argument Development for Academic Discussion responses', 'Improve synthesis of multiple sources', 'Enhance grammatical variety and accuracy'],
  [B2_W${UNIT_ID}_BLOCK1]
);
