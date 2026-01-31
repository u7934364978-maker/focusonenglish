'use client'

import { useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase-client'

export function useMethodologyProgress() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // --- ABP: Projects ---
  const saveProjectProgress = useCallback(async (projectId: string, status: string) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { error } = await supabase
      .from('methodology_project_progress')
      .upsert({ 
        user_id: user.id, 
        project_id: projectId, 
        status,
        last_accessed: new Date().toISOString()
      })
    
    if (error) setError(error.message)
  }, [])

  const saveTaskProgress = useCallback(async (projectId: string, taskId: string, completed: boolean) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { error } = await supabase
      .from('methodology_task_progress')
      .upsert({ 
        user_id: user.id, 
        project_id: projectId, 
        task_id: taskId, 
        completed,
        completed_at: completed ? new Date().toISOString() : null
      })
    
    if (error) setError(error.message)
  }, [])

  // --- Gamification: Micro-lessons ---
  const saveLessonProgress = useCallback(async (lessonId: string, completed: boolean, xpEarned: number) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      console.warn('No user found for saving progress')
      return
    }

    console.log(`Saving lesson progress: ${lessonId}, completed: ${completed}`)
    const { error } = await supabase
      .from('methodology_micro_lesson_progress')
      .upsert({ 
        user_id: user.id, 
        lesson_id: lessonId, 
        completed,
        xp_earned: xpEarned,
        completed_at: completed ? new Date().toISOString() : null
      })
    
    if (error) {
      console.error('Error saving lesson progress:', error)
      setError(error.message)
    }
  }, [])

  // --- Gamification: XP, Badges, Streaks ---
  const updateXP = useCallback(async (amount: number, source: string, sourceId?: string) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    // 1. Insert transaction
    await supabase.from('xp_transactions').insert({
      user_id: user.id,
      amount,
      source,
      source_id: sourceId,
      created_at: new Date().toISOString()
    })

    // 2. Update user_xp (upsert)
    const { data: currentXP } = await supabase
      .from('user_xp')
      .select('total_xp')
      .eq('user_id', user.id)
      .single()

    const newTotal = (currentXP?.total_xp || 0) + amount

    await supabase.from('user_xp').upsert({
      user_id: user.id,
      total_xp: newTotal,
      updated_at: new Date().toISOString()
    })
  }, [])

  const saveBadgeProgress = useCallback(async (badgeId: string, progress: number = 0) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    await supabase.from('user_badges').upsert({
      user_id: user.id,
      badge_id: badgeId,
      progress,
      earned_at: new Date().toISOString()
    })
  }, [])

  const updateStreak = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data: streak } = await supabase
      .from('user_streaks')
      .select('*')
      .eq('user_id', user.id)
      .single()

    const today = new Date().toISOString().split('T')[0]
    
    if (!streak) {
      await supabase.from('user_streaks').insert({
        user_id: user.id,
        current_streak: 1,
        longest_streak: 1,
        last_activity_date: today,
        streak_data: [today]
      })
    } else if (streak.last_activity_date !== today) {
      const lastDate = new Date(streak.last_activity_date)
      const diffDays = Math.floor((new Date(today).getTime() - lastDate.getTime()) / (1000 * 3600 * 24))
      
      let newStreak = streak.current_streak
      if (diffDays === 1) {
        newStreak += 1
      } else if (diffDays > 1) {
        newStreak = 1
      }

      await supabase.from('user_streaks').update({
        current_streak: newStreak,
        longest_streak: Math.max(newStreak, streak.longest_streak),
        last_activity_date: today,
        streak_data: [...(streak.streak_data || []), today]
      }).eq('user_id', user.id)
    }
  }, [])

  // --- AR: Vocabulary ---
  const saveARVocabulary = useCallback(async (wordId: string, learned: boolean) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { error } = await supabase
      .from('methodology_ar_vocabulary')
      .upsert({ 
        user_id: user.id, 
        word_id: wordId, 
        learned,
        learned_at: learned ? new Date().toISOString() : null
      })
    
    if (error) setError(error.message)
  }, [])

  // --- Unified Stats ---
  const updateMethodologyStats = useCallback(async (updates: {
    ai_conversations_count?: number,
    ai_total_minutes?: number,
    ai_average_fluency?: number,
    pronunciation_practices_count?: number,
    pronunciation_average_score?: number,
    social_clubs_joined?: number
  }) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    // First try to select existing stats
    const { data: existingStats } = await supabase
      .from('methodology_stats')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle()

    const { error } = await supabase
      .from('methodology_stats')
      .upsert({ 
        user_id: user.id, 
        ai_conversations_count: (existingStats?.ai_conversations_count || 0) + (updates.ai_conversations_count || 0),
        ai_total_minutes: (existingStats?.ai_total_minutes || 0) + (updates.ai_total_minutes || 0),
        // Average fluency: calculate new average if provided
        ai_average_fluency: updates.ai_average_fluency 
          ? ((existingStats?.ai_average_fluency || 0) + updates.ai_average_fluency) / 2
          : (existingStats?.ai_average_fluency || 0),
        pronunciation_practices_count: (existingStats?.pronunciation_practices_count || 0) + (updates.pronunciation_practices_count || 0),
        pronunciation_average_score: updates.pronunciation_average_score
          ? ((existingStats?.pronunciation_average_score || 0) + updates.pronunciation_average_score) / 2
          : (existingStats?.pronunciation_average_score || 0),
        social_clubs_joined: (existingStats?.social_clubs_joined || 0) + (updates.social_clubs_joined || 0),
        updated_at: new Date().toISOString()
      })
    
    if (error) setError(error.message)
  }, [])

  // --- Data Fetching ---
  const fetchAllProgress = useCallback(async () => {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      setLoading(false)
      return null
    }

    try {
      const [
        projectsRes,
        tasksRes,
        lessonsRes,
        arWordsRes,
        statsRes,
        xpRes,
        badgesRes,
        streaksRes
      ] = await Promise.all([
        supabase.from('methodology_project_progress').select('*').eq('user_id', user.id),
        supabase.from('methodology_task_progress').select('*').eq('user_id', user.id),
        supabase.from('methodology_micro_lesson_progress').select('*').eq('user_id', user.id),
        supabase.from('methodology_ar_vocabulary').select('*').eq('user_id', user.id),
        supabase.from('methodology_stats').select('*').eq('user_id', user.id).maybeSingle(),
        supabase.from('user_xp').select('*').eq('user_id', user.id).maybeSingle(),
        supabase.from('user_badges').select('*').eq('user_id', user.id),
        supabase.from('user_streaks').select('*').eq('user_id', user.id).maybeSingle()
      ])

      if (projectsRes.error) console.error('Error fetching projects:', projectsRes.error)
      if (tasksRes.error) console.error('Error fetching tasks:', tasksRes.error)
      if (lessonsRes.error) console.error('Error fetching lessons:', lessonsRes.error)
      if (arWordsRes.error) console.error('Error fetching AR words:', arWordsRes.error)
      if (statsRes.error) console.error('Error fetching stats:', statsRes.error)
      if (xpRes.error) console.error('Error fetching XP:', xpRes.error)
      if (badgesRes.error) console.error('Error fetching badges:', badgesRes.error)
      if (streaksRes.error) console.error('Error fetching streaks:', streaksRes.error)

      return { 
        projects: projectsRes.data, 
        tasks: tasksRes.data, 
        lessons: lessonsRes.data, 
        arWords: arWordsRes.data, 
        stats: statsRes.data,
        xp: xpRes.data,
        badges: badgesRes.data,
        streaks: streaksRes.data
      }
    } catch (err) {
      setError('Failed to fetch methodology progress')
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    error,
    saveProjectProgress,
    saveTaskProgress,
    saveLessonProgress,
    saveARVocabulary,
    updateMethodologyStats,
    updateXP,
    saveBadgeProgress,
    updateStreak,
    fetchAllProgress
  }
}
