// ============================================
// MIDDLEWARE - SUPABASE AUTH
// Protege rutas privadas con Supabase Auth (Edge-compatible)
// TEMPORALMENTE DESHABILITADO para diagnóstico
// ============================================

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Temporalmente deshabilitado - permitir todo el tráfico
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Temporalmente sin rutas para diagnóstico
  ],
};
