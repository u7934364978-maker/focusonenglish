import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_8_EXERCISES: Exercise[] = [
  {
    id: 'b1-u8-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Food & Cooking',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Recipe', back: 'Receta de cocina', example: 'I followed a recipe for chocolate cake.', pronunciation: '/ˈres.ɪ.pi/', explanation: 'A set of instructions for preparing a particular dish.' }] } as any
  },
  ...generateReviewExercises(8, 'Food & Cooking', 2, 49)
];
