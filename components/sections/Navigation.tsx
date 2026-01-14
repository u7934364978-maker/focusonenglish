"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-black">
              F
            </div>
            <span className="text-lg font-black text-slate-900">Focus English</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/planes" className="text-sm font-bold text-violet-600 hover:text-violet-700 transition-colors">
              💎 Planes
            </Link>
            <Link href="/cursos-especializados" className="text-sm font-bold text-slate-700 hover:text-violet-600 transition-colors">
              Cursos Especializados
            </Link>
            <Link href="/blog" className="text-sm font-bold text-slate-700 hover:text-violet-600 transition-colors">
              Blog
            </Link>
            <Link href="/diagnostico" className="text-sm font-bold text-slate-700 hover:text-violet-600 transition-colors">
              Test de Nivel
            </Link>
            <Link 
              href="/signup"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-black text-sm hover:shadow-lg transition-all"
            >
              Empezar Ahora
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              <Link 
                href="/planes" 
                className="text-sm font-bold text-violet-600 hover:text-violet-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                💎 Planes y Precios
              </Link>
              <Link 
                href="/cursos-especializados" 
                className="text-sm font-bold text-slate-700 hover:text-violet-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cursos Especializados
              </Link>
              <Link 
                href="/blog" 
                className="text-sm font-bold text-slate-700 hover:text-violet-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/diagnostico" 
                className="text-sm font-bold text-slate-700 hover:text-violet-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Test de Nivel
              </Link>
              <Link 
                href="/signup"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-black text-sm text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Empezar Ahora
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
