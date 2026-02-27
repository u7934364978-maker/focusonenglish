'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StreakBurstProps {
  consecutiveCount: number;
  onComplete: () => void;
}

const MESSAGES: Record<number, string> = {
  3: '¡Racha de 3! 🔥',
  5: '¡Racha de 5! ⚡',
  10: '¡Racha de 10! 🌟',
};

function playTwoNoteTone() {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

    const play = (freq: number, startAt: number) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.frequency.setValueAtTime(freq, audioContext.currentTime + startAt);
      gain.gain.setValueAtTime(0.25, audioContext.currentTime + startAt);
      gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + startAt + 0.2);
      osc.start(audioContext.currentTime + startAt);
      osc.stop(audioContext.currentTime + startAt + 0.2);
    };

    play(523.25, 0);
    play(783.99, 0.15);
  } catch {
    // Audio not supported — silently ignore
  }
}

export default function StreakBurst({ consecutiveCount, onComplete }: StreakBurstProps) {
  const message = MESSAGES[consecutiveCount] ?? `¡Racha de ${consecutiveCount}! 🔥`;

  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  useEffect(() => {
    playTwoNoteTone();
    const timer = setTimeout(onComplete, 600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="streak-burst"
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
      >
        <div className="bg-gradient-to-br from-orange-500 to-amber-400 text-white rounded-3xl px-10 py-6 shadow-2xl text-center">
          <p className="text-3xl font-black">{message}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
