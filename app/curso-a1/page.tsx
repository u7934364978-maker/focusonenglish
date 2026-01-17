'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  A1_COURSE_CONFIG, 
  getExercisesByCategory,
  type ExerciseCategory,
  type DifficultyLevel,
  type ExerciseType
} from '@/lib/course-data-a1';

export default function A1CoursePage() {
  const [selectedCategory, setSelectedCategory] = useState<ExerciseCategory>('all');
  const [selectedExercise, setSelectedExercise] = useState<ExerciseType | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>('medium');

  const exerciseTypes = getExercisesByCategory(selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-600 via-orange-600 to-red-500 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2di0ybDEzLjUzNCA0LjU3MUwzNiAyM3YtMmgtMnYxMGgydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0ydi0yaDJ2LTJoMnYtMmgydi0yaDJ2LTJoMnYtMmgydi0yaDJ6bTAgMTRoMnYyaC0ydi0yem0tMiAyaC0ydi0yaDF2MWgxdjF6bS00LTJoLTJ2LTJoMXYxaDF2MXptMTAtOGgtMnYtMmgydjJ6bS00LTJoLTJ2LTJoMnYyem0tNCAwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30 shadow-lg">
              🎓 Level A1 - Beginner
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 drop-shadow-lg">
              What do you want to practice today?
            </h1>
            <p className="text-2xl mb-8 opacity-95 max-w-3xl mx-auto drop-shadow-md">
              Unlimited exercises adapted to your level
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Step 1: Choose Category */}
        <div className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            1. Choose a category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {A1_COURSE_CONFIG.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id as ExerciseCategory);
                  setSelectedExercise(null);
                }}
                className={`p-6 rounded-2xl border-2 transition-all font-bold text-lg ${
                  selectedCategory === cat.id
                    ? 'bg-orange-50 border-orange-500 text-orange-900 shadow-lg scale-105'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-orange-300 hover:shadow-md'
                }`}
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <div>{cat.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Select Exercise Type */}
        <div className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            2. Select exercise type
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exerciseTypes.map((exercise) => (
              <button
                key={exercise.id}
                onClick={() => setSelectedExercise(exercise)}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${
                  selectedExercise?.id === exercise.id
                    ? 'bg-orange-50 border-orange-500 shadow-xl scale-105'
                    : 'bg-white border-slate-200 hover:border-orange-300 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{exercise.icon || '📝'}</div>
                  {selectedExercise?.id === exercise.id && (
                    <span className="text-orange-600 font-bold text-sm">✓ Selected</span>
                  )}
                </div>
                <h3 className="font-black text-lg text-slate-900 mb-2">
                  {exercise.name}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  {exercise.description}
                </p>
                <div className="text-xs text-slate-500 font-medium">
                  {exercise.estimatedDuration} min
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Configure Practice */}
        {selectedExercise && (
          <div className="mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-6">
              3. Configure your practice
            </h2>
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              
              {/* Difficulty Level */}
              <div className="mb-8">
                <label className="block text-lg font-bold text-slate-900 mb-4">
                  Difficulty level
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {A1_COURSE_CONFIG.difficultyLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedDifficulty(level.id as DifficultyLevel)}
                      className={`p-4 rounded-xl border-2 font-bold transition-all ${
                        selectedDifficulty === level.id
                          ? 'bg-orange-500 border-orange-600 text-white shadow-lg'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-orange-300'
                      }`}
                    >
                      {level.name}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-slate-600 mt-3">
                  {A1_COURSE_CONFIG.difficultyLevels.find(l => l.id === selectedDifficulty)?.description}
                </p>
              </div>

              {/* Unlimited Practice Info */}
              <div className="bg-orange-50 rounded-xl p-6 mb-8 border-2 border-orange-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">∞</span>
                  <div>
                    <h4 className="font-black text-orange-900 mb-2">Unlimited Practice</h4>
                    <p className="text-sm text-orange-800">
                      Exercises will be generated one by one continuously. Practice as long as you want and exit when you're done.
                    </p>
                  </div>
                </div>
              </div>

              {/* Start Button */}
              <div className="text-center">
                <Link
                  href={`/curso-a1/practice?category=${selectedCategory}&exercise=${selectedExercise.id}&difficulty=${selectedDifficulty}`}
                  className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl font-black text-xl hover:from-orange-700 hover:to-red-700 transition-all shadow-2xl hover:scale-105"
                >
                  <span>Start Practice</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* How It Works */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 border-2 border-amber-200">
          <h3 className="text-2xl font-black text-amber-900 mb-6 text-center">
            How does it work?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {A1_COURSE_CONFIG.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">✓</span>
                <span className="text-amber-900 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
