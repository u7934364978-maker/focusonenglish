import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SpecializedCoursesPromo } from "@/components/sections/SpecializedCoursesPromo";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SpecializedCoursesPromo />
        
        {/* 3 Tipos de Cursos Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-bold mb-4">
                <span>🎯</span>
                <span>Cursos Especializados</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
                Elige Tu Objetivo de Aprendizaje
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Cursos diseñados específicamente para tu objetivo: viajar, trabajar o certificarte. Todos los niveles desde A1 hasta C2.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Inglés para Viajar */}
              <Link href="/cursos/viajes/a2" className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform">
                  ✈️
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Inglés para Viajar
                </h3>
                <p className="text-slate-600 mb-6">
                  Aprende inglés práctico para aeropuertos, hoteles, restaurantes y situaciones cotidianas en tus viajes.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Conversaciones de viaje</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Vocabulario turístico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Situaciones reales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Niveles A1 a C2</span>
                  </li>
                </ul>
                <div className="inline-flex items-center text-blue-600 font-bold group-hover:underline">
                  Ver cursos de viajes →
                </div>
              </Link>

              {/* Inglés para Trabajar */}
              <Link href="/cursos-especializados" className="group bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border-2 border-violet-200 hover:border-violet-400 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform">
                  💼
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">
                  Inglés para Trabajar
                </h3>
                <p className="text-slate-600 mb-6">
                  Cursos especializados por sector profesional: tecnología, medicina, finanzas, turismo, derecho y más.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Inglés profesional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Vocabulario de tu sector</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Emails y presentaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Niveles B1 a C2</span>
                  </li>
                </ul>
                <div className="inline-flex items-center text-violet-600 font-bold group-hover:underline">
                  Ver cursos profesionales →
                </div>
              </Link>

              {/* Preparación de Exámenes */}
              <Link href="/cursos/examenes/b2" className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🎓
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  Preparación de Exámenes
                </h3>
                <p className="text-slate-600 mb-6">
                  Prepárate para certificaciones oficiales siguiendo los criterios de evaluación estándar internacionales.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Metodología de examen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Simulacros completos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Técnicas y estrategias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Niveles A1 a C2</span>
                  </li>
                </ul>
                <div className="inline-flex items-center text-amber-600 font-bold group-hover:underline">
                  Ver preparación de exámenes →
                </div>
              </Link>
            </div>

            {/* Info Banner - Niveles */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-black mb-4">
                Todos los Niveles Disponibles
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
                Cada tipo de curso está disponible en todos los niveles del Marco Común Europeo de Referencia (MCER)
              </p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-2xl font-black">A1</div>
                  <div className="text-xs opacity-90">Principiante</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-2xl font-black">A2</div>
                  <div className="text-xs opacity-90">Elemental</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-2xl font-black">B1</div>
                  <div className="text-xs opacity-90">Intermedio</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-2xl font-black">B2</div>
                  <div className="text-xs opacity-90">Inter-Alto</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-2xl font-black">C1</div>
                  <div className="text-xs opacity-90">Avanzado</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-2xl font-black">C2</div>
                  <div className="text-xs opacity-90">Maestría</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Preview Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4">
                <span>📚</span>
                <span>Currículum Oficial Cambridge</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
                Contenido Detallado por Nivel
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Todos nuestros cursos están basados en las especificaciones oficiales de Cambridge English. 
                <strong className="text-blue-600"> Sabe exactamente qué vas a aprender</strong> antes de inscribirte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* A1 */}
              <Link href="/cursos/viajes/a1" className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm">
                    A1
                  </div>
                  <div className="text-2xl">🔤</div>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Principiante</h3>
                <p className="text-sm text-slate-600 mb-4">
                  8-10 semanas · 3 módulos
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li>• Saludos y presentaciones</li>
                  <li>• Rutinas diarias básicas</li>
                  <li>• Números, colores, familia</li>
                  <li>• Verb "to be" y Present Simple</li>
                </ul>
                <div className="text-blue-600 font-bold text-sm group-hover:underline">
                  Ver currículum completo →
                </div>
              </Link>

              {/* A2 */}
              <Link href="/cursos/viajes/a2" className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">
                    A2
                  </div>
                  <div className="text-2xl">📖</div>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Elemental</h3>
                <p className="text-sm text-slate-600 mb-4">
                  10-12 semanas · 3 módulos
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li>• Experiencias pasadas (Past Simple)</li>
                  <li>• Planes futuros (Going to, Will)</li>
                  <li>• Comparativos y superlativos</li>
                  <li>• Compras, salud y servicios</li>
                </ul>
                <div className="text-green-600 font-bold text-sm group-hover:underline">
                  Ver currículum completo →
                </div>
              </Link>

              {/* B1 */}
              <Link href="/cursos/viajes/b1" className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold text-sm">
                    B1
                  </div>
                  <div className="text-2xl">📝</div>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Intermedio</h3>
                <p className="text-sm text-slate-600 mb-4">
                  12-14 semanas · 3 módulos
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li>• Present Perfect vs Past Simple</li>
                  <li>• First & Second Conditional</li>
                  <li>• Relative clauses y Passive voice</li>
                  <li>• Narrar experiencias complejas</li>
                </ul>
                <div className="text-purple-600 font-bold text-sm group-hover:underline">
                  Ver currículum completo →
                </div>
              </Link>

              {/* B2 */}
              <Link href="/cursos/examenes/b2" className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-bold text-sm">
                    B2
                  </div>
                  <div className="text-2xl">📚</div>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Intermedio-Alto</h3>
                <p className="text-sm text-slate-600 mb-4">
                  14-16 semanas · 3 módulos
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li>• Past Perfect, Mixed conditionals</li>
                  <li>• Modal verbs deduction avanzado</li>
                  <li>• Reported speech y Passive avanzado</li>
                  <li>• Ensayos y textos argumentativos</li>
                </ul>
                <div className="text-amber-600 font-bold text-sm group-hover:underline">
                  Ver currículum completo →
                </div>
              </Link>

              {/* C1 */}
              <Link href="/cursos/trabajo/c1" className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-violet-400 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-bold text-sm">
                    C1
                  </div>
                  <div className="text-2xl">🎓</div>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Avanzado</h3>
                <p className="text-sm text-slate-600 mb-4">
                  16-18 semanas · 3 módulos
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li>• Análisis crítico y discurso complejo</li>
                  <li>• Estructuras avanzadas (inversión, cleft)</li>
                  <li>• Vocabulario académico sofisticado</li>
                  <li>• Comunicación profesional de alto nivel</li>
                </ul>
                <div className="text-violet-600 font-bold text-sm group-hover:underline">
                  Ver currículum completo →
                </div>
              </Link>

              {/* C2 */}
              <Link href="/cursos/trabajo/c2" className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-rose-400 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full font-bold text-sm">
                    C2
                  </div>
                  <div className="text-2xl">👑</div>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Maestría</h3>
                <p className="text-sm text-slate-600 mb-4">
                  18-20 semanas · 3 módulos
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li>• Dominio pleno del idioma</li>
                  <li>• Vocabulario culto extenso (10,000+ palabras)</li>
                  <li>• Análisis lingüístico y teoría literaria</li>
                  <li>• Especialización profesional avanzada</li>
                </ul>
                <div className="text-rose-600 font-bold text-sm group-hover:underline">
                  Ver currículum completo →
                </div>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-black mb-4">
                📋 Contenido Basado en Estándares Internacionales
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
                Nuestros currículums siguen las especificaciones de Cambridge English y el Marco Común Europeo de Referencia (MCER). 
                Cada nivel incluye gramática, vocabulario, temas y habilidades específicas para garantizar tu progreso.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur">
                  ✓ Exámenes Cambridge A1-C2
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur">
                  ✓ Marco MCER oficial
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur">
                  ✓ Skills: Reading, Writing, Listening, Speaking
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur">
                  ✓ Simulacros de examen
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Subscription Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-bold mb-4">
                <span>💎</span>
                <span>Suscripción Mensual</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
                Acceso Ilimitado a Todos los Cursos
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Un único precio mensual para acceder a todos los niveles (A1-C2) y cursos especializados. Sin permanencia, cancela cuando quieras.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {/* Plan con Publicidad */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200 hover:shadow-2xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl">
                    📺
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">Económico</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Con Publicidad
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-black text-slate-900">€6.99</span>
                  <span className="text-slate-600 font-semibold">/mes</span>
                </div>
                <p className="text-sm text-slate-600 mb-6">
                  Acceso completo con anuncios no intrusivos
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Todos los cursos y niveles (A1-C2)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Material didáctico completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Ejercicios interactivos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Certificado al finalizar</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-500 text-sm">
                    <span className="mt-0.5">•</span>
                    <span>Incluye anuncios publicitarios</span>
                  </li>
                </ul>
                <Link
                  href="/planes"
                  className="block w-full text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Comenzar Ahora
                </Link>
              </div>

              {/* Plan Premium */}
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border-2 border-violet-300 hover:shadow-3xl transition-all md:scale-105">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
                  ⭐ Más Popular
                </div>
                <div className="flex items-center justify-between mb-6 mt-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white text-2xl">
                    👑
                  </div>
                  <span className="text-xs bg-violet-100 text-violet-700 px-3 py-1 rounded-full font-bold">Premium</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Premium
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-black text-slate-900">€14.99</span>
                  <span className="text-slate-600 font-semibold">/mes</span>
                </div>
                <p className="text-sm text-violet-600 font-bold mb-6">
                  ✨ Sin anuncios · Experiencia completa
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">✓</span>
                    <span className="text-slate-700 font-semibold">Todo del plan con publicidad +</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Sin publicidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Clases en vivo semanales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Seguimiento personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Material descargable en PDF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Contenido exclusivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">✓</span>
                    <span className="text-slate-700">Soporte prioritario</span>
                  </li>
                </ul>
                <Link
                  href="/planes"
                  className="block w-full text-center bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Comenzar Premium
                </Link>
              </div>
            </div>

            {/* Info Banner */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-violet-200 mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-900 mb-4">
                  📚 Todos los Niveles Incluidos en Tu Suscripción
                </h3>
                <p className="text-slate-600 mb-6 max-w-3xl mx-auto">
                  Con cualquiera de nuestros planes mensuales, tendrás acceso completo e ilimitado a todos los niveles del Marco Común Europeo de Referencia (MCER): A1, A2, B1, B2, C1 y C2.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl p-4 text-white text-center">
                    <div className="text-2xl font-black mb-1">A1</div>
                    <div className="text-xs">Principiante</div>
                  </div>
                  <div className="bg-gradient-to-br from-lime-500 to-green-500 rounded-xl p-4 text-white text-center">
                    <div className="text-2xl font-black mb-1">A2</div>
                    <div className="text-xs">Elemental</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl p-4 text-white text-center">
                    <div className="text-2xl font-black mb-1">B1</div>
                    <div className="text-xs">Intermedio</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl p-4 text-white text-center">
                    <div className="text-2xl font-black mb-1">B2</div>
                    <div className="text-xs">Inter-Alto</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 text-white text-center">
                    <div className="text-2xl font-black mb-1">C1</div>
                    <div className="text-xs">Avanzado</div>
                  </div>
                  <div className="bg-gradient-to-br from-rose-500 to-red-500 rounded-xl p-4 text-white text-center">
                    <div className="text-2xl font-black mb-1">C2</div>
                    <div className="text-xs">Maestría</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Bottom */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-violet-200">
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                ¿No estás seguro de tu nivel?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Realiza nuestro test de nivel gratuito en 15 minutos y descubre qué curso es perfecto para ti. Incluye recomendaciones personalizadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/diagnostico"
                  className="inline-flex items-center justify-center bg-violet-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-violet-700 transition-colors"
                >
                  🎯 Hacer Test de Nivel Gratis
                </Link>
                <Link
                  href="/planes"
                  className="inline-flex items-center justify-center bg-white text-violet-600 border-2 border-violet-600 px-8 py-3 rounded-lg font-bold hover:bg-violet-50 transition-colors"
                >
                  💎 Ver Planes y Precios
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors"
                >
                  💬 Consulta Gratuita
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
        <CTASection />
      </main>
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-black">
                  F
                </div>
                <span className="text-lg font-black">Focus English</span>
              </div>
              <p className="text-sm text-slate-400">
                Cursos de inglés especializados para trabajar, viajar o preparar exámenes oficiales. Programas personalizados de 90 días.
                <br/>
                <span className="mt-2 inline-block">🇪🇸 Servicio exclusivo para España · Precios en EUR · Soporte en español</span>
              </p>
            </div>

            {/* Cursos */}
            <div>
              <h3 className="font-bold mb-3">Cursos</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/cursos/trabajo/b2" className="hover:text-white transition-colors">Inglés para Trabajar</a></li>
                <li><a href="/cursos/viajes/a2" className="hover:text-white transition-colors">Inglés para Viajar</a></li>
                <li><a href="/cursos/examenes/b2" className="hover:text-white transition-colors">Preparar Exámenes</a></li>
                <li><a href="/cursos-especializados" className="hover:text-white transition-colors">Cursos Especializados</a></li>
              </ul>
            </div>

            {/* Producto */}
            <div>
              <h3 className="font-bold mb-3">Producto</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="/diagnostico" className="hover:text-white transition-colors">Test de Nivel</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Preguntas</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold mb-3">Empresa</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/about" className="hover:text-white transition-colors">Acerca de</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Empleo</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Términos</a></li>
                <li><a href="/cookies" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2026 Focus English. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
