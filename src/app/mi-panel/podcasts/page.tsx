import { redirect } from "next/navigation";
import { Navigation } from "@/components/sections/Navigation";
import { createClient } from "@/lib/supabase/server";
import { resolveEntitlements } from "@/lib/access/entitlements";
import { getUserProfileByAuthId } from "@/lib/access/user-profile";
import { A1_EPISODES } from "@/lib/podcasts/a1-episodes";
import PodcastLibrary from "@/components/podcasts/PodcastLibrary";

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

  const { data: progressRows } = await supabase
    .from("podcast_progress")
    .select("episode_id, completed")
    .eq("user_id", user.id);

  const progress: Record<string, { completed: boolean }> = {};
  for (const row of progressRows ?? []) {
    progress[row.episode_id] = { completed: row.completed };
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-black text-slate-900">Podcasts</h1>
            <p className="text-slate-500 mt-1">
              {A1_EPISODES.length} episodios · Nivel A1
            </p>
          </div>
          <PodcastLibrary episodes={A1_EPISODES} progress={progress} />
        </div>
      </main>
    </>
  );
}
