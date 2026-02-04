import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import { getSEOPageBySlug } from "@/lib/seo";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from "next";
import { SEOComparisonTable } from "@/components/sections/SEOComparisonTable";
import { ChevronRight, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Las 10 Mejores Aplicaciones para Aprender Inglés en 2026",
  description: "Descubre las mejores aplicaciones para aprender inglés este año. Comparativa honesta entre Duolingo, Babbel, Focus English y más. ¡Elige la mejor para ti!",
  keywords: ["aplicaciones para aprender ingles", "mejores apps ingles", "duolingo vs babbel", "aprender ingles rapido app"],
  alternates: {
    canonical: 'https://www.focus-on-english.com/aplicaciones-para-aprender-ingles',
  },
};

export default function SEOAppsPage() {
  const page = getSEOPageBySlug("aplicaciones-ingles");

  if (!page) {
    return <div>Content not found</div>;
  }

  const MarkdownComponents = {
    h1: ({ ...props }: React.ComponentPropsWithoutRef<'h1'>) => <h1 className="font-display text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight text-center lg:text-left" {...props} />,
    h2: ({ ...props }: React.ComponentPropsWithoutRef<'h2'>) => <h2 className="font-display text-3xl font-black text-slate-900 mt-12 mb-6 border-b border-slate-100 pb-4" {...props} />,
    h3: ({ ...props }: React.ComponentPropsWithoutRef<'h3'>) => <h3 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4" {...props} />,
    p: ({ ...props }: React.ComponentPropsWithoutRef<'p'>) => <p className="text-slate-700 text-lg leading-relaxed mb-6" {...props} />,
    ul: ({ ...props }: React.ComponentPropsWithoutRef<'ul'>) => <ul className="list-disc ml-6 mb-6 space-y-3 text-slate-700 text-lg" {...props} />,
    li: ({ ...props }: React.ComponentPropsWithoutRef<'li'>) => <li className="pl-2" {...props} />,
    strong: ({ ...props }: React.ComponentPropsWithoutRef<'strong'>) => <strong className="font-bold text-slate-900" {...props} />,
    a: ({ ...props }: React.ComponentPropsWithoutRef<'a'>) => <a className="text-coral-600 font-bold hover:underline" {...props} />,
    table: () => <SEOComparisonTable />, // Replace markdown table with our custom component
  };

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-12 text-sm font-medium text-slate-500 overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="flex items-center gap-1 hover:text-coral-600 transition-colors">
              <Home className="w-4 h-4" />
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
            <span className="text-slate-900">Aplicaciones para Aprender Inglés</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <article className="lg:col-span-8">
              <div className="prose prose-slate prose-lg max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={MarkdownComponents}
                >
                  {page.content}
                </ReactMarkdown>
              </div>

              {/* FAQs Section */}
              {page.faqs && page.faqs.length > 0 && (
                <section className="mt-16 pt-16 border-t border-slate-100">
                  <h2 className="text-3xl font-black text-slate-900 mb-8">Preguntas Frecuentes</h2>
                  <div className="space-y-6">
                    {page.faqs.map((faq, index) => (
                      <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h4>
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Sidebar / CTA */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Promo Card */}
                <div className="bg-gradient-to-br from-coral-600 to-peach-600 rounded-3xl p-8 text-white shadow-xl shadow-coral-200">
                  <h3 className="text-2xl font-black mb-4">¿Cansado de &quot;jugar&quot; a aprender?</h3>
                  <p className="text-coral-50 mb-6 font-medium">Únete a Focus English y consigue fluidez real en 90 días con nuestro sistema guiado por IA.</p>
                  <Link 
                    href="/test-nivel"
                    className="block w-full text-center bg-white text-coral-600 px-6 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                  >
                    Hacer Test Gratis
                  </Link>
                  <p className="mt-4 text-center text-xs text-coral-100 font-bold uppercase tracking-wider">
                    Oferta Especial: 7 días gratis
                  </p>
                </div>

                {/* Related Routes */}
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Rutas recomendadas</h4>
                  <div className="space-y-3">
                    <Link href="/curso-ingles-para-trabajo" className="block p-4 rounded-xl border border-slate-50 hover:border-coral-100 hover:bg-coral-50 transition-all font-bold text-slate-700">
                      Inglés para el Trabajo →
                    </Link>
                    <Link href="/curso-ingles-para-viajar" className="block p-4 rounded-xl border border-slate-50 hover:border-coral-100 hover:bg-coral-50 transition-all font-bold text-slate-700">
                      Inglés para Viajar →
                    </Link>
                  </div>
                </div>

                {/* Related Blog Articles */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Análisis detallados</h4>
                  <div className="space-y-4">
                    <Link href="/blog/trabajo/mejores-apps-ingles-trabajo" className="group block">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-coral-600 transition-colors">Apps para el trabajo (2026)</p>
                      <p className="text-xs text-slate-500 line-clamp-1">Domina el Business English con las mejores herramientas.</p>
                    </Link>
                    <Link href="/blog/metodos/apps-vs-cursos-ingles" className="group block">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-coral-600 transition-colors">Apps vs. Cursos: ¿Qué elegir?</p>
                      <p className="text-xs text-slate-500 line-clamp-1">Comparativa definitiva para llegar al C1.</p>
                    </Link>
                    <Link href="/blog/metodos/ia-acelerar-aprendizaje-ingles" className="group block">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-coral-600 transition-colors">Aprende con IA</p>
                      <p className="text-xs text-slate-500 line-clamp-1">Cómo la Inteligencia Artificial acelera tu fluidez.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Focus English",
            "operatingSystem": "Web, iOS, Android",
            "applicationCategory": "EducationalApplication",
            "offers": {
              "@type": "Offer",
              "price": "6.99",
              "priceCurrency": "EUR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "2500"
            }
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": page.faqs?.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Focus English",
                "url": "https://www.focus-on-english.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Duolingo"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Babbel"
              }
            ]
          })
        }}
      />
    </>
  );
}
