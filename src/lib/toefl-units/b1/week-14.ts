import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 14;
const LEVEL = 'b1';

export const B1_W14_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'writing',
  title: 'Writing for an Academic Discussion',
  explanation: 'Practice responding to a professor\'s question in an online forum.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'In the Academic Discussion task, you should:',
      options: [
        'Only summarize what others said',
        'Contribute your own perspective to the discussion',
        'Write at least 500 words'
      ],
      correctAnswer: 'Contribute your own perspective to the discussion',
      explanation: 'You must add a meaningful contribution to the online debate.',
      points: 1
    }
  ]
};

export const B1_WEEK_14 = createToeflUnit(
  'toefl-b1-w14',
  'Week 14: Writing - Academic Discussion',
  'Master the new TOEFL Writing task: Writing for an Academic Discussion.',
  ['Understand the forum-style task', 'Practice responding to other students', 'Improve academic tone in writing'],
  [B1_W14_BLOCK1]
);
