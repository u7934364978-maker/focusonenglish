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

interface Question {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  type?: string;
  context?: string;
  scenario?: string;
  hint?: string;
}

interface Exercise {
  id: string;
  type: string;
  title?: string;
  instructions?: string;
  text?: string; // Para lectura
  questions: Question[];
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
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
      setCurrentQuestionIndex(0);
      setUserAnswers({});
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
    setUserAnswers({});
    setCurrentQuestionIndex(0);
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
        const content = exerciseData.content;
        
        // Transformar el ejercicio al formato esperado
        const questions: Question[] = [];
        
        if (content.questions && Array.isArray(content.questions)) {
          questions.push(...content.questions.map((q: any, idx: number) => ({
            id: q.id || `q_${idx}`,
            question: q.question || q.text || '',
            options: q.options || [],
            correctAnswer: q.correctAnswer || q.answer || '',
            explanation: q.explanation || '',
            type: q.type || exerciseData.type,
            context: q.context || q.scenario || '',
          })));
        } else {
          // Fallback para estructuras simples
          questions.push({
            id: content.id || `q_0`,
            question: content.question || content.text || 'Complete el ejercicio',
            options: content.options || [],
            correctAnswer: content.correctAnswer || content.answer || '',
            explanation: content.explanation || '',
            type: exerciseData.type,
          });
        }

        const exercise: Exercise = {
          id: exerciseData.id || `ex_${Date.now()}`,
          type: exerciseData.type,
          title: content.title || '',
          instructions: content.instructions || '',
          text: content.text || '',
          questions: questions,
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
        questions: [{
          id: 'q1',
          question: `${level} ${selectedCategory} practice question (OpenAI API error)`,
          options: ['Option A', 'Option B', 'Option C', 'Option D'],
          correctAnswer: 'Option A',
          explanation: 'This is a demo exercise due to an error generating the AI exercise.',
        }],
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
    if (!currentExercise || Object.keys(userAnswers).length === 0) return;

    const timeSpent = Math.floor((Date.now() - exerciseStartTime) / 1000);
    
    let correctCount = 0;
    currentExercise.questions.forEach((q, idx) => {
      const userAnswer = userAnswers[idx] || '';
      if (userAnswer.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()) {
        correctCount++;
      }
    });
    
    const allCorrect = correctCount === currentExercise.questions.length;
    setShowResult(true);

    // Actualizar estadísticas
    const newStats: ExerciseStats = {
      total: sessionStats.total + currentExercise.questions.length,
      correct: sessionStats.correct + correctCount,
      incorrect: sessionStats.incorrect + (currentExercise.questions.length - correctCount),
      timeSpent: sessionStats.timeSpent + timeSpent,
    };
    
    saveStats(newStats);
  };

  const nextExercise = () => {
    generateExercise();
  };

  const handleNextQuestion = () => {
    if (currentExercise && currentQuestionIndex < currentExercise.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const accuracy = sessionStats.total > 0 
    ? Math.round((sessionStats.correct / sessionStats.total) * 100) 
    : 0;

  const currentQuestion = currentExercise?.questions[currentQuestionIndex];
  const totalQuestions = currentExercise?.questions.length || 0;
  const progress = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;
  const isAllAnswered = currentExercise?.questions.every((_, idx) => userAnswers[idx]);

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
            {!loading && currentExercise && currentQuestion && (
              <div className="space-y-6">
                {/* Text Passage (Reading Comprehension) */}
                {currentExercise.text && (
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 overflow-y-auto max-h-[400px]">
                    <h4 className="text-xl font-black text-gray-900 mb-4">{currentExercise.title || 'Reading Passage'}</h4>
                    <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {currentExercise.text}
                    </div>
                  </div>
                )}

                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  {/* Progress Bar */}
                  {totalQuestions > 1 && (
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                          Pregunta {currentQuestionIndex + 1} de {totalQuestions}
                        </span>
                        <span className="text-sm font-bold text-violet-600">
                          {Math.round(progress)}% completado
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${gradient} transition-all duration-500 ease-out`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-violet-600" />
                    <span className="text-sm font-semibold text-violet-600 uppercase tracking-tight">
                      {currentExercise.instructions || 'Ejercicio generado con IA'}
                    </span>
                  </div>

                  {/* Context/Scenario if available */}
                  {(currentQuestion.context || currentQuestion.scenario) && (
                    <div className="mb-4 p-4 bg-slate-50 rounded-xl border-l-4 border-slate-300 italic text-slate-600">
                      {currentQuestion.context || currentQuestion.scenario}
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">
                    {currentQuestion.question}
                  </h3>

                  {/* Options (Multiple Choice) */}
                  {currentQuestion.options && currentQuestion.options.length > 0 && (
                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {currentQuestion.options.map((option, index) => {
                        const isSelected = userAnswers[currentQuestionIndex] === option;
                        const isCorrect = option.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim();
                        
                        return (
                          <button
                            key={index}
                            onClick={() => {
                              if (!showResult) {
                                setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: option }));
                              }
                            }}
                            disabled={showResult}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all relative ${
                              isSelected
                                ? showResult
                                  ? isCorrect
                                    ? 'border-green-500 bg-green-50'
                                    : 'border-red-500 bg-red-50'
                                  : 'border-violet-500 bg-violet-50'
                                : showResult && isCorrect
                                  ? 'border-green-500 bg-green-50'
                                  : 'border-gray-200 hover:border-violet-300 bg-white'
                            } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold ${
                                isSelected ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-600'
                              }`}>
                                {String.fromCharCode(65 + index)}
                              </span>
                              <span className="font-medium text-gray-800">{option}</span>
                              
                              {showResult && isSelected && (
                                <div className="ml-auto">
                                  {isCorrect ? (
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                  ) : (
                                    <XCircle className="w-6 h-6 text-red-600" />
                                  )}
                                </div>
                              )}
                              {showResult && !isSelected && isCorrect && (
                                <div className="ml-auto">
                                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Text Input (Fill in the Blank) */}
                  {(!currentQuestion.options || currentQuestion.options.length === 0) && (
                    <div className="mb-8">
                      <div className="relative">
                        <input
                          type="text"
                          value={userAnswers[currentQuestionIndex] || ''}
                          onChange={(e) => {
                            if (!showResult) {
                              setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: e.target.value }));
                            }
                          }}
                          disabled={showResult}
                          placeholder="Escribe tu respuesta aquí..."
                          className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-4 text-lg transition-all ${
                            showResult
                              ? (userAnswers[currentQuestionIndex]?.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim())
                                ? 'border-green-500 bg-green-50 focus:ring-green-100'
                                : 'border-red-500 bg-red-50 focus:ring-red-100'
                              : 'border-gray-300 focus:border-violet-500 focus:ring-violet-100'
                          }`}
                        />
                        {showResult && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            {userAnswers[currentQuestionIndex]?.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim() ? (
                              <CheckCircle2 className="w-6 h-6 text-green-600" />
                            ) : (
                              <XCircle className="w-6 h-6 text-red-600" />
                            )}
                          </div>
                        )}
                      </div>
                      {showResult && userAnswers[currentQuestionIndex]?.toLowerCase().trim() !== currentQuestion.correctAnswer.toLowerCase().trim() && (
                        <p className="mt-3 text-sm text-green-700 font-bold">
                          Respuesta correcta: {currentQuestion.correctAnswer}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Single Question Feedback */}
                  {showResult && currentQuestion.explanation && (
                    <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200">
                      <h5 className="font-black text-slate-900 mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-500" />
                        Explicación
                      </h5>
                      <p className="text-slate-700 leading-relaxed">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  )}

                  {/* Navigation and Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Multi-question Navigation */}
                    {totalQuestions > 1 && (
                      <div className="flex gap-2 flex-1">
                        <button
                          onClick={handlePrevQuestion}
                          disabled={currentQuestionIndex === 0}
                          className="px-4 py-4 rounded-xl border-2 border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-all"
                        >
                          Anterior
                        </button>
                        <button
                          onClick={handleNextQuestion}
                          disabled={currentQuestionIndex === totalQuestions - 1}
                          className="px-4 py-4 rounded-xl border-2 border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-all flex-1"
                        >
                          Siguiente
                        </button>
                      </div>
                    )}

                    {!showResult ? (
                      <button
                        onClick={checkAnswer}
                        disabled={!isAllAnswered}
                        className={`py-4 px-8 rounded-xl font-bold text-white transition-all ${
                          totalQuestions > 1 ? 'flex-1 sm:flex-none sm:min-w-[200px]' : 'flex-1'
                        } ${
                          isAllAnswered
                            ? `bg-gradient-to-r ${gradient} hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0`
                            : 'bg-gray-300 cursor-not-allowed'
                        }`}
                      >
                        Comprobar Todo
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={nextExercise}
                          className={`flex-1 bg-gradient-to-r ${gradient} text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0`}
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
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
