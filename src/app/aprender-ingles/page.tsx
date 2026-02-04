import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSEOPageBySlug } from "@/lib/seo";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/app/schema";

export async function generateMetadata(): Promise<Metadata> {
  const page = getSEOPageBySlug("hub");
  
  if (!page) return { title: "Aprender Inglés" };

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: page.canonical || 'https://www.focus-on-english.com/aprender-ingles',
    },
  };
}

export default function SEOHubPage() {
  const page = getSEOPageBySlug("hub");

  if (!page) {
    notFound();
  }

  const MarkdownComponents = {
    h1: ({ ...props }: any) => <h1 className="font-display text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight" {...props} />,
    h2: ({ ...props }: any) => <h2 className="font-display text-3xl font-black text-slate-900 mt-12 mb-6 border-b border-slate-100 pb-4" {...props} />,
    h3: ({ ...props }: any) => <h3 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4" {...props} />,
    p: ({ ...props }: any) => <p className="text-slate-700 text-lg leading-relaxed mb-6" {...props} />,
    ul: ({ ...props }: any) => <ul className="list-disc ml-6 mb-6 space-y-3 text-slate-700 text-lg" {...props} />,
    li: ({ ...props }: any) => <li className="pl-2" {...props} />,
    strong: ({ ...props }: any) => <strong className="font-bold text-slate-900" {...props} />,
    a: ({ ...props }: any) => <a className="text-coral-600 font-bold hover:underline" {...props} />,
  };

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm font-medium text-slate-500">
            <Link href="/" className="hover:text-coral-600 transition-colors">Inicio</Link>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-slate-900">Aprender Inglés</span>
          </nav>

          <article className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 lg:p-16 overflow-hidden">
            <div className="prose prose-slate prose-lg max-w-none">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={MarkdownComponents}
              >
                {page.content}
              </ReactMarkdown>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 lg:p-12 bg-gradient-to-br from-coral-500 to-peach-500 rounded-3xl text-white text-center">
              <h2 className="text-3xl font-black mb-4">¿Listo para empezar tu viaje?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Únete a Focus English y domina el idioma con nuestro método basado en objetivos reales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/cuenta/registro"
                  className="bg-white text-coral-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Empezar Gratis
                </Link>
                <Link 
                  href="/planes"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Ver Planes
                </Link>
              </div>
            </div>

            {/* FAQ Schema Placeholder */}
            {page.faqs && page.faqs.length > 0 && (
              <div className="mt-16 border-t border-slate-100 pt-16">
                <h2 className="font-display text-3xl font-black text-slate-900 mb-8">Preguntas Frecuentes</h2>
                <div className="space-y-8">
                  {page.faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-bold text-slate-900 text-xl mb-3">{faq.question}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </main>

      {/* Structured Data */}
      <BreadcrumbSchema 
        items={[
          { name: "Inicio", url: "/" },
          { name: "Aprender Inglés", url: "/aprender-ingles" }
        ]}
      />
      {page.faqs && page.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": page.faqs.map(faq => ({
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
      )}
    </>
  );
}
