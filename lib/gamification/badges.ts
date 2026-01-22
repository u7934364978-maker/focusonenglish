import { Badge, BadgeCategory } from './types';

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
