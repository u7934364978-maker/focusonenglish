import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos de Inglés Online en España | Focus English - Especializado en Trabajo, Viajes y Exámenes",
  description: "Cursos de inglés online desde España, especializados en trabajo, viajes o exámenes oficiales. Programas personalizados de 90 días. Desde €6.99/mes.",
  keywords: [
    "cursos de inglés online españa",
    "inglés para trabajar",
    "inglés para viajar",
    "preparación cambridge",
    "cursos inglés especializados",
    "aprender inglés españa 2026"
  ],
};

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        
        {/* Hero Section - Purple Gradient */}
        <section className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated background blobs */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold">
                <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span>
                Cursos de Inglés Especializados para España
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center text-white mb-12">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Domina el Inglés<br />
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  Para Tu Objetivo
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-violet-100 max-w-3xl mx-auto mb-4 leading-relaxed">
                Cursos de inglés online desde España, especializados en <span className="font-bold text-white">trabajo</span>, <span className="font-bold text-white">viajes</span> o <span className="font-bold text-white">exámenes oficiales</span>.
              </p>
              
              <p className="text-lg text-violet-200 mb-10">
                Programas personalizados de 90 días. Desde €6.99/mes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  href="/test-nivel"
                  className="inline-flex items-center gap-2 bg-white text-violet-600 px-10 py-5 rounded-xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  🎯 Hacer Test de Nivel Gratis
                </Link>
                
                <Link
                  href="#cursos"
                  className="inline-flex items-center gap-2 bg-violet-700/50 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-violet-700 transition-all duration-300 border-2 border-white/20"
                >
                  Ver Cursos →
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold">4.8/5 (2,500+ reseñas)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇪🇸</span>
                <span className="font-semibold">100% enfocado en España</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="font-semibold">18 niveles (A1-C2)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="cursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
                Elige Tu Camino
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Cursos especializados según tu objetivo profesional o personal
              </p>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Inglés para Trabajar */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-br from-violet-600 to-purple-600 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">💼</div>
                    <h3 className="text-2xl font-black mb-2">Inglés para Trabajar</h3>
                    <p className="text-violet-100">Guías y consejos para el inglés profesional y empresarial</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Vocabulario técnico por sector</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Comunicación empresarial</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Reuniones y presentaciones</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Emails profesionales</span>
                    </li>
                  </ul>
                  
                  <Link
                    href="/cursos/trabajo"
                    className="block text-center bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
                  >
                    Ver cursos →
                  </Link>
                  
                  <Link
                    href="/blog/ingles-profesional-sectores"
                    className="block text-center mt-3 text-violet-600 font-semibold hover:text-violet-700"
                  >
                    Leer artículo completo
                  </Link>
                </div>
              </div>

              {/* Inglés para Viajar */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">✈️</div>
                    <h3 className="text-2xl font-black mb-2">Inglés para Viajar</h3>
                    <p className="text-blue-100">Inglés práctico para tus aventuras internacionales</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Frases esenciales de aeropuerto</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Hoteles y restaurantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Situaciones de emergencia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Transporte y direcciones</span>
                    </li>
                  </ul>
                  
                  <Link
                    href="/cursos/viajes"
                    className="block text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
                  >
                    Ver cursos →
                  </Link>
                  
                  <Link
                    href="/blog/ingles-esencial-viajar"
                    className="block text-center mt-3 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Leer artículo completo
                  </Link>
                </div>
              </div>

              {/* Preparación de Exámenes */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-br from-emerald-600 to-green-600 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">📝</div>
                    <h3 className="text-2xl font-black mb-2">Preparación de Exámenes</h3>
                    <p className="text-emerald-100">Estrategias y recursos para aprobar exámenes oficiales</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Cambridge B2 First y C1</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">TOEFL iBT</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">IELTS Academic</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Estrategias de examinadores</span>
                    </li>
                  </ul>
                  
                  <Link
                    href="/cursos/examenes"
                    className="block text-center bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
                  >
                    Ver cursos →
                  </Link>
                  
                  <Link
                    href="/blog/preparar-examenes-oficiales"
                    className="block text-center mt-3 text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    Leer artículo completo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-2">Blog</h2>
                <p className="text-lg text-slate-600">Artículos, guías y recursos para mejorar tu inglés</p>
              </div>
              <Link 
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-violet-600 font-bold hover:text-violet-700"
              >
                Ver todos →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link 
                href="/blog/ingles-profesional-sectores"
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold uppercase">
                    Trabajo
                  </span>
                  <span className="text-xs text-slate-500">16 min</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors tracking-tight">
                  El Día Que Perdí Un Ascenso Por No Saber Decir 'Implementar' en Inglés
                </h3>
                <p className="text-slate-600 text-sm">
                  Tres profesionales españoles revelan cómo el inglés técnico de su sector transformó sus carreras...
                </p>
              </Link>

              <Link 
                href="/blog/ingles-esencial-viajar"
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase">
                    Viajes
                  </span>
                  <span className="text-xs text-slate-500">15 min</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors tracking-tight">
                  La Noche Que Casi Duermo En Heathrow Por No Entender 'Gate Change'
                </h3>
                <p className="text-slate-600 text-sm">
                  Cinco historias reales de viajeros españoles que aprendieron inglés de la forma más dura...
                </p>
              </Link>

              <Link 
                href="/blog/preparar-examenes-oficiales"
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase">
                    Exámenes
                  </span>
                  <span className="text-xs text-slate-500">18 min</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors tracking-tight">
                  Secretos de Una Ex-Examinadora Cambridge: Lo Que Realmente Buscan
                </h3>
                <p className="text-slate-600 text-sm">
                  Después de evaluar más de 3,000 exámenes, Ana Belén García revela insider knowledge exclusivo...
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight">
              ¿Listo para Empezar?
            </h2>
            <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
              Haz el test de nivel gratis y descubre qué curso se adapta mejor a tu objetivo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/test-nivel"
                className="bg-white text-violet-600 px-10 py-5 rounded-xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                🎯 Hacer Test de Nivel
              </Link>
              <Link
                href="/blog"
                className="bg-violet-700 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-violet-800 transition-all border-2 border-white/20"
              >
                📚 Explorar Blog
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-black text-xl">
                  F
                </div>
                <span className="text-xl font-black">Focus English</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm">
                Cursos de inglés especializados para profesionales españoles. Domina el inglés para trabajar, viajar o certificarte.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Cursos</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/cursos/trabajo" className="hover:text-white transition-colors">Inglés para Trabajar</Link></li>
                <li><Link href="/cursos/viajes" className="hover:text-white transition-colors">Inglés para Viajar</Link></li>
                <li><Link href="/cursos/examenes" className="hover:text-white transition-colors">Preparación Exámenes</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/test-nivel" className="hover:text-white transition-colors">Test de Nivel</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-sm text-slate-400">
              © 2026 Focus English. Todos los derechos reservados. | Hecho con 💜 en España
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
