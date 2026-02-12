import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_14_EXERCISES: Exercise[] = [
  {
    id: 'b1-u14-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Crime & Justice',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Witness', back: 'Testigo', example: 'The witness testified in court.', pronunciation: '/ˈwɪt.nəs/', explanation: 'A person who sees an event, typically a crime or accident, take place.' }] } as any
  },
  ...generateReviewExercises(14, 'Crime & Justice', 2, 49)
];
