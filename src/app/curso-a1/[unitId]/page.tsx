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

// ── EXERCISE TYPE CONFIG ────────────────────────────────────────────────────
const EXERCISE_TYPES: Record<string, { label: string; emoji: string; gradient: string; text: string; light: string }> = {
  'multiple-choice':        { label: 'Opción múltiple',       emoji: '🔘', gradient: 'from-violet-500 to-purple-600',  text: 'text-violet-700',  light: 'bg-violet-50' },
  'fill-blank':             { label: 'Completa la frase',     emoji: '✏️', gradient: 'from-amber-400 to-orange-500',   text: 'text-amber-700',   light: 'bg-amber-50'  },
  'fill-in-the-blank':      { label: 'Completa la frase',     emoji: '✏️', gradient: 'from-amber-400 to-orange-500',   text: 'text-amber-700',   light: 'bg-amber-50'  },
  'sentence-building':      { label: 'Construye la frase',    emoji: '🔗', gradient: 'from-blue-500 to-indigo-600',    text: 'text-blue-700',    light: 'bg-blue-50'   },
  'reading':                { label: 'Comprensión lectora',   emoji: '📖', gradient: 'from-sky-400 to-cyan-500',       text: 'text-sky-700',     light: 'bg-sky-50'    },
  'reading-comprehension':  { label: 'Comprensión lectora',   emoji: '📖', gradient: 'from-sky-400 to-cyan-500',       text: 'text-sky-700',     light: 'bg-sky-50'    },
  'listening':              { label: 'Comprensión auditiva',  emoji: '🎧', gradient: 'from-teal-400 to-emerald-500',   text: 'text-teal-700',    light: 'bg-teal-50'   },
  'listening-comprehension':{ label: 'Comprensión auditiva',  emoji: '🎧', gradient: 'from-teal-400 to-emerald-500',   text: 'text-teal-700',    light: 'bg-teal-50'   },
  'pronunciation':          { label: 'Pronunciación',         emoji: '🗣️', gradient: 'from-rose-400 to-pink-500',      text: 'text-rose-700',    light: 'bg-rose-50'   },
  'true-false':             { label: 'Verdadero / Falso',     emoji: '⚖️', gradient: 'from-indigo-400 to-blue-500',    text: 'text-indigo-700',  light: 'bg-indigo-50' },
  'translation':            { label: 'Traducción',            emoji: '🌐', gradient: 'from-emerald-400 to-green-500',  text: 'text-emerald-700', light: 'bg-emerald-50'},
  'matching':               { label: 'Relaciona elementos',   emoji: '🔄', gradient: 'from-fuchsia-400 to-purple-500', text: 'text-fuchsia-700', light: 'bg-fuchsia-50'},
  'default':                { label: 'Ejercicio',             emoji: '🎯', gradient: 'from-slate-400 to-slate-600',    text: 'text-slate-700',   light: 'bg-slate-50'  },
};

function getExerciseType(type: string) {
  return EXERCISE_TYPES[type] ?? EXERCISE_TYPES['default'];
}

// ── CONFETTI ───────────────────────────────────────────────────────────────
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

// ── INCORRECT FLASH ────────────────────────────────────────────────────────
function IncorrectFlash({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 bg-red-500/10 animate-[heart-lost_0.4s_ease-out_forwards]"
      aria-hidden
    />
  );
}

// ── EXERCISE TYPE BANNER ───────────────────────────────────────────────────
function ExerciseTypeBanner({ type, index }: { type: string; index: number }) {
  const cfg = getExerciseType(type);
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${cfg.gradient} text-white px-4 py-2 rounded-full shadow-sm`}>
        <span className="text-base leading-none" aria-hidden>{cfg.emoji}</span>
        <span className="text-xs font-black tracking-widest uppercase">{cfg.label}</span>
      </div>
    </div>
  );
}

// ── STREAK GLOW OVERLAY ────────────────────────────────────────────────────
function StreakGlow({ count }: { count: number }) {
  if (count < 3) return null;
  const intensity = count >= 10 ? 'from-yellow-500/10 via-orange-500/8' : count >= 5 ? 'from-orange-400/8 via-amber-500/6' : 'from-amber-400/6 via-orange-400/4';
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 bg-gradient-to-t ${intensity} to-transparent transition-opacity duration-700`}
      aria-hidden
    />
  );
}

function UnitPreviewContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const unitId = params.unitId as string;
  const { xp, completeExercise: saveXP, recordActivity } = useGamification();

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
  const [showIncorrectFlash, setShowIncorrectFlash] = useState(false);

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
      advanceTimer.current = setTimeout(() => advanceExercise(currentIndex, exercises.length), 1200);
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
      setShowIncorrectFlash(true);
      setTimeout(() => setShowIncorrectFlash(false), 400);
      advanceTimer.current = setTimeout(() => advanceExercise(currentIndex, exercises.length), 1800);
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
  const isOnStreak = consecutiveCorrect >= 3;
  const currentExercise = exercises[currentIndex];
  const exerciseTypeCfg = currentExercise ? getExerciseType(currentExercise.type ?? 'default') : EXERCISE_TYPES['default'];

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
          <div className="relative inline-block">
            <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur border-4 border-white/40 flex items-center justify-center shadow-2xl mx-auto">
              <Trophy className="w-14 h-14 text-white drop-shadow-lg" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full px-3 py-1 font-black text-sm shadow-lg">
              +{sessionScore} XP
            </div>
          </div>

          <div>
            <p className="text-xs font-black tracking-widest text-white/60 uppercase mb-2">
              {unitTitle || `Unidad ${unitNumber}`}
            </p>
            <h1 className="text-5xl font-black tracking-tighter text-white leading-none drop-shadow mb-2">
              ¡Increíble!
            </h1>
            <p className="text-base font-medium text-white/80">Unidad {unitNumber} completada</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Ejercicios', value: exercises.length, emoji: '✅' },
              { label: 'Tiempo',     value: `${mins}m`,       emoji: '⏱️' },
              { label: 'Precisión',  value: `${accuracy}%`,   emoji: '🎯' },
            ].map(stat => (
              <div key={stat.label} className="bg-white/20 backdrop-blur rounded-2xl p-4 border border-white/20">
                <p className="text-xl font-black text-white leading-none mb-1">{stat.emoji} {stat.value}</p>
                <p className="text-xs font-bold text-white/60 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/20 backdrop-blur rounded-2xl p-4 border border-white/20 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            <p className="text-xs font-black tracking-widest text-white/70 uppercase mr-1">XP Total</p>
            <span className="text-xl font-black text-white">{displayXp}</span>
          </div>

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
            <p className="text-xs font-black tracking-widest text-slate-500 uppercase mb-2">Lección {lessonNumber} de {totalLessons}</p>
            <h2 className="text-4xl font-black tracking-tight text-white leading-tight">¡Checkpoint!</h2>
            <p className="text-sm font-medium text-slate-400 mt-2">Llevas una buena racha. ¡Sigue!</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-center gap-3">
            <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400 flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Esta sesión</p>
              <p className="text-xl font-black text-white">+{sessionScore} XP</p>
            </div>
          </div>
          <button
            onClick={() => { setCurrentIndex(prev => prev + 1); setShowLessonComplete(false); setFeedback('idle'); }}
            className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white py-5 rounded-2xl font-black text-base uppercase tracking-wider shadow-xl shadow-orange-500/30 hover:-translate-y-0.5 transition-all"
          >
            Continuar →
          </button>
        </div>
      </div>
    );
  }

  // ── EXERCISE PLAYER ────────────────────────────────────────────────
  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-700 relative ${
      feedback === 'correct'
        ? 'bg-green-50/40'
        : feedback === 'incorrect'
        ? 'bg-red-50/30'
        : isOnStreak
        ? 'bg-amber-50/50'
        : 'bg-[#FEF9F5]'
    }`}>
      {/* Streak glow behind everything */}
      <StreakGlow count={consecutiveCorrect} />

      {/* Incorrect screen flash */}
      <IncorrectFlash visible={showIncorrectFlash} />

      {isRepairMode && <RepairModeBanner remainingCount={repairRemaining} />}

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 px-4 py-3 shadow-sm">
        <div className="max-w-2xl mx-auto flex items-center gap-3">

          <Link
            href="/curso-a1"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all flex-shrink-0"
            aria-label="Salir"
          >
            <X className="w-5 h-5" />
          </Link>

          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase truncate leading-none mb-1.5">
              {unitTitle ? `U${unitNumber} · ${unitTitle}` : `Unidad ${unitNumber}`}
              {' · '}Lección {lessonNumber}/{totalLessons}
            </p>

            <div className="relative h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out relative overflow-hidden ${
                  isRepairMode
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500'
                    : isOnStreak
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                    : 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]'
                }`}
                style={{ width: `${Math.max(progressPct, 4)}%` }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
              </div>
            </div>

            {showDots && (
              <div className="flex gap-1 mt-1.5">
                {Array.from({ length: exercisesInThisLesson }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      i < exerciseInLesson - 1
                        ? isOnStreak ? 'bg-amber-400' : 'bg-[#FF6B6B]'
                        : i === exerciseInLesson - 1
                        ? isOnStreak ? 'bg-amber-400/50' : 'bg-[#FF6B6B]/50'
                        : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

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

      {/* ── SUB-HEADER: TYPE BANNER + STREAK ──────────────────────── */}
      <div className="relative z-10 max-w-2xl mx-auto w-full px-4 pt-5 pb-0">
        <div className="flex items-center justify-between flex-wrap gap-2">

          {/* Exercise type banner */}
          <ExerciseTypeBanner type={currentExercise?.type ?? 'default'} index={currentIndex} />

          {/* Streak badge — visible only when on streak */}
          {isOnStreak && (
            <div className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full border shadow-sm transition-all duration-500 ${
              consecutiveCorrect >= 10
                ? 'bg-red-50 border-red-200 shadow-red-100'
                : consecutiveCorrect >= 5
                ? 'bg-orange-50 border-orange-200 shadow-orange-100'
                : 'bg-amber-50 border-amber-200 shadow-amber-100'
            }`}>
              <Flame className={`w-4 h-4 fill-current ${
                consecutiveCorrect >= 10 ? 'text-red-500' : consecutiveCorrect >= 5 ? 'text-orange-500' : 'text-amber-500'
              }`} />
              <span className={`text-xs font-black ${
                consecutiveCorrect >= 10 ? 'text-red-600' : consecutiveCorrect >= 5 ? 'text-orange-600' : 'text-amber-600'
              }`}>
                {consecutiveCorrect >= 10 ? '🔥 EN LLAMAS' : consecutiveCorrect >= 5 ? '¡Racha épica!' : `Racha ×${consecutiveCorrect}`}
              </span>
            </div>
          )}

          {/* Exercise counter (when NOT on streak) */}
          {!isOnStreak && (
            <div className="inline-flex items-center gap-1.5 bg-white border border-slate-100 shadow-sm px-3 py-1.5 rounded-full">
              <Target className="w-3.5 h-3.5 text-coral-500" />
              <span className="text-xs font-black tracking-widest text-slate-500 uppercase">
                {exerciseInLesson} / {exercisesInThisLesson}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── MAIN EXERCISE ─────────────────────────────────────────── */}
      <main className="relative z-10 flex-1 max-w-2xl mx-auto w-full px-4 py-5 pb-52">
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
        <div className={`fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-4 duration-250 ${
          feedback === 'correct'
            ? 'border-t-4 border-emerald-400 bg-gradient-to-t from-emerald-50 to-white'
            : 'border-t-4 border-red-400 bg-gradient-to-t from-red-50 to-white'
        } shadow-2xl`}>
          <div className="max-w-2xl mx-auto px-5 py-5 flex items-center gap-4">

            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${
              feedback === 'correct' ? 'bg-emerald-500' : 'bg-red-500'
            }`}>
              {feedback === 'correct'
                ? <CheckCircle className="w-7 h-7 text-white" />
                : <XCircle className="w-7 h-7 text-white" />
              }
            </div>

            {/* Text — bigger hierarchy */}
            <div className="flex-1 min-w-0">
              <p className={`font-black text-lg leading-tight tracking-tight mb-0.5 ${
                feedback === 'correct' ? 'text-emerald-700' : 'text-red-700'
              }`}>
                {feedback === 'correct'
                  ? consecutiveCorrect >= 5 ? '¡Eres una máquina! 🔥' : consecutiveCorrect >= 3 ? '¡En racha! 🔥' : '¡Correcto!'
                  : 'Casi…'}
              </p>
              <p className={`text-sm font-medium leading-snug ${
                feedback === 'correct' ? 'text-emerald-600' : 'text-red-500'
              }`}>
                {feedback === 'correct'
                  ? consecutiveCorrect >= 3
                    ? `${consecutiveCorrect} respuestas seguidas correctas`
                    : 'Sigue así, lo estás haciendo genial'
                  : 'No te rindas, sigue practicando'}
              </p>
            </div>

            {/* Badge */}
            <div className="flex-shrink-0">
              {feedback === 'correct' ? (
                <div className="bg-emerald-500 text-white rounded-2xl px-4 py-2 text-center shadow-md">
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-100">XP</p>
                  <p className="text-xl font-black leading-none">+{xpGained}</p>
                </div>
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
            advanceTimer.current = setTimeout(() => advanceExercise(currentIndex, exercises.length), 200);
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
