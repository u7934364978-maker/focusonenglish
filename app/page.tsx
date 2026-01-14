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
        
        {/* Courses by Level Section */}
        <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-bold mb-4">
                <span>📚</span>
                <span>Cursos por Niveles</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
                Encuentra Tu Nivel Perfecto
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Cursos estructurados desde principiante hasta maestría. Aprende a tu ritmo con metodología probada y certificación oficial al finalizar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* A1 - Principiante */}
              <Link href="/cursos" className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white font-black text-lg">
                    A1
                  </div>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-bold">Básico</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  Principiante
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Para estudiantes que comienzan desde cero
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Alfabeto y pronunciación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Saludos y presentaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>8 semanas • €299</span>
                  </li>
                </ul>
                <div className="text-amber-600 font-bold text-sm group-hover:underline">
                  Ver programa completo →
                </div>
              </Link>

              {/* A2 - Elemental */}
              <Link href="/cursos" className="bg-white rounded-xl p-6 shadow-lg border-2 border-lime-200 hover:border-lime-400 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white font-black text-lg">
                    A2
                  </div>
                  <span className="text-xs bg-lime-100 text-lime-700 px-2 py-1 rounded-full font-bold">Elemental</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-lime-600 transition-colors">
                  Elemental
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Para estudiantes con conocimientos básicos
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-lime-600 mt-0.5">✓</span>
                    <span>Conversaciones cotidianas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lime-600 mt-0.5">✓</span>
                    <span>Pasado y futuro básico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lime-600 mt-0.5">✓</span>
                    <span>10 semanas • €349</span>
                  </li>
                </ul>
                <div className="text-lime-600 font-bold text-sm group-hover:underline">
                  Ver programa completo →
                </div>
              </Link>

              {/* B1 - Intermedio */}
              <Link href="/cursos" className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white font-black text-lg">
                    B1
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">Intermedio</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Intermedio
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Desarrolla fluidez conversacional
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-0.5">✓</span>
                    <span>Conversaciones fluidas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-0.5">✓</span>
                    <span>Redacción de emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-0.5">✓</span>
                    <span>12 semanas • €399</span>
                  </li>
                </ul>
                <div className="text-emerald-600 font-bold text-sm group-hover:underline">
                  Ver programa completo →
                </div>
              </Link>

              {/* B2 - Intermedio-Alto */}
              <Link href="/cursos" className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-black text-lg">
                    B2
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">Popular</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Intermedio-Alto
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Dominio del inglés profesional
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>Inglés profesional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>Presentaciones y debates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>14 semanas • €449</span>
                  </li>
                </ul>
                <div className="text-blue-600 font-bold text-sm group-hover:underline">
                  Ver programa completo →
                </div>
              </Link>

              {/* C1 - Avanzado */}
              <Link href="/cursos" className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-lg">
                    C1
                  </div>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-bold">Avanzado</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Avanzado
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Dominio avanzado de alto nivel
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5">✓</span>
                    <span>Negociación y persuasión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5">✓</span>
                    <span>Redacción académica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5">✓</span>
                    <span>16 semanas • €499</span>
                  </li>
                </ul>
                <div className="text-purple-600 font-bold text-sm group-hover:underline">
                  Ver programa completo →
                </div>
              </Link>

              {/* C2 - Maestría */}
              <Link href="/cursos" className="bg-white rounded-xl p-6 shadow-lg border-2 border-rose-200 hover:border-rose-400 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center text-white font-black text-lg">
                    C2
                  </div>
                  <span className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full font-bold">Maestría</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                  Maestría
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Perfección cercana al nivel nativo
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 mt-0.5">✓</span>
                    <span>Dominio total del idioma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 mt-0.5">✓</span>
                    <span>Literatura y cultura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 mt-0.5">✓</span>
                    <span>18 semanas • €549</span>
                  </li>
                </ul>
                <div className="text-rose-600 font-bold text-sm group-hover:underline">
                  Ver programa completo →
                </div>
              </Link>
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
                  href="/cursos"
                  className="inline-flex items-center justify-center bg-white text-violet-600 border-2 border-violet-600 px-8 py-3 rounded-lg font-bold hover:bg-violet-50 transition-colors"
                >
                  📚 Ver Todos los Cursos
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
