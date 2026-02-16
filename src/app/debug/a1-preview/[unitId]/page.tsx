'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';

function UnitPreviewContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const unitId = params.unitId as string; // e.g., "1"
  const [exercises, setExercises] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUnit() {
      try {
        const unitNumber = unitId.replace('unit-', '');
        const module = await import(`../../../../lib/course/a1/unit-${unitNumber}`);
        // Support both UNIT_1_EXERCISES and UNIT_unit-1_EXERCISES or similar
        const exportName = `UNIT_${unitNumber.toUpperCase().replace('-', '_')}_EXERCISES`;
        const unitExercises = module[exportName] || module[`UNIT_${unitNumber}_EXERCISES`];
        
        if (!unitExercises) {
          console.error(`Could not find exercises in module with export name ${exportName}`);
          setExercises([]);
        } else {
          setExercises(unitExercises);
        }
        
        // Handle index from query param
        const indexParam = searchParams.get('index');
        if (indexParam) {
          const idx = parseInt(indexParam);
          if (!isNaN(idx) && idx >= 0 && idx < unitExercises.length) {
            setCurrentIndex(idx);
          }
        }
      } catch (error) {
        console.error('Error loading unit:', error);
      } finally {
        setLoading(false);
      }
    }
    loadUnit();
  }, [unitId, searchParams]);

  if (loading) return <div className="p-8 text-center">Cargando Unidad {unitId}...</div>;
  if (exercises.length === 0) return <div className="p-8 text-center text-red-500">No se encontraron ejercicios para la {unitId}</div>;

  const currentExercise = exercises[currentIndex];

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Home className="w-6 h-6 text-slate-600" />
          </Link>
          <h1 className="font-black text-xl text-slate-800 uppercase tracking-tight">
            Review: Unidad {unitId.replace('unit-', '')} 
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
            className="h-full bg-coral-500 transition-all duration-500 ease-out"
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

export default function UnitPreviewPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Cargando vista previa...</div>}>
      <UnitPreviewContent />
    </Suspense>
  );
}
