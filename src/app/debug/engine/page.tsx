'use client';

import React, { useState, useEffect } from 'react';
import { ExerciseGenerator } from '../../../lib/course/engine/generator';
import { mapExerciseToPremium } from '../../../lib/course/engine/mapper';
import PremiumCourseSession from '../../../components/course/exercises/PremiumSession';
import { UnitData } from '../../../types/premium-course';
import { A1_BLUEPRINTS } from '../../../lib/course/engine/blueprints';

export default function EngineDebugPage() {
  const [sessionData, setSessionData] = useState<UnitData | null>(null);
  const [loading, setLoading] = useState(true);

  const generateNewSession = () => {
    setLoading(true);
    const generator = new ExerciseGenerator();
    
    // Generate 3 variants for each available blueprint
    const allExercises = A1_BLUEPRINTS.flatMap(bp => 
      generator.generateVariants(bp.id, 3)
    );

    const interactions = allExercises.map(mapExerciseToPremium);

    const unitData: UnitData = {
      course: {
        unit_id: 'ENGINE_DEBUG',
        unit_title: 'Engine Dynamic Test',
        level: 'A1',
        total_duration_minutes: 15,
        language_ui: 'es-ES',
        target_language: 'en'
      },
      blocks: [{
        block_id: 'DEBUG_BLOCK',
        title: 'Dynamic Exercises',
        duration_minutes: 15,
        content: interactions
      }]
    };

    setSessionData(unitData);
    setLoading(false);
  };

  useEffect(() => {
    generateNewSession();
  }, []);

  if (loading) return <div className="p-10 text-center text-slate-600 font-bold">Generando ejercicios dinámicos...</div>;
  if (!sessionData) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b px-4 py-2 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <h1 className="font-bold text-slate-800 uppercase tracking-wider text-xs">Debug: Motor de Ensamblaje</h1>
        </div>
        <button 
          onClick={generateNewSession}
          className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-6 py-1.5 rounded-full text-xs font-black shadow-lg shadow-coral-500/20 transition-all active:scale-95"
        >
          REGENERAR
        </button>
      </div>
      
      <div className="pt-4">
        <PremiumCourseSession 
          unitData={sessionData}
          userId="debug-user"
          onComplete={() => alert('¡Prueba finalizada! El motor ha generado todas las variantes correctamente.')}
          onExit={() => window.location.href = '/curso/ingles-a1'}
        />
      </div>
    </div>
  );
}
