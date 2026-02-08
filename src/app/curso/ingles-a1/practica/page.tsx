import React from 'react';
import { premiumCourseService } from '@/lib/services/premium-course-service';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import { createClient } from '@/lib/supabase/server'; // Use server client here
import { AdaptiveEngine } from '@/lib/course-engine/adaptive';
import PracticeClient from './PracticeClient';

export default async function PracticePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const userId = user?.id || 'anonymous';

  // Fetch all interactions
  const allInteractions = await premiumCourseServerService.getAllInteractions('ingles-a1');
  
  // Only use interactions from units 1-60
  const units = await premiumCourseServerService.getUnits('ingles-a1');
  const allowedUnits = units.slice(0, 60);
  const allowedInteractionIds = new Set(allowedUnits.flatMap(u => u.interactionIds));
  const filteredInteractions = allInteractions.filter(i => allowedInteractionIds.has(i.interaction_id));

  // Get progress and SRS performance
  const completedIds = await premiumCourseService.getA1Progress(userId);
  const performance = await premiumCourseServerService.getSRSPerformance(userId, filteredInteractions.map(i => i.interaction_id));
  
  // Use adaptive engine to generate global sequence (Duolingo-style)
  const adaptiveQueue = AdaptiveEngine.generateGlobalSequence(
    filteredInteractions,
    performance,
    completedIds,
    20 // session length
  );

  return <PracticeClient interactions={adaptiveQueue} />;
}
