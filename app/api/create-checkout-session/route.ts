import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

// Precios de los cursos en centavos (€)
const COURSE_PRICES: Record<string, number> = {
  'A1': 29900, // €299.00
  'A2': 34900, // €349.00
  'B1': 39900, // €399.00
  'B2': 44900, // €449.00
  'C1': 49900, // €499.00
  'C2': 54900, // €549.00
};

const COURSE_NAMES: Record<string, string> = {
  'A1': 'Nivel Principiante',
  'A2': 'Nivel Elemental',
  'B1': 'Nivel Intermedio',
  'B2': 'Nivel Intermedio-Alto',
  'C1': 'Nivel Avanzado',
  'C2': 'Nivel Maestría',
};

const COURSE_DURATIONS: Record<string, string> = {
  'A1': '8 semanas',
  'A2': '10 semanas',
  'B1': '12 semanas',
  'B2': '14 semanas',
  'C1': '16 semanas',
  'C2': '18 semanas',
};

export async function POST(request: NextRequest) {
  try {
    const { courseLevel, email, firstName, lastName, phone } = await request.json();

    // Validar que el nivel de curso existe
    if (!COURSE_PRICES[courseLevel]) {
      return NextResponse.json(
        { error: 'Nivel de curso inválido' },
        { status: 400 }
      );
    }

    // Crear sesión de checkout en Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `Curso de Inglés ${courseLevel} - ${COURSE_NAMES[courseLevel]}`,
              description: `${COURSE_DURATIONS[courseLevel]} - Incluye acceso completo a la plataforma, materiales didácticos, seguimiento personalizado y certificado oficial.`,
              images: ['https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800'],
            },
            unit_amount: COURSE_PRICES[courseLevel],
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/signup?canceled=true`,
      customer_email: email,
      metadata: {
        courseLevel,
        courseName: COURSE_NAMES[courseLevel],
        firstName,
        lastName,
        phone: phone || '',
        email,
      },
      // Configurar el formulario de billing
      billing_address_collection: 'required',
      // Permitir códigos promocionales
      allow_promotion_codes: true,
    });

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'Error al crear sesión de pago' },
      { status: 500 }
    );
  }
}
