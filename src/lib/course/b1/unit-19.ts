import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_19_EXERCISES: Exercise[] = [
  {
    id: 'b1-u19-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Religion & Spirituality',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Faith', back: 'Fe', example: 'Faith is a personal matter for many people.', pronunciation: '/feɪθ/', explanation: 'Strong belief in God or in the doctrines of a religion, based on spiritual apprehension rather than proof.' }] } as any
  },
  ...generateReviewExercises(19, 'Religion & Spirituality', 2, 49)
];
