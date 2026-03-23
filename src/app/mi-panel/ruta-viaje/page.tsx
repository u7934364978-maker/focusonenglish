import Link from "next/link";
import { redirect } from "next/navigation";
import { Navigation } from "@/components/sections/Navigation";
import { createClient } from "@/lib/supabase/server";
import { resolveEntitlements } from "@/lib/access/entitlements";
import { getUserProfileByAuthId } from "@/lib/access/user-profile";

export default async function MiPanelRutaViajePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/cuenta/login?next=/mi-panel/ruta-viaje");

  const profile = await getUserProfileByAuthId<{
    subscription_status?: string;
    subscription_plan?: string;
  }>(supabase, user.id, "subscription_status, subscription_plan");

  const entitlements = resolveEntitlements({
    subscriptionStatus: profile?.subscription_status,
    subscriptionPlan: profile?.subscription_plan,
  });

  if (!entitlements.travelTrack) {
    redirect("/planes?reason=travel_track_requires_premium&next=/mi-panel/ruta-viaje");
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h1 className="text-3xl font-black text-slate-900">Ruta Premium: Inglés para Viajar</h1>
            <p className="text-slate-600 mt-2">
              Itinerario recomendado para dominar situaciones reales en aeropuertos, hoteles, restaurantes y emergencias.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <Link href="/blog/viajes/ingles-para-viajar" className="block font-semibold text-coral-700 hover:text-coral-800">
                1) Guía base: inglés para viajar
              </Link>
              <Link href="/blog/viajes/frases-ingles-emergencias-viajes" className="block font-semibold text-coral-700 hover:text-coral-800">
                2) Frases para emergencias
              </Link>
              <Link href="/blog/viajes/vocabulario-hotel-ingles" className="block font-semibold text-coral-700 hover:text-coral-800">
                3) Vocabulario de hotel
              </Link>
            </div>
            <Link href="/mi-panel" className="inline-flex mt-6 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition">
              Volver al panel
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

