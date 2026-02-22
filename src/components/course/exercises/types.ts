export type ExerciseBase = {
  id: string;
  type:
    | "multipleChoice"
    | "fillBlanks"
    | "reorder"
    | "errorCorrection"
    | "reading"
    | "listening"
    | "listening_dictation"
    | "matching"
    | "word-search"
    | "crossword"
    | "flashcard"
    | "drag-drop"
    | "grammar"
    | "writingTask";
  track?: "core" | "extension";
};

export type MultipleChoiceExercise = ExerciseBase & {
  type: "multipleChoice" | "grammar";
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
};

export type ReadingQuestion = {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
};

export type ReadingExercise = ExerciseBase & {
  type: "reading";
  title: string;
  text: string;
  vocabularyHelp?: { word: string; definition: string }[];
  questions: ReadingQuestion[];
};

export type ListeningExercise = ExerciseBase & {
  type: "listening";
  title: string;
  audioUrl: string;
  transcript?: string;
  duration: number;
  questions: ReadingQuestion[];
};

export type DictationExercise = ExerciseBase & {
  type: "listening_dictation";
  title: string;
  audioUrl: string;
  transcriptTemplate: string;
  answers: string[];
  duration?: number;
  explanation?: string;
};

export type MatchingPair = {
  id: string;
  word: string;
  correctMatch: string;
  distractors: string[];
};

export type MatchingExercise = ExerciseBase & {
  type: "matching";
  title: string;
  instructions: string;
  pairs: MatchingPair[];
};

export type WordSearchExercise = ExerciseBase & {
  type: "word-search";
  title: string;
  words: string[];
  gridSize?: number;
};

export type CrosswordItem = {
  word: string;
  clue: string;
  direction: "across" | "down";
  row: number;
  col: number;
};

export type CrosswordExercise = ExerciseBase & {
  type: "crossword";
  title: string;
  items: CrosswordItem[];
};

export type FlashcardItem = {
  front: string | { text: string; image?: string; audio?: string; phonetic?: string };
  back: string | { text: string; translation: string; explanation?: string; example?: string };
  pronunciation?: string;
};

export type FlashcardExercise = ExerciseBase & {
  type: "flashcard";
  content: {
    title?: string;
    instructions?: string;
    items: FlashcardItem[];
  };
};

export type DragDropExercise = ExerciseBase & {
  type: "drag-drop";
  content: {
    title?: string;
    instructions?: string;
    sentence?: string;
    correctSentence?: string;
    shuffledWords?: string[];
    translation?: string;
    hint?: string;
  };
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

export type WritingExercise = ExerciseBase & {
  type: "writingTask";
  instructions: string;
  template?: Record<string, string>;
  maxWords?: number;
  aiGradingCriteria?: Record<string, number>;
};

export type ExerciseItem =
  | MultipleChoiceExercise
  | FillBlanksExercise
  | ReorderExercise
  | ErrorCorrectionExercise
  | ReadingExercise
  | ListeningExercise
  | DictationExercise
  | MatchingExercise
  | WordSearchExercise
  | CrosswordExercise
  | FlashcardExercise
  | DragDropExercise
  | WritingExercise;

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
