import React from 'react';
import { premiumCourseService } from '@/lib/services/premium-course-service';
import { createClient } from '@/lib/supabase/client';
import { redirect } from 'next/navigation';
import PracticeClient from './PracticeClient';

export default async function PracticePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Authentication disabled for now
  /*
  if (!user) {
    redirect('/auth/login');
  }
  */

  const userId = user?.id || 'anonymous';

  // Fetch all interactions and filter by those NOT completed
  const allInteractions = await premiumCourseService.getAllB2Interactions();
  const completedIds = await premiumCourseService.getB2Progress(userId);
  
  const completedSet = new Set(completedIds);
  const pendingInteractions = allInteractions.filter(
    int => !completedSet.has(int.interaction_id)
  );

  return <PracticeClient interactions={pendingInteractions} />;
}
