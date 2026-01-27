"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursosMenuOpen, setCursosMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar error de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-[9998] bg-white/95 backdrop-blur-lg border-b-2 border-[#FFE8D9] shadow-sm dark:bg-slate-950/95 dark:border-slate-800 transition-colors">
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
              <button className="text-sm font-bold text-gray-700 hover:text-[#FF6B6B] transition-colors flex items-center gap-1 dark:text-slate-200 dark:hover:text-[#FF6B6B]">
                <span className="text-lg">📚</span> Cursos
                <svg className={`w-4 h-4 transition-transform ${cursosMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {cursosMenuOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-[9999]">
                  <div className="bg-white rounded-2xl shadow-coral-lg border-2 border-[#FFE8D9] py-2 animate-slide-down dark:bg-slate-900 dark:border-slate-800">
                    <div className="relative group/sub">
                      <Link href="/cursos/trabajo" className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#FFF4ED] hover:to-[#FFE8D9] hover:text-[#FF6B6B] transition-all font-semibold rounded-lg mx-2 dark:text-slate-200 dark:hover:from-slate-800 dark:hover:to-slate-700">
                        <span><span className="text-lg mr-2">💼</span> Inglés para Trabajar</span>
                        <svg className="w-4 h-4 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      
                      {/* Submenú Sector Finanzas */}
                      <div className="absolute left-full top-0 pl-2 w-64 hidden group-hover/sub:block">
                        <div className="bg-white rounded-2xl shadow-coral-lg border-2 border-[#FFE8D9] py-2 dark:bg-slate-900 dark:border-slate-800">
                          <div className="px-4 py-2 text-xs font-black text-[#FF6B6B] uppercase tracking-widest border-b border-[#FFE8D9] mb-1 dark:border-slate-800">
                            Banca y Finanzas
                          </div>
                          <Link href="/cursos/trabajo/finanzas/a1/trimestre1/semana01" className="block px-4 py-2 text-sm text-gray-600 hover:text-[#FF6B6B] hover:bg-orange-50 font-medium dark:text-slate-300 dark:hover:bg-slate-800">
                            Nivel A1 (Principiante)
                          </Link>
                          <Link href="/cursos/trabajo/finanzas/a2/trimestre1/semana01" className="block px-4 py-2 text-sm text-gray-600 hover:text-[#FF6B6B] hover:bg-orange-50 font-medium dark:text-slate-300 dark:hover:bg-slate-800">
                            Nivel A2 (Elemental)
                          </Link>
                          <Link href="/cursos/trabajo/finanzas/b1/trimestre1/semana01" className="block px-4 py-2 text-sm text-gray-600 hover:text-[#FF6B6B] hover:bg-orange-50 font-medium dark:text-slate-300 dark:hover:bg-slate-800">
                            Nivel B1 (Intermedio)
                          </Link>
                          <Link href="/cursos/trabajo/finanzas/b2/trimestre1/semana01" className="block px-4 py-2 text-sm text-gray-600 hover:text-[#FF6B6B] hover:bg-orange-50 font-medium dark:text-slate-300 dark:hover:bg-slate-800">
                            Nivel B2 (Intermedio-Alto)
                          </Link>
                          <Link href="/cursos/trabajo/finanzas/c1/trimestre1/semana01" className="block px-4 py-2 text-sm text-gray-600 hover:text-[#FF6B6B] hover:bg-orange-50 font-medium dark:text-slate-300 dark:hover:bg-slate-800">
                            Nivel C1 (Avanzado)
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Link href="/cursos/viajes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#FFF4ED] hover:to-[#FFE8D9] hover:text-[#FF6B6B] transition-all font-semibold rounded-lg mx-2 whitespace-nowrap dark:text-slate-200 dark:hover:from-slate-800 dark:hover:to-slate-700">
                      <span className="text-lg mr-2">✈️</span> Inglés para Viajar
                    </Link>
                    <Link href="/cursos/examenes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#FFF4ED] hover:to-[#FFE8D9] hover:text-[#FF6B6B] transition-all font-semibold rounded-lg mx-2 whitespace-nowrap dark:text-slate-200 dark:hover:from-slate-800 dark:hover:to-slate-700">
                      <span className="text-lg mr-2">🎓</span> Preparación de Exámenes
                    </Link>
                    <div className="border-t-2 border-[#FFE8D9] my-2 mx-2 dark:border-slate-800"></div>
                    <Link href="/cursos" className="block px-4 py-3 text-sm text-[#FF6B6B] hover:bg-gradient-to-r hover:from-[#FFF4ED] hover:to-[#FFE8D9] transition-all font-black rounded-lg mx-2 dark:hover:from-slate-800 dark:hover:to-slate-700">
                      Ver todos los cursos →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/blog" className="text-sm font-bold text-gray-700 hover:text-[#FF6B6B] transition-colors dark:text-slate-200 dark:hover:text-[#FF6B6B]">
              Blog
            </Link>
            <Link href="/test-nivel" className="text-sm font-bold text-gray-700 hover:text-[#FF6B6B] transition-colors dark:text-slate-200 dark:hover:text-[#FF6B6B]">
              Test de Nivel
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-[#FFE8D9] hover:text-[#FF6B6B] transition-all dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              aria-label="Cambiar tema"
            >
              {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
            </button>

            <Link 
              href="/cuenta/login"
              className="text-sm font-bold text-gray-700 hover:text-[#FF6B6B] transition-colors dark:text-slate-200 dark:hover:text-[#FF6B6B]"
            >
              Iniciar Sesión
            </Link>
            <Link 
              href="/cuenta/registro"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-black text-sm hover:shadow-coral-lg transition-all transform hover:scale-105"
            >
              Empezar Ahora
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-200"
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
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
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
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">📚 Cursos</div>
                <div className="space-y-1">
                  <Link 
                    href="/cursos/trabajo" 
                    className="text-sm font-semibold text-slate-700 hover:text-coral-600 transition-colors pl-4 block dark:text-slate-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    💼 Inglés para Trabajar (General)
                  </Link>
                  <div className="pl-6 space-y-1 border-l-2 border-orange-100 ml-4 dark:border-slate-800">
                    <div className="text-[10px] font-black text-[#FF6B6B] uppercase tracking-tighter mb-1 opacity-70">Banca y Finanzas</div>
                    <Link href="/cursos/trabajo/finanzas/a1/trimestre1/semana01" className="block text-xs text-slate-600 dark:text-slate-400 py-1" onClick={() => setMobileMenuOpen(false)}>• Nivel A1</Link>
                    <Link href="/cursos/trabajo/finanzas/a2/trimestre1/semana01" className="block text-xs text-slate-600 dark:text-slate-400 py-1" onClick={() => setMobileMenuOpen(false)}>• Nivel A2</Link>
                    <Link href="/cursos/trabajo/finanzas/b1/trimestre1/semana01" className="block text-xs text-slate-600 dark:text-slate-400 py-1" onClick={() => setMobileMenuOpen(false)}>• Nivel B1</Link>
                    <Link href="/cursos/trabajo/finanzas/b2/trimestre1/semana01" className="block text-xs text-slate-600 dark:text-slate-400 py-1" onClick={() => setMobileMenuOpen(false)}>• Nivel B2</Link>
                    <Link href="/cursos/trabajo/finanzas/c1/trimestre1/semana01" className="block text-xs text-slate-600 dark:text-slate-400 py-1" onClick={() => setMobileMenuOpen(false)}>• Nivel C1</Link>
                  </div>
                </div>
                <Link 
                  href="/cursos/viajes" 
                  className="text-sm font-semibold text-slate-700 hover:text-coral-600 transition-colors pl-4 block dark:text-slate-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ✈️ Inglés para Viajar
                </Link>
                <Link 
                  href="/cursos/examenes" 
                  className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors pl-4 block dark:text-slate-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🎓 Preparación de Exámenes
                </Link>
              </div>
              
              <Link 
                href="/blog" 
                className="text-sm font-bold text-slate-700 hover:text-coral-600 transition-colors dark:text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/test-nivel" 
                className="text-sm font-bold text-slate-700 hover:text-coral-600 transition-colors dark:text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Test de Nivel
              </Link>
              <Link 
                href="/cuenta/login" 
                className="text-sm font-bold text-slate-700 hover:text-coral-600 transition-colors dark:text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Iniciar Sesión
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
