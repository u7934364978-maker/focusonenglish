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
import { Sidebar } from '@/components/dashboard/Sidebar';

export const runtime = 'edge';

// Mock data - en producción vendría de Supabase
const mockUserData = {
  name: 'Sarah',
  email: 'sarah@focus-on-english.com',
  level: 'Advanced Learner',
  levelNumber: 5,
  xp: 450,
  xpTarget: 1000,
  streakDays: 7,
  currentTopic: 'Advanced Grammar Structures',
  stats: {
    lessonsCompleted: 12,
    lessonsTarget: 20,
    wordsCompleted: 156,
    wordsTarget: 200,
    listeningMinutes: 45,
    listeningTarget: 60,
    exercisesCompleted: 87,
    averageScore: 85,
    totalMinutes: 180,
    perfectScores: 12,
  },
};

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userData] = useState(mockUserData);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
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
                ¡Hola, {userData.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-base text-coral-100 mt-2">
                Continúa fortaleciendo tu inglés • Nivel: <span className="font-bold text-white">{userData.level}</span>
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
                href="/profile"
                className="flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-all"
              >
                <span className="text-2xl">😊</span>
                <span className="text-sm font-medium hidden md:inline">Perfil</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          
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
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Experiencia</h3>
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
                  {Math.round((userData.stats.lessonsCompleted / userData.stats.lessonsTarget) * 100)}%
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Lecciones</h3>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((userData.stats.lessonsCompleted / userData.stats.lessonsTarget) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {userData.stats.lessonsCompleted} / {userData.stats.lessonsTarget} completadas
              </p>
            </div>

            {/* Vocabulary Progress */}
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-peach-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📝</span>
                <span className="text-sm font-bold text-peach-600">
                  {Math.round((userData.stats.wordsCompleted / userData.stats.wordsTarget) * 100)}%
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Vocabulario</h3>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute h-full bg-gradient-to-r from-peach-500 to-orange-500 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((userData.stats.wordsCompleted / userData.stats.wordsTarget) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {userData.stats.wordsCompleted} / {userData.stats.wordsTarget} palabras
              </p>
            </div>

            {/* Average Score */}
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-melon-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-bold text-melon-600">
                  {userData.stats.averageScore}%
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Promedio</h3>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute h-full bg-gradient-to-r from-melon-500 to-coral-500 rounded-full transition-all duration-500"
                  style={{ width: `${userData.stats.averageScore}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {userData.stats.exercisesCompleted} ejercicios completados
              </p>
            </div>
          </div>
          
          {/* Tu Progreso de Hoy */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-coral-100">
            <div className="text-center">
              <span className="text-4xl mb-4 block">📈</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tu Progreso Hoy</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-black text-coral-600">{userData.stats.exercisesCompleted}</div>
                  <div className="text-xs text-gray-600 mt-1">Ejercicios</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-peach-600">{userData.stats.totalMinutes}</div>
                  <div className="text-xs text-gray-600 mt-1">Minutos</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-amber-600">{userData.stats.perfectScores}</div>
                  <div className="text-xs text-gray-600 mt-1">Perfectos</div>
                </div>
              </div>
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
