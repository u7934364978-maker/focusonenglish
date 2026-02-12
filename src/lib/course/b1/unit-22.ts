import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_22_EXERCISES: Exercise[] = [
  {
    id: 'b1-u22-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Conditionals: Zero & First',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { items: [{ front: 'If it rains, I stay home.', back: 'Si llueve, me quedo en casa.', example: 'Zero conditional for facts.', explanation: 'If + present simple, present simple.' }] } as any
  },
  ...generateReviewExercises(22, 'Conditionals: Zero & First', 2, 49)
];
