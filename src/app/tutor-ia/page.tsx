import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { resolveEntitlements } from '@/lib/access/entitlements';

const TutorIAClient = dynamic(() => import('./TutorIAClient'));

export const metadata: Metadata = {
  title: 'Tutor IA de Inglés | Practica Speaking con Avatar',
  description: 'Practica inglés hablando con un tutor de IA con avatar animado. Powered by Cloudflare AI.',
};

export default async function TutorIAPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/cuenta/login?next=/tutor-ia');
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('subscription_status, subscription_plan')
    .eq('user_id', user.id)
    .maybeSingle();

  const entitlements = resolveEntitlements({
    subscriptionStatus: profile?.subscription_status,
    subscriptionPlan: profile?.subscription_plan,
  });

  if (!entitlements.aiSpeakingFull && !entitlements.aiSpeakingLimited) {
    redirect('/planes?reason=ai_speaking_requires_subscription&next=/tutor-ia');
  }

  return <TutorIAClient />;
}
