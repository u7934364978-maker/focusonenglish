// ============================================
// API: SOLICITAR RECUPERACIÓN DE CONTRASEÑA
// Genera token y envía email de recuperación
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import { sendPasswordResetEmail } from '@/lib/email-service';

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
    const { email } = body;

    // Validar email
    if (!email) {
      return NextResponse.json(
        { error: 'Email es requerido' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Buscar usuario
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('id, email, name')
      .eq('email', email.toLowerCase())
      .single();

    // IMPORTANTE: Por seguridad, siempre retornar éxito aunque el usuario no exista
    // Esto previene que atacantes descubran qué emails están registrados
    if (userError || !user) {
      console.log(`⚠️ Usuario no encontrado: ${email}`);
      return NextResponse.json(
        {
          success: true,
          message: 'Si el email existe, recibirás instrucciones para recuperar tu contraseña',
        },
        { status: 200 }
      );
    }

    // Generar token único y seguro
    const resetToken = crypto.randomBytes(32).toString('hex');
    
    // Token expira en 1 hora
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);

    // Guardar token en base de datos
    const { error: tokenError } = await supabase
      .from('password_reset_tokens')
      .insert({
        user_id: user.id,
        token: resetToken,
        expires_at: expiresAt.toISOString(),
        used: false,
      });

    if (tokenError) {
      console.error('Error guardando token:', tokenError);
      return NextResponse.json(
        { error: 'Error al procesar solicitud' },
        { status: 500 }
      );
    }

    // Enviar email
    const emailSent = await sendPasswordResetEmail(
      user.email,
      resetToken,
      user.name || 'Usuario'
    );

    if (!emailSent) {
      console.error('❌ Error enviando email de recuperación');
      // No retornar error al usuario por seguridad
    } else {
      console.log(`✅ Email de recuperación enviado a: ${user.email}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Si el email existe, recibirás instrucciones para recuperar tu contraseña',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en forgot-password:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
