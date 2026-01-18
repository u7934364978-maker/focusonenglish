'use client';

import { UserProfile, getXPProgress, DailyGoal } from '@/lib/duolingo/gamification';
import { Trophy, Flame, Zap, Heart, Gem, Target } from 'lucide-react';

interface GamificationDashboardProps {
  user: UserProfile;
  dailyGoal: DailyGoal;
}

export default function GamificationDashboard({ user, dailyGoal }: GamificationDashboardProps) {
  const xpProgress = getXPProgress(user.totalXP);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      {/* User Header */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-md">
          {user.avatar || user.name.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-black text-gray-900">{user.name}</h2>
          <p className="text-gray-600">Level {xpProgress.level}</p>
        </div>
      </div>

      {/* XP Progress */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-gray-700">Experience Points</span>
          <span className="text-sm font-black text-orange-600">
            {xpProgress.currentXP} / {xpProgress.nextLevelXP} XP
          </span>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 ease-out"
            style={{ width: `${xpProgress.percentage}%` }}
          />
        </div>
        <div className="text-right text-xs text-gray-500">
          {xpProgress.nextLevelXP - xpProgress.currentXP} XP to Level {xpProgress.level + 1}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Streak */}
        <StatCard
          icon={<Flame className="w-6 h-6" />}
          label="Streak"
          value={user.currentStreak}
          color="text-orange-600"
          bgColor="bg-orange-100"
          suffix="days"
        />

        {/* Lives */}
        <StatCard
          icon={<Heart className="w-6 h-6" />}
          label="Lives"
          value={user.lives}
          color="text-red-600"
          bgColor="bg-red-100"
          suffix={`/ ${user.maxLives}`}
        />

        {/* Gems */}
        <StatCard
          icon={<Gem className="w-6 h-6" />}
          label="Gems"
          value={user.gems}
          color="text-blue-600"
          bgColor="bg-blue-100"
        />

        {/* Total XP */}
        <StatCard
          icon={<Zap className="w-6 h-6" />}
          label="Total XP"
          value={user.totalXP}
          color="text-yellow-600"
          bgColor="bg-yellow-100"
        />
      </div>

      {/* Daily Goal */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Daily Goal</h3>
            <p className="text-sm text-gray-600">
              {dailyGoal.completed ? '✅ Completed!' : `${dailyGoal.earnedXP} / ${dailyGoal.targetXP} XP`}
            </p>
          </div>
          {dailyGoal.completed && (
            <Trophy className="w-8 h-8 text-yellow-500" />
          )}
        </div>
        
        <div className="h-3 bg-green-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
            style={{ width: `${Math.min((dailyGoal.earnedXP / dailyGoal.targetXP) * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* Streak Info */}
      {user.currentStreak > 0 && (
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border-2 border-orange-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-pulse">
              <Flame className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">{user.currentStreak} Day Streak!</h3>
              <p className="text-sm text-gray-600">
                Keep it up! Practice today to maintain your streak.
              </p>
            </div>
          </div>
          
          {/* Streak Milestones */}
          <div className="mt-3 flex items-center gap-2">
            {[3, 7, 14, 30].map((milestone) => (
              <div
                key={milestone}
                className={`flex-1 h-2 rounded-full ${
                  user.currentStreak >= milestone
                    ? 'bg-gradient-to-r from-orange-500 to-red-500'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span>3</span>
            <span>7</span>
            <span>14</span>
            <span>30</span>
          </div>
        </div>
      )}

      {/* Longest Streak */}
      {user.longestStreak > user.currentStreak && (
        <div className="text-center text-sm text-gray-600">
          🏆 Longest streak: <span className="font-bold">{user.longestStreak} days</span>
        </div>
      )}
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
  bgColor: string;
  suffix?: string;
}

function StatCard({ icon, label, value, color, bgColor, suffix }: StatCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border-2 border-gray-200 hover:border-gray-300 transition-all">
      <div className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center ${color} mb-2`}>
        {icon}
      </div>
      <p className="text-xs text-gray-600 mb-1">{label}</p>
      <p className={`text-2xl font-black ${color}`}>
        {value}
        {suffix && <span className="text-sm font-normal ml-1">{suffix}</span>}
      </p>
    </div>
  );
}

// XP Celebration Component (for when user gains XP)
export function XPCelebration({ xp, onClose }: { xp: number; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center animate-scale-in shadow-2xl">
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <Zap className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-2">
          +{xp} XP
        </h2>
        <p className="text-gray-600 mb-6">
          Amazing! Keep going!
        </p>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}

// Achievement Unlock Component
export function AchievementUnlock({ 
  title, 
  description, 
  icon, 
  reward,
  onClose 
}: { 
  title: string;
  description: string;
  icon: string;
  reward: { gems?: number; xp?: number };
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 max-w-md mx-4 text-center animate-scale-in shadow-2xl">
        <div className="text-6xl mb-4 animate-bounce">
          {icon}
        </div>
        <h2 className="text-3xl font-black text-white mb-2">
          Achievement Unlocked!
        </h2>
        <h3 className="text-2xl font-bold text-white/90 mb-2">
          {title}
        </h3>
        <p className="text-white/80 mb-6">
          {description}
        </p>
        
        {/* Rewards */}
        <div className="flex justify-center gap-4 mb-6">
          {reward.xp && (
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-white font-bold">+{reward.xp} XP</span>
            </div>
          )}
          {reward.gems && (
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-white font-bold">+{reward.gems} 💎</span>
            </div>
          )}
        </div>
        
        <button
          onClick={onClose}
          className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
        >
          AWESOME!
        </button>
      </div>
    </div>
  );
}
