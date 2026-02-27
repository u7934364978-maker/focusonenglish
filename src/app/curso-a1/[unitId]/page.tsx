'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef, Suspense } from 'react';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import RepairModeBanner from '@/components/course/RepairModeBanner';
import StreakBurst from '@/components/gamification/StreakBurst';
import { X, Heart, Zap } from 'lucide-react';
import Link from 'next/link';

const CHUNK_SIZE = 15;
const STREAK_THRESHOLDS = [3, 5, 10];

type FeedbackState = 'idle' | 'correct' | 'incorrect';

function UnitPreviewContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const unitId = params.unitId as string;

  const [exercises, setExercises] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [startTime] = useState(Date.now());

  // Duolingo-style state
  const [feedback, setFeedback] = useState<FeedbackState>('idle');
  const [slideDir, setSlideDir] = useState<'in' | 'out-left' | 'out-right'>('in');
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [xpGained, setXpGained] = useState(0);
  const [showXpPop, setShowXpPop] = useState(false);

  // Gamification
  const [failCount, setFailCount] = useState(0);
  const [failedIndexes, setFailedIndexes] = useState<number[]>([]);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [streakBurstCount, setStreakBurstCount] = useState<number | null>(null);

  // Completion
  const [showUnitSummary, setShowUnitSummary] = useState(false);
  const [showLessonComplete, setShowLessonComplete] = useState(false);

  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!unitId) return;
    async function loadUnit() {
      try {
        const unitNumber = unitId.replace('unit-', '');
        let unitModule;
        try {
          unitModule = await import(`@/lib/course/a1/unit-${unitNumber}`);
        } catch {
          unitModule = await import(`../../../lib/course/a1/unit-${unitNumber}`);
        }
        const exportName = `UNIT_${unitNumber.toUpperCase().replace('-', '_')}_EXERCISES`;
        const unitExercises = unitModule[exportName] || unitModule[`UNIT_${unitNumber}_EXERCISES`] || unitModule.default || unitModule.UNIT_1_EXERCISES;
        if (!unitExercises || !Array.isArray(unitExercises)) {
          setError(`No se encontraron ejercicios`);
        } else {
          setExercises(unitExercises);
          const indexParam = searchParams.get('index');
          if (indexParam) {
            const idx = parseInt(indexParam);
            if (!isNaN(idx) && idx >= 0 && idx < unitExercises.length) setCurrentIndex(idx);
          }
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadUnit();
    return () => { if (advanceTimer.current) clearTimeout(advanceTimer.current); };
  }, [unitId, searchParams]);

  const advanceExercise = (idx: number, total: number) => {
    setSlideDir('out-left');
    setTimeout(() => {
      if (idx === total - 1) {
        setShowUnitSummary(true);
      } else if ((idx + 1) % CHUNK_SIZE === 0) {
        setShowLessonComplete(true);
      } else {
        setCurrentIndex(prev => prev + 1);
      }
      setFeedback('idle');
      setSlideDir('in');
    }, 350);
  };

  const handleExerciseComplete = (result?: { success: boolean; score: number }) => {
    const success = result?.success ?? true;
    const pts = result?.score ?? 100;

    if (success) {
      const newConsecutive = consecutiveCorrect + 1;
      setConsecutiveCorrect(newConsecutive);
      setFailCount(0);
      setScore(prev => prev + pts);

      const xp = newConsecutive >= 3 ? 20 : 10;
      setXpGained(xp);
      setShowXpPop(true);
      setTimeout(() => setShowXpPop(false), 1200);

      setFeedback('correct');

      if (STREAK_THRESHOLDS.includes(newConsecutive)) {
        setStreakBurstCount(newConsecutive);
        return;
      }

      advanceTimer.current = setTimeout(() => {
        advanceExercise(currentIndex, exercises.length);
      }, 1200);
    } else {
      setConsecutiveCorrect(0);
      setFailCount(prev => prev + 1);
      setFailedIndexes(prev => [...prev, currentIndex]);
      if (lives > 1) setLives(prev => prev - 1);
      setFeedback('incorrect');

      advanceTimer.current = setTimeout(() => {
        advanceExercise(currentIndex, exercises.length);
      }, 1800);
    }
  };

  if (!unitId || loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 rounded-full border-4 border-[#FF6B6B] border-t-transparent animate-spin mx-auto" />
        <p className="text-slate-500 font-bold">Cargando unidad...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-sm w-full bg-white rounded-3xl shadow-2xl p-10 text-center">
        <p className="text-4xl mb-4">😕</p>
        <h2 className="text-2xl font-black text-slate-800 mb-2">Algo salió mal</h2>
        <p className="text-slate-500 mb-6">{error}</p>
        <Link href="/curso-a1" className="block w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-center">
          Volver al Curso
        </Link>
      </div>
    </div>
  );

  if (exercises.length === 0) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500 font-bold">No hay ejercicios disponibles.</p>
    </div>
  );

  const lessonNumber = Math.floor(currentIndex / CHUNK_SIZE) + 1;
  const totalLessons = Math.ceil(exercises.length / CHUNK_SIZE);
  const exerciseInLesson = (currentIndex % CHUNK_SIZE) + 1;
  const exercisesInThisLesson = Math.min(CHUNK_SIZE, exercises.length - (lessonNumber - 1) * CHUNK_SIZE);
  const progressPct = (exerciseInLesson - 1) / exercisesInThisLesson * 100;
  const isRepairMode = failCount >= 2 && failedIndexes.length > 0;
  const repairRemaining = failedIndexes.filter(i => i >= currentIndex).length;

  // — Unit complete —
  if (showUnitSummary) {
    const mins = Math.round((Date.now() - startTime) / 60000);
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="max-w-md w-full text-center space-y-8 animate-in zoom-in-95 duration-500">
          <div className="relative inline-block">
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#ff9a3c] flex items-center justify-center shadow-2xl shadow-orange-200 mx-auto">
              <span className="text-6xl">🏆</span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full px-3 py-1 font-black text-sm shadow">
              +{score} XP
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">¡Increíble!</h2>
            <p className="text-slate-500 mt-2 text-lg font-medium">Unidad {unitId.replace('unit-', '')} completada</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Ejercicios', value: exercises.length, icon: '✅' },
              { label: 'Tiempo', value: `${mins}m`, icon: '⏱️' },
              { label: 'Racha', value: `${consecutiveCorrect}🔥`, icon: '' },
            ].map(stat => (
              <div key={stat.label} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="text-2xl font-black text-slate-900">{stat.icon} {stat.value}</div>
                <div className="text-xs text-slate-400 font-bold uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          <Link
            href="/curso-a1"
            className="block w-full bg-gradient-to-r from-[#FF6B6B] to-[#ff5252] text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-orange-200 hover:-translate-y-0.5 transition-all"
          >
            Siguiente unidad →
          </Link>
        </div>
      </div>
    );
  }

  // — Lesson checkpoint —
  if (showLessonComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="max-w-sm w-full text-center space-y-6 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
            <span className="text-5xl">⚡</span>
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-900">¡Checkpoint!</h2>
            <p className="text-slate-500 mt-1 font-medium">Lección {lessonNumber} de {totalLessons} completada</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="text-green-700 font-black text-lg">+{score} XP ganados</p>
          </div>
          <button
            onClick={() => {
              setCurrentIndex(prev => prev + 1);
              setShowLessonComplete(false);
              setFeedback('idle');
            }}
            className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#ff5252] text-white py-5 rounded-2xl font-black text-xl shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Continuar →
          </button>
        </div>
      </div>
    );
  }

  const currentExercise = exercises[currentIndex];

  return (
    <div className={`min-h-screen flex flex-col bg-white transition-colors duration-300 ${
      feedback === 'correct' ? 'bg-green-50/30' : feedback === 'incorrect' ? 'bg-red-50/30' : 'bg-white'
    }`}>
      {isRepairMode && <RepairModeBanner remainingCount={repairRemaining} />}

      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <Link
            href="/curso-a1"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all flex-shrink-0"
            aria-label="Salir"
          >
            <X className="w-5 h-5" />
          </Link>

          {/* Progress bar */}
          <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ease-out ${
                isRepairMode
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500'
                  : 'bg-gradient-to-r from-[#FF6B6B] to-[#ff9a3c]'
              }`}
              style={{ width: `${Math.max(progressPct, 4)}%` }}
            />
          </div>

          {/* XP + Lives */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="relative flex items-center gap-1">
              <Zap className="w-4 h-4 text-yellow-500 fill-yellow-400" />
              <span className="font-black text-slate-700 text-sm tabular-nums">{score}</span>
              {showXpPop && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-green-600 font-black text-sm animate-in fade-in slide-in-from-bottom-2 duration-300 pointer-events-none whitespace-nowrap">
                  +{xpGained} XP
                </span>
              )}
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <Heart
                  key={i}
                  className={`w-5 h-5 transition-all duration-300 ${
                    i < lives ? 'text-red-500 fill-red-500 scale-100' : 'text-slate-200 fill-slate-200 scale-90'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Exercise counter dots */}
        <div className="max-w-2xl mx-auto mt-2 flex items-center justify-center gap-1.5">
          {Array.from({ length: exercisesInThisLesson }).map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i < exerciseInLesson - 1
                  ? 'w-2 h-2 bg-gradient-to-r from-[#FF6B6B] to-[#ff9a3c]'
                  : i === exerciseInLesson - 1
                  ? 'w-3 h-3 bg-[#FF6B6B] ring-2 ring-[#FF6B6B]/30 scale-110'
                  : 'w-2 h-2 bg-slate-200'
              }`}
            />
          ))}
        </div>
      </header>

      {/* Exercise */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6">
        <div
          key={currentIndex}
          className={`transition-all duration-350 ${
            slideDir === 'in'
              ? 'animate-in fade-in slide-in-from-right-8 duration-350'
              : slideDir === 'out-left'
              ? 'animate-out fade-out slide-out-to-left-8 duration-350'
              : 'animate-out fade-out slide-out-to-right-8 duration-350'
          }`}
        >
          <ExerciseRenderer
            key={currentExercise.id}
            exercise={currentExercise}
            onComplete={(result) => handleExerciseComplete(result)}
          />
        </div>
      </main>

      {/* Inline feedback bar */}
      {feedback !== 'idle' && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 animate-in slide-in-from-bottom-4 ${
            feedback === 'correct'
              ? 'bg-gradient-to-r from-green-500 to-emerald-500'
              : 'bg-gradient-to-r from-red-500 to-rose-500'
          }`}
        >
          <div className="max-w-2xl mx-auto px-6 py-5 flex items-center gap-4">
            <div className="text-3xl">{feedback === 'correct' ? '✅' : '❌'}</div>
            <div>
              <p className="text-white font-black text-lg leading-tight">
                {feedback === 'correct' ? '¡Correcto!' : 'Casi...'}
              </p>
              <p className="text-white/80 text-sm font-medium">
                {feedback === 'correct'
                  ? consecutiveCorrect >= 2 ? `¡Racha de ${consecutiveCorrect}! 🔥` : 'Sigue así'
                  : 'No te rindas, sigue practicando'}
              </p>
            </div>
            <div className="ml-auto">
              {feedback === 'correct'
                ? <span className="bg-white/20 text-white font-black px-4 py-2 rounded-full text-sm">+10 XP</span>
                : <div className="flex gap-1">{Array.from({ length: 3 }).map((_, i) => <Heart key={i} className={`w-5 h-5 ${i < lives ? 'fill-white text-white' : 'fill-white/30 text-white/30'}`} />)}</div>
              }
            </div>
          </div>
        </div>
      )}

      {/* Streak burst overlay */}
      {streakBurstCount !== null && (
        <StreakBurst
          consecutiveCount={streakBurstCount}
          onComplete={() => {
            setStreakBurstCount(null);
            advanceTimer.current = setTimeout(() => {
              advanceExercise(currentIndex, exercises.length);
            }, 200);
          }}
        />
      )}
    </div>
  );
}

export default function UnitPreviewPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 rounded-full border-4 border-[#FF6B6B] border-t-transparent animate-spin" />
      </div>
    }>
      <UnitPreviewContent />
    </Suspense>
  );
}
