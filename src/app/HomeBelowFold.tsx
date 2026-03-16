import Link from "next/link";
import Image from "next/image";

interface HomeBelowFoldProps {
  latestArticles: Array<{
    slug: string;
    category: string;
    title: string;
    excerpt: string;
    image?: string;
    readTime?: string;
  }>;
}

export function HomeBelowFold({ latestArticles }: HomeBelowFoldProps) {
  return (
    <>
      <section id="cursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white" style={{ contentVisibility: 'auto' } as React.CSSProperties}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Elige Tu Nivel</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Programas estructurados desde principiante hasta avanzado</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">🌱</div>
                  <h3 className="text-2xl font-black mb-2">Principiante (A1)</h3>
                  <p className="text-blue-50">Construye las bases sólidas de tu inglés</p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  {['Gramática fundamental', 'Vocabulario cotidiano', 'Conversaciones básicas', 'Comprensión auditiva'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold text-xl">✓</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/curso-a1/outline" className="block text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all">
                  Ver nivel A1 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" style={{ contentVisibility: 'auto' } as React.CSSProperties}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-2">Blog y Recursos</h2>
              <p className="text-lg text-slate-600">Últimas guías para tu aprendizaje del inglés</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/blog/trabajo" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-50 text-coral-800 text-sm font-bold hover:bg-coral-100 transition-colors">💼 Trabajo</Link>
                <Link href="/blog/viajes" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-800 text-sm font-bold hover:bg-orange-100 transition-colors">✈️ Viajes</Link>
                <Link href="/blog/examenes" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-800 text-sm font-bold hover:bg-amber-100 transition-colors">📝 Exámenes</Link>
                <Link href="/blog/metodos" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-50 text-coral-800 text-sm font-bold hover:bg-coral-100 transition-colors">🎯 Métodos</Link>
                <Link href="/blog/gramatica" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold hover:bg-blue-100 transition-colors">📚 Gramática</Link>
                <Link href="/blog/vocabulario" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-800 text-sm font-bold hover:bg-amber-100 transition-colors">🗣️ Vocabulario</Link>
              </div>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-coral-800 font-bold hover:text-coral-900 transition-colors">
              <span>Explorar todo el blog</span>
              <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.category}/${article.slug}`} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all group flex flex-col h-full">
                {article.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 100vw, 33vw" quality={70} className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-coral-100 text-coral-800 text-[10px] font-bold uppercase tracking-wider">{article.category}</span>
                    <span className="text-xs text-slate-500">{article.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-coral-600 transition-colors tracking-tight leading-tight">{article.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-1">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-coral-800 font-bold text-sm">
                    <span>Leer más</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-slate-900 hover:border-coral-600 hover:text-coral-600 transition-all">
              Ver todas las guías
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coral-600 via-peach-600 to-melon-700 text-white" style={{ contentVisibility: 'auto' } as React.CSSProperties}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight">¿Listo para Empezar?</h2>
          <p className="text-xl text-coral-100 mb-10 max-w-2xl mx-auto">Haz el test de nivel gratis y descubre qué curso se adapta mejor a tu objetivo</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/test-nivel" className="bg-white text-coral-700 px-10 py-5 rounded-xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-md">🎯 Hacer Test de Nivel</Link>
            <Link href="/cuenta/login?callbackUrl=/curso-a1/outline" className="bg-slate-900 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-slate-800 transition-all border-2 border-white/10 shadow-xl">🔑 Acceder como Alumno</Link>
            <Link href="/blog" className="bg-coral-800 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-coral-900 transition-all border-2 border-white/20">📚 Explorar Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
