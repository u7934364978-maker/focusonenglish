'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase-client';
import { awardXP, calculateLevel, XP_REWARDS } from '@/lib/gamification/xp';
import { checkAndAwardBadges } from '@/lib/gamification/badges';
import { type Badge, type EarnedBadge } from '@/lib/gamification/types';
import { updateStreak, type StreakData } from '@/lib/gamification/streaks';

export interface UserGamificationData {
  xp: number;
  level: number;
  xpToNextLevel: number;
  badges: EarnedBadge[];
  streak: StreakData;
  isLoading: boolean;
}

export function useGamification() {
  const [data, setData] = useState<UserGamificationData>({
    xp: 0,
    level: 1,
    xpToNextLevel: 100,
    badges: [],
    streak: {
      currentStreak: 0,
      longestStreak: 0,
      lastActivityDate: new Date().toISOString().split('T')[0],
    },
    isLoading: true,
  });

  useEffect(() => {
    loadGamificationData();
  }, []);

  const loadGamificationData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setData(prev => ({ ...prev, isLoading: false }));
        return;
      }

      // Load XP data
      const { data: xpData } = await supabase
        .from('user_xp')
        .select('*')
        .eq('user_id', user.id)
        .single();

      // Load badges
      const { data: badgesData } = await supabase
        .from('user_badges')
        .select('*')
        .eq('user_id', user.id);

      // Load streak data
      const { data: streakData } = await supabase
        .from('user_streaks')
        .select('*')
        .eq('user_id', user.id)
        .single();

      setData({
        xp: xpData?.total_xp || 0,
        level: xpData?.level || 1,
        xpToNextLevel: xpData?.xp_to_next_level || 100,
        badges: badgesData || [],
        streak: {
          currentStreak: streakData?.current_streak || 0,
          longestStreak: streakData?.longest_streak || 0,
          lastActivityDate: streakData?.last_activity_date || new Date().toISOString().split('T')[0],
        },
        isLoading: false,
      });
    } catch (error) {
      console.error('Error loading gamification data:', error);
      setData(prev => ({ ...prev, isLoading: false }));
    }
  };

  const addXP = async (amount: number, source: string, sourceId?: string, description?: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Award XP
      const result = await awardXP(user.id, amount, source, sourceId, description);
      
      if (result) {
        // Update local state
        setData(prev => ({
          ...prev,
          xp: result.totalXP,
          level: result.level,
          xpToNextLevel: result.xpToNextLevel,
        }));

        // Check for new badges
        await checkBadges();
        
        return result;
      }
    } catch (error) {
      console.error('Error adding XP:', error);
    }
  };

  const checkBadges = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const newBadges = await checkAndAwardBadges(user.id);
      
      if (newBadges && newBadges.length > 0) {
        // Reload badges
        const { data: badgesData } = await supabase
          .from('user_badges')
          .select('*')
          .eq('user_id', user.id);

        setData(prev => ({
          ...prev,
          badges: badgesData || [],
        }));

        return newBadges;
      }
    } catch (error) {
      console.error('Error checking badges:', error);
    }
  };

  const recordActivity = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const streakData = await updateStreak(user.id);
      
      if (streakData) {
        setData(prev => ({
          ...prev,
          streak: streakData,
        }));

        return streakData;
      }
    } catch (error) {
      console.error('Error recording activity:', error);
    }
  };

  const completeExercise = async (exerciseId: string, score: number, maxScore: number) => {
    try {
      // Record activity for streak
      await recordActivity();

      // Award XP based on score
      const baseXP = XP_REWARDS['practice-session'] || 20;
      const xpAmount = Math.floor((score / maxScore) * baseXP);
      const bonusXP = score === maxScore ? (XP_REWARDS['perfect-exercise-bonus'] || 10) : 0;
      
      await addXP(xpAmount + bonusXP, 'exercise', exerciseId, 
        `Completed exercise ${exerciseId} with ${score}/${maxScore} points`);

      // Check for badges
      const newBadges = await checkBadges();
      
      return { newBadges };
    } catch (error) {
      console.error('Error completing exercise:', error);
    }
  };

  const completeLesson = async (lessonId: string, totalScore: number, maxScore: number) => {
    try {
      // Record activity for streak
      await recordActivity();

      // Award XP based on lesson completion
      const baseXP = XP_REWARDS['lesson-completion'] || 100;
      const xpAmount = Math.floor((totalScore / maxScore) * baseXP);
      const bonusXP = totalScore === maxScore ? (XP_REWARDS['perfect-score'] || 50) : 0;
      
      await addXP(xpAmount + bonusXP, 'lesson', lessonId, 
        `Completed lesson ${lessonId} with ${totalScore}/${maxScore} points`);

      // Check for badges
      const newBadges = await checkBadges();
      
      return { newBadges };
    } catch (error) {
      console.error('Error completing lesson:', error);
    }
  };

  const completeMission = async (missionId: string, score: number) => {
    try {
      await recordActivity();

      const baseXP = XP_REWARDS['ai-mission'] || 150;
      const xpAmount = Math.floor((score / 100) * baseXP);
      
      await addXP(xpAmount, 'ai-mission', missionId, 
        `Misión AI: ${missionId} completada con ${score}/100 puntos`);

      const newBadges = await checkBadges();
      return { newBadges };
    } catch (error) {
      console.error('Error completing mission:', error);
    }
  };

  return {
    ...data,
    addXP,
    checkBadges,
    recordActivity,
    completeExercise,
    completeLesson,
    completeMission,
    refresh: loadGamificationData,
  };
}
