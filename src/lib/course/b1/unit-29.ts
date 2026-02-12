import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_29_EXERCISES: Exercise[] = [
  {
    id: 'b1-u29-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Modal Verbs: Deduction',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { items: [{ front: 'It must be true.', back: 'Debe ser verdad.', example: 'Must for positive deduction.', explanation: 'Used when we are almost certain.' }] } as any
  },
  ...generateReviewExercises(29, 'Modal Verbs: Deduction', 2, 49)
];
