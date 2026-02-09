'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import MissionWrapper from '@/components/gamification/MissionWrapper';
import AIMentor from '@/components/gamification/AIMentor';
import BlitzTimer from '@/components/gamification/BlitzTimer';
import PowerUpBar from '@/components/gamification/PowerUpBar';
import PremiumCourseSession from '@/components/course/exercises/PremiumSession';
import { UnitData } from '@/types/premium-course';
import { Loader2, Sparkles, Trophy, Zap, Clock, ArrowLeft } from 'lucide-react';
import { useMission } from '@/context/MissionContext';

interface Props {
  userId: string;
}

export default function MisionesClient({ userId: _userId }: Props) {
  const [currentMissionId, setCurrentMissionId] = useState<string | null>(null);
  const [queue, setQueue] = useState<any[]>([]);
  const [sessionData, setSessionData] = useState<UnitData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useMission();

  const missions = [
    { 
      id: 'london-interview', 
      title: 'Misión: Entrevista en Londres', 
      description: 'Supera los retos para conseguir el trabajo de tus sueños.',
      background: 'from-blue-900 to-slate-900',
      icon: '🇬🇧'
    },
    { 
      id: 'airport-survival', 
      title: 'Misión: Supervivencia en el Aeropuerto', 
      description: 'Gestiona tu vuelo, maletas y aduanas sin perderte.',
      background: 'from-orange-900 to-slate-900',
      icon: '✈️'
    }
  ];

  const buildUnitData = useCallback((interactions: any[], missionTitle: string): UnitData => {
    return {
      course: {
        language_ui: 'es-ES',
        target_language: 'en',
        level: 'MIXED',
        unit_id: 'MISSION_SESSION',
        unit_title: missionTitle,
        total_duration_minutes: 0
      },
      learning_outcomes: ['Misión inmersiva completada'],
      blocks: [
        {
          block_id: 'MISSION_BLOCK',
          title: 'Tu Desafío',
          content: interactions,
          duration_minutes: interactions.length * 2
        }
      ]
    };
  }, []);

  const fetchExercises = async (count = 3) => {
    const exercises = [];
    for (let i = 0; i < count; i++) {
      try {
        const response = await fetch('/api/adaptive/next', { method: 'POST' });
        const data = await response.json();
        if (data.success && data.exercise) {
          exercises.push(data.exercise);
        }
      } catch (e) {
        console.error("Error fetching exercise", e);
      }
    }
    return exercises;
  };

  const startMission = async (id: string) => {
    setIsLoading(true);
    dispatch({ type: 'SET_MISSION', id });
    
    const mission = missions.find(m => m.id === id);
    const initialExercises = await fetchExercises(3);
    
    if (initialExercises.length > 0) {
      setQueue(initialExercises);
      setSessionData(buildUnitData(initialExercises, mission?.title || 'Misión'));
      setCurrentMissionId(id);
    }
    setIsLoading(false);
  };

  const handlePerformanceUpdate = async (interactionId: string, quality: number) => {
    const isCorrect = quality >= 3;
    
    // Update RPG State
    dispatch({ type: 'RECORD_RESULT', success: isCorrect });
    
    // Send to evaluation API
    try {
      await fetch('/api/adaptive/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interactionId,
          isCorrect,
          responseTimeMs: 5000 
        })
      });

      // Prefetch next exercise to keep the mission going
      const next = await fetchExercises(1);
      if (next.length > 0) {
        setQueue(prev => [...prev, next[0]]);
        // We don't need to rebuild sessionData here if PremiumSession 
        // handles queue updates or we pass it via props
      }
    } catch (error) {
      console.error('Error updating performance:', error);
    }
  };

  const toggleBlitz = () => {
    if (state.blitzActive) {
      dispatch({ type: 'STOP_BLITZ' });
    } else {
      dispatch({ type: 'START_BLITZ' });
    }
  };

  const exitMission = () => {
    setCurrentMissionId(null);
    setSessionData(null);
    setQueue([]);
    dispatch({ type: 'STOP_BLITZ' });
  };

  if (!currentMissionId) {
    return (
      <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        {/* Header RPG Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 w-full md:w-auto">
                <div className="w-12 h-12 bg-coral-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-coral-500/20 shrink-0">
                    {state.level}
                </div>
                <div className="flex-1 md:flex-none">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Nivel Actual</p>
                    <div className="w-full md:w-48 h-2 bg-slate-800 rounded-full mt-1 overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(state.xp / (state.level * 1000)) * 100}%` }}
                            className="h-full bg-coral-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                        />
                    </div>
                </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white font-bold w-full md:w-auto">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                    <Trophy size={18} className="text-yellow-500" />
                    <span>{state.xp} XP</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                    <Zap size={18} className="text-blue-400" />
                    <span>x{state.streak} Racha</span>
                </div>
                <button 
                  onClick={toggleBlitz}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${state.blitzActive ? 'bg-coral-500 border-coral-400 shadow-lg shadow-coral-500/20 text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'}`}
                >
                  <Clock size={18} />
                  <span className="text-sm">MODO BLITZ {state.blitzActive ? 'ON' : 'OFF'}</span>
                </button>
            </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black text-white mb-6 tracking-tight">
            Elige tu <span className="text-coral-500 underline decoration-coral-500/30">Misión</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Aprende inglés viviendo situaciones reales e inmersivas con retos adaptados a tu nivel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missions.map((mission, idx) => (
            <motion.button
              key={mission.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              disabled={isLoading}
              onClick={() => startMission(mission.id)}
              className={`group relative overflow-hidden bg-gradient-to-br ${mission.background} p-8 rounded-3xl text-left border border-white/10 hover:border-coral-500/50 transition-all hover:shadow-2xl hover:shadow-coral-500/10 disabled:opacity-50`}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl">{mission.icon}</span>
                    {isLoading && <Loader2 className="animate-spin text-white/20" size={24} />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{mission.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{mission.description}</p>
                <div className="flex items-center gap-2 text-coral-400 font-bold text-sm">
                  COMENZAR MISIÓN <Sparkles size={16} />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-coral-500/10 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <MissionWrapper missionId={currentMissionId}>
      <BlitzTimer />
      
      <div className="pt-24 pb-32">
        {sessionData && (
            <div className="max-w-4xl mx-auto px-4">
                <button 
                    onClick={exitMission}
                    className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
                >
                    <ArrowLeft size={16} /> Salir de la Misión
                </button>
                
                <PremiumCourseSession 
                    unitData={sessionData}
                    continuousMode={true}
                    customQueue={queue}
                    onComplete={() => {
                        // More fetching handled by handlePerformanceUpdate pre-fetching
                    }}
                    onExit={exitMission}
                    onPerformanceUpdate={handlePerformanceUpdate}
                />
            </div>
        )}
      </div>
      
      <AIMentor />
      <PowerUpBar />
    </MissionWrapper>
  );
}
