// ============================================
// MIDDLEWARE - SUPABASE AUTH
// Protege rutas privadas con Supabase Auth (Edge-compatible)
// ============================================

import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Rutas protegidas que requieren autenticación
  const protectedPaths = [
    '/dashboard',
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

  // Si no es una ruta protegida, continuar
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  try {
    let res = NextResponse.next({
      request: {
        headers: req.headers,
      },
    });

    // Verificar que las variables de entorno existan
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Missing Supabase environment variables');
      const redirectUrl = new URL('/cuenta/login', req.url);
      redirectUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
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

    const {
      data: { session },
    } = await supabase.auth.getSession();

    // Si la ruta está protegida y no hay sesión, redirigir a login
    if (!session) {
      const redirectUrl = new URL('/cuenta/login', req.url);
      redirectUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }

    return res;
  } catch (error) {
    console.error('Middleware error:', error);
    // En caso de error, redirigir a login de forma segura
    const redirectUrl = new URL('/cuenta/login', req.url);
    redirectUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }
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
