import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';
import { createHubSpotContact } from '@/lib/crm/hubspot';
import { signupSchema } from '@/lib/validations/signup';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = signupSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const { fullName, email, phone, courseInterest, currentLevel, message } = validationResult.data;

    // Split full name into first and last name
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    // 1. Store in Supabase database
    const { data: userData, error: dbError } = await supabaseAdmin
      .from('signups')
      .insert([
        {
          full_name: fullName,
          email: email,
          phone: phone || null,
          course_interest: courseInterest,
          current_level: currentLevel || null,
          message: message || null,
          created_at: new Date().toISOString(),
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      
      // Check if it's a duplicate email error
      if (dbError.code === '23505') {
        return NextResponse.json(
          { error: 'Este email ya está registrado' },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: 'Error al guardar los datos. Por favor intenta de nuevo.' },
        { status: 500 }
      );
    }

    // 2. Create contact in HubSpot CRM
    const hubspotResult = await createHubSpotContact({
      email,
      firstname: firstName,
      lastname: lastName,
      phone: phone || undefined,
      course_interest: courseInterest,
      current_level: currentLevel || undefined,
      message: message || undefined,
    });

    // Log CRM integration result but don't fail the request if CRM fails
    if (!hubspotResult.success) {
      console.warn('HubSpot integration warning:', hubspotResult.error);
    }

    // 3. Send success response
    return NextResponse.json(
      {
        success: true,
        message: 'Registro exitoso',
        data: {
          id: userData.id,
          email: userData.email,
          courseInterest: userData.course_interest,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor. Por favor intenta de nuevo.' },
      { status: 500 }
    );
  }
}
