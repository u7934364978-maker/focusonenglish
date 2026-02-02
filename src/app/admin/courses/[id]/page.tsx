'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase-client';
import { Plus, Edit2, Trash2, ArrowLeft, BookOpen, Clock, ListChecks } from 'lucide-react';
import Link from 'next/link';

interface Lesson {
  id: string;
  title: string;
  description: string;
  order_index: number;
  duration: number;
}

export default function ModuleManagerPage() {
  const { id } = useParams();
  const router = useRouter();
  const [module, setModule] = useState<any>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchModuleData();
    }
  }, [id]);

  async function fetchModuleData() {
    try {
      setLoading(true);
      // Fetch module info
      const { data: modData, error: modError } = await supabase
        .from('course_modules')
        .select('*')
        .eq('id', id)
        .single();

      if (modError) throw modError;
      setModule(modData);

      // Fetch lessons
      const { data: lessData, error: lessError } = await supabase
        .from('course_lessons')
        .select('*')
        .eq('module_id', id)
        .order('order_index', { ascending: true });

      if (lessError) throw lessError;
      setLessons(lessData || []);
    } catch (error) {
      console.error('Error fetching module data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/admin/courses" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-all mb-8 font-bold">
          <ArrowLeft className="w-5 h-5" />
          Volver al Panel
        </Link>

        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                {module?.course_level} • {module?.course_goal}
              </span>
            </div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">{module?.title}</h1>
            <p className="text-gray-600 max-w-xl">{module?.description}</p>
          </div>
          <button className="bg-gray-900 text-white px-6 py-4 rounded-2xl font-black flex items-center gap-2 shadow-lg hover:bg-gray-800 transition-all">
            <Plus className="w-5 h-5" />
            Añadir Lección
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Lecciones de este módulo</h2>
          
          {lessons.map((lesson, index) => (
            <div key={lesson.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-xl font-black text-gray-300 group-hover:text-orange-500 group-hover:bg-orange-50 transition-all">
                {index + 1}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-black text-gray-900 leading-tight">{lesson.title}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{lesson.duration} min</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-400">
                    <ListChecks className="w-4 h-4" />
                    <span>Actividades por definir</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                <Link 
                  href={`/admin/courses/lesson/${lesson.id}`}
                  className="p-3 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all"
                >
                  <Edit2 className="w-5 h-5" />
                </Link>
                <button className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

          {lessons.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-gray-200">
              <BookOpen className="w-12 h-12 text-gray-200 mx-auto mb-4" />
              <p className="text-gray-400 font-bold">No hay lecciones creadas todavía.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
