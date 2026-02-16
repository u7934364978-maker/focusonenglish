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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUnit() {
      console.log(`🔍 Loading unit: ${unitId}`);
      try {
        const unitNumber = unitId.replace('unit-', '');
        const modulePath = `../../../../lib/course/a1/unit-${unitNumber}`;
        console.log(`📂 Importing module from: ${modulePath}`);
        
        const module = await import(`../../../../lib/course/a1/unit-${unitNumber}`);
        // Support both UNIT_1_EXERCISES and UNIT_unit-1_EXERCISES or similar
        const exportName = `UNIT_${unitNumber.toUpperCase().replace('-', '_')}_EXERCISES`;
        console.log(`Searching for export: ${exportName}`);
        
        const unitExercises = module[exportName] || module[`UNIT_${unitNumber}_EXERCISES`] || module.default;
        
        if (!unitExercises || !Array.isArray(unitExercises)) {
          console.error(`❌ Could not find exercises in module. Export name: ${exportName}`);
          setError(`No se encontraron ejercicios en el módulo unit-${unitNumber}`);
          setExercises([]);
        } else {
          console.log(`✅ Loaded ${unitExercises.length} exercises for unit ${unitNumber}`);
          setExercises(unitExercises);
          
          // Handle index from query param
          const indexParam = searchParams.get('index');
          if (indexParam) {
            const idx = parseInt(indexParam);
            if (!isNaN(idx) && idx >= 0 && idx < unitExercises.length) {
              setCurrentIndex(idx);
            }
          }
        }
      } catch (err: any) {
        console.error('❌ Error loading unit:', err);
        setError(`Error al cargar la unidad: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }
    loadUnit();
  }, [unitId, searchParams]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral-500 mx-auto mb-4"></div>
        <p className="text-slate-600 font-medium">Cargando Unidad {unitId}...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl text-center">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Home className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-slate-800 mb-2">Error de Carga</h2>
        <p className="text-slate-600 mb-6">{error}</p>
        <Link 
          href="/"
          className="inline-block bg-slate-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-all"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );

  if (exercises.length === 0) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <p className="text-red-500 font-bold text-xl mb-4">No se encontraron ejercicios</p>
        <Link href="/" className="text-coral-500 underline">Volver al inicio</Link>
      </div>
    </div>
  );

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
