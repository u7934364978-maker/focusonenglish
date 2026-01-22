'use client';

import { motion } from 'framer-motion';
import { Zap, TrendingUp, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface XPDisplayProps {
  xp: number;
  level: number;
  xpToNextLevel: number;
  compact?: boolean;
}

export function XPDisplay({ xp, level, xpToNextLevel, compact = false }: XPDisplayProps) {
  const currentLevelXP = Math.pow(level - 1, 2) * 100;
  const nextLevelXP = Math.pow(level, 2) * 100;
  const xpInLevel = xp - currentLevelXP;
  const xpRequiredForLevel = nextLevelXP - currentLevelXP;
  const progressPercent = (xpInLevel / xpRequiredForLevel) * 100;

  if (compact) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold">
          {level}
        </div>
        <div className="flex-1">
          <p className="text-xs text-purple-600 font-medium">Level {level}</p>
          <Progress value={progressPercent} className="h-2 mt-1" />
          <p className="text-xs text-purple-600 mt-1">
            {xpInLevel.toLocaleString()} / {xpRequiredForLevel.toLocaleString()} XP
          </p>
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-purple-500" />
          Level & Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Level Display */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
            <div className="relative z-10 text-center">
              <Star className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-4xl font-bold text-white">{level}</p>
            </div>
          </motion.div>
          <p className="mt-4 text-lg font-semibold text-gray-900">
            Level {level}
          </p>
          <p className="text-sm text-gray-600">
            {getLevelTitle(level)}
          </p>
        </div>

        {/* XP Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Progress to Level {level + 1}</span>
            <span className="font-semibold text-purple-600">
              {Math.round(progressPercent)}%
            </span>
          </div>
          <div className="relative">
            <Progress value={progressPercent} className="h-3" />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full"
            />
          </div>
          <p className="text-xs text-center text-gray-500">
            {xpInLevel.toLocaleString()} / {xpRequiredForLevel.toLocaleString()} XP
            <span className="ml-2">({xpToNextLevel.toLocaleString()} to go)</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-purple-600" />
              <p className="text-xs text-purple-600 font-medium">Total XP</p>
            </div>
            <p className="text-2xl font-bold text-purple-900">
              {xp.toLocaleString()}
            </p>
          </div>

          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-indigo-600" />
              <p className="text-xs text-indigo-600 font-medium">Next Level</p>
            </div>
            <p className="text-2xl font-bold text-indigo-900">{level + 1}</p>
            <p className="text-xs text-indigo-600">
              {xpToNextLevel.toLocaleString()} XP needed
            </p>
          </div>
        </div>

        {/* Level Milestones */}
        <div>
          <p className="text-sm font-semibold mb-3 text-gray-700">Level Milestones</p>
          <div className="space-y-2">
            {[5, 10, 25, 50, 100].map(milestone => {
              const reached = level >= milestone;
              const xpForMilestone = Math.pow(milestone, 2) * 100;
              return (
                <div
                  key={milestone}
                  className={`flex items-center justify-between p-2 rounded-lg ${
                    reached ? 'bg-purple-100 border border-purple-300' : 'bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Star
                      className={`h-4 w-4 ${
                        reached ? 'text-purple-600 fill-purple-600' : 'text-gray-400'
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        reached ? 'text-purple-900' : 'text-gray-600'
                      }`}
                    >
                      Level {milestone}
                    </span>
                  </div>
                  <span className="text-xs text-gray-600">
                    {xpForMilestone.toLocaleString()} XP
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Motivation Message */}
        <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
          <p className="text-sm text-center text-gray-700">
            {level < 5 && "You're just getting started! Keep learning."}
            {level >= 5 && level < 10 && "Great progress! You're building momentum."}
            {level >= 10 && level < 25 && "Impressive dedication! You're becoming proficient."}
            {level >= 25 && level < 50 && "Outstanding! You're a true language learner."}
            {level >= 50 && "Legendary status! You're an inspiration to others."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function getLevelTitle(level: number): string {
  if (level < 5) return 'Beginner';
  if (level < 10) return 'Learner';
  if (level < 25) return 'Student';
  if (level < 50) return 'Advanced';
  if (level < 100) return 'Expert';
  return 'Master';
}

interface XPGainAnimationProps {
  amount: number;
  onComplete?: () => void;
}

export function XPGainAnimation({ amount, onComplete }: XPGainAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, scale: 1 }}
      animate={{ opacity: [0, 1, 1, 0], y: -100, scale: [1, 1.2, 1] }}
      transition={{ duration: 2 }}
      onAnimationComplete={onComplete}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
    >
      <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-lg">
        <p className="text-2xl font-bold text-white">
          +{amount} XP
        </p>
      </div>
    </motion.div>
  );
}
