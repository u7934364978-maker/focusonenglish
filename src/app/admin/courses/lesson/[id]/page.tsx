'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase-client';
import { Save, Plus, Trash2, ArrowLeft, AlertCircle, CheckCircle2, Code } from 'lucide-react';
import Link from 'next/link';

interface Exercise {
  id: string;
  type: string;
  title: string;
  content: any;
  order_index: number;
}

export default function LessonEditorPage() {
  const { id } = useParams();
  const router = useRouter();
  const [lesson, setLesson] = useState<any>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (id) fetchLessonData();
  }, [id]);

  async function fetchLessonData() {
    try {
      setLoading(true);
      const { data: lessonData, error: lessonError } = await supabase
        .from('course_lessons')
        .select('*')
        .eq('id', id)
        .single();

      if (lessonError) throw lessonError;
      setLesson(lessonData);

      const { data: exData, error: exError } = await supabase
        .from('course_exercises')
        .select('*')
        .eq('lesson_id', id)
        .order('order_index', { ascending: true });

      if (exError) throw exError;
      setExercises(exData || []);
    } catch (error) {
      console.error('Error fetching lesson:', error);
      setError('Error al cargar los datos.');
    } finally {
      setLoading(false);
    }
  }

  const handleUpdateExercise = (index: number, field: string, value: any) => {
    const updated = [...exercises];
    updated[index] = { ...updated[index], [field]: value };
    setExercises(updated);
  };

  const handleUpdateExerciseContent = (index: number, jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);
      const updated = [...exercises];
      updated[index] = { ...updated[index], content: parsed };
      setExercises(updated);
      setError(null);
    } catch (e) {
      setError(`Error de formato JSON en el ejercicio ${index + 1}`);
    }
  };

  const handleAddExercise = () => {
    const newEx: Exercise = {
      id: `${id}-ex-${exercises.length + 1}`,
      lesson_id: id as string,
      type: 'vocabulary',
      title: 'Nuevo Ejercicio',
      content: { title: 'Nuevo Ejercicio', instructions: 'Instrucciones aquí' },
      order_index: exercises.length
    } as any;
    setExercises([...exercises, newEx]);
  };

  const handleRemoveExercise = (index: number) => {
    setExercises(exercises.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setError(null);
      setSuccess(false);

      // 1. Update lesson info
      const { error: lessonError } = await supabase
        .from('course_lessons')
        .update({
          title: lesson.title,
          description: lesson.description,
          duration: lesson.duration
        })
        .eq('id', id);

      if (lessonError) throw lessonError;

      // 2. Synchronize exercises (Delete all and re-insert for simplicity in MVP)
      const { error: deleteError } = await supabase
        .from('course_exercises')
        .delete()
        .eq('lesson_id', id);

      if (deleteError) throw deleteError;

      if (exercises.length > 0) {
        const { error: insertError } = await supabase
          .from('course_exercises')
          .insert(exercises.map((ex, i) => ({
            ...ex,
            lesson_id: id,
            order_index: i
          })));

        if (insertError) throw insertError;
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error: any) {
      console.error('Error saving:', error);
      setError(error.message || 'Error al guardar los cambios.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Cargando editor...</div>;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Editor Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-8 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/admin/courses/${lesson?.module_id}`} className="p-2 hover:bg-gray-100 rounded-xl transition-all">
              <ArrowLeft className="w-5 h-5 text-gray-500" />
            </Link>
            <div>
              <h1 className="text-xl font-black text-gray-900">Editor de Lección</h1>
              <p className="text-sm text-gray-500">{lesson?.id}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {error && (
              <div className="flex items-center gap-2 text-red-500 bg-red-50 px-4 py-2 rounded-xl text-sm font-bold border border-red-100">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}
            {success && (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-xl text-sm font-bold border border-green-100 animate-bounce">
                <CheckCircle2 className="w-4 h-4" />
                Guardado con éxito
              </div>
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-black flex items-center gap-2 shadow-lg hover:bg-orange-600 transition-all disabled:opacity-50"
            >
              {saving ? 'Guardando...' : (
                <>
                  <Save className="w-5 h-5" />
                  Guardar Cambios
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Lesson Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-orange-500" />
              Detalles de Lección
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Título</label>
                <input 
                  type="text" 
                  value={lesson?.title}
                  onChange={(e) => setLesson({...lesson, title: e.target.value})}
                  className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-orange-500 focus:bg-white transition-all outline-none font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Descripción</label>
                <textarea 
                  rows={4}
                  value={lesson?.description}
                  onChange={(e) => setLesson({...lesson, description: e.target.value})}
                  className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-orange-500 focus:bg-white transition-all outline-none text-sm leading-relaxed"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Duración (min)</label>
                <input 
                  type="number" 
                  value={lesson?.duration}
                  onChange={(e) => setLesson({...lesson, duration: parseInt(e.target.value)})}
                  className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-orange-500 focus:bg-white transition-all outline-none font-bold"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Exercises Editor */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-black text-gray-900">Actividades</h2>
            <button
              onClick={handleAddExercise}
              className="bg-gray-900 text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-gray-800 transition-all"
            >
              <Plus className="w-4 h-4" />
              Añadir Actividad
            </button>
          </div>

          <div className="space-y-6">
            {exercises.map((ex, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-black text-sm shadow-sm">
                      {index + 1}
                    </span>
                    <input 
                      type="text"
                      value={ex.title}
                      onChange={(e) => handleUpdateExercise(index, 'title', e.target.value)}
                      className="bg-transparent font-black text-gray-900 border-none outline-none focus:ring-0 w-64"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <select
                      value={ex.type}
                      onChange={(e) => handleUpdateExercise(index, 'type', e.target.value)}
                      className="bg-white border border-gray-200 rounded-xl px-3 py-1 text-sm font-bold outline-none"
                    >
                      <option value="flashcard">Flashcards</option>
                      <option value="drag-drop">Drag & Drop</option>
                      <option value="multiple-choice">Opción Múltiple</option>
                      <option value="fill-blank">Completar Huecos</option>
                      <option value="speaking-analysis">Speaking</option>
                    </select>
                    <button 
                      onClick={() => handleRemoveExercise(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Configuración JSON (Content)</label>
                  <textarea
                    rows={12}
                    defaultValue={JSON.stringify(ex.content, null, 2)}
                    onBlur={(e) => handleUpdateExerciseContent(index, e.target.value)}
                    className="w-full p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-2xl border-none focus:ring-2 focus:ring-orange-500 transition-all outline-none"
                  />
                  <p className="mt-2 text-xs text-gray-400">
                    Asegúrate de que el JSON sea válido y siga la estructura requerida para el tipo: <span className="font-bold text-gray-600">{ex.type}</span>
                  </p>
                </div>
              </div>
            ))}

            {exercises.length === 0 && (
              <div className="bg-white p-12 rounded-3xl border-2 border-dashed border-gray-200 text-center">
                <p className="text-gray-400 font-bold">No hay actividades en esta lección.</p>
                <button onClick={handleAddExercise} className="mt-4 text-orange-500 font-black hover:underline">
                  Añadir la primera actividad
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
