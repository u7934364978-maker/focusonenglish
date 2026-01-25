'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Brain, Sparkles, Target, CheckCircle2, Trophy, Clock } from 'lucide-react';
import A1VisualExercise from '../components/A1VisualExercise';
import { A1_KIDS_EXERCISES } from '@/lib/a1-visual-exercises';

export default function A1Page() {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [stats, setStats] = useState({ total: 0, correct: 0 });

  const handleNextExercise = () => {
    // Generar ejercicio aleatorio infinitamente
    if (selectedExercise !== null) {
      // Seleccionar un ejercicio aleatorio diferente al actual
      let nextExercise;
      do {
        nextExercise = Math.floor(Math.random() * A1_KIDS_EXERCISES.length);
      } while (nextExercise === selectedExercise && A1_KIDS_EXERCISES.length > 1);
      
      setSelectedExercise(nextExercise);
    } else {
      setSelectedExercise(null);
    }
  };

  const currentExercise = selectedExercise !== null ? A1_KIDS_EXERCISES[selectedExercise] : null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/ejercicios-inteligentes"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Volver</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-black">A1</div>
                <div className="text-sm text-white/80">Principiante</div>
              </div>
              <Brain className="w-10 h-10" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <Target className="w-6 h-6 mb-2" />
              <div className="text-2xl font-black">{stats.total}</div>
              <div className="text-xs text-white/80">Ejercicios</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <CheckCircle2 className="w-6 h-6 mb-2" />
              <div className="text-2xl font-black">{stats.correct}</div>
              <div className="text-xs text-white/80">Correctos</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <Trophy className="w-6 h-6 mb-2" />
              <div className="text-2xl font-black">
                {stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0}%
              </div>
              <div className="text-xs text-white/80">Precisión</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <Clock className="w-6 h-6 mb-2" />
              <div className="text-2xl font-black">0m</div>
              <div className="text-xs text-white/80">Tiempo</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Exercise Selection */}
        {!currentExercise && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black text-gray-900 mb-3">
                🎓 Ejercicios para Principiantes
              </h2>
              <p className="text-xl text-gray-600">
                Aprende inglés desde cero con imágenes grandes y palabras simples
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {A1_KIDS_EXERCISES.map((exercise, index) => (
                <button
                  key={exercise.id}
                  onClick={() => setSelectedExercise(index)}
                  className="bg-white rounded-2xl shadow-lg border-4 border-emerald-200 p-8 hover:border-emerald-500 hover:shadow-2xl transition-all hover:-translate-y-2 text-left group"
                >
                  <div className="text-5xl mb-4">{exercise.title.split(' ')[0]}</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-emerald-600">
                    {exercise.title.substring(3)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {exercise.instructions}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-emerald-600">
                      {exercise.questions.length} preguntas
                    </span>
                    <Sparkles className="w-5 h-5 text-emerald-500" />
                  </div>
                </button>
              ))}
            </div>

            {/* Instructions */}
            <div className="mt-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-8 border-2 border-emerald-300">
              <h3 className="text-2xl font-black text-emerald-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                ¿Cómo funcionan estos ejercicios?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-emerald-800 mb-2">📸 Imágenes Grandes</h4>
                  <p className="text-emerald-700">
                    Cada pregunta tiene una imagen grande para que puedas ver claramente qué estás aprendiendo.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-800 mb-2">🇪🇸 Todo en Español</h4>
                  <p className="text-emerald-700">
                    Las instrucciones y explicaciones están en español para que entiendas todo.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-800 mb-2">🔊 Escucha las Palabras</h4>
                  <p className="text-emerald-700">
                    Puedes escuchar cómo se pronuncian las palabras en inglés.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-800 mb-2">✅ Aprende Jugando</h4>
                  <p className="text-emerald-700">
                    Los ejercicios son divertidos y fáciles, como juegos para niños.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Exercise Display */}
        {currentExercise && (
          <A1VisualExercise
            key={currentExercise.id}
            exercise={currentExercise}
            onNext={handleNextExercise}
            gradient="from-emerald-500 to-teal-600"
          />
        )}
      </div>
    </main>
  );
}
