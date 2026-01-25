'use client';

import { useState, useEffect, useRef } from 'react';
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
  Volume2,
  ChevronRight,
  ChevronLeft,
  AlertTriangle,
  Lightbulb,
  Mic,
  Square
} from 'lucide-react';
import { getTopicsByCategory } from '@/lib/cambridge-curriculum';
import ExerciseSkeleton from '@/components/ExerciseSkeleton';
import { EvaluationResponse } from '@/lib/ai/evaluator';
import SmartExerciseSummary from '@/components/exercises/SmartExerciseSummary';
import { supabase } from '@/lib/supabase-client';
import { CEFRLevel, ExerciseCategory, DifficultyLevel } from '@/lib/exercise-types';

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
  translation?: string;
  visualHint?: string;
}

interface Exercise {
  id: string;
  type: string;
  title?: string;
  instructions?: string;
  text?: string;
  questions: Question[];
  topic: string;
  difficulty: DifficultyLevel;
  isFallback?: boolean;
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
  const [validatedQuestions, setValidatedQuestions] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [sessionStats, setSessionStats] = useState<ExerciseStats>({
    total: 0,
    correct: 0,
    incorrect: 0,
    timeSpent: 0,
  });
  const [exerciseStartTime, setExerciseStartTime] = useState<number>(Date.now());
  const [sessionId, setSessionId] = useState<string>('');
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [evaluation, setEvaluation] = useState<Record<number, EvaluationResponse>>({});
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [sessionResults, setSessionResults] = useState<ExerciseStats | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const finishSession = async () => {
    const finalStats = { ...sessionStats };
    const duration = Math.round((Date.now() - exerciseStartTime) / 1000);
    finalStats.timeSpent += duration;
    
    setSessionResults(finalStats);
    setShowSummary(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const durationMinutes = Math.ceil(finalStats.timeSpent / 60);
        
        const { error: sessionError } = await supabase.from('practice_sessions').insert({
          user_id: user.id,
          session_type: `ai_generator_${selectedCategory}`,
          duration_minutes: durationMinutes,
          exercises_completed: finalStats.total,
          correct_answers: finalStats.correct,
          topics_practiced: [selectedCategory || 'general'],
          completed_at: new Date().toISOString()
        });

        if (sessionError) throw sessionError;

        const { data: stats, error: statsFetchError } = await supabase
          .from('user_stats')
          .select('total_exercises_completed, total_points, total_study_time_minutes')
          .eq('user_id', user.id)
          .single();

        if (statsFetchError && statsFetchError.code !== 'PGRST116') {
          throw statsFetchError;
        }

        if (stats) {
          await supabase.from('user_stats').update({
            total_exercises_completed: (stats.total_exercises_completed || 0) + finalStats.total,
            total_points: (stats.total_points || 0) + (finalStats.correct * 5),
            total_study_time_minutes: (stats.total_study_time_minutes || 0) + durationMinutes,
            last_activity_date: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }).eq('user_id', user.id);
        } else {
          await supabase.from('user_stats').insert({
            user_id: user.id,
            total_exercises_completed: finalStats.total,
            total_points: finalStats.correct * 5,
            total_study_time_minutes: durationMinutes,
            last_activity_date: new Date().toISOString(),
            level: 1
          });
        }
      }
    } catch (error) {
      console.error('Error saving session to Supabase:', error);
    }
  };

  const speak = async (text: string) => {
    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      setIsSpeaking(true);
      const response = await fetch('/api/generate-audio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) throw new Error('Error al generar audio');

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;

      audio.onended = () => {
        setIsSpeaking(false);
        URL.revokeObjectURL(url);
      };

      audio.onerror = () => {
        setIsSpeaking(false);
        URL.revokeObjectURL(url);
      };

      await audio.play();
    } catch (error) {
      console.error('Audio error:', error);
      setIsSpeaking(false);
      
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  const startRecording = () => {
    if (recognition) {
      setIsRecording(true);
      recognition.start();
    }
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).webkitSpeechRecognition) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      const recog = new SpeechRecognition();
      recog.continuous = false;
      recog.interimResults = false;
      recog.lang = 'en-US';

      recog.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: transcript }));
        setIsRecording(false);
      };

      recog.onerror = () => setIsRecording(false);
      recog.onend = () => setIsRecording(false);

      setRecognition(recog);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    setSessionId(newSessionId);
    
    const savedStats = localStorage.getItem(`exercise_stats_${level}`);
    if (savedStats) {
      setSessionStats(JSON.parse(savedStats));
    }
  }, [level]);

  useEffect(() => {
    if (selectedCategory) {
      generateExercise();
    } else {
      setCurrentExercise(null);
      setCurrentQuestionIndex(0);
      setUserAnswers({});
      setValidatedQuestions(new Set());
    }
  }, [selectedCategory, difficulty]);

  const saveStats = (newStats: ExerciseStats) => {
    localStorage.setItem(`exercise_stats_${level}`, JSON.stringify(newStats));
    setSessionStats(newStats);
  };

  const generateExercise = async () => {
    if (!selectedCategory) return;

    setLoading(true);
    setApiError(null);
    setUserAnswers({});
    setValidatedQuestions(new Set());
    setCurrentQuestionIndex(0);
    setExerciseStartTime(Date.now());

    try {
      const topics = getTopicsByCategory(level, selectedCategory);
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      
      const response = await fetch('/api/generate-exercise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          exerciseType: getExerciseType(selectedCategory),
          topic: randomTopic?.name || selectedCategory,
          difficulty: difficulty,
          level: level,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Error al conectar con la IA');
      }

      if (data.exercises && data.exercises.length > 0) {
        const exerciseData = data.exercises[0];
        const source = exerciseData.content;
        const questions: Question[] = [];

        if (source.questions && Array.isArray(source.questions)) {
          questions.push(...source.questions.map((q: any, idx: number) => ({
            id: q.id || `q_${idx}`,
            question: q.question || '',
            options: q.options || [],
            correctAnswer: q.correctAnswer || '',
            explanation: q.explanation || '',
          })));
        }

        setCurrentExercise({
          id: exerciseData.id,
          type: exerciseData.type,
          title: source.title,
          instructions: source.instructions,
          text: source.text,
          questions: questions,
          topic: selectedCategory,
          difficulty: difficulty,
          isFallback: exerciseData.id.startsWith('fallback'),
        });
      }
    } catch (error: any) {
      console.error('IA Error:', error);
      setApiError(error.message);
      setCurrentExercise(null);
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
      listening: 'listening-comprehension',
      speaking: 'speaking-analysis',
    };
    return typeMap[category] || 'multiple-choice';
  };

  const checkAnswer = async () => {
    if (!currentExercise || !userAnswers[currentQuestionIndex]) return;

    const q = currentExercise.questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex] || '';
    
    let isCorrect = false;
    
    if (currentExercise.type.includes('analysis') || currentExercise.type.includes('writing') || currentExercise.type.includes('speaking')) {
      setIsEvaluating(true);
      try {
        const response = await fetch('/api/evaluate-response', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: q.question,
            userResponse: userAnswer,
            level: level,
            type: currentExercise.type.includes('writing') ? 'writing' : 'speaking'
          }),
        });

        const data = await response.json();
        if (data.success) {
          setEvaluation(prev => ({ ...prev, [currentQuestionIndex]: data.evaluation }));
          isCorrect = data.evaluation.score >= 70;
        }
      } catch (error) {
        console.error('Error evaluando respuesta:', error);
        isCorrect = userAnswer.trim().length > 20;
      } finally {
        setIsEvaluating(false);
      }
    } else if (currentExercise.type.includes('pronunciation')) {
      const cleanUser = userAnswer.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
      const cleanCorrect = q.correctAnswer.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
      isCorrect = cleanUser === cleanCorrect || cleanUser.includes(cleanCorrect) || cleanCorrect.includes(cleanUser);
    } else {
      isCorrect = userAnswer.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
    }
    
    setValidatedQuestions(prev => new Set(prev).add(currentQuestionIndex));

    const newStats: ExerciseStats = {
      total: sessionStats.total + 1,
      correct: sessionStats.correct + (isCorrect ? 1 : 0),
      incorrect: sessionStats.incorrect + (isCorrect ? 0 : 1),
      timeSpent: sessionStats.timeSpent, 
    };
    
    saveStats(newStats);
  };

  const nextExercise = () => generateExercise();
  const handleNextQuestion = () => {
    if (currentExercise && currentQuestionIndex < currentExercise.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(prev => prev - 1);
  };

  const accuracy = sessionStats.total > 0 ? Math.round((sessionStats.correct / sessionStats.total) * 100) : 0;
  const currentQuestion = currentExercise?.questions[currentQuestionIndex];
  const totalQuestions = currentExercise?.questions.length || 0;
  const progress = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;
  const isCurrentValidated = validatedQuestions.has(currentQuestionIndex);
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className={`bg-gradient-to-r ${gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link href="/ejercicios-inteligentes" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
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
              <div className="text-2xl font-black">{Math.floor(sessionStats.timeSpent / 60)}m</div>
              <div className="text-xs text-white/80">Tiempo</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showSummary && sessionResults && (
          <SmartExerciseSummary
            stats={sessionResults}
            level={level}
            categoryName={EXERCISE_CATEGORIES.find(c => c.id === selectedCategory)?.name || ''}
            onRestart={() => { setShowSummary(false); setSessionResults(null); generateExercise(); }}
            onExit={() => { setShowSummary(false); setSessionResults(null); setSelectedCategory(null); }}
            gradient={gradient}
          />
        )}

        {!selectedCategory && !showSummary && (
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">Selecciona una Categoría</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXERCISE_CATEGORIES.map((category) => {
                const Icon = category.icon;
                return (
                  <button key={category.id} onClick={() => setSelectedCategory(category.id as ExerciseCategory)} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 hover:border-violet-500 hover:shadow-2xl transition-all hover:-translate-y-1 text-left">
                    <Icon className={`w-12 h-12 text-${category.color}-600 mb-4`} />
                    <h3 className="text-xl font-black text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">Practica ejercicios de {category.name.toLowerCase()} nivel {level}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {selectedCategory && !showSummary && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button onClick={() => setSelectedCategory(null)} className="text-gray-600 hover:text-gray-900"><ArrowLeft className="w-5 h-5" /></button>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">{EXERCISE_CATEGORIES.find(c => c.id === selectedCategory)?.name}</h3>
                    <p className="text-sm text-gray-600">Nivel {level} {currentExercise?.topic ? `• ${currentExercise.topic}` : ''}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {(['easy', 'medium', 'hard'] as DifficultyLevel[]).map((diff) => (
                    <button key={diff} onClick={() => setDifficulty(diff)} className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${difficulty === diff ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{diff === 'easy' ? 'Fácil' : diff === 'medium' ? 'Medio' : 'Difícil'}</button>
                  ))}
                </div>
              </div>
            </div>

            {currentExercise?.isFallback && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-center gap-3 text-amber-800">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <p className="text-sm font-medium"><strong>Modo de Respaldo:</strong> La IA está ocupada. Mostrando un ejercicio de nuestra biblioteca de alta calidad.</p>
              </div>
            )}

            {loading && <ExerciseSkeleton />}

            {!loading && currentExercise && currentQuestion && (
              <div className="space-y-6">
                {currentExercise.text && (
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 overflow-y-auto max-h-[400px]">
                    <h4 className="text-xl font-black text-gray-900 mb-4">{currentExercise.title || 'Reading Passage'}</h4>
                    <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">{currentExercise.text}</div>
                  </div>
                )}

                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  {totalQuestions > 1 && (
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Pregunta {currentQuestionIndex + 1} de {totalQuestions}</span>
                        <span className="text-sm font-bold text-violet-600">{Math.round(progress)}% completado</span>
                      </div>
                      <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${gradient} transition-all duration-500 ease-out`} style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-violet-600" />
                    <span className="text-sm font-semibold text-violet-600 uppercase tracking-tight">{currentExercise.instructions || 'Ejercicio generado con IA'}</span>
                  </div>

                  {(currentQuestion.context || currentQuestion.scenario) && (
                    <div className="mb-4 p-4 bg-slate-50 rounded-xl border-l-4 border-slate-300 italic text-slate-600">{currentQuestion.context || currentQuestion.scenario}</div>
                  )}

                  <div className="flex items-center justify-between mb-8 gap-4">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">{currentQuestion.question}</h3>
                    <button onClick={() => speak(currentQuestion.question)} disabled={isSpeaking} className={`p-3 rounded-full transition-all ${isSpeaking ? 'bg-violet-100 text-violet-400' : 'bg-violet-50 text-violet-600 hover:bg-violet-100'}`} title="Escuchar pregunta">
                      <Volume2 className={`w-6 h-6 ${isSpeaking ? 'animate-pulse' : ''}`} />
                    </button>
                  </div>

                  {currentQuestion.options && currentQuestion.options.length > 0 && (
                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {currentQuestion.options.map((option, index) => {
                        const isSelected = userAnswers[currentQuestionIndex] === option;
                        const isCorrect = option.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim();
                        return (
                          <button key={index} onClick={() => { if (!isCurrentValidated) setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: option })); }} disabled={isCurrentValidated} className={`w-full text-left p-4 rounded-xl border-2 transition-all relative ${isSelected ? isCurrentValidated ? isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50' : 'border-violet-500 bg-violet-50' : isCurrentValidated && isCorrect ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-violet-300 bg-white'} ${isCurrentValidated ? 'cursor-default' : 'cursor-pointer'}`}>
                            <div className="flex items-center gap-3">
                              <span className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold ${isSelected ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-600'}`}>{String.fromCharCode(65 + index)}</span>
                              <span className="font-medium text-gray-800">{option}</span>
                              {isCurrentValidated && isSelected && (<div className="ml-auto">{isCorrect ? <CheckCircle2 className="w-6 h-6 text-green-600" /> : <XCircle className="w-6 h-6 text-red-600" />}</div>)}
                              {isCurrentValidated && !isSelected && isCorrect && (<div className="ml-auto"><CheckCircle2 className="w-6 h-6 text-green-600" /></div>)}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {(!currentQuestion.options || currentQuestion.options.length === 0) && (
                    <div className="mb-8 space-y-4">
                      <div className="relative">
                        <textarea rows={currentExercise.type.includes('analysis') ? 4 : 1} value={userAnswers[currentQuestionIndex] || ''} onChange={(e) => { if (!isCurrentValidated) setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: e.target.value })); }} disabled={isCurrentValidated} placeholder={currentExercise.type.includes('speaking') ? "Haz clic en el micrófono y habla..." : "Escribe tu respuesta aquí..."} className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-4 text-lg transition-all ${isCurrentValidated ? 'border-gray-200 bg-gray-50' : 'border-gray-300 focus:border-violet-500 focus:ring-violet-100'}`} />
                        {currentExercise.type.includes('speaking') && !isCurrentValidated && (
                          <button onClick={isRecording ? stopRecording : startRecording} className={`absolute right-4 top-4 p-2 rounded-full transition-all ${isRecording ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                            {isRecording ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {isCurrentValidated && (
                    <div className="space-y-4 mb-8">
                      {evaluation[currentQuestionIndex] ? (
                        <div className="bg-white rounded-2xl border-2 border-violet-100 shadow-sm overflow-hidden">
                          <div className="bg-violet-50 px-6 py-4 border-b-2 border-violet-100 flex items-center justify-between">
                            <h5 className="font-black text-violet-900 flex items-center gap-2"><Brain className="w-5 h-5 text-violet-600" />Análisis de la IA</h5>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-violet-600">Puntuación:</span>
                              <span className={`px-3 py-1 rounded-full text-sm font-black ${evaluation[currentQuestionIndex].score >= 80 ? 'bg-green-100 text-green-700' : evaluation[currentQuestionIndex].score >= 50 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>{evaluation[currentQuestionIndex].score}/100</span>
                            </div>
                          </div>
                          <div className="p-6 space-y-6">
                            <p className="text-gray-700 leading-relaxed italic">"{evaluation[currentQuestionIndex].feedback}"</p>
                            {evaluation[currentQuestionIndex].corrections.length > 0 && (
                              <div>
                                <h6 className="text-sm font-black text-gray-900 mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-500" />Correcciones Sugeridas</h6>
                                <ul className="space-y-2">{evaluation[currentQuestionIndex].corrections.map((corr, idx) => (<li key={idx} className="text-sm bg-red-50 text-red-800 p-3 rounded-lg border border-red-100 font-medium">{corr}</li>))}</ul>
                              </div>
                            )}
                            {evaluation[currentQuestionIndex].suggestions.length > 0 && (
                              <div>
                                <h6 className="text-sm font-black text-gray-900 mb-3 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-violet-500" />Cómo mejorar</h6>
                                <ul className="space-y-2">{evaluation[currentQuestionIndex].suggestions.map((sug, idx) => (<li key={idx} className="text-sm bg-violet-50 text-violet-800 p-3 rounded-lg border border-violet-100">{sug}</li>))}</ul>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        currentQuestion.explanation && (
                          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                            <h5 className="font-black text-slate-900 mb-2 flex items-center gap-2"><Zap className="w-4 h-4 text-amber-500" />Explicación</h5>
                            <p className="text-slate-700 leading-relaxed">{currentQuestion.explanation}</p>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    {!isCurrentValidated ? (
                      <button onClick={checkAnswer} disabled={!userAnswers[currentQuestionIndex] || isEvaluating} className={`flex-1 py-4 px-8 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${userAnswers[currentQuestionIndex] && !isEvaluating ? `bg-gradient-to-r ${gradient} hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0` : 'bg-gray-300 cursor-not-allowed'}`}>
                        {isEvaluating ? <><RefreshCw className="w-5 h-5 animate-spin" />Evaluando...</> : 'Comprobar Respuesta'}
                      </button>
                    ) : (
                      <>
                        {!isLastQuestion ? (
                          <button onClick={handleNextQuestion} className={`flex-1 bg-gradient-to-r ${gradient} text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0`}>Siguiente Pregunta<ChevronRight className="w-5 h-5" /></button>
                        ) : (
                          <div className="flex-1 flex flex-col sm:flex-row gap-4">
                            <button onClick={nextExercise} className={`flex-1 bg-gradient-to-r ${gradient} text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0`}>Más Ejercicios<RefreshCw className="w-5 h-5" /></button>
                            <button onClick={finishSession} className="flex-1 bg-slate-900 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0">Finalizar Sesión<Trophy className="w-5 h-5 text-yellow-400" /></button>
                          </div>
                        )}
                        <button onClick={() => { setSelectedCategory(null); setEvaluation({}); }} className="px-6 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-all">Cambiar Categoría</button>
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
