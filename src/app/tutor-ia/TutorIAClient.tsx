'use client';

import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Power, RotateCcw, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { useAvatarTutor } from '@/hooks/use-avatar-tutor';
import AvatarOrb from '@/components/tutor/AvatarOrb';
import { Navigation } from '@/components/sections/Navigation';
import Link from 'next/link';

const TUTORS = [
  {
    id: 'emma',
    name: 'Emma',
    emoji: '👩‍🏫',
    gender: 'female' as const,
    specialty: 'Conversación general',
    description: 'Profesora amigable y paciente de Nueva York',
    colorFrom: '#FF6B6B',
    colorTo: '#ff9a9e',
    accent: 'from-red-500 to-rose-400',
  },
  {
    id: 'james',
    name: 'James',
    emoji: '👨‍💼',
    gender: 'male' as const,
    specialty: 'Business English',
    description: 'Tutor profesional y directo de Londres',
    colorFrom: '#3b82f6',
    colorTo: '#6366f1',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'sofia',
    name: 'Sofia',
    emoji: '👩‍🎓',
    gender: 'female' as const,
    specialty: 'Exámenes oficiales',
    description: 'Especialista en IELTS y Cambridge',
    colorFrom: '#8b5cf6',
    colorTo: '#d946ef',
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    id: 'carlos',
    name: 'Carlos',
    emoji: '🧑‍🏫',
    gender: 'male' as const,
    specialty: 'Inglés divertido',
    description: 'Tutor energético que hace las clases amenas',
    colorFrom: '#10b981',
    colorTo: '#06b6d4',
    accent: 'from-emerald-500 to-cyan-500',
  },
];

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const TOPICS = [
  { id: 'general', label: '💬 Conversación libre' },
  { id: 'business', label: '💼 Business English' },
  { id: 'travel', label: '✈️ Viajes y turismo' },
  { id: 'social', label: '🤝 Vida cotidiana' },
];

export default function TutorIAClient() {
  const [step, setStep] = useState<'setup' | 'session'>('setup');
  const [selectedTutor, setSelectedTutor] = useState(TUTORS[0]);
  const [selectedLevel, setSelectedLevel] = useState('B1');
  const [selectedTopic, setSelectedTopic] = useState('general');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    orbState,
    messages,
    feedback,
    error,
    isActive,
    start,
    startListening,
    stopListening,
    stop,
  } = useAvatarTutor({
    tutorId: selectedTutor.id,
    tutorGender: selectedTutor.gender,
    level: selectedLevel,
    topic: selectedTopic,
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleStart = async () => {
    setStep('session');
    await start();
  };

  const handleStop = () => {
    stop();
    setStep('setup');
  };

  const canListen = isActive && orbState === 'idle';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Navigation />

      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
          <div className="w-px h-4 bg-slate-700" />
          <h1 className="text-white font-black text-2xl">Tutor IA de inglés</h1>
          <span className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
            Cloudflare AI
          </span>
        </div>

        {step === 'setup' && (
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-white font-black text-xl mb-4">Elige tu tutor</h2>
                <div className="grid grid-cols-2 gap-3">
                  {TUTORS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTutor(t)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all ${
                        selectedTutor.id === t.id
                          ? 'border-white/30 bg-white/10'
                          : 'border-white/5 bg-white/5 hover:bg-white/8'
                      }`}
                    >
                      <span className="text-3xl block mb-2">{t.emoji}</span>
                      <p className="text-white font-black text-base">{t.name}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{t.specialty}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-white font-black text-xl mb-4">Tu nivel</h2>
                <div className="flex gap-2 flex-wrap">
                  {LEVELS.map((l) => (
                    <button
                      key={l}
                      onClick={() => setSelectedLevel(l)}
                      className={`px-5 py-2 rounded-xl font-black text-sm transition-all ${
                        selectedLevel === l
                          ? 'bg-white text-slate-900'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-white font-black text-xl mb-4">Tema</h2>
                <div className="space-y-2">
                  {TOPICS.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic.id)}
                      className={`w-full text-left px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                        selectedTopic === topic.id
                          ? 'bg-white text-slate-900'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              <AvatarOrb
                state="idle"
                tutor={selectedTutor}
                size={220}
              />
              <div className="text-center">
                <p className="text-white font-black text-2xl">{selectedTutor.name}</p>
                <p className="text-slate-400 mt-1">{selectedTutor.description}</p>
                <p className="text-slate-500 text-sm mt-1">Nivel {selectedLevel} · {TOPICS.find(t => t.id === selectedTopic)?.label}</p>
              </div>
              <button
                onClick={handleStart}
                className={`flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-white text-lg bg-gradient-to-r ${selectedTutor.accent} shadow-2xl hover:scale-105 active:scale-95 transition-all`}
              >
                <Power className="w-6 h-6" />
                Empezar clase
              </button>
            </div>
          </div>
        )}

        {step === 'session' && (
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 flex flex-col items-center gap-6">
              <AvatarOrb
                state={orbState}
                tutor={selectedTutor}
                size={200}
              />

              <div className="text-center">
                <p className="text-white font-black text-xl">{selectedTutor.name}</p>
                <p className="text-slate-400 text-sm">{selectedTutor.specialty} · {selectedLevel}</p>
              </div>

              {error && (
                <div className="w-full bg-red-900/40 border border-red-500/30 rounded-xl p-3 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}

              <div className="flex flex-col items-center gap-3 w-full">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
                  {canListen ? 'Pulsa para hablar' : orbState === 'listening' ? 'Suelta para enviar' : 'Espera...'}
                </p>
                <button
                  onMouseDown={startListening}
                  onMouseUp={stopListening}
                  onTouchStart={startListening}
                  onTouchEnd={stopListening}
                  disabled={!canListen && orbState !== 'listening'}
                  className={`w-20 h-20 rounded-full flex items-center justify-center transition-all shadow-2xl ${
                    orbState === 'listening'
                      ? 'bg-green-500 scale-110 ring-4 ring-green-400/40'
                      : canListen
                      ? 'bg-white hover:scale-105 active:scale-95'
                      : 'bg-slate-700 opacity-50 cursor-not-allowed'
                  }`}
                >
                  {orbState === 'listening' ? (
                    <MicOff className="w-8 h-8 text-white" />
                  ) : (
                    <Mic className={`w-8 h-8 ${canListen ? 'text-slate-900' : 'text-slate-400'}`} />
                  )}
                </button>
              </div>

              <button
                onClick={handleStop}
                className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-medium mt-2"
              >
                <RotateCcw className="w-4 h-4" />
                Terminar sesión
              </button>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex-1 bg-slate-800/50 border border-white/5 rounded-3xl overflow-hidden flex flex-col min-h-[500px]">
                <div className="px-6 py-4 border-b border-white/5">
                  <p className="text-white font-black">Conversación</p>
                  <p className="text-slate-500 text-xs">{messages.length} mensajes</p>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.length === 0 && (
                    <div className="h-full flex items-center justify-center">
                      <p className="text-slate-600 text-sm">Tu tutor está preparándose...</p>
                    </div>
                  )}
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-white text-slate-900 rounded-tr-sm font-medium'
                            : `bg-gradient-to-br ${selectedTutor.accent} text-white rounded-tl-sm`
                        }`}
                      >
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">
                          {msg.role === 'user' ? 'Tú' : selectedTutor.name}
                        </p>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {feedback && (
                <div className="bg-amber-900/30 border border-amber-500/30 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-amber-400" />
                    <p className="text-amber-300 font-black text-sm uppercase tracking-widest">Corrección</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase mb-1">Dijiste:</p>
                      <p className="text-red-300 line-through">{feedback.original}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase mb-1">Mejor así:</p>
                      <p className="text-green-300 font-semibold">{feedback.correction}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-slate-500 text-xs font-bold uppercase mb-1">¿Por qué?</p>
                      <p className="text-slate-300">{feedback.explanation}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
