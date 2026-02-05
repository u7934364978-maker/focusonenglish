import { Badge, BadgeCategory } from './types';
import { supabase } from '@/lib/supabase-client';
import { certificationService } from '@/lib/services/certification-service';

/**
 * BADGE DEFINITIONS
 * Todos los badges disponibles en el sistema
 */
export const BADGES: Badge[] = [
  // LESSON COMPLETION BADGES
  {
    id: 'first-lesson',
    name: 'Primer Paso',
    description: 'Completa tu primera lección',
    icon: '🎯',
    category: 'lesson-completion',
    requirement: { type: 'lesson-count', target: 1 },
    rarity: 'common',
    xpReward: 50
  },
  {
    id: 'five-lessons',
    name: 'En Camino',
    description: 'Completa 5 lecciones',
    icon: '🚀',
    category: 'lesson-completion',
    requirement: { type: 'lesson-count', target: 5 },
    rarity: 'common',
    xpReward: 100
  },
  {
    id: 'ten-lessons',
    name: 'Dedicado',
    description: 'Completa 10 lecciones',
    icon: '⭐',
    category: 'lesson-completion',
    requirement: { type: 'lesson-count', target: 10 },
    rarity: 'rare',
    xpReward: 200
  },
  {
    id: 'module-complete',
    name: 'Maestro del Módulo',
    description: 'Completa un módulo completo',
    icon: '🏆',
    category: 'lesson-completion',
    requirement: { type: 'lesson-count', target: 6 },
    rarity: 'epic',
    xpReward: 500
  },

  // STREAK BADGES
  {
    id: 'streak-3',
    name: 'Constante',
    description: 'Mantén una racha de 3 días',
    icon: '🔥',
    category: 'streak',
    requirement: { type: 'streak-days', target: 3 },
    rarity: 'common',
    xpReward: 75
  },
  {
    id: 'streak-7',
    name: 'Semana Perfecta',
    description: 'Mantén una racha de 7 días',
    icon: '🔥🔥',
    category: 'streak',
    requirement: { type: 'streak-days', target: 7 },
    rarity: 'rare',
    xpReward: 200
  },
  {
    id: 'streak-30',
    name: 'Disciplina de Hierro',
    description: 'Mantén una racha de 30 días',
    icon: '🔥🔥🔥',
    category: 'streak',
    requirement: { type: 'streak-days', target: 30 },
    rarity: 'epic',
    xpReward: 1000
  },
  {
    id: 'streak-100',
    name: 'Leyenda Imparable',
    description: 'Mantén una racha de 100 días',
    icon: '👑',
    category: 'streak',
    requirement: { type: 'streak-days', target: 100 },
    rarity: 'legendary',
    xpReward: 5000
  },

  // PERFECT SCORE BADGES
  {
    id: 'first-perfect',
    name: 'Perfeccionista',
    description: 'Obtén tu primer 100% en una lección',
    icon: '💯',
    category: 'perfect-score',
    requirement: { type: 'perfect-scores', target: 1 },
    rarity: 'common',
    xpReward: 100
  },
  {
    id: 'five-perfects',
    name: 'Experto Nato',
    description: 'Obtén 5 puntuaciones perfectas',
    icon: '🌟',
    category: 'perfect-score',
    requirement: { type: 'perfect-scores', target: 5 },
    rarity: 'rare',
    xpReward: 300
  },
  {
    id: 'ten-perfects',
    name: 'Maestro Absoluto',
    description: 'Obtén 10 puntuaciones perfectas',
    icon: '💎',
    category: 'perfect-score',
    requirement: { type: 'perfect-scores', target: 10 },
    rarity: 'epic',
    xpReward: 750
  },

  // PRACTICE BADGES
  {
    id: 'practice-10',
    name: 'Practicante',
    description: 'Completa 10 sesiones de práctica',
    icon: '📚',
    category: 'practice',
    requirement: { type: 'practice-sessions', target: 10 },
    rarity: 'common',
    xpReward: 100
  },
  {
    id: 'practice-50',
    name: 'Estudioso',
    description: 'Completa 50 sesiones de práctica',
    icon: '📖',
    category: 'practice',
    requirement: { type: 'practice-sessions', target: 50 },
    rarity: 'rare',
    xpReward: 400
  },

  // SKILL MASTERY BADGES
  {
    id: 'speaking-master',
    name: 'Orador Elocuente',
    description: 'Alcanza nivel experto en Speaking',
    icon: '🎤',
    category: 'mastery',
    requirement: { type: 'skill-level', target: 5, skill: 'speaking' },
    rarity: 'epic',
    xpReward: 1000
  },
  {
    id: 'listening-master',
    name: 'Oído Afinado',
    description: 'Alcanza nivel experto en Listening',
    icon: '👂',
    category: 'mastery',
    requirement: { type: 'skill-level', target: 5, skill: 'listening' },
    rarity: 'epic',
    xpReward: 1000
  },
  {
    id: 'reading-master',
    name: 'Lector Voraz',
    description: 'Alcanza nivel experto en Reading',
    icon: '📚',
    category: 'mastery',
    requirement: { type: 'skill-level', target: 5, skill: 'reading' },
    rarity: 'epic',
    xpReward: 1000
  },
  {
    id: 'writing-master',
    name: 'Escritor Brillante',
    description: 'Alcanza nivel experto en Writing',
    icon: '✍️',
    category: 'mastery',
    requirement: { type: 'skill-level', target: 5, skill: 'writing' },
    rarity: 'epic',
    xpReward: 1000
  },

  // XP MILESTONE BADGES
  {
    id: 'xp-1000',
    name: 'Novato Experimentado',
    description: 'Alcanza 1,000 XP total',
    icon: '⚡',
    category: 'dedication',
    requirement: { type: 'total-xp', target: 1000 },
    rarity: 'common',
    xpReward: 100
  },
  {
    id: 'xp-5000',
    name: 'Estudiante Dedicado',
    description: 'Alcanza 5,000 XP total',
    icon: '⚡⚡',
    category: 'dedication',
    requirement: { type: 'total-xp', target: 5000 },
    rarity: 'rare',
    xpReward: 500
  },
  {
    id: 'xp-10000',
    name: 'Leyenda del Aprendizaje',
    description: 'Alcanza 10,000 XP total',
    icon: '⚡⚡⚡',
    category: 'dedication',
    requirement: { type: 'total-xp', target: 10000 },
    rarity: 'epic',
    xpReward: 1500
  },
  {
    id: 'xp-50000',
    name: 'Gran Maestro',
    description: 'Alcanza 50,000 XP total',
    icon: '👑⚡',
    category: 'dedication',
    requirement: { type: 'total-xp', target: 50000 },
    rarity: 'legendary',
    xpReward: 5000
  },
  
  // SPECIALIZATION BADGES
  {
    id: 'executive-badge',
    name: 'Executive',
    description: 'Completa la línea Professional English',
    icon: '💼',
    category: 'specialization',
    requirement: { type: 'specialization-complete', target: 1, goal: 'trabajo' },
    rarity: 'epic',
    xpReward: 2000
  },
  {
    id: 'nomad-badge',
    name: 'Digital Nomad',
    description: 'Completa la línea Traveler English',
    icon: '🌍',
    category: 'specialization',
    requirement: { type: 'specialization-complete', target: 1, goal: 'viajes' },
    rarity: 'epic',
    xpReward: 2000
  },
  {
    id: 'scholar-badge',
    name: 'Scholar',
    description: 'Completa la línea Academic English',
    icon: '🎓',
    category: 'specialization',
    requirement: { type: 'specialization-complete', target: 1, goal: 'examenes' },
    rarity: 'epic',
    xpReward: 2000
  },
  {
    id: 'ai-pioneer-badge',
    name: 'AI Pioneer',
    description: 'Completa la Masterclass de IA',
    icon: '🤖',
    category: 'specialization',
    requirement: { type: 'specialization-complete', target: 1, goal: 'ia' },
    rarity: 'epic',
    xpReward: 2500
  }
];

/**
 * Get badge by ID
 */
export function getBadge(id: string): Badge | undefined {
  return BADGES.find(badge => badge.id === id);
}

/**
 * Get badges by category
 */
export function getBadgesByCategory(category: BadgeCategory): Badge[] {
  return BADGES.filter(badge => badge.category === category);
}

/**
 * Get badges by rarity
 */
export function getBadgesByRarity(rarity: Badge['rarity']): Badge[] {
  return BADGES.filter(badge => badge.rarity === rarity);
}

/**
 * BADGE_DEFINITIONS - Object indexed by badge ID
 * For easier lookup in components
 */
export const BADGE_DEFINITIONS: Record<string, Badge> = BADGES.reduce((acc, badge) => {
  acc[badge.id] = badge;
  return acc;
}, {} as Record<string, Badge>);

/**
 * Check user progress and award new badges
 * Returns array of newly awarded badges
 */
export async function checkAndAwardBadges(userId: string): Promise<Badge[]> {
  if (!supabase || !userId || userId === 'anonymous') return [];

  try {
    // 1. Fetch user's current badges
    const { data: earnedBadges, error: badgesError } = await supabase
      .from('user_badges')
      .select('badge_id')
      .eq('user_id', userId);

    if (badgesError) throw badgesError;
    const earnedBadgeIds = new Set(earnedBadges.map(b => b.badge_id));

    // 2. Fetch user stats for requirement checking
    // Fetch XP
    const { data: xpData } = await supabase
      .from('user_xp')
      .select('total_xp')
      .eq('user_id', userId)
      .single();
    
    // Fetch Streaks
    const { data: streakData } = await supabase
      .from('user_streaks')
      .select('current_streak, longest_streak')
      .eq('user_id', userId)
      .single();

    // Fetch Completed Interactions count
    const { count: interactionsCount } = await supabase
      .from('user_interaction_progress')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId);

    const newlyAwarded: Badge[] = [];

    // 3. Check each badge
    for (const badge of BADGES) {
      if (earnedBadgeIds.has(badge.id)) continue;

      let isEligible = false;
      const { requirement } = badge;

      switch (requirement.type) {
        case 'total-xp':
          isEligible = (xpData?.total_xp || 0) >= requirement.target;
          break;
        
        case 'streak-days':
          isEligible = (streakData?.longest_streak || 0) >= requirement.target;
          break;

        case 'lesson-count':
          // Approximating lesson count with interaction count (or we could fetch unique lessons)
          // For now, let's say 1 lesson = 10 interactions on average if we don't have a direct count
          isEligible = (interactionsCount || 0) >= (requirement.target * 5); 
          break;

        case 'specialization-complete':
          if (requirement.goal) {
            // Check for each level if any level is complete for this goal
            const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
            for (const level of levels) {
              const status = await certificationService.checkSpecializationCompletion(userId, requirement.goal, level);
              if (status.isComplete) {
                isEligible = true;
                // Issue certificate automatically if specialization is complete
                await certificationService.issueCertificate(userId, requirement.goal, level);
                break;
              }
            }
          }
          break;

        // Add other cases as needed
      }

      if (isEligible) {
        // Award badge in database
        const { error: insertError } = await supabase
          .from('user_badges')
          .insert({
            user_id: userId,
            badge_id: badge.id,
            earned_at: new Date().toISOString()
          });

        if (!insertError) {
          newlyAwarded.push(badge);
          
          // Award XP for the badge
          if (badge.xpReward > 0) {
            const { awardXP } = await import('./xp');
            await awardXP(userId, badge.xpReward, 'badge-unlock', badge.id, `Unlocked badge: ${badge.name}`);
          }
        }
      }
    }

    return newlyAwarded;
  } catch (error) {
    console.error('Error in checkAndAwardBadges:', error);
    return [];
  }
}
