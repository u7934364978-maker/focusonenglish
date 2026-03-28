'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import { X, Zap, ChevronLeft, ChevronRight, Trophy, Flame, Heart, Target } from 'lucide-react';
import type { Exercise } from '@/lib/exercise-generator';

type FeedbackState = 'idle' | 'correct' | 'incorrect';

interface GameClientProps {
  exercises: Exercise[];
  lessonNames: readonly string[];
  exercisesPerLesson: number[];
}

function getLessonIndex(currentIndex: number, exercisesPerLesson: number[]): number {
  let sum = 0;
  for (let i = 0; i < exercisesPerLesson.length; i++) {
    sum += exercisesPerLesson[i];
    if (currentIndex < sum) return i;
  }
  return exercisesPerLesson.length - 1;
}

export default function GameClient({ exercises, lessonNames, exercisesPerLesson }: GameClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackState>('idle');
  const [slideDir, setSlideDir] = useState<'in' | 'out-left' | 'out-right'>('in');
  const [lives, setLives] = useState(3);
  const [sessionScore, setSessionScore] = useState(0);
  const [xpGained, setXpGained] = useState(0);
  const [showXpPop, setShowXpPop] = useState(false);
  const [lostLifeAt, setLostLifeAt] = useState<number | null>(null);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [showLessonComplete, setShowLessonComplete] = useState(false);
  const [showGameComplete, setShowGameComplete] = useState(false);
  const [startTime] = useState(Date.now());
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef(0);

  const currentExercise = exercises[currentIndex];
  const lessonIndex = getLessonIndex(currentIndex, exercisesPerLesson);
  const lessonNumber = lessonIndex + 1;
  const totalLessons = lessonNames.length;
  const isOnStreak = consecutiveCorrect >= 3;
  const displayXp = sessionScore;

  // Límites de cada lección (índice del primer ejercicio de la siguiente)
  const lessonEndIndexes = exercisesPerLesson.reduce<number[]>(
    (acc, count) => [...acc, (acc[acc.length - 1] ?? 0) + count],
    []
  );

  const advanceExercise = (idx: number, total: number) => {
    setSlideDir('out-left');
    setTimeout(() => {
      const nextIndex = idx + 1;
      if (nextIndex >= total) {
        setShowGameComplete(true);
      } else {
        const isEndOfLesson = lessonEndIndexes.includes(nextIndex);
        if (isEndOfLesson && nextIndex < total) {
          setShowLessonComplete(true);
        } else {
          setCurrentIndex(nextIndex);
        }
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
      setSessionScore((prev) => prev + pts);
      const xpAmt = newConsecutive >= 3 ? 20 : 10;
      setXpGained(xpAmt);
      setShowXpPop(true);
      setTimeout(() => setShowXpPop(false), 1200);
      setFeedback('correct');
      advanceTimer.current = setTimeout(
        () => advanceExercise(currentIndex, exercises.length),
        1200
      );
    } else {
      setConsecutiveCorrect(0);
      setLives((prev) => {
        if (prev <= 1) {
          setLostLifeAt(prev - 1);
          advanceTimer.current = setTimeout(
            () => advanceExercise(currentIndex, exercises.length),
            1800
          );
          return 3;
        }
        setLostLifeAt(prev - 1);
        return prev - 1;
      });
      setFeedback('incorrect');
      advanceTimer.current = setTimeout(
        () => advanceExercise(currentIndex, exercises.length),
        1800
      );
    }
  };

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  useEffect(() => {
    if (exercises.length === 0 || showGameComplete || showLessonComplete) return;
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('input, textarea, [contenteditable="true"]')) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentIndex((prev) => Math.min(exercises.length - 1, prev + 1));
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [exercises.length, showGameComplete, showLessonComplete]);

  // Pantalla: juego completado
  if (showGameComplete) {
    const mins = Math.round((Date.now() - startTime) / 60000);
    return (
      <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2),transparent_70%)]" />
        <div className="relative z-10 max-w-md w-full text-center space-y-6 animate-in zoom-in-95 duration-500">
          <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur border-4 border-white/40 flex items-center justify-center shadow-2xl mx-auto">
            <Trophy className="w-14 h-14 text-white drop-shadow-lg" />
          </div>
          <div>
            <p className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2">
              ¡Las 10 lecciones completadas!
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight drop-shadow">
              ¡Enhorabuena!
            </h1>
            <p className="text-base font-medium text-white/90 mt-2">
              Has terminado la prueba del juego de inglés.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Actividades', value: exercises.length, emoji: '✅' },
              { label: 'Tiempo', value: `${mins} min`, emoji: '⏱️' },
              { label: 'Puntos', value: displayXp, emoji: '⭐' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/20 backdrop-blur rounded-2xl p-4 border border-white/20"
              >
                <p className="font-display text-xl font-extrabold text-white leading-none mb-1">
                  {stat.emoji} {stat.value}
                </p>
                <p className="text-xs font-bold text-white/60 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/juego-ingles"
            className="block w-full bg-white text-teal-600 py-5 rounded-2xl font-bold text-base shadow-xl hover:-translate-y-0.5 transition-all text-center"
          >
            Volver a jugar
          </Link>
          <Link
            href="/curso-a1"
            className="block w-full bg-white/20 text-white border-2 border-white/40 py-4 rounded-2xl font-bold text-base hover:bg-white/30 transition-all text-center"
          >
            Ir al curso A1 completo
          </Link>
        </div>
      </div>
    );
  }

  // Pantalla: lección completada (checkpoint)
  if (showLessonComplete) {
    return (
      <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600">
        <div className="relative z-10 max-w-sm w-full text-center space-y-6 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto shadow-2xl">
            <Flame className="w-12 h-12 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
              Lección {lessonNumber} de {totalLessons}
            </p>
            <h2 className="text-2xl font-black text-white leading-tight">
              {lessonNames[lessonIndex]}
            </h2>
            <p className="text-sm font-medium text-white/80 mt-2">
              Sigue así. Tómate un respiro y continúa cuando quieras.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-5 flex items-center justify-center gap-3">
            <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300 flex-shrink-0" />
            <p className="text-xl font-extrabold text-white">+{sessionScore} puntos</p>
          </div>
          <button
            onClick={() => {
              setCurrentIndex(lessonEndIndexes[lessonIndex]);
              setShowLessonComplete(false);
              setFeedback('idle');
            }}
            className="w-full bg-white text-purple-600 py-5 rounded-2xl font-bold text-base shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Continuar con la siguiente lección
          </button>
        </div>
      </div>
    );
  }

  if (!currentExercise) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p className="text-slate-500">No hay ejercicios.</p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-700 relative ${
        feedback === 'correct'
          ? 'bg-green-50/40'
          : feedback === 'incorrect'
            ? 'bg-red-50/30'
            : isOnStreak
              ? 'bg-amber-50/50'
              : 'bg-[#FEF9F5]'
      }`}
    >
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 px-4 py-2 shadow-sm">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <Link
            href="/curso-a1"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all flex-shrink-0"
            aria-label="Salir"
          >
            <X className="w-5 h-5" />
          </Link>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-slate-500 truncate leading-none mb-1">
              Juego · Lección {lessonNumber}/{totalLessons} · Actividad {currentIndex + 1} de{' '}
              {exercises.length}
            </p>
            <div
              className="relative h-2.5 bg-slate-100 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={currentIndex + 1}
              aria-valuemin={1}
              aria-valuemax={exercises.length}
            >
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${
                  isOnStreak
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                    : 'bg-gradient-to-r from-violet-500 to-purple-600'
                }`}
                style={{
                  width: `${Math.max(((currentIndex + 1) / exercises.length) * 100, 4)}%`,
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="relative flex items-center gap-1">
              <Zap className="w-4 h-4 text-yellow-500 fill-yellow-400" />
              <span className="font-medium text-slate-700 text-sm tabular-nums">
                {displayXp}
              </span>
              {showXpPop && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-emerald-600 font-semibold text-sm pointer-events-none whitespace-nowrap animate-bounce">
                  +{xpGained}
                </span>
              )}
            </div>
            <div className="flex gap-0.5">
              {[0, 1, 2].map((i) => (
                <Heart
                  key={i}
                  className={`w-5 h-5 transition-all ${
                    i < lives ? 'text-red-500 fill-red-500' : 'text-slate-200 fill-slate-200'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-1 border-l border-slate-100 pl-3">
              <button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-20 disabled:cursor-not-allowed"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => Math.min(exercises.length - 1, prev + 1))}
                disabled={currentIndex === exercises.length - 1}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-20 disabled:cursor-not-allowed"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-2xl mx-auto w-full px-4 pt-2 pb-0 flex justify-end">
        {isOnStreak && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-xs font-semibold text-amber-700">
              Racha ×{consecutiveCorrect}
            </span>
          </div>
        )}
        <div className="inline-flex items-center gap-1.5 bg-white border border-slate-100 shadow-sm px-3 py-1.5 rounded-full ml-2">
          <Target className="w-3.5 h-3.5 text-violet-500" />
          <span className="text-sm font-medium text-slate-600">
            {currentIndex + 1} de {exercises.length}
          </span>
        </div>
      </div>

      <main
        className="relative z-10 flex-1 max-w-2xl mx-auto w-full px-4 py-4 pb-24"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (dx > 60 && currentIndex > 0) setCurrentIndex((p) => p - 1);
          if (dx < -60 && currentIndex < exercises.length - 1) setCurrentIndex((p) => p + 1);
        }}
      >
        <div
          key={currentIndex}
          className={
            slideDir === 'in'
              ? 'animate-in fade-in slide-in-from-right-8 duration-350'
              : 'animate-out fade-out slide-out-to-left-8 duration-350'
          }
        >
          <ExerciseRenderer
            key={currentExercise.id}
            exercise={currentExercise}
            onComplete={handleExerciseComplete}
          />
        </div>
      </main>

      {feedback !== 'idle' && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 py-4 px-4 text-center ${
            feedback === 'correct'
              ? 'bg-emerald-50 border-t-4 border-emerald-400'
              : 'bg-red-50 border-t-4 border-red-400'
          }`}
          role="status"
        >
          <p className="font-bold text-slate-800">
            {feedback === 'correct' ? '¡Correcto!' : 'Otra oportunidad'}
          </p>
          <p className="text-sm text-slate-600 mt-1">
            {feedback === 'correct'
              ? 'Sigue así.'
              : 'Sigue intentando.'}
          </p>
        </div>
      )}
    </div>
  );
}
