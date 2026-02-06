import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 10;
const LEVEL = 'b1';

export const B1_W${UNIT_ID}_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'grammar',
  title: 'Academic Practice Week 10',
  explanation: 'Academic structures and vocabulary practice.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'Identify the most academic synonym for "big":',
      options: ['Huge', 'Significant', 'Gigantic'],
      correctAnswer: 'Significant',
      explanation: 'TOEFL prefers academic register.',
      points: 1
    }
  ]
};

export const B1_WEEK_10 = createToeflUnit(
  'toefl-b1-w10',
  'Week 10: Academic Foundation',
  'Continuing the development of academic English skills for TOEFL.',
  ['Improve academic vocabulary', 'Practice exam-style tasks'],
  [B1_W${UNIT_ID}_BLOCK1]
);
