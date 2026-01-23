// ============================================
// MIDDLEWARE - SUPABASE AUTH + SUBSCRIPTION CHECK
// Protege rutas privadas con Supabase Auth y verifica suscripción activa
// ============================================

import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const PUBLIC_ROUTES = new Set([
  '/',
  '/contacto',
  '/cursos',
  '/planes',
  '/signin',
  '/signup',
  '/cuenta/login',
  '/cuenta/registro',
  '/cuenta/recuperar',
  '/reset-password',
  '/success',
]);

// Rutas que requieren autenticación pero NO requieren suscripción
const AUTH_ONLY_ROUTES = new Set([
  '/profile',
  '/dashboard',
]);

function isBlogRoute(pathname: string): boolean {
  return pathname === '/blog' || pathname.startsWith('/blog/');
}

function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.has(pathname) || isBlogRoute(pathname) || pathname.startsWith('/api/webhooks');
}

function requiresAuthOnly(pathname: string): boolean {
  return AUTH_ONLY_ROUTES.has(pathname);
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Permitir rutas públicas
  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Verificar autenticación
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    const url = request.nextUrl.clone();
    url.pathname = '/cuenta/login';
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }

  // Si solo requiere autenticación (no suscripción), permitir acceso
  if (requiresAuthOnly(pathname)) {
    return response;
  }

  // Verificar suscripción activa para rutas premium
  if (pathname.startsWith('/curso-') || pathname.startsWith('/aula') || pathname.startsWith('/practica')) {
    // Obtener perfil del usuario con información de suscripción
    const { data: profile } = await supabase
      .from('users')
      .select('subscription_status, subscription_end_date')
      .eq('id', user.id)
      .single();

    // Verificar si tiene suscripción activa
    const hasActiveSubscription = profile?.subscription_status === 'active' && 
      (!profile?.subscription_end_date || new Date(profile.subscription_end_date) > new Date());

    if (!hasActiveSubscription) {
      // Redirigir a página de planes si no tiene suscripción activa
      const url = request.nextUrl.clone();
      url.pathname = '/planes';
      url.searchParams.set('required', 'true');
      url.searchParams.set('next', pathname);
      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
