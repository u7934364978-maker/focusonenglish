import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { authors } from "@/lib/authors";
import { getBlogArticles } from "@/lib/blog";
import { generateBreadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Award, BookOpen, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuestros Autores Expertos en Inglés | Focus English",
  description: "Conoce al equipo de profesores y expertos en inglés de Focus English. Certificados Cambridge, con años de experiencia formando a profesionales hispanohablantes.",
  alternates: {
    canonical: "https://www.focus-on-english.com/blog/autores",
  },
  openGraph: {
    title: "Nuestros Autores Expertos en Inglés | Focus English",
    description: "Conoce al equipo de profesores y expertos en inglés de Focus English.",
    type: "website",
    url: "https://www.focus-on-english.com/blog/autores",
  },
};

export default function AuthorsPage() {
  const articles = getBlogArticles();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: "https://www.focus-on-english.com" },
    { name: "Blog", url: "https://www.focus-on-english.com/blog" },
    { name: "Autores", url: "https://www.focus-on-english.com/blog/autores" },
  ]);

  const authorList = Object.values(authors).filter(
    (a) => a.slug !== "focus-english-team"
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Navigation />
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <nav className="mb-8" aria-label="breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-slate-600 transition-colors">Inicio</Link></li>
              <li>›</li>
              <li><Link href="/blog" className="hover:text-slate-600 transition-colors">Blog</Link></li>
              <li>›</li>
              <li className="font-semibold text-slate-600">Autores</li>
            </ol>
          </nav>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coral-50 text-coral-600 text-sm font-bold mb-6 uppercase tracking-wider border border-coral-100">
              <Award className="w-4 h-4" />
              Equipo Experto
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Nuestros <span className="text-coral-600">Autores</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Profesores certificados y especialistas en inglés con años de experiencia formando a profesionales hispanohablantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {authorList.map((author) => {
              const authorArticles = articles.filter(
                (a) => a.authorData?.slug === author.slug
              );
              return (
                <Link
                  key={author.slug}
                  href={`/blog/autor/${author.slug}`}
                  className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="p-8 lg:p-10 flex flex-col flex-1">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="relative w-24 h-24 shrink-0">
                        <div className="absolute inset-0 bg-coral-100 rounded-2xl rotate-3"></div>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white shadow-md">
                          <Image
                            src={author.image}
                            alt={author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-black text-slate-900 group-hover:text-coral-600 transition-colors leading-tight mb-1">
                          {author.name}
                        </h2>
                        <p className="text-coral-600 font-semibold text-sm">{author.role}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                      {author.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {author.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700 text-xs font-medium flex items-center gap-1"
                        >
                          <CheckCircle className="w-3 h-3 text-coral-500" />
                          {exp}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                        <BookOpen className="w-4 h-4 text-coral-500" />
                        {authorArticles.length} artículos publicados
                      </span>
                      <span className="text-coral-600 font-bold text-sm flex items-center gap-1">
                        Ver perfil
                        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 lg:p-12 text-center">
            <h2 className="font-display text-3xl font-black text-slate-900 mb-4">
              Contenido revisado por expertos
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Todos los artículos de Focus English son redactados o revisados por profesores certificados con experiencia demostrable en la enseñanza del inglés a hispanohablantes adultos.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-coral-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-coral-700 transition-all hover:scale-[1.02]"
            >
              Explorar todos los artículos →
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
