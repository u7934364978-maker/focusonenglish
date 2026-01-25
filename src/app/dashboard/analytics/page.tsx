'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase-client';
import { 
  BarChart2, 
  TrendingUp, 
  AlertCircle, 
  Clock, 
  Trophy, 
  ArrowLeft,
  BookOpen,
  Zap,
  ChevronRight,
  MessageSquare,
  Share2
} from 'lucide-react';
import { LeaderboardDisplay } from '@/components/gamification/LeaderboardDisplay';

interface UserError {
  id: string;
  topic: string;
  category: string;
  wrong_answer: string;
  correct_answer: string;
  count: number;
  last_seen: string;
}

interface UserStats {
  total_exercises_completed: number;
  total_points: number;
  total_study_time_minutes: number;
  current_streak: number;
}

export default function AnalyticsPage() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<UserError[]>([]);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [sessions, setSessions] = useState<any[]>([]);

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Fetch Stats
      const { data: statsData } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      setStats(statsData);

      // Fetch Top Errors
      const { data: errorData } = await supabase
        .from('user_errors')
        .select('*')
        .eq('user_id', user.id)
        .order('count', { ascending: false })
        .limit(10);
      
      setErrors(errorData || []);

      // Fetch Recent Sessions
      const { data: sessionData } = await supabase
        .from('practice_sessions')
        .select('*')
        .eq('user_id', user.id)
        .order('completed_at', { ascending: false })
        .limit(5);
      
      setSessions(sessionData || []);

    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 font-medium">Analizando tu progreso...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Header */}
      <div className="bg-indigo-600 text-white py-12 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <Link href="/dashboard" className="inline-flex items-center text-indigo-100 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Dashboard
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-black mb-2 flex items-center gap-3">
                <BarChart2 className="w-10 h-10" />
                Tu Centro de Inteligencia
              </h1>
              <p className="text-indigo-100 text-lg">Visualiza tus fortalezas y trabaja en tus áreas de mejora.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-2 text-indigo-100 text-sm mb-1">
                  <Trophy className="w-4 h-4" />
                  Puntos Totales
                </div>
                <div className="text-3xl font-black">{stats?.total_points || 0}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-2 text-indigo-100 text-sm mb-1">
                  <Zap className="w-4 h-4" />
                  Racha Actual
                </div>
                <div className="text-3xl font-black">{stats?.current_streak || 0} días</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Stats & Recent Activity */}
        <div className="lg:col-span-2 space-y-8">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex items-center gap-6">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <div className="text-slate-500 text-sm font-bold uppercase tracking-wider">Ejercicios</div>
                <div className="text-3xl font-black text-slate-900">{stats?.total_exercises_completed || 0}</div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex items-center gap-6">
              <div className="bg-green-100 p-4 rounded-2xl">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <div className="text-slate-500 text-sm font-bold uppercase tracking-wider">Estudio</div>
                <div className="text-3xl font-black text-slate-900">{stats?.total_study_time_minutes || 0}m</div>
              </div>
            </div>
          </div>

          {/* Practice History */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
              Actividad Reciente
            </h2>
            <div className="space-y-4">
              {sessions.length > 0 ? sessions.map((session, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 rounded-xl shadow-sm">
                      <Zap className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 capitalize">{session.session_type.replace(/_/g, ' ')}</div>
                      <div className="text-xs text-slate-500">{new Date(session.completed_at).toLocaleDateString()} • {session.duration_minutes} min</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-indigo-600">{session.correct_answers} correctos</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">{session.exercises_completed} total</div>
                  </div>
                </div>
              )) : (
                <p className="text-slate-500 italic">No hay sesiones registradas recientemente.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Error Memory System */}
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-500" />
              Memoria de Errores
            </h2>
            <p className="text-sm text-slate-500 mb-6">Tus puntos débiles detectados por la IA.</p>
            
            <div className="space-y-4">
              {errors.length > 0 ? errors.map((error, i) => (
                <div key={i} className="group p-4 bg-white rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-indigo-50 text-indigo-700 text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
                      {error.category}
                    </span>
                    <span className="text-xs font-bold text-red-500">
                      Fallado {error.count} veces
                    </span>
                  </div>
                  <div className="font-bold text-slate-900 mb-1">{error.topic}</div>
                  <div className="text-xs text-slate-500 line-clamp-1 mb-2">
                    Respuesta: <span className="text-red-500 line-through">{error.wrong_answer}</span> → <span className="text-green-600 font-bold">{error.correct_answer}</span>
                  </div>
                  <Link 
                    href={`/ejercicios-inteligentes?category=${error.category}&topic=${error.topic}`}
                    className="w-full mt-2 py-2 bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white rounded-xl text-xs font-black text-slate-600 transition-all flex items-center justify-center gap-1"
                  >
                    REFORZAR AHORA
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              )) : (
                <div className="text-center py-8">
                  <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <p className="text-slate-500 font-bold">¡Sin errores recientes!</p>
                  <p className="text-xs text-slate-400">Sigue practicando para mantener tu récord.</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 text-white shadow-xl shadow-indigo-100">
            <MessageSquare className="w-10 h-10 mb-4 opacity-50" />
            <h3 className="text-xl font-black mb-2">Recomendación IA</h3>
            <p className="text-indigo-100 text-sm leading-relaxed mb-6">
              Basado en tus errores recientes en <strong>{errors[0]?.topic || 'Gramática'}</strong>, te sugerimos realizar una sesión de roleplay enfocada en situaciones profesionales.
            </p>
            <div className="flex gap-2">
              <Link 
                href="/ejercicios-inteligentes?category=roleplay"
                className="flex-1 py-4 bg-white text-indigo-600 rounded-2xl text-center font-black text-sm hover:scale-105 transition-transform"
              >
                Iniciar Práctica
              </Link>
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Mi progreso en Focus English',
                      text: `¡He completado ${stats?.total_exercises_completed} ejercicios y tengo una racha de ${stats?.current_streak} días!`,
                      url: window.location.href,
                    });
                  }
                }}
                className="p-4 bg-white/20 rounded-2xl hover:bg-white/30 transition-all"
                title="Compartir Progreso"
              >
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          <LeaderboardDisplay />
        </div>
      </div>
    </div>
  );
}
