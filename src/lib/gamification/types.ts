// ============================================
// GAMIFICATION SYSTEM TYPES
// ============================================

/**
 * Badge/Achievement System
 * Reconoce logros específicos del estudiante
 */
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // emoji or icon name
  category: BadgeCategory;
  requirement: BadgeRequirement;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  xpReward: number;
  unlockedAt?: Date;
}

export type BadgeCategory = 
  | 'lesson-completion'
  | 'streak'
  | 'perfect-score'
  | 'practice'
  | 'speed'
  | 'dedication'
  | 'mastery'
  | 'social';

export interface BadgeRequirement {
  type: 'lesson-count' | 'streak-days' | 'perfect-scores' | 'total-xp' | 'practice-sessions' | 'skill-level';
  target: number;
  skill?: 'speaking' | 'listening' | 'reading' | 'writing' | 'grammar' | 'vocabulary';
}

/**
 * Streak System
 * Rastrear días consecutivos de estudio
 */
export interface Streak {
  userId: string;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: Date;
  totalActiveDays: number;
  streakHistory: StreakEntry[];
}

export interface StreakEntry {
  date: Date;
  maintained: boolean;
  activitiesCompleted: number;
}

/**
 * XP/Level System
 * Sistema de experiencia y niveles
 */
export interface UserLevel {
  userId: string;
  currentLevel: number;
  currentXP: number;
  totalXP: number;
  xpToNextLevel: number;
  title: string; // e.g., "Beginner", "Intermediate", "Advanced"
}

export interface XPEvent {
  id: string;
  userId: string;
  amount: number;
  source: XPSource;
  timestamp: Date;
  details?: string;
}

export type XPSource = 
  | 'lesson-completion'
  | 'perfect-score'
  | 'streak-bonus'
  | 'badge-unlock'
  | 'practice-session'
  | 'quiz-completion'
  | 'daily-goal';

/**
 * Leaderboard System
 * Rankings y competición (opcional)
 */
export interface LeaderboardEntry {
  userId: string;
  userName: string;
  avatar?: string;
  totalXP: number;
  level: number;
  rank: number;
  badgesCount: number;
  currentStreak: number;
}

export interface Leaderboard {
  period: 'daily' | 'weekly' | 'monthly' | 'all-time';
  entries: LeaderboardEntry[];
  updatedAt: Date;
}

/**
 * Complete Gamification Profile
 */
export interface GamificationProfile {
  userId: string;
  level: UserLevel;
  streak: Streak;
  badges: Badge[];
  xpHistory: XPEvent[];
  leaderboardPosition?: {
    daily: number;
    weekly: number;
    monthly: number;
    allTime: number;
  };
  stats: {
    totalLessonsCompleted: number;
    totalPracticeTime: number; // minutes
    perfectScores: number;
    favoriteSkill: string;
    studyStreak: number;
  };
}

/**
 * Daily Goals System
 */
export interface DailyGoal {
  id: string;
  description: string;
  target: number;
  current: number;
  xpReward: number;
  completed: boolean;
  date: Date;
}

/**
 * Achievements Progress
 */
export interface AchievementProgress {
  badgeId: string;
  current: number;
  target: number;
  percentage: number;
}
