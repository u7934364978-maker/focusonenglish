'use client';

import React, { useState, useEffect, useCallback } from 'react';
import PremiumCourseSession from '@/components/course/exercises/PremiumSession';
import { UnitData, PremiumInteraction } from '@/types/premium-course';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  initialQueue: any[];
}

export default function PracticaInteligenteClient({ initialQueue }: Props) {
  const [queue, setQueue] = useState<any[]>(initialQueue);
  const [sessionData, setSessionData] = useState<UnitData | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const router = useRouter();

  const buildUnitData = useCallback((interactions: any[]): UnitData => {
    return {
      course: {
        language_ui: 'es-ES',
        target_language: 'en',
        level: 'MIXED',
        unit_id: 'ULTRA_ADAPTIVE_SESSION',
        unit_title: 'Sesión Ultra-Inteligente',
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
    setSessionData(buildUnitData(queue));
  }, [queue, buildUnitData]);

  const fetchMore = async () => {
    if (isLoadingMore) return;
    setIsLoadingMore(true);
    
    try {
      const response = await fetch('/api/adaptive/next', { method: 'POST' });
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
      if (queue.length < 5) {
        fetchMore();
      }
    } catch (error) {
      console.error('Error updating performance:', error);
    }
  };

  const handleConceptUpdate = async (tags: string[], success: boolean) => {
    // Already handled by evaluation API, but keeping for compatibility
  };

  if (!sessionData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="animate-spin text-coral-500 mb-4" size={48} />
        <p className="text-slate-600 font-medium">Preparando tu sesión personalizada...</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <PremiumCourseSession 
        unitData={sessionData}
        continuousMode={true}
        onComplete={() => {
            // This is triggered when all items in current queue are done
            // In infinite mode, we just fetch more or reload
            fetchMore().then(() => {
                // To keep it smooth without reload, PremiumCourseSession 
                // would need internal state update for queue. 
                // For now, let's just reload to refresh everything.
                window.location.reload();
            });
        }}
        onExit={() => router.push('/')}
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
