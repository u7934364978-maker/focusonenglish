import { Navigation } from "@/components/sections/Navigation";
import { CourseLaunchBanner } from "@/components/CourseLaunchBanner";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getBlogArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Cursos de Inglés Online en España",
  description: "Cursos de inglés online en España certificados. Especializados en trabajo, viajes y exámenes oficiales. Programas de 90 días. Desde €6.99/mes.",
  keywords: [
    "cursos de inglés online españa",
    "inglés para trabajar",
    "inglés para viajar",
    "preparación cambridge",
    "cursos inglés especializados",
    "aprender inglés españa 2026"
  ],
  alternates: {
    canonical: 'https://www.focus-on-english.com',
  },
};

export default function HomePage() {
  const latestArticles = getBlogArticles().slice(0, 3);
  
  return (
    <>
      <Navigation />
      
      {/* Course Launch Banner */}
      <CourseLaunchBanner />
      
      <main className="min-h-screen">
        
        {/* Hero Section - Coral/Peach Gradient */}
        <section className="hero-gradient relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF6B6B] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFA06B] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFBE98] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg text-sm font-black">
                <span className="w-2 h-2 bg-[#FF6B6B] rounded-full animate-pulse"></span>
                <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                  Cursos de Inglés Especializados para España
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight text-gray-900">
                Domina el Inglés<br />
                <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                  Para Tu Objetivo
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-4 leading-relaxed font-semibold">
                Cursos de inglés online desde España, especializados en <span className="font-black text-[#FF6B6B]">trabajo</span>, <span className="font-black text-[#FF6B6B]">viajes</span> o <span className="font-black text-[#FF6B6B]">exámenes oficiales</span>.
              </p>
              
              <p className="text-lg text-gray-600 mb-10 font-semibold">
                Programas personalizados de 90 días. Desde €6.99/mes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  href="/test-nivel"
                  className="cta-primary inline-flex items-center gap-2"
                >
                  🎯 Hacer Test de Nivel Gratis
                </Link>
                
                <Link
                  href="/cuenta/login"
                  className="cta-primary inline-flex items-center gap-2"
                >
                  🔑 Iniciar Sesión
                </Link>
                
                <Link
                  href="#cursos"
                  className="cta-secondary inline-flex items-center gap-2"
                >
                  Ver Cursos →
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-lg">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="font-black text-gray-900">4.8/5</span>
                <span className="text-gray-600 font-semibold">(2,500+ reseñas)</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-lg">
                <span className="text-2xl">🇪🇸</span>
                <span className="font-black text-gray-900">100% enfocado en España</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-lg">
                <span className="text-2xl">📚</span>
                <span className="font-black text-gray-900">18 niveles (A1-C2)</span>
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
                <div className="bg-gradient-to-br from-coral-600 to-peach-600 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">💼</div>
                    <h3 className="text-2xl font-black mb-2">Inglés para Trabajar</h3>
                    <p className="text-coral-100">Guías y consejos para el inglés profesional y empresarial</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Vocabulario técnico por sector</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Comunicación empresarial</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Reuniones y presentaciones</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Emails profesionales</span>
                    </li>
                  </ul>
                  
                  <Link
                    href="/planes"
                    className="block text-center bg-gradient-to-r from-coral-600 to-peach-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
                  >
                    Ver planes →
                  </Link>
                  
                  <Link
                    href="/blog/trabajo/guia-definitiva-curso-ingles-profesional"
                    className="block text-center mt-3 text-coral-600 font-semibold hover:text-coral-700"
                  >
                    Leer guía profesional
                  </Link>
                </div>
              </div>

              {/* Inglés para Viajar */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-br from-coral-600 to-peach-600 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">✈️</div>
                    <h3 className="text-2xl font-black mb-2">Inglés para Viajar</h3>
                    <p className="text-orange-100">Inglés práctico para tus aventuras internacionales</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Frases esenciales de aeropuerto</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Hoteles y restaurantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Situaciones de emergencia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Transporte y direcciones</span>
                    </li>
                  </ul>
                  
                  <Link
                    href="/planes"
                    className="block text-center bg-gradient-to-r from-coral-600 to-peach-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
                  >
                    Ver planes →
                  </Link>
                  
                  <Link
                    href="/blog/viajes/guia-maestra-curso-ingles-viajeros"
                    className="block text-center mt-3 text-coral-600 font-semibold hover:text-coral-700"
                  >
                    Leer guía para viajeros
                  </Link>
                </div>
              </div>

              {/* Preparación de Exámenes */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-br from-amber-600 to-amber-600 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">📝</div>
                    <h3 className="text-2xl font-black mb-2">Preparación de Exámenes</h3>
                    <p className="text-amber-50">Estrategias y recursos para aprobar exámenes oficiales</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Cambridge B2 First y C1</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">TOEFL iBT</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">IELTS Academic</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">Estrategias de examinadores</span>
                    </li>
                  </ul>
                  
                  <Link
                    href="/planes"
                    className="block text-center bg-gradient-to-r from-amber-600 to-amber-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
                  >
                    Ver planes →
                  </Link>
                  
                  <Link
                    href="/blog/metodos/clases-de-ingles-guia"
                    className="block text-center mt-3 text-amber-600 font-semibold hover:text-amber-700"
                  >
                    Leer guía de estudios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-2">Blog y Recursos</h2>
                <p className="text-lg text-slate-600">Últimas guías para tu éxito profesional y personal</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link 
                    href="/aplicaciones-para-aprender-ingles"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-50 text-coral-600 text-sm font-bold hover:bg-coral-100 transition-colors"
                  >
                    📱 Mejores Apps 2026
                  </Link>
                  <Link 
                    href="/blog/metodos/clases-de-ingles-guia"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold hover:bg-slate-200 transition-colors"
                  >
                    📚 Guía de Clases
                  </Link>
                </div>
              </div>
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-coral-600 font-bold hover:text-coral-700 transition-colors"
              >
                <span>Explorar todo el blog</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestArticles.map((article) => (
                <Link 
                  key={article.slug}
                  href={`/blog/${article.category}/${article.slug}`}
                  className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all group flex flex-col h-full"
                >
                  {article.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-coral-100 text-coral-700 text-[10px] font-bold uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-slate-500">{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-coral-600 transition-colors tracking-tight leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-coral-600 font-bold text-sm">
                      <span>Leer más</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 text-center md:hidden">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-slate-900 hover:border-coral-600 hover:text-coral-600 transition-all"
              >
                Ver todas las guías
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coral-600 via-peach-600 to-melon-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight">
              ¿Listo para Empezar?
            </h2>
            <p className="text-xl text-coral-100 mb-10 max-w-2xl mx-auto">
              Haz el test de nivel gratis y descubre qué curso se adapta mejor a tu objetivo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/test-nivel"
                className="bg-white text-coral-600 px-10 py-5 rounded-xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                🎯 Hacer Test de Nivel
              </Link>
              <Link
                href="/cuenta/login?callbackUrl=/dashboard"
                className="bg-blue-600 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-blue-700 transition-all border-2 border-white/20"
              >
                📊 Acceder Dashboard
              </Link>
              <Link
                href="/blog"
                className="bg-coral-700 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-coral-800 transition-all border-2 border-white/20"
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral-600 to-peach-600 flex items-center justify-center text-white font-black text-xl">
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
                <li><Link href="/planes" className="hover:text-white transition-colors">Inglés para Trabajar</Link></li>
                <li><Link href="/planes" className="hover:text-white transition-colors">Inglés para Viajar</Link></li>
                <li><Link href="/planes" className="hover:text-white transition-colors">Preparación Exámenes</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/test-nivel" className="hover:text-white transition-colors">Test de Nivel</Link></li>
                <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-sm text-slate-400">
              © 2026 Focus English. Todos los derechos reservados. | <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link> | <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link> | Hecho con 💜 en España
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
