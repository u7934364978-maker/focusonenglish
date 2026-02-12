'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function B1UnitPreviewPage() {
  const params = useParams();
  const unitId = params.unitId as string; // e.g., "1"
  const [exercises, setExercises] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUnit() {
      try {
        const unitNumber = unitId.replace('unit-', '');
        const module = await import(`@/lib/course/b1/unit-${unitNumber}`);
        const unitExercises = module[`UNIT_${unitNumber}_EXERCISES`];
        setExercises(unitExercises);
      } catch (error) {
        console.error('Error loading unit:', error);
      } finally {
        setLoading(false);
      }
    }
    loadUnit();
  }, [unitId]);

  if (loading) return <div className="p-8 text-center">Cargando Unidad {unitId} de B1...</div>;
  if (exercises.length === 0) return <div className="p-8 text-center text-red-500">No se encontraron ejercicios para la {unitId} de B1</div>;

  const currentExercise = exercises[currentIndex];

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Home className="w-6 h-6 text-slate-600" />
          </Link>
          <h1 className="font-black text-xl text-slate-800 uppercase tracking-tight">
            B1 Preview: Unidad {unitId.replace('unit-', '')} 
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

      <main className="max-w-4xl mx-auto p-4 py-8">
        <div className="mb-8 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
          />
        </div>

        <ExerciseRenderer 
          key={currentExercise.id}
          exercise={currentExercise}
          onComplete={() => {
            if (currentIndex < exercises.length - 1) {
              setCurrentIndex(prev => prev + 1);
            }
          }}
        />
      </main>
    </div>
  );
}
