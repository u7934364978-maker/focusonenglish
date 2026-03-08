'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LEVEL_1 } from '@/lib/course/game-levels';
import { X, Heart, Trophy, ArrowRight } from 'lucide-react';

const level = LEVEL_1;
const TOTAL_STOPS = level.stops.length;
const LIVES = 3;

export default function CatGameLevel() {
  const [currentStop, setCurrentStop] = useState(0);
  const [lives, setLives] = useState(LIVES);
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [levelComplete, setLevelComplete] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const stop = level.stops[currentStop];
  const progress = (currentStop / (TOTAL_STOPS - 1)) * 100;

  const handleAnswer = (index: number) => {
    if (feedback !== 'idle') return;
    const correct = index === stop.correctIndex;
    if (correct) {
      setFeedback('correct');
      setTimeout(() => {
        setFeedback('idle');
        if (currentStop >= TOTAL_STOPS - 1) {
          setLevelComplete(true);
        } else {
          setCurrentStop((s) => s + 1);
        }
      }, 800);
    } else {
      setFeedback('wrong');
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives <= 0) {
        setTimeout(() => setGameOver(true), 600);
      } else {
        setTimeout(() => setFeedback('idle'), 1200);
      }
    }
  };

  if (gameOver) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-white">
        <p className="text-2xl font-bold text-amber-400 mb-2">¡Ups!</p>
        <p className="text-white/80 mb-6">Se acabaron las vidas. Inténtalo de nuevo.</p>
        <button
          type="button"
          onClick={() => {
            setCurrentStop(0);
            setLives(LIVES);
            setFeedback('idle');
            setGameOver(false);
          }}
          className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-xl"
        >
          Reintentar
        </button>
        <Link href="/juego-ingles" className="mt-4 text-white/60 hover:text-white text-sm">
          Volver al juego
        </Link>
      </div>
    );
  }

  if (levelComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-slate-900 flex flex-col items-center justify-center p-6 text-white">
        <Trophy className="w-20 h-20 text-yellow-400 mb-4" />
        <h2 className="text-2xl font-bold mb-2">{level.completeEs}</h2>
        <p className="text-white/80 mb-8">{level.completeEn}</p>
        <Link
          href="/juego-ingles"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-6 rounded-xl"
        >
          Continuar
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Header: vidas + progreso + salir */}
      <header className="p-4 flex items-center justify-between border-b border-amber-500/30 bg-slate-900/95 backdrop-blur sticky top-0 z-20">
        <div className="flex items-center gap-2">
          {Array.from({ length: LIVES }).map((_, i) => (
            <Heart
              key={i}
              className={`w-7 h-7 transition-all ${
                i < lives ? 'text-red-500 fill-red-500' : 'text-slate-600'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-bold text-amber-400/90">
          {currentStop + 1} / {TOTAL_STOPS}
        </span>
        <Link
          href="/juego-ingles"
          className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
          aria-label="Salir"
        >
          <X className="w-5 h-5" />
        </Link>
      </header>

      {/* ── ESCENA: cielo + calle con el gato ── */}
      <section className="relative bg-gradient-to-b from-sky-600 to-amber-900/40 pt-4 pb-6 px-4">
        <p className="text-center text-amber-100/90 text-sm font-medium mb-4 drop-shadow">
          {level.storyEs}
        </p>
        {/* Calle (franja horizontal) */}
        <div className="relative max-w-2xl mx-auto rounded-2xl overflow-visible pl-12 pr-12">
          <div className="relative h-20 rounded-2xl bg-amber-900/70 border-2 border-amber-700/50 shadow-inner">
            {/* Camino recorrido (verde) */}
            <div
              className="absolute inset-y-2 left-2 right-2 rounded-xl bg-emerald-500/80 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
            {/* Paradas (puntos) */}
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              {level.stops.map((_, i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-all ${
                    i <= currentStop ? 'bg-emerald-400 border-emerald-300' : 'bg-slate-600 border-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Gato: se mueve de izquierda a derecha, siempre visible */}
          <div
            className="absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-out z-10"
            style={{ left: `calc(1.5rem + ${progress} * (100% - 6rem) / 100)`, width: '5rem' }}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-amber-200/80 shadow-xl bg-amber-900/50 ring-2 ring-amber-400/30 -ml-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={level.catImagePath}
                alt="El gato avanza por la calle"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Reto: pregunta + opciones (tarjeta tipo juego) ── */}
      <div className="flex-1 p-4 pb-8 max-w-xl mx-auto w-full">
        <div
          className={`rounded-2xl border-2 p-6 transition-all bg-slate-800/90 ${
            feedback === 'correct'
              ? 'border-emerald-500 ring-2 ring-emerald-500/30'
              : feedback === 'wrong'
                ? 'border-red-500/60 bg-red-950/20 animate-shake'
                : 'border-amber-500/40'
          }`}
        >
          <p className="text-lg font-semibold text-white mb-1">{stop.questionEs}</p>
          <p className="text-sm text-amber-200/80 mb-6">{stop.questionEn}</p>
          <ul className="space-y-3">
            {stop.options.map((option, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => handleAnswer(index)}
                  disabled={feedback !== 'idle'}
                  className="w-full py-4 px-4 rounded-xl bg-slate-700/80 hover:bg-slate-600/80 border-2 border-slate-500/50 text-left font-medium disabled:opacity-70 disabled:pointer-events-none transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 text-white"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {feedback === 'correct' && (
            <p className="mt-4 text-emerald-400 font-medium text-center animate-in fade-in">
              ¡Correcto! El gato avanza.
            </p>
          )}
          {feedback === 'wrong' && (
            <p className="mt-4 text-red-400 font-medium text-center">
              {stop.hintEs ?? 'Inténtalo de nuevo.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
