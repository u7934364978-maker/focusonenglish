import React from 'react';
import { createClient } from '@/lib/supabase/server';
import { UltraAdaptiveEngine } from '@/lib/course-engine/ultra-adaptive-engine';
import { GlobalContentProvider } from '@/lib/course-engine/global-content-provider';
import PracticaInteligenteClient from './PracticaInteligenteClient';
import { Navigation } from '@/components/sections/Navigation';

export default async function Page() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Inicia sesión para acceder a la práctica inteligente.</p>
      </div>
    );
  }

  // Initial load of content and state
  await GlobalContentProvider.getInstance().loadAllContent();
  
  // Get a first batch of exercises (e.g. 5) to start the session
  const initialExercises = [];
  for (let i = 0; i < 5; i++) {
    const ex = await UltraAdaptiveEngine.getNextExercise(user.id);
    if (ex) initialExercises.push(ex);
  }

  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen bg-slate-50">
        <PracticaInteligenteClient initialQueue={initialExercises} />
      </div>
    </>
  );
}
