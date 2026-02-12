import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_20_EXERCISES: Exercise[] = [
  {
    id: 'b1-u20-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Global Issues',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Sustainability', back: 'Sostenibilidad', example: 'Sustainability is crucial for the future of our planet.', pronunciation: '/səˌsteɪ.nəˈbɪl.ə.ti/', explanation: 'The ability to be maintained at a certain rate or level.' }] } as any
  },
  ...generateReviewExercises(20, 'Global Issues', 2, 49)
];
