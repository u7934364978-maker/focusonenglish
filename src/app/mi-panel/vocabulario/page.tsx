import Link from "next/link";
import { redirect } from "next/navigation";
import { Navigation } from "@/components/sections/Navigation";
import { createClient } from "@/lib/supabase/server";
import { resolveEntitlements } from "@/lib/access/entitlements";

export default async function MiPanelVocabularioPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/cuenta/login?next=/mi-panel/vocabulario");

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("subscription_status, subscription_plan")
    .eq("user_id", user.id)
    .maybeSingle();

  const entitlements = resolveEntitlements({
    subscriptionStatus: profile?.subscription_status,
    subscriptionPlan: profile?.subscription_plan,
  });

  if (!entitlements.vocabulary) {
    redirect("/planes?reason=vocabulario_requires_subscription&next=/mi-panel/vocabulario");
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h1 className="text-3xl font-black text-slate-900">Vocabulario</h1>
            <p className="text-slate-600 mt-2">
              Esta sección reunirá listas activas, repaso espaciado y práctica contextual por objetivos.
            </p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2">
              <li>• Listas por nivel y contexto (trabajo, viajes, vida diaria)</li>
              <li>• Repaso inteligente con repetición espaciada</li>
              <li>• Integración con speaking y writing</li>
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

