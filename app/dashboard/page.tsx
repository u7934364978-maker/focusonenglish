'use client';

// ============================================
// DASHBOARD DEL ESTUDIANTE
// Panel principal con progreso, estadísticas y acceso rápido
// ============================================

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Icons (usando emojis simples por ahora)
const icons = {
  book: '📚',
  trophy: '🏆',
  fire: '🔥',
  chart: '📊',
  certificate: '🎓',
  clock: '⏰',
  target: '🎯',
  star: '⭐',
};

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState({
    currentLevel: 'B2',
    currentModule: 1,
    completedLessons: 3,
    totalLessons: 18,
    overallProgress: 17, // Percentage
    streakDays: 7,
    totalStudyHours: 24,
    certificatesEarned: 0,
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      // TODO: Cargar datos reales del usuario desde la API
      setLoading(false);
    }
  }, [status, router]);

  if (loading || status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando tu dashboard...</p>
        </div>
      </div>
    );
  }

  const progressPercentage = (progress.completedLessons / progress.totalLessons) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                ¡Hola, {session?.user?.name?.split(' ')[0] || 'Estudiante'}! 👋
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Continúa tu camino hacia la fluidez en inglés
              </p>
            </div>
            <Link
              href="/profile"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <span className="text-2xl">{session?.user?.image ? '👤' : '😊'}</span>
              <span className="text-sm font-medium">Perfil</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Racha */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">{icons.fire}</span>
              <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
                Activo
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{progress.streakDays} días</h3>
            <p className="text-sm text-gray-600">Racha de estudio</p>
          </div>

          {/* Lecciones Completadas */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">{icons.book}</span>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                Progreso
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {progress.completedLessons}/{progress.totalLessons}
            </h3>
            <p className="text-sm text-gray-600">Lecciones completadas</p>
          </div>

          {/* Horas de Estudio */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">{icons.clock}</span>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                Total
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{progress.totalStudyHours}h</h3>
            <p className="text-sm text-gray-600">Horas de estudio</p>
          </div>

          {/* Certificados */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">{icons.certificate}</span>
              <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">
                Logros
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{progress.certificatesEarned}</h3>
            <p className="text-sm text-gray-600">Certificados obtenidos</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Course Progress */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {icons.target} Tu Progreso Actual
                </h2>
                <span className="text-sm font-medium text-blue-600">
                  Nivel {progress.currentLevel}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Módulo {progress.currentModule} - Preparación de Exámenes
                  </span>
                  <span className="text-sm font-bold text-blue-600">
                    {progressPercentage.toFixed(0)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Continue Learning Button */}
              <Link
                href="/curso-b2"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 font-medium"
              >
                <span className="text-xl">{icons.book}</span>
                Continuar Aprendiendo
              </Link>
            </div>

            {/* Recent Lessons */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {icons.chart} Lecciones Recientes
              </h2>
              <div className="space-y-3">
                {[
                  { id: 1, title: 'Past Perfect y Past Perfect Continuous', score: 92, completed: true },
                  { id: 2, title: 'Mixed Conditionals', score: 88, completed: true },
                  { id: 3, title: 'Inversion for Emphasis', score: 85, completed: true },
                  { id: 4, title: 'Modales de Especulación', score: null, completed: false },
                ].map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          lesson.completed
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        {lesson.completed ? '✓' : lesson.id}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{lesson.title}</h3>
                        <p className="text-sm text-gray-600">
                          Lección {lesson.id} - Módulo 1
                        </p>
                      </div>
                    </div>
                    {lesson.completed && (
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          {lesson.score}%
                        </div>
                        <div className="text-xs text-gray-500">Puntuación</div>
                      </div>
                    )}
                    {!lesson.completed && (
                      <Link
                        href={`/curso-b2/leccion/b2-m1-l${lesson.id}`}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Comenzar
                      </Link>
                    )}
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
                  href="/curso-b2"
                  className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <span className="text-2xl">{icons.book}</span>
                  <span className="font-medium text-gray-900">Ver todas las lecciones</span>
                </Link>
                <Link
                  href="/certificados"
                  className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                >
                  <span className="text-2xl">{icons.certificate}</span>
                  <span className="font-medium text-gray-900">Mis certificados</span>
                </Link>
                <Link
                  href="/diagnostico"
                  className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                >
                  <span className="text-2xl">{icons.chart}</span>
                  <span className="font-medium text-gray-900">Test de nivel</span>
                </Link>
              </div>
            </div>

            {/* Study Goals */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                {icons.trophy} Objetivos de la Semana
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Lecciones completadas</span>
                    <span className="text-sm font-bold text-blue-600">3/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Minutos de estudio</span>
                    <span className="text-sm font-bold text-green-600">180/300</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Días de racha</span>
                    <span className="text-sm font-bold text-orange-600">7/7 {icons.fire}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm border border-yellow-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                {icons.star} Logros Recientes
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
                  <span className="text-3xl">{icons.book}</span>
                  <div>
                    <h3 className="font-medium text-gray-900">Primer módulo iniciado</h3>
                    <p className="text-sm text-gray-600">Has comenzado tu viaje</p>
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
