import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_16_EXERCISES: Exercise[] = [
  {
    id: 'b1-u16-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Philosophy & Ethics',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Morality', back: 'Moralidad', example: 'Philosophy often explores questions of morality.', pronunciation: '/məˈræl.ə.ti/', explanation: 'Principles concerning the distinction between right and wrong or good and bad behavior.' }] } as any
  },
  ...generateReviewExercises(16, 'Philosophy & Ethics', 2, 49)
];
