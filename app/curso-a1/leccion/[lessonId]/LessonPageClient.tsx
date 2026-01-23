'use client';

import { useRouter } from 'next/navigation';
import LessonViewer from '@/components/course/LessonViewer';
import { A1_COURSE_MODULES } from '@/lib/course-data-a1-full';

interface LessonPageClientProps {
  lessonId: string;
}

export default function LessonPageClient({ lessonId }: LessonPageClientProps) {
  const router = useRouter();
  
  // Buscar lección en TODOS los módulos
  const lesson = A1_COURSE_MODULES.flatMap(m => m.lessons).find(l => l.id === lessonId);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-green-50 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Lección no encontrada</h1>
          <p className="text-slate-600 mb-6">La lección que buscas no existe.</p>
          <button
            onClick={() => router.push('/curso-a1')}
            className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-bold"
          >
            ← Volver al Curso
          </button>
        </div>
      </div>
    );
  }

  const handleLessonComplete = (lessonId: string, score: number) => {
    // In a real app, this would save to a database
    console.log(`Lesson ${lessonId} completed with score: ${score}`);
    
    // Show completion modal
    alert(`¡Felicidades! Completaste ${lesson.title} con una puntuación de ${Math.round(score)}%`);
    
    // Redirect to course page
    router.push('/curso-a1');
  };

  return (
    <div>
      {/* Back Button */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button
            onClick={() => router.push('/curso-a1')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
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
