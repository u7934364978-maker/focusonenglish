import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_10_EXERCISES: Exercise[] = [
  {
    id: 'b1-u10-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Money & Finance',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Investment', back: 'Inversión', example: 'Buying a house is a big investment.', pronunciation: '/ɪnˈvest.mənt/', explanation: 'The action or process of investing money for profit.' }] } as any
  },
  ...generateReviewExercises(10, 'Money & Finance', 2, 49)
];
