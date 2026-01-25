'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useGamification } from '@/lib/hooks/use-gamification';
import { XPDisplay } from './XPDisplay';
import { BadgeDisplay, BadgeNotification } from './BadgeDisplay';
import { StreakDisplay, StreakReminder } from './StreakDisplay';
import { LeaderboardDisplay } from './LeaderboardDisplay';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

export function GamificationPanel() {
  const gamification = useGamification();
  const [newBadges, setNewBadges] = useState<any[]>([]);

  const handleBadgeNotificationClose = (badgeId: string) => {
    setNewBadges(prev => prev.filter(b => b.badge_id !== badgeId));
  };

  if (gamification.isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Badge Notifications */}
      <AnimatePresence>
        {newBadges.map(badge => (
          <BadgeNotification
            key={badge.badge_id}
            badge={badge}
            onClose={() => handleBadgeNotificationClose(badge.badge_id)}
          />
        ))}
      </AnimatePresence>

      {/* Streak Reminder */}
      <StreakReminder streak={gamification.streak} />

      {/* Main Gamification Dashboard */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="streak">Streak</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <XPDisplay
              xp={gamification.xp}
              level={gamification.level}
              xpToNextLevel={gamification.xpToNextLevel}
            />
            <StreakDisplay streak={gamification.streak} />
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <BadgeDisplay badges={gamification.badges} showProgress={true} />
          </div>
        </TabsContent>

        <TabsContent value="badges">
          <BadgeDisplay badges={gamification.badges} showProgress={true} />
        </TabsContent>

        <TabsContent value="streak">
          <StreakDisplay streak={gamification.streak} />
        </TabsContent>

        <TabsContent value="leaderboard">
          <LeaderboardDisplay />
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface GamificationWidgetProps {
  variant?: 'compact' | 'full';
}

export function GamificationWidget({ variant = 'compact' }: GamificationWidgetProps) {
  const gamification = useGamification();

  if (gamification.isLoading) {
    return null;
  }

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-3">
        {/* Level */}
        <div className="flex items-center gap-2 px-3 py-2 bg-purple-50 border border-purple-200 rounded-lg">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-sm font-bold">
            {gamification.level}
          </div>
          <div>
            <p className="text-xs text-purple-600 font-medium">Level</p>
            <p className="text-xs text-purple-500">
              {gamification.xp.toLocaleString()} XP
            </p>
          </div>
        </div>

        {/* Streak */}
        <div className="flex items-center gap-2 px-3 py-2 bg-orange-50 border border-orange-200 rounded-lg">
          <span className="text-2xl">🔥</span>
          <div>
            <p className="text-xs text-orange-600 font-medium">
              {gamification.streak.currentStreak} days
            </p>
            <p className="text-xs text-orange-500">Streak</p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2 px-3 py-2 bg-yellow-50 border border-yellow-200 rounded-lg">
          <span className="text-2xl">🏆</span>
          <div>
            <p className="text-xs text-yellow-600 font-medium">
              {gamification.badges.length} badges
            </p>
            <p className="text-xs text-yellow-500">Earned</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <XPDisplay
        xp={gamification.xp}
        level={gamification.level}
        xpToNextLevel={gamification.xpToNextLevel}
        compact
      />
      <div className="col-span-2 space-y-4">
        <StreakDisplay streak={gamification.streak} compact />
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm font-medium text-yellow-900">
            {gamification.badges.length} Badges Earned
          </p>
          <p className="text-xs text-yellow-600 mt-1">
            Keep learning to unlock more achievements!
          </p>
        </div>
      </div>
    </div>
  );
}
