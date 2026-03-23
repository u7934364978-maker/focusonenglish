export async function getUserProfileByAuthId<T = any>(
  supabase: any,
  authUserId: string,
  columns: string = "*"
): Promise<T | null> {
  const byUserId = await supabase
    .from("user_profiles")
    .select(columns)
    .eq("user_id", authUserId)
    .maybeSingle();

  if (byUserId?.data) return byUserId.data as T;

  const byId = await supabase
    .from("user_profiles")
    .select(columns)
    .eq("id", authUserId)
    .maybeSingle();

  return (byId?.data as T) ?? null;
}

