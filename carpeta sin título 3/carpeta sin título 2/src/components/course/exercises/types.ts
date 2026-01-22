export type ExerciseBase = {
  id: string;
  type: "multipleChoice" | "fillBlanks" | "reorder" | "errorCorrection";
};

export type MultipleChoiceExercise = ExerciseBase & {
  type: "multipleChoice";
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
};

export type FillBlanksExercise = ExerciseBase & {
  type: "fillBlanks";
  instructions?: string;
  scenario?: string; // 🆕 Contexto de la situación
  text: string;
  answers: string[];
  choices?: string[][];
  explanation?: string;
  hint?: string; // 🆕 Pista progresiva
  audioUrl?: string; // 🆕 Audio de pronunciación
};

export type ReorderExercise = ExerciseBase & {
  type: "reorder";
  instructions?: string;
  sentences: string[];
  correctOrder: number[];
  explanation?: string;
};

export type ErrorCorrectionExercise = ExerciseBase & {
  type: "errorCorrection";
  instructions?: string;
  text: string;
  errors: Array<{
    error: string;
    correction: string;
    explanation?: string;
  }>;
};

export type ExerciseItem =
  | MultipleChoiceExercise
  | FillBlanksExercise
  | ReorderExercise
  | ErrorCorrectionExercise;

export type ExercisesFile = {
  goal: string;
  level: string;
  weekId: string;
  title?: string;
  items: ExerciseItem[];
};

export type ProgressState = {
  completed: Record<string, boolean>;
  answers: Record<string, {
    attempts: number; // 🆕 Contador de intentos
    correct: boolean;
    lastAttemptAt: number; // 🆕 Para spaced repetition
  }>;
  updatedAt: number;
};
