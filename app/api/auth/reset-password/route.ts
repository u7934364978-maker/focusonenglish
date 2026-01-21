// ============================================
// API: RESETEAR CONTRASEÑA
// Verifica token y actualiza contraseña
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';
import { sendPasswordChangedEmail } from '@/lib/email-service';


/**
 * DEPRECATED - Redirige a /api/auth/update-password
 * Mantiene compatibilidad con código legacy
 */

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/update-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': request.headers.get('authorization') || '',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
// Cliente de Supabase (solo si las variables de entorno están disponibles)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export async function POST(request: NextRequest) {
  // Si Supabase no está configurado, retornar error
  if (!supabase) {
    return NextResponse.json(
      { error: 'Service temporarily unavailable. Please try again later.' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { token, password } = body;

    // Validar datos
    if (!token || !password) {
      return NextResponse.json(
        { error: 'Token y contraseña son requeridos' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'La contraseña debe tener al menos 8 caracteres' },
        { status: 400 }
      );
    }

    // Buscar token en base de datos
    const { data: tokenData, error: tokenError } = await supabase
      .from('password_reset_tokens')
      .select('*, users(id, email, name)')
      .eq('token', token)
      .eq('used', false)
      .single();

    if (tokenError || !tokenData) {
      return NextResponse.json(
        { error: 'Token inválido o expirado' },
        { status: 400 }
      );
    }

    // Verificar si el token ha expirado
    const now = new Date();
    const expiresAt = new Date(tokenData.expires_at);

    if (now > expiresAt) {
      return NextResponse.json(
        { error: 'El token ha expirado. Solicita uno nuevo' },
        { status: 400 }
      );
    }

    // Hash de la nueva contraseña usando Web Crypto API (Edge compatible)
    const { hash: passwordHash, salt: passwordSalt } = await hashPassword(password);

    // Actualizar contraseña del usuario
    const { error: updateError } = await supabase
      .from('users')
      .update({
        password_hash: passwordHash,
        password_salt: passwordSalt,
        updated_at: new Date().toISOString(),
      })
      .eq('id', tokenData.user_id);

    if (updateError) {
      console.error('Error actualizando contraseña:', updateError);
      return NextResponse.json(
        { error: 'Error al actualizar contraseña' },
        { status: 500 }
      );
    }

    // Marcar token como usado
    await supabase
      .from('password_reset_tokens')
      .update({ used: true })
      .eq('id', tokenData.id);

    // Enviar email de confirmación
    const user = tokenData.users as any;
    await sendPasswordChangedEmail(user.email, user.name || 'Usuario');

    console.log(`✅ Contraseña actualizada para: ${user.email}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Contraseña actualizada correctamente',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en reset-password:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
