import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 13;
const LEVEL = 'b1';

export const B1_W13_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'speaking',
  title: 'Independent Speaking Task (Task 1)',
  explanation: 'Practice giving your opinion on familiar topics in 45 seconds.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'Which of the following is a good opening for a Speaking Task 1?',
      options: [
        'In my opinion, studying in groups is better...',
        'The reading says that...',
        'The professor explains two reasons...'
      ],
      correctAnswer: 'In my opinion, studying in groups is better...',
      explanation: 'Task 1 is about your own opinion.',
      points: 1
    }
  ]
};

export const B1_WEEK_13 = createToeflUnit(
  'toefl-b1-w13',
  'Week 13: Speaking - Independent Task',
  'Introduction to the TOEFL Speaking section and Independent Task strategies.',
  ['Understand the Speaking Task 1 format', 'Practice timing (15s prep, 45s response)', 'Use templates for opinion giving'],
  [B1_W13_BLOCK1]
);
