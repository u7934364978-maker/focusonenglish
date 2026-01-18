'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import UnitsMap from '@/components/duolingo/UnitsMap';
import GamificationDashboard from '@/components/duolingo/GamificationDashboard';
import { A1_UNITS } from '@/lib/duolingo/units';
import { createDefaultUserProfile, calculateDailyGoalProgress } from '@/lib/duolingo/gamification';
import { Trophy, Home, User, Settings, BookOpen } from 'lucide-react';

export default function DuolingoCoursePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'learn' | 'leaderboard' | 'profile'>('learn');
  
  // Mock user data (en producción esto vendría de la base de datos)
  const [user, setUser] = useState(() => 
    createDefaultUserProfile('user-1', 'student@focusenglish.com', 'María García')
  );
  
  // Mock daily goal
  const dailyGoal = calculateDailyGoalProgress(15, 20);

  const handleLessonClick = (unitId: string, lessonId: string) => {
    // Navigate to lesson page
    router.push(`/aula/duolingo/lesson/${lessonId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-gray-900">Focus English</span>
            </div>

            {/* Stats Quick View */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  🔥
                </div>
                <span className="font-bold">{user.currentStreak}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  💎
                </div>
                <span className="font-bold">{user.gems}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  ❤️
                </div>
                <span className="font-bold">{user.lives}</span>
              </div>
            </div>

            {/* User Avatar */}
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Gamification */}
          <div className="lg:col-span-1">
            <GamificationDashboard user={user} dailyGoal={dailyGoal} />
            
            {/* Quick Actions */}
            <div className="mt-6 bg-white rounded-2xl shadow-lg p-4 space-y-2">
              <h3 className="font-bold text-gray-900 mb-3">Quick Actions</h3>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all text-left">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Achievements</p>
                  <p className="text-xs text-gray-600">{user.achievements.length} unlocked</p>
                </div>
              </button>
              
              <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all text-left">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Profile</p>
                  <p className="text-xs text-gray-600">View your progress</p>
                </div>
              </button>
              
              <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all text-left">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Settings className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Settings</p>
                  <p className="text-xs text-gray-600">Daily goal & more</p>
                </div>
              </button>
            </div>
          </div>

          {/* Center - Units Map */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-lg p-2 mb-6 flex gap-2">
              <TabButton
                active={activeTab === 'learn'}
                onClick={() => setActiveTab('learn')}
                icon={<Home className="w-5 h-5" />}
                label="Learn"
              />
              <TabButton
                active={activeTab === 'leaderboard'}
                onClick={() => setActiveTab('leaderboard')}
                icon={<Trophy className="w-5 h-5" />}
                label="Leaderboard"
              />
              <TabButton
                active={activeTab === 'profile'}
                onClick={() => setActiveTab('profile')}
                icon={<User className="w-5 h-5" />}
                label="Profile"
              />
            </div>

            {/* Content Area */}
            {activeTab === 'learn' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <UnitsMap
                  units={A1_UNITS}
                  currentUnitId="a1-unit-1"
                  onLessonClick={handleLessonClick}
                />
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-black text-gray-900 mb-4">
                  🏆 Leaderboard
                </h2>
                <p className="text-gray-600">
                  Compete with friends and climb the ranks!
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    { rank: 1, name: 'Ana López', xp: 1250, avatar: 'A' },
                    { rank: 2, name: 'Carlos Ruiz', xp: 1100, avatar: 'C' },
                    { rank: 3, name: user.name, xp: user.totalXP, avatar: user.name.charAt(0) },
                    { rank: 4, name: 'Laura Sánchez', xp: 850, avatar: 'L' },
                    { rank: 5, name: 'Pedro Martín', xp: 720, avatar: 'P' },
                  ].map((entry) => (
                    <div
                      key={entry.rank}
                      className={`flex items-center gap-4 p-4 rounded-xl ${
                        entry.name === user.name
                          ? 'bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300'
                          : 'bg-gray-50'
                      }`}
                    >
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700">
                        #{entry.rank}
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                        {entry.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">{entry.name}</p>
                        <p className="text-sm text-gray-600">{entry.xp} XP</p>
                      </div>
                      {entry.rank <= 3 && (
                        <div className="text-2xl">
                          {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉'}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-black text-gray-900 mb-4">
                  Profile
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl">
                      <p className="text-sm text-gray-700 mb-1">Current Streak</p>
                      <p className="text-3xl font-black text-orange-700">
                        {user.currentStreak} 🔥
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl">
                      <p className="text-sm text-gray-700 mb-1">Total XP</p>
                      <p className="text-3xl font-black text-blue-700">
                        {user.totalXP} ⚡
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl">
                      <p className="text-sm text-gray-700 mb-1">Gems</p>
                      <p className="text-3xl font-black text-purple-700">
                        {user.gems} 💎
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-xl">
                      <p className="text-sm text-gray-700 mb-1">Level</p>
                      <p className="text-3xl font-black text-green-700">
                        {user.level}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 safe-area-bottom">
        <div className="flex justify-around">
          <TabButton
            active={activeTab === 'learn'}
            onClick={() => setActiveTab('learn')}
            icon={<Home className="w-6 h-6" />}
            label="Learn"
            mobile
          />
          <TabButton
            active={activeTab === 'leaderboard'}
            onClick={() => setActiveTab('leaderboard')}
            icon={<Trophy className="w-6 h-6" />}
            label="Rank"
            mobile
          />
          <TabButton
            active={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
            icon={<User className="w-6 h-6" />}
            label="Profile"
            mobile
          />
        </div>
      </div>
    </div>
  );
}

// Tab Button Component
interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  mobile?: boolean;
}

function TabButton({ active, onClick, icon, label, mobile }: TabButtonProps) {
  if (mobile) {
    return (
      <button
        onClick={onClick}
        className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
          active
            ? 'text-green-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        {icon}
        <span className="text-xs font-bold">{label}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
        active
          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
