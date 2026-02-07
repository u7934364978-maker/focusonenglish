'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Mic, Power, RotateCcw, MessageSquare, 
  ShieldAlert, ArrowLeft, CheckCircle2, Target, 
  Trophy, Star, Activity, Languages, Sparkles,
  Loader2
} from 'lucide-react';
import { useSpeakingCoach } from '@/hooks/use-speaking-coach';
import { SPEAKING_SCENARIOS } from '@/lib/ai/speaking-scenarios';
import VoiceVisualizer from '@/components/metodologias/VoiceVisualizer';
import { Navigation } from '@/components/sections/Navigation';
import { Progress } from '@/components/ui/progress';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speaking Coach con IA: Practica Conversación en Inglés Online',
  description: 'Practica tu inglés con nuestro tutor de IA. Conversaciones reales, feedback instantáneo y misiones personalizadas para mejorar tu fluidez.',
  keywords: ['hablar ingles ia', 'speaking coach online', 'practicar ingles gratis', 'tutor ingles inteligente'],
};

const AI_TUTORS = [
  {
    id: 'tutor1',
    name: 'Emma',
    avatar: '👩‍🏫',
    specialty: 'Business English',
    personality: 'Professional & Friendly',
    difficulty: 'Intermediate'
  },
  {
    id: 'tutor2',
    name: 'James',
    avatar: '👨‍💼',
    specialty: 'Conversational English',
    personality: 'Patient & Encouraging',
    difficulty: 'Beginner'
  },
  {
    id: 'tutor3',
    name: 'Sofia',
    avatar: '👩‍🎓',
    specialty: 'IELTS Preparation',
    personality: 'Academic & Structured',
    difficulty: 'Advanced'
  }
];

export default function PracticaIAPage() {
  const router = useRouter();
  const [selectedTutor, setSelectedTutor] = useState(AI_TUTORS[0]);
  const [selectedScenario, setSelectedScenario] = useState(SPEAKING_SCENARIOS[0]);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [translatingIds, setTranslatingIds] = useState<Set<string>>(new Set());
  const [currentHint, setCurrentHint] = useState<{ keyword: string; starter: string; sentence: string } | null>(null);
  const [isLoadingHint, setIsLoadingHint] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [liveFluency, setLiveFluency] = useState(0);
  
  const { 
    isConnected, 
    isConnecting, 
    isListening, 
    isSpeaking, 
    transcript, 
    error, 
    turnCount,
    lastFeedback,
    objectivesMet,
    startCoachSession, 
    startRecording,
    completeSession
  } = useSpeakingCoach();

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [transcript]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isConnected && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isConnected, timeLeft]);

  useEffect(() => {
    if (isListening) {
      const lastMsg = transcript[transcript.length - 1];
      if (lastMsg && lastMsg.role === 'user') {
        const words = lastMsg.text.split(' ').length;
        setLiveFluency(Math.min(100, words * 5));
      }
    } else {
      const timeout = setTimeout(() => setLiveFluency(0), 2000);
      return () => clearTimeout(timeout);
    }
  }, [transcript, isListening]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = async () => {
    // In a real app, level would come from user profile
    await startCoachSession(selectedScenario.id, selectedTutor.id, 'B2');
    await startRecording();
  };

  const handleFinish = async () => {
    await completeSession('Session completed by user. The student practiced well.');
    router.push('/dashboard');
  };

  const handleTranslate = async (messageId: string, text: string) => {
    if (translations[messageId]) {
      // Toggle off if already translated (or just leave it)
      return;
    }

    setTranslatingIds(prev => new Set(prev).add(messageId));
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      const data = await response.json();
      if (data.success) {
        setTranslations(prev => ({ ...prev, [messageId]: data.translation }));
      }
    } catch (err) {
      console.error('Translation error:', err);
    } finally {
      setTranslatingIds(prev => {
        const next = new Set(prev);
        next.delete(messageId);
        return next;
      });
    }
  };

  const getHint = async () => {
    if (isLoadingHint) return;
    setIsLoadingHint(true);
    setCurrentHint(null);

    try {
      // Format messages for the API
      const formattedMessages = transcript.map(m => ({
        role: m.role,
        content: m.text
      }));

      const response = await fetch('/api/ai-tutor/hint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: formattedMessages,
          scenario: selectedScenario.title,
          level: 'B2' // Should be dynamic
        })
      });
      const data = await response.json();
      if (data.success) {
        setCurrentHint(data.hint);
      }
    } catch (err) {
      console.error('Hint error:', err);
    } finally {
      setIsLoadingHint(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <button 
              onClick={() => isConnected ? setShowExitConfirm(true) : router.back()}
              className="flex items-center gap-2 text-slate-500 hover:text-coral-600 transition-colors mb-2 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Volver
            </button>
            <h1 className="text-4xl font-black text-slate-900 flex items-center gap-3">
              AI Speaking Coach
              <span className="text-sm bg-coral-100 text-coral-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Beta
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {!isConnected ? (
              <button
                onClick={handleStart}
                disabled={isConnecting}
                className="bg-coral-600 hover:bg-coral-700 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all shadow-xl active:scale-95 disabled:opacity-50"
              >
                {isConnecting ? (
                  <Activity className="w-5 h-5 animate-spin" />
                ) : (
                  <Power className="w-5 h-5" />
                )}
                {isConnecting ? 'Iniciando...' : 'Comenzar Sesión'}
              </button>
            ) : (
              <button
                onClick={() => setShowExitConfirm(true)}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all shadow-xl active:scale-95"
              >
                <RotateCcw className="w-5 h-5" />
                Finalizar Práctica
              </button>
            )}
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center gap-3 text-red-700 animate-in fade-in slide-in-from-top-4">
            <ShieldAlert className="w-6 h-6" />
            <p className="font-bold">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar: Config & Objectives */}
          <div className="lg:col-span-4 space-y-6">
            {/* Mission Card */}
            <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center text-xl">
                  {selectedScenario.icon}
                </div>
                <div>
                  <h3 className="font-black text-slate-900">Misión Actual</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                    {selectedScenario.title}
                  </p>
                </div>
              </div>
              
              <p className="text-slate-600 text-sm mb-6 leading-relaxed italic">
                &quot;{selectedScenario.mission}&quot;
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-bold text-slate-700">Progreso</span>
                  <span className="text-coral-600 font-black">
                    {Math.round((objectivesMet.length / selectedScenario.objectives.length) * 100)}%
                  </span>
                </div>
                <Progress value={(objectivesMet.length / selectedScenario.objectives.length) * 100} className="h-2" />
                
                <div className="mt-6 space-y-3">
                  {selectedScenario.objectives.map((obj, idx) => (
                    <motion.div 
                      key={idx}
                      initial={false}
                      animate={{ 
                        scale: objectivesMet.includes(obj) ? [1, 1.05, 1] : 1,
                        backgroundColor: objectivesMet.includes(obj) ? 'rgba(34, 197, 94, 0.05)' : 'rgba(248, 250, 252, 1)'
                      }}
                      className={`flex items-start gap-3 p-3 rounded-xl border-2 transition-all ${
                        objectivesMet.includes(obj) 
                          ? 'border-green-100 text-green-700' 
                          : 'border-slate-50 text-slate-400'
                      }`}
                    >
                      {objectivesMet.includes(obj) ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        >
                          <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                        </motion.div>
                      ) : (
                        <Target className="w-5 h-5 mt-0.5 shrink-0" />
                      )}
                      <span className="text-sm font-bold leading-tight">{obj}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Selection Panel (only if not connected) */}
            {!isConnected && (
              <div className="space-y-6">
                <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm">
                  <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                    <Bot className="w-5 h-5 text-coral-600" />
                    Elige tu Tutor
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {AI_TUTORS.map(tutor => (
                      <button
                        key={tutor.id}
                        onClick={() => setSelectedTutor(tutor)}
                        className={`text-left p-4 rounded-2xl border-2 transition-all ${
                          selectedTutor.id === tutor.id
                            ? 'border-coral-500 bg-coral-50'
                            : 'border-slate-50 hover:border-coral-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{tutor.avatar}</span>
                          <div>
                            <p className="font-black text-slate-900">{tutor.name}</p>
                            <p className="text-xs text-slate-500">{tutor.specialty}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm">
                  <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-coral-600" />
                    Escenario
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {SPEAKING_SCENARIOS.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedScenario(s)}
                        className={`text-left p-4 rounded-2xl border-2 transition-all ${
                          selectedScenario.id === s.id
                            ? 'border-coral-500 bg-coral-50'
                            : 'border-slate-50 hover:border-coral-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{s.icon}</span>
                          <div>
                            <p className="font-black text-slate-900">{s.title}</p>
                            <p className="text-xs text-slate-500">{s.difficulty}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Interface: Chat & Feedback */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col h-[650px]">
              {/* Status Indicator */}
              <div className={`px-8 py-4 flex items-center justify-between transition-all ${
                isConnected ? 'bg-coral-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <motion.span 
                      animate={isSpeaking ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="text-4xl block"
                    >
                      {selectedTutor.avatar}
                    </motion.span>
                    {isConnected && (
                      <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-coral-600 rounded-full animate-pulse"></span>
                    )}
                  </div>
                  <div>
                    <p className="font-black">{selectedTutor.name}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-bold opacity-80 uppercase tracking-widest">
                        {isConnected ? (isSpeaking ? 'Hablando' : 'Escuchando') : 'Modo de espera'}
                      </p>
                      {isListening && liveFluency > 0 && (
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-black text-white/60">FLUIDEZ:</span>
                          <div className="w-12 h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${liveFluency}%` }}
                              className="h-full bg-green-400"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {isConnected && (
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold ${
                      timeLeft < 300 ? 'bg-red-500 animate-pulse' : 'bg-white/10'
                    }`}>
                      <Activity className="w-3 h-3" />
                      <span>{formatTime(timeLeft)}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>En Directo</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Display */}
              <div 
                ref={scrollRef}
                className="flex-1 p-8 overflow-y-auto space-y-6 bg-slate-50/30"
              >
                {transcript.length === 0 && !isConnected && (
                  <div className="h-full flex flex-col items-center justify-center text-center p-10">
                    <div className="w-24 h-24 bg-coral-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                      <Mic className="w-12 h-12 text-coral-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Practica como nunca</h3>
                    <p className="text-slate-500 max-w-sm font-medium">
                      Selecciona un escenario y un tutor para comenzar tu práctica oral guiada por IA.
                    </p>
                  </div>
                )}

                {transcript.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 group`}
                  >
                    <div className={`max-w-[85%] p-5 rounded-3xl shadow-sm relative ${
                      msg.role === 'user' 
                        ? 'bg-coral-600 text-white rounded-tr-none' 
                        : 'bg-white text-slate-800 border-2 border-slate-50 rounded-tl-none'
                    }`}>
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">
                          {msg.role === 'user' ? 'Estudiante' : selectedTutor.name}
                        </p>
                        
                        {msg.role === 'assistant' && msg.isFinal && (
                          <button 
                            onClick={() => handleTranslate(msg.id, msg.text)}
                            disabled={translatingIds.has(msg.id)}
                            className="text-coral-500 hover:text-coral-700 transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-50"
                            title="Traducir al español"
                          >
                            {translatingIds.has(msg.id) ? (
                              <Loader2 className="w-3 h-3 animate-spin" />
                            ) : (
                              <Languages className="w-3 h-3" />
                            )}
                          </button>
                        )}
                      </div>
                      
                      <p className="font-bold leading-relaxed text-lg">
                        {msg.text}
                        {!msg.isFinal && <span className="inline-block w-1.5 h-5 bg-current animate-pulse ml-1 align-middle" />}
                      </p>

                      {translations[msg.id] && (
                        <div className="mt-3 pt-3 border-t border-slate-100 animate-in fade-in slide-in-from-top-1">
                          <p className="text-sm text-slate-500 italic font-medium leading-relaxed">
                            <Sparkles className="w-3 h-3 inline mr-1 text-coral-400" />
                            {translations[msg.id]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Audio Visualizer & Controls */}
              <div className="p-8 bg-white border-t border-slate-50 space-y-4">
                {/* Hint System */}
                {isConnected && (
                  <div className="flex flex-col items-center">
                    {!currentHint && !isLoadingHint ? (
                      <button 
                        onClick={getHint}
                        className="text-xs font-bold text-slate-400 hover:text-coral-600 flex items-center gap-2 transition-colors py-2 px-4 rounded-full border border-slate-100 hover:border-coral-100 bg-slate-50/50"
                      >
                        <Sparkles className="w-3 h-3" />
                        ¿Necesitas ayuda para responder?
                      </button>
                    ) : (
                      <div className="w-full bg-coral-50/50 border border-coral-100 rounded-2xl p-4 animate-in zoom-in-95">
                        <div className="flex justify-between items-center mb-3">
                          <p className="text-[10px] font-black text-coral-600 uppercase tracking-widest flex items-center gap-2">
                            <Bot className="w-3 h-3" />
                            Sugerencias del Coach
                          </p>
                          <button 
                            onClick={() => setCurrentHint(null)}
                            className="text-slate-400 hover:text-slate-600"
                          >
                            <RotateCcw className="w-3 h-3" />
                          </button>
                        </div>
                        
                        {isLoadingHint ? (
                          <div className="flex items-center justify-center py-4">
                            <Loader2 className="w-5 h-5 text-coral-600 animate-spin" />
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="bg-white p-3 rounded-xl border border-coral-100 shadow-sm">
                              <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Palabra clave</p>
                              <p className="text-sm font-black text-slate-800">{currentHint?.keyword}</p>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-coral-100 shadow-sm">
                              <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Empieza con...</p>
                              <p className="text-sm font-black text-slate-800">{currentHint?.starter}</p>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-coral-100 shadow-sm">
                              <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Frase completa</p>
                              <p className="text-sm font-black text-slate-800 italic">{currentHint?.sentence}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <VoiceVisualizer 
                  isActive={isConnected}
                  isSpeaking={isSpeaking}
                  isListening={isListening}
                />
                
                <div className="mt-4 text-center">
                  <p className={`text-sm font-black transition-all uppercase tracking-widest ${
                    isSpeaking ? 'text-coral-600' : 
                    isListening ? 'text-blue-600' : 'text-slate-400'
                  }`}>
                    {isSpeaking ? `${selectedTutor.name} está hablando...` : 
                     isListening ? 'Te escucho...' : 
                     isConnected ? 'Espera tu turno' : 'Pulsa comenzar'}
                  </p>
                </div>
              </div>
            </div>

            {/* Periodic Feedback Overlay */}
            {lastFeedback && (
              <div className="bg-white border-2 border-coral-100 rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-coral-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
                
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-coral-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-coral-200">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900">Análisis del Coach</h3>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Feedback Turno {turnCount}</p>
                    </div>
                  </div>
                  <div className="bg-coral-50 px-6 py-2 rounded-2xl border border-coral-100 shadow-sm">
                    <span className="text-xl font-black text-coral-600">Puntuación: {Math.round((lastFeedback.pronunciation + lastFeedback.fluency + lastFeedback.grammar) / 3)}%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                  {[
                    { label: 'Pronunciación', val: lastFeedback.pronunciation },
                    { label: 'Fluidez', val: lastFeedback.fluency },
                    { label: 'Vocabulario', val: lastFeedback.vocabulary },
                    { label: 'Gramática', val: lastFeedback.grammar },
                    { label: 'Tono', val: lastFeedback.tone }
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-1">{stat.label}</p>
                      <p className="text-xl font-black text-slate-800">{stat.val}%</p>
                    </div>
                  ))}
                </div>

                <div className="bg-coral-50/50 p-6 rounded-3xl border border-coral-100 flex gap-4">
                  <MessageSquare className="w-8 h-8 text-coral-600 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-coral-900 leading-relaxed">
                      {lastFeedback.feedback}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl animate-in zoom-in-95">
            <h3 className="text-3xl font-black text-slate-900 mb-4">¿Finalizar Sesión?</h3>
            <p className="text-slate-600 font-medium mb-8">
              Tu progreso y feedback se guardarán en tu perfil para que puedas revisarlos después.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleFinish}
                className="w-full bg-coral-600 hover:bg-coral-700 text-white py-4 rounded-2xl font-black transition-all shadow-xl"
              >
                Sí, Guardar y Salir
              </button>
              <button
                onClick={() => setShowExitConfirm(false)}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 py-4 rounded-2xl font-black transition-all"
              >
                Continuar Practicando
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
