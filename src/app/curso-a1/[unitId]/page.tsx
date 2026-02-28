'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef, Suspense } from 'react';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import RepairModeBanner from '@/components/course/RepairModeBanner';
import StreakBurst from '@/components/gamification/StreakBurst';
import { useGamification } from '@/lib/hooks/use-gamification';
import { X, Heart, Zap, Trophy, Flame, ChevronLeft, ChevronRight, CheckCircle, XCircle, Target } from 'lucide-react';
import Link from 'next/link';

const CHUNK_SIZE = 15;
const STREAK_THRESHOLDS = [3, 5, 10];
const MAX_DOTS = 15;

type FeedbackState = 'idle' | 'correct' | 'incorrect';

const CONFETTI_PIECES = Array.from({ length: 24 }, (_, i) => ({
  left: ((i * 37 + 11) % 100),
  top: ((i * 13 + 5) % 20 + 5),
  duration: 0.8 + (i * 17 % 12) / 10,
  delay: (i * 7 % 5) / 10,
  rotate: (i * 47) % 360,
}));

function Confetti() {
  const colors = ['bg-[#FF6B6B]', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400', 'bg-pink-400'];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {CONFETTI_PIECES.map((p, i) => (
        <div
          key={i}
          className={`absolute w-2 h-3 rounded-sm opacity-0 ${colors[i % colors.length]}`}
          style={{
            left: `${p.left}%`,
            top: `-${p.top}%`,
            animation: `confetti-fall ${p.duration}s ease-in ${p.delay}s forwards`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}

function UnitPreviewContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const unitId = params.unitId as string;
  const { xp, level, completeExercise: saveXP, recordActivity } = useGamification();

  const [exercises, setExercises] = useState<any[]>([]);
  const [unitTitle, setUnitTitle] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [startTime] = useState(Date.now());

  const [feedback, setFeedback] = useState<FeedbackState>('idle');
  const [slideDir, setSlideDir] = useState<'in' | 'out-left' | 'out-right'>('in');
  const [lives, setLives] = useState(3);
  const [sessionScore, setSessionScore] = useState(0);
  const [xpGained, setXpGained] = useState(0);
  const [showXpPop, setShowXpPop] = useState(false);
  const [lostLifeAt, setLostLifeAt] = useState<number | null>(null);

  const [failCount, setFailCount] = useState(0);
  const [failedIndexes, setFailedIndexes] = useState<number[]>([]);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [streakBurstCount, setStreakBurstCount] = useState<number | null>(null);

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
        const title = unitModule.UNIT_TITLE || unitModule.title || '';
        setUnitTitle(title);
        if (!unitExercises || !Array.isArray(unitExercises)) {
          setError('No se encontraron ejercicios');
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
    recordActivity();
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
      setSessionScore(prev => prev + pts);

      const xpAmt = newConsecutive >= 3 ? 20 : 10;
      setXpGained(xpAmt);
      setShowXpPop(true);
      setTimeout(() => setShowXpPop(false), 1200);

      const exerciseId = exercises[currentIndex]?.id ?? `${unitId}-${currentIndex}`;
      saveXP(exerciseId, 1, 1);

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
      if (lives > 1) {
        const newLives = lives - 1;
        setLives(newLives);
        setLostLifeAt(newLives);
        setTimeout(() => setLostLifeAt(null), 600);
      }
      setFeedback('incorrect');

      advanceTimer.current = setTimeout(() => {
        advanceExercise(currentIndex, exercises.length);
      }, 1800);
    }
  };

  // ── LOADING ────────────────────────────────────────────────────────
  if (!unitId || loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF9F5]">
      <div className="text-center space-y-4">
        <div className="w-14 h-14 rounded-full border-4 border-[#FF6B6B] border-t-transparent animate-spin mx-auto" />
        <p className="text-xs font-black tracking-widest text-slate-400 uppercase">Cargando unidad…</p>
      </div>
    </div>
  );

  // ── ERROR ──────────────────────────────────────────────────────────
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF9F5] p-4">
      <div className="max-w-sm w-full bg-white rounded-3xl shadow-xl p-10 text-center">
        <p className="text-5xl mb-5">😕</p>
        <p className="text-xs font-black tracking-widest text-slate-400 uppercase mb-2">Error al cargar</p>
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-3">Algo salió mal</h2>
        <p className="text-sm font-medium text-slate-500 mb-8 leading-relaxed">{error}</p>
        <Link href="/curso-a1" className="block w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm text-center uppercase tracking-wider">
          Volver al Curso
        </Link>
      </div>
    </div>
  );

  if (exercises.length === 0) return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF9F5]">
      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">No hay ejercicios disponibles.</p>
    </div>
  );

  const unitNumber = unitId.replace('unit-', '');
  const lessonNumber = Math.floor(currentIndex / CHUNK_SIZE) + 1;
  const totalLessons = Math.ceil(exercises.length / CHUNK_SIZE);
  const exerciseInLesson = (currentIndex % CHUNK_SIZE) + 1;
  const exercisesInThisLesson = Math.min(CHUNK_SIZE, exercises.length - (lessonNumber - 1) * CHUNK_SIZE);
  const progressPct = (exerciseInLesson - 1) / exercisesInThisLesson * 100;
  const isRepairMode = failCount >= 2 && failedIndexes.length > 0;
  const repairRemaining = failedIndexes.filter(i => i >= currentIndex).length;
  const displayXp = xp + sessionScore;
  const showDots = exercisesInThisLesson <= MAX_DOTS;

  // ── UNIT SUMMARY ───────────────────────────────────────────────────
  if (showUnitSummary) {
    const mins = Math.round((Date.now() - startTime) / 60000);
    const accuracy = Math.round(((exercises.length - failedIndexes.length) / exercises.length) * 100);
    return (
      <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] via-[#FF8E53] to-[#FFA06B]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_70%)]" />
        <Confetti />

        <div className="relative z-10 max-w-md w-full text-center space-y-6 animate-in zoom-in-95 duration-500">
          {/* Trophy */}
          <div className="relative inline-block">
            <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur border-4 border-white/40 flex items-center justify-center shadow-2xl mx-auto">
              <Trophy className="w-14 h-14 text-white drop-shadow-lg" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full px-3 py-1 font-black text-sm shadow-lg">
              +{sessionScore} XP
            </div>
          </div>

          {/* Heading hierarchy */}
          <div>
            <p className="text-xs font-black tracking-widest text-white/60 uppercase mb-2">
              {unitTitle || `Unidad ${unitNumber}`}
            </p>
            <h1 className="text-5xl font-black tracking-tighter text-white leading-none drop-shadow mb-2">
              ¡Increíble!
            </h1>
            <p className="text-base font-medium text-white/80">
              Unidad {unitNumber} completada
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Ejercicios', value: exercises.length, emoji: '✅' },
              { label: 'Tiempo', value: `${mins}m`, emoji: '⏱️' },
              { label: 'Precisión', value: `${accuracy}%`, emoji: '🎯' },
            ].map(stat => (
              <div key={stat.label} className="bg-white/20 backdrop-blur rounded-2xl p-4 border border-white/20">
                <p className="text-xl font-black text-white leading-none mb-1">{stat.emoji} {stat.value}</p>
                <p className="text-xs font-bold text-white/60 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* XP total */}
          <div className="bg-white/20 backdrop-blur rounded-2xl p-4 border border-white/20 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            <p className="text-xs font-black tracking-widest text-white/70 uppercase mr-1">XP Total</p>
            <span className="text-xl font-black text-white">{displayXp}</span>
          </div>

          {/* CTA */}
          <Link
            href="/curso-a1"
            className="block w-full bg-white text-[#FF6B6B] py-5 rounded-2xl font-black text-base uppercase tracking-wider shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Siguiente unidad →
          </Link>
        </div>
      </div>
    );
  }

  // ── CHECKPOINT ─────────────────────────────────────────────────────
  if (showLessonComplete) {
    return (
      <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,107,0.2),transparent_70%)]" />

        <div className="relative z-10 max-w-sm w-full text-center space-y-6 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center mx-auto shadow-2xl shadow-orange-500/30">
            <Flame className="w-12 h-12 text-white" />
          </div>

          <div>
            <p className="text-xs font-black tracking-widest text-slate-500 uppercase mb-2">
              Lección {lessonNumber} de {totalLessons}
            </p>
            <h2 className="text-4xl font-black tracking-tight text-white leading-tight">
              ¡Checkpoint!
            </h2>
            <p className="text-sm font-medium text-slate-400 mt-2">
              Llevas una buena racha. ¡Sigue!
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-center gap-3">
            <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400 flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Esta sesión</p>
              <p className="text-xl font-black text-white">+{sessionScore} XP</p>
            </div>
          </div>

          <button
            onClick={() => {
              setCurrentIndex(prev => prev + 1);
              setShowLessonComplete(false);
              setFeedback('idle');
            }}
            className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white py-5 rounded-2xl font-black text-base uppercase tracking-wider shadow-xl shadow-orange-500/30 hover:-translate-y-0.5 transition-all"
          >
            Continuar →
          </button>
        </div>
      </div>
    );
  }

  const currentExercise = exercises[currentIndex];

  // ── EXERCISE PLAYER ────────────────────────────────────────────────
  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      feedback === 'correct' ? 'bg-green-50/40' : feedback === 'incorrect' ? 'bg-red-50/30' : 'bg-[#FEF9F5]'
    }`}>
      {isRepairMode && <RepairModeBanner remainingCount={repairRemaining} />}

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 px-4 py-3 shadow-sm">
        <div className="max-w-2xl mx-auto flex items-center gap-3">

          {/* Exit */}
          <Link
            href="/curso-a1"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all flex-shrink-0"
            aria-label="Salir"
          >
            <X className="w-5 h-5" />
          </Link>

          {/* Progress bar + meta */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase truncate leading-none mb-1.5">
              {unitTitle
                ? `U${unitNumber} · ${unitTitle}`
                : `Unidad ${unitNumber}`}
              {' · '}Lección {lessonNumber}/{totalLessons}
            </p>

            {/* Progress bar */}
            <div className="relative h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out relative overflow-hidden ${
                  isRepairMode
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500'
                    : 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]'
                }`}
                style={{ width: `${Math.max(progressPct, 4)}%` }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
              </div>
            </div>

            {/* Dot indicators */}
            {showDots && (
              <div className="flex gap-1 mt-1.5">
                {Array.from({ length: exercisesInThisLesson }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      i < exerciseInLesson - 1
                        ? 'bg-[#FF6B6B]'
                        : i === exerciseInLesson - 1
                        ? 'bg-[#FF6B6B]/50'
                        : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* XP + Hearts */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="relative flex items-center gap-1">
              <Zap className="w-4 h-4 text-yellow-500 fill-yellow-400" />
              <span className="font-black text-slate-800 text-sm tabular-nums">{displayXp}</span>
              {showXpPop && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-emerald-500 font-black text-sm pointer-events-none whitespace-nowrap animate-[xp-fly_0.8s_ease-out_forwards]">
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
                  } ${lostLifeAt !== null && i === lostLifeAt ? 'animate-[heart-lost_0.5s_ease-out]' : ''}`}
                />
              ))}
            </div>

            {/* Nav arrows */}
            <div className="flex gap-1 border-l border-slate-100 pl-3 ml-1">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                aria-label="Ejercicio anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIndex(prev => Math.min(exercises.length - 1, prev + 1))}
                disabled={currentIndex === exercises.length - 1}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                aria-label="Siguiente ejercicio"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── EXERCISE COUNTER BADGE ─────────────────────────────────── */}
      <div className="max-w-2xl mx-auto w-full px-4 pt-5 pb-0">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 bg-white border border-slate-100 shadow-sm px-3 py-1.5 rounded-full">
            <Target className="w-3.5 h-3.5 text-coral-500" />
            <span className="text-xs font-black tracking-widest text-slate-500 uppercase">
              Ejercicio {exerciseInLesson} de {exercisesInThisLesson}
            </span>
          </div>
          {consecutiveCorrect >= 2 && (
            <div className="inline-flex items-center gap-1 bg-amber-50 border border-amber-100 px-2.5 py-1.5 rounded-full">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span className="text-xs font-black text-amber-600">Racha ×{consecutiveCorrect}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── MAIN EXERCISE ─────────────────────────────────────────── */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-5 pb-52">
        <div
          key={currentIndex}
          className={`${
            slideDir === 'in'
              ? 'animate-in fade-in slide-in-from-right-8 duration-350'
              : 'animate-out fade-out slide-out-to-left-8 duration-350'
          }`}
        >
          <ExerciseRenderer
            key={currentExercise.id}
            exercise={currentExercise}
            onComplete={(result) => handleExerciseComplete(result)}
          />
        </div>
      </main>

      {/* ── FEEDBACK PANEL ────────────────────────────────────────── */}
      {feedback !== 'idle' && (
        <div className={`fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-4 duration-300 border-t-2 bg-white shadow-2xl ${
          feedback === 'correct' ? 'border-emerald-400' : 'border-red-400'
        }`}>
          <div className="max-w-2xl mx-auto px-5 py-4 flex items-center gap-4">
            {/* Icon */}
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${
              feedback === 'correct' ? 'bg-emerald-100' : 'bg-red-100'
            }`}>
              {feedback === 'correct'
                ? <CheckCircle className="w-6 h-6 text-emerald-600" />
                : <XCircle className="w-6 h-6 text-red-600" />
              }
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className={`font-extrabold text-base leading-tight tracking-tight ${
                feedback === 'correct' ? 'text-emerald-700' : 'text-red-700'
              }`}>
                {feedback === 'correct' ? '¡Correcto!' : 'Casi…'}
              </p>
              <p className={`text-sm font-medium mt-0.5 leading-snug ${
                feedback === 'correct' ? 'text-emerald-600' : 'text-red-500'
              }`}>
                {feedback === 'correct'
                  ? consecutiveCorrect >= 2 ? `¡Racha de ${consecutiveCorrect}! 🔥` : 'Sigue así, lo estás haciendo genial'
                  : 'No te rindas, sigue practicando'}
              </p>
            </div>

            {/* Badge */}
            <div className="flex-shrink-0">
              {feedback === 'correct' ? (
                <span className="font-black px-3 py-1.5 rounded-xl text-sm bg-emerald-100 text-emerald-700 tracking-wide">
                  +{xpGained} XP ⚡
                </span>
              ) : (
                <div className="flex gap-0.5">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Heart key={i} className={`w-5 h-5 ${i < lives ? 'fill-red-500 text-red-500' : 'fill-slate-200 text-slate-200'}`} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── STREAK BURST ──────────────────────────────────────────── */}
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
      <div className="min-h-screen flex items-center justify-center bg-[#FEF9F5]">
        <div className="w-12 h-12 rounded-full border-4 border-[#FF6B6B] border-t-transparent animate-spin" />
      </div>
    }>
      <UnitPreviewContent />
    </Suspense>
  );
}
