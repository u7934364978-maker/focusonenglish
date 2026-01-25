import { Leaderboard, LeaderboardEntry } from './types';

/**
 * LEADERBOARD CONFIGURATION
 */
export const LEADERBOARD_CONFIG = {
  MAX_ENTRIES: 100,
  UPDATE_INTERVAL_MINUTES: 15,
  PERIODS: ['daily', 'weekly', 'monthly', 'all-time'] as const
};

/**
 * Create leaderboard entry from user data
 */
export function createLeaderboardEntry(
  userId: string,
  userName: string,
  totalXP: number,
  level: number,
  badgesCount: number,
  currentStreak: number,
  avatar?: string
): LeaderboardEntry {
  return {
    userId,
    userName,
    avatar,
    totalXP,
    level,
    rank: 0, // Will be calculated when sorting
    badgesCount,
    currentStreak
  };
}

/**
 * Sort and rank leaderboard entries
 */
export function rankLeaderboard(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  // Sort by totalXP descending, then by level, then by badges
  const sorted = [...entries].sort((a, b) => {
    if (b.totalXP !== a.totalXP) return b.totalXP - a.totalXP;
    if (b.level !== a.level) return b.level - a.level;
    return b.badgesCount - a.badgesCount;
  });
  
  // Assign ranks
  return sorted.map((entry, index) => ({
    ...entry,
    rank: index + 1
  }));
}

/**
 * Get user's position in leaderboard
 */
export function getUserRank(
  leaderboard: Leaderboard,
  userId: string
): number | null {
  const entry = leaderboard.entries.find(e => e.userId === userId);
  return entry ? entry.rank : null;
}

/**
 * Get top N entries from leaderboard
 */
export function getTopEntries(
  leaderboard: Leaderboard,
  count: number = 10
): LeaderboardEntry[] {
  return leaderboard.entries.slice(0, count);
}

/**
 * Get entries around a specific user (for showing context)
 */
export function getEntriesAroundUser(
  leaderboard: Leaderboard,
  userId: string,
  range: number = 2
): LeaderboardEntry[] {
  const userEntry = leaderboard.entries.find(e => e.userId === userId);
  if (!userEntry) return [];
  
  const userIndex = leaderboard.entries.indexOf(userEntry);
  const startIndex = Math.max(0, userIndex - range);
  const endIndex = Math.min(leaderboard.entries.length, userIndex + range + 1);
  
  return leaderboard.entries.slice(startIndex, endIndex);
}

/**
 * Create empty leaderboard
 */
export function createEmptyLeaderboard(
  period: Leaderboard['period']
): Leaderboard {
  return {
    period,
    entries: [],
    updatedAt: new Date()
  };
}

/**
 * Filter leaderboard by period
 */
export function filterByPeriod(
  entries: Array<{
    userId: string;
    userName: string;
    avatar?: string;
    totalXP: number;
    level: number;
    badgesCount: number;
    currentStreak: number;
    lastActivityDate: Date;
  }>,
  period: Leaderboard['period']
): LeaderboardEntry[] {
  const now = new Date();
  const cutoffDate = new Date();
  
  switch (period) {
    case 'daily':
      cutoffDate.setHours(0, 0, 0, 0);
      break;
    case 'weekly':
      cutoffDate.setDate(now.getDate() - 7);
      break;
    case 'monthly':
      cutoffDate.setMonth(now.getMonth() - 1);
      break;
    case 'all-time':
      // No filtering for all-time
      return entries.map(e => createLeaderboardEntry(
        e.userId,
        e.userName,
        e.totalXP,
        e.level,
        e.badgesCount,
        e.currentStreak,
        e.avatar
      ));
  }
  
  const filtered = entries.filter(e => 
    new Date(e.lastActivityDate) >= cutoffDate
  );
  
  return filtered.map(e => createLeaderboardEntry(
    e.userId,
    e.userName,
    e.totalXP,
    e.level,
    e.badgesCount,
    e.currentStreak,
    e.avatar
  ));
}

/**
 * Get rank badge/icon based on position
 */
export function getRankBadge(rank: number): string {
  switch (rank) {
    case 1: return '🥇';
    case 2: return '🥈';
    case 3: return '🥉';
    default: return `#${rank}`;
  }
}

/**
 * Get rank color based on position
 */
export function getRankColor(rank: number): string {
  switch (rank) {
    case 1: return 'gold';
    case 2: return 'silver';
    case 3: return 'bronze';
    default: return 'gray';
  }
}

/**
 * Calculate if user moved up/down in rankings
 */
export interface RankChange {
  moved: boolean;
  direction: 'up' | 'down' | 'same';
  positions: number;
}

export function calculateRankChange(
  previousRank: number | null,
  currentRank: number
): RankChange {
  if (previousRank === null) {
    return {
      moved: true,
      direction: 'up',
      positions: 0
    };
  }
  
  if (currentRank < previousRank) {
    return {
      moved: true,
      direction: 'up',
      positions: previousRank - currentRank
    };
  } else if (currentRank > previousRank) {
    return {
      moved: true,
      direction: 'down',
      positions: currentRank - previousRank
    };
  } else {
    return {
      moved: false,
      direction: 'same',
      positions: 0
    };
  }
}
