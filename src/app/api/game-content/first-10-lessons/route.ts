import { getFirst10LessonsExercises, getFirst10LessonsMeta, FIRST_10_LESSON_NAMES } from '@/lib/course/a1/first-10-lessons';
import { validateExerciseListForApi } from '@/lib/validation/course-exercise-api';
import { NextResponse } from 'next/server';

/**
 * GET /api/game-content/first-10-lessons
 * Devuelve las 10 primeras lecciones en JSON para consumir desde Unity u otra app.
 */
export async function GET() {
  const exercises = getFirst10LessonsExercises();
  const meta = getFirst10LessonsMeta();

  const serializable = exercises.map((ex) => ({
    id: ex.id,
    type: ex.type,
    level: ex.level,
    topic: ex.topic,
    topicName: ex.topicName,
    difficulty: ex.difficulty,
    content: ex.content,
    transcript: ex.transcript,
    audioUrl: ex.audioUrl,
    estimatedTime: ex.estimatedTime,
  }));

  const { exercises: validated, validation } = validateExerciseListForApi(serializable);

  return NextResponse.json({
    meta: {
      lessonCount: meta.lessonCount,
      totalExercises: meta.totalExercises,
      lessonNames: [...FIRST_10_LESSON_NAMES],
      exercisesPerLesson: meta.exercisesPerLesson,
    },
    exercises: validated,
    validation,
  });
}
