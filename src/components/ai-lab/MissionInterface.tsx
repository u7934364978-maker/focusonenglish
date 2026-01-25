'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AIMission } from '@/lib/exercise-types';
import { MissionMessage } from '@/lib/ai/mission-engine';
import ReactMarkdown from 'react-markdown';
import { Send, CheckCircle2, Flag, Loader2, AlertCircle, RefreshCcw, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { VoiceInterface } from './VoiceInterface';
import { useGamification } from '@/lib/hooks/use-gamification';

interface MissionInterfaceProps {
  mission: AIMission;
}

export const MissionInterface: React.FC<MissionInterfaceProps> = ({ mission }) => {
  const { completeMission } = useGamification();
  const [messages, setMessages] = useState<MissionMessage[]>([
    { role: 'assistant', content: mission.initialMessage }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [goalsReached, setGoalsReached] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [evaluation, setEvaluation] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const playTTS = async (text: string) => {
    if (!voiceEnabled) return;

    try {
      const response = await fetch('/api/ai-lab/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        if (audioRef.current) {
          audioRef.current.src = url;
          audioRef.current.play();
        }
      }
    } catch (err) {
      console.error('TTS failed:', err);
    }
  };

  const handleSend = async (overrideInput?: string) => {
    const textToSend = overrideInput || input;
    if (!textToSend.trim() || isLoading || isCompleted) return;

    const userMessage: MissionMessage = { role: 'user', content: textToSend };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ai-lab/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ missionId: mission.id, messages: newMessages }),
      });

      if (!response.ok) throw new Error('Error al conectar con la IA');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No se pudo iniciar el stream');

      let assistantContent = '';
      setMessages([...newMessages, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = new TextDecoder().decode(value);
        assistantContent += text;

        // Parse goal tags from content
        const goalMatches = assistantContent.matchAll(/<goal_reached>(\d+)<\/goal_reached>/g);
        for (const match of goalMatches) {
          const goalIdx = parseInt(match[1]);
          if (!goalsReached.includes(goalIdx)) {
            setGoalsReached(prev => [...prev, goalIdx]);
          }
        }

        if (assistantContent.includes('<mission_completed>true</mission_completed>')) {
          setIsCompleted(true);
        }

        // Clean up tags for display
        const displayContent = assistantContent
          .replace(/<goal_reached>\d+<\/goal_reached>/g, '')
          .replace(/<mission_completed>true<\/mission_completed>/g, '')
          .trim();

        setMessages([...newMessages, { role: 'assistant', content: displayContent }]);
      }

      // After streaming is finished, play TTS if enabled
      const finalContent = assistantContent
        .replace(/<goal_reached>\d+<\/goal_reached>/g, '')
        .replace(/<mission_completed>true<\/mission_completed>/g, '')
        .trim();
      
      if (voiceEnabled) {
        await playTTS(finalContent);
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinish = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/ai-lab/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          missionId: mission.id,
          messages,
          goalsReached: goalsReached.map(i => mission.successCriteria[i])
        }),
      });

      const data = await response.json();
      if (data.success) {
        setEvaluation(data.evaluation);
        setIsCompleted(true);
        
        // Award XP
        await completeMission(mission.id, data.evaluation.score);
      }
    } catch (err) {
      setError('Error al evaluar la misión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Sidebar with goals */}
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-80 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-6 overflow-y-auto">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-coral-500" /> Objetivos de Misión
          </h3>
          <div className="space-y-3">
            {mission.successCriteria.map((criterion, idx) => (
              <div 
                key={idx}
                className={`p-3 rounded-xl border-2 transition-all ${
                  goalsReached.includes(idx)
                    ? 'bg-green-50 border-green-200 text-green-700'
                    : 'bg-white border-slate-100 text-slate-500'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 rounded-full p-0.5 ${goalsReached.includes(idx) ? 'bg-green-500 text-white' : 'bg-slate-200 text-transparent'}`}>
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold leading-tight">{criterion}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Flag className="w-4 h-4 text-coral-500" /> Meta Final
            </h3>
            <p className="text-xs text-slate-600 bg-coral-50 p-3 rounded-xl border border-coral-100 font-medium">
              {mission.goal}
            </p>
          </div>

          {goalsReached.length > 0 && (
            <button
              onClick={handleFinish}
              disabled={isLoading}
              className="mt-8 w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-coral-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              Finalizar Misión
            </button>
          )}
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col relative bg-white">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl p-4 ${
                    m.role === 'user' 
                      ? 'bg-coral-600 text-white shadow-md' 
                      : 'bg-slate-100 text-slate-800 border border-slate-200'
                  }`}>
                    {m.role === 'assistant' && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{mission.persona.avatar}</span>
                        <span className="text-xs font-black uppercase tracking-tighter opacity-70">
                          {mission.persona.name}
                        </span>
                      </div>
                    )}
                    <div className="prose prose-slate prose-sm max-w-none dark:prose-invert">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-200 bg-white">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> {error}
              </div>
            )}
            
            {evaluation ? (
              <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-500">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🏆</div>
                  <h3 className="text-2xl font-black">¡Misión Finalizada!</h3>
                  <div className="text-5xl font-black text-coral-400 mt-2">{evaluation.score}/100</div>
                </div>
                
                <div className="space-y-4 text-sm">
                  <p className="text-slate-300 italic">"{evaluation.feedback}"</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <h4 className="font-bold text-green-400 mb-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Fortalezas
                      </h4>
                      <ul className="text-xs space-y-1 text-slate-300">
                        {evaluation.strengths.map((s: string, i: number) => <li key={i}>• {s}</li>)}
                      </ul>
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl">
                      <h4 className="font-bold text-amber-400 mb-1 flex items-center gap-1">
                        <RefreshCcw className="w-3 h-3" /> Mejoras
                      </h4>
                      <ul className="text-xs space-y-1 text-slate-300">
                        {evaluation.improvements.map((s: string, i: number) => <li key={i}>• {s}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>

                <Link
                  href="/ai-lab"
                  className="mt-6 w-full py-3 bg-coral-500 hover:bg-coral-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  Volver al AI Lab
                </Link>
              </div>
            ) : (
            <div className="flex items-center gap-2">
              <audio ref={audioRef} className="hidden" />
              <button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className={`p-3 rounded-xl transition-all ${
                  voiceEnabled 
                    ? 'bg-blue-100 text-blue-600 border-blue-200' 
                    : 'bg-slate-100 text-slate-400 border-slate-200'
                } border-2`}
                title={voiceEnabled ? "Voz activada" : "Voz desactivada"}
              >
                {voiceEnabled ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
              </button>

              <VoiceInterface 
                onTranscription={(text) => handleSend(text)} 
                isLoading={isLoading}
                disabled={isCompleted}
              />

              <div className="h-10 w-px bg-slate-200 mx-2" />

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu respuesta en inglés..."
                disabled={isLoading || isCompleted}
                className="flex-1 px-4 py-3 bg-slate-100 border-2 border-transparent focus:border-coral-500 focus:bg-white rounded-xl transition-all outline-none text-slate-800 font-medium"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || isCompleted || !input.trim()}
                className="p-3 bg-coral-600 text-white rounded-xl hover:bg-coral-700 transition-all disabled:opacity-50 disabled:grayscale"
              >
                {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
              </button>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
