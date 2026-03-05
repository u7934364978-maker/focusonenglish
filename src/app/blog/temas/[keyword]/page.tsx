import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { getArticlesByKeyword, getAllKeywords, slugify, getHubContent, normalizeCategory } from "@/lib/blog";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { generateBreadcrumbSchema, generateCollectionPageSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  const keywords = getAllKeywords();
  return keywords.map(keyword => ({
    keyword: slugify(keyword),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ keyword: string }> }): Promise<Metadata> {
  const { keyword } = await params;
  const keywords = getAllKeywords();
  const originalKeyword = keywords.find(k => slugify(k) === keyword) || keyword;
  
  // Try to get hub content to use its title/description in metadata
  let hubContent = getHubContent(originalKeyword);
  if (!hubContent && originalKeyword !== keyword) {
    hubContent = getHubContent(keyword);
  }
  
  const displayTitle = hubContent?.title || `Artículos sobre ${originalKeyword}`;
  const displayDescription = hubContent?.description || `Explora todas nuestras guías y recursos gratuitos sobre ${originalKeyword} para mejorar tu nivel de inglés.`;

  const ogImage = "https://www.focus-on-english.com/blog/og-image.jpg";

  return {
    title: `${displayTitle} | Focus English Blog`,
    description: displayDescription,
    alternates: {
      canonical: `https://www.focus-on-english.com/blog/temas/${keyword}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: displayTitle,
      description: displayDescription,
      type: "website",
      url: `https://www.focus-on-english.com/blog/temas/${keyword}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: displayTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description: displayDescription,
      images: [ogImage],
    },
  };
}

export default async function KeywordHubPage({ params }: { params: Promise<{ keyword: string }> }) {
  const { keyword } = await params;
  const keywords = getAllKeywords();
  const originalKeyword = keywords.find(k => slugify(k) === keyword) || keyword;
  const articles = getArticlesByKeyword(originalKeyword);
  
  // Try to get hub content by original keyword first, then by the slug directly
  let hubContent = getHubContent(originalKeyword);
  if (!hubContent && originalKeyword !== keyword) {
    hubContent = getHubContent(keyword);
  }

  if (articles.length === 0 && !hubContent) {
    redirect('/blog');
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: "https://www.focus-on-english.com" },
    { name: "Blog", url: "https://www.focus-on-english.com/blog" },
    { name: "Temas", url: "https://www.focus-on-english.com/blog/temas" },
    { name: originalKeyword },
  ]);

  const displayTitle = hubContent?.title || `Artículos sobre ${originalKeyword}`;
  const displayDescription = hubContent?.description || `Explora todas nuestras guías y recursos gratuitos sobre ${originalKeyword} para mejorar tu nivel de inglés.`;

  const collectionPageSchema = generateCollectionPageSchema({
    name: displayTitle,
    description: displayDescription,
    url: `https://www.focus-on-english.com/blog/temas/${keyword}`,
    articles: articles.slice(0, 10).map((a) => ({
      title: a.title,
      url: `https://www.focus-on-english.com/blog/${normalizeCategory(a.category)}/${a.slug}`,
      datePublished: a.date,
    })),
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionPageSchema} />
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        {/* Header Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-700 opacity-95"></div>
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center lg:text-left">
            <nav className="mb-12" aria-label="breadcrumb">
              <ol className="flex items-center justify-center lg:justify-start gap-2 text-sm text-white/70">
                <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li>›</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li>›</li>
                <li>Temas</li>
                <li>›</li>
                <li className="font-semibold text-white capitalize">{originalKeyword}</li>
              </ol>
            </nav>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="text-8xl bg-white/20 p-8 rounded-[2rem] backdrop-blur-md shadow-2xl border border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                🏷️
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/30 backdrop-blur-sm">
                  <span>🎯 Topic Cluster Hub</span>
                </div>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none capitalize">
                  {hubContent?.title || originalKeyword}
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 max-w-3xl leading-relaxed font-medium">
                  {hubContent?.description || `Recopilación de guías, consejos y materiales de estudio especializados en ${originalKeyword}.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Long form content */}
        {hubContent && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-slate-900 prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-img:rounded-3xl">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {hubContent.content}
                </ReactMarkdown>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="font-display text-3xl font-black text-slate-900 mb-4">
                Artículos destacados sobre <span className="text-indigo-600 capitalize">{originalKeyword}</span>
              </h2>
              <p className="text-slate-600">Explora nuestra selección de recursos prácticos y guías detalladas.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link 
                  key={article.slug}
                  href={`/blog/${article.category}/${article.slug}`}
                  className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  {article.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.alt || article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-coral-600 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                      <span>Ver recurso completo</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-slate-600 font-bold hover:text-coral-600 transition-colors"
              >
                <span>← Explorar otras categorías y temas</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
