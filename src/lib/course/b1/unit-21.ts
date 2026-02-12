import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_21_EXERCISES: Exercise[] = [
  {
    id: 'b1-u21-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Passive Voice',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { items: [{ front: 'The book was written by him.', back: 'El libro fue escrito por él.', example: 'Passive voice focuses on the action rather than the doer.', explanation: 'Formed with "be" + past participle.' }] } as any
  },
  ...generateReviewExercises(21, 'Passive Voice', 2, 49)
];
