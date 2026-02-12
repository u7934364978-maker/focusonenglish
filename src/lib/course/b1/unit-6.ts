import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_6_EXERCISES: Exercise[] = [
  {
    id: 'b1-u6-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Entertainment & Media',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Blockbuster', back: 'Película de gran éxito', example: 'The latest Marvel movie is a global blockbuster.', pronunciation: '/ˈblɒkˌbʌs.tər/', explanation: 'A thing of great power or size, in particular a movie or book that is very popular and financially successful.' }] } as any
  },
  {
    id: 'b1-u6-e2',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Entertainment & Media',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', question: 'I [have seen] that movie three times.', options: ['saw', 'have seen', 'see', 'had seen'], correctAnswer: 'have seen', explanation: 'Present perfect for experiences at an unspecified time.' }] } as any
  },
  {
    id: 'b1-u6-e3',
    type: 'matching',
    level: 'B1',
    topic: 'Entertainment & Media',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { pairs: [{ id: '1', word: 'Plot', correctMatch: 'The story of a book or movie' }, { id: '2', word: 'Cast', correctMatch: 'All the actors in a movie' }, { id: '3', word: 'Review', correctMatch: 'An opinion about a book or movie' }] } as any
  },
  {
    id: 'b1-u6-e4',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Entertainment & Media',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', text: 'She is the actor [who] won the Oscar.', correctAnswer: 'who', explanation: 'Relative pronoun "who" for people.' }] } as any
  },
  {
    id: 'b1-u6-e5',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Entertainment & Media',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { words: ['The', 'movie', 'was', 'directed', 'by', 'Steven', 'Spielberg'], correctOrder: ['The', 'movie', 'was', 'directed', 'by', 'Steven', 'Spielberg'], translation: 'La película fue dirigida por Steven Spielberg.' } as any
  },
  ...generateReviewExercises(6, 'Entertainment & Media')
];
