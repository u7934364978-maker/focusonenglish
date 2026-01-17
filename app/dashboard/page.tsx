'use client';

// ============================================
// DASHBOARD ULTRA SIMPLIFICADO - Focus English
// Versión: 5.0 - Absolute Minimalist
// Updated: 2026-01-17
// Sin bloques, sin barras, sin métricas
// ============================================

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Mock data - en producción vendría de Supabase
const mockUserData = {
  name: 'Administrador',
  email: 'admin@focus-on-english.com',
  level: 'Avanzado',
  currentTopic: 'Estructuras Gramaticales Avanzadas',
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
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                ¡Hola, {userData.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-base text-gray-600 mt-2">
                Continúa fortaleciendo tu inglés • Nivel: <span className="font-bold text-blue-600">{userData.level}</span>
              </p>
            </div>
            <Link
              href="/profile"
              className="flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
            >
              <span className="text-2xl">😊</span>
              <span className="text-sm font-medium">Perfil</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10">
          
          {/* Hero Card - Tu Enfoque Actual */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-2xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-full mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold mb-3">
                Tu Enfoque Actual
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                {userData.currentTopic}
              </p>
              <Link
                href="/practica"
                className="inline-block px-10 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                🚀 Continuar Practicando
              </Link>
            </div>
          </div>

          {/* Acciones Rápidas */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ¿Qué quieres hacer hoy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Práctica Ilimitada */}
              <Link
                href="/practica"
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-purple-100 hover:border-purple-300 hover:-translate-y-1 transform"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <span className="text-5xl">🎯</span>
                    <span className="absolute -top-2 -right-2 px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                      NUEVO
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Práctica Ilimitada
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ejercicios infinitos adaptados a tu nivel
                  </p>
                </div>
              </Link>
              
              {/* Explorar Temas */}
              <Link
                href="/curso-b2"
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-blue-100 hover:border-blue-300 hover:-translate-y-1 transform"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-5xl mb-4">📚</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Explorar Temas
                  </h3>
                  <p className="text-sm text-gray-600">
                    Curso completo B2 estructurado
                  </p>
                </div>
              </Link>
              
              {/* Test de Nivel */}
              <Link
                href="/test-nivel"
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-green-100 hover:border-green-300 hover:-translate-y-1 transform"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-5xl mb-4">📊</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Test de Nivel
                  </h3>
                  <p className="text-sm text-gray-600">
                    Evalúa tu progreso actual
                  </p>
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
