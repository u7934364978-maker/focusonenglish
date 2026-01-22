// ============================================
// MIDDLEWARE - SUPABASE AUTH
// Protege rutas privadas con Supabase Auth (Edge-compatible)
// ============================================

import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  let res = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  // Solo crear cliente Supabase si las variables están configuradas
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  let supabase = null;
  if (supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('your-project') && !supabaseAnonKey.includes('your-anon-key')) {
    supabase = createServerClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          get(name: string) {
            return req.cookies.get(name)?.value;
          },
          set(name: string, value: string, options: any) {
            req.cookies.set({
              name,
              value,
              ...options,
            });
            res = NextResponse.next({
              request: {
                headers: req.headers,
              },
            });
            res.cookies.set({
              name,
              value,
              ...options,
            });
          },
          remove(name: string, options: any) {
            req.cookies.set({
              name,
              value: '',
              ...options,
            });
            res = NextResponse.next({
              request: {
                headers: req.headers,
              },
            });
            res.cookies.set({
              name,
              value: '',
              ...options,
            });
          },
        },
      }
    );
  }

  // Obtener sesión solo si Supabase está configurado
  let session = null;
  if (supabase) {
    const {
      data: { session: userSession },
    } = await supabase.auth.getSession();
    session = userSession;
  }

  // Rutas protegidas que requieren autenticación
  const protectedPaths = [
    // '/dashboard', // Temporalmente deshabilitado para desarrollo
    '/estudiante',
    '/curso-b2',
    '/profile',
    '/settings',
    '/certificados',
    '/practica',
    '/aula',
  ];

  const isProtectedRoute = protectedPaths.some(path =>
    req.nextUrl.pathname.startsWith(path)
  );

  // Si la ruta está protegida y no hay sesión (solo si Supabase está configurado), redirigir a login
  if (isProtectedRoute && supabase && !session) {
    const redirectUrl = new URL('/cuenta/login', req.url);
    redirectUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/estudiante/:path*',
    '/curso-b2/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/certificados/:path*',
    '/practica/:path*',
    '/aula/:path*',
  ],
};
