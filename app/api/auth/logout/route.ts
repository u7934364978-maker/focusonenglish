/**
 * Logout API Route - Supabase Auth
 * Edge Runtime Compatible
 */

import { NextRequest, NextResponse } from 'next/server';
import { createEdgeClient } from '@/lib/supabase/auth-client';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const supabase = createEdgeClient();

    // Obtener token del header
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    // Cerrar sesión
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Logout error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Sesión cerrada exitosamente',
    });

  } catch (error: any) {
    console.error('Logout exception:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
