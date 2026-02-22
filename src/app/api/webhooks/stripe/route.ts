import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';
import { sendWelcomeEmail } from '@/lib/email-service';
import crypto from 'crypto';
import { 
  syncHubSpotContact, 
  createHubSpotTicket, 
  associateTicketWithContact 
} from '@/lib/crm/hubspot';

// Inicializar Stripe solo si la clave está disponible
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-01-28.clover' as any,
    })
  : null;

export async function POST(request: NextRequest) {
  console.log('🚀 Webhook POST request received at /api/webhooks/stripe');
  
  if (!stripe) {
    return NextResponse.json({ error: 'Stripe no está configurado' }, { status: 500 });
  }

  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (error: any) {
    console.error('Webhook signature verification failed:', error.message);
    return NextResponse.json({ error: `Webhook Error: ${error.message}` }, { status: 400 });
  }

  try {
    console.log('📦 Stripe Webhook Event Received:', event.type);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('💰 Processing Checkout Session:', session.id);
      
      const customerEmail = session.customer_details?.email || session.customer_email || session.metadata?.email;
      const firstName = session.metadata?.firstName || (session.customer_details?.name || "").split(' ')[0] || '';
      const lastName = session.metadata?.lastName || (session.customer_details?.name || "").split(' ').slice(1).join(' ') || '';
      const planName = session.metadata?.planName || 'Plan Estándar';

      if (!customerEmail) {
        console.error('❌ No email found for session:', session.id);
        return NextResponse.json({ received: true });
      }

      if (supabaseAdmin) {
        try {
          const tempPassword = crypto.randomBytes(12).toString('hex') + '!';
          
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

          let userId: string | undefined;
          let generatedPassword = crypto.randomBytes(12).toString('hex') + '!';

          if (authError) {
            const errorMsg = authError.message.toLowerCase();
            if (errorMsg.includes('already') || errorMsg.includes('registered') || authError.status === 422) {
              console.log('ℹ️ User already exists, identifying...');
              
              // Intentar obtener ID por email
              const { data: userData } = await supabaseAdmin.from('users').select('id').eq('email', customerEmail).single();
              userId = userData?.id;

              if (!userId) {
                const { data: { users } } = await supabaseAdmin.auth.admin.listUsers({ perPage: 1000 });
                userId = users?.find(u => u.email?.toLowerCase() === customerEmail.toLowerCase())?.id;
              }
              
              if (userId) {
                await supabaseAdmin.auth.admin.updateUserById(userId, { password: generatedPassword });
                console.log('✅ Password updated for existing user:', userId);
              }
            } else {
              console.error('❌ Auth Error:', authError.message);
            }
          } else if (authData.user) {
            userId = authData.user.id;
            console.log('✅ User created:', userId);
          }

          if (userId) {
            // Inicializar o actualizar datos del usuario SIEMPRE
            console.log('🔄 Updating user data for:', userId);
            await Promise.all([
              supabaseAdmin.from('users').upsert({
                id: userId, 
                email: customerEmail, 
                name: `${firstName} ${lastName}`.trim(),
                language_level: session.metadata?.currentLevel?.toUpperCase() || 'A1',
                updated_at: new Date().toISOString()
              }),
              supabaseAdmin.from('user_profiles').upsert({
                user_id: userId, 
                email: customerEmail, 
                name: `${firstName} ${lastName}`.trim(),
                subscription_status: 'active', 
                subscription_plan: session.metadata?.planId || 'premium',
                subscription_start_date: new Date().toISOString()
              }),
              supabaseAdmin.from('user_stats').upsert({ user_id: userId, level: 1 }),
              supabaseAdmin.from('user_xp').upsert({ user_id: userId, total_xp: 0, level: 1, xp_to_next_level: 100 }),
              supabaseAdmin.from('user_streaks').upsert({ user_id: userId, current_streak: 0, longest_streak: 0 })
            ]);

            // Enviar email con la contraseña generada (ya sea nueva o reseteada)
            await sendWelcomeEmail({
              email: customerEmail,
              name: firstName || 'Estudiante',
              planName,
              tempPassword: generatedPassword
            });
            
            console.log('✅ Welcome email sent to:', customerEmail);
          } else {
            // Fallback si no pudimos obtener el ID
            await sendWelcomeEmail({ email: customerEmail, name: firstName || 'Estudiante', planName });
          }
        } catch (err: any) {
          console.error('❌ Supabase error:', err.message);
        }
      }

      // HubSpot integration
      try {
        console.warn(`Syncing subscription to HubSpot for: ${customerEmail}`);
        const contactId = await syncHubSpotContact({
          email: customerEmail,
          firstName,
          lastName,
          extraProperties: {
            subscription_plan: session.metadata?.planId || planName,
            subscription_status: 'active',
            lifecyclestage: 'customer',
          }
        });

        if (contactId) {
          const ticketId = await createHubSpotTicket({
            subject: `Nueva Suscripción: ${planName}`,
            content: `El usuario ha completado el pago para el plan: ${planName}.
ID de Sesión: ${session.id}
Email: ${customerEmail}
Nombre: ${firstName} ${lastName}`
          });
          
          if (ticketId) {
            await associateTicketWithContact(ticketId, contactId);
            console.log(`✅ HubSpot ticket ${ticketId} created for subscription`);
          }
        }
      } catch (err: any) {
        console.error('❌ HubSpot error:', err.message);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('❌ Webhook error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
