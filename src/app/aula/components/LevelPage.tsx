'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { 
  getCurriculum, 
  getTopicsByCategory, 
  getRandomTopic,
  type CEFRLevel,
  type CurriculumTopic 
} from '@/lib/cambridge-curriculum';
import { ArrowLeft, BookOpen, Sparkles, Play } from 'lucide-react';

interface LevelPageProps {
  level: CEFRLevel;
  levelTitle: string;
  colorFrom: string;
  colorTo: string;
}

export default function LevelPage({ level, levelTitle, colorFrom, colorTo }: LevelPageProps) {
  const router = useRouter();
  const [curriculum, setCurriculum] = useState<ReturnType<typeof getCurriculum> | null>(null);

  useEffect(() => {
    setCurriculum(getCurriculum(level));
  }, [level]);

  const handleStartPractice = (category: string) => {
    // Generate random exercise for this level and category
    router.push(`/aula/${level.toLowerCase()}/practice?category=${category}`);
  };

  const handleRandomPractice = () => {
    // Generate completely random exercise
    router.push(`/aula/${level.toLowerCase()}/practice?random=true`);
  };

  const handleMixedPractice = (count: number = 5) => {
    // Generate mixed practice session with varied exercises
    router.push(`/aula/${level.toLowerCase()}/mixed-practice?count=${count}&variety=true`);
  };

  if (!curriculum) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center">
        <div className="animate-spin text-7xl">📚</div>
      </main>
    );
  }

  const categories = [
    { id: 'grammar', name: 'Grammar', icon: '📝', topics: curriculum.grammar },
    { id: 'vocabulary', name: 'Vocabulary', icon: '📚', topics: curriculum.vocabulary },
    { id: 'reading', name: 'Reading', icon: '📖', topics: curriculum.reading },
    { id: 'writing', name: 'Writing', icon: '✍️', topics: curriculum.writing },
    { id: 'listening', name: 'Listening', icon: '🎧', topics: curriculum.listening },
    { id: 'speaking', name: 'Speaking', icon: '🗣️', topics: curriculum.speaking }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${colorFrom} ${colorTo} text-white shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => router.push('/aula')}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Level Selection</span>
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-black mb-2">{levelTitle}</h1>
              <p className="text-xl text-white/90 mb-1">{curriculum.examName}</p>
              <p className="text-lg text-white/80">{curriculum.description}</p>
            </div>
            <div className="text-8xl opacity-20 hidden md:block">{level}</div>
          </div>
        </div>
      </div>

      {/* Quick Start Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mixed Practice - NUEVO Y DESTACADO */}
          <button
            onClick={() => handleMixedPractice(5)}
            className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 relative overflow-hidden group`}
          >
            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-3 py-1 text-xs font-black rounded-bl-lg">
              ✨ NUEVO
            </div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sparkles className="w-6 h-6" />
              <span className="text-2xl font-black">Práctica Mixta</span>
            </div>
            <p className="text-white/90 mb-3">
              Genera automáticamente 5 ejercicios mezclando tipos y disciplinas
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-white/80">
              <span>📝 Gramática</span>
              <span>•</span>
              <span>📚 Vocabulario</span>
              <span>•</span>
              <span>📖 Lectura</span>
            </div>
          </button>

          {/* Random Practice - Original */}
          <button
            onClick={handleRandomPractice}
            className={`bg-gradient-to-r ${colorFrom} ${colorTo} text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6`}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Play className="w-6 h-6" />
              <span className="text-2xl font-black">Ejercicio Aleatorio</span>
            </div>
            <p className="text-white/90">
              Genera un ejercicio completamente aleatorio del currículo {level}
            </p>
          </button>
        </div>

        {/* Custom Session Options */}
        <div className="mt-4 p-4 bg-white rounded-xl shadow-md border border-gray-200">
          <p className="text-sm font-bold text-gray-700 mb-3">O elige cuántos ejercicios quieres practicar:</p>
          <div className="flex flex-wrap gap-2">
            {[3, 5, 10, 15, 20].map(count => (
              <button
                key={count}
                onClick={() => handleMixedPractice(count)}
                className="px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 font-bold rounded-lg transition-colors text-sm"
              >
                {count} ejercicios
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-orange-600" />
          Choose a Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleStartPractice(category.id)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-left group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-5xl">{category.icon}</div>
                <div className={`bg-gradient-to-r ${colorFrom} ${colorTo} text-white px-4 py-2 rounded-lg font-bold text-sm`}>
                  {category.topics.length} topics
                </div>
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {category.name}
              </h3>

              {category.topics.length > 0 ? (
                <div className="space-y-2">
                  {category.topics.slice(0, 3).map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-orange-500 mt-0.5">•</span>
                      <span>{topic.name}</span>
                    </div>
                  ))}
                  {category.topics.length > 3 && (
                    <div className="text-sm text-gray-500 italic pl-4">
                      +{category.topics.length - 3} more topics
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 italic">Topics available through random practice</p>
              )}

              <div className="mt-4 flex items-center justify-end gap-2 text-sm font-bold text-gray-500 group-hover:text-orange-600 transition-colors">
                <span>Start Practice</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Curriculum Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-black text-gray-900 mb-4">
            📋 {level} Curriculum Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{category.icon}</span>
                  <h4 className="font-bold text-gray-900">{category.name}</h4>
                </div>
                <p className="text-sm text-gray-600">
                  {category.topics.length} topic{category.topics.length !== 1 ? 's' : ''} aligned with Cambridge {curriculum.examName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
