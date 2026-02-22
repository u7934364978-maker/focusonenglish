'use client';

// ============================================
// DASHBOARD MEJORADO - Focus English
// Versión: 7.0 - Ultimate User Experience
// Updated: 2026-01-17
// Dashboard completamente rediseñado con UI moderna y motivacional
// ============================================

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase-client';
import { getUser, signOut } from '@/lib/auth-helpers';
import { LogOut } from 'lucide-react';
import { calculateXPForLevel, getLevelTitle } from '@/lib/gamification/xp';

// Helper to map levels
const levelLabels: { [key: string]: string } = {
  'A1': 'Principiante (A1)',
  'A2': 'Elemental (A2)',
  'B1': 'Intermedio (B1)',
  'B2': 'Intermedio Alto (B2)',
  'C1': 'Avanzado (C1)',
  'C2': 'Maestría (C2)',
};

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const { user, error: userError } = await getUser();
        
        if (userError || !user) {
          router.push('/cuenta/login');
          return;
        }

        // Fetch profile data from public.users
        const { data: profile, error: profileError } = await supabase
          .from('users')
          .select('*')
          .eq('email', user.email)
          .maybeSingle();

        // Fetch extended profile data from user_profiles
        const { data: extendedProfile, error: extendedError } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();

        // Fetch progress stats using RPC
        const { data: progressStats, error: statsError } = await supabase
          .rpc('get_user_progress_stats', { p_user_id: user.id });

        // Fetch XP and Level
        const { data: xpData, error: xpError } = await supabase
          .from('user_xp')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();

        // Fetch Streak
        const { data: streakData, error: streakError } = await supabase
          .from('user_streaks')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();

        // Fetch User Stats for aggregate data
        const { data: userStats, error: userStatsError } = await supabase
          .from('user_stats')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();

        // Fetch Practice Sessions summary
        const { data: practiceSessions, error: practiceError } = await supabase
          .from('practice_sessions')
          .select('duration_minutes, exercises_completed')
          .eq('user_id', user.id);

        if (profileError) console.error('Error fetching profile:', profileError);
        if (statsError) console.error('Error fetching stats:', statsError);
        if (xpError) console.error('Error fetching XP:', xpError);
        if (streakError) console.error('Error fetching streak:', streakError);
        if (userStatsError) console.error('Error fetching user stats:', userStatsError);
        if (practiceError) console.error('Error fetching practice sessions:', practiceError);

        // Calculate XP progress within current level
        const currentLevel = xpData?.level || 1;
        const totalXP = xpData?.total_xp || 0;
        const xpAtStartOfCurrentLevel = calculateXPForLevel(currentLevel);
        const xpInCurrentLevel = totalXP - xpAtStartOfCurrentLevel;
        const xpToNextLevel = xpData?.xp_to_next_level || 100;
        const xpTargetForLevel = xpInCurrentLevel + xpToNextLevel;

        setUserData({
          name: profile?.name || user.user_metadata?.name || 'Estudiante',
          email: user.email,
          level: profile?.language_level ? levelLabels[profile.language_level] : 'No asignado',
          xp: xpInCurrentLevel,
          xpTarget: xpTargetForLevel,
          totalXp: totalXP,
          streakDays: streakData?.current_streak || 0,
          userLevel: currentLevel,
          levelTitle: getLevelTitle(currentLevel),
          courseLink: profile?.language_level ? `/curso/ingles-${profile.language_level.toLowerCase()}` : '/curso/ingles-a1',
          languageLevel: profile?.language_level || 'A1',
          subscriptionStatus: extendedProfile?.subscription_status || 'inactive'
        });

        const statsData = progressStats?.[0] || {
          total_lessons: 0,
          completed_lessons: 0,
          average_score: 0,
          total_time_spent: 0
        };

        // Aggregate practice session data
        const practiceTotalMinutes = practiceSessions?.reduce((acc: number, s: any) => acc + (s.duration_minutes || 0), 0) || 0;
        const practiceTotalExercises = practiceSessions?.reduce((acc: number, s: any) => acc + (s.exercises_completed || 0), 0) || 0;

        setStats({
          lessonsCompleted: statsData.completed_lessons,
          lessonsTarget: statsData.total_lessons || 10,
          wordsCompleted: userStats?.total_exercises_completed || practiceTotalExercises, 
          wordsTarget: 500, // New target for vocabulary/exercises
          listeningMinutes: Math.round(statsData.total_time_spent / 60) + practiceTotalMinutes,
          listeningTarget: 120, // 2 hours target
          exercisesCompleted: statsData.completed_lessons + practiceTotalExercises,
          averageScore: Math.round(statsData.average_score || 0),
          totalMinutes: Math.round(statsData.total_time_spent / 60) + practiceTotalMinutes,
          perfectScores: 0, // Mock for now
        });

      } catch (error) {
        console.error('Error loading dashboard:', error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/cuenta/login');
      router.refresh();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading || !userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando tu progreso...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-peach-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-coral-600 to-peach-600 text-white sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                ¡Hola, {(userData.name || "").split(' ')[0]}! 👋
              </h1>
              <p className="text-base text-coral-100 mt-2">
                Continúa fortaleciendo tu inglés • Nivel: <span className="font-bold text-white">{userData.level}</span> {userData.userLevel > 0 && <span className="ml-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold text-white border border-white/30">{userData.levelTitle} (Lvl {userData.userLevel})</span>}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl">
                <span className="text-2xl">🔥</span>
                <div>
                  <div className="text-xs text-coral-100">Racha</div>
                  <div className="text-lg font-bold">{userData.streakDays} días</div>
                </div>
              </div>
              <Link
                href="/dashboard/analytics"
                className="flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-all"
              >
                <span className="text-2xl">📊</span>
                <span className="text-sm font-medium hidden md:inline">Análisis</span>
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-all"
              >
                <span className="text-2xl">😊</span>
                <span className="text-sm font-medium hidden md:inline">Perfil</span>
              </Link>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm hover:bg-red-500/20 rounded-xl transition-all border border-white/20 group"
                title="Cerrar Sesión"
              >
                <LogOut size={20} className="text-white group-hover:text-red-200 transition-colors" />
                <span className="text-sm font-medium hidden lg:inline">Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          
          {/* Subscription Status Banner */}
          {userData.subscriptionStatus !== 'active' && userData.subscriptionStatus !== 'trialing' && (
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <span className="text-4xl">⚠️</span>
                <div>
                  <h3 className="text-lg font-bold text-amber-900">Tu suscripción no está activa</h3>
                  <p className="text-amber-700">Para acceder a todos los cursos y funciones, necesitas activar tu plan.</p>
                </div>
              </div>
              <Link 
                href="/planes" 
                className="px-8 py-3 bg-amber-600 text-white font-black rounded-xl hover:bg-amber-700 transition-all shadow-md"
              >
                Ver Planes
              </Link>
            </div>
          )}

          {/* Hero Card Principal - Práctica Ilimitada */}
          <div className="bg-gradient-to-br from-coral-600 via-peach-600 to-orange-600 rounded-3xl p-12 text-white shadow-2xl hover:shadow-coral-lg transition-all hover:-translate-y-1 transform">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur rounded-full mb-6 shadow-xl">
                <span className="text-5xl">🎯</span>
              </div>
              <h2 className="text-4xl font-black mb-4">
                Práctica Ilimitada
              </h2>
              <p className="text-xl text-orange-50 mb-2">
                Ejercicios infinitos adaptados a tu nivel
              </p>
              <p className="text-base text-orange-100 mb-8">
                Practica sin límites hasta que decidas terminar
              </p>
              <Link
                href="/practica"
                className="inline-flex items-center gap-3 px-12 py-5 bg-white text-coral-600 rounded-xl hover:bg-orange-50 transition-all font-black text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              >
                <span>🚀</span>
                <span>Comenzar Ahora</span>
                <span>→</span>
              </Link>
              <div className="mt-6 flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <span>Ejercicios ilimitados</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  <span>Adaptados a ti</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span>Progreso en tiempo real</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Speaking Coach Section */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-100 overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
              <span className="text-9xl">🤖</span>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-100 text-coral-600 text-[10px] font-black uppercase tracking-widest mb-4">
                    Nueva Función AI
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">
                    Tu Coach de Speaking Personal
                  </h2>
                  <p className="text-slate-600 text-lg max-w-2xl">
                    Mejora tu fluidez practicando situaciones reales. Obtén feedback instantáneo en cada turno.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                    <div className="text-center p-3 bg-slate-50 rounded-2xl">
                      <div className="text-xl mb-1">🎙️</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase">Voz Real</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-2xl">
                      <div className="text-xl mb-1">🎯</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase">Puntería</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-2xl">
                      <div className="text-xl mb-1">📊</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase">Métricas</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-2xl">
                      <div className="text-xl mb-1">🧠</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase">Memoria</div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/3 flex flex-col gap-4">
                  <Link
                    href="/practica-ia"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 text-white rounded-2xl hover:bg-coral-600 transition-all font-black text-lg shadow-xl hover:shadow-coral-200"
                  >
                    <span>🎙️</span>
                    <span>Iniciar Práctica IA</span>
                    <span>→</span>
                  </Link>
                  <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Sugerido: Entrevista de Trabajo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Curso Principal */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-coral-50 overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
              <span className="text-9xl">📚</span>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">
                    Mi Curso Principal: <span className="text-coral-500">Nivel {userData.languageLevel}</span>
                  </h2>
                  <p className="text-slate-600 text-lg max-w-2xl">
                    Accede a las 60 unidades oficiales de tu nivel para dominar el inglés de manera estructurada.
                  </p>
                </div>
                <Link
                  href={userData.courseLink}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-coral-500 text-white rounded-xl hover:bg-coral-600 transition-all font-bold text-lg shadow-lg hover:shadow-coral-200"
                >
                  <span>Continuar Estudiando</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Objetivo</div>
                    <div className="text-sm font-black text-slate-900">Dominio {userData.languageLevel}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <span className="text-3xl">📂</span>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Contenido</div>
                    <div className="text-sm font-black text-slate-900">60 Unidades</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <span className="text-3xl">🏅</span>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Certificado</div>
                    <div className="text-sm font-black text-slate-900">Al finalizar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid - Visual Progress */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* XP Progress */}
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-coral-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">⭐</span>
                <span className="text-sm font-bold text-coral-600">
                  {Math.round((userData.xp / userData.xpTarget) * 100)}%
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-1">Nivel {userData.userLevel}</h3>
              <p className="text-xs font-bold text-coral-500 mb-2 uppercase tracking-tighter">{userData.levelTitle}</p>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute h-full bg-gradient-to-r from-coral-500 to-peach-500 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((userData.xp / userData.xpTarget) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {userData.xp} / {userData.xpTarget} XP
              </p>
            </div>

            {/* Lessons Progress */}
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-amber-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-bold text-amber-600">
                  {stats.lessonsTarget > 0 ? Math.round((stats.lessonsCompleted / stats.lessonsTarget) * 100) : 0}%
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Lecciones</h3>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                  style={{ width: `${stats.lessonsTarget > 0 ? Math.min((stats.lessonsCompleted / stats.lessonsTarget) * 100, 100) : 0}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {stats.lessonsCompleted} / {stats.lessonsTarget} completadas
              </p>
            </div>

            {/* Vocabulary Progress */}
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-peach-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📝</span>
                <span className="text-sm font-bold text-peach-600">
                  {stats.wordsTarget > 0 ? Math.round((stats.wordsCompleted / stats.wordsTarget) * 100) : 0}%
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Vocabulario</h3>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute h-full bg-gradient-to-r from-peach-500 to-orange-500 rounded-full transition-all duration-500"
                  style={{ width: `${stats.wordsTarget > 0 ? Math.min((stats.wordsCompleted / stats.wordsTarget) * 100, 100) : 0}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {stats.wordsCompleted} / {stats.wordsTarget} palabras
              </p>
            </div>

            {/* Average Score */}
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-melon-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-bold text-melon-600">
                  {stats.averageScore}%
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Promedio</h3>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute h-full bg-gradient-to-r from-melon-500 to-coral-500 rounded-full transition-all duration-500"
                  style={{ width: `${stats.averageScore}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {stats.exercisesCompleted} ejercicios completados
              </p>
            </div>
          </div>
          
          {/* Tu Progreso Acumulado */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-coral-100">
            <div className="text-center">
              <span className="text-4xl mb-4 block">📈</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tu Progreso Acumulado</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-black text-coral-600">{stats.exercisesCompleted}</div>
                  <div className="text-xs text-gray-600 mt-1">Actividades</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-peach-600">{stats.totalMinutes}</div>
                  <div className="text-xs text-gray-600 mt-1">Minutos</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-amber-600">{stats.perfectScores}</div>
                  <div className="text-xs text-gray-600 mt-1">Perfectos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Líneas de Cursos */}
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <span className="p-2 bg-coral-100 rounded-lg">🎓</span>
              Cursos Disponibles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Academic Line */}
              <Link
                href={`/dashboard/examenes/${(userData.level || "").split('(')[1]?.replace(')', '') || 'C1'}`}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-purple-50 hover:border-purple-200 hover:-translate-y-2 transform relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                <div className="relative z-10">
                  <span className="text-5xl mb-6 block">📜</span>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                    Exámenes
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Certifica tu nivel. Preparación express para Cambridge, IELTS y TOEFL.
                  </p>
                  <div className="flex items-center text-purple-600 font-bold gap-2">
                    <span>Explorar curso</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Otras Opciones */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Otras opciones de aprendizaje
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Explorar Temas */}
              <Link
                href="/curso-b2"
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-orange-100 hover:border-orange-300 hover:-translate-y-1 transform"
              >
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-5xl">📚</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-coral-600 transition-colors">
                      Curso B2 Estructurado
                    </h3>
                    <p className="text-sm text-gray-600">
                      Sigue el programa completo organizado por módulos y lecciones
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-2xl text-gray-400 group-hover:text-coral-600 transition-colors">→</span>
                  </div>
                </div>
              </Link>
              
              {/* Test de Nivel */}
              <Link
                href="/test-nivel"
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-amber-100 hover:border-amber-300 hover:-translate-y-1 transform"
              >
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-5xl">📊</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      Evalúa tu Nivel
                    </h3>
                    <p className="text-sm text-gray-600">
                      Realiza un test completo para conocer tu nivel actual de inglés
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-2xl text-gray-400 group-hover:text-amber-600 transition-colors">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Motivational Section */}
          <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 rounded-2xl p-10 text-white text-center shadow-2xl">
            <div className="text-6xl mb-4">🌟</div>
            <h3 className="text-3xl font-bold mb-3">
              ¡Cada Día Cuenta!
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              La práctica constante es la clave del éxito. Dedica unos minutos hoy y verás la diferencia.
            </p>
            <Link
              href="/practica"
              className="inline-block px-8 py-3 bg-white text-orange-600 rounded-xl hover:bg-orange-50 transition-all font-bold shadow-xl"
            >
              Comenzar Ahora
            </Link>
          </div>

          {/* Info Cards - Minimal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <span className="text-3xl">💡</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Consejo del día</h4>
                  <p className="text-sm text-gray-600">
                    Practica al menos 15 minutos diarios para mantener tu nivel y seguir mejorando.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🎓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Tu próximo objetivo</h4>
                  <p className="text-sm text-gray-600">
                    Completa ejercicios de gramática avanzada para fortalecer tu nivel B2.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
