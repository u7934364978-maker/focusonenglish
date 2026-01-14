import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    // Verificar que el evento viene de Stripe
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    console.error('Webhook signature verification failed:', error.message);
    return NextResponse.json(
      { error: `Webhook Error: ${error.message}` },
      { status: 400 }
    );
  }

  // Manejar el evento
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        console.log('✅ Payment successful!');
        console.log('Session ID:', session.id);
        console.log('Customer Email:', session.customer_email);
        console.log('Amount Total:', session.amount_total);
        console.log('Metadata:', session.metadata);

        // Aquí puedes:
        // 1. Guardar en base de datos
        // 2. Enviar email de confirmación al estudiante
        // 3. Crear acceso al curso en tu plataforma
        // 4. Actualizar HubSpot con el estado de pago
        // 5. Enviar notificación al equipo

        // Ejemplo de actualización a HubSpot
        if (session.metadata && session.customer_email) {
          try {
            await fetch(`${process.env.HUBSPOT_API_URL}/crm/v3/objects/contacts`, {
              method: 'PATCH',
              headers: {
                'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                properties: {
                  email: session.customer_email,
                  payment_status: 'paid',
                  course_purchased: session.metadata.courseLevel,
                  purchase_date: new Date().toISOString(),
                  stripe_session_id: session.id,
                }
              })
            });
            console.log('✅ HubSpot updated');
          } catch (hubspotError) {
            console.error('Error updating HubSpot:', hubspotError);
            // No fallar el webhook si HubSpot falla
          }
        }

        // TODO: Implementar tu lógica de negocio aquí
        // Por ejemplo:
        // - await createCourseAccess(session.metadata.email, session.metadata.courseLevel);
        // - await sendWelcomeEmail(session.customer_email, session.metadata);
        
        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('⏰ Checkout session expired:', session.id);
        // Opcional: notificar al usuario o limpiar datos temporales
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('💰 Payment intent succeeded:', paymentIntent.id);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('❌ Payment failed:', paymentIntent.id);
        // TODO: Notificar al usuario del fallo
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true, type: event.type });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

// Configuración importante para webhooks de Stripe
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
