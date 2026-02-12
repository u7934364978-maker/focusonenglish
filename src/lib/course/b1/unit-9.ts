import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_9_EXERCISES: Exercise[] = [
  {
    id: 'b1-u9-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Education & Learning',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Curriculum', back: 'Plan de estudios', example: 'The school is updating its science curriculum.', pronunciation: '/kəˈrɪk.jə.ləm/', explanation: 'The subjects comprising a course of study in a school or college.' }] } as any
  },
  ...generateReviewExercises(9, 'Education & Learning', 2, 49)
];
