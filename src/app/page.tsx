import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getBlogArticles } from "@/lib/blog";
import { HomeBelowFold } from "./HomeBelowFold";

const Footer = dynamic(() => import("@/components/sections/Footer").then((m) => ({ default: m.Footer })), {
  ssr: true,
  loading: () => <footer className="h-64 bg-slate-900" aria-hidden="true" />,
});

const CourseLaunchBanner = dynamic(() => import("@/components/CourseLaunchBanner").then((m) => ({ default: m.CourseLaunchBanner })), {
  loading: () => <div className="h-24 bg-gradient-to-r from-coral-50 to-peach-50" aria-hidden="true" />,
});

export const metadata: Metadata = {
  title: "Cursos de Inglés Online en España: Niveles A1-C2",
  description: "Cursos de inglés online en España certificados. Desde principiante hasta avanzado (A1-C2). Programas de 90 días. Desde €6.99/mes.",
  keywords: [
    "cursos de inglés online españa",
    "aprender inglés a1 c2",
    "inglés general",
    "niveles de inglés cambridge",
    "aprender inglés españa 2026"
  ],
  alternates: {
    canonical: 'https://www.focus-on-english.com',
  },
};

export default function HomePage() {
  const latestArticles = getBlogArticles().slice(0, 3);
  
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section - CRÍTICO: mínimo para LCP rápido */}
        <section className="hero-gradient relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Gradiente estático (blobs animados eliminados para reducir render ~1s) */}
          <div className="absolute inset-0 bg-gradient-to-br from-coral-100/20 via-transparent to-peach-100/20 pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-7xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg text-sm font-black">
                <span className="w-2 h-2 bg-[#FF6B6B] rounded-full animate-pulse"></span>
                <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                  Cursos de Inglés General (A1-C2)
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
                Domina el Inglés<br />
                <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                  A Tu Propio Ritmo
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-4 leading-relaxed font-semibold">
                Cursos de inglés online certificados, desde <span className="font-black text-[#FF6B6B]">Principiante (A1)</span> hasta <span className="font-black text-[#FF6B6B]">Proficiente (C2)</span>.
              </p>
              
              <p className="text-lg text-gray-600 mb-10 font-semibold">
                Programas personalizados de 90 días. Desde €6.99/mes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  href="/test-nivel"
                  className="cta-primary inline-flex items-center gap-2"
                >
                  🎯 Hacer Test de Nivel Gratis
                </Link>
                
                <Link
                  href="/cuenta/login"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-coral-700 font-black text-lg hover:shadow-lg hover:scale-105 transition-all border-2 border-coral-100"
                >
                  🔑 Iniciar Sesión
                </Link>
                
                <Link
                  href="#cursos"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 bg-white/10 text-white font-black text-lg hover:bg-white hover:text-coral-600 transition-all backdrop-blur-sm"
                >
                  Ver Cursos →
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-lg">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="font-black text-gray-900">4.8/5</span>
                <span className="text-gray-600 font-semibold">(2,500+ reseñas)</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-lg">
                <span className="text-2xl">🇪🇸</span>
                <span className="font-black text-gray-900">100% enfocado en España</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-lg">
                <span className="text-2xl">📚</span>
                <span className="font-black text-gray-900">18 niveles (A1-C2)</span>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={null}>
          <CourseLaunchBanner />
          <HomeBelowFold latestArticles={latestArticles} />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
