import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_1_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Personal Branding & Identity (1-10) ---
  {
    id: 'b1-u1-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Identity & Lifestyle',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Personal Branding',
          back: 'Marca Personal',
          example: 'Developing a strong personal brand is essential today.',
          pronunciation: '/ˈpɜː.sən.əl ˈbræn.dɪŋ/',
          explanation: 'The practice of marketing people and their careers as brands.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e2',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Identity & Lifestyle',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Present Simple vs Continuous',
      instructions: 'Choose the correct form of the verb.',
      questions: [
        {
          id: 'q1',
          question: 'I [am currently working] on a new project.',
          options: ['work', 'am currently working', 'worked', 'have worked'],
          correctAnswer: 'am currently working',
          explanation: 'We use the present continuous for actions happening around the current time.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e3',
    type: 'matching',
    level: 'B1',
    topic: 'Identity & Lifestyle',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Identity Vocabulary',
      instructions: 'Match the words with their definitions.',
      pairs: [
        { id: '1', word: 'Authentic', correctMatch: 'Genuine and true to oneself' },
        { id: '2', word: 'Role model', correctMatch: 'A person looked to by others as an example' },
        { id: '3', word: 'Values', correctMatch: 'Principles or standards of behavior' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e4',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Identity & Lifestyle',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'State Verbs',
      instructions: 'Fill in the blank with the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'I [believe] that honesty is the best policy.',
          correctAnswer: 'believe',
          explanation: 'State verbs like "believe" are usually not used in the continuous form.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e5',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Identity & Lifestyle',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Sentence Order',
      instructions: 'Order the words to form a correct sentence.',
      words: ['is', 'Identity', 'about', 'how', 'we', 'see', 'ourselves'],
      correctOrder: ['Identity', 'is', 'about', 'how', 'we', 'see', 'ourselves'],
      translation: 'La identidad trata sobre cómo nos vemos a nosotros mismos.',
      points: 2
    } as any
  },
  {
    id: 'b1-u1-e6',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Identity & Lifestyle',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Personality Traits',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'Someone who is willing to take risks is...',
          options: ['adventurous', 'cautious', 'shy', 'lazy'],
          correctAnswer: 'adventurous',
          explanation: 'Adventurous people enjoy new and exciting experiences.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e7',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Identity & Lifestyle',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Present Continuous for Trends',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          text: 'More people [are] starting their own businesses these days.',
          correctAnswer: 'are',
          explanation: 'We use the present continuous to describe changing situations.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e8',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Identity & Lifestyle',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Values',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'Treating everyone the same is...',
          options: ['fairness', 'greed', 'selfishness', 'anger'],
          correctAnswer: 'fairness',
          explanation: 'Fairness is the quality of treating people equally.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e9',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Identity & Lifestyle',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Introduce Yourself',
      instructions: 'Introduce yourself in a professional way.',
      questions: [
        {
          id: 'q1',
          prompt: 'How would you describe yourself in a job interview?',
          expectedPhrases: ['I am a', 'professional', 'I have experience in', 'I am passionate about'],
          sampleAnswer: 'I am a dedicated professional with five years of experience in marketing.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e10',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Identity & Lifestyle',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Self-image',
      instructions: 'Fill in the blank.',
      questions: [
        {
          id: 'q1',
          text: 'She has a very high [self-esteem].',
          correctAnswer: 'self-esteem',
          explanation: 'Self-esteem is confidence in one’s own worth or abilities.'
        }
      ]
    } as any
  },
  ...generateReviewExercises(1, 'Identity & Lifestyle')
];
