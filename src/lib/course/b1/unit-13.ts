import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_13_EXERCISES: Exercise[] = [
  {
    id: 'b1-u13-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Society & Culture',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Tradition', back: 'Tradición', example: 'It is a tradition to eat turkey on Thanksgiving.', pronunciation: '/trəˈdɪʃ.ən/', explanation: 'The transmission of customs or beliefs from generation to generation.' }] } as any
  },
  ...generateReviewExercises(13, 'Society & Culture', 2, 49)
];
