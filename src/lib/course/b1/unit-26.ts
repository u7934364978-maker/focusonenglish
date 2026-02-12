import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_26_EXERCISES: Exercise[] = [
  {
    id: 'b1-u26-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Reported Speech: Statements',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { items: [{ front: 'He said he was tired.', back: 'Dijo que estaba cansado.', example: 'Reported speech for relaying what someone said.', explanation: 'Tense shift often occurs (present -> past).' }] } as any
  },
  ...generateReviewExercises(26, 'Reported Speech: Statements', 2, 49)
];
