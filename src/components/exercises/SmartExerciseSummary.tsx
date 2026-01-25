'use client';

import React from 'react';
import { 
  Trophy, 
  Target, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  LogOut,
  Brain,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CEFRLevel } from '@/lib/exercise-types';

interface ExerciseStats {
  total: number;
  correct: number;
  incorrect: number;
  timeSpent: number;
}

interface SmartExerciseSummaryProps {
  stats: ExerciseStats;
  level: CEFRLevel;
  categoryName: string;
  onRestart: () => void;
  onExit: () => void;
  gradient: string;
}

export default function SmartExerciseSummary({
  stats,
  level,
  categoryName,
  onRestart,
  onExit,
  gradient
}: SmartExerciseSummaryProps) {
  const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
  const minutes = Math.floor(stats.timeSpent / 60);
  const seconds = stats.timeSpent % 60;

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in zoom-in duration-500">
      <div className={`bg-gradient-to-r ${gradient} rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden mb-8`}>
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mb-6">
            <Trophy className="w-16 h-16 text-yellow-300 drop-shadow-lg" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
            ¡Sesión Completada!
          </h2>
          <p className="text-xl text-white/90 font-medium mb-8">
            Has practicado {categoryName} • Nivel {level}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 flex flex-col items-center">
              <Target className="w-6 h-6 mb-2 text-blue-200" />
              <div className="text-3xl font-black">{stats.total}</div>
              <div className="text-xs text-white/70 font-bold uppercase tracking-wider">Ejercicios</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 flex flex-col items-center">
              <CheckCircle2 className="w-6 h-6 mb-2 text-green-300" />
              <div className="text-3xl font-black">{stats.correct}</div>
              <div className="text-xs text-white/70 font-bold uppercase tracking-wider">Correctos</div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 flex flex-col items-center">
              <Sparkles className="w-6 h-6 mb-2 text-yellow-200" />
              <div className="text-3xl font-black">{accuracy}%</div>
              <div className="text-xs text-white/70 font-bold uppercase tracking-wider">Precisión</div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 flex flex-col items-center">
              <Clock className="w-6 h-6 mb-2 text-orange-200" />
              <div className="text-3xl font-black">{minutes}m {seconds}s</div>
              <div className="text-xs text-white/70 font-bold uppercase tracking-wider">Tiempo</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-violet-100 p-2 rounded-lg text-violet-600">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">¿Qué sigue?</h3>
          </div>
          <p className="text-gray-600 mb-6 flex-grow">
            La práctica constante es la clave del dominio. Puedes seguir practicando esta categoría o explorar nuevos temas para seguir mejorando tu inglés.
          </p>
          <button 
            onClick={onRestart}
            className={`w-full py-4 rounded-xl font-black text-white bg-gradient-to-r ${gradient} hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2`}
          >
            <RefreshCw className="w-5 h-5" />
            Practicar de Nuevo
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Progreso Guardado</h3>
          </div>
          <p className="text-gray-600 mb-6 flex-grow">
            Tus resultados han sido registrados en tu perfil. Ganaste puntos de experiencia (XP) por cada respuesta correcta.
          </p>
          <button 
            onClick={onExit}
            className="w-full py-4 rounded-xl font-black text-gray-700 bg-gray-100 hover:bg-gray-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Volver al Menú
          </button>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <button 
          onClick={onExit}
          className="text-gray-500 font-bold hover:text-gray-700 flex items-center gap-2 mx-auto transition-colors"
        >
          Ver mi panel de control
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
