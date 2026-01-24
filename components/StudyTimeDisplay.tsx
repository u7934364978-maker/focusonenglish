'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const STORAGE_KEY = 'study-timer-last-break';

export default function StudyTimeDisplay() {
  const [studyTime, setStudyTime] = useState(0);
  const [nextBreakIn, setNextBreakIn] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const lastBreak = localStorage.getItem(STORAGE_KEY);
      const now = Date.now();
      
      if (lastBreak) {
        const timeSinceLastBreak = now - parseInt(lastBreak);
        const studyInterval = 60 * 60 * 1000; // 60 minutos
        const timeUntilNextBreak = studyInterval - (timeSinceLastBreak % studyInterval);
        
        setStudyTime(timeSinceLastBreak);
        setNextBreakIn(timeUntilNextBreak);
      } else {
        // Primera vez
        localStorage.setItem(STORAGE_KEY, now.toString());
        setStudyTime(0);
        setNextBreakIn(60 * 60 * 1000);
      }
    };

    // Actualizar inmediatamente
    updateTime();

    // Actualizar cada segundo para el contador
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    }
    return `${minutes}m ${seconds}s`;
  };

  const getProgressPercentage = () => {
    const studyInterval = 60 * 60 * 1000; // 60 minutos
    return Math.min(100, (studyTime % studyInterval) / studyInterval * 100);
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        title="Mostrar temporizador de estudio"
      >
        <Clock className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 w-72 z-50 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100">
            Tiempo de Estudio
          </h3>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          title="Minimizar"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-linear"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
      </div>

      {/* Time Stats */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Tiempo estudiado:
          </span>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
            {formatTime(studyTime % (60 * 60 * 1000))}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Próximo descanso:
          </span>
          <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
            {formatTime(nextBreakIn)}
          </span>
        </div>

        {/* Motivational Message */}
        <div className="mt-3 p-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
          <p className="text-xs text-center text-gray-700 dark:text-gray-300">
            {getProgressPercentage() < 25 && "¡Excelente inicio! 💪"}
            {getProgressPercentage() >= 25 && getProgressPercentage() < 50 && "¡Vas muy bien! 🚀"}
            {getProgressPercentage() >= 50 && getProgressPercentage() < 75 && "¡Sigue así! 🌟"}
            {getProgressPercentage() >= 75 && getProgressPercentage() < 95 && "¡Casi hora del descanso! ⏰"}
            {getProgressPercentage() >= 95 && "¡Descanso en breve! 🎉"}
          </p>
        </div>
      </div>

      {/* Info Footer */}
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          💧 Recuerda hidratarte • 🏃 Haz ejercicio cada hora
        </p>
      </div>
    </div>
  );
}
