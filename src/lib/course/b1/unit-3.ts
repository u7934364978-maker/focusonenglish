import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_3_EXERCISES: Exercise[] = [
  {
    id: 'b1-u3-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Unemployed', back: 'Desempleado', example: 'He has been unemployed for six months.', pronunciation: '/ˌʌn.ɪmˈplɔɪd/', explanation: 'Without a job.' }] } as any
  },
  {
    id: 'b1-u3-e2',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', question: 'I [have been] a teacher since 2015.', options: ['am', 'was', 'have been', 'will be'], correctAnswer: 'have been', explanation: 'Present perfect for a state that started in the past and continues.' }] } as any
  },
  {
    id: 'b1-u3-e3',
    type: 'matching',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { pairs: [{ id: '1', word: 'Salary', correctMatch: 'Fixed regular payment' }, { id: '2', word: 'Wages', correctMatch: 'Payment per hour/day' }, { id: '3', word: 'Bonus', correctMatch: 'Extra payment' }] } as any
  },
  {
    id: 'b1-u3-e4',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', text: 'I [work] for a large company.', correctAnswer: 'work', explanation: 'Present simple for permanent jobs.' }] } as any
  },
  {
    id: 'b1-u3-e5',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { words: ['I', 'am', 'looking', 'for', 'a', 'new', 'job'], correctOrder: ['I', 'am', 'looking', 'for', 'a', 'new', 'job'], translation: 'Estoy buscando un nuevo trabajo.' } as any
  },
  {
    id: 'b1-u3-e6',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', question: 'A person who works for themselves is...', options: ['self-employed', 'unemployed', 'retired', 'fired'], correctAnswer: 'self-employed' }] } as any
  },
  {
    id: 'b1-u3-e7',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', text: 'She [is] having a meeting right now.', correctAnswer: 'is', explanation: 'Present continuous for actions in progress.' }] } as any
  },
  {
    id: 'b1-u3-e8',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', question: 'If you stop working because you are old, you...', options: ['retire', 'resign', 'quit', 'graduate'], correctAnswer: 'retire' }] } as any
  },
  {
    id: 'b1-u3-e9',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', prompt: 'What do you do for a living?', expectedPhrases: ['I work as a', 'I am responsible for', 'My duties include'], sampleAnswer: 'I work as a software developer and I am responsible for creating mobile apps.' }] } as any
  },
  {
    id: 'b1-u3-e10',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', text: 'The [boss] gave me a promotion.', correctAnswer: 'boss' }] } as any
  },
  ...generateReviewExercises(3, 'Work & Professional Life')
];
