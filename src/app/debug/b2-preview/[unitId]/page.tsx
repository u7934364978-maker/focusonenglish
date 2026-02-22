'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import { ArrowLeft, ArrowRight, Home, Bug, CheckCheck, Zap, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase-client';
import { markUnitAsCompleted, markFullB2CourseAsCompleted } from '@/lib/debug/course-utils';
import { B2_COURSE } from '@/lib/course/b2';

export default function B2UnitPreviewPage() {
  const params = useParams();
  const unitId = params.unitId as string; // e.g., "unit-1"
  const [exercises, setExercises] = useState<any[]>([]);
  const [vocabulary, setVocabulary] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [debugLoading, setDebugLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  if (!unitId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Cargando unidad...</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    async function getSession() {
      // Allow mocking user for E2E tests
      if (typeof window !== 'undefined' && (window as any).mockUser) {
        setUserId((window as any).mockUser.id);
        return;
      }
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setUserId(user.id);
    }
    getSession();
  }, []);

  useEffect(() => {
    function loadUnit() {
      try {
        const unitNumber = parseInt(unitId.replace('unit-', ''));
        const unitData = B2_COURSE.units.find(u => u.id === unitNumber);
        
        if (!unitData) {
          setExercises([]);
          setLoading(false);
          return;
        }

        const unitExercises = unitData.exercises;
        setExercises(unitExercises);

        // Extract vocabulary if available (similar to B1 logic)
        const extractedVocab = unitExercises
          .filter((ex: any) => ex.type === 'flashcard')
          .flatMap((ex: any) => 
            ex.content.items?.map((item: any) => ({
              word: item.front,
              definition: item.back
            })) || []
          );
        setVocabulary(extractedVocab);
      } catch (error) {
        console.error('Error loading unit:', error);
      } finally {
        setLoading(false);
      }
    }
    loadUnit();
  }, [unitId]);

  if (loading) return <div className="p-8 text-center">Cargando Unidad {unitId} de B2...</div>;
  if (exercises.length === 0) return <div className="p-8 text-center text-red-500">No se encontraron ejercicios para la {unitId} de B2</div>;

  const currentExercise = exercises[currentIndex];

  const handleCompleteUnit = async () => {
    if (!userId) {
      alert('Debe iniciar sesión primero');
      return;
    }
    setDebugLoading(true);
    const exerciseIds = exercises.map(ex => ex.id);
    const result = await markUnitAsCompleted(userId, 'B2', 'trabajo', 'debug-b2', unitId, exerciseIds);
    setDebugLoading(false);
    alert(result.message);
  };

  const handleCompleteFullCourse = async () => {
    if (!userId) {
      alert('Debe iniciar sesión primero');
      return;
    }
    if (!confirm(`¿Estás seguro de que quieres completar TODAS las ${B2_COURSE.units.length} unidades del curso B2?`)) return;
    
    setDebugLoading(true);
    const result = await markFullB2CourseAsCompleted(userId);
    setDebugLoading(false);
    alert(result.message);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Home className="w-6 h-6 text-slate-600" />
          </Link>
          <h1 className="font-black text-xl text-slate-800 uppercase tracking-tight">
            B2 Preview: Unidad {unitId.replace('unit-', '')} 
            <span className="ml-4 text-slate-400 font-medium text-sm">
              Ejercicio {currentIndex + 1} de {exercises.length}
            </span>
          </h1>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="p-2 bg-slate-100 rounded-xl disabled:opacity-30 hover:bg-slate-200 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setCurrentIndex(prev => Math.min(exercises.length - 1, prev + 1))}
            disabled={currentIndex === exercises.length - 1}
            className="p-2 bg-slate-100 rounded-xl disabled:opacity-30 hover:bg-slate-200 transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-4 py-8 pb-32">
        <div className="mb-8 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
          />
        </div>

        <ExerciseRenderer 
          key={currentExercise.id}
          exercise={currentExercise}
          vocabulary={vocabulary}
          onComplete={() => {
            if (currentIndex < exercises.length - 1) {
              setCurrentIndex(prev => prev + 1);
            }
          }}
        />
      </main>

      {/* Debug Panel */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-6 border border-white/10 z-[100]">
        <div className="flex items-center gap-2 border-r border-white/20 pr-6">
          <Bug className="w-5 h-5 text-orange-400" />
          <span className="font-black text-xs uppercase tracking-widest">Debug Mode</span>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={handleCompleteUnit}
            disabled={debugLoading}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 disabled:opacity-50"
          >
            {debugLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCheck className="w-4 h-4" />}
            Completar Unidad
          </button>
          
          <button
            onClick={handleCompleteFullCourse}
            disabled={debugLoading}
            className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 disabled:opacity-50"
          >
            {debugLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
            Completar Curso B2 ({B2_COURSE.units.length} Unidades)
          </button>
        </div>
      </div>
    </div>
  );
}
