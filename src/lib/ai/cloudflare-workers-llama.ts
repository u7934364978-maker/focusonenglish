/**
 * Llamada centralizada a Cloudflare Workers AI (Llama instruct) vía REST.
 * Misma credencial que `/api/generate-exercises`, `/api/evaluate-speaking`, etc.
 */
const MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';

export type CfLlamaMessage = { role: 'system' | 'user' | 'assistant'; content: string };

export async function callCloudflareLlama(
  messages: CfLlamaMessage[],
  options?: { max_tokens?: number; timeoutMs?: number }
): Promise<{ ok: boolean; status: number; text: string }> {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;
  if (!accountId || !apiToken) {
    return { ok: false, status: 500, text: 'CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN missing' };
  }

  const max_tokens = options?.max_tokens ?? 1024;
  const timeoutMs = options?.timeoutMs ?? 45_000;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${MODEL}`,
      {
        method: 'POST',
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages,
          max_tokens,
        }),
      }
    );
    const text = await res.text();
    return { ok: res.ok, status: res.status, text };
  } finally {
    clearTimeout(timer);
  }
}

/** Extrae el texto de respuesta del JSON de Workers AI. */
export function extractLlamaResponseText(apiBody: string): string {
  try {
    const data = JSON.parse(apiBody) as { result?: { response?: string } };
    const r = data?.result?.response;
    if (typeof r === 'string') return r;
  } catch {
    /* ignore */
  }
  return apiBody;
}
