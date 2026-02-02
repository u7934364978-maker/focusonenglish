'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase-client';
import { Plus, Edit2, Trash2, ChevronRight, BookOpen, Layers, Target } from 'lucide-react';
import Link from 'next/link';

interface Module {
  id: string;
  title: string;
  course_level: string;
  course_goal: string;
  order_index: number;
}

export default function AdminCoursesPage() {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchModules();
  }, []);

  async function fetchModules() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('course_modules')
        .select('*')
        .order('course_level', { ascending: true })
        .order('order_index', { ascending: true });

      if (error) throw error;
      setModules(data || []);
    } catch (error) {
      console.error('Error fetching modules:', error);
    } finally {
      setLoading(false);
    }
  }

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const goals = ['trabajo', 'viajes', 'examenes'];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Panel de Profesor</h1>
            <p className="text-gray-600">Gestiona los cursos, módulos y lecciones de Focus English.</p>
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg hover:bg-orange-600 transition-all">
            <Plus className="w-5 h-5" />
            Nuevo Módulo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map(level => {
            const levelModules = modules.filter(m => m.course_level === level);
            if (levelModules.length === 0) return null;

            return (
              <div key={level} className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                    {level}
                  </span>
                  Nivel {level}
                </h2>
                
                {levelModules.map(module => (
                  <div key={module.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{module.course_goal}</span>
                        <h3 className="text-lg font-black text-gray-900 leading-tight">{module.title}</h3>
                      </div>
                      <div className="flex gap-2">
                        <Link 
                          href={`/admin/courses/${module.id}`}
                          className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all"
                        >
                          <Edit2 className="w-5 h-5" />
                        </Link>
                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Layers className="w-4 h-4" />
                        <span>Módulo {module.order_index + 1}</span>
                      </div>
                    </div>

                    <Link 
                      href={`/admin/courses/${module.id}`}
                      className="mt-6 w-full py-3 bg-gray-50 text-gray-700 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all group"
                    >
                      Gestionar Lecciones
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {loading && (
          <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        )}

        {!loading && modules.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No hay cursos disponibles</h3>
            <p className="text-gray-500 mb-8">Comienza creando tu primer módulo de aprendizaje.</p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-2xl font-bold">
              Crear Módulo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
