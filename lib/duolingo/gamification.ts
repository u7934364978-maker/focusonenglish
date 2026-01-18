// ============================================
// GAMIFICATION SYSTEM - XP, STREAKS, ACHIEVEMENTS
// ============================================

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  lastPracticeDate: Date | null;
  gems: number;
  lives: number;
  maxLives: number;
  lastLivesRefill: Date | null;
  achievements: string[];
  createdAt: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: number;
  type: 'xp' | 'streak' | 'lessons' | 'perfect' | 'speed' | 'special';
  reward: {
    gems?: number;
    xp?: number;
  };
  unlockedAt?: Date;
}

export interface DailyGoal {
  targetXP: number;
  earnedXP: number;
  completed: boolean;
  date: Date;
}

export interface LeaderboardEntry {
  userId: string;
  name: string;
  avatar?: string;
  xp: number;
  streak: number;
  rank: number;
}

// ============================================
// ACHIEVEMENTS LIST
// ============================================

export const ACHIEVEMENTS: Achievement[] = [
  // XP Milestones
  {
    id: 'first-lesson',
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎓',
    requirement: 1,
    type: 'lessons',
    reward: { gems: 5, xp: 10 }
  },
  {
    id: 'xp-100',
    title: 'Getting Started',
    description: 'Earn 100 XP',
    icon: '⭐',
    requirement: 100,
    type: 'xp',
    reward: { gems: 10 }
  },
  {
    id: 'xp-500',
    title: 'Rising Star',
    description: 'Earn 500 XP',
    icon: '🌟',
    requirement: 500,
    type: 'xp',
    reward: { gems: 25 }
  },
  {
    id: 'xp-1000',
    title: 'Champion',
    description: 'Earn 1,000 XP',
    icon: '🏆',
    requirement: 1000,
    type: 'xp',
    reward: { gems: 50 }
  },
  {
    id: 'xp-5000',
    title: 'Legend',
    description: 'Earn 5,000 XP',
    icon: '👑',
    requirement: 5000,
    type: 'xp',
    reward: { gems: 100 }
  },
  
  // Streak Achievements
  {
    id: 'streak-3',
    title: 'On Fire!',
    description: '3 day streak',
    icon: '🔥',
    requirement: 3,
    type: 'streak',
    reward: { gems: 10 }
  },
  {
    id: 'streak-7',
    title: 'Week Warrior',
    description: '7 day streak',
    icon: '⚡',
    requirement: 7,
    type: 'streak',
    reward: { gems: 20 }
  },
  {
    id: 'streak-14',
    title: 'Two Weeks Strong',
    description: '14 day streak',
    icon: '💪',
    requirement: 14,
    type: 'streak',
    reward: { gems: 40 }
  },
  {
    id: 'streak-30',
    title: 'Monthly Master',
    description: '30 day streak',
    icon: '🎯',
    requirement: 30,
    type: 'streak',
    reward: { gems: 100 }
  },
  {
    id: 'streak-100',
    title: 'Century Club',
    description: '100 day streak',
    icon: '💎',
    requirement: 100,
    type: 'streak',
    reward: { gems: 500 }
  },
  
  // Lesson Completion
  {
    id: 'lessons-10',
    title: 'Dedicated Learner',
    description: 'Complete 10 lessons',
    icon: '📚',
    requirement: 10,
    type: 'lessons',
    reward: { gems: 15 }
  },
  {
    id: 'lessons-50',
    title: 'Study Addict',
    description: 'Complete 50 lessons',
    icon: '🎓',
    requirement: 50,
    type: 'lessons',
    reward: { gems: 50 }
  },
  {
    id: 'lessons-100',
    title: 'Unstoppable',
    description: 'Complete 100 lessons',
    icon: '🚀',
    requirement: 100,
    type: 'lessons',
    reward: { gems: 100 }
  },
  
  // Perfect Scores
  {
    id: 'perfect-1',
    title: 'Perfectionist',
    description: 'Complete a lesson with 100% accuracy',
    icon: '💯',
    requirement: 1,
    type: 'perfect',
    reward: { gems: 20 }
  },
  {
    id: 'perfect-10',
    title: 'Flawless',
    description: 'Complete 10 lessons with 100% accuracy',
    icon: '✨',
    requirement: 10,
    type: 'perfect',
    reward: { gems: 50 }
  },
  
  // Speed Achievements
  {
    id: 'speed-fast',
    title: 'Speed Demon',
    description: 'Complete a lesson in under 3 minutes',
    icon: '⚡',
    requirement: 1,
    type: 'speed',
    reward: { gems: 15 }
  },
  
  // Special
  {
    id: 'early-bird',
    title: 'Early Bird',
    description: 'Practice before 7 AM',
    icon: '🌅',
    requirement: 1,
    type: 'special',
    reward: { gems: 10 }
  },
  {
    id: 'night-owl',
    title: 'Night Owl',
    description: 'Practice after 11 PM',
    icon: '🦉',
    requirement: 1,
    type: 'special',
    reward: { gems: 10 }
  }
];

// ============================================
// GAMIFICATION FUNCTIONS
// ============================================

export function calculateStreak(lastPracticeDate: Date | null, currentDate: Date = new Date()): number {
  if (!lastPracticeDate) return 0;
  
  const daysDiff = Math.floor((currentDate.getTime() - lastPracticeDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // If practiced today or yesterday, maintain streak
  if (daysDiff <= 1) {
    return 1; // Will be incremented if user practices today
  }
  
  // Streak broken
  return 0;
}

export function shouldRefillLives(lastRefill: Date | null, currentDate: Date = new Date()): boolean {
  if (!lastRefill) return true;
  
  const hoursDiff = (currentDate.getTime() - lastRefill.getTime()) / (1000 * 60 * 60);
  return hoursDiff >= 4; // Refill every 4 hours
}

export function getXPForLevel(level: number): number {
  // XP required to reach each level (exponential growth)
  return Math.floor(100 * Math.pow(1.5, level - 1));
}

export function getLevelFromXP(totalXP: number): number {
  let level = 1;
  let xpNeeded = 0;
  
  while (xpNeeded <= totalXP) {
    level++;
    xpNeeded += getXPForLevel(level);
  }
  
  return level - 1;
}

export function getXPProgress(totalXP: number): { level: number; currentXP: number; nextLevelXP: number; percentage: number } {
  const level = getLevelFromXP(totalXP);
  let xpForCurrentLevel = 0;
  
  for (let i = 1; i < level; i++) {
    xpForCurrentLevel += getXPForLevel(i);
  }
  
  const currentXP = totalXP - xpForCurrentLevel;
  const nextLevelXP = getXPForLevel(level + 1);
  const percentage = Math.round((currentXP / nextLevelXP) * 100);
  
  return { level, currentXP, nextLevelXP, percentage };
}

export function checkAchievements(
  user: UserProfile,
  stats: {
    lessonsCompleted?: number;
    perfectLessons?: number;
    lessonTime?: number;
    currentHour?: number;
  }
): Achievement[] {
  const unlockedAchievements: Achievement[] = [];
  
  for (const achievement of ACHIEVEMENTS) {
    // Skip if already unlocked
    if (user.achievements.includes(achievement.id)) continue;
    
    let shouldUnlock = false;
    
    switch (achievement.type) {
      case 'xp':
        shouldUnlock = user.totalXP >= achievement.requirement;
        break;
      case 'streak':
        shouldUnlock = user.currentStreak >= achievement.requirement;
        break;
      case 'lessons':
        shouldUnlock = (stats.lessonsCompleted || 0) >= achievement.requirement;
        break;
      case 'perfect':
        shouldUnlock = (stats.perfectLessons || 0) >= achievement.requirement;
        break;
      case 'speed':
        shouldUnlock = (stats.lessonTime || Infinity) < 180; // 3 minutes
        break;
      case 'special':
        if (achievement.id === 'early-bird') {
          shouldUnlock = (stats.currentHour || 12) < 7;
        } else if (achievement.id === 'night-owl') {
          shouldUnlock = (stats.currentHour || 12) >= 23;
        }
        break;
    }
    
    if (shouldUnlock) {
      unlockedAchievements.push({ ...achievement, unlockedAt: new Date() });
    }
  }
  
  return unlockedAchievements;
}

export function calculateDailyGoalProgress(earnedXP: number, targetXP: number = 20): DailyGoal {
  return {
    targetXP,
    earnedXP,
    completed: earnedXP >= targetXP,
    date: new Date()
  };
}

export function getLeaderboard(users: UserProfile[]): LeaderboardEntry[] {
  // Sort by XP (descending) and streak (descending)
  const sorted = [...users].sort((a, b) => {
    if (b.totalXP !== a.totalXP) return b.totalXP - a.totalXP;
    return b.currentStreak - a.currentStreak;
  });
  
  return sorted.map((user, index) => ({
    userId: user.id,
    name: user.name,
    avatar: user.avatar,
    xp: user.totalXP,
    streak: user.currentStreak,
    rank: index + 1
  }));
}

// ============================================
// DEFAULT USER PROFILE
// ============================================

export function createDefaultUserProfile(userId: string, email: string, name: string): UserProfile {
  return {
    id: userId,
    email,
    name,
    level: 'A1',
    totalXP: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastPracticeDate: null,
    gems: 50, // Starting gems
    lives: 5,
    maxLives: 5,
    lastLivesRefill: null,
    achievements: [],
    createdAt: new Date()
  };
}

// ============================================
// XP REWARDS
// ============================================

export const XP_REWARDS = {
  CORRECT_ANSWER: 10,
  PERFECT_LESSON: 20, // Bonus for 100% accuracy
  FIRST_TRY: 5, // Bonus for getting it right first try
  STREAK_BONUS: 5, // Daily bonus for maintaining streak
  UNIT_COMPLETE: 50,
  LEVEL_COMPLETE: 200,
  DAILY_GOAL: 10
};

export function calculateLessonXP(
  correctAnswers: number,
  totalQuestions: number,
  mistakes: number,
  timeInSeconds: number
): { totalXP: number; breakdown: Record<string, number> } {
  const breakdown: Record<string, number> = {};
  
  // Base XP for correct answers
  breakdown['Correct Answers'] = correctAnswers * XP_REWARDS.CORRECT_ANSWER;
  
  // Perfect lesson bonus
  if (correctAnswers === totalQuestions && mistakes === 0) {
    breakdown['Perfect Bonus'] = XP_REWARDS.PERFECT_LESSON;
  }
  
  // Speed bonus (if completed in under 5 minutes)
  if (timeInSeconds < 300) {
    breakdown['Speed Bonus'] = Math.round((300 - timeInSeconds) / 30);
  }
  
  const totalXP = Object.values(breakdown).reduce((sum, xp) => sum + xp, 0);
  
  return { totalXP, breakdown };
}
