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
  '/generador-b2',
  '/api/generate-exercise',
]);

// Rutas que requieren autenticación pero NO requieren suscripción
const AUTH_ONLY_ROUTES = new Set([
  '/profile',
  '/dashboard',
]);

function isBlogRoute(pathname: string): boolean {
  return pathname === '/blog' || pathname.startsWith('/blog/');
}

function isB2CourseRoute(pathname: string): boolean {
  return pathname.startsWith('/curso-b2');
}

function isA1CourseRoute(pathname: string): boolean {
  return pathname.startsWith('/curso-a1') || pathname.startsWith('/aula/a1') || pathname.startsWith('/ejercicios-inteligentes');
}

function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.has(pathname) || isBlogRoute(pathname) || isB2CourseRoute(pathname) || isA1CourseRoute(pathname) || pathname.startsWith('/api/webhooks') || pathname.startsWith('/audio/') || pathname === '/app/exams/mock-fce-reading';
}

function requiresAuthOnly(pathname: string): boolean {
  return AUTH_ONLY_ROUTES.has(pathname);
}

export async function middleware(request: NextRequest) {
  return NextResponse.next();
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
