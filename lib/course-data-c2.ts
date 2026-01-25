
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
  [key: string]: any;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  module: string;
  duration: string;
  exercises: Exercise[];
  videoUrl?: string;
  theoryContent?: string;
  objectives?: string[];
}

export const C2_MODULE_1_LESSONS: Lesson[] = [
  {
    id: 'c2-m1-l1',
    title: 'Linguistic Mastery & Stylistic Variation',
    description: 'Achieving native-like precision through advanced stylistic choices and register control.',
    module: 'Module 1',
    duration: '90 min',
    objectives: [
      'Master subtle nuances in high-register vocabulary',
      'Apply advanced rhetorical devices in professional speech',
      'Analyze and replicate native-speaker stylistic variations'
    ],
    theoryContent: `
# C2 Mastery: Stylistic Variation and Register

At the C2 level, communication is not just about being "correct"—it is about being **precise, nuanced, and stylistically appropriate**.

## 1. Register Control
A hallmark of a C2 speaker is the ability to shift effortlessly between registers.

*   **Frozen:** Legal or biblical language.
*   **Formal:** Academic or business reports.
*   **Consultative:** Professional interactions.
*   **Casual:** Friends and acquaintances.
*   **Intimate:** Very close family or partners.

## 2. Nuance in Vocabulary
Choosing between synonyms like *interesting, fascinating, captivating,* and *engrossing* depends entirely on the intended impact.

## 3. Rhetorical Devices
Using tools like **metaphor, irony, and hyperbole** to convey complex ideas and emotions effectively.
    `,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    exercises: [
      {
        id: 'c2-m1-l1-ex1',
        type: 'vocabulary',
        title: 'Nuance and Precision',
        instructions: 'Choose the most appropriate word for the following formal context.',
        difficulty: 'hard',
        points: 20,
        questions: [
          {
            id: 'c2-m1-l1-q1',
            type: 'multiple-choice',
            question: 'The CEO gave a _______ account of the company\'s financial difficulties.',
            options: ['candid', 'frank', 'open', 'blunt'],
            correctAnswer: 'candid',
            explanation: '"Candid" is the most appropriate for a professional, high-register context when discussing sensitive information.',
            points: 10
          }
        ]
      }
    ]
  }
];

export const C2_FULL_COURSE = {
  id: 'c2-prep',
  title: 'C2 Proficiency (CPE) Preparation',
  level: 'C2',
  modules: [
    {
      id: 'c2-m1',
      title: 'Module 1: Excellence and Precision',
      lessons: C2_MODULE_1_LESSONS
    }
  ]
};

export const ALL_MODULES = C2_FULL_COURSE.modules;
