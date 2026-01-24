'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Sparkles, 
  ArrowLeft, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  BarChart3,
  Trophy,
  Target,
  Zap,
  Book,
  MessageSquare,
  PenTool,
  Volume2
} from 'lucide-react';
import { getTopicsByCategory } from '@/lib/cambridge-curriculum';

type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
type ExerciseCategory = 'grammar' | 'vocabulary' | 'reading' | 'writing' | 'listening' | 'speaking';
type DifficultyLevel = 'easy' | 'medium' | 'hard';

interface Exercise {
  id: string;
  type: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  topic: string;
  difficulty: DifficultyLevel;
}

interface ExerciseStats {
  total: number;
  correct: number;
  incorrect: number;
  timeSpent: number;
}

interface SmartExerciseGeneratorProps {
  level: CEFRLevel;
  levelName: string;
  levelColor: string;
  gradient: string;
}

const EXERCISE_CATEGORIES = [
  { id: 'grammar', name: 'Gramática', icon: Book, color: 'blue' },
  { id: 'vocabulary', name: 'Vocabulario', icon: Sparkles, color: 'purple' },
  { id: 'reading', name: 'Lectura', icon: Book, color: 'green' },
  { id: 'writing', name: 'Escritura', icon: PenTool, color: 'orange' },
  { id: 'listening', name: 'Escucha', icon: Volume2, color: 'red' },
  { id: 'speaking', name: 'Conversación', icon: MessageSquare, color: 'indigo' },
];

export default function SmartExerciseGenerator({ 
  level, 
  levelName, 
  levelColor, 
  gradient 
}: SmartExerciseGeneratorProps) {
  const [selectedCategory, setSelectedCategory] = useState<ExerciseCategory | null>(null);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('medium');
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sessionStats, setSessionStats] = useState<ExerciseStats>({
    total: 0,
    correct: 0,
    incorrect: 0,
    timeSpent: 0,
  });
  const [exerciseStartTime, setExerciseStartTime] = useState<number>(Date.now());
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    // Generar session ID único
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    setSessionId(newSessionId);
    
    // Cargar stats de localStorage
    const savedStats = localStorage.getItem(`exercise_stats_${level}`);
    if (savedStats) {
      setSessionStats(JSON.parse(savedStats));
    }
  }, [level]);

  // Efecto para generar ejercicio automáticamente al cambiar categoría o dificultad
  useEffect(() => {
    if (selectedCategory) {
      generateExercise();
    } else {
      setCurrentExercise(null);
    }
  }, [selectedCategory, difficulty]);

  const saveStats = (newStats: ExerciseStats) => {
    localStorage.setItem(`exercise_stats_${level}`, JSON.stringify(newStats));
    setSessionStats(newStats);
  };

  const generateExercise = async () => {
    if (!selectedCategory) return;

    setLoading(true);
    setShowResult(false);
    setUserAnswer('');
    setExerciseStartTime(Date.now());

    try {
      // Obtener un tema aleatorio del currículo para esta categoría y nivel
      const topics = getTopicsByCategory(level, selectedCategory);
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      
      // Llamar a la API para generar ejercicio con IA
      const response = await fetch('/api/generate-exercise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-session-id': sessionId,
        },
        body: JSON.stringify({
          exerciseType: getExerciseType(selectedCategory),
          topic: randomTopic?.name || selectedCategory,
          topicKeywords: randomTopic?.keywords || [],
          difficulty: difficulty,
          level: level,
          count: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate exercise');
      }

      const data = await response.json();
      
      if (data.success && data.exercises && data.exercises.length > 0) {
        const exerciseData = data.exercises[0];
        
        // Transformar el ejercicio al formato esperado
        const exercise: Exercise = {
          id: exerciseData.id || `ex_${Date.now()}`,
          type: exerciseData.type,
          question: exerciseData.content.question || exerciseData.content.text || 'Complete el ejercicio',
          options: exerciseData.content.options || [],
          correctAnswer: exerciseData.content.correctAnswer || exerciseData.content.answer || '',
          explanation: exerciseData.content.explanation || '',
          topic: selectedCategory,
          difficulty: difficulty,
        };
        
        setCurrentExercise(exercise);
      } else {
        throw new Error('No exercise data received');
      }
    } catch (error) {
      console.error('Error generating exercise:', error);
      
      // Ejercicio de fallback
      const fallbackExercise: Exercise = {
        id: `fallback_${Date.now()}`,
        type: 'multiple-choice',
        question: `${level} ${selectedCategory} practice question (OpenAI API not configured)`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: 'Option A',
        explanation: 'This is a demo exercise. Configure OpenAI API key for AI-generated exercises.',
        topic: selectedCategory,
        difficulty: difficulty,
      };
      
      setCurrentExercise(fallbackExercise);
    } finally {
      setLoading(false);
    }
  };

  const getExerciseType = (category: ExerciseCategory): string => {
    const typeMap: Record<ExerciseCategory, string> = {
      grammar: 'fill-blank',
      vocabulary: 'multiple-choice',
      reading: 'reading-comprehension',
      writing: 'writing-analysis',
      listening: 'pronunciation-practice',
      speaking: 'speaking-analysis',
    };
    return typeMap[category] || 'multiple-choice';
  };

  const checkAnswer = () => {
    if (!currentExercise || !userAnswer) return;

    const timeSpent = Math.floor((Date.now() - exerciseStartTime) / 1000);
    const correct = userAnswer.toLowerCase().trim() === currentExercise.correctAnswer.toLowerCase().trim();
    
    setIsCorrect(correct);
    setShowResult(true);

    // Actualizar estadísticas
    const newStats: ExerciseStats = {
      total: sessionStats.total + 1,
      correct: sessionStats.correct + (correct ? 1 : 0),
      incorrect: sessionStats.incorrect + (correct ? 0 : 1),
      timeSpent: sessionStats.timeSpent + timeSpent,
    };
    
    saveStats(newStats);
  };

  const nextExercise = () => {
    generateExercise();
  };

  const accuracy = sessionStats.total > 0 
    ? Math.round((sessionStats.correct / sessionStats.total) * 100) 
    : 0;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${gradient} text-white`}>
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
                <div className="text-2xl font-black">{level}</div>
                <div className="text-sm text-white/80">{levelName}</div>
              </div>
              <Brain className="w-10 h-10" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <Target className="w-6 h-6 mb-2" />
              <div className="text-2xl font-black">{sessionStats.total}</div>
              <div className="text-xs text-white/80">Ejercicios</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <CheckCircle2 className="w-6 h-6 mb-2" />
              <div className="text-2xl font-black">{sessionStats.correct}</div>
              <div className="text-xs text-white/80">Correctos</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <Trophy className="w-6 h-6 mb-2" />
              <div className="text-2xl font-black">{accuracy}%</div>
              <div className="text-xs text-white/80">Precisión</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <Clock className="w-6 h-6 mb-2" />
              <div className="text-2xl font-black">
                {Math.floor(sessionStats.timeSpent / 60)}m
              </div>
              <div className="text-xs text-white/80">Tiempo</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Selection */}
        {!selectedCategory && (
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">
              Selecciona una Categoría
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXERCISE_CATEGORIES.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id as ExerciseCategory);
                    }}
                    className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 hover:border-violet-500 hover:shadow-2xl transition-all hover:-translate-y-1 text-left"
                  >
                    <Icon className={`w-12 h-12 text-${category.color}-600 mb-4`} />
                    <h3 className="text-xl font-black text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Practica ejercicios de {category.name.toLowerCase()} nivel {level}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Exercise Area */}
        {selectedCategory && (
          <div className="max-w-4xl mx-auto">
            {/* Category Header */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">
                      {EXERCISE_CATEGORIES.find(c => c.id === selectedCategory)?.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Nivel {level} {currentExercise?.topic ? `• ${currentExercise.topic}` : ''}
                    </p>
                  </div>
                </div>

                {/* Difficulty Selector */}
                <div className="flex gap-2">
                  {(['easy', 'medium', 'hard'] as DifficultyLevel[]).map((diff) => (
                    <button
                      key={diff}
                      onClick={() => {
                        setDifficulty(diff);
                      }}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                        difficulty === diff
                          ? 'bg-violet-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {diff === 'easy' ? 'Fácil' : diff === 'medium' ? 'Medio' : 'Difícil'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Loading */}
            {loading && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
                <div className="animate-spin text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  Generando Ejercicio...
                </h3>
                <p className="text-gray-600">
                  Creando contenido personalizado con IA
                </p>
              </div>
            )}

            {/* Exercise */}
            {!loading && currentExercise && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-violet-600" />
                  <span className="text-sm font-semibold text-violet-600">
                    Ejercicio generado con IA
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  {currentExercise.question}
                </h3>

                {/* Options (Multiple Choice) */}
                {currentExercise.options && currentExercise.options.length > 0 && (
                  <div className="space-y-3 mb-8">
                    {currentExercise.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setUserAnswer(option)}
                        disabled={showResult}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                          userAnswer === option
                            ? 'border-violet-500 bg-violet-50'
                            : 'border-gray-200 hover:border-violet-300 bg-white'
                        } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <span className="font-semibold">{String.fromCharCode(65 + index)}.</span> {option}
                      </button>
                    ))}
                  </div>
                )}

                {/* Text Input (Fill in the Blank) */}
                {(!currentExercise.options || currentExercise.options.length === 0) && (
                  <div className="mb-8">
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      disabled={showResult}
                      placeholder="Escribe tu respuesta aquí..."
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-violet-500 focus:ring-4 focus:ring-violet-100 text-lg"
                    />
                  </div>
                )}

                {/* Result */}
                {showResult && (
                  <div className={`rounded-xl p-6 mb-6 ${
                    isCorrect 
                      ? 'bg-green-50 border-2 border-green-500' 
                      : 'bg-red-50 border-2 border-red-500'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-8 h-8 text-green-600" />
                          <span className="text-2xl font-black text-green-900">¡Correcto!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-8 h-8 text-red-600" />
                          <span className="text-2xl font-black text-red-900">Incorrecto</span>
                        </>
                      )}
                    </div>
                    
                    {!isCorrect && (
                      <p className="text-gray-700 mb-2">
                        <strong>Respuesta correcta:</strong> {currentExercise.correctAnswer}
                      </p>
                    )}
                    
                    {currentExercise.explanation && (
                      <p className="text-gray-700">
                        <strong>Explicación:</strong> {currentExercise.explanation}
                      </p>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {!showResult ? (
                    <button
                      onClick={checkAnswer}
                      disabled={!userAnswer}
                      className={`flex-1 py-4 rounded-xl font-bold text-white transition-all ${
                        userAnswer
                          ? `bg-gradient-to-r ${gradient} hover:shadow-lg`
                          : 'bg-gray-300 cursor-not-allowed'
                      }`}
                    >
                      Comprobar Respuesta
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={nextExercise}
                        className={`flex-1 bg-gradient-to-r ${gradient} text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                      >
                        Siguiente Ejercicio
                        <RefreshCw className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className="px-6 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-all"
                      >
                        Cambiar Categoría
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
