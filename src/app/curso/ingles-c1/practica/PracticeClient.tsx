'use client';

import React, { useState, useEffect } from 'react';
import PremiumCourseSession from '@/components/course/exercises/PremiumSession';
import { PremiumInteraction, UnitData } from '@/types/premium-course';
import { useRouter } from 'next/navigation';
import { saveExerciseProgress } from './actions';
import { Trophy } from 'lucide-react';
import Link from 'next/link';

interface Props {
  interactions: PremiumInteraction[];
}

export default function PracticeClient({ interactions }: Props) {
  const router = useRouter();
  const [sessionData, setSessionData] = useState<UnitData | null>(null);

  useEffect(() => {
    const shuffled = [...interactions].sort(() => Math.random() - 0.5);
    
    const unitData: UnitData = {
      course: {
        language_ui: 'es-ES',
        target_language: 'en',
        level: 'C1',
        unit_id: 'RANDOM_PRACTICE',
        unit_title: 'Práctica Aleatoria C1',
        total_duration_minutes: 30
      },
      learning_outcomes: ['Repaso general de nivel C1 Advanced'],
      mastery_tags: ['grammar', 'vocabulary', 'syntax', 'communication'],
      blocks: [
        {
          block_id: 'RANDOM_BLOCK',
          title: 'Mezcla de Ejercicios C1',
          duration_minutes: 30,
          content: shuffled as any[]
        }
      ]
    };
    
    setSessionData(unitData);
  }, [interactions]);

  const handleInteractionCorrect = async (interactionId: string) => {
    await saveExerciseProgress(interactionId);
  };

  if (!sessionData) return null;

  if (interactions.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6 bg-slate-50 p-12 rounded-3xl border border-slate-200 shadow-xl">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-4">
            <Trophy className="text-blue-600" size={48} />
          </div>
          <h1 className="text-3xl font-black text-slate-900">¡Nivel Completado!</h1>
          <p className="text-slate-600 text-lg">
            Has completado todos los ejercicios disponibles para el nivel C1 Advanced. ¡Excelente desempeño!
          </p>
          <Link 
            href="/curso/ingles-c1"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/20"
          >
            VOLVER AL PANEL
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PremiumCourseSession 
      unitData={sessionData}
      onComplete={() => router.push('/curso/ingles-c1')}
      onExit={() => router.push('/curso/ingles-c1')}
      // @ts-expect-error - added in parent patterns
      onInteractionCorrect={handleInteractionCorrect}
    />
  );
}
