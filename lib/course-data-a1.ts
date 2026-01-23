// Curso A1 Completo - Estructura Basada en CEFR A1 Official
// Replicando la estructura del curso B2 pero adaptado a nivel principiante
// CEFR A1: Usuario Básico - Nivel Breakthrough

// Import detailed exercises
import { A1_M1_L1_ALL_EXERCISES } from './a1-m1-l1-detailed';
import { A1_M1_L2_ALL_EXERCISES } from './a1-m1-l2-detailed';

export type ExerciseType = 
  | 'reading'
  | 'writing'
  | 'listening'
  | 'speaking'
  | 'grammar'
  | 'vocabulary'
  | 'pronunciation'
  | 'pronunciation-practice'
  | 'fill-in-blanks'
  | 'multiple-choice'
  | 'sentence-building'
  | 'matching'
  | 'true-false'
  | 'dialogue-practice';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'short-answer' | 'essay';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  acceptableAnswers?: string[];
  explanation?: string;
  points: number;
}

export interface GrammarExercise {
  id: string;
  type: 'grammar';
  title: string;
  grammarPoint: string;
  explanation: string;
  examples: string[];
  questions: Question[];
}

export interface VocabularyExercise {
  id: string;
  type: 'vocabulary';
  title: string;
  vocabularySet: { word: string; definition: string; example: string }[];
  questions: Question[];
}

export interface ReadingExercise {
  id: string;
  type: 'reading';
  title: string;
  text: string;
  wordCount: number;
  readingTime: number;
  questions: Question[];
  vocabularyHelp?: { word: string; definition: string }[];
}

export interface ListeningExercise {
  id: string;
  type: 'listening';
  audioUrl: string;
  transcript?: string;
  duration: number;
  questions: Question[];
  allowReplay: boolean;
  maxReplays?: number;
}

export interface WritingExercise {
  id: string;
  type: 'writing';
  title: string;
  prompt: string;
  wordLimit: { min: number; max: number };
  timeLimit?: number;
  rubric: {
    criteria: string;
    points: number;
    description: string;
  }[];
  tips: string[];
  exampleResponse?: string;
}

export interface SpeakingExercise {
  id: string;
  type: 'speaking' | 'pronunciation';
  prompt: string;
  targetText?: string;
  timeLimit?: number;
  evaluationCriteria: {
    pronunciation: boolean;
    fluency: boolean;
    grammar: boolean;
    vocabulary: boolean;
  };
  modelAudioUrl?: string;
  hints?: string[];
}

export interface PronunciationPracticeExercise {
  id: string;
  type: 'pronunciation-practice';
  title: string;
  targetSentences: {
    text: string;
    audioUrl: string;
    phonetic: string;
  }[];
  focusPoints: string[];
  tips: string[];
}

export type Exercise = 
  | GrammarExercise
  | VocabularyExercise
  | ReadingExercise
  | ListeningExercise
  | WritingExercise
  | SpeakingExercise
  | PronunciationPracticeExercise
  | { id: string; type: ExerciseType; title: string; [key: string]: any };

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  duration?: number;
  exercises: Exercise[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  grammar: string[];
  vocabulary: string[];
  lessons: Lesson[];
  examPractice?: {
    mockExam: boolean;
    examDuration: number;
    parts: string[];
  };
}

export interface CourseProgress {
  completedLessons: string[];
  currentLesson: string;
  overallProgress: number;
}


// ===============================================
// Módulo 1: Introducción y Presentaciones
// ===============================================

export const MODULE_1_LESSONS: Lesson[] = [
  {
    id: 'a1-m1-l1',
    title: 'Lección 1: Verb To Be - I am, You are',
    description: 'Learn the verb "to be" in present simple with comprehensive exercises',
    duration: 90, // minutes
    exercises: A1_M1_L1_ALL_EXERCISES as Exercise[]
  },
  {
    id: 'a1-m1-l2',
    title: 'Lección 2: Personal Pronouns and Possessives',
    description: 'Practice Personal pronouns with comprehensive exercises',
    duration: 90, // minutes
    exercises: A1_M1_L2_ALL_EXERCISES as Exercise[]
  },
  {
    id: 'a1-m1-l3',
    title: 'Lección 3: Countries and Nationalities',
    description: 'Practice Questions with to be with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m1-l3-grammar-1',
        type: 'grammar',
        title: 'Questions with to be - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-grammar-2',
        type: 'grammar',
        title: 'Questions with to be - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-reading-1',
        type: 'reading',
        title: 'Reading: Lección 3: Countries and Nationalities',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-listening-1',
        type: 'listening',
        title: 'Listening: Lección 3: Countries and Nationalities',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 3: Countries and Nationalities',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-writing-1',
        type: 'writing',
        title: 'Writing: Lección 3: Countries and Nationalities',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Questions with to be',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 3: Countries and Nationalities',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Questions with to be',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Questions with to be',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Questions with to be',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 3: Countries and Nationalities',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l3-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 3: Countries and Nationalities',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m1-l4',
    title: 'Lección 4: Numbers and Dates',
    description: 'Practice Numbers 0-100 with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m1-l4-grammar-1',
        type: 'grammar',
        title: 'Numbers 0-100 - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-grammar-2',
        type: 'grammar',
        title: 'Numbers 0-100 - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-reading-1',
        type: 'reading',
        title: 'Reading: Lección 4: Numbers and Dates',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-listening-1',
        type: 'listening',
        title: 'Listening: Lección 4: Numbers and Dates',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 4: Numbers and Dates',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-writing-1',
        type: 'writing',
        title: 'Writing: Lección 4: Numbers and Dates',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Numbers 0-100',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 4: Numbers and Dates',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Numbers 0-100',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Numbers 0-100',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Numbers 0-100',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 4: Numbers and Dates',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l4-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 4: Numbers and Dates',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m1-l5',
    title: 'Lección 5: Family and Friends',
    description: 'Practice Family vocabulary with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m1-l5-grammar-1',
        type: 'grammar',
        title: 'Family vocabulary - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-grammar-2',
        type: 'grammar',
        title: 'Family vocabulary - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-reading-1',
        type: 'reading',
        title: 'Reading: Lección 5: Family and Friends',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-listening-1',
        type: 'listening',
        title: 'Listening: Lección 5: Family and Friends',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 5: Family and Friends',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-writing-1',
        type: 'writing',
        title: 'Writing: Lección 5: Family and Friends',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Family vocabulary',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 5: Family and Friends',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Family vocabulary',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Family vocabulary',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Family vocabulary',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 5: Family and Friends',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l5-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 5: Family and Friends',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m1-l6',
    title: 'Lección 6: Mock Exam - Module 1',
    description: 'Practice Module 1 Review with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m1-l6-grammar-1',
        type: 'grammar',
        title: 'Module 1 Review - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-grammar-2',
        type: 'grammar',
        title: 'Module 1 Review - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-reading-1',
        type: 'reading',
        title: 'Reading: Lección 6: Mock Exam - Module 1',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-listening-1',
        type: 'listening',
        title: 'Listening: Lección 6: Mock Exam - Module 1',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 6: Mock Exam - Module 1',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-writing-1',
        type: 'writing',
        title: 'Writing: Lección 6: Mock Exam - Module 1',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Module 1 Review',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 6: Mock Exam - Module 1',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Module 1 Review',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Module 1 Review',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Module 1 Review',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 6: Mock Exam - Module 1',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l6-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 6: Mock Exam - Module 1',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m1-l7',
    title: 'Lección 7: Consolidation and Practice',
    description: 'Practice All Module 1 topics with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m1-l7-grammar-1',
        type: 'grammar',
        title: 'All Module 1 topics - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-grammar-2',
        type: 'grammar',
        title: 'All Module 1 topics - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-reading-1',
        type: 'reading',
        title: 'Reading: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-listening-1',
        type: 'listening',
        title: 'Listening: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-writing-1',
        type: 'writing',
        title: 'Writing: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: All Module 1 topics',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - All Module 1 topics',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: All Module 1 topics',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - All Module 1 topics',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m1-l7-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
];


// ===============================================
// Módulo 2: Vida Cotidiana y Rutinas
// ===============================================

export const MODULE_2_LESSONS: Lesson[] = [
  {
    id: 'a1-m2-l1',
    title: 'Lección 1: Daily Routines',
    description: 'Practice Present Simple with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m2-l1-grammar-1',
        type: 'grammar',
        title: 'Present Simple - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-grammar-2',
        type: 'grammar',
        title: 'Present Simple - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-reading-1',
        type: 'reading',
        title: 'Reading: Lección 1: Daily Routines',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-listening-1',
        type: 'listening',
        title: 'Listening: Lección 1: Daily Routines',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 1: Daily Routines',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-writing-1',
        type: 'writing',
        title: 'Writing: Lección 1: Daily Routines',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Present Simple',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 1: Daily Routines',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Present Simple',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Present Simple',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Present Simple',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 1: Daily Routines',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l1-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 1: Daily Routines',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m2-l2',
    title: 'Lección 2: Jobs and Professions',
    description: 'Practice Present Simple questions with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m2-l2-grammar-1',
        type: 'grammar',
        title: 'Present Simple questions - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-grammar-2',
        type: 'grammar',
        title: 'Present Simple questions - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-reading-1',
        type: 'reading',
        title: 'Reading: Lección 2: Jobs and Professions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-listening-1',
        type: 'listening',
        title: 'Listening: Lección 2: Jobs and Professions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 2: Jobs and Professions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-writing-1',
        type: 'writing',
        title: 'Writing: Lección 2: Jobs and Professions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Present Simple questions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 2: Jobs and Professions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Present Simple questions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Present Simple questions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Present Simple questions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 2: Jobs and Professions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l2-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 2: Jobs and Professions',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m2-l3',
    title: 'Lección 3: Time and Schedules',
    description: 'Practice Time expressions with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m2-l3-grammar-1',
        type: 'grammar',
        title: 'Time expressions - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-grammar-2',
        type: 'grammar',
        title: 'Time expressions - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-reading-1',
        type: 'reading',
        title: 'Reading: Lección 3: Time and Schedules',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-listening-1',
        type: 'listening',
        title: 'Listening: Lección 3: Time and Schedules',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 3: Time and Schedules',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-writing-1',
        type: 'writing',
        title: 'Writing: Lección 3: Time and Schedules',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Time expressions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 3: Time and Schedules',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Time expressions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Time expressions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Time expressions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 3: Time and Schedules',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l3-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 3: Time and Schedules',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m2-l4',
    title: 'Lección 4: Free Time Activities',
    description: 'Practice Frequency adverbs with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m2-l4-grammar-1',
        type: 'grammar',
        title: 'Frequency adverbs - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-grammar-2',
        type: 'grammar',
        title: 'Frequency adverbs - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-reading-1',
        type: 'reading',
        title: 'Reading: Lección 4: Free Time Activities',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-listening-1',
        type: 'listening',
        title: 'Listening: Lección 4: Free Time Activities',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 4: Free Time Activities',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-writing-1',
        type: 'writing',
        title: 'Writing: Lección 4: Free Time Activities',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Frequency adverbs',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 4: Free Time Activities',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Frequency adverbs',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Frequency adverbs',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Frequency adverbs',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 4: Free Time Activities',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l4-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 4: Free Time Activities',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m2-l5',
    title: 'Lección 5: Can and Cannot for Ability',
    description: 'Practice Can/Cannot with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m2-l5-grammar-1',
        type: 'grammar',
        title: 'Can/Cannot - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-grammar-2',
        type: 'grammar',
        title: 'Can/Cannot - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-reading-1',
        type: 'reading',
        title: 'Reading: Lección 5: Can and Cannot for Ability',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-listening-1',
        type: 'listening',
        title: 'Listening: Lección 5: Can and Cannot for Ability',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 5: Can and Cannot for Ability',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-writing-1',
        type: 'writing',
        title: 'Writing: Lección 5: Can and Cannot for Ability',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Can/Cannot',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 5: Can and Cannot for Ability',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Can/Cannot',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Can/Cannot',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Can/Cannot',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 5: Can and Cannot for Ability',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l5-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 5: Can and Cannot for Ability',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m2-l6',
    title: 'Lección 6: Mock Exam - Module 2',
    description: 'Practice Module 2 Review with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m2-l6-grammar-1',
        type: 'grammar',
        title: 'Module 2 Review - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-grammar-2',
        type: 'grammar',
        title: 'Module 2 Review - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-reading-1',
        type: 'reading',
        title: 'Reading: Lección 6: Mock Exam - Module 2',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-listening-1',
        type: 'listening',
        title: 'Listening: Lección 6: Mock Exam - Module 2',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 6: Mock Exam - Module 2',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-writing-1',
        type: 'writing',
        title: 'Writing: Lección 6: Mock Exam - Module 2',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Module 2 Review',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 6: Mock Exam - Module 2',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Module 2 Review',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Module 2 Review',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Module 2 Review',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 6: Mock Exam - Module 2',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l6-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 6: Mock Exam - Module 2',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m2-l7',
    title: 'Lección 7: Consolidation and Practice',
    description: 'Practice All Module 2 topics with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m2-l7-grammar-1',
        type: 'grammar',
        title: 'All Module 2 topics - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-grammar-2',
        type: 'grammar',
        title: 'All Module 2 topics - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-reading-1',
        type: 'reading',
        title: 'Reading: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-listening-1',
        type: 'listening',
        title: 'Listening: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-writing-1',
        type: 'writing',
        title: 'Writing: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: All Module 2 topics',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - All Module 2 topics',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: All Module 2 topics',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - All Module 2 topics',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m2-l7-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
];


// ===============================================
// Módulo 3: Compras, Comida y Lugares
// ===============================================

export const MODULE_3_LESSONS: Lesson[] = [
  {
    id: 'a1-m3-l1',
    title: 'Lección 1: Food and Drinks',
    description: 'Practice Countable/Uncountable with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m3-l1-grammar-1',
        type: 'grammar',
        title: 'Countable/Uncountable - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-grammar-2',
        type: 'grammar',
        title: 'Countable/Uncountable - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-reading-1',
        type: 'reading',
        title: 'Reading: Lección 1: Food and Drinks',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-listening-1',
        type: 'listening',
        title: 'Listening: Lección 1: Food and Drinks',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 1: Food and Drinks',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-writing-1',
        type: 'writing',
        title: 'Writing: Lección 1: Food and Drinks',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Countable/Uncountable',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 1: Food and Drinks',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Countable/Uncountable',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Countable/Uncountable',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Countable/Uncountable',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 1: Food and Drinks',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l1-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 1: Food and Drinks',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m3-l2',
    title: 'Lección 2: Shopping and Stores',
    description: 'Practice Some/Any with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m3-l2-grammar-1',
        type: 'grammar',
        title: 'Some/Any - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-grammar-2',
        type: 'grammar',
        title: 'Some/Any - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-reading-1',
        type: 'reading',
        title: 'Reading: Lección 2: Shopping and Stores',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-listening-1',
        type: 'listening',
        title: 'Listening: Lección 2: Shopping and Stores',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 2: Shopping and Stores',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-writing-1',
        type: 'writing',
        title: 'Writing: Lección 2: Shopping and Stores',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Some/Any',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 2: Shopping and Stores',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Some/Any',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Some/Any',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Some/Any',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 2: Shopping and Stores',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l2-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 2: Shopping and Stores',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m3-l3',
    title: 'Lección 3: At the Restaurant',
    description: 'Practice Would like with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m3-l3-grammar-1',
        type: 'grammar',
        title: 'Would like - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-grammar-2',
        type: 'grammar',
        title: 'Would like - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-reading-1',
        type: 'reading',
        title: 'Reading: Lección 3: At the Restaurant',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-listening-1',
        type: 'listening',
        title: 'Listening: Lección 3: At the Restaurant',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 3: At the Restaurant',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-writing-1',
        type: 'writing',
        title: 'Writing: Lección 3: At the Restaurant',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Would like',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 3: At the Restaurant',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Would like',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Would like',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Would like',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 3: At the Restaurant',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l3-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 3: At the Restaurant',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m3-l4',
    title: 'Lección 4: Giving Directions',
    description: 'Practice Prepositions of place with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m3-l4-grammar-1',
        type: 'grammar',
        title: 'Prepositions of place - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-grammar-2',
        type: 'grammar',
        title: 'Prepositions of place - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-reading-1',
        type: 'reading',
        title: 'Reading: Lección 4: Giving Directions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-listening-1',
        type: 'listening',
        title: 'Listening: Lección 4: Giving Directions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 4: Giving Directions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-writing-1',
        type: 'writing',
        title: 'Writing: Lección 4: Giving Directions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Prepositions of place',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 4: Giving Directions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Prepositions of place',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Prepositions of place',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Prepositions of place',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 4: Giving Directions',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l4-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 4: Giving Directions',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m3-l5',
    title: 'Lección 5: Present Continuous',
    description: 'Practice Present Continuous with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m3-l5-grammar-1',
        type: 'grammar',
        title: 'Present Continuous - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-grammar-2',
        type: 'grammar',
        title: 'Present Continuous - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-reading-1',
        type: 'reading',
        title: 'Reading: Lección 5: Present Continuous',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-listening-1',
        type: 'listening',
        title: 'Listening: Lección 5: Present Continuous',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 5: Present Continuous',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-writing-1',
        type: 'writing',
        title: 'Writing: Lección 5: Present Continuous',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Present Continuous',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 5: Present Continuous',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Present Continuous',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Present Continuous',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Present Continuous',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 5: Present Continuous',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l5-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 5: Present Continuous',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m3-l6',
    title: 'Lección 6: Mock Exam - Module 3',
    description: 'Practice Module 3 Review with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m3-l6-grammar-1',
        type: 'grammar',
        title: 'Module 3 Review - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-grammar-2',
        type: 'grammar',
        title: 'Module 3 Review - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-reading-1',
        type: 'reading',
        title: 'Reading: Lección 6: Mock Exam - Module 3',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-listening-1',
        type: 'listening',
        title: 'Listening: Lección 6: Mock Exam - Module 3',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 6: Mock Exam - Module 3',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-writing-1',
        type: 'writing',
        title: 'Writing: Lección 6: Mock Exam - Module 3',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Module 3 Review',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 6: Mock Exam - Module 3',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - Module 3 Review',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: Module 3 Review',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - Module 3 Review',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 6: Mock Exam - Module 3',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l6-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 6: Mock Exam - Module 3',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
  {
    id: 'a1-m3-l7',
    title: 'Lección 7: Consolidation and Practice',
    description: 'Practice All Module 3 topics with comprehensive exercises',
    duration: 90, // minutes
    exercises: [
      {
        id: 'a1-m3-l7-grammar-1',
        type: 'grammar',
        title: 'All Module 3 topics - Formation and Use',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-grammar-2',
        type: 'grammar',
        title: 'All Module 3 topics - Practice Exercises',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-reading-1',
        type: 'reading',
        title: 'Reading: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-listening-1',
        type: 'listening',
        title: 'Listening: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-speaking-1',
        type: 'speaking',
        title: 'Speaking Practice: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-writing-1',
        type: 'writing',
        title: 'Writing: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-pronunciation-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: All Module 3 topics',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-vocabulary-2',
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-fill-blanks-1',
        type: 'fill-in-blanks',
        title: 'Complete the Sentences - All Module 3 topics',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-multiple-choice-1',
        type: 'multiple-choice',
        title: 'Multiple Choice: All Module 3 topics',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-matching-1',
        type: 'matching',
        title: 'Match Words and Meanings',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-sentence-building-1',
        type: 'sentence-building',
        title: 'Build Sentences - All Module 3 topics',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-true-false-1',
        type: 'true-false',
        title: 'True or False: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
      {
        id: 'a1-m3-l7-dialogue-1',
        type: 'dialogue-practice',
        title: 'Dialogue Practice: Lección 7: Consolidation and Practice',
        // Content will be added in future updates
      } as Exercise,
    ]
  },
];


// ===============================================
// ALL MODULES EXPORT
// ===============================================

export const ALL_MODULES: Module[] = [
  {
    id: 'a1-module-1',
    number: 1,
    title: 'Módulo 1: Introducción y Presentaciones',
    description: 'Aprende a presentarte, hablar sobre ti mismo y tu familia en situaciones cotidianas básicas',
    duration: '4-5 semanas',
    topics: ['Saludos y despedidas', 'Información personal básica', 'Familia y amigos', 'Números y fechas', 'Países y nacionalidades'],
    grammar: ['Verb to be (am/is/are)', 'Personal pronouns (I, you, he, she, it, we, they)', 'Possessive adjectives (my, your, his, her, our, their)', 'Present Simple - positive', 'Questions with to be', 'Articles (a/an/the)'],
    vocabulary: ['Saludos básicos', 'Países y nacionalidades', 'Números 0-100', 'Días de la semana', 'Meses del año', 'Familia (mother, father, brother, sister)'],
    lessons: MODULE_1_LESSONS,
    examPractice: {
      mockExam: true,
      examDuration: 60,
      parts: ['Reading & Writing', 'Listening', 'Speaking']
    }
  },
  {
    id: 'a1-module-2',
    number: 2,
    title: 'Módulo 2: Vida Cotidiana y Rutinas',
    description: 'Descubre cómo hablar sobre tu rutina diaria, trabajo y actividades cotidianas',
    duration: '4-5 semanas',
    topics: ['Rutinas diarias', 'Trabajo y profesiones', 'Tiempo y horarios', 'Actividades de tiempo libre', 'Casa y habitaciones'],
    grammar: ['Present Simple - negative and questions', 'Frequency adverbs (always, usually, sometimes, never)', 'Prepositions of time (in, on, at)', 'Time expressions', "Can/can't for ability", 'Object pronouns'],
    vocabulary: ['Profesiones básicas', 'Verbos de rutina diaria', 'Expresiones de tiempo', 'Habitaciones de la casa', 'Muebles básicos', 'Actividades de ocio'],
    lessons: MODULE_2_LESSONS,
    examPractice: {
      mockExam: true,
      examDuration: 60,
      parts: ['Reading & Writing', 'Listening', 'Speaking']
    }
  },
  {
    id: 'a1-module-3',
    number: 3,
    title: 'Módulo 3: Compras, Comida y Lugares',
    description: 'Aprende a comprar, pedir comida y moverte por la ciudad en inglés',
    duration: '4-5 semanas',
    topics: ['Comida y bebidas', 'Compras y tiendas', 'Restaurantes y cafés', 'Direcciones y lugares', 'Transporte público'],
    grammar: ['There is/There are', 'Some/any/no', 'Countable and uncountable nouns', 'How much/How many', 'Prepositions of place (in, on, under, next to)', 'Imperatives (turn left, go straight)', 'Present Continuous'],
    vocabulary: ['Alimentos y bebidas', 'Tiendas y comercios', 'Expresiones en restaurantes', 'Direcciones básicas', 'Medios de transporte', 'Colores y adjetivos descriptivos'],
    lessons: MODULE_3_LESSONS,
    examPractice: {
      mockExam: true,
      examDuration: 60,
      parts: ['Reading & Writing', 'Listening', 'Speaking']
    }
  },
];

// ===============================================
// COURSE CONFIGURATION
// ===============================================

export const A1_FULL_COURSE = {
  id: 'a1-beginner-complete',
  title: 'A1 Beginner English Course - Complete Program',
  level: 'A1',
  description: 'Curso completo de inglés para principiantes nivel A1 (CEFR) con ejercicios interactivos, grabación de voz, evaluación de pronunciación y práctica exhaustiva de las 4 habilidades básicas',
  duration: '12-15 semanas',
  totalModules: 3,
  totalLessons: 21,
  cefrLevel: 'A1',
  cefrDescription: 'Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type. Can introduce themselves and others and can ask and answer questions about personal details such as where they live, people they know and things they have.',
  skills: ['Reading', 'Writing', 'Listening', 'Speaking'],
  features: [
    'Interactive exercises with instant feedback',
    'Voice recording for speaking practice',
    'Pronunciation evaluation with AI',
    'Authentic listening materials',
    'Guided writing practice',
    'Grammar explanations and practice',
    'Essential vocabulary building',
    'Mock exams for each module',
    'Progress tracking',
    'Mobile-friendly design'
  ],
  targetAudience: 'Complete beginners or false beginners who want to build a solid foundation in English',
  learningOutcomes: [
    'Introduce yourself and greet others',
    'Talk about your family, work, and daily routines',
    'Ask and answer simple questions',
    'Understand basic instructions and information',
    'Write simple sentences and short texts',
    'Order food and ask for directions',
    'Understand basic signs and notices'
  ]
};

const TOTAL_LESSONS = MODULE_1_LESSONS.length + MODULE_2_LESSONS.length + MODULE_3_LESSONS.length;

console.log(`✅ A1 Course Data loaded successfully`);
console.log(`📚 Total Modules: ${ALL_MODULES.length}`);
console.log(`📖 Total Lessons: ${TOTAL_LESSONS}`);
console.log(`🎯 CEFR Level: A1 - Beginner`);
