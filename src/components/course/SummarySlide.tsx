'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, ArrowRight, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';

interface SummarySlideProps {
  lessonTitle: string;
  totalXP: number;
  accuracy: number;
  completedItems: number;
  onRestart: () => void;
}

export default function SummarySlide({
  lessonTitle,
  totalXP,
  accuracy,
  completedItems,
  onRestart
}: SummarySlideProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 15, stiffness: 200 }}
        className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg mb-6"
      >
        <Trophy className="w-12 h-12 text-white" />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-black text-gray-900 mb-2"
      >
        ¡Lección Completada!
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 mb-8"
      >
        Has terminado "{lessonTitle}" con éxito.
      </motion.p>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-orange-50 p-4 rounded-2xl border-2 border-orange-100"
        >
          <div className="flex justify-center mb-1">
            <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
          </div>
          <div className="text-2xl font-black text-orange-600">{totalXP}</div>
          <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">XP Ganados</div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-50 p-4 rounded-2xl border-2 border-blue-100"
        >
          <div className="text-2xl font-black text-blue-600">{accuracy}%</div>
          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Precisión</div>
        </motion.div>

      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col gap-3 w-full max-w-xs"
      >
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 bg-gray-900 text-white p-4 rounded-2xl font-bold shadow-lg hover:bg-gray-800 transition-all transform hover:scale-105"
        >
          <Home className="w-5 h-5" />
          Volver al Inicio
        </Link>
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 bg-white text-gray-700 p-4 rounded-2xl font-bold border-2 border-gray-100 hover:bg-gray-50 transition-all"
        >
          <RefreshCw className="w-5 h-5" />
          Repetir Lección
        </button>
      </motion.div>
    </div>
  );
}
