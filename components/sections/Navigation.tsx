"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursosMenuOpen, setCursosMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[9998] bg-white/95 backdrop-blur-lg border-b-2 border-[#FFE8D9] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center text-white font-black text-xl shadow-coral transform group-hover:scale-110 transition-transform">
              F
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">Focus English</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/planes" className="text-sm font-bold text-[#FF6B6B] hover:text-[#FF8E53] transition-colors flex items-center gap-1">
              <span className="text-lg">💎</span> Planes
            </Link>
            
            {/* Menú desplegable Cursos */}
            <div 
              className="relative group"
              onMouseEnter={() => setCursosMenuOpen(true)}
              onMouseLeave={() => setCursosMenuOpen(false)}
            >
              <button className="text-sm font-bold text-gray-700 hover:text-[#FF6B6B] transition-colors flex items-center gap-1">
                <span className="text-lg">📚</span> Cursos
                <svg className={`w-4 h-4 transition-transform ${cursosMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {cursosMenuOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-[9999]">
                  <div className="bg-white rounded-2xl shadow-coral-lg border-2 border-[#FFE8D9] py-2 animate-slide-down">
                    <Link href="/cursos/trabajo" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#FFF4ED] hover:to-[#FFE8D9] hover:text-[#FF6B6B] transition-all font-semibold rounded-lg mx-2 whitespace-nowrap">
                      <span className="text-lg mr-2">💼</span> Inglés para Trabajar
                    </Link>
                    <Link href="/cursos/viajes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#FFF4ED] hover:to-[#FFE8D9] hover:text-[#FF6B6B] transition-all font-semibold rounded-lg mx-2 whitespace-nowrap">
                      <span className="text-lg mr-2">✈️</span> Inglés para Viajar
                    </Link>
                    <Link href="/cursos/examenes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#FFF4ED] hover:to-[#FFE8D9] hover:text-[#FF6B6B] transition-all font-semibold rounded-lg mx-2 whitespace-nowrap">
                      <span className="text-lg mr-2">🎓</span> Preparación de Exámenes
                    </Link>
                    <div className="border-t-2 border-[#FFE8D9] my-2 mx-2"></div>
                    <Link href="/cursos" className="block px-4 py-3 text-sm text-[#FF6B6B] hover:bg-gradient-to-r hover:from-[#FFF4ED] hover:to-[#FFE8D9] transition-all font-black rounded-lg mx-2">
                      Ver todos los cursos →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/blog" className="text-sm font-bold text-gray-700 hover:text-[#FF6B6B] transition-colors">
              Blog
            </Link>
            <Link href="/test-nivel" className="text-sm font-bold text-gray-700 hover:text-[#FF6B6B] transition-colors">
              Test de Nivel
            </Link>
            <Link 
              href="/cuenta/registro"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-black text-sm hover:shadow-coral-lg transition-all transform hover:scale-105"
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
                className="text-sm font-bold text-coral-600 hover:text-coral-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                💎 Planes y Precios
              </Link>
              
              {/* Cursos en móvil */}
              <div className="space-y-2">
                <div className="text-sm font-bold text-slate-900">📚 Cursos</div>
                <Link 
                  href="/cursos/trabajo" 
                  className="text-sm font-semibold text-slate-700 hover:text-coral-600 transition-colors pl-4 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  💼 Inglés para Trabajar
                </Link>
                <Link 
                  href="/cursos/viajes" 
                  className="text-sm font-semibold text-slate-700 hover:text-coral-600 transition-colors pl-4 block"
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
                className="text-sm font-bold text-slate-700 hover:text-coral-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/test-nivel" 
                className="text-sm font-bold text-slate-700 hover:text-coral-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Test de Nivel
              </Link>
              <Link 
                href="/cuenta/registro"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-coral-600 to-peach-600 text-white font-black text-sm text-center"
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
