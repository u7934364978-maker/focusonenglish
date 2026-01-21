// ============================================
// API DE REGISTRO DE USUARIOS
// Endpoint para crear nuevos usuarios
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { hashPassword } from '@/lib/edge-crypto';

// REMOVED: export const runtime = 'edge';
// bcryptjs requires Node.js runtime
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
    const { name, email, password } = body;

    // Validar datos
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Validar longitud de contraseña
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'La contraseña debe tener al menos 8 caracteres' },
        { status: 400 }
      );
    }

    // Verificar si el usuario ya existe
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'Este email ya está registrado' },
        { status: 400 }
      );
    }

    // Hash de la contraseña usando Web Crypto API (Edge compatible)
    const { hash: passwordHash, salt: passwordSalt } = await hashPassword(password);

    // Crear usuario en Supabase
    const { data: newUser, error: insertError } = await supabase
      .from('users')
      .insert({
        name,
        email: email.toLowerCase(),
        password_hash: passwordHash,
        password_salt: passwordSalt,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error creando usuario:', insertError);
      return NextResponse.json(
        { error: 'Error al crear usuario' },
        { status: 500 }
      );
    }

    // Crear perfil de usuario
    const { error: profileError } = await supabase
      .from('user_profiles')
      .insert({
        user_id: newUser.id,
        email: email.toLowerCase(),
        name,
        created_at: new Date().toISOString(),
      });

    if (profileError) {
      console.error('Error creando perfil:', profileError);
      // No retornar error, el usuario se creó correctamente
    }

    // Enviar a HubSpot (opcional)
    try {
      await fetch('https://api.hubapi.com/contacts/v1/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
        },
        body: JSON.stringify({
          properties: [
            { property: 'email', value: email },
            { property: 'firstname', value: name.split(' ')[0] },
            { property: 'lastname', value: name.split(' ').slice(1).join(' ') || '' },
            { property: 'lifecyclestage', value: 'subscriber' },
          ],
        }),
      });
    } catch (hubspotError) {
      console.error('Error enviando a HubSpot:', hubspotError);
      // No retornar error, el usuario se creó correctamente
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Usuario creado exitosamente',
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error en registro:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
