import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getHubContent, getBlogArticles, normalizeCategory, slugify } from "@/lib/blog";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { generateBreadcrumbSchema, generateCollectionPageSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import fs from "fs";
import path from "path";

const HUBS_DIR = path.join(process.cwd(), "src/content/hubs");

export async function generateStaticParams() {
  if (!fs.existsSync(HUBS_DIR)) return [];
  const files = fs.readdirSync(HUBS_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(".md", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hub = getHubContent(slug);

  if (!hub) {
    return { title: "Hub no encontrado", robots: { index: false, follow: false } };
  }

  return {
    title: `${hub.title} | Focus English`,
    description: hub.description,
    alternates: {
      canonical: `https://www.focus-on-english.com/hubs/${slug}`,
    },
    openGraph: {
      title: hub.title,
      description: hub.description,
      type: "website",
      url: `https://www.focus-on-english.com/hubs/${slug}`,
      images: [
        {
          url: "https://www.focus-on-english.com/blog/og-image.jpg",
          width: 1200,
          height: 630,
          alt: hub.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: hub.title,
      description: hub.description,
      images: ["https://www.focus-on-english.com/blog/og-image.jpg"],
    },
  };
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hub = getHubContent(slug);

  if (!hub) {
    notFound();
  }

  const allArticles = getBlogArticles();
  const relatedArticles = allArticles.filter((article) =>
    article.keywords?.some((k) => slugify(k) === slugify(slug) || slugify(k).includes(slug.split("-")[0]))
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: "https://www.focus-on-english.com" },
    { name: "Guías", url: "https://www.focus-on-english.com/hubs" },
    { name: hub.title, url: `https://www.focus-on-english.com/hubs/${slug}` },
  ]);

  const collectionPageSchema = generateCollectionPageSchema({
    name: hub.title,
    description: hub.description || "",
    url: `https://www.focus-on-english.com/hubs/${slug}`,
    articles: relatedArticles.slice(0, 10).map((a) => ({
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
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-coral-600 to-orange-500 opacity-95" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <nav className="mb-12" aria-label="breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>›</li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>›</li>
                <li className="font-semibold text-white">{hub.title}</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/30 backdrop-blur-sm">
                <span>📚 Guía Completa</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl font-black mb-6 tracking-tight leading-none">
                {hub.title}
              </h1>
              {hub.description && (
                <p className="text-xl text-white/90 leading-relaxed">
                  {hub.description}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Hub content */}
        {hub.content && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-slate-900 prose-a:text-coral-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-img:rounded-3xl">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {hub.content}
                </ReactMarkdown>
              </div>
            </div>
          </section>
        )}

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="font-display text-3xl font-black text-slate-900 mb-4">
                  Artículos relacionados
                </h2>
                <p className="text-slate-600">
                  Guías y recursos para profundizar en este tema.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${normalizeCategory(article.category)}/${article.slug}`}
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
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider self-start mb-4">
                        {article.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-coral-600 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-coral-600 font-bold text-sm">
                        <span>Leer artículo</span>
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
                  <span>← Explorar todas las guías</span>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
