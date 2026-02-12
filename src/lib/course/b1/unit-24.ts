import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_24_EXERCISES: Exercise[] = [
  {
    id: 'b1-u24-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Conditionals: Third',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { items: [{ front: 'If I had studied, I would have passed.', back: 'Si hubiera estudiado, habría aprobado.', example: 'Third conditional for past regrets.', explanation: 'If + past perfect, would have + past participle.' }] } as any
  },
  ...generateReviewExercises(24, 'Conditionals: Third', 2, 49)
];
