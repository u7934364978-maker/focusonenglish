import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';
import { sendWelcomeEmail } from '@/lib/email-service';
import crypto from 'crypto';

// Inicializar Stripe solo si la clave está disponible (evita errores en build time)
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-01-28.clover' as any,
    })
  : null;

export async function POST(request: NextRequest) {
  // Verificar que Stripe esté inicializado
  if (!stripe) {
    return NextResponse.json(
      { error: 'Stripe no está configurado' },
      { status: 500 }
    );
  }

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
        const customerEmail = session.customer_email || session.metadata?.email;
        const firstName = session.metadata?.firstName || '';
        const lastName = session.metadata?.lastName || '';
        const planName = session.metadata?.planName || 'Plan Estándar';

        // 1. Crear usuario en Supabase Auth si no existe
        if (customerEmail && supabaseAdmin) {
          try {
            // Generar una contraseña temporal segura
            const tempPassword = crypto.randomBytes(12).toString('hex') + '!';
            
            // Intentar crear el usuario
            const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
              email: customerEmail,
              password: tempPassword,
              email_confirm: true,
              user_metadata: {
                full_name: `${firstName} ${lastName}`.trim(),
                first_name: firstName,
                last_name: lastName,
              }
            });

            if (authError) {
              if (authError.message.includes('already registered')) {
                console.log('ℹ️ User already exists in Supabase Auth');
                
                // Si el usuario ya existe, intentar obtener su ID para enviar el email de todos modos
                const { data: existingUser } = await supabaseAdmin.auth.admin.listUsers();
                const user = existingUser.users.find(u => u.email === customerEmail);
                
                if (user) {
                  // Enviar email de bienvenida incluso si ya existía (quizás es una nueva suscripción)
                  await sendWelcomeEmail({
                    email: customerEmail,
                    name: firstName || user.user_metadata?.first_name || 'Estudiante',
                    planName: planName,
                    // No enviamos password si ya existía
                  });
                  console.log('✅ Welcome email sent to existing user');
                }
              } else {
                console.error('❌ Error creating Supabase Auth user:', authError.message);
              }
            } else if (authData.user) {
              const userId = authData.user.id;
              console.log('✅ Supabase Auth user created:', userId);

              // 2. Inicializar tablas públicas y gamificación
              await Promise.all([
                // Tabla pública de usuarios
                supabaseAdmin.from('users').upsert({
                  id: userId,
                  email: customerEmail,
                  name: `${firstName} ${lastName}`.trim(),
                  language_level: session.metadata?.currentLevel?.toUpperCase() || 'A1',
                  updated_at: new Date().toISOString()
                }),
                // Perfil extendido
                supabaseAdmin.from('user_profiles').upsert({
                  user_id: userId,
                  email: customerEmail,
                  name: `${firstName} ${lastName}`.trim(),
                  subscription_status: 'active',
                  subscription_plan: session.metadata?.planId || 'premium',
                  subscription_start_date: new Date().toISOString()
                }),
                // Estadísticas básicas
                supabaseAdmin.from('user_stats').upsert({
                  user_id: userId,
                  total_lessons_completed: 0,
                  total_exercises_completed: 0,
                  total_study_time_minutes: 0,
                  current_streak_days: 0,
                  level: 1
                }),
                // Gamificación: XP
                supabaseAdmin.from('user_xp').upsert({
                  user_id: userId,
                  total_xp: 0,
                  level: 1,
                  xp_to_next_level: 100
                }),
                // Gamificación: Streaks
                supabaseAdmin.from('user_streaks').upsert({
                  user_id: userId,
                  current_streak: 0,
                  longest_streak: 0,
                  last_activity_date: new Date().toISOString().split('T')[0]
                })
              ]);
              console.log('✅ User profile and gamification initialized');

              // 3. Enviar email de bienvenida con la contraseña temporal
              await sendWelcomeEmail({
                email: customerEmail,
                name: firstName,
                planName: planName,
                tempPassword: tempPassword
              });
              console.log('✅ Welcome email sent');
            }
          } catch (supabaseError: any) {
            console.error('❌ Unexpected error in Supabase integration:', supabaseError.message);
          }
        }

        // Integración completa con HubSpot
        if (session.metadata && session.customer_email) {
          try {
            // 1. Crear o actualizar contacto en HubSpot
            const hubspotContact = {
              properties: {
                email: session.customer_email,
                firstname: session.metadata.firstName || '',
                lastname: session.metadata.lastName || '',
                phone: session.metadata.phone || '',
                
                // Información de la suscripción
                subscription_plan: session.metadata.planId || session.metadata.planName,
                subscription_status: 'active',
                payment_status: 'paid',
                
                // Información del pago
                stripe_customer_id: session.customer as string,
                stripe_session_id: session.id,
                subscription_start_date: new Date().toISOString(),
                last_payment_date: new Date().toISOString(),
                last_payment_amount: (session.amount_total || 0) / 100,
                
                // Información del curso
                current_level: session.metadata.currentLevel || 'unknown',
                
                // Lifecycle stage
                lifecyclestage: 'customer',
              }
            };

            // Crear/actualizar contacto en HubSpot
            const hubspotResponse = await fetch(
              `https://api.hubapi.com/crm/v3/objects/contacts`,
              {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(hubspotContact)
              }
            );

            if (hubspotResponse.ok) {
              console.log('✅ HubSpot contact created/updated');
              
              // 2. Registrar evento de compra en HubSpot
              const contactData = await hubspotResponse.json();
              const contactId = contactData.id;
              
              // Crear engagement/nota en HubSpot
              const engagement = {
                engagement: {
                  active: true,
                  type: 'NOTE',
                  timestamp: Date.now()
                },
                associations: {
                  contactIds: [contactId]
                },
                metadata: {
                  body: `Nueva suscripción completada:\n\n` +
                        `Plan: ${session.metadata.planName}\n` +
                        `Monto: €${(session.amount_total || 0) / 100}\n` +
                        `Stripe Session: ${session.id}\n` +
                        `Fecha: ${new Date().toLocaleString('es-ES')}`
                }
              };

              await fetch(
                `https://api.hubapi.com/engagements/v1/engagements`,
                {
                  method: 'POST',
                  headers: {
                    'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(engagement)
                }
              );

              console.log('✅ HubSpot engagement created');

            } else {
              // Si falla POST (contacto ya existe), intentar PATCH
              const emailEncoded = encodeURIComponent(session.customer_email);
              const updateResponse = await fetch(
                `https://api.hubapi.com/crm/v3/objects/contacts/${emailEncoded}?idProperty=email`,
                {
                  method: 'PATCH',
                  headers: {
                    'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(hubspotContact)
                }
              );
              
              if (updateResponse.ok) {
                console.log('✅ HubSpot contact updated (already existed)');
              }
            }
            
          } catch (hubspotError: any) {
            console.error('Error updating HubSpot:', hubspotError.message);
            // No fallar el webhook si HubSpot falla
          }
        }
        
        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('⏰ Checkout session expired:', session.id);
        // Opcional: notificar al usuario o limpiar datos temporales
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log('🔄 Subscription updated:', subscription.id);
        
        // Actualizar estado de suscripción en HubSpot
        if (subscription.customer) {
          try {
            const customer = await stripe.customers.retrieve(subscription.customer as string) as Stripe.Customer;
            
            if (customer.email) {
              const emailEncoded = encodeURIComponent(customer.email);
              await fetch(
                `https://api.hubapi.com/crm/v3/objects/contacts/${emailEncoded}?idProperty=email`,
                {
                  method: 'PATCH',
                  headers: {
                    'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    properties: {
                      subscription_status: subscription.status,
                      subscription_current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
                    }
                  })
                }
              );
              console.log('✅ HubSpot updated - subscription status');
            }
          } catch (error: any) {
            console.error('Error updating subscription in HubSpot:', error.message);
          }
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log('❌ Subscription cancelled:', subscription.id);
        
        // Actualizar estado de cancelación en HubSpot
        if (subscription.customer) {
          try {
            const customer = await stripe.customers.retrieve(subscription.customer as string) as Stripe.Customer;
            
            if (customer.email) {
              const emailEncoded = encodeURIComponent(customer.email);
              await fetch(
                `https://api.hubapi.com/crm/v3/objects/contacts/${emailEncoded}?idProperty=email`,
                {
                  method: 'PATCH',
                  headers: {
                    'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    properties: {
                      subscription_status: 'cancelled',
                      subscription_cancellation_date: new Date().toISOString(),
                      lifecyclestage: 'customer', // Mantener como customer pero inactivo
                    }
                  })
                }
              );
              console.log('✅ HubSpot updated - subscription cancelled');
            }
          } catch (error: any) {
            console.error('Error updating cancellation in HubSpot:', error.message);
          }
        }
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('❌ Payment failed:', paymentIntent.id);
        
        // Registrar fallo de pago en HubSpot
        if (paymentIntent.customer) {
          try {
            const customer = await stripe.customers.retrieve(paymentIntent.customer as string) as Stripe.Customer;
            
            if (customer.email) {
              const emailEncoded = encodeURIComponent(customer.email);
              await fetch(
                `https://api.hubapi.com/crm/v3/objects/contacts/${emailEncoded}?idProperty=email`,
                {
                  method: 'PATCH',
                  headers: {
                    'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    properties: {
                      last_payment_status: 'failed',
                      last_payment_failure_date: new Date().toISOString(),
                    }
                  })
                }
              );
              console.log('✅ HubSpot updated - payment failed');
            }
          } catch (error: any) {
            console.error('Error updating payment failure in HubSpot:', error.message);
          }
        }
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
export const dynamic = 'force-dynamic';
