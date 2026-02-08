"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, LogOut } from "lucide-react";
import { getUser, signOut } from "@/lib/auth-helpers";

export function Navigation() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Evitar error de hidratación y verificar auth
  useEffect(() => {
    setMounted(true);
    async function checkAuth() {
      const { user } = await getUser();
      setIsLoggedIn(!!user);
    }
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await signOut();
    setIsLoggedIn(false);
    router.push("/cuenta/login");
    router.refresh();
  };

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
            
            <Link href={isLoggedIn ? "/dashboard" : "/planes"} className="text-sm font-bold text-gray-700 hover:text-[#FF6B6B] transition-colors flex items-center gap-1 dark:text-slate-200 dark:hover:text-[#FF6B6B]">
              <span className="text-lg">📚</span> Cursos
            </Link>
            
            <Link href="/blog" className="text-sm font-bold text-gray-700 hover:text-[#FF6B6B] transition-colors dark:text-slate-200 dark:hover:text-[#FF6B6B]">
              Blog
            </Link>
            <Link href="/frases-en-ingles" className="text-sm font-bold text-gray-700 hover:text-[#FF6B6B] transition-colors dark:text-slate-200 dark:hover:text-[#FF6B6B]">
              Frases
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
              href={isLoggedIn ? "/dashboard" : "/cuenta/login"}
              className="px-4 py-2 rounded-xl text-sm font-bold text-gray-700 hover:text-[#FF6B6B] border border-transparent hover:border-[#FF6B6B]/20 hover:bg-[#FF6B6B]/5 transition-all dark:text-slate-200 dark:hover:text-[#FF6B6B]"
            >
              {isLoggedIn ? 'Mi Panel' : 'Iniciar Sesión'}
            </Link>
            
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all dark:hover:bg-red-950/20"
              >
                <LogOut size={18} />
                <span>Cerrar Sesión</span>
              </button>
            )}
            {!isLoggedIn && (
              <Link 
                href="/cuenta/registro"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-black text-sm hover:shadow-coral-lg transition-all transform hover:scale-105"
              >
                Empezar Ahora
              </Link>
            )}
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
              
              <Link 
                href={isLoggedIn ? "/dashboard" : "/planes"}
                className="text-sm font-bold text-slate-700 hover:text-coral-600 transition-colors pl-4 block dark:text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                📚 Cursos
              </Link>
              
              <Link 
                href="/blog" 
                className="text-sm font-bold text-slate-700 hover:text-coral-600 transition-colors dark:text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/frases-en-ingles" 
                className="text-sm font-bold text-slate-700 hover:text-coral-600 transition-colors dark:text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Frases
              </Link>
              <Link 
                href="/test-nivel" 
                className="text-sm font-bold text-slate-700 hover:text-coral-600 transition-colors dark:text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Test de Nivel
              </Link>
              <Link 
                href={isLoggedIn ? "/dashboard" : "/cuenta/login"} 
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:text-coral-600 hover:bg-coral-50 transition-all dark:text-slate-300 dark:hover:bg-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>🔑</span> {isLoggedIn ? 'Mi Panel' : 'Iniciar Sesión'}
              </Link>

              {isLoggedIn && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all dark:text-red-400 dark:hover:bg-red-950/20 text-left w-full"
                >
                  <LogOut size={18} />
                  <span>Cerrar Sesión</span>
                </button>
              )}
              {!isLoggedIn && (
                <Link 
                  href="/cuenta/registro"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-coral-600 to-peach-600 text-white font-black text-sm text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Empezar Ahora
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
