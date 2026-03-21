import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getArticlesByKeyword, getAllKeywords, slugify, getHubContent, normalizeCategory } from "@/lib/blog";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { generateBreadcrumbSchema, generateCollectionPageSchema, generateFAQSchema } from "@/lib/schemas";
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

  let hubContent = getHubContent(originalKeyword);
  if (!hubContent && originalKeyword !== keyword) {
    hubContent = getHubContent(keyword);
  }

  const articles = getArticlesByKeyword(originalKeyword);
  const isThinPage = articles.length < 3 && !hubContent;

  const capitalized = originalKeyword.charAt(0).toUpperCase() + originalKeyword.slice(1);

  const pageTitle = hubContent?.title
    || `${capitalized}: Guías, Ejercicios y Recursos en Inglés`;

  const pageDescription = hubContent?.description
    || `Aprende ${originalKeyword} con nuestras guías gratuitas en español. Recursos prácticos, ejercicios resueltos y consejos de expertos para hispanohablantes. Mejora tu inglés hoy.`;

  const ogImage = "https://www.focus-on-english.com/blog/og-image.jpg";
  const canonicalUrl = hubContent
    ? `https://www.focus-on-english.com/hubs/${keyword}`
    : `https://www.focus-on-english.com/blog/temas/${keyword}`;

  const pageKeywords = [
    originalKeyword,
    ...articles.flatMap(a => a.keywords || []),
  ].filter((v, i, arr) => arr.indexOf(v) === i).slice(0, 10);

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: isThinPage ? false : true,
      follow: true,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "website",
      url: `https://www.focus-on-english.com/blog/temas/${keyword}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
  };
}

export default async function KeywordHubPage({ params }: { params: Promise<{ keyword: string }> }) {
  const { keyword } = await params;
  const keywords = getAllKeywords();
  const originalKeyword = keywords.find(k => slugify(k) === keyword) || keyword;
  const articles = getArticlesByKeyword(originalKeyword);

  let hubContent = getHubContent(originalKeyword);
  if (!hubContent && originalKeyword !== keyword) {
    hubContent = getHubContent(keyword);
  }

  if (articles.length === 0 && !hubContent) {
    redirect('/blog');
  }

  const capitalized = originalKeyword.charAt(0).toUpperCase() + originalKeyword.slice(1);
  const displayTitle = hubContent?.title || `${capitalized}: Guías, Ejercicios y Recursos en Inglés`;
  const displayDescription = hubContent?.description
    || `Aprende ${originalKeyword} con nuestras guías gratuitas en español. Recursos prácticos, ejercicios resueltos y consejos de expertos para hispanohablantes.`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: "https://www.focus-on-english.com" },
    { name: "Blog", url: "https://www.focus-on-english.com/blog" },
    { name: "Temas", url: "https://www.focus-on-english.com/blog/temas" },
    { name: originalKeyword },
  ]);

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

  const allFaqs = articles
    .flatMap(a => a.faqs || [])
    .filter((faq, idx, arr) => arr.findIndex(f => f.question === faq.question) === idx)
    .slice(0, 8);

  const faqSchema = allFaqs.length > 0 ? generateFAQSchema(allFaqs) : null;

  const relatedKeywords = Array.from(
    new Set(
      articles
        .flatMap(a => a.keywords || [])
        .filter(k => slugify(k) !== slugify(originalKeyword))
    )
  ).slice(0, 8);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });
    } catch {
      return dateStr;
    }
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionPageSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
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
                  <span>🎯 Centro de Recursos</span>
                </div>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none">
                  {displayTitle}
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 max-w-3xl leading-relaxed font-medium">
                  {displayDescription}
                </p>
                <div className="flex items-center gap-6 mt-8 text-white/70 text-sm font-medium">
                  <span>📄 {articles.length} {articles.length === 1 ? "artículo" : "artículos"}</span>
                  {allFaqs.length > 0 && <span>❓ {allFaqs.length} preguntas frecuentes</span>}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hub long-form content (when hub file exists) */}
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

        {/* Intro text (when no hub file — adds indexable body text) */}
        {!hubContent && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                En esta página encontrarás todos nuestros recursos sobre <strong>{originalKeyword}</strong>: guías paso a paso, ejercicios prácticos con soluciones, consejos de expertos y materiales gratuitos diseñados para hispanohablantes que quieren mejorar su inglés de forma eficaz.
              </p>
              {articles.length >= 3 && (
                <p className="text-base text-slate-600 leading-relaxed">
                  Hemos reunido <strong>{articles.length} {articles.length === 1 ? "guía" : "guías"}</strong> sobre este tema, cubriendo desde los conceptos fundamentales hasta los usos avanzados que aparecen en exámenes oficiales como Cambridge, IELTS o APTIS. Cada artículo incluye ejemplos reales, tablas de referencia y ejercicios resueltos para que puedas practicar y consolidar lo aprendido.
                </p>
              )}
              <p className="text-base text-slate-600 leading-relaxed">
                Todo el contenido está escrito en español, pensado para estudiantes de nivel B1 en adelante que buscan una explicación clara, sin tecnicismos innecesarios y con ejemplos aplicables desde el primer día. Si estás preparando un examen oficial, trabajando en un entorno internacional o simplemente quieres hablar con más confianza en inglés, estas guías son tu punto de partida.
              </p>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="font-display text-3xl font-black text-slate-900 mb-4">
                {articles.length === 1 ? "Artículo" : `${articles.length} artículos`} sobre{" "}
                <span className="text-indigo-600 capitalize">{originalKeyword}</span>
              </h2>
              <p className="text-slate-600">Guías detalladas, ejercicios resueltos y recursos prácticos para dominar este tema.</p>
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
                      {article.readTime && (
                        <span className="text-slate-400 text-[10px]">· {article.readTime}</span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-coral-600 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <time className="text-slate-400 text-xs" dateTime={article.date}>
                        {formatDate(article.updatedDate || article.date)}
                      </time>
                      <div className="flex items-center gap-1 text-indigo-600 font-bold text-sm">
                        <span>Leer guía</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {allFaqs.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-black text-slate-900 mb-8">
                Preguntas frecuentes sobre <span className="text-indigo-600 capitalize">{originalKeyword}</span>
              </h2>
              <div className="space-y-6">
                {allFaqs.map((faq, i) => (
                  <div key={i} className="border border-slate-200 rounded-2xl p-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-3">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Topics */}
        {relatedKeywords.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-100 border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-display text-xl font-black text-slate-900 mb-6">Temas relacionados</h2>
              <div className="flex flex-wrap gap-3">
                {relatedKeywords.map((k) => (
                  <Link
                    key={k}
                    href={`/blog/temas/${slugify(k)}`}
                    className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors capitalize"
                  >
                    {k}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to blog */}
        <div className="py-10 text-center border-t border-slate-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-600 font-bold hover:text-coral-600 transition-colors"
          >
            <span>← Explorar otras categorías y temas</span>
          </Link>
        </div>
      </main>
    </>
  );
}
