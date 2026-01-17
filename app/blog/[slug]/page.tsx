import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { ShareButton } from "./ShareButton";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemas";
import { BlogEnhancements } from "@/components/blog/BlogEnhancements";
import { TableOfContents } from "@/components/blog/TableOfContents";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export async function generateStaticParams() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md") || f.endsWith(".mdx"));
  
  return files.map(file => ({
    slug: file.replace(/\.mdx?$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return {
      title: "Article Not Found",
    };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  // Optimized title for SEO
  const seoTitle = data.title.includes("2026") 
    ? data.title 
    : data.title.replace(/^Guía/, "Guía 2026:");

  return {
    title: `${seoTitle} | Blog Focus English`,
    description: data.description,
    keywords: data.keywords || [],
    authors: [{ name: data.author || "Focus English" }],
    openGraph: {
      title: seoTitle,
      description: data.description,
      type: "article",
      publishedTime: data.date,
      modifiedTime: data.dateModified || data.date,
      authors: [data.author || "Focus English"],
      section: data.category,
      tags: data.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: data.description,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // Generate Article Schema for SEO
  const wordCount = content.split(/\s+/).length;
  const articleSchema = generateArticleSchema({
    title: data.title,
    description: data.description,
    image: "/blog/og-image.jpg", // TODO: Add specific images per article
    datePublished: data.date,
    dateModified: data.dateModified || data.date,
    slug,
    category: data.category,
    keywords: data.keywords,
    wordCount,
  });

  // Generate Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: "https://focus-on-english.com" },
    { name: "Blog", url: "https://focus-on-english.com/blog" },
    { name: data.title, url: `https://focus-on-english.com/blog/${slug}` },
  ]);

  // Simple markdown to HTML conversion (basic)
  const htmlContent = content
    .replace(/^### (.*$)/gim, '<h3 class="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="font-display text-3xl font-black text-slate-900 mt-12 mb-6">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="font-display text-4xl font-black text-slate-900 mt-8 mb-6">$1</h1>')
    .replace(/^\*\*(.*)\*\*/gim, '<strong class="font-semibold text-slate-900">$1</strong>')
    .replace(/^- (.*$)/gim, '<li class="ml-6 text-slate-700">$1</li>')
    .replace(/^✅ (.*$)/gim, '<div class="flex items-start gap-2 mb-2"><span class="text-green-600 mt-1">✅</span><span class="text-slate-700">$1</span></div>')
    .replace(/^❌ (.*$)/gim, '<div class="flex items-start gap-2 mb-2"><span class="text-red-600 mt-1">❌</span><span class="text-slate-700">$1</span></div>')
    .replace(/\n\n/g, '</p><p class="text-slate-700 leading-relaxed mb-4">');

  const categoryColors: Record<string, string> = {
    trabajo: "bg-coral-100 text-coral-800 border-coral-200",
    viajes: "bg-sky-100 text-coral-800 border-sky-200",
    examenes: "bg-emerald-100 text-emerald-800 border-emerald-200",
    aprendizaje: "bg-amber-100 text-amber-800 border-amber-200",
    metodos: "bg-pink-100 text-pink-800 border-pink-200",
  };

  const categoryColor = categoryColors[data.category] || "bg-slate-100 text-slate-800";

  return (
    <>
      <Navigation />
      
      {/* Blog Enhancements (Progress Bar + Scroll to Top) */}
      <BlogEnhancements />
      
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Article Header */}
        <article className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <div className="max-w-4xl">
                {/* Breadcrumb - Updated for SEO */}
                <nav className="mb-8" aria-label="breadcrumb">
                  <ol className="flex items-center gap-2 text-sm text-slate-600">
                    <li><Link href="/" className="hover:text-coral-600 transition-colors">Inicio</Link></li>
                    <li className="text-slate-400">›</li>
                    <li><Link href="/blog" className="hover:text-coral-600 transition-colors">Blog</Link></li>
                    <li className="text-slate-400">›</li>
                    <li className="font-semibold text-slate-900">{data.category === "trabajo" ? "Inglés para Trabajar" : data.category === "viajes" ? "Inglés para Viajar" : "Preparación de Exámenes"}</li>
                  </ol>
                </nav>

            {/* Category Badge */}
            <div className="mb-6 animate-fade-in-up">
              <span className={`badge-pill ${categoryColor}`}>
                {data.category === "trabajo" && "Inglés para Trabajar"}
                {data.category === "viajes" && "Inglés para Viajar"}
                {data.category === "examenes" && "Preparación de Exámenes"}
                {data.category === "aprendizaje" && "Aprendizaje"}
                {data.category === "metodos" && "Métodos"}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              {data.title}
            </h1>

            {/* Description */}
            {data.description && (
              <p className="text-xl text-slate-600 mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                {data.description}
              </p>
            )}

            {/* Meta Info */}
            <div className="meta-info animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="meta-item">
                <span className="text-lg">📅</span>
                <time dateTime={data.date}>
                  {new Date(data.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              <div className="meta-item">
                <span className="text-lg">✍️</span>
                <span>{data.author}</span>
              </div>
              <div className="meta-item">
                <span className="text-lg">⏱️</span>
                <span>{Math.ceil(content.split(' ').length / 200)} min lectura</span>
              </div>
              <div className="meta-item">
                <span className="text-lg">📖</span>
                <span>{content.split(' ').length.toLocaleString()} palabras</span>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="article-content prose prose-slate prose-lg max-w-none mt-12
                prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:scroll-mt-24
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:scroll-mt-24
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-a:text-coral-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-coral-700 prose-code:font-mono prose-code:text-sm
                prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:shadow-xl
                prose-li:text-slate-700 prose-li:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-coral-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-700
                prose-table:w-full prose-table:border-collapse
                prose-img:rounded-xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* CTA Box */}
            <div className="cta-box mt-16 p-8 rounded-2xl bg-gradient-to-br from-coral-50 to-peach-50 border-2 border-coral-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-display text-2xl font-black text-slate-900 mb-4 tracking-tight">
                🎓 ¿Te gustaría profundizar en este tema?
              </h3>
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                Descubre nuestros cursos especializados y lleva tu inglés al siguiente nivel con programas personalizados y profesores nativos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/cursos-especializados"
                  className="group inline-flex items-center justify-center bg-coral-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-coral-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Ver Cursos Especializados</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/diagnostico"
                  className="group inline-flex items-center justify-center bg-white text-coral-600 border-2 border-coral-600 px-8 py-4 rounded-xl font-bold hover:bg-coral-50 transition-all duration-300 hover:scale-105"
                >
                  <span>Hacer Test de Nivel</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t-2 border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📤</span>
                Comparte este artículo:
              </h4>
              <div className="flex flex-wrap gap-3">
                <ShareButton title={data.title} description={data.description} />
              </div>
              <p className="mt-6 text-sm text-slate-500 italic">
                Si te ha parecido útil este contenido, compártelo con quien lo necesite 💜
              </p>
            </div>

                {/* Back to Blog */}
                <div className="mt-12 text-center">
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center gap-2 text-coral-600 font-semibold hover:text-coral-700 transition-colors group"
                  >
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Volver al blog</span>
                  </Link>
                </div>
              </div>

              {/* Sidebar - Table of Contents */}
              <aside className="hidden xl:block">
                <div className="sticky top-24">
                  <TableOfContents />
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-black text-slate-900 mb-4 tracking-tight">
                Artículos Relacionados
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Continúa aprendiendo con más contenido de calidad
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link 
                href="/blog" 
                className="group block bg-white rounded-2xl shadow-md border-2 border-slate-200 p-8 hover:shadow-2xl hover:border-coral-300 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-coral-600 transition-colors">
                  <svg className="w-6 h-6 text-coral-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-coral-600 transition-colors">
                  Ver todos los artículos
                </h3>
                <p className="text-slate-600 mb-4">
                  Explora nuestra biblioteca completa de guías y recursos para aprender inglés
                </p>
                <span className="inline-flex items-center gap-2 text-coral-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Explorar blog</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              <Link 
                href="/cursos-especializados" 
                className="group block bg-white rounded-2xl shadow-md border-2 border-slate-200 p-8 hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                  <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Cursos especializados
                </h3>
                <p className="text-slate-600 mb-4">
                  Programas diseñados para tus objetivos específicos con profesores nativos
                </p>
                <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Ver cursos</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              <Link 
                href="/diagnostico" 
                className="group block bg-white rounded-2xl shadow-md border-2 border-slate-200 p-8 hover:shadow-2xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-coral-600 transition-colors">
                  <svg className="w-6 h-6 text-coral-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-coral-600 transition-colors">
                  Test de nivel gratuito
                </h3>
                <p className="text-slate-600 mb-4">
                  Descubre tu nivel actual y recibe recomendaciones personalizadas
                </p>
                <span className="inline-flex items-center gap-2 text-coral-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Hacer test</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-400">
            © 2026 Focus English. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
