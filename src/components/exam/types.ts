import type { ExerciseItem } from "../course/exercises/types";

export interface Exam {
  id: string;
  title: string;
  description: string;
  level?: string;
  durationInMinutes: number;
  passingScore: number; // e.g. 70
  sections: ExamSection[];
}

export interface ExamSection {
  id: string;
  title: string;
  instructions: string;
  items: ExerciseItem[];
}

export interface ExamResult {
  examId: string;
  score: number;
  passed: boolean;
  completedAt: number;
  timeSpent: number; // in seconds
  answers: Record<string, any>;
}
