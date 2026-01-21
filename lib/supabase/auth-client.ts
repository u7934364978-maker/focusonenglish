/**
 * Supabase Auth Client - Edge Runtime Compatible
 * Sistema de autenticación robusto y seguro para Cloudflare Pages
 */

import { createClient } from '@supabase/supabase-js';

// Cliente para uso en el navegador (public)
export function createBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Durante build time, las variables pueden no estar disponibles
    // Retornar un cliente dummy que fallará en runtime si se usa
    console.warn('Supabase environment variables not configured');
    return null as any;
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    },
  });
}

// Cliente para uso en Edge Runtime (API routes)
export function createEdgeClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

// Cliente administrativo (solo para operaciones privilegiadas)
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    // Durante build time, las variables pueden no estar disponibles
    console.warn('Supabase admin environment variables not configured');
    return null as any;
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

// Export default para compatibilidad con código existente
export const supabase = typeof window !== 'undefined' 
  ? createBrowserClient() 
  : null;

export const supabaseAdmin = typeof window === 'undefined'
  ? createAdminClient()
  : null;
