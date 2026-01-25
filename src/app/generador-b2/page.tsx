'use client';

import { useState, useEffect } from 'react';
import { 
  B2ComprehensiveGenerator, 
  type B2GeneratedExercise,
  getSkillDisplayName,
  getSkillEmoji
} from '@/lib/b2-comprehensive-generator';

export default function GeneradorB2Page() {
  const [exercises, setExercises] = useState<B2GeneratedExercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateRandomExercise = async () => {
    if (loading) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const config = B2ComprehensiveGenerator.generateRandomConfig();
      const exercise = await B2ComprehensiveGenerator.generateExercise(config);
      setExercises(prev => [exercise, ...prev]);
    } catch (err) {
      console.error('Error generating exercise:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateRandomExercise();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎓 Generador Automático B2
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ejercicios generados automáticamente cubriendo el temario oficial del nivel B2 (CEFR)
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <button
            onClick={generateRandomExercise}
            disabled={loading}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl text-lg"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generando ejercicio...
              </span>
            ) : (
              '✨ Generar Nuevo Ejercicio'
            )}
          </button>
        </div>

        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 font-semibold">❌ Error:</p>
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {exercises.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">📊 Estadísticas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{exercises.length}</div>
                <div className="text-sm text-gray-600">Ejercicios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  {new Set(exercises.map(e => e.skill)).size}
                </div>
                <div className="text-sm text-gray-600">Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {new Set(exercises.map(e => e.topic)).size}
                </div>
                <div className="text-sm text-gray-600">Temas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">
                  {exercises.reduce((acc, e) => acc + e.estimatedTime, 0)}
                </div>
                <div className="text-sm text-gray-600">Minutos</div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <div key={exercise.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{getSkillEmoji(exercise.skill)}</span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {getSkillDisplayName(exercise.skill)} - Ejercicio #{exercises.length - index}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {exercise.exerciseType}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      📚 {exercise.topic}
                    </span>
                    {exercise.grammarFocus && (
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        📝 {exercise.grammarFocus}
                      </span>
                    )}
                    {exercise.functionFocus && (
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                        💬 {exercise.functionFocus}
                      </span>
                    )}
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                      ⏱️ {exercise.estimatedTime} min
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Instrucciones:</h4>
                <p className="text-gray-700 mb-4">{exercise.instructions}</p>
                
                <details className="cursor-pointer">
                  <summary className="font-semibold text-blue-600 hover:text-blue-800">
                    Ver contenido completo del ejercicio
                  </summary>
                  <pre className="mt-4 p-4 bg-white rounded border overflow-x-auto text-xs">
                    {JSON.stringify(exercise.content, null, 2)}
                  </pre>
                </details>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Generado: {new Date(exercise.createdAt).toLocaleString('es-ES')}
              </div>
            </div>
          ))}
        </div>

        {exercises.length === 0 && !loading && !error && (
          <div className="text-center py-16 bg-white rounded-lg shadow-lg">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              Generando primer ejercicio...
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
