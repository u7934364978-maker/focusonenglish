'use client';

// ============================================
// COMPONENTE: SELECTOR DE PRÁCTICA
// ============================================
// Interfaz para que el alumno elija qué practicar

import { useState } from 'react';
import {
  EXERCISE_TYPE_CATALOG,
  ExerciseTypeConfig,
  ExerciseCategory,
  DifficultyLevel,
  CEFRLevel,
  B2_GRAMMAR_TOPICS,
  B2_VOCABULARY_TOPICS,
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
  const exerciseTypes: ExerciseTypeConfig[] = EXERCISE_TYPE_CATALOG;
  const [selectedCategory, setSelectedCategory] = useState<ExerciseCategory | 'all'>('all');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('medium');
  const [loading, setLoading] = useState(false);

  // Filtrar tipos por categoría
  const filteredTypes = selectedCategory === 'all' 
    ? exerciseTypes 
    : exerciseTypes.filter(t => t.category === selectedCategory);

  // Obtener configuración del tipo seleccionado
  const selectedTypeConfig = exerciseTypes.find(t => t.id === selectedType);

  // Categorías disponibles
  const categories: { id: ExerciseCategory | 'all', nameES: string, icon: string }[] = [
    { id: 'all', nameES: 'All', icon: '🎯' },
    { id: 'grammar', nameES: 'Grammar', icon: '📖' },
    { id: 'vocabulary', nameES: 'Vocabulary', icon: '📝' },
    { id: 'reading', nameES: 'Reading', icon: '📚' },
    { id: 'writing', nameES: 'Writing', icon: '✍️' },
    { id: 'listening', nameES: 'Listening', icon: '🎧' },
    { id: 'speaking', nameES: 'Speaking', icon: '🎤' },
    { id: 'pronunciation', nameES: 'Pronunciation', icon: '🗣️' },
    { id: 'dictation', nameES: 'Dictation', icon: '👂' },
    { id: 'roleplay', nameES: 'AI Roleplay', icon: '🎭' },
    { id: 'exam-practice', nameES: 'Exam Practice', icon: '🎓' },
  ];

  const handleStartPractice = () => {
    if (!selectedType) {
      alert('Please select an exercise type');
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            What do you want to practice today? 🚀
          </h1>
          <p className="text-lg text-gray-600">
            Unlimited exercises adapted to your level
          </p>
        </div>

        {/* Selector de Categoría */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">1. Choose a category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedType(''); // Reset tipo al cambiar categoría
                }}
                className={`
                  p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2
                  ${selectedCategory === cat.id 
                    ? 'border-coral-600 bg-orange-50 shadow-md' 
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'}
                `}
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-sm font-medium text-gray-900">{cat.nameES}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selector de Tipo de Ejercicio */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">2. Select exercise type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`
                  p-5 rounded-xl border-2 transition-all text-left
                  ${selectedType === type.id 
                    ? 'border-coral-600 bg-orange-50 shadow-md' 
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'}
                `}
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl">{type.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{type.nameES}</h3>
                    <p className="text-xs text-gray-600 mt-1">{type.descriptionES}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                  <span>⏱️ {type.estimatedTime} min</span>
                  {selectedType === type.id && <span className="ml-auto text-coral-600 font-bold">✓ Selected</span>}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Configuración adicional - Solo si hay tipo seleccionado */}
        {selectedType && selectedTypeConfig && (
          <div className="space-y-6 mb-8 p-6 bg-gray-50 rounded-xl">
            <h2 className="text-xl font-bold text-gray-900">3. Configure your practice</h2>

            {/* Selector de Tema */}
            {(selectedTypeConfig.category === 'grammar' || 
              selectedTypeConfig.category === 'vocabulary' || 
              selectedTypeConfig.category === 'exam-practice') && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specific topic (optional)
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">General topic</option>
                  {(selectedTypeConfig.category === 'grammar' || selectedTypeConfig.category === 'exam-practice') && 
                    B2_GRAMMAR_TOPICS.map(topic => (
                      <option key={topic.id} value={topic.id}>{topic.nameES}</option>
                    ))
                  }
                  {(selectedTypeConfig.category === 'vocabulary' || selectedTypeConfig.category === 'exam-practice') && 
                    B2_VOCABULARY_TOPICS.map(topic => (
                      <option key={topic.id} value={topic.id}>{topic.nameES}</option>
                    ))
                  }
                </select>
              </div>
            )}

            {/* Selector de Dificultad */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty level
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['easy', 'medium', 'hard'] as DifficultyLevel[]).map(level => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`
                      p-3 rounded-lg border-2 font-medium transition-all
                      ${difficulty === level 
                        ? 'border-coral-600 bg-orange-50 text-coral-700' 
                        : 'border-gray-300 hover:border-orange-300 text-gray-700'}
                    `}
                  >
                    {level === 'easy' && '😊 Easy'}
                    {level === 'medium' && '🎯 Medium'}
                    {level === 'hard' && '💪 Hard'}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-2">
                {selectedTypeConfig.difficultySettings[difficulty]}
              </p>
            </div>

            {/* Info de práctica infinita */}
            <div className="bg-gradient-to-r from-peach-50 to-orange-50 p-4 rounded-lg border-2 border-peach-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">∞</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Unlimited Practice</h4>
                  <p className="text-sm text-gray-700">
                    Exercises will be generated one by one continuously. Practice as long as you want and exit when you're done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Botón de inicio */}
        <div className="flex justify-center">
          <button
            onClick={handleStartPractice}
            disabled={!selectedType || loading}
            className={`
              px-8 py-4 rounded-xl font-bold text-lg transition-all
              ${selectedType && !loading
                ? 'bg-gradient-to-r from-coral-600 to-peach-600 text-white hover:from-coral-700 hover:to-peach-700 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
            `}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin">⏳</span>
                Generating exercises...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                🚀 Start Practice
              </span>
            )}
          </button>
        </div>

        {/* Info adicional */}
        <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-200">
          <h3 className="font-bold text-coral-900 mb-2">💡 How does it work?</h3>
          <ul className="text-sm text-coral-800 space-y-1">
            <li>✓ Exercises generated instantly</li>
            <li>✓ Always new and different content</li>
            <li>✓ Adapted to your B2 level and preferences</li>
            <li>✓ Immediate feedback and detailed explanations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
