import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_7_EXERCISES: Exercise[] = [
  {
    id: 'b1-u7-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Travel & Holidays',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Itinerary', back: 'Itinerario', example: 'We have a very tight itinerary for our trip to Japan.', pronunciation: '/aɪˈtɪn.ər.ər.i/', explanation: 'A planned route or journey.' }] } as any
  },
  ...generateReviewExercises(7, 'Travel & Holidays', 2, 49)
];
