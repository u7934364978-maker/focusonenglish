'use client';

export const runtime = 'edge';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  getUserProfile, 
  getUserProgress, 
  getUserLessonProgress,
  getSkillsBreakdown,
  updateUserProfile,
  UserProfile,
  UserProgress,
  LessonProgress
} from '@/lib/services/profile-service';
import { syncProfileToHubSpot } from '@/lib/services/hubspot-sync-service';


type TabType = 'overview' | 'personal' | 'progress' | 'settings';

export default function ProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [recentLessons, setRecentLessons] = useState<LessonProgress[]>([]);
  const [skillsBreakdown, setSkillsBreakdown] = useState<{ reading: number; writing: number; listening: number; speaking: number }>({
    reading: 0,
    writing: 0,
    listening: 0,
    speaking: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<Partial<UserProfile>>({});

  // Mock user ID - in production this would come from auth
  const userId = 'mock-user-123';
  const userEmail = 'student@focusenglish.com';

  useEffect(() => {
    loadProfileData();
  }, []);

  const loadProfileData = async () => {
    setLoading(true);
    try {
      // Get real data from Supabase
      const [profileData, progressData, lessonsData, skillsData] = await Promise.all([
        getUserProfile(userId),
        getUserProgress(userId),
        getUserLessonProgress(userId),
        getSkillsBreakdown(userId)
      ]);

      if (profileData) {
        setProfile(profileData);
        setEditedProfile(profileData);
      }

      if (progressData) {
        setProgress(progressData);
      }

      if (lessonsData && lessonsData.length > 0) {
        setRecentLessons(lessonsData.slice(0, 5)); // Get last 5 lessons
      }

      if (skillsData) {
        setSkillsBreakdown(skillsData);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!profile) return;

    setSaving(true);
    try {
      // Update profile in Supabase
      const result = await updateUserProfile(profile.id, editedProfile);
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to update profile');
      }

      // Sync to HubSpot
      const hubspotSync = await syncProfileToHubSpot(
        { ...profile, ...editedProfile } as UserProfile,
        progress || undefined
      );

      if (!hubspotSync.success) {
        console.warn('HubSpot sync failed:', hubspotSync.error);
      }

      setProfile({ ...profile, ...editedProfile });
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field: keyof UserProfile, value: any) => {
    setEditedProfile(prev => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 font-semibold">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white">
        <div className="text-center">
          <p className="text-xl text-slate-900 mb-4">Profile not found</p>
          <Link href="/dashboard" className="text-orange-600 hover:text-orange-700 font-semibold">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview', icon: '📊' },
    { id: 'personal' as TabType, label: 'Personal Info', icon: '👤' },
    { id: 'progress' as TabType, label: 'My Progress', icon: '📈' },
    { id: 'settings' as TabType, label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black mb-2">{profile.full_name}</h1>
              <p className="text-lg text-orange-100 flex items-center gap-2">
                <span className="font-semibold">{profile.language_level}</span>
                <span className="text-white/60">•</span>
                <span>Level {progress?.level || 1}</span>
              </p>
            </div>
            <Link
              href="/dashboard"
              className="px-6 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-xl transition-all font-bold flex items-center gap-2 border border-white/30"
            >
              <span>←</span>
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="bg-white border-b-2 border-slate-200 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-bold text-sm transition-all flex items-center gap-2 border-b-4 ${
                  activeTab === tab.id
                    ? 'border-orange-600 text-orange-600 bg-orange-50'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderTabContent()}
      </main>
    </div>
  );

  function renderTabContent() {
    switch (activeTab) {
      case 'overview':
        return renderOverviewTab();
      case 'personal':
        return renderPersonalTab();
      case 'progress':
        return renderProgressTab();
      case 'settings':
        return renderSettingsTab();
      default:
        return null;
    }
  }

  function renderOverviewTab() {
    return (
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 border-2 border-orange-300 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">📚</span>
              <span className="text-xs font-bold text-orange-700 bg-orange-200 px-2 py-1 rounded-full">
                Lessons
              </span>
            </div>
            <div className="text-3xl font-black text-orange-900">{progress?.total_lessons_completed || 0}</div>
            <div className="text-sm text-orange-700 font-medium mt-1">Completed</div>
          </div>

          <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">🔥</span>
              <span className="text-xs font-bold text-amber-700 bg-amber-200 px-2 py-1 rounded-full">
                Streak
              </span>
            </div>
            <div className="text-3xl font-black text-amber-900">{progress?.current_streak_days || 0}</div>
            <div className="text-sm text-amber-700 font-medium mt-1">Days</div>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-2xl p-6 border-2 border-red-300 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">⭐</span>
              <span className="text-xs font-bold text-red-700 bg-red-200 px-2 py-1 rounded-full">
                Score
              </span>
            </div>
            <div className="text-3xl font-black text-red-900">{progress?.average_score || 0}%</div>
            <div className="text-sm text-red-700 font-medium mt-1">Average</div>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 border-2 border-purple-300 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">⏱️</span>
              <span className="text-xs font-bold text-purple-700 bg-purple-200 px-2 py-1 rounded-full">
                Time
              </span>
            </div>
            <div className="text-3xl font-black text-purple-900">
              {Math.floor((progress?.total_study_minutes || 0) / 60)}h
            </div>
            <div className="text-sm text-purple-700 font-medium mt-1">Study Time</div>
          </div>
        </div>

        {/* Learning Goals */}
        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            <span>Learning Goals</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {profile!.learning_goals?.map((goal, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-900 rounded-xl font-bold text-sm border-2 border-orange-300"
              >
                {goal}
              </span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">📋</span>
            <span>Recent Lessons</span>
          </h2>
          <div className="space-y-4">
            {recentLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-orange-50 rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-black shadow-lg">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900">{lesson.lesson_title}</h3>
                    <p className="text-sm text-slate-600">
                      {lesson.time_spent_minutes} minutes • {new Date(lesson.completed_at!).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-orange-600">{lesson.score}%</div>
                  <div className="text-xs text-slate-600 font-semibold">Score</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            <span>Achievements</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {progress?.achievements?.map((achievement, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl border-2 border-yellow-300 text-center shadow-md"
              >
                <div className="text-4xl mb-2">🏅</div>
                <div className="font-bold text-sm text-yellow-900">{achievement}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function renderPersonalTab() {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="text-3xl">👤</span>
              <span>Personal Information</span>
            </h2>
            <button
              onClick={() => {
                if (isEditing) {
                  handleSaveProfile();
                } else {
                  setIsEditing(true);
                }
              }}
              disabled={saving}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                isEditing
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {saving ? 'Saving...' : isEditing ? '💾 Save Changes' : '✏️ Edit Profile'}
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={isEditing ? editedProfile.full_name || '' : profile!.full_name}
                  onChange={(e) => handleInputChange('full_name', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 disabled:bg-slate-50 disabled:text-slate-600 font-semibold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  value={profile!.email}
                  disabled
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-slate-50 text-slate-600 font-semibold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={isEditing ? editedProfile.phone || '' : profile!.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 disabled:bg-slate-50 disabled:text-slate-600 font-semibold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Country</label>
                <input
                  type="text"
                  value={isEditing ? editedProfile.country || '' : profile!.country || ''}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 disabled:bg-slate-50 disabled:text-slate-600 font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Language Level</label>
              <select
                value={isEditing ? editedProfile.language_level || '' : profile!.language_level || ''}
                onChange={(e) => handleInputChange('language_level', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 disabled:bg-slate-50 disabled:text-slate-600 font-semibold"
              >
                <option value="">Select level</option>
                <option value="A1 - Beginner">A1 - Beginner</option>
                <option value="A2 - Elementary">A2 - Elementary</option>
                <option value="B1 - Intermediate">B1 - Intermediate</option>
                <option value="B2 - Upper Intermediate">B2 - Upper Intermediate</option>
                <option value="C1 - Advanced">C1 - Advanced</option>
                <option value="C2 - Proficient">C2 - Proficient</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Bio</label>
              <textarea
                value={isEditing ? editedProfile.bio || '' : profile!.bio || ''}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                disabled={!isEditing}
                rows={4}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 disabled:bg-slate-50 disabled:text-slate-600 font-semibold resize-none"
                placeholder="Tell us about your English learning journey..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Timezone</label>
              <select
                value={isEditing ? editedProfile.timezone || '' : profile!.timezone || ''}
                onChange={(e) => handleInputChange('timezone', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 disabled:bg-slate-50 disabled:text-slate-600 font-semibold"
              >
                <option value="">Select timezone</option>
                <option value="America/New_York">Eastern Time (ET)</option>
                <option value="America/Chicago">Central Time (CT)</option>
                <option value="America/Denver">Mountain Time (MT)</option>
                <option value="America/Los_Angeles">Pacific Time (PT)</option>
                <option value="Europe/London">London (GMT)</option>
                <option value="Europe/Paris">Paris (CET)</option>
                <option value="Asia/Tokyo">Tokyo (JST)</option>
              </select>
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditedProfile(profile || {});
                }}
                className="flex-1 px-6 py-3 bg-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-300 transition-all"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  function renderProgressTab() {
    const progressPercentage = progress?.total_lessons_completed 
      ? Math.min((progress.total_lessons_completed / 100) * 100, 100) 
      : 0;

    return (
      <div className="space-y-6">
        {/* Progress Overview */}
        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">📈</span>
            <span>Learning Progress</span>
          </h2>

          {/* XP Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-700">Total XP</span>
              <span className="font-black text-orange-600 text-xl">{progress?.total_xp || 0} XP</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-6 overflow-hidden">
              <div
                className="h-6 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 rounded-full transition-all duration-1000 flex items-center justify-end pr-3"
                style={{ width: `${progressPercentage}%` }}
              >
                <span className="text-white text-xs font-black">Level {progress?.level || 1}</span>
              </div>
            </div>
          </div>

          {/* Detailed Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-orange-50 rounded-xl border-2 border-orange-200">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-2xl font-black text-orange-900">{progress?.total_lessons_completed || 0}</div>
              <div className="text-sm text-orange-700 font-semibold">Lessons</div>
            </div>

            <div className="text-center p-4 bg-amber-50 rounded-xl border-2 border-amber-200">
              <div className="text-3xl mb-2">✏️</div>
              <div className="text-2xl font-black text-amber-900">{progress?.total_exercises_completed || 0}</div>
              <div className="text-sm text-amber-700 font-semibold">Exercises</div>
            </div>

            <div className="text-center p-4 bg-red-50 rounded-xl border-2 border-red-200">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-black text-red-900">{progress?.longest_streak_days || 0}</div>
              <div className="text-sm text-red-700 font-semibold">Best Streak</div>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-xl border-2 border-purple-200">
              <div className="text-3xl mb-2">⏱️</div>
              <div className="text-2xl font-black text-purple-900">
                {Math.floor((progress?.total_study_minutes || 0) / 60)}h {(progress?.total_study_minutes || 0) % 60}m
              </div>
              <div className="text-sm text-purple-700 font-semibold">Study Time</div>
            </div>
          </div>
        </div>

        {/* Skills Breakdown */}
        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            <span>Skills Breakdown</span>
          </h2>

          <div className="space-y-4">
            {[
              { skill: 'Reading', percentage: skillsBreakdown.reading, color: 'orange' },
              { skill: 'Writing', percentage: skillsBreakdown.writing, color: 'amber' },
              { skill: 'Listening', percentage: skillsBreakdown.listening, color: 'red' },
              { skill: 'Speaking', percentage: skillsBreakdown.speaking, color: 'purple' },
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-700">{item.skill}</span>
                  <span className={`font-black text-lg`} style={{ color: `rgb(var(--${item.color}-600))` }}>
                    {item.percentage}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-4 rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${item.percentage}%`,
                      background: item.color === 'orange' ? 'linear-gradient(to right, #f97316, #ea580c)' :
                                  item.color === 'amber' ? 'linear-gradient(to right, #f59e0b, #d97706)' :
                                  item.color === 'red' ? 'linear-gradient(to right, #ef4444, #dc2626)' :
                                  'linear-gradient(to right, #a855f7, #9333ea)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function renderSettingsTab() {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Notification Settings */}
        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🔔</span>
            <span>Notifications</span>
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div>
                <h3 className="font-bold text-slate-900">Push Notifications</h3>
                <p className="text-sm text-slate-600">Receive notifications about your progress</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={profile!.notifications_enabled}
                  onChange={(e) => handleInputChange('notifications_enabled', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-14 h-8 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div>
                <h3 className="font-bold text-slate-900">Email Notifications</h3>
                <p className="text-sm text-slate-600">Get weekly progress reports via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={profile!.email_notifications}
                  onChange={(e) => handleInputChange('email_notifications', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-14 h-8 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">⚙️</span>
            <span>Account</span>
          </h2>

          <div className="space-y-4">
            <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all shadow-lg text-left flex items-center justify-between">
              <span>Change Password</span>
              <span>→</span>
            </button>

            <button 
              onClick={() => syncProfileToHubSpot(profile!, progress || undefined)}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg text-left flex items-center justify-between"
            >
              <span>Sync to HubSpot CRM</span>
              <span>🔄</span>
            </button>

            <button className="w-full px-6 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-all text-left flex items-center justify-between">
              <span>Download My Data</span>
              <span>📥</span>
            </button>

            <button className="w-full px-6 py-4 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-all text-left flex items-center justify-between border-2 border-red-200">
              <span>Delete Account</span>
              <span>⚠️</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
