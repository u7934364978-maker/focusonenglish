import React from 'react';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import { extractUnitMetadata } from '@/lib/utils/course-metadata';
import { UnitOverviewHeader } from '@/components/course/preview/UnitOverviewHeader';
import { PreviewNavBar } from '@/components/course/preview/PreviewNavBar';
import PreviewClient from './PreviewClient';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    unitId: string;
  }>;
}

export default async function A1UnitPreviewPage({ params }: Props) {
  const { unitId } = await params;
  
  const courseMetadata = await premiumCourseServerService.getA1UnitsWithMetadata();
  const currentUnit = courseMetadata.units.find(u => u.unitId === unitId);

<<<<<<< HEAD
function UnitPreviewContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const unitId = params.unitId as string; // e.g., "1"
  const [exercises, setExercises] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showLessonComplete, setShowLessonComplete] = useState(false);
  const [showUnitSummary, setShowUnitSummary] = useState(false);
  const [startTime] = useState(Date.now());

  if (!unitId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral-500 mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Cargando unidad...</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    async function loadUnit() {
      console.log(`🔍 Loading unit: ${unitId}`);
      try {
        const unitNumber = unitId.replace('unit-', '');
        console.log(`📂 Importing module for unit: ${unitNumber}`);
        
        // Try absolute path with @ alias first
        let module;
        try {
          module = await import(`@/lib/course/a1/unit-${unitNumber}`);
          console.log(`✅ Imported module with @ alias`);
        } catch (e) {
          console.log(`⚠️ Failed to import with @ alias, trying relative path`);
          module = await import(`../../../../lib/course/a1/unit-${unitNumber}`);
        }
        
        // Support both UNIT_1_EXERCISES and UNIT_unit-1_EXERCISES or similar
        const exportName = `UNIT_${unitNumber.toUpperCase().replace('-', '_')}_EXERCISES`;
        console.log(`🔍 Searching for export: ${exportName} in module keys:`, Object.keys(module || {}));
        
        const unitExercises = module[exportName] || module[`UNIT_${unitNumber}_EXERCISES`] || module.default || module.UNIT_1_EXERCISES;
        
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
  const lessonNumber = Math.floor(currentIndex / CHUNK_SIZE) + 1;
  const totalLessons = Math.ceil(exercises.length / CHUNK_SIZE);
  const exerciseInLesson = (currentIndex % CHUNK_SIZE) + 1;
  const exercisesInThisLesson = Math.min(CHUNK_SIZE, exercises.length - (lessonNumber - 1) * CHUNK_SIZE);

  if (showUnitSummary) {
    const durationMinutes = Math.round((Date.now() - startTime) / 60000);
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-xl w-full bg-white rounded-[2rem] shadow-2xl p-12 text-center animate-in zoom-in duration-700">
          <div className="w-32 h-32 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <Sparkles className="w-16 h-16" />
            <div className="absolute -top-2 -right-2 bg-coral-500 text-white p-3 rounded-full shadow-lg">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 italic tracking-tight">
            ¡UNIDAD COMPLETADA!
          </h2>
          <p className="text-slate-500 mb-10 text-xl font-medium">
            Has finalizado todos los ejercicios de la Unidad {unitId.replace('unit-', '')}.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-10 text-left">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <p className="text-slate-400 text-sm font-bold uppercase mb-1">Total Ejercicios</p>
              <p className="text-3xl font-black text-slate-800">{exercises.length}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <p className="text-slate-400 text-sm font-bold uppercase mb-1">Tiempo Total</p>
              <p className="text-3xl font-black text-slate-800">{durationMinutes} min</p>
            </div>
          </div>

          <Link 
            href="/"
            className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-95"
          >
            Volver al listado de unidades
          </Link>
        </div>
      </div>
    );
  }

  if (showLessonComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-black text-slate-800 mb-2 italic flex items-center justify-center gap-2">
            <Sparkles className="text-yellow-400" />
            ¡Lección {lessonNumber} Completada!
            <Sparkles className="text-yellow-400" />
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Has completado {exercisesInThisLesson} ejercicios con éxito. ¡Sigue así!
          </p>
          <button 
            onClick={() => {
              if (currentIndex < exercises.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setShowLessonComplete(false);
              }
            }}
            className="w-full bg-coral-500 text-white py-5 rounded-2xl font-black text-xl hover:bg-coral-600 transition-all shadow-xl shadow-coral-100 flex items-center justify-center gap-3 transform hover:scale-105"
          >
            Continuar a la siguiente lección
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
=======
  if (!currentUnit) {
    notFound();
>>>>>>> new-task-ddea
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <PreviewNavBar
        currentUnitId={unitId}
        allUnits={courseMetadata.units}
        baseUrl="/debug/a1-preview"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <UnitOverviewHeader unit={currentUnit} />
        
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Unit Exercises</h2>
          <PreviewClient />
        </div>
      </div>
    </div>
  );
}
