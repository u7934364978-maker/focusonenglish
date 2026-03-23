import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

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

    const { data: profile } = await supabase
      .from("user_profiles")
      .select("learning_goals")
      .eq("user_id", user.id)
      .maybeSingle();

    const currentGoals = Array.isArray(profile?.learning_goals)
      ? (profile?.learning_goals as string[])
      : [];

    const nonGoalValues = currentGoals.filter(
      (g) => g !== "general" && g !== "travel" && g !== "professional"
    );

    const nextGoals = [...nonGoalValues, goal];

    const { error } = await supabase
      .from("user_profiles")
      .upsert(
        {
          user_id: user.id,
          learning_goals: nextGoals,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, goal });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Internal error" },
      { status: 500 }
    );
  }
}

