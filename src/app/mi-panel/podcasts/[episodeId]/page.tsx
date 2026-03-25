import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { Navigation } from "@/components/sections/Navigation";
import { createClient } from "@/lib/supabase/server";
import { resolveEntitlements } from "@/lib/access/entitlements";
import { getUserProfileByAuthId } from "@/lib/access/user-profile";
import { A1_EPISODES } from "@/lib/podcasts/a1-episodes";
import PodcastPlayer from "@/components/podcasts/PodcastPlayer";

interface Props {
  params: Promise<{ episodeId: string }>;
}

export default async function PodcastEpisodePage({ params }: Props) {
  const { episodeId } = await params;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect(`/cuenta/login?next=/mi-panel/podcasts/${episodeId}`);

  const profile = await getUserProfileByAuthId<{
    subscription_status?: string;
    subscription_plan?: string;
  }>(supabase, user.id, "subscription_status, subscription_plan");

  const entitlements = resolveEntitlements({
    subscriptionStatus: profile?.subscription_status,
    subscriptionPlan: profile?.subscription_plan,
  });

  if (!entitlements.podcasts) {
    redirect("/planes?reason=podcasts_requires_subscription");
  }

  const episode = A1_EPISODES.find((e) => e.id === episodeId);
  if (!episode) return notFound();

  const { data: progressRow } = await supabase
    .from("podcast_progress")
    .select("progress_seconds, completed")
    .eq("user_id", user.id)
    .eq("episode_id", episodeId)
    .maybeSingle();

  const initialProgress = progressRow?.progress_seconds ?? 0;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/mi-panel/podcasts"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 mb-6 transition"
          >
            ← Volver a Podcasts
          </Link>
          <PodcastPlayer episode={episode} initialProgress={initialProgress} />
        </div>
      </main>
    </>
  );
}
