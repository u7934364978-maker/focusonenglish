'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap, Target, Crown } from 'lucide-react';
import { BADGE_DEFINITIONS, type Badge } from '@/lib/gamification/badges';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge as UIBadge } from '@/components/ui/badge';

interface BadgeDisplayProps {
  badges: Badge[];
  showProgress?: boolean;
}

const BADGE_ICONS: { [key: string]: any } = {
  trophy: Trophy,
  star: Star,
  award: Award,
  zap: Zap,
  target: Target,
  crown: Crown,
};

export function BadgeDisplay({ badges, showProgress = true }: BadgeDisplayProps) {
  const earnedBadgeIds = new Set(badges.map(b => b.badge_id));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Achievements ({badges.length}/{Object.keys(BADGE_DEFINITIONS).length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(BADGE_DEFINITIONS).map(([badgeId, definition]) => {
            const isEarned = earnedBadgeIds.has(badgeId);
            const userBadge = badges.find(b => b.badge_id === badgeId);
            const Icon = BADGE_ICONS[definition.icon] || Award;
            const progress = userBadge?.progress || 0;
            const requirement = definition.requirement;

            return (
              <motion.div
                key={badgeId}
                whileHover={{ scale: isEarned ? 1.05 : 1 }}
                className={`relative p-4 rounded-lg border-2 transition-all ${
                  isEarned
                    ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-400'
                    : 'bg-gray-50 border-gray-200 opacity-60'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div
                    className={`p-3 rounded-full ${
                      isEarned ? 'bg-yellow-400' : 'bg-gray-300'
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isEarned ? 'text-white' : 'text-gray-500'
                      }`}
                    />
                  </div>
                  
                  <div className="text-center">
                    <p className="font-semibold text-sm">{definition.name}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      {definition.description}
                    </p>
                  </div>

                  <UIBadge
                    variant={isEarned ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {definition.rarity}
                  </UIBadge>

                  {isEarned && userBadge && (
                    <p className="text-xs text-gray-500">
                      {new Date(userBadge.earned_at).toLocaleDateString()}
                    </p>
                  )}

                  {!isEarned && showProgress && requirement > 1 && (
                    <div className="w-full space-y-1">
                      <Progress value={(progress / requirement) * 100} />
                      <p className="text-xs text-center text-gray-600">
                        {progress}/{requirement}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

interface BadgeNotificationProps {
  badge: Badge;
  onClose: () => void;
}

export function BadgeNotification({ badge, onClose }: BadgeNotificationProps) {
  const definition = BADGE_DEFINITIONS[badge.badge_id];
  if (!definition) return null;

  const Icon = BADGE_ICONS[definition.icon] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed top-4 right-4 z-50 max-w-sm"
    >
      <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            New Achievement Unlocked!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-yellow-400 rounded-full">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">{definition.name}</p>
              <p className="text-sm text-gray-600 mt-1">
                {definition.description}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <UIBadge variant="default" className="text-xs">
                  {definition.rarity}
                </UIBadge>
                <UIBadge variant="secondary" className="text-xs">
                  +{definition.xpReward} XP
                </UIBadge>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-4 w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition-colors"
          >
            Awesome!
          </button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
