import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getSEOPageBySlug } from "@/lib/seo";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/app/schema";
import { ChevronRight, Home, GraduationCap, Award, FileCheck, CreditCard, Sparkles, Star, Calendar } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const page = getSEOPageBySlug("certificaciones-ingles", true);
  
  if (!page) return { title: "Certificaciones de Inglés" };

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: page.canonical || 'https://www.focus-on-english.com/certificaciones-ingles',
    },
  };
}

export default function ExamsHubPage() {
  const page = getSEOPageBySlug("certificaciones-ingles", true);

  if (!page) {
    notFound();
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
  };

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
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
            <span className="text-slate-900 font-bold text-ellipsis overflow-hidden">Certificaciones de Inglés</span>
          </nav>

          {/* Hero Section */}
          <header className="mb-16 bg-white rounded-[3rem] p-8 lg:p-16 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/30 to-transparent pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  Preparación de Exámenes
                </div>
                <h1 className="font-display text-4xl lg:text-7xl font-black text-slate-900 mb-8 leading-tight">
                  Tu Título <span className="text-blue-600 text-shadow-sm">Oficial de Inglés</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                  Comparamos y analizamos los mejores certificados del mundo. Cambridge, IELTS, TOEFL y Aptis explicados para que elijas el que mejor se adapta a tus metas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/test-nivel" className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-200">
                    Hacer Test de Nivel
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-3">
                <Image 
                  src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg"
                  alt="Preparación de exámenes de inglés"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </header>

          {/* Pillar Topics Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-slate-900 mb-10 text-center lg:text-left">Guías de Certificación</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/examenes/guia-precios-cambridge-2026" className="group bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">Precios Cambridge 2026</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">Tasas actualizadas y consejos para ahorrar en tu matrícula.</p>
                <span className="text-blue-600 font-bold text-sm inline-flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                  Ver precios <ChevronRight className="w-4 h-4" />
                </span>
              </Link>

              <Link href="/blog/examenes/aptis-a2-guia-completa" className="group bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">Guía Aptis A2</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">Todo lo que necesitas para aprobar el examen más rápido.</p>
                <span className="text-orange-600 font-bold text-sm inline-flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                  Ver guía Aptis <ChevronRight className="w-4 h-4" />
                </span>
              </Link>

              <Link href="/blog/examenes/guia-b2-first-fce" className="group bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-50 transition-all">
                <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileCheck className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">Guía B2 First</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">Estrategias para dominar el examen intermedio-alto.</p>
                <span className="text-cyan-600 font-bold text-sm inline-flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                  Preparar First <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </section>

          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 lg:p-16 overflow-hidden">
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
                <div className="mt-16 border-t border-slate-100 pt-16">
                  <h2 className="font-display text-3xl font-black text-slate-900 mb-10">Preguntas Frecuentes</h2>
                  <div className="space-y-8">
                    {page.faqs.map((faq, index) => (
                      <div key={index} className="group">
                        <h3 className="font-bold text-slate-900 text-xl mb-3 flex items-start gap-3">
                          <span className="text-blue-600">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed pl-8 border-l-2 border-slate-100 group-hover:border-blue-200 transition-colors">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      </main>

      {/* Final CTA Footer */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Star className="w-12 h-12 text-blue-500 mx-auto mb-8" />
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">¿Preparado para obtener tu título?</h2>
          <p className="text-slate-400 text-xl mb-12">Nuestra IA te ayuda a practicar el Speaking y Writing con criterios oficiales.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cuenta/registro" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-2xl shadow-blue-900/40">
              Empezar Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <BreadcrumbSchema 
        items={[
          { name: "Inicio", url: "/" },
          { name: "Aprender Inglés", url: "/aprender-ingles" },
          { name: "Certificaciones", url: "/certificaciones-ingles" }
        ]}
      />
    </>
  );
}
