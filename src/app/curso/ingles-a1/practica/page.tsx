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

  // Get progress, SRS performance and mastery
  const performance = await premiumCourseServerService.getSRSPerformance(userId, filteredInteractions.map(i => i.interaction_id));
  const mastery = await premiumCourseServerService.getUserMastery(userId);
  
  // Use adaptive engine to generate smart sequence (Ultra-intelligent Duolingo-style)
  const adaptiveQueue = AdaptiveEngine.generateSmartSequence(
    filteredInteractions as any,
    performance,
    mastery,
    {
      maxExercises: 20
    }
  );

  return <PracticeClient interactions={adaptiveQueue as any} />;
}
