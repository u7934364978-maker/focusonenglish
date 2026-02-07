'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Power, RotateCcw, ShieldAlert, ArrowLeft, 
  Activity, Sparkles, MessageSquare
} from 'lucide-react';
import { usePrivateTutor } from '@/hooks/use-private-tutor';
import { TUTOR_CATEGORIES } from '@/lib/ai/tutor-categories';
import { CategorySelector } from '@/components/tutor/CategorySelector';
import { PhaseIndicator } from '@/components/tutor/PhaseIndicator';
import VoiceVisualizer from '@/components/metodologias/VoiceVisualizer';
import { Navigation } from '@/components/sections/Navigation';
import { Progress } from '@/components/ui/progress';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tutor Privado de Inglés con IA: Clases Personalizadas Online 24/7',
  description: 'Aprende inglés con clases particulares 100% personalizadas con IA. Mejora tu gramática, vocabulario y pronunciación a tu propio ritmo.',
};

const AI_TUTORS = [
  { id: 'tutor1', name: 'Emma', avatar: '👩‍🏫', specialty: 'Business English' },
  { id: 'tutor2', name: 'James', avatar: '👨‍💼', specialty: 'Conversational' },
];

export default function PrivateTutorPage() {
  const router = useRouter();
  const [selectedTutor, setSelectedTutor] = useState(AI_TUTORS[0]);
  const [selectedCategory, setSelectedCategory] = useState(TUTOR_CATEGORIES[0].id);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  
  const { 
    isConnected, 
    isConnecting, 
    isListening, 
    isSpeaking, 
    transcript, 
    error, 
    phase,
    lastFeedback,
    startTutorSession, 
    startRecording,
    completeSession
  } = usePrivateTutor();

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [transcript]);

  const handleStart = async () => {
    await startTutorSession(selectedCategory, selectedTutor.id, 'B2');
    await startRecording();
  };

  const handleFinish = async () => {
    await completeSession('Clase finalizada por el usuario.');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
              Tutor Privado IA
              <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Full Class
              </span>
            </h1>
          </div>

          {!isConnected ? (
            <button
              onClick={handleStart}
              disabled={isConnecting}
              className="bg-coral-600 hover:bg-coral-700 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all shadow-xl active:scale-95 disabled:opacity-50"
            >
              {isConnecting ? <Activity className="w-5 h-5 animate-spin" /> : <Power className="w-5 h-5" />}
              {isConnecting ? 'Preparando clase...' : 'Comenzar Clase'}
            </button>
          ) : (
            <button
              onClick={() => setShowExitConfirm(true)}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all shadow-xl active:scale-95"
            >
              <RotateCcw className="w-5 h-5" />
              Terminar Clase
            </button>
          )}
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center gap-3 text-red-700">
            <ShieldAlert className="w-6 h-6" />
            <p className="font-bold">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <PhaseIndicator currentPhase={phase} />
            
            {!isConnected && (
              <>
                <CategorySelector 
                  selectedId={selectedCategory} 
                  onSelect={setSelectedCategory} 
                />
                <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm">
                  <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                    <Bot className="w-5 h-5 text-coral-600" />
                    Elige tu Profesor
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {AI_TUTORS.map(tutor => (
                      <button
                        key={tutor.id}
                        onClick={() => setSelectedTutor(tutor)}
                        className={`text-left p-4 rounded-2xl border-2 transition-all ${
                          selectedTutor.id === tutor.id ? 'border-coral-500 bg-coral-50' : 'border-slate-50 hover:border-coral-200'
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
              </>
            )}
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col h-[650px]">
              <div className={`px-8 py-4 flex items-center justify-between transition-all ${
                isConnected ? 'bg-coral-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{selectedTutor.avatar}</span>
                  <div>
                    <p className="font-black">{selectedTutor.name}</p>
                    <p className="text-xs font-bold opacity-80 uppercase tracking-widest">
                      {isConnected ? (isSpeaking ? 'Explicando...' : 'Escuchando...') : 'En espera'}
                    </p>
                  </div>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 p-8 overflow-y-auto space-y-6 bg-slate-50/30">
                {transcript.length === 0 && !isConnected && (
                  <div className="h-full flex flex-col items-center justify-center text-center p-10">
                    <div className="w-20 h-20 bg-coral-100 rounded-3xl flex items-center justify-center mb-6 text-3xl">🎓</div>
                    <h3 className="text-2xl font-black text-slate-900">Tu clase particular te espera</h3>
                    <p className="text-slate-500 max-w-sm mt-3 font-medium">
                      Selecciona un tema y un profesor para comenzar una lección personalizada con teoría, práctica y feedback.
                    </p>
                  </div>
                )}

                {transcript.map((msg) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-5 rounded-3xl shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-coral-500 text-white rounded-tr-none' 
                        : 'bg-white text-slate-800 border-2 border-slate-100 rounded-tl-none'
                    }`}>
                      <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">
                        {msg.role === 'user' ? 'Tú' : selectedTutor.name}
                      </p>
                      <p className="text-lg leading-relaxed font-medium">
                        {msg.text}
                        {!msg.isFinal && <span className="inline-block w-1 h-5 bg-current animate-pulse ml-1" />}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 bg-white border-t-2 border-slate-50">
                <VoiceVisualizer isActive={isConnected} isSpeaking={isSpeaking} isListening={isListening} />
              </div>
            </div>

            {lastFeedback && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border-2 border-green-100 rounded-[2rem] p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Feedback en tiempo real</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-100">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Corrección:</p>
                    <p className="text-green-700 font-bold text-lg">{lastFeedback.correction}</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-100">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Explicación:</p>
                    <p className="text-slate-700 font-medium">{lastFeedback.feedback || lastFeedback.explanation}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {showExitConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl text-center">
              <div className="w-20 h-20 bg-coral-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl">👋</div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">¿Terminar clase?</h2>
              <p className="text-slate-500 mb-8 font-medium text-lg">Tu progreso se guardará y podrás ver el resumen en tu perfil.</p>
              <div className="flex flex-col gap-3">
                <button onClick={handleFinish} className="w-full bg-coral-600 hover:bg-coral-700 text-white py-4 rounded-2xl font-black transition-all shadow-lg active:scale-95 text-lg">Sí, terminar sesión</button>
                <button onClick={() => setShowExitConfirm(false)} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 py-4 rounded-2xl font-black transition-all text-lg">Continuar aprendiendo</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
