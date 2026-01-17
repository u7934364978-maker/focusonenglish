'use client';

// ============================================
// DASHBOARD INFINITO - Sistema de Ejercicios Ilimitados
// Basado en TEMAS, FUERZA y DOMINIO (no en cantidad de ejercicios)
// Version: 3.0 - Infinite Exercise System
// Updated: 2026-01-17
// ============================================

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Mock data - en producción vendría de Supabase
const mockUserData = {
  name: 'Administrador',
  email: 'admin@focus-on-english.com',
  stats: {
    streakDays: 7,
    totalStudyMinutes: 1440, // 24 horas
    topicsStarted: 8,
    topicsCompleted: 3,
    averageStrength: 72, // Promedio de fuerza en todos los temas
  },
  currentFocus: {
    topicId: 'advanced-grammar-structures',
    topicName: 'Estructuras Gramaticales Avanzadas',
    strengthLevel: 65,
    proficiency: 'intermediate' as const,
    minutesThisWeek: 120,
  },
  recentTopics: [
    { id: '1', name: 'Mixed Conditionals', strength: 85, change: +5, category: 'grammar' },
    { id: '2', name: 'Inversion for Emphasis', strength: 78, change: +8, category: 'grammar' },
    { id: '3', name: 'Academic Vocabulary', strength: 72, change: +3, category: 'vocabulary' },
  ],
  weeklyGoals: {
    practiceMinutes: { current: 180, target: 300 },
    topicsDominated: { current: 2, target: 3 },
    strengthGain: { current: 45, target: 75 },
  },
};

const icons = {
  fire: '🔥',
  clock: '⏱️',
  target: '🎯',
  trophy: '🏆',
  brain: '🧠',
  chart: '📊',
  book: '📚',
  star: '⭐',
  rocket: '🚀',
  muscle: '💪',
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando tu progreso...</p>
        </div>
      </div>
    );
  }

  // Calcular nivel de dominio general
  const overallMastery = userData.stats.averageStrength;
  const masteryLevel = 
    overallMastery >= 90 ? 'Maestría' :
    overallMastery >= 70 ? 'Avanzado' :
    overallMastery >= 40 ? 'Intermedio' : 'Principiante';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                ¡Hola, {userData.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Continúa fortaleciendo tu inglés • Nivel: <span className="font-bold text-blue-600">{masteryLevel}</span>
              </p>
            </div>
            <Link
              href="/profile"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <span className="text-2xl">😊</span>
              <span className="text-sm font-medium">Perfil</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards - Sistema Infinito */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Racha */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">{icons.fire}</span>
              <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
                ¡En racha!
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{userData.stats.streakDays} días</h3>
            <p className="text-sm text-gray-600">Racha de práctica</p>
          </div>

          {/* Tiempo de Estudio */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">{icons.clock}</span>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                Total
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {Math.floor(userData.stats.totalStudyMinutes / 60)}h
            </h3>
            <p className="text-sm text-gray-600">Tiempo de práctica</p>
          </div>

          {/* Fuerza Promedio */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">{icons.muscle}</span>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                Dominio
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{userData.stats.averageStrength}%</h3>
            <p className="text-sm text-gray-600">Fuerza promedio</p>
          </div>

          {/* Temas Activos */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">{icons.brain}</span>
              <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">
                Temas
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {userData.stats.topicsStarted}
            </h3>
            <p className="text-sm text-gray-600">Temas en progreso</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Current Focus */}
          <div className="lg:col-span-2 space-y-6">
            {/* Enfoque Actual */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {icons.target} Tu Enfoque Actual
                </h2>
                <span className="text-sm font-medium text-blue-600 capitalize">
                  {userData.currentFocus.proficiency === 'beginner' && 'Principiante'}
                  {userData.currentFocus.proficiency === 'intermediate' && 'Intermedio'}
                  {userData.currentFocus.proficiency === 'advanced' && 'Avanzado'}
                  {userData.currentFocus.proficiency === 'mastery' && 'Maestría'}
                </span>
              </div>

              {/* Topic Card */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">{userData.currentFocus.topicName}</h3>
                
                {/* Strength Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Nivel de Dominio</span>
                    <span className="text-sm font-bold text-blue-600">
                      {userData.currentFocus.strengthLevel}% {icons.muscle}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${userData.currentFocus.strengthLevel}%` }}
                    ></div>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  {icons.clock} {userData.currentFocus.minutesThisWeek} minutos esta semana
                </div>
              </div>

              {/* Continue Button */}
              <Link
                href="/practica"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 font-medium"
              >
                <span className="text-xl">{icons.rocket}</span>
                Continuar Practicando
              </Link>
            </div>

            {/* Temas Recientes */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {icons.chart} Temas Recientes
              </h2>
              <div className="space-y-3">
                {userData.recentTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-2xl">
                        {topic.category === 'grammar' ? '📝' : '📚'}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{topic.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${topic.strength}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-600">{topic.strength}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${topic.change > 0 ? 'text-green-600' : 'text-gray-600'}`}>
                        {topic.change > 0 ? '+' : ''}{topic.change}%
                      </div>
                      <div className="text-xs text-gray-500">esta semana</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                {icons.target} Acciones Rápidas
              </h2>
              <div className="space-y-3">
                <Link
                  href="/practica"
                  className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 rounded-lg transition-colors border-2 border-purple-200"
                >
                  <span className="text-2xl">🎯</span>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-gray-900">Práctica Ilimitada</div>
                    <div className="text-xs text-gray-600">Ejercicios infinitos</div>
                  </div>
                  <span className="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded-full font-bold">
                    NUEVO
                  </span>
                </Link>
                <Link
                  href="/curso-b2"
                  className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <span className="text-2xl">{icons.book}</span>
                  <span className="font-medium text-gray-900">Explorar Temas</span>
                </Link>
                <Link
                  href="/test-nivel"
                  className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                >
                  <span className="text-2xl">{icons.chart}</span>
                  <span className="font-medium text-gray-900">Test de nivel</span>
                </Link>
              </div>
            </div>

            {/* Weekly Goals */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                {icons.trophy} Objetivos Semanales
              </h2>
              <div className="space-y-4">
                {/* Practice Minutes */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Minutos de práctica</span>
                    <span className="text-sm font-bold text-blue-600">
                      {userData.weeklyGoals.practiceMinutes.current}/{userData.weeklyGoals.practiceMinutes.target}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ 
                        width: `${(userData.weeklyGoals.practiceMinutes.current / userData.weeklyGoals.practiceMinutes.target) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>

                {/* Topics Dominated */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Temas dominados</span>
                    <span className="text-sm font-bold text-green-600">
                      {userData.weeklyGoals.topicsDominated.current}/{userData.weeklyGoals.topicsDominated.target}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ 
                        width: `${(userData.weeklyGoals.topicsDominated.current / userData.weeklyGoals.topicsDominated.target) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>

                {/* Strength Gain */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Ganancia de fuerza</span>
                    <span className="text-sm font-bold text-orange-600">
                      +{userData.weeklyGoals.strengthGain.current}/{userData.weeklyGoals.strengthGain.target}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full"
                      style={{ 
                        width: `${(userData.weeklyGoals.strengthGain.current / userData.weeklyGoals.strengthGain.target) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm border border-yellow-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                {icons.star} Logros Destacados
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{icons.fire}</span>
                  <div>
                    <h3 className="font-medium text-gray-900">Racha de 7 días</h3>
                    <p className="text-sm text-gray-600">¡Sigue así!</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{icons.muscle}</span>
                  <div>
                    <h3 className="font-medium text-gray-900">Dominio Creciente</h3>
                    <p className="text-sm text-gray-600">72% de fuerza promedio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
