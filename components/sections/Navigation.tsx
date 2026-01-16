"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursosMenuOpen, setCursosMenuOpen] = useState(false);

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
            
            {/* Menú desplegable Cursos */}
            <div 
              className="relative"
              onMouseEnter={() => setCursosMenuOpen(true)}
              onMouseLeave={() => setCursosMenuOpen(false)}
            >
              <button className="text-sm font-bold text-slate-700 hover:text-violet-600 transition-colors flex items-center gap-1">
                📚 Cursos
                <svg className={`w-4 h-4 transition-transform ${cursosMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {cursosMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2">
                  <Link href="/cursos/trabajo" className="block px-4 py-2 text-sm text-slate-700 hover:bg-violet-50 hover:text-violet-600 transition-colors">
                    💼 Inglés para Trabajar
                  </Link>
                  <Link href="/cursos/viajes" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    ✈️ Inglés para Viajar
                  </Link>
                  <Link href="/cursos/examenes" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                    🎓 Preparación de Exámenes
                  </Link>
                  <div className="border-t border-slate-200 my-2"></div>
                  <Link href="/cursos" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors font-semibold">
                    Ver todos los cursos →
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/blog" className="text-sm font-bold text-slate-700 hover:text-violet-600 transition-colors">
              Blog
            </Link>
            <Link href="/test-nivel" className="text-sm font-bold text-slate-700 hover:text-violet-600 transition-colors">
              Test de Nivel
            </Link>
            <Link 
              href="/cuenta/registro"
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
              
              {/* Cursos en móvil */}
              <div className="space-y-2">
                <div className="text-sm font-bold text-slate-900">📚 Cursos</div>
                <Link 
                  href="/cursos/trabajo" 
                  className="text-sm font-semibold text-slate-700 hover:text-violet-600 transition-colors pl-4 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  💼 Inglés para Trabajar
                </Link>
                <Link 
                  href="/cursos/viajes" 
                  className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors pl-4 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ✈️ Inglés para Viajar
                </Link>
                <Link 
                  href="/cursos/examenes" 
                  className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors pl-4 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🎓 Preparación de Exámenes
                </Link>
              </div>
              
              <Link 
                href="/blog" 
                className="text-sm font-bold text-slate-700 hover:text-violet-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/test-nivel" 
                className="text-sm font-bold text-slate-700 hover:text-violet-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Test de Nivel
              </Link>
              <Link 
                href="/cuenta/registro"
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
