import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getSEOPageBySlug, getAllSEORoutes } from "@/lib/seo";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from "next";

export async function generateStaticParams() {
  const routes = getAllSEORoutes();
  return routes.map(slug => ({
    slug: `curso-ingles-${slug.replace(/^ingles-/, "")}`,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  // Solo procesar si el slug empieza con curso-ingles-
  if (!slug.startsWith('curso-ingles-')) {
    return {};
  }

  const seoFileName = slug.replace(/^curso-/, "");
  const page = getSEOPageBySlug(seoFileName, true);
  
  if (!page) return { title: "Curso de Inglés" };

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: page.canonical || `https://www.focus-on-english.com/${slug}`,
    },
  };
}

export default async function SEORoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Si no empieza con el prefijo esperado, 404
  if (!slug.startsWith('curso-ingles-')) {
    notFound();
  }

  // Normalizar el nombre del archivo: curso-ingles-viajar -> ingles-para-viajar (si existe) o ingles-viajar
  let seoFileName = slug.replace(/^curso-/, "");
  
  // Mapeo manual para rutas comunes sin el "para" o nombres especiales
  const manualMapping: Record<string, string> = {
    "ingles-trabajo": "ingles-para-trabajo",
    "ingles-viajar": "ingles-para-viajar",
    "ingles-atencion-al-cliente": "ingles-para-atencion-al-cliente",
    "ingles-aprender-ingles": "hub",
  };

  if (manualMapping[seoFileName]) {
    seoFileName = manualMapping[seoFileName];
  }

  // Si es el hub, buscar en el directorio base, si no en rutas
  const isHub = seoFileName === "hub";
  let page = getSEOPageBySlug(seoFileName, !isHub);

  // Reintento: si no lo encuentra, probar añadiendo el prefijo "ingles-" si no lo tiene
  if (!page && !seoFileName.startsWith('ingles-')) {
    let retryFileName = `ingles-${seoFileName}`;
    if (manualMapping[retryFileName]) retryFileName = manualMapping[retryFileName];
    page = getSEOPageBySlug(retryFileName, true);
  }

  if (!page) {
    notFound();
  }

  const MarkdownComponents = {
    h1: ({ ...props }: any) => <h1 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight" {...props} />,
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
      
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <article className="lg:col-span-8">
              {/* Breadcrumbs */}
              <nav className="flex mb-8 text-sm font-medium text-slate-500">
                <Link href="/" className="hover:text-coral-600 transition-colors">Inicio</Link>
                <span className="mx-2 text-slate-300">/</span>
                <Link href="/aprender-ingles" className="hover:text-coral-600 transition-colors">Aprender Inglés</Link>
                <span className="mx-2 text-slate-300">/</span>
                <span className="text-slate-900 capitalize">{page.title}</span>
              </nav>

              <div className="prose prose-slate prose-lg max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={MarkdownComponents}
                >
                  {page.content}
                </ReactMarkdown>
              </div>
            </article>

            {/* Sidebar / CTA */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Registration Card */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
                  <h3 className="text-2xl font-black text-slate-900 mb-4">¡Empieza ahora!</h3>
                  <p className="text-slate-600 mb-6">Accede a todo el contenido de este curso y acelera tu aprendizaje con nuestra IA.</p>
                  <Link 
                    href="/cuenta/registro"
                    className="block w-full text-center bg-coral-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Probar Gratis
                  </Link>
                  <p className="mt-4 text-center text-sm text-slate-500 font-medium italic">
                    7 días de prueba sin compromiso
                  </p>
                </div>

                {/* Related Routes */}
                {page.related_routes && page.related_routes.length > 0 && (
                  <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Otras rutas de interés</h4>
                    <div className="space-y-3">
                      {page.related_routes.map(route => (
                        <Link 
                          key={route}
                          href={`/curso-ingles-${route.replace(/^ingles-/, "")}`}
                          className="block p-4 rounded-xl border border-slate-100 hover:border-coral-200 hover:bg-coral-50 transition-all font-bold text-slate-700 capitalize"
                        >
                          Curso Inglés {route.replace(/^ingles-/, "").toUpperCase()} →
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Structured Data: Course */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": page.title,
            "description": page.description,
            "provider": {
              "@type": "Organization",
              "name": "Focus English",
              "sameAs": "https://www.focus-on-english.com"
            }
          })
        }}
      />
    </>
  );
}
