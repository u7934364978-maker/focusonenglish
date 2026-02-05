import React from 'react';
import { premiumCourseService } from '@/lib/services/premium-course-service';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import { createClient } from '@/lib/supabase/client';
import PracticeClient from './PracticeClient';

export default async function PracticePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const userId = user?.id || 'anonymous';

  // Fetch all interactions and filter by those NOT completed
  const allInteractions = await premiumCourseServerService.getAllInteractions('ingles-a1');
  
  // Only use interactions from units 1-60
  const units = await premiumCourseServerService.getUnits('ingles-a1');
  const allowedUnits = units.slice(0, 60);
  const allowedInteractionIds = new Set(allowedUnits.flatMap(u => u.interactionIds));
  const filteredInteractions = allInteractions.filter(i => allowedInteractionIds.has(i.interaction_id));

  const completedIds = await premiumCourseService.getA1Progress(userId);
  
  const completedSet = new Set(completedIds);
  const pendingInteractions = filteredInteractions.filter(
    int => !completedSet.has(int.interaction_id)
  );

  return <PracticeClient interactions={pendingInteractions} />;
}
