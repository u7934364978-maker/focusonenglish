'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StreakBurstProps {
  consecutiveCount: number;
  onComplete: () => void;
}

const BURSTS: Record<number, { emoji: string; message: string; color: string }> = {
  3:  { emoji: '🔥', message: '¡Racha de 3!',  color: 'from-orange-500 to-amber-400' },
  5:  { emoji: '⚡', message: '¡Racha de 5!',  color: 'from-yellow-400 to-orange-500' },
  10: { emoji: '🌟', message: '¡Racha de 10!', color: 'from-purple-500 to-pink-500' },
};

export default function StreakBurst({ consecutiveCount, onComplete }: StreakBurstProps) {
  const burst = BURSTS[consecutiveCount] ?? { emoji: '🔥', message: `¡Racha de ${consecutiveCount}!`, color: 'from-orange-500 to-amber-400' };

  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  useEffect(() => {
    const timer = setTimeout(onComplete, 900);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="streak-burst"
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
      >
        <motion.div
          initial={prefersReducedMotion ? {} : { scale: 0.4, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 1.15, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className={`bg-gradient-to-br ${burst.color} text-white rounded-3xl px-12 py-8 shadow-2xl text-center`}
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], rotate: [-5, 5, -5, 0] }}
            transition={{ duration: 0.5, repeat: 1 }}
            className="text-7xl mb-3 leading-none"
          >
            {burst.emoji}
          </motion.div>
          <p className="text-4xl font-black tracking-tight leading-none">{burst.message}</p>
          <p className="text-white/70 font-bold mt-2 text-base">¡Sigue así! 💪</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
