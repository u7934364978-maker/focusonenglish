import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_23_EXERCISES: Exercise[] = [
  {
    id: 'b1-u23-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Conditionals: Second',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { items: [{ front: 'If I were you, I would go.', back: 'Si yo fuera tú, iría.', example: 'Second conditional for hypothetical situations.', explanation: 'If + past simple, would + infinitive.' }] } as any
  },
  ...generateReviewExercises(23, 'Conditionals: Second', 2, 49)
];
