import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { SUBSCRIPTION_PLANS, getPlanById } from '@/lib/subscription-plans';
import { getStripePriceId } from '@/lib/stripe-config';

// Inicializar Stripe solo si la clave está disponible (evita errores en build time)
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-12-18.acacia',
    })
  : null;

export async function POST(request: NextRequest) {
  try {
    // Verificar que Stripe esté inicializado
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe no está configurado. Por favor, contacta al administrador.' },
        { status: 500 }
      );
    }

    const { planId, email, firstName, lastName, phone } = await request.json();

    // Validar que el plan existe
    const plan = getPlanById(planId);
    if (!plan) {
      return NextResponse.json(
        { error: 'Plan de suscripción inválido' },
        { status: 400 }
      );
    }

    // Obtener Price ID de Stripe (si está configurado)
    const stripePriceId = getStripePriceId(planId);
    
    // Crear line_items dependiendo si hay Price ID configurado o no
    const lineItems = stripePriceId
      ? [
          {
            price: stripePriceId, // Usar Price ID predefinido
            quantity: 1,
          },
        ]
      : [
          {
            // Fallback: crear precio dinámicamente si no hay Price ID configurado
            price_data: {
              currency: plan.currency,
              product_data: {
                name: `Focus English - ${plan.name}`,
                description: `Plan ${plan.name} - ${plan.features[0]}`,
              },
              unit_amount: plan.price,
              recurring: {
                interval: plan.interval,
              },
            },
            quantity: 1,
          },
        ];

    // Crear sesión de checkout en Stripe para suscripción
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'subscription', // Cambio clave: de 'payment' a 'subscription'
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/planes?canceled=true`,
      customer_email: email,
      metadata: {
        planId,
        planName: plan.name,
        firstName,
        lastName,
        phone: phone || '',
        email,
      },
      // Configurar el formulario de billing
      billing_address_collection: 'required',
      // Permitir códigos promocionales
      allow_promotion_codes: true,
      // Configurar período de prueba si es necesario (opcional)
      // subscription_data: {
      //   trial_period_days: 7,
      // },
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
