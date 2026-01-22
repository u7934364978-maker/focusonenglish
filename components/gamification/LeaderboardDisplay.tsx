'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, TrendingUp, Users } from 'lucide-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface LeaderboardEntry {
  user_id: string;
  username: string;
  total_xp: number;
  level: number;
  rank: number;
}

interface LeaderboardDisplayProps {
  currentUserId?: string;
}

export function LeaderboardDisplay({ currentUserId }: LeaderboardDisplayProps) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timeframe, setTimeframe] = useState<'all' | 'week' | 'month'>('all');
  const supabase = createClientComponentClient();

  useEffect(() => {
    loadLeaderboard();
  }, [timeframe]);

  const loadLeaderboard = async () => {
    setIsLoading(true);
    try {
      let query = supabase
        .from('user_xp')
        .select(`
          user_id,
          total_xp,
          level,
          profiles:user_id (
            username,
            full_name
          )
        `)
        .order('total_xp', { ascending: false })
        .limit(100);

      const { data, error } = await query;

      if (error) throw error;

      const leaderboardData: LeaderboardEntry[] = (data || []).map((entry: any, index: number) => ({
        user_id: entry.user_id,
        username: entry.profiles?.username || entry.profiles?.full_name || 'Anonymous',
        total_xp: entry.total_xp,
        level: entry.level,
        rank: index + 1,
      }));

      setLeaderboard(leaderboardData);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-5 w-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-600" />;
    return null;
  };

  const getRankBgColor = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-300';
    if (rank === 2) return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300';
    if (rank === 3) return 'bg-gradient-to-r from-amber-50 to-amber-100 border-amber-300';
    return 'bg-white border-gray-200';
  };

  const currentUserRank = leaderboard.find(entry => entry.user_id === currentUserId);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current User Rank (if not in top 10) */}
        {currentUserRank && currentUserRank.rank > 10 && (
          <div className="p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold">
                  #{currentUserRank.rank}
                </div>
                <div>
                  <p className="font-semibold text-purple-900">Your Rank</p>
                  <p className="text-sm text-purple-600">
                    Level {currentUserRank.level} • {currentUserRank.total_xp.toLocaleString()} XP
                  </p>
                </div>
              </div>
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        )}

        {/* Top Rankings */}
        <div className="space-y-2">
          {leaderboard.slice(0, 10).map((entry, index) => {
            const isCurrentUser = entry.user_id === currentUserId;
            const icon = getRankIcon(entry.rank);

            return (
              <motion.div
                key={entry.user_id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                  getRankBgColor(entry.rank)
                } ${isCurrentUser ? 'ring-2 ring-purple-500' : ''}`}
              >
                {/* Rank */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-300 font-bold text-gray-700">
                  {icon || `#${entry.rank}`}
                </div>

                {/* Avatar */}
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-purple-600 text-white">
                    {entry.username.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                {/* User Info */}
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold truncate ${isCurrentUser ? 'text-purple-900' : 'text-gray-900'}`}>
                    {entry.username}
                    {isCurrentUser && (
                      <span className="ml-2 text-xs text-purple-600">(You)</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-600">
                    Level {entry.level}
                  </p>
                </div>

                {/* XP */}
                <div className="text-right">
                  <p className="font-bold text-gray-900">
                    {entry.total_xp.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-600">XP</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Users className="h-4 w-4 text-blue-600" />
              <p className="text-xs text-blue-600 font-medium">Total Users</p>
            </div>
            <p className="text-2xl font-bold text-blue-900">
              {leaderboard.length}
            </p>
          </div>

          <div className="p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-purple-600" />
              <p className="text-xs text-purple-600 font-medium">Avg Level</p>
            </div>
            <p className="text-2xl font-bold text-purple-900">
              {Math.round(
                leaderboard.reduce((sum, entry) => sum + entry.level, 0) / leaderboard.length
              )}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
