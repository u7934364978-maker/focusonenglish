import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import { getSEOPageBySlug } from "@/lib/seo";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from "next";
import { ChevronRight, Home, GraduationCap, Globe, Building2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Certificaciones de Inglés Oficiales 2026: Guía Comparativa",
  description: "¿Qué examen de inglés es mejor para ti? Comparamos B2 First, IELTS y TOEFL. Descubre cuál necesitas para trabajar o estudiar en el extranjero.",
  keywords: ["certificaciones ingles oficiales", "b2 first vs ielts", "toefl vs ielts", "examenes ingles oficiales"],
  alternates: {
    canonical: 'https://www.focus-on-english.com/certificaciones-ingles-oficiales',
  },
};

export default function SEOCertificationsPage() {
  const page = getSEOPageBySlug("certificaciones-ingles");

  if (!page) {
    return <div>Content not found</div>;
  }

  const MarkdownComponents = {
    h1: ({ ...props }: React.ComponentPropsWithoutRef<'h1'>) => <h1 className="font-display text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight" {...props} />,
    h2: ({ ...props }: React.ComponentPropsWithoutRef<'h2'>) => <h2 className="font-display text-3xl font-black text-slate-900 mt-12 mb-6 border-b border-slate-100 pb-4" {...props} />,
    h3: ({ ...props }: React.ComponentPropsWithoutRef<'h3'>) => <h3 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4" {...props} />,
    p: ({ ...props }: React.ComponentPropsWithoutRef<'p'>) => <p className="text-slate-700 text-lg leading-relaxed mb-6" {...props} />,
    ul: ({ ...props }: React.ComponentPropsWithoutRef<'ul'>) => <ul className="list-disc ml-6 mb-6 space-y-3 text-slate-700 text-lg" {...props} />,
    li: ({ ...props }: React.ComponentPropsWithoutRef<'li'>) => <li className="pl-2" {...props} />,
    strong: ({ ...props }: React.ComponentPropsWithoutRef<'strong'>) => <strong className="font-bold text-slate-900" {...props} />,
    a: ({ ...props }: React.ComponentPropsWithoutRef<'a'>) => <a className="text-coral-600 font-bold hover:underline" {...props} />,
    table: ({ ...props }: React.ComponentPropsWithoutRef<'table'>) => (
      <div className="overflow-x-auto my-8 border border-slate-100 rounded-2xl shadow-sm">
        <table className="min-w-full divide-y divide-slate-100 bg-white" {...props} />
      </div>
    ),
    thead: ({ ...props }: React.ComponentPropsWithoutRef<'thead'>) => <thead className="bg-slate-50" {...props} />,
    tbody: ({ ...props }: React.ComponentPropsWithoutRef<'tbody'>) => <tbody className="divide-y divide-slate-100" {...props} />,
    tr: ({ ...props }: React.ComponentPropsWithoutRef<'tr'>) => <tr className="hover:bg-slate-50/50 transition-colors" {...props} />,
    th: ({ ...props }: React.ComponentPropsWithoutRef<'th'>) => <th className="py-4 px-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider" {...props} />,
    td: ({ ...props }: React.ComponentPropsWithoutRef<'td'>) => <td className="py-4 px-4 text-slate-700" {...props} />,
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
            <Link href="/aprender-ingles" className="hover:text-coral-600 transition-colors">Aprender Inglés</Link>
            <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
            <span className="text-slate-900">Certificaciones Oficiales</span>
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
                {/* Exam Prep Promo */}
                <div className="bg-gradient-to-br from-[#1A237E] to-[#283593] rounded-3xl p-8 text-white shadow-xl shadow-blue-100">
                  <Award className="w-12 h-12 text-coral-400 mb-6" />
                  <h3 className="text-2xl font-black mb-4">¿Te preparas para un examen?</h3>
                  <p className="text-blue-100 mb-6 font-medium">Nuestra plataforma incluye simulacros y ejercicios específicos para B2 First, C1 Advanced e IELTS.</p>
                  <Link 
                    href="/cuenta/registro"
                    className="block w-full text-center bg-coral-500 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-coral-600 transition-all hover:scale-105"
                  >
                    Empezar Preparación
                  </Link>
                </div>

                {/* Related Routes */}
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Cursos recomendados</h4>
                  <div className="space-y-3">
                    <Link href="/curso-ingles-para-trabajo" className="flex items-center gap-3 p-4 rounded-xl border border-slate-50 hover:border-coral-100 hover:bg-coral-50 transition-all font-bold text-slate-700">
                      <Building2 className="w-5 h-5 text-coral-500" />
                      Inglés Profesional
                    </Link>
                    <Link href="/curso-ingles-b2" className="flex items-center gap-3 p-4 rounded-xl border border-slate-50 hover:border-coral-100 hover:bg-coral-50 transition-all font-bold text-slate-700">
                      <GraduationCap className="w-5 h-5 text-coral-500" />
                      Preparación B2
                    </Link>
                  </div>
                </div>

                {/* Info Card */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                  <div className="flex items-center gap-2 text-coral-600 mb-4">
                    <Globe className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase tracking-wider">Reconocimiento Global</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Más de 25.000 universidades y empresas en todo el mundo confían en estas certificaciones para validar el nivel de inglés.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Structured Data: FAQPage */}
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
      
      {/* Structured Data: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://www.focus-on-english.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Aprender Inglés",
                "item": "https://www.focus-on-english.com/aprender-ingles"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Certificaciones Oficiales",
                "item": "https://www.focus-on-english.com/certificaciones-ingles-oficiales"
              }
            ]
          })
        }}
      />
    </>
  );
}
