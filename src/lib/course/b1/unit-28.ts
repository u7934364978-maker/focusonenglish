import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_28_EXERCISES: Exercise[] = [
  {
    id: 'b1-u28-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Reported Speech: Commands',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { items: [{ front: 'He told me to wait.', back: 'Me dijo que esperara.', example: 'Reported commands use the infinitive.', explanation: 'Tell + object + to + infinitive.' }] } as any
  },
  ...generateReviewExercises(28, 'Reported Speech: Commands', 2, 49)
];
