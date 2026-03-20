import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-01-28.clover' as any,
    })
  : null;

export async function GET(request: Request) {
  try {
    if (!stripe) {
      return NextResponse.redirect(new URL('/mi-panel?billing=not-configured', request.url), 303);
    }

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.email) {
      return NextResponse.redirect(new URL('/cuenta/login?next=/mi-panel', request.url), 303);
    }

    const customers = await stripe.customers.list({
      email: user.email,
      limit: 1,
    });
    const customer = customers.data?.[0];

    if (!customer) {
      return NextResponse.redirect(new URL('/mi-panel?billing=no-customer', request.url), 303);
    }

    const returnUrl = `${process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin}/mi-panel`;
    const portal = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: returnUrl,
    });

    return NextResponse.redirect(portal.url, 303);
  } catch (error) {
    console.error('[stripe/customer-portal] error', error);
    return NextResponse.redirect(new URL('/mi-panel?billing=error', request.url), 303);
  }
}

