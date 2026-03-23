export type PlanTier = "free" | "basic" | "premium";

export type UserEntitlements = {
  isPaid: boolean;
  tier: PlanTier;
  officialCourses: boolean;
  travelTrack: boolean;
  professionalTrack: boolean;
  aiSpeakingFull: boolean;
  aiSpeakingLimited: boolean;
  podcasts: boolean;
  readings: boolean;
  vocabulary: boolean;
};

export function getPlanTier(plan: string | null | undefined, isPaid: boolean): PlanTier {
  if (!isPaid) return "free";
  const normalized = String(plan || "").toLowerCase();
  if (normalized.includes("premium")) return "premium";
  if (normalized.includes("basic")) return "basic";
  return "free";
}

export function resolveEntitlements(params: {
  subscriptionStatus?: string | null;
  subscriptionPlan?: string | null;
}): UserEntitlements {
  const status = String(params.subscriptionStatus || "").toLowerCase();
  const isPaid = status === "active" || status === "trialing";
  const tier = getPlanTier(params.subscriptionPlan, isPaid);

  return {
    isPaid,
    tier,
    officialCourses: isPaid,
    travelTrack: isPaid && tier === "premium",
    professionalTrack: isPaid && tier === "premium",
    aiSpeakingFull: isPaid && tier === "premium",
    aiSpeakingLimited: isPaid && tier === "basic",
    podcasts: isPaid,
    readings: isPaid,
    vocabulary: isPaid,
  };
}

