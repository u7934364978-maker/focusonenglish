import type { ProgressState } from "./types";

// Anti-tamper básico (MVP):
// - detecta manipulación casual, no es seguridad real (el secreto vive en frontend).
const PEPPER = "focus-english-mvp-local-progress-v1";

function key(goal: string, level: string, weekId: string) {
  return `focusenglish:progress:${goal}:${level}:${weekId}`;
}

async function sha256(text: string) {
  const enc = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function loadProgress(goal: string, level: string, weekId: string): Promise<ProgressState> {
  const k = key(goal, level, weekId);
  const raw = localStorage.getItem(k);
  if (!raw) {
    return { completed: {}, updatedAt: Date.now(), answers: {} };
  }

  try {
    const parsed = JSON.parse(raw) as { state: ProgressState; sig: string };
    const sig2 = await sha256(JSON.stringify(parsed.state) + PEPPER);

    if (sig2 !== parsed.sig) {
      // tampered or corrupted → reset
      return { completed: {}, updatedAt: Date.now(), answers: {} };
    }
    return parsed.state;
  } catch {
    return { completed: {}, updatedAt: Date.now(), answers: {} };
  }
}

export async function saveProgress(goal: string, level: string, weekId: string, state: ProgressState) {
  const k = key(goal, level, weekId);
  const payload = { state: { ...state, updatedAt: Date.now() } };
  const sig = await sha256(JSON.stringify(payload.state) + PEPPER);
  localStorage.setItem(k, JSON.stringify({ ...payload, sig }));
}

