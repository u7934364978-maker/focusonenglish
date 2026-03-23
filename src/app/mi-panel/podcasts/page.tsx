import Link from "next/link";
import { redirect } from "next/navigation";
import { Navigation } from "@/components/sections/Navigation";
import { createClient } from "@/lib/supabase/server";
import { resolveEntitlements } from "@/lib/access/entitlements";
import { getUserProfileByAuthId } from "@/lib/access/user-profile";

export default async function MiPanelPodcastsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/cuenta/login?next=/mi-panel/podcasts");

  const profile = await getUserProfileByAuthId<{
    subscription_status?: string;
    subscription_plan?: string;
  }>(supabase, user.id, "subscription_status, subscription_plan");

  const entitlements = resolveEntitlements({
    subscriptionStatus: profile?.subscription_status,
    subscriptionPlan: profile?.subscription_plan,
  });

  if (!entitlements.podcasts) {
    redirect("/planes?reason=podcasts_requires_subscription&next=/mi-panel/podcasts");
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h1 className="text-3xl font-black text-slate-900">Podcasts</h1>
            <p className="text-slate-600 mt-2">
              Estamos preparando una biblioteca de podcasts graduados por nivel y tema.
            </p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2">
              <li>• Episodios por nivel CEFR (A1-C2)</li>
              <li>• Vocabulario clave por episodio</li>
              <li>• Preguntas de comprensión y resumen guiado</li>
            </ul>
            <Link href="/mi-panel" className="inline-flex mt-6 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition">
              Volver al panel
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

