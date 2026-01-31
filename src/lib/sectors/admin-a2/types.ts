import { CurriculumModule } from '../../curriculum-data';

export interface AdminQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching' | 'ordering';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  points: number;
}

export interface AdminExercise {
  id: string;
  type: 'grammar' | 'vocabulary' | 'reading' | 'listening' | 'speaking' | 'simulation' | 'inbox' | 'switchboard' | 'stress-test';
  title: string;
  triggerContext: string; // Contexto situacional (The "Trigger")
  instructions: string;
  content: any; // Específico por tipo de ejercicio
  questions: AdminQuestion[];
  xpReward: number;
}

export interface DetailedAdminWeek {
  weekNumber: number;
  title: string;
  roadmap: {
    learning: string;
    application: string;
  };
  theory: {
    objectives: string[];
    grammar: {
      title: string;
      explanation: string;
      examples: string[];
      miniCheck: AdminQuestion;
    };
    vocabulary: {
      term: string;
      translation: string;
      phonetic: string;
      audioUrl?: string;
      type: 'noun' | 'verb' | 'adjective' | 'expression';
    }[];
    functionalLanguage: {
      phrase: string;
      context: string;
    }[];
    professionalTip: string;
    culturalInsight?: string;
    watchOut?: {
      error: string;
      correction: string;
    }[];
  };
  exercises: AdminExercise[];
}

export interface AdminTrimester {
  trimesterNumber: number;
  title: string;
  weeks: DetailedAdminWeek[];
  finalReviewId?: string;
}
