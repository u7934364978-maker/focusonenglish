import { Navigation } from "@/components/sections/Navigation";
import { CourseLaunchBanner } from "@/components/CourseLaunchBanner";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía Completa de Cursos de Inglés Online en España 2026 | Focus English Blog",
  description: "Descubre todo sobre cursos de inglés online en España 2026: comparativa de plataformas, precios actualizados, certificaciones oficiales y metodologías. Guía completa con +6,500 palabras para elegir el mejor curso.",
  keywords: [
    "cursos de inglés online españa",
    "mejor curso inglés online españa 2026",
    "blog inglés",
    "aprender inglés",
    "preparación cambridge españa",
    "inglés profesional online",
    "comparativa cursos inglés",
    "academias inglés online certificadas"
  ],
  openGraph: {
    title: "Guía Completa de Cursos de Inglés Online en España 2026",
    description: "Todo lo que necesitas saber para elegir el mejor curso de inglés online en España: comparativas, precios, certificaciones y metodologías.",
    type: "website",
  },
};

const featuredGuide = {
  title: "Guía Completa de Cursos de Inglés Online en España 2026",
  slug: "guia-completa-cursos-ingles-online-espana-2026",
  excerpt: "La guía más completa y actualizada de 2026 con comparativas de plataformas, precios reales, certificaciones oficiales Cambridge/TOEFL/IELTS, metodologías probadas y consejos de expertos para elegir el mejor curso según tu objetivo.",
  date: "2026-01-15",
  readTime: "18 min",
  category: "Guías Completas",
  highlights: [
    "Comparativa de 5+ plataformas",
    "Precios actualizados 2026",
    "19 keywords SEO optimizadas",
    "Certificaciones oficiales",
    "Metodologías con IA",
    "Schema markup incluido"
  ],
  stats: {
    words: "6,500+",
    sections: "12",
    keywords: "19"
  }
};

const blogCategories = [
  {
    name: "Inglés para Trabajar",
    slug: "trabajo",
    description: "Guías y consejos para el inglés profesional y empresarial",
    icon: "💼",
    color: "from-violet-600 to-purple-600",
    articles: [
      {
        title: "El Día Que Perdí Un Ascenso Por No Saber Decir 'Implementar' en Inglés",
        slug: "ingles-profesional-sectores",
        excerpt: "Tres profesionales españoles revelan cómo el inglés técnico de su sector transformó sus carreras. Historias reales de David, Clara y María.",
        date: "2026-01-15",
        readTime: "16 min"
      },
      {
        title: "La Conversación de 3 Minutos Que Me Costó Mi Beca Erasmus",
        slug: "entrevista-erasmus-ingles",
        excerpt: "Después de coordinar 847 entrevistas Erasmus, Sandra López revela los 5 errores fatales que destruyen tu entrevista en inglés. No es tu nivel, es tu preparación.",
        date: "2026-01-16",
        readTime: "16 min"
      }
    ]
  },
  {
    name: "Inglés para Viajar",
    slug: "viajes",
    description: "Inglés práctico para tus aventuras internacionales",
    icon: "✈️",
    color: "from-blue-600 to-cyan-600",
    articles: [
      {
        title: "Confesiones de Un Ex-Azafato: Las 47 Frases Que Separan a Los Viajeros Que La Pasan Mal de Los Que Viajan Como Profesionales",
        slug: "ingles-esencial-viajar",
        excerpt: "Después de 8 años asistiendo a 50,000+ pasajeros en vuelos internacionales, Javier Moreno revela las frases exactas que marcan la diferencia. Sistema probado de 47 frases en 7 días.",
        date: "2026-01-15",
        readTime: "12 min"
      }
    ]
  },
  {
    name: "Preparación de Exámenes",
    slug: "examenes",
    description: "Estrategias y recursos para aprobar exámenes oficiales",
    icon: "📝",
    color: "from-emerald-600 to-green-600",
    articles: [
      {
        title: "Secretos de Una Ex-Examinadora Cambridge: Lo Que Realmente Buscan en Tu Examen",
        slug: "preparar-examenes-oficiales",
        excerpt: "Después de evaluar más de 3,000 exámenes Cambridge, Ana Belén García revela por qué estudiantes con excelente inglés suspenden. Insider knowledge exclusivo.",
        date: "2026-01-15",
        readTime: "18 min"
      }
    ]
  },
  {
    name: "Métodos de Aprendizaje",
    slug: "metodos",
    description: "Técnicas y estrategias efectivas para aprender inglés",
    icon: "🎯",
    color: "from-amber-600 to-orange-600",
    articles: [
      {
        title: "El Profesor Que Me Suspendió en Selectividad Me Enseñó La Lección Más Valiosa",
        slug: "errores-aprender-ingles-selectividad",
        excerpt: "Después de 22 años evaluando Selectividad y ver suspender a 3,000+ estudiantes con buen nivel, Miguel Ángel Romero revela los 5 errores que se repiten generación tras generación.",
        date: "2026-01-16",
        readTime: "17 min"
      },
      {
        title: "Cómo Aprendí Inglés Viendo Friends (Y Por Qué Netflix No Te Va A Salvar)",
        slug: "aprender-ingles-series-netflix",
        excerpt: "8 años, 2,000 horas viendo series, y mi inglés seguía siendo un desastre. Hasta que descubrí qué estaba haciendo mal. No es lo que los 'expertos' dicen.",
        date: "2026-01-16",
        readTime: "15 min"
      }
    ]
  },
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <CourseLaunchBanner />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
        
        {/* Featured Guide - Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
            <div className="absolute top-20 right-20 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-bold shadow-lg">
                <span className="animate-pulse">⭐</span>
                <span>GUÍA DESTACADA 2026</span>
                <span className="animate-pulse">⭐</span>
              </div>
            </div>

            {/* Main Featured Article */}
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-wide">
                      {featuredGuide.category}
                    </span>
                    <span className="text-slate-500 text-sm">
                      📅 {new Date(featuredGuide.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>

                  <h1 className="font-display text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
                    {featuredGuide.title}
                  </h1>

                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {featuredGuide.excerpt}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {featuredGuide.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className="text-slate-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 mb-8 pb-8 border-b border-slate-200">
                    <div>
                      <div className="text-2xl font-black text-violet-600">{featuredGuide.stats.words}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Palabras</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-purple-600">{featuredGuide.stats.sections}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Secciones</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-indigo-600">{featuredGuide.stats.keywords}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Keywords</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-emerald-600">{featuredGuide.readTime}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Lectura</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredGuide.slug}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <span>Leer Guía Completa</span>
                    <span className="text-xl">→</span>
                  </Link>
                </div>

                {/* Right Side - Visual */}
                <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-white rounded-full"></div>
                  </div>

                  <div className="relative z-10 text-center text-white">
                    <div className="text-6xl mb-6">📚</div>
                    <div className="font-display text-2xl font-black mb-4">+6,500 Palabras</div>
                    <div className="text-white/90 mb-8 max-w-xs mx-auto">
                      La guía más completa sobre cursos de inglés online en España
                    </div>
                    
                    {/* Feature badges */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                        SEO Optimizado
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                        Datos 2026
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                        Schema Markup
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                        Comparativas
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Bar */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
                <div className="text-2xl mb-1">🎯</div>
                <div className="text-sm font-bold text-slate-900">Comparativa Completa</div>
                <div className="text-xs text-slate-500">5+ Plataformas</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
                <div className="text-2xl mb-1">💰</div>
                <div className="text-sm font-bold text-slate-900">Precios 2026</div>
                <div className="text-xs text-slate-500">Actualizados</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
                <div className="text-2xl mb-1">🎓</div>
                <div className="text-sm font-bold text-slate-900">Certificaciones</div>
                <div className="text-xs text-slate-500">Cambridge, TOEFL, IELTS</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
                <div className="text-2xl mb-1">🤖</div>
                <div className="text-sm font-bold text-slate-900">Metodología IA</div>
                <div className="text-xs text-slate-500">Tendencias 2026</div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="border-t-2 border-slate-200"></div>
        </div>

        {/* Categories Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                Más Artículos del Blog
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explora nuestras guías especializadas por temática y encuentra el contenido perfecto para tu objetivo
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {blogCategories.map((category) => (
                <div key={category.slug} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="text-5xl mb-3">{category.icon}</div>
                      <h3 className="font-display text-2xl font-black text-white mb-2 tracking-tight">{category.name}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{category.description}</p>
                    </div>
                  </div>

                  {/* Articles List */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {category.articles.map((article) => (
                        <Link
                          key={article.slug}
                          href={`/blog/${article.slug}`}
                          className="block group"
                        >
                          <article className="border-l-4 border-slate-200 group-hover:border-violet-600 pl-4 py-2 transition-all duration-300">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs text-slate-500 font-semibold">
                                {new Date(article.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}
                              </span>
                              <span className="text-xs text-slate-400">•</span>
                              <span className="text-xs text-violet-600 font-semibold">{article.readTime}</span>
                            </div>
                            <h4 className="font-bold text-slate-900 group-hover:text-violet-600 transition-colors mb-2 leading-snug">
                              {article.title}
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed">{article.excerpt}</p>
                          </article>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={`/blog?category=${category.slug}`}
                      className="mt-6 inline-flex items-center text-violet-600 font-semibold text-sm hover:text-violet-700 hover:gap-2 gap-1 transition-all"
                    >
                      Ver todos los artículos
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-3xl font-black text-slate-900 tracking-tight">Artículos Recientes</h2>
              <Link href="/blog" className="text-violet-600 font-semibold text-sm hover:text-violet-700 hidden md:block">
                Ver todos →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogCategories.flatMap(cat => cat.articles).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <time className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
                        {new Date(article.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </time>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-violet-600 font-semibold">{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors leading-snug tracking-tight">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                    <span className="text-violet-600 font-semibold text-sm inline-flex items-center group-hover:gap-2 gap-1 transition-all">
                      Leer artículo <span>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 lg:p-12 text-center">
              <div className="text-4xl mb-4">📬</div>
              <h2 className="font-display text-3xl font-black text-slate-900 mb-4 tracking-tight">
                Recibe Guías y Consejos Exclusivos
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Suscríbete a nuestra newsletter y recibe contenido exclusivo, tips semanales y las últimas novedades sobre aprendizaje de inglés
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-violet-600 focus:outline-none text-slate-900"
                />
                <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-shadow whitespace-nowrap">
                  Suscribirme
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Sin spam. Cancela cuando quieras. 🔒 Tus datos están seguros.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tight">
              ¿Listo para Empezar tu Viaje al Inglés?
            </h2>
            <p className="text-xl mb-10 text-violet-100 max-w-2xl mx-auto leading-relaxed">
              Descubre nuestros cursos especializados diseñados para profesionales españoles y comienza a dominar el inglés en 90 días
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cursos-especializados"
                className="bg-white text-violet-600 px-10 py-5 rounded-xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                🎯 Ver Cursos
              </Link>
              <Link
                href="/diagnostico"
                className="bg-violet-700 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-violet-800 transition-all duration-300 border-2 border-white/20"
              >
                📊 Test de Nivel Gratis
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300">⭐⭐⭐⭐⭐</span>
                <span>4.8/5 valoración</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>2,500+ alumnos</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Garantía 90 días</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-black text-xl">
                  F
                </div>
                <span className="text-xl font-black">Focus English</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Cursos de inglés especializados para profesionales españoles. Domina el inglés para trabajar, viajar o certificarte.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Cursos</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/cursos/trabajo/b2" className="hover:text-white transition-colors">Inglés para Trabajar</Link></li>
                <li><Link href="/cursos/viajes/a2" className="hover:text-white transition-colors">Inglés para Viajar</Link></li>
                <li><Link href="/cursos/examenes/b2" className="hover:text-white transition-colors">Preparación Exámenes</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/diagnostico" className="hover:text-white transition-colors">Test de Nivel</Link></li>
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
