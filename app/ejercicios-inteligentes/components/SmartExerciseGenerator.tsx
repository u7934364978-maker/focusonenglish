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
  AlertTriangle,
  Lightbulb,
  Mic,
  Square
} from 'lucide-react';
import { getTopicsByCategory } from '@/lib/cambridge-curriculum';
import ExerciseSkeleton from '@/components/ExerciseSkeleton';
import { EvaluationResponse } from '@/lib/ai/evaluator';
import SmartExerciseSummary from '@/components/exercises/SmartExerciseSummary';
import VoiceWaveform from './VoiceWaveform';
import { supabase } from '@/lib/supabase-client';
import { CEFRLevel, ExerciseCategory, DifficultyLevel } from '@/lib/exercise-types';

interface Question {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  correctiveFeedback?: string;
  suggestions?: string[];
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
  { id: 'dictation', name: 'Dictado', icon: Volume2, color: 'yellow' },
  { id: 'listening', name: 'Escucha', icon: Volume2, color: 'red' },
  { id: 'speaking', name: 'Conversación', icon: MessageSquare, color: 'indigo' },
  { id: 'roleplay', name: 'Roleplay AI', icon: MessageSquare, color: 'pink' },
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
  const [roleplayScenario, setRoleplayScenario] = useState<any>(null);
  const [conversation, setConversation] = useState<{ role: 'ai' | 'user'; content: string }[]>([]);
  const [isProcessingAI, setIsProcessingAI] = useState(false);
  const [evaluation, setEvaluation] = useState<Record<number, EvaluationResponse>>({});
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [sessionResults, setSessionResults] = useState<ExerciseStats | null>(null);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [consecutiveIncorrect, setConsecutiveIncorrect] = useState(0);
  const [isChallengeMode, setIsChallengeMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer'>('nova');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const logErrorToSupabase = async (q: Question, userAnswer: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Check if error already exists for this topic
      const { data: existingError } = await supabase
        .from('user_errors')
        .select('*')
        .eq('user_id', user.id)
        .eq('topic', currentExercise?.topic || selectedCategory)
        .eq('wrong_answer', userAnswer)
        .single();

      if (existingError) {
        await supabase
          .from('user_errors')
          .update({ 
            count: (existingError.count || 1) + 1,
            last_seen: new Date().toISOString()
          })
          .eq('id', existingError.id);
      } else {
        await supabase
          .from('user_errors')
          .insert({
            user_id: user.id,
            category: selectedCategory,
            topic: currentExercise?.topic || selectedCategory,
            wrong_answer: userAnswer,
            correct_answer: q.correctAnswer,
            error_type: currentExercise?.type,
            count: 1
          });
      }
    } catch (error) {
      console.error('Error logging to user_errors:', error);
    }
  };

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
          .select('total_exercises_completed, total_points, total_study_time_minutes, current_streak, last_practice_date')
          .eq('user_id', user.id)
          .single();

        if (statsFetchError && statsFetchError.code !== 'PGRST116') {
          throw statsFetchError;
        }

        // Calculate XP with multipliers
        const baseXP = finalStats.correct * 5;
        const diffMultiplier = difficulty === 'hard' ? 2 : difficulty === 'medium' ? 1.5 : 1;
        const challengeMultiplier = isChallengeMode ? 1.2 : 1;
        const totalXP = Math.round(baseXP * diffMultiplier * challengeMultiplier);

        // Streak logic
        let newStreak = 1;
        const today = new Date().toISOString().split('T')[0];
        
        if (stats?.last_practice_date) {
          const lastDate = new Date(stats.last_practice_date);
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];
          
          if (stats.last_practice_date === today) {
            newStreak = stats.current_streak || 1;
          } else if (stats.last_practice_date === yesterdayStr) {
            newStreak = (stats.current_streak || 0) + 1;
          }
        }

        if (stats) {
          await supabase.from('user_stats').update({
            total_exercises_completed: (stats.total_exercises_completed || 0) + finalStats.total,
            total_points: (stats.total_points || 0) + totalXP,
            total_study_time_minutes: (stats.total_study_time_minutes || 0) + durationMinutes,
            current_streak: newStreak,
            last_practice_date: today,
            last_activity_date: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }).eq('user_id', user.id);
        } else {
          await supabase.from('user_stats').insert({
            user_id: user.id,
            total_exercises_completed: finalStats.total,
            total_points: totalXP,
            total_study_time_minutes: durationMinutes,
            current_streak: newStreak,
            last_practice_date: today,
            last_activity_date: new Date().toISOString(),
            level: 1
          });
        }
      }
    } catch (error) {
      console.error('Error saving session to Supabase:', error);
    }
  };

  const sendRoleplayMessage = async (message: string) => {
    if (!message.trim() || isProcessingAI) return;

    const newUserMessage = { role: 'user' as const, content: message };
    setConversation(prev => [...prev, newUserMessage]);
    setIsProcessingAI(true);

    try {
      const response = await fetch('/api/roleplay-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenario: roleplayScenario,
          history: conversation,
          message: message,
          level: level
        }),
      });

      const data = await response.json();
      if (data.success) {
        setConversation(prev => [...prev, { role: 'ai', content: data.reply }]);
        speak(data.reply); // Automatically speak the AI's reply
        if (data.isGoalAchieved) {
          // Finalizar roleplay con éxito
          const newStats: ExerciseStats = {
            total: sessionStats.total + 1,
            correct: sessionStats.correct + 1,
            incorrect: sessionStats.incorrect,
            timeSpent: sessionStats.timeSpent,
          };
          saveStats(newStats);
          setValidatedQuestions(prev => new Set(prev).add(currentQuestionIndex));
        }
      }
    } catch (error) {
      console.error('Roleplay error:', error);
    } finally {
      setIsProcessingAI(false);
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
        body: JSON.stringify({ text, voice: selectedVoice }),
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
    let timer: NodeJS.Timeout;
    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerActive) {
      checkAnswer();
    }
    return () => clearInterval(timer);
  }, [timeLeft, isTimerActive]);

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
      setEvaluation({});
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
    setEvaluation({});
    setCurrentQuestionIndex(0);
    setExerciseStartTime(Date.now());
    setTimeLeft(30);
    setIsTimerActive(isChallengeMode);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      let recentErrors: any[] = [];
      if (user && selectedCategory) {
        const { data: errors } = await supabase
          .from('user_errors')
          .select('topic, wrong_answer, correct_answer')
          .eq('user_id', user.id)
          .eq('category', selectedCategory)
          .order('count', { ascending: false })
          .limit(5);
        recentErrors = errors || [];
      }

      const topics = selectedCategory ? getTopicsByCategory(level, selectedCategory) : [];
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      
      const response = await fetch('/api/generate-exercise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          exerciseType: getExerciseType(selectedCategory),
          topic: randomTopic?.name || selectedCategory,
          difficulty: difficulty,
          level: level,
          recentErrors: recentErrors // Pass errors to AI
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

        if (exerciseData.type === 'roleplay' && source.scenario) {
          setRoleplayScenario(source.scenario);
          setConversation([{ role: 'ai', content: source.scenario.startingMessage }]);
          speak(source.scenario.startingMessage);
          questions.push({
            id: 'roleplay_1',
            question: source.scenario.goal,
            correctAnswer: 'Roleplay completion',
            explanation: source.scenario.description
          });
        } else if (source.questions && Array.isArray(source.questions)) {
          questions.push(...source.questions.map((q: any, idx: number) => ({
            id: q.id || `q_${idx}`,
            question: q.question || '',
            options: q.options || [],
            correctAnswer: q.correctAnswer || '',
            explanation: q.explanation || '',
            correctiveFeedback: q.correctiveFeedback || '',
            suggestions: q.suggestions || [],
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
      dictation: 'dictation',
      listening: 'listening-comprehension',
      speaking: 'speaking-analysis',
      roleplay: 'roleplay',
      pronunciation: 'pronunciation-practice',
      'exam-practice': 'multiple-choice',
    };
    return typeMap[category] || 'multiple-choice';
  };

  const checkAnswer = async () => {
    if (!currentExercise) return;
    if (!userAnswers[currentQuestionIndex] && timeLeft > 0) return;

    setIsTimerActive(false);
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

    // Dynamic Difficulty Logic
    if (isCorrect) {
      setConsecutiveIncorrect(0);
      const newCorrect = consecutiveCorrect + 1;
      setConsecutiveCorrect(newCorrect);
      
      if (newCorrect >= 3) {
        if (difficulty === 'easy') setDifficulty('medium');
        else if (difficulty === 'medium') setDifficulty('hard');
        setConsecutiveCorrect(0); // Reset after upgrade
      }
    } else {
      logErrorToSupabase(q, userAnswer);
      setConsecutiveCorrect(0);
      const newIncorrect = consecutiveIncorrect + 1;
      setConsecutiveIncorrect(newIncorrect);
      
      if (newIncorrect >= 2) {
        if (difficulty === 'hard') setDifficulty('medium');
        else if (difficulty === 'medium') setDifficulty('easy');
        setConsecutiveIncorrect(0); // Reset after downgrade
      }
    }
    
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
      setTimeLeft(30);
      setIsTimerActive(isChallengeMode);
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
              <Zap className={`w-6 h-6 mb-2 ${consecutiveCorrect > 0 ? 'text-yellow-300 animate-pulse' : ''}`} />
              <div className="text-2xl font-black">{consecutiveCorrect}</div>
              <div className="text-xs text-white/80">Combo</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <Trophy className="w-6 h-6 mb-2" />
              <div className="text-2xl font-black">{accuracy}%</div>
              <div className="text-xs text-white/80">Precisión</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <Clock className={`w-6 h-6 mb-2 ${isChallengeMode && timeLeft < 10 ? 'text-red-400 animate-bounce' : ''}`} />
              <div className="text-2xl font-black">{isChallengeMode ? `${timeLeft}s` : `${Math.floor(sessionStats.timeSpent / 60)}m`}</div>
              <div className="text-xs text-white/80">{isChallengeMode ? 'Tiempo Restante' : 'Tiempo'}</div>
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
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 p-8 max-w-2xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${isChallengeMode ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                  <Zap className={`w-8 h-8 ${isChallengeMode ? 'animate-pulse' : ''}`} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900">Modo Desafío</h3>
                  <p className="text-sm text-gray-500">30 segundos por pregunta • Multiplicador XP 1.2x</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChallengeMode(!isChallengeMode)}
                className={`w-16 h-8 rounded-full transition-all relative ${isChallengeMode ? 'bg-orange-500' : 'bg-gray-200'}`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-all ${isChallengeMode ? 'right-1' : 'left-1'}`} />
              </button>
            </div>

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
                <div className="flex flex-col items-end gap-2">
                  <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
                    {(['easy', 'medium', 'hard'] as DifficultyLevel[]).map((diff) => (
                      <button key={diff} onClick={() => setDifficulty(diff)} className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${difficulty === diff ? 'bg-white text-violet-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>{diff === 'easy' ? 'Fácil' : diff === 'medium' ? 'Medio' : 'Difícil'}</button>
                    ))}
                  </div>
                  <div className="flex gap-1 bg-violet-50 p-1 rounded-xl">
                    {(['nova', 'alloy', 'echo', 'onyx', 'fable', 'shimmer'] as const).map((v) => (
                      <button key={v} onClick={() => setSelectedVoice(v)} className={`px-2 py-1 rounded-lg font-bold text-[10px] uppercase transition-all ${selectedVoice === v ? 'bg-violet-600 text-white' : 'text-violet-400 hover:text-violet-600'}`} title={`Voz: ${v}`}>{v}</button>
                    ))}
                  </div>
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

            {!loading && currentExercise?.type === 'roleplay' && roleplayScenario && (
              <div key={currentExercise.id} className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-pink-100 p-3 rounded-2xl">
                      <MessageSquare className="w-8 h-8 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900">{roleplayScenario.title}</h3>
                      <p className="text-sm text-gray-600">{roleplayScenario.context}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 mb-8 border-l-4 border-pink-400">
                    <h4 className="font-bold text-gray-900 mb-2">Tu Objetivo:</h4>
                    <p className="text-gray-700">{roleplayScenario.goal}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {roleplayScenario.tasks.map((task: string, i: number) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-bold text-pink-600 border border-pink-100">
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 max-h-[400px] overflow-y-auto p-4 bg-gray-50 rounded-2xl">
                    {conversation.map((msg, i) => (
                      <div key={i} className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-[80%] p-4 rounded-2xl ${
                          msg.role === 'ai' 
                            ? 'bg-white border border-gray-200 text-gray-800' 
                            : 'bg-pink-600 text-white shadow-md'
                        }`}>
                          <p className="text-sm font-bold mb-1 opacity-70">
                            {msg.role === 'ai' ? roleplayScenario.aiCharacter.name : 'Tú'}
                          </p>
                          <p className="leading-relaxed">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                    {isProcessingAI && (
                      <div className="flex justify-start">
                        <div className="bg-white border border-gray-200 p-4 rounded-2xl">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      rows={2}
                      value={userAnswers[currentQuestionIndex] || ''}
                      onChange={(e) => setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: e.target.value }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          sendRoleplayMessage((e.target as HTMLTextAreaElement).value);
                          setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: '' }));
                        }
                      }}
                      placeholder="Escribe tu respuesta y presiona Enter..."
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all text-lg pr-32"
                      disabled={isProcessingAI || validatedQuestions.has(currentQuestionIndex)}
                    />
                    <div className="absolute right-4 bottom-4 flex gap-2 items-center">
                      <VoiceWaveform isRecording={isRecording} color="pink" />
                      <button 
                        onClick={isRecording ? stopRecording : startRecording}
                        className={`p-2 rounded-full transition-all ${isRecording ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                      >
                        {isRecording ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                      </button>
                      <button 
                        onClick={() => {
                          const val = userAnswers[currentQuestionIndex];
                          if (val) {
                            sendRoleplayMessage(val);
                            setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: '' }));
                          }
                        }}
                        disabled={isProcessingAI || validatedQuestions.has(currentQuestionIndex)}
                        className="bg-pink-600 text-white p-2 rounded-xl hover:bg-pink-700 transition-all shadow-lg shadow-pink-200 disabled:opacity-50"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {validatedQuestions.has(currentQuestionIndex) && (
                    <div className="mt-8 p-6 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Trophy className="w-10 h-10 text-green-600" />
                        <div>
                          <h4 className="font-black text-green-900 text-lg">¡Misión Cumplida!</h4>
                          <p className="text-green-700">Has logrado completar el escenario de roleplay.</p>
                        </div>
                      </div>
                      <button 
                        onClick={nextExercise}
                        className="bg-green-600 text-white px-8 py-3 rounded-xl font-black hover:bg-green-700 transition-all shadow-lg shadow-green-200"
                      >
                        Siguiente Ejercicio
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {!loading && currentExercise && currentQuestion && currentExercise.type !== 'roleplay' && (
              <div key={`${currentExercise.id}-${currentQuestionIndex}`} className="space-y-6">
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
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight">{currentQuestion.question}</h3>
                      {currentExercise.type === 'dictation' && (
                        <p className="text-sm text-violet-600 font-medium mt-1">Haz clic en el altavoz para escuchar la frase.</p>
                      )}
                    </div>
                    <button 
                      onClick={() => speak(currentExercise.type === 'dictation' ? currentQuestion.correctAnswer : currentQuestion.question)} 
                      disabled={isSpeaking} 
                      className={`p-6 rounded-2xl transition-all ${isSpeaking ? 'bg-violet-100 text-violet-400' : 'bg-violet-50 text-violet-600 hover:bg-violet-100 shadow-sm'}`} 
                      title={currentExercise.type === 'dictation' ? 'Escuchar frase' : 'Escuchar pregunta'}
                    >
                      <Volume2 className={`w-10 h-10 ${isSpeaking ? 'animate-pulse' : ''}`} />
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
                          <div className="absolute right-4 top-4 flex items-center gap-2">
                            <VoiceWaveform isRecording={isRecording} color="violet" />
                            <button onClick={isRecording ? stopRecording : startRecording} className={`p-2 rounded-full transition-all ${isRecording ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                              {isRecording ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                            </button>
                          </div>
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
                            {evaluation[currentQuestionIndex].metrics && (
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                                {Object.entries(evaluation[currentQuestionIndex].metrics).map(([key, val]) => (
                                  <div key={key} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-1">{key === 'grammar' ? 'Gramática' : key === 'vocabulary' ? 'Vocabulario' : key === 'fluency' ? 'Fluidez' : key === 'pronunciation' ? 'Pronunciación' : 'Coherencia'}</div>
                                    <div className={`text-lg font-black ${Number(val) >= 80 ? 'text-green-600' : Number(val) >= 50 ? 'text-amber-600' : 'text-red-600'}`}>{val}%</div>
                                  </div>
                                ))}
                              </div>
                            )}
                            <p className="text-gray-700 leading-relaxed italic">&quot;{evaluation[currentQuestionIndex].feedback}&quot;</p>
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
                        <div className="space-y-4">
                          {currentQuestion.explanation && (
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                              <h5 className="font-black text-slate-900 mb-2 flex items-center gap-2"><Zap className="w-4 h-4 text-amber-500" />Explicación</h5>
                              <p className="text-slate-700 leading-relaxed">{currentQuestion.explanation}</p>
                            </div>
                          )}
                          
                          {userAnswers[currentQuestionIndex]?.toLowerCase().trim() !== currentQuestion.correctAnswer.toLowerCase().trim() && currentQuestion.correctiveFeedback && (
                            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                              <h5 className="font-black text-red-900 mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-500" />¿Por qué es incorrecto?</h5>
                              <p className="text-red-700 leading-relaxed">{currentQuestion.correctiveFeedback}</p>
                            </div>
                          )}

                          {currentQuestion.suggestions && currentQuestion.suggestions.length > 0 && (
                            <div className="bg-violet-50 rounded-xl p-6 border border-violet-200">
                              <h5 className="font-black text-violet-900 mb-2 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-violet-500" />Sugerencias Pro</h5>
                              <ul className="list-disc list-inside space-y-1">
                                {currentQuestion.suggestions.map((sug, idx) => (
                                  <li key={idx} className="text-violet-700 text-sm leading-relaxed">{sug}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
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
