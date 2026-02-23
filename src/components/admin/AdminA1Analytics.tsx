'use client';

import { useEffect, useState } from 'react';
import { Users, TrendingUp, CheckCircle, BookOpen } from 'lucide-react';

interface Student {
  id: string;
  email: string;
  name: string;
}

interface ProgressData {
  unit_id: number;
  status: string;
  exercises_completed: number;
  exercises_total: number;
  accuracy_percentage: number;
}

interface Summary {
  totalUnitsStarted: number;
  totalUnitsCompleted: number;
  averageAccuracy: number;
}

export default function AdminA1Analytics() {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [progressData, setProgressData] = useState<ProgressData[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);
  const [studentLoading, setStudentLoading] = useState(false);

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    try {
      const response = await fetch('/api/admin/students');
      if (!response.ok) throw new Error('Failed to fetch students');
      const data = await response.json();
      setStudents(data.students || []);
      if (data.students?.length > 0) {
        setSelectedStudent(data.students[0].id);
      }
    } catch (error) {
      console.error('Error loading students:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (selectedStudent) {
      loadStudentProgress();
    }
  }, [selectedStudent]);

  async function loadStudentProgress() {
    if (!selectedStudent) return;
    setStudentLoading(true);
    try {
      const response = await fetch(`/api/admin/progress/${selectedStudent}`);
      if (!response.ok) throw new Error('Failed to fetch progress');
      const data = await response.json();
      setProgressData(data.progress || []);
      setSummary(data.summary);
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setStudentLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-coral-500 mx-auto mb-3"></div>
        <p className="text-slate-600">Loading students...</p>
      </div>
    );
  }

  const selectedStudentData = students.find(s => s.id === selectedStudent);

  return (
    <div className="space-y-8">
      {/* Student Selector */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-5 h-5 text-coral-500" />
          <h3 className="font-black text-slate-800">Select Student</h3>
        </div>
        
        <select
          value={selectedStudent || ''}
          onChange={(e) => setSelectedStudent(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-coral-500 focus:ring-2 focus:ring-coral-100 outline-none transition"
        >
          {students.map(student => (
            <option key={student.id} value={student.id}>
              {student.name} ({student.email})
            </option>
          ))}
        </select>
      </div>

      {/* Summary Cards */}
      {summary && !studentLoading && (
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

      {studentLoading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-coral-500 mx-auto mb-3"></div>
          <p className="text-slate-600">Loading progress...</p>
        </div>
      )}

      {/* Progress Grid */}
      {!studentLoading && (
        <div>
          <h3 className="font-black text-xl text-slate-800 mb-4">Unit Progress</h3>
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
      )}
    </div>
  );
}
