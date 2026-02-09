import React from 'react';
import { createClient } from '@/lib/supabase/server';
import { GlobalContentProvider } from '@/lib/course-engine/global-content-provider';
import MisionesClient from './MisionesClient';
import { Navigation } from '@/components/sections/Navigation';
import { MissionProvider } from '@/context/MissionContext';

export default async function MisionesPage() {
  // Bypass para testing E2E
  const isTest = process.env.NODE_ENV === 'development';
  
  let user = null;
  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    user = data.user;
  } catch (error) {
    console.error("Supabase error in MisionesPage:", error);
  }

  const finalUser = user || (isTest ? { id: 'test-user-id' } : null);

  if (!finalUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <p>Inicia sesión para comenzar tu misión.</p>
      </div>
    );
  }

  // Carga inicial de contenido
  await GlobalContentProvider.getInstance().loadAllContent();

  return (
    <MissionProvider>
      <Navigation />
      <div className="min-h-screen bg-slate-900">
        <MisionesClient userId={finalUser.id} />
      </div>
    </MissionProvider>
  );
}
