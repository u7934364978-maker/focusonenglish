import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_27_EXERCISES: Exercise[] = [
  {
    id: 'b1-u27-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Reported Speech: Questions',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { items: [{ front: 'She asked where I lived.', back: 'Preguntó dónde vivía.', example: 'Reported questions use statement word order.', explanation: 'No "do/does/did" in reported questions.' }] } as any
  },
  ...generateReviewExercises(27, 'Reported Speech: Questions', 2, 49)
];
