// API Route para verificar configuración (SOLO PARA DEBUG)
// Eliminar en producción

import { NextResponse } from 'next/server';


export const runtime = 'edge';
export async function GET() {
  const config = {
    supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    supabaseServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    nextAuthUrl: !!process.env.NEXTAUTH_URL,
    nextAuthSecret: !!process.env.NEXTAUTH_SECRET,
    nodeEnv: process.env.NODE_ENV,
  };

  return NextResponse.json({
    message: 'Environment Check',
    config,
    timestamp: new Date().toISOString(),
  });
}
