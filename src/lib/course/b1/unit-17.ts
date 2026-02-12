import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_17_EXERCISES: Exercise[] = [
  {
    id: 'b1-u17-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'History & Archæology',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Artifact', back: 'Artefacto', example: 'Archæologists found an ancient artifact.', pronunciation: '/ˈɑː.tɪ.fækt/', explanation: 'An object made by a human being, typically one of cultural or historical interest.' }] } as any
  },
  ...generateReviewExercises(17, 'History & Archæology', 2, 49)
];
