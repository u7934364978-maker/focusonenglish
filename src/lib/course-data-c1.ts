
export type ExerciseType = 
  | 'reading'
  | 'writing'
  | 'listening'
  | 'speaking'
  | 'grammar'
  | 'vocabulary'
  | 'pronunciation'
  | 'pronunciation-practice'
  | 'key-word-transformation'
  | 'word-formation'
  | 'multiple-choice-cloze'
  | 'open-cloze'
  | 'gapped-text'
  | 'multiple-matching'
  | 'sentence-completion'
  | 'error-identification'
  | 'paraphrasing'
  | 'collocation-matching'
  | 'phrasal-verbs'
  | 'idioms-expressions'
  | 'summary-writing'
  | 'gap-fill-text'
  | 'sentence-reordering';

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

export interface Exercise {
  id: string;
  type: ExerciseType;
  title: string;
  instructions: string;
  difficulty: DifficultyLevel;
  points: number;
  questions: Question[];
  [key: string]: any; // Allow for extra properties like 'text' for reading, etc.
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  module: string;
  duration: string; // e.g., "45 min"
  exercises: Exercise[];
  videoUrl?: string;
  theoryContent?: string;
  objectives?: string[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const C1_MODULE_1_LESSONS: Lesson[] = [
  {
    id: 'c1-m1-l1',
    title: 'Advanced Sentence Structures & Cleft Sentences',
    description: 'Mastering emphasis in advanced English through cleft sentences and fronting.',
    module: 'Module 1',
    duration: '60 min',
    objectives: [
      'Identify different types of cleft sentences',
      'Use fronting for rhetorical emphasis',
      'Apply advanced structures in formal writing'
    ],
    theoryContent: `
# Advanced Sentence Structures: Cleft Sentences

Cleft sentences are used to focus on specific information in a sentence. The word 'cleft' means divided. In a cleft sentence, information which could be given in a single clause is divided into two clauses.

## 1. It-clefts
Structure: **It + is/was + focused part + relative clause**

*   *Normal:* I want a coffee.
*   *Cleft:* **It is** a coffee **that** I want.

## 2. Wh-clefts (Pseudo-clefts)
Structure: **Wh-clause + is/was + focused part**

*   *Normal:* I need a holiday.
*   *Cleft:* **What** I need **is** a holiday.

## 3. Fronting
Fronting involves moving an object or adverbial to the beginning of the sentence for emphasis.

*   *Normal:* I have never seen such a beautiful sunset.
*   *Fronted:* **Never have I seen** such a beautiful sunset (Note the inversion).
    `,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    exercises: [
      {
        id: 'c1-m1-l1-ex1',
        type: 'grammar',
        title: 'Cleft Sentences Practice',
        instructions: 'Rewrite the following sentences as cleft sentences starting with the word in brackets.',
        difficulty: 'hard',
        points: 20,
        questions: [
          {
            id: 'c1-m1-l1-q1',
            type: 'short-answer',
            question: 'I like his honesty the most. (What)',
            correctAnswer: 'What I like the most is his honesty.',
            points: 10
          },
          {
            id: 'c1-m1-l1-q2',
            type: 'short-answer',
            question: 'We need more time to finish the project. (It)',
            correctAnswer: 'It is more time that we need to finish the project.',
            points: 10
          }
        ]
      }
    ]
  }
];

export const C1_FULL_COURSE = {
  id: 'c1-prep',
  title: 'C1 Advanced (CAE) Preparation',
  level: 'C1',
  modules: [
    {
      id: 'c1-m1',
      title: 'Module 1: Advanced Structures and Nuance',
      lessons: C1_MODULE_1_LESSONS
    }
  ]
};

export const ALL_MODULES = C1_FULL_COURSE.modules;
