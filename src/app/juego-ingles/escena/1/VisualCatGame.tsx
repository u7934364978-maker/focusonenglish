'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { VISUAL_LEVEL_1 } from '@/lib/course/game-levels-visual';
import { X, Heart, Check, Trophy } from 'lucide-react';

const level = VISUAL_LEVEL_1;
const LIVES = 3;

type Phase = 'video' | 'choice' | 'correct' | 'wrong' | 'complete' | 'gameover';

export default function VisualCatGame() {
  const [phase, setPhase] = useState<Phase>('video');
  const [currentRound, setCurrentRound] = useState(0);
  const [lives, setLives] = useState(LIVES);
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);

  const round = level.rounds[currentRound];
  const totalRounds = level.rounds.length;

  const handleVideoEnd = () => {
    setPhase('choice');
  };

  const handleChoice = (index: number) => {
    if (feedback !== 'idle' || phase !== 'choice') return;
    const correct = index === round.correctIndex;
    if (correct) {
      setFeedback('correct');
      setPhase('correct');
      setTimeout(() => {
        if (currentRound >= totalRounds - 1) {
          setPhase('complete');
        } else {
          setCurrentRound((r) => r + 1);
          setFeedback('idle');
          setPhase('choice');
        }
      }, 1200);
    } else {
      setFeedback('wrong');
      setPhase('wrong');
      const newLives = lives - 1;
      setLives(newLives);
      setTimeout(() => {
        if (newLives <= 0) {
          setPhase('gameover');
        } else {
          setPhase('choice');
          setFeedback('idle');
        }
      }, 1200);
    }
  };

  const restart = () => {
    setPhase('video');
    setCurrentRound(0);
    setLives(LIVES);
    setFeedback('idle');
    videoRef.current?.play();
  };

  if (phase === 'gameover') {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6">
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

  if (phase === 'complete') {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-400/50 mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={level.catImagePath} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-20 h-20 rounded-full bg-amber-500/30 flex items-center justify-center mb-8">
          <Trophy className="w-10 h-10 text-amber-400" />
        </div>
        <Link
          href="/juego-ingles"
          className="w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center"
          aria-label="Continuar"
        >
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    );
  }

  if (phase === 'video') {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <header className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-center">
          <div className="flex gap-2">
            {Array.from({ length: LIVES }).map((_, i) => (
              <Heart
                key={i}
                className={`w-8 h-8 ${i < lives ? 'text-red-500 fill-red-500' : 'text-slate-600'}`}
              />
            ))}
          </div>
          <Link href="/juego-ingles" className="p-2 rounded-full bg-white/10 text-white">
            <X className="w-6 h-6" />
          </Link>
        </header>
        <video
          ref={videoRef}
          src={level.videoPath}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
          onEnded={handleVideoEnd}
        />
      </div>
    );
  }

  if (phase === 'choice' || phase === 'correct' || phase === 'wrong') {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col">
        <header className="p-4 flex justify-between items-center border-b border-white/10">
          <div className="flex gap-2">
            {Array.from({ length: LIVES }).map((_, i) => (
              <Heart
                key={i}
                className={`w-8 h-8 ${i < lives ? 'text-red-500 fill-red-500' : 'text-slate-600'}`}
              />
            ))}
          </div>
          <div className="flex gap-1">
            {level.rounds.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i <= currentRound ? 'bg-amber-400' : 'bg-white/30'}`}
              />
            ))}
          </div>
          <Link href="/juego-ingles" className="p-2 rounded-full bg-white/10 text-white">
            <X className="w-6 h-6" />
          </Link>
        </header>

        <div className="flex-1 flex items-center justify-center p-6 relative">
          {phase === 'correct' && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-emerald-500/20 animate-in fade-in">
              <div className="w-28 h-28 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check className="w-14 h-14 text-white" strokeWidth={3} />
              </div>
            </div>
          )}
          {phase === 'wrong' && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-red-500/20 animate-in fade-in">
              <div className="w-28 h-28 rounded-full bg-red-500 flex items-center justify-center">
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
                className="aspect-square rounded-2xl overflow-hidden border-4 border-white/20 bg-slate-800 hover:border-amber-400/50 hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-70 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={path}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = level.catImagePath;
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
