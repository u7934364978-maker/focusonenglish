// ============================================
// MIDDLEWARE - SUPABASE AUTH
// Protege rutas privadas con Supabase Auth (Edge-compatible)
// TEMPORALMENTE DESHABILITADO para evitar timeouts en Cloudflare Pages
// ============================================

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
