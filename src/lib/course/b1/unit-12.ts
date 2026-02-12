import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_12_EXERCISES: Exercise[] = [
  {
    id: 'b1-u12-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Art & Literature',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Masterpiece', back: 'Obra maestra', example: 'The Mona Lisa is a masterpiece of the Renaissance.', pronunciation: '/ˈmɑːs.tə.piːs/', explanation: 'A work of outstanding artistry, skill, or workmanship.' }] } as any
  },
  ...generateReviewExercises(12, 'Art & Literature', 2, 49)
];
