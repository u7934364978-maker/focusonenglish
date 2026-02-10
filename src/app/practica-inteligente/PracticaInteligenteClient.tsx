'use client';

import React, { useState, useEffect, useCallback } from 'react';
import PremiumCourseSession from '@/components/course/exercises/PremiumSession';
import { UnitData, PremiumInteraction } from '@/types/premium-course';
import { Loader2, Sparkles, BookOpen, Briefcase, Mail, Plane, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  initialQueue: any[];
}

const LEARNING_PATHS = [
  { id: 'A1', name: 'Nivel A1', icon: Sparkles, description: 'Ejercicios visuales y sencillos para principiantes.' },
  { id: 'generic', name: 'Inglés General', icon: Sparkles, description: 'Ruta adaptativa desde tu nivel actual.' },
  { id: 'B1', name: 'Nivel B1', icon: BookOpen, description: 'Contenido específico de nivel Intermediate.' },
  { id: 'B2', name: 'Nivel B2', icon: GraduationCap, description: 'Contenido específico de nivel Upper-Intermediate.' },
  { id: 'C1', name: 'Nivel C1', icon: Briefcase, description: 'Contenido específico de nivel Advanced.' },
  { id: 'C2', name: 'Nivel C2', icon: GraduationCap, description: 'Contenido específico de nivel Proficiency.' },
];

export default function PracticaInteligenteClient({ initialQueue }: Props) {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [isStarting, setIsStarting] = useState(false);
  const [queue, setQueue] = useState<any[]>([]);
  const [sessionData, setSessionData] = useState<UnitData | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const router = useRouter();

  const buildUnitData = useCallback((interactions: any[], pathName: string, level?: string): UnitData => {
    return {
      course: {
        language_ui: 'es-ES',
        target_language: 'en',
        level: level || 'MIXED',
        unit_id: 'ULTRA_ADAPTIVE_SESSION',
        unit_title: level ? `Práctica de Nivel ${level}` : `Sesión: ${pathName}`,
        total_duration_minutes: 0
      },
      learning_outcomes: ['Aprendizaje personalizado infinito'],
      blocks: [
        {
          block_id: 'ULTRA_BLOCK',
          title: 'Tu Ruta de Aprendizaje',
          content: interactions,
          duration_minutes: interactions.length * 2
        }
      ]
    };
  }, []);

  useEffect(() => {
    if (selectedPath && queue.length > 0) {
      const pathName = LEARNING_PATHS.find(p => p.id === selectedPath)?.name || 'Personalizado';
      setSessionData(buildUnitData(queue, pathName, selectedLevel || undefined));
    }
  }, [queue, selectedPath, selectedLevel, buildUnitData]);

  const startSession = async (pathId: string) => {
    setIsStarting(true);
    const isFixedLevel = ['A1', 'B1', 'B2', 'C1', 'C2'].includes(pathId);
    const levelToForce = isFixedLevel ? pathId : null;
    
    try {
      // 1. Set path in DB (only for generic)
      if (!isFixedLevel) {
        await fetch('/api/adaptive/set-path', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path: pathId })
        });
      }

      // 2. Fetch initial batch of exercises for this path
      const initialExercises = [];
      for (let i = 0; i < 3; i++) {
        const response = await fetch('/api/adaptive/next', { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ level: levelToForce })
        });
        const data = await response.json();
        if (data.success && data.exercise) {
          const exercise = data.exercise;
          if (!exercise.audio_url && (exercise.stimulus_en || exercise.text)) {
            const textToSpeak = exercise.stimulus_en || exercise.text;
            exercise.audio_url = `/api/generate-audio?text=${encodeURIComponent(textToSpeak)}`;
          }
          initialExercises.push(exercise);
        }
      }

      if (initialExercises.length > 0) {
        setQueue(initialExercises);
        setSelectedPath(pathId);
        setSelectedLevel(levelToForce);
      }
    } catch (error) {
      console.error('Error starting session:', error);
    } finally {
      setIsStarting(false);
    }
  };

  const fetchMore = async () => {
    if (isLoadingMore) return;
    setIsLoadingMore(true);
    
    try {
      const response = await fetch('/api/adaptive/next', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level: selectedLevel })
      });
      const data = await response.json();
      
      if (data.success && data.exercise) {
        // Enforce audio generation in frontend if missing
        const exercise = data.exercise;
        if (!exercise.audio_url && (exercise.stimulus_en || exercise.text)) {
          const textToSpeak = exercise.stimulus_en || exercise.text;
          exercise.audio_url = `/api/generate-audio?text=${encodeURIComponent(textToSpeak)}`;
        }
        
        setQueue(prev => [...prev, exercise]);
      }
    } catch (error) {
      console.error('Error fetching more exercises:', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const handlePerformanceUpdate = async (interactionId: string, quality: number) => {
    // Send to evaluation API
    try {
      await fetch('/api/adaptive/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interactionId,
          isCorrect: quality >= 3,
          responseTimeMs: 5000 // Default for now, could be measured in frontend
        })
      });

      // If we are reaching the end of the queue, fetch more
      // If we have less than 3 upcoming exercises, pre-fetch
      // Note: we need to find current index in queue to know how many are left
      // but PremiumCourseSession handles its own index. 
      // Simplified: always fetch one more to keep it growing
      fetchMore();
    } catch (error) {
      console.error('Error updating performance:', error);
    }
  };

  const handleConceptUpdate = async (tags: string[], success: boolean) => {
    // Already handled by evaluation API, but keeping for compatibility
  };

  if (!selectedPath || !sessionData) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Práctica <span className="text-coral-500">Inteligente</span>
            </h1>
            <p className="text-xl text-slate-600">
              Elige tu ruta de aprendizaje y deja que la IA guíe tu camino.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEARNING_PATHS.map((path, idx) => (
              <motion.button
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => startSession(path.id)}
                disabled={isStarting}
                className="group relative bg-white border-2 border-slate-100 p-6 rounded-3xl text-left hover:border-coral-500 hover:shadow-xl transition-all active:scale-95 disabled:opacity-50"
              >
                <div className="bg-slate-50 group-hover:bg-coral-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors">
                  <path.icon className="text-slate-600 group-hover:text-coral-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{path.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{path.description}</p>
                
                {isStarting && <Loader2 className="absolute top-6 right-6 animate-spin text-coral-500" size={20} />}
              </motion.button>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 text-slate-400 text-sm"
          >
            Tu nivel se ajustará automáticamente según tu desempeño en tiempo real.
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <PremiumCourseSession 
        unitData={sessionData}
        continuousMode={true}
        onComplete={() => {
            // Fetch more when the current queue is completed
            fetchMore();
        }}
        onExit={() => {
          if (selectedPath) {
            setSelectedPath(null);
            setSessionData(null);
            setQueue([]);
          } else {
            router.push('/');
          }
        }}
        onPerformanceUpdate={handlePerformanceUpdate}
        onConceptUpdate={handleConceptUpdate}
      />
      
      {isLoadingMore && (
        <div className="fixed bottom-4 right-4 bg-white/80 backdrop-blur shadow-lg rounded-full px-4 py-2 flex items-center gap-2 text-xs font-bold text-coral-600 border border-coral-100 z-50">
          <Loader2 className="animate-spin" size={14} />
          CARGANDO MÁS...
        </div>
      )}
    </div>
  );
}
