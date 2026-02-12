import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_2_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Memorable Moments (1-10) ---
  {
    id: 'b1-u2-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Nostalgic',
          back: 'Nostálgico',
          example: 'I feel nostalgic when I look at old photos.',
          pronunciation: '/nɒˈstæl.dʒɪk/',
          explanation: 'Feeling pleasure and also slight sadness when you think about things that happened in the past.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e2',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Past Simple vs Past Continuous',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'I [was walking] down the street when I met an old friend.',
          options: ['walk', 'walked', 'was walking', 'have worked'],
          correctAnswer: 'was walking',
          explanation: 'We use the past continuous for an action in progress when another action (past simple) interrupted it.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e3',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Memory Vocabulary',
      instructions: 'Match the phrases.',
      pairs: [
        { id: '1', word: 'Unforgettable', correctMatch: 'Impossible to forget' },
        { id: '2', word: 'Vivid memory', correctMatch: 'A very clear and detailed memory' },
        { id: '3', word: 'Childhood', correctMatch: 'The period of time when you are a child' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e4',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Used to',
      instructions: 'Fill in the blank.',
      questions: [
        {
          id: 'q1',
          text: 'I [used] to play the piano when I was younger.',
          correctAnswer: 'used',
          explanation: '"Used to" describes past habits or states that no longer exist.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e5',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Past Habits',
      instructions: 'Order the words.',
      words: ['We', 'used', 'to', 'go', 'to', 'the', 'beach', 'every', 'summer'],
      correctOrder: ['We', 'used', 'to', 'go', 'to', 'the', 'beach', 'every', 'summer'],
      translation: 'Solíamos ir a la playa todos los veranos.',
      points: 2
    } as any
  },
  {
    id: 'b1-u2-e6',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Emotions',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'The trip was [overwhelming] but exciting.',
          options: ['overwhelming', 'boring', 'cheap', 'slow'],
          correctAnswer: 'overwhelming',
          explanation: 'Overwhelming means very great in amount or intensity.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e7',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Past Simple',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          text: 'I [visited] my grandparents last weekend.',
          correctAnswer: 'visited',
          explanation: 'We use the past simple for completed actions in the past.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e8',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Events',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'A party to celebrate a marriage is a...',
          options: ['wedding', 'funeral', 'meeting', 'lecture'],
          correctAnswer: 'wedding',
          explanation: 'A wedding is the ceremony and celebration of a marriage.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e9',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Share a Memory',
      instructions: 'Describe a special memory.',
      questions: [
        {
          id: 'q1',
          prompt: 'Tell me about an unforgettable experience from your childhood.',
          expectedPhrases: ['I remember when', 'It was', 'I used to', 'because'],
          sampleAnswer: 'I remember when I first learned to ride a bike. It was unforgettable because my father helped me.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e10',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Milestones',
      instructions: 'Fill in the blank.',
      questions: [
        {
          id: 'q1',
          text: 'Graduating from college is a major [milestone].',
          correctAnswer: 'milestone',
          explanation: 'A milestone is a significant stage or event in the development of something.'
        }
      ]
    } as any
  },
  ...generateReviewExercises(2, 'Experiences & Memories')
];
