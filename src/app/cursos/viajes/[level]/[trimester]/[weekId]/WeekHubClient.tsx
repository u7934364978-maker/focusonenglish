'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Video, BookOpen, CheckCircle2 } from 'lucide-react';

interface WeekHubClientProps {
  level: string;
  trimester: string;
  weekId: string;
  weekTitle: string;
  lessons: Array<{ id: string; title: string }>;
}

export default function WeekHubClient({ level, trimester, weekId, weekTitle, lessons }: WeekHubClientProps) {
  const router = useRouter();

  const getIcon = (id: string) => {
    if (id === 'lesson1') return <Video className="w-6 h-6" />;
    if (id === 'lesson2') return <BookOpen className="w-6 h-6" />;
    return <CheckCircle2 className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.push(`/cursos/viajes/${level}`)}
          className="flex items-center gap-2 text-coral-600 hover:text-coral-700 font-bold mb-8 transition-colors"
        >
          ← Volver al Programa
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 p-8 text-white">
            <h1 className="text-3xl font-black mb-2">{weekTitle}</h1>
            <p className="text-slate-400">Selecciona una lección para comenzar</p>
          </div>

          <div className="p-8 space-y-4">
            {lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/cursos/viajes/${level}/${trimester}/${weekId}/${lesson.id}`}
                className="flex items-center gap-6 p-6 rounded-2xl border-2 border-slate-100 hover:border-coral-500 hover:bg-orange-50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-orange-100 text-coral-600 flex items-center justify-center group-hover:bg-coral-600 group-hover:text-white transition-colors">
                  {getIcon(lesson.id)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">{lesson.title}</h3>
                  <p className="text-slate-500 text-sm">Contenido interactivo y ejercicios</p>
                </div>
                <span className="text-slate-300 group-hover:text-coral-600 transition-colors text-2xl">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
