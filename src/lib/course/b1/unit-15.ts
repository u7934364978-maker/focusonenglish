import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_15_EXERCISES: Exercise[] = [
  {
    id: 'b1-u15-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Psychology & Emotions',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Empathy', back: 'Empatía', example: 'Empathy is important for building strong relationships.', pronunciation: '/ˈem.pə.θi/', explanation: 'The ability to understand and share the feelings of another.' }] } as any
  },
  ...generateReviewExercises(15, 'Psychology & Emotions', 2, 49)
];
