'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-8">
            <span className="animate-pulse">✨</span>
            <span>Cursos de Inglés Especializados para España</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            Domina el Inglés
            <br />
            <span className="text-yellow-300">
              Para Tu Objetivo
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Cursos de inglés online desde España, especializados en <strong>trabajo</strong>, <strong>viajes</strong> o <strong>exámenes oficiales</strong>. Programas personalizados de 90 días. Desde €6.99/mes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/diagnostico"
              className="px-8 py-4 bg-white text-violet-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-lg"
            >
              🎯 Hacer Test de Nivel Gratis
            </Link>
            <Link
              href="/cursos-especializados"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border-2 border-white/30 text-lg"
            >
              Ver Cursos →
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span><strong className="text-white">4.8/5</strong> (2,500+ reseñas)</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇪🇸</span>
              <span><strong className="text-white">100%</strong> enfocado en España</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span><strong className="text-white">18</strong> niveles (A1-C2)</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Cursos Principales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Elige Tu Objetivo
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cursos especializados diseñados para tus necesidades específicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Curso 1: Trabajo */}
            <div className="group bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border-2 border-violet-200 hover:border-violet-400 hover:shadow-2xl transition-all">
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                Inglés para Trabajar
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Vocabulario profesional, emails, reuniones y presentaciones. Especializado por sectores: IT, marketing, ingeniería, finanzas y más.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Inglés de negocios certificado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Vocabulario técnico por sector</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Simulaciones de situaciones reales</span>
                </li>
              </ul>
              <Link
                href="/cursos/trabajo/b2"
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition-all group-hover:scale-105"
              >
                Ver Curso
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Curso 2: Viajes */}
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all">
              <div className="text-6xl mb-4">✈️</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                Inglés para Viajar
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Comunicación práctica para tus viajes. Aeropuertos, hoteles, restaurantes, direcciones y situaciones de emergencia.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Frases esenciales para viajar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Pronunciación y listening práctico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Cultura y expresiones locales</span>
                </li>
              </ul>
              <Link
                href="/cursos/viajes/a2"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all group-hover:scale-105"
              >
                Ver Curso
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Curso 3: Exámenes */}
            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 hover:shadow-2xl transition-all">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                Preparación Exámenes
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Preparación oficial para Cambridge (B2 First, C1 Advanced), TOEFL iBT e IELTS Academic. Con simulacros y feedback personalizado.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Contenido oficial actualizado 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Simulacros reales de examen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Estrategias y trucos de expertos</span>
                </li>
              </ul>
              <Link
                href="/cursos/examenes/b2"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-all group-hover:scale-105"
              >
                Ver Curso
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Ver todos los cursos */}
          <div className="text-center mt-12">
            <Link
              href="/cursos-especializados"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 hover:shadow-xl transition-all"
            >
              Ver Todos los Cursos (18 niveles disponibles)
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              ¿Por Qué Focus English?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              La plataforma de inglés más especializada de España
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                100% Especializado
              </h3>
              <p className="text-slate-600">
                Cursos diseñados para tu objetivo específico: trabajo, viajes o exámenes oficiales.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🇪🇸</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Enfocado en España
              </h3>
              <p className="text-slate-600">
                Contenido adaptado al contexto español. Ejemplos, situaciones y vocabulario relevantes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Resultados en 90 Días
              </h3>
              <p className="text-slate-600">
                Programas intensivos diseñados para avanzar un nivel completo en 3 meses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Desde €6.99/mes
              </h3>
              <p className="text-slate-600">
                Precios accesibles con contenido de calidad. Cancela cuando quieras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog destacado */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Aprende con Nuestro Blog
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Guías completas y consejos para mejorar tu inglés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Artículo 1 */}
            <Link href="/blog/preparar-examenes-oficiales" className="group">
              <div className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-6xl">
                  🎓
                </div>
                <div className="p-6">
                  <div className="text-sm font-bold text-amber-600 mb-2">EXÁMENES</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">
                    Guía Completa: Preparar Exámenes Oficiales de Inglés
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Todo sobre Cambridge B2 First, TOEFL e IELTS. Estructura, estrategias y plan de estudio.
                  </p>
                  <div className="flex items-center gap-2 text-violet-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Leer más</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Artículo 2 */}
            <Link href="/blog/ingles-esencial-viajar" className="group">
              <div className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white text-6xl">
                  ✈️
                </div>
                <div className="p-6">
                  <div className="text-sm font-bold text-blue-600 mb-2">VIAJES</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">
                    Inglés Esencial para Viajar: Frases y Expresiones
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Aprende las frases clave para aeropuertos, hoteles, restaurantes y emergencias.
                  </p>
                  <div className="flex items-center gap-2 text-violet-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Leer más</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Artículo 3 */}
            <Link href="/blog/ingles-profesional-sectores" className="group">
              <div className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white text-6xl">
                  💼
                </div>
                <div className="p-6">
                  <div className="text-sm font-bold text-violet-600 mb-2">TRABAJO</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">
                    Inglés Profesional por Sectores: Vocabulario Clave
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Vocabulario técnico y expresiones profesionales para tu sector específico.
                  </p>
                  <div className="flex items-center gap-2 text-violet-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Leer más</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-all"
            >
              Ver Todos los Artículos
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ¿Listo para Dominar el Inglés?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Haz nuestro test de nivel gratuito y descubre qué curso es perfecto para ti. Solo 10 minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/diagnostico"
              className="px-8 py-4 bg-white text-violet-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-lg"
            >
              🎯 Hacer Test de Nivel Gratis
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border-2 border-white/30 text-lg"
            >
              📧 Contactar con Nosotros
            </Link>
          </div>

          <p className="text-white/60 text-sm mt-8">
            ⭐ 4.8/5 estrellas • 2,500+ estudiantes satisfechos • 🇪🇸 100% España
          </p>
        </div>
      </section>
    </>
  );
}
