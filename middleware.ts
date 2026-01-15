// ============================================
// MIDDLEWARE - PROTECCIÓN DE RUTAS
// Protege rutas privadas y redirige a login si no está autenticado
// ============================================

import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Rutas que requieren autenticación
    const protectedPaths = [
      '/dashboard',
      '/curso-b2',
      '/profile',
      '/settings',
      '/certificados',
    ];

    // Rutas que requieren suscripción activa
    const subscriptionPaths = [
      '/curso-b2/leccion',
    ];

    // Si la ruta está protegida y no hay token, redirigir a login
    if (protectedPaths.some(p => path.startsWith(p)) && !token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Si la ruta requiere suscripción, verificar
    if (subscriptionPaths.some(p => path.startsWith(p))) {
      // TODO: Verificar si el usuario tiene suscripción activa
      // Aquí se integraría con Stripe para verificar el estado de la suscripción
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Por defecto, permitir acceso si hay token
        return true;
      },
    },
  }
);

// Configurar matcher para aplicar middleware solo a rutas específicas
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/curso-b2/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/certificados/:path*',
  ],
};
