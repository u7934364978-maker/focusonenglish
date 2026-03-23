import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getUserProfileByAuthId } from "@/lib/access/user-profile";

type PlacementPayload = {
  level?: string;
};

const VALID_LEVELS = new Set(["A1", "A2", "B1", "B2", "C1", "C2"]);

function normalizeLevel(level?: string): string | null {
  if (!level) return null;
  const upper = level.toUpperCase().trim();
  return VALID_LEVELS.has(upper) ? upper : null;
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json()) as PlacementPayload;
    const level = normalizeLevel(body.level);
    if (!level) {
      return NextResponse.json({ success: false, error: "Invalid level" }, { status: 400 });
    }

    const profile = await getUserProfileByAuthId<{ id?: string; user_id?: string; learning_goals?: string[] }>(
      supabase,
      user.id,
      "id, user_id, learning_goals"
    );

    const existingGoals = Array.isArray(profile?.learning_goals)
      ? (profile?.learning_goals as string[])
      : [];

    const mergedGoals = Array.from(new Set([...existingGoals, "placement_completed"]));

    const payload = {
      language_level: level,
      learning_goals: mergedGoals,
      updated_at: new Date().toISOString(),
    };
    let profileError: { message: string } | null = null;

    if (profile?.user_id) {
      const { error } = await supabase
        .from("user_profiles")
        .update(payload)
        .eq("user_id", profile.user_id);
      profileError = error;
    } else if (profile?.id) {
      const { error } = await supabase
        .from("user_profiles")
        .update({ ...payload, user_id: user.id })
        .eq("id", profile.id);
      profileError = error;
    } else {
      const { error } = await supabase
        .from("user_profiles")
        .insert({
          id: user.id,
          user_id: user.id,
          ...payload,
        });
      profileError = error;
    }

    if (profileError) {
      return NextResponse.json(
        { success: false, error: profileError.message },
        { status: 500 }
      );
    }

    const { error: userError } = await supabase
      .from("users")
      .update({ language_level: level, updated_at: new Date().toISOString() })
      .eq("id", user.id);

    if (userError) {
      return NextResponse.json({ success: false, error: userError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, level });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Internal error" },
      { status: 500 }
    );
  }
}

