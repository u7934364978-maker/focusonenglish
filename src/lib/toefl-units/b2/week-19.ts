import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 19;
const LEVEL = 'b2';

export const B2_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: i % 2 == 0 ? 'writing' : 'speaking',
  title: 'Speaking Task 4 (Lecture Summarization)',
  explanation: 'Production practice focusing on Speaking Task 4 (Lecture Summarization).',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To achieve a high score in Speaking Task 4 (Lecture Summarization), you should focus on:',
      options: ['Clarity and structure', 'Using very rare words', 'Speaking/writing as much as possible'],
      correctAnswer: 'Clarity and structure',
      explanation: 'Structure and clarity are fundamental for B2 production tasks.',
      points: 2
    }
  ]
};

export const B2_WEEK_19 = createToeflUnit(
  'toefl-b2-w19',
  'Week 19: Speaking Task 4 (Lecture Summarization)',
  'Mastering Speaking Task 4 (Lecture Summarization) for the TOEFL iBT at B2 level.',
  ['Perfect the organization of Speaking Task 4 (Lecture Summarization) responses', 'Improve synthesis of multiple sources', 'Enhance grammatical variety and accuracy'],
  [B2_W${UNIT_ID}_BLOCK1]
);
