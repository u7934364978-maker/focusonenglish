'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { INFINITE_WALK_ACTIVITIES } from '@/lib/course/game-levels-visual';
import { X, Heart, Check } from 'lucide-react';

const VIDEO_PATH = '/game-assets/cat-walking-for-food.mp4';
const WALK_DURATION_MS = 12_000; // Segundos de vídeo antes de cada miniactividad
const LIVES = 3;

type Phase = 'walking' | 'activity' | 'correct' | 'wrong' | 'gameover';

export default function InfiniteCatWalk() {
  const [phase, setPhase] = useState<Phase>('walking');
  const [activityIndex, setActivityIndex] = useState(0);
  const [lives, setLives] = useState(LIVES);
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pool = INFINITE_WALK_ACTIVITIES;
  const round = pool[activityIndex % pool.length];

  useEffect(() => {
    if (phase !== 'walking') return;
    timerRef.current = setTimeout(() => {
      setPhase('activity');
      setFeedback('idle');
    }, WALK_DURATION_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phase, activityIndex]);

  const scheduleNextActivity = () => {
    setPhase('walking');
    setActivityIndex((i) => i + 1);
    videoRef.current?.play?.();
  };

  const handleChoice = (index: number) => {
    if (feedback !== 'idle' || phase !== 'activity') return;
    const correct = index === round.correctIndex;
    if (correct) {
      setFeedback('correct');
      setPhase('correct');
      setTimeout(() => {
        scheduleNextActivity();
      }, 1000);
    } else {
      setFeedback('wrong');
      setPhase('wrong');
      const newLives = lives - 1;
      setLives(newLives);
      setTimeout(() => {
        if (newLives <= 0) {
          setPhase('gameover');
        } else {
          scheduleNextActivity();
        }
      }, 1200);
    }
  };

  const restart = () => {
    setPhase('walking');
    setActivityIndex(0);
    setLives(LIVES);
    setFeedback('idle');
    videoRef.current?.play?.();
  };

  if (phase === 'gameover') {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
        <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center mb-8">
          <X className="w-12 h-12 text-red-400" />
        </div>
        <button
          type="button"
          onClick={restart}
          className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 flex items-center justify-center"
          aria-label="Reintentar"
        >
          <svg className="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        <Link
          href="/juego-ingles"
          className="mt-8 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
          aria-label="Salir"
        >
          <X className="w-7 h-7" />
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Vídeo del gato caminando: continuo, en bucle, sin final */}
      <video
        ref={videoRef}
        src={VIDEO_PATH}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* HUD: vidas + salir */}
      <header className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-center">
        <div className="flex gap-2">
          {Array.from({ length: LIVES }).map((_, i) => (
            <Heart
              key={i}
              className={`w-8 h-8 ${i < lives ? 'text-red-500 fill-red-500' : 'text-white/20'}`}
            />
          ))}
        </div>
        <Link
          href="/juego-ingles"
          className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60"
          aria-label="Salir"
        >
          <X className="w-6 h-6" />
        </Link>
      </header>

      {/* Overlay de miniactividad: cuando toca, el vídeo sigue detrás */}
      {(phase === 'activity' || phase === 'correct' || phase === 'wrong') && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/70 p-4">
          {phase === 'correct' && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-28 h-28 rounded-full bg-emerald-500 flex items-center justify-center animate-in zoom-in duration-300">
                <Check className="w-14 h-14 text-white" strokeWidth={3} />
              </div>
            </div>
          )}
          {phase === 'wrong' && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-28 h-28 rounded-full bg-red-500 flex items-center justify-center animate-in zoom-in duration-300">
                <X className="w-14 h-14 text-white" strokeWidth={3} />
              </div>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
            {round.imagePaths.map((path, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleChoice(index)}
                disabled={feedback !== 'idle'}
                className="aspect-square rounded-2xl overflow-hidden border-4 border-white/30 bg-white/10 hover:border-amber-400/70 hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-70 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={path}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/game-assets/cat-looking-for-food.png';
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
