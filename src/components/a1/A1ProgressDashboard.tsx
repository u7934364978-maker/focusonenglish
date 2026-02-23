'use client';

import { useEffect, useState } from 'react';
import { useA1ProgressTracking } from '@/hooks/useA1ProgressTracking';
import { CheckCircle, Clock, TrendingUp, BookOpen } from 'lucide-react';

interface ProgressData {
  unit_id: number;
  status: string;
  exercises_completed: number;
  exercises_total: number;
  accuracy_percentage: number;
  last_activity: string;
}

interface SummaryData {
  totalUnitsStarted: number;
  totalUnitsCompleted: number;
  averageAccuracy: number;
}

export default function A1ProgressDashboard() {
  const { getProgress, isAuthenticated } = useA1ProgressTracking();
  const [progressData, setProgressData] = useState<ProgressData[]>([]);
  const [summary, setSummary] = useState<SummaryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }

    async function loadProgress() {
      const data = await getProgress();
      if (data) {
        setProgressData(data.progress || []);
        setSummary(data.summary);
      }
      setLoading(false);
    }

    loadProgress();
  }, [isAuthenticated, getProgress]);

  if (!isAuthenticated) {
    return (
      <div className="p-8 text-center bg-slate-50 rounded-xl">
        <p className="text-slate-600">Please sign in to view your progress</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-8 text-center bg-slate-50 rounded-xl">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-coral-500 mx-auto mb-3"></div>
        <p className="text-slate-600">Loading progress...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-coral-500" />
              <span className="text-sm font-bold text-slate-600 uppercase">Units Started</span>
            </div>
            <p className="text-3xl font-black text-slate-800">{summary.totalUnitsStarted}</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-bold text-slate-600 uppercase">Completed</span>
            </div>
            <p className="text-3xl font-black text-slate-800">{summary.totalUnitsCompleted}</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-bold text-slate-600 uppercase">Avg Accuracy</span>
            </div>
            <p className="text-3xl font-black text-slate-800">{summary.averageAccuracy}%</p>
          </div>
        </div>
      )}

      {/* Units Grid */}
      <div>
        <h3 className="font-black text-xl text-slate-800 mb-4">Your Units</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 60 }, (_, i) => {
            const unitNum = i + 1;
            const unitProgress = progressData.find(u => u.unit_id === unitNum);
            
            return (
              <div
                key={unitNum}
                className={`rounded-xl p-4 border-2 transition-all ${
                  unitProgress?.status === 'completed'
                    ? 'bg-green-50 border-green-300'
                    : unitProgress?.status === 'in_progress'
                    ? 'bg-blue-50 border-blue-300'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-black text-slate-800">Unit {unitNum}</h4>
                    <p className="text-sm text-slate-600 capitalize">
                      {unitProgress?.status || 'Not Started'}
                    </p>
                  </div>
                  {unitProgress?.status === 'completed' && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>

                {unitProgress && (
                  <>
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-slate-600 mb-1">
                        <span>Progress</span>
                        <span>
                          {unitProgress.exercises_completed}/{unitProgress.exercises_total}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-coral-500 transition-all"
                          style={{
                            width: `${
                              unitProgress.exercises_total > 0
                                ? (unitProgress.exercises_completed / unitProgress.exercises_total) * 100
                                : 0
                            }%`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="text-xs text-slate-600">
                      Accuracy: {unitProgress.accuracy_percentage.toFixed(1)}%
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
