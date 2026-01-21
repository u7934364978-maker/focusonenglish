// ============================================
// DEPRECATED - NEXTAUTH ROUTE
// Redirige a nuevo sistema de autenticación con Supabase Auth
// ============================================

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// Todas las peticiones a NextAuth se redirigen al nuevo sistema
export async function GET(request: NextRequest) {
  return NextResponse.json(
    { 
      error: 'NextAuth deprecado. Usa las nuevas rutas de autenticación.',
      newRoutes: {
        login: '/api/auth/login',
        signup: '/api/auth/signup',
        logout: '/api/auth/logout',
        me: '/api/auth/me',
      }
    },
    { status: 410 } // 410 Gone
  );
}

export { GET as POST };
