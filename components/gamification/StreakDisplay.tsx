'use client';

import { motion } from 'framer-motion';
import { Flame, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { type StreakData } from '@/lib/gamification/streaks';

interface StreakDisplayProps {
  streak: StreakData;
  compact?: boolean;
}

export function StreakDisplay({ streak, compact = false }: StreakDisplayProps) {
  const { currentStreak, longestStreak } = streak;

  if (compact) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 bg-orange-50 border border-orange-200 rounded-lg">
        <Flame className={`h-5 w-5 ${currentStreak > 0 ? 'text-orange-500' : 'text-gray-400'}`} />
        <div>
          <p className="text-sm font-semibold text-orange-900">
            {currentStreak} day{currentStreak !== 1 ? 's' : ''}
          </p>
          <p className="text-xs text-orange-600">Current streak</p>
        </div>
      </div>
    );
  }

  const milestones = [7, 14, 30, 60, 100, 365];
  const nextMilestone = milestones.find(m => m > currentStreak) || milestones[milestones.length - 1];
  const progressToMilestone = (currentStreak / nextMilestone) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          Streak
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Streak */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-lg"
          >
            <div className="text-center">
              <Flame className="h-10 w-10 text-white mx-auto mb-2" />
              <p className="text-4xl font-bold text-white">{currentStreak}</p>
              <p className="text-sm text-white/90">days</p>
            </div>
          </motion.div>
          <p className="mt-4 text-lg font-semibold text-gray-900">
            {currentStreak === 0 
              ? 'Start your streak today!'
              : `You're on fire! Keep it up!`}
          </p>
        </div>

        {/* Progress to Next Milestone */}
        {currentStreak > 0 && currentStreak < nextMilestone && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Next milestone</span>
              <span className="font-semibold text-orange-600">{nextMilestone} days</span>
            </div>
            <Progress value={progressToMilestone} className="h-2" />
            <p className="text-xs text-center text-gray-500">
              {nextMilestone - currentStreak} more day{nextMilestone - currentStreak !== 1 ? 's' : ''} to go!
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <p className="text-xs text-blue-600 font-medium">Best Streak</p>
            </div>
            <p className="text-2xl font-bold text-blue-900">{longestStreak}</p>
            <p className="text-xs text-blue-600">days</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-green-600" />
              <p className="text-xs text-green-600 font-medium">This Week</p>
            </div>
            <p className="text-2xl font-bold text-green-900">
              {Math.min(currentStreak, 7)}
            </p>
            <p className="text-xs text-green-600">days</p>
          </div>
        </div>

        {/* Milestone Badges */}
        <div>
          <p className="text-sm font-semibold mb-3 text-gray-700">Milestones</p>
          <div className="flex flex-wrap gap-2">
            {milestones.map(milestone => {
              const achieved = currentStreak >= milestone || longestStreak >= milestone;
              return (
                <div
                  key={milestone}
                  className={`px-3 py-1 rounded-full text-xs font-medium border-2 ${
                    achieved
                      ? 'bg-orange-100 border-orange-400 text-orange-900'
                      : 'bg-gray-100 border-gray-300 text-gray-500'
                  }`}
                >
                  {milestone} days
                </div>
              );
            })}
          </div>
        </div>

        {/* Motivation Message */}
        <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
          <p className="text-sm text-center text-gray-700">
            {currentStreak === 0 && "Complete a lesson today to start your streak!"}
            {currentStreak > 0 && currentStreak < 7 && "Great start! Keep learning every day."}
            {currentStreak >= 7 && currentStreak < 30 && "Impressive dedication! You're building a habit."}
            {currentStreak >= 30 && currentStreak < 100 && "Amazing consistency! You're a learning machine."}
            {currentStreak >= 100 && "Legendary streak! You're an inspiration to others."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

interface StreakReminderProps {
  streak: StreakData;
}

export function StreakReminder({ streak }: StreakReminderProps) {
  const today = new Date().toISOString().split('T')[0];
  const needsActivity = streak.lastActivityDate !== today;

  if (!needsActivity || streak.currentStreak === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-orange-50 border-2 border-orange-300 rounded-lg"
    >
      <div className="flex items-start gap-3">
        <Flame className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-semibold text-orange-900">
            Don't lose your {streak.currentStreak}-day streak!
          </p>
          <p className="text-sm text-orange-700 mt-1">
            Complete a lesson today to keep your streak alive.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
