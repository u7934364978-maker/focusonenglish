import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { ShareButton } from "./ShareButton";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemas";

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
    trabajo: "bg-violet-100 text-violet-800",
    viajes: "bg-blue-100 text-blue-800",
    examenes: "bg-emerald-100 text-emerald-800",
  };

  const categoryColor = categoryColors[data.category] || "bg-slate-100 text-slate-800";

  return (
    <>
      <Navigation />
      
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb - Updated for SEO */}
            <nav className="mb-8" aria-label="breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-slate-600">
                <li><Link href="/" className="hover:text-violet-600 transition-colors">Inicio</Link></li>
                <li className="text-slate-400">›</li>
                <li><Link href="/blog" className="hover:text-violet-600 transition-colors">Blog</Link></li>
                <li className="text-slate-400">›</li>
                <li className="font-semibold text-slate-900">{data.category === "trabajo" ? "Inglés para Trabajar" : data.category === "viajes" ? "Inglés para Viajar" : "Preparación de Exámenes"}</li>
              </ol>
            </nav>

            {/* Category Badge */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${categoryColor}`}>
                {data.category === "trabajo" && "Inglés para Trabajar"}
                {data.category === "viajes" && "Inglés para Viajar"}
                {data.category === "examenes" && "Preparación de Exámenes"}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              {data.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="font-semibold">📅</span>
                <time dateTime={data.date}>
                  {new Date(data.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">✍️</span>
                <span>{data.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">⏱️</span>
                <span>{Math.ceil(content.split(' ').length / 200)} min lectura</span>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-slate prose-lg max-w-none
                prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline
                prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-slate-900 prose-pre:text-slate-100
                prose-li:text-slate-700
                prose-blockquote:border-l-4 prose-blockquote:border-violet-600 prose-blockquote:pl-4 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* CTA Box */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200">
              <h3 className="font-display text-2xl font-black text-slate-900 mb-4 tracking-tight">
                ¿Te gustaría profundizar en este tema?
              </h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Descubre nuestros cursos especializados y lleva tu inglés al siguiente nivel con programas personalizados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/cursos-especializados"
                  className="inline-flex items-center justify-center bg-violet-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-violet-700 transition-colors"
                >
                  Ver Cursos Especializados
                </Link>
                <Link
                  href="/diagnostico"
                  className="inline-flex items-center justify-center bg-white text-violet-600 border-2 border-violet-600 px-6 py-3 rounded-lg font-bold hover:bg-violet-50 transition-colors"
                >
                  Hacer Test de Nivel
                </Link>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-4">Comparte este artículo:</p>
              <div className="flex gap-4">
                <ShareButton title={data.title} description={data.description} />
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-black text-slate-900 mb-8 tracking-tight">
              Artículos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/blog" className="block bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                <span className="text-violet-600 font-semibold">Ver más artículos →</span>
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
