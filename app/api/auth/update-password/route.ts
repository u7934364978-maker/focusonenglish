/**
 * Password Update API Route - Supabase Auth
 * Edge Runtime Compatible
 */

import { NextRequest, NextResponse } from 'next/server';
import { createEdgeClient } from '@/lib/supabase/auth-client';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { newPassword } = await request.json();

    // Validación
    if (!newPassword) {
      return NextResponse.json(
        { error: 'Nueva contraseña es requerida' },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: 'La contraseña debe tener al menos 8 caracteres' },
        { status: 400 }
      );
    }

    const supabase = createEdgeClient();

    // Actualizar contraseña
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      console.error('Password update error:', error);
      return NextResponse.json(
        { error: error.message || 'Error al actualizar contraseña' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Contraseña actualizada exitosamente',
      user: data.user,
    });

  } catch (error: any) {
    console.error('Password update exception:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
