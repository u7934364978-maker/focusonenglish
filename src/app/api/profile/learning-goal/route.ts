import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getUserProfileByAuthId } from "@/lib/access/user-profile";

const ALLOWED_GOALS = new Set(["general", "travel", "professional"]);

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json()) as { goal?: string };
    const goal = String(body.goal || "").trim().toLowerCase();
    if (!ALLOWED_GOALS.has(goal)) {
      return NextResponse.json({ success: false, error: "Invalid goal" }, { status: 400 });
    }

    const profile = await getUserProfileByAuthId<any>(supabase, user.id, "id,user_id,learning_goals");

    const currentGoals = Array.isArray(profile?.learning_goals)
      ? (profile?.learning_goals as string[])
      : [];

    const nonGoalValues = currentGoals.filter(
      (g) => g !== "general" && g !== "travel" && g !== "professional"
    );

    const nextGoals = [...nonGoalValues, goal];

    const payload = {
      user_id: user.id,
      learning_goals: nextGoals,
      updated_at: new Date().toISOString(),
    };

    const { error: upsertByUserIdError } = await supabase
      .from("user_profiles")
      .upsert(
        payload,
        { onConflict: "user_id" }
      );

    if (upsertByUserIdError) {
      const { error: upsertByIdError } = await supabase
        .from("user_profiles")
        .upsert(
          {
            id: user.id,
            ...payload,
          },
          { onConflict: "id" }
        );
      if (upsertByIdError) {
        return NextResponse.json({ success: false, error: upsertByIdError.message }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true, goal });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Internal error" },
      { status: 500 }
    );
  }
}

