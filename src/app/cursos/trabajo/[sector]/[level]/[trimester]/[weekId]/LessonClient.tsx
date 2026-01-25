'use client';

import { useRouter } from 'next/navigation';
import LessonViewer from '@/components/course/LessonViewer';
import { Lesson } from '@/lib/exercise-types';

interface LessonClientProps {
  lesson: Lesson;
  sector: string;
  level: string;
}

export default function LessonClient({ lesson, sector, level }: LessonClientProps) {
  const router = useRouter();
  
  const handleLessonComplete = (lessonId: string, score: number) => {
    console.log(`Lesson ${lessonId} completed with score: ${score}`);
    alert(`¡Felicidades! Has completado la lección de ${lesson.title} con una puntuación de ${Math.round(score)}%`);
    router.push(`/cursos/trabajo/${sector}/${level}`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back Button */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button
            onClick={() => router.push(`/cursos/trabajo/${sector}/${level}`)}
            className="flex items-center gap-2 text-coral-600 hover:text-coral-700 font-semibold transition-colors"
          >
            <span>←</span>
            <span>Volver al Curso</span>
          </button>
        </div>
      </div>

      {/* Lesson Content */}
      <LessonViewer lesson={lesson} onComplete={handleLessonComplete} />
    </div>
  );
}
