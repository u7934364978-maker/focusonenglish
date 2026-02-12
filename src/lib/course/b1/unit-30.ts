import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_30_EXERCISES: Exercise[] = [
  {
    id: 'b1-u30-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Future Forms Review',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { items: [{ front: 'I will have finished by then.', back: 'Habré terminado para entonces.', example: 'Future perfect for completed actions in the future.', explanation: 'Will have + past participle.' }] } as any
  },
  ...generateReviewExercises(30, 'Future Forms Review', 2, 49)
];
