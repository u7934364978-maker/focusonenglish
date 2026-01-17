'use client';

// ============================================
// COMPONENTE: SELECTOR DE PRÁCTICA
// ============================================
// Interfaz para que el alumno elija qué practicar

import { useState, useEffect } from 'react';
import { 
  ExerciseTypeConfig, 
  ExerciseCategory,
  DifficultyLevel,
  CEFRLevel,
  B2_GRAMMAR_TOPICS,
  B2_VOCABULARY_TOPICS
} from '@/lib/exercise-types';

interface PracticeSelectorProps {
  onStartPractice: (config: PracticeConfig) => void;
  userLevel?: CEFRLevel;
}

export interface PracticeConfig {
  exerciseType: string;
  topic?: string;
  difficulty: DifficultyLevel;
  level: CEFRLevel;
  // count removed - infinite exercises
}

export default function PracticeSelector({ onStartPractice, userLevel = 'B2' }: PracticeSelectorProps) {
  const [exerciseTypes, setExerciseTypes] = useState<ExerciseTypeConfig[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ExerciseCategory | 'all'>('all');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('medium');
  const [loading, setLoading] = useState(false);

  // Cargar tipos de ejercicios
  useEffect(() => {
    async function loadExerciseTypes() {
      try {
        const response = await fetch('/api/generate-exercise');
        const data = await response.json();
        if (data.success) {
          setExerciseTypes(data.exerciseTypes);
        }
      } catch (error) {
        console.error('Error loading exercise types:', error);
      }
    }
    loadExerciseTypes();
  }, []);

  // Filtrar tipos por categoría
  const filteredTypes = selectedCategory === 'all' 
    ? exerciseTypes 
    : exerciseTypes.filter(t => t.category === selectedCategory);

  // Obtener configuración del tipo seleccionado
  const selectedTypeConfig = exerciseTypes.find(t => t.id === selectedType);

  // Categorías disponibles
  const categories: { id: ExerciseCategory | 'all', nameES: string, icon: string }[] = [
    { id: 'all', nameES: 'Todos', icon: '🎯' },
    { id: 'grammar', nameES: 'Gramática', icon: '📖' },
    { id: 'vocabulary', nameES: 'Vocabulario', icon: '📝' },
    { id: 'reading', nameES: 'Lectura', icon: '📚' },
    { id: 'writing', nameES: 'Escritura', icon: '✍️' },
    { id: 'listening', nameES: 'Comprensión Oral', icon: '🎧' },
    { id: 'speaking', nameES: 'Expresión Oral', icon: '🎤' },
    { id: 'pronunciation', nameES: 'Pronunciación', icon: '🗣️' },
    { id: 'exam-practice', nameES: 'Práctica de Examen', icon: '🎓' },
  ];

  const handleStartPractice = () => {
    if (!selectedType) {
      alert('Por favor selecciona un tipo de ejercicio');
      return;
    }

    const config: PracticeConfig = {
      exerciseType: selectedType,
      topic: selectedTopic || undefined,
      difficulty,
      level: userLevel
    };

    onStartPractice(config);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header compacto */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ¿Qué quieres practicar?
          </h1>
          <p className="text-gray-600">Selecciona un tipo de ejercicio para comenzar</p>
        </div>

        {/* Selector de Tipo de Ejercicio - Vista compacta */}
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`
                  p-4 rounded-xl border-2 transition-all text-left hover:scale-[1.02]
                  ${selectedType === type.id 
                    ? 'border-green-500 bg-green-50 shadow-lg' 
                    : 'border-gray-200 hover:border-blue-300 bg-white'}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{type.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm">{type.nameES}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">⏱️ {type.estimatedTime} min</p>
                  </div>
                  {selectedType === type.id && (
                    <span className="text-green-600 text-xl">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Configuración - Solo si hay tipo seleccionado */}
        {selectedType && selectedTypeConfig && (
          <div className="space-y-4 mb-6">
            {/* Selector de Tema - Inline */}
            {(selectedTypeConfig.category === 'grammar' || selectedTypeConfig.category === 'vocabulary') && (
              <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tema (opcional)
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Todos los temas</option>
                  {selectedTypeConfig.category === 'grammar' && B2_GRAMMAR_TOPICS.map(topic => (
                    <option key={topic.id} value={topic.id}>{topic.nameES}</option>
                  ))}
                  {selectedTypeConfig.category === 'vocabulary' && B2_VOCABULARY_TOPICS.map(topic => (
                    <option key={topic.id} value={topic.id}>{topic.nameES}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Selector de Dificultad - Compacto */}
            <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Dificultad
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['easy', 'medium', 'hard'] as DifficultyLevel[]).map(level => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`
                      p-2 rounded-lg border-2 font-medium transition-all text-sm
                      ${difficulty === level 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-300 hover:border-blue-300 text-gray-700'}
                    `}
                  >
                    {level === 'easy' && '😊 Fácil'}
                    {level === 'medium' && '🎯 Medio'}
                    {level === 'hard' && '💪 Difícil'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Botón de inicio - Grande y llamativo */}
        <div className="flex justify-center">
          <button
            onClick={handleStartPractice}
            disabled={!selectedType || loading}
            className={`
              w-full max-w-md px-8 py-4 rounded-xl font-bold text-lg transition-all
              ${selectedType && !loading
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
            `}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                Generando...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Comenzar
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
