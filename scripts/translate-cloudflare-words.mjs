#!/usr/bin/env node
/**
 * Traduce inglés → español token a token con Cloudflare Workers AI (Llama 3.3).
 * Mismas variables que el resto del proyecto: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN.
 *
 * Uso:
 *   node scripts/translate-cloudflare-words.mjs "The cat sat on the mat."
 *   echo "Hello world" | node scripts/translate-cloudflare-words.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function loadEnv() {
  for (const name of ['.env.local', '.env']) {
    const p = path.join(root, name);
    if (fs.existsSync(p)) {
      const txt = fs.readFileSync(p, 'utf8');
      for (const line of txt.split('\n')) {
        const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
        if (m && !process.env[m[1]]) {
          let v = m[2].trim();
          if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
            v = v.slice(1, -1);
          }
          process.env[m[1]] = v;
        }
      }
      break;
    }
  }
}

loadEnv();

const MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';

async function main() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;
  if (!accountId || !apiToken) {
    console.error('Falta CLOUDFLARE_ACCOUNT_ID o CLOUDFLARE_API_TOKEN en .env / .env.local');
    process.exit(1);
  }

  let text = process.argv.slice(2).join(' ').trim();
  if (!text) {
    text = fs.readFileSync(0, 'utf8').trim();
  }
  if (!text) {
    console.error('Pasa texto como argumento o por stdin.');
    process.exit(1);
  }

  const tokens = text.split(/\s+/).filter(Boolean);
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${MODEL}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: `You align English tokens to Spanish glosses for tooltips. The user sends a JSON array of English tokens. You MUST return ONLY a JSON array of exactly ${tokens.length} strings — Spanish equivalent for each token in the same order. Do not merge tokens. If a token is punctuation-only, translate minimally or repeat the symbol. No markdown, no explanation.`,
          },
          { role: 'user', content: JSON.stringify(tokens) },
        ],
        max_tokens: Math.min(2048, 100 + tokens.length * 12),
      }),
    }
  );

  const raw = await res.text();
  let responseText = raw;
  try {
    const data = JSON.parse(raw);
    responseText = data?.result?.response ?? raw;
  } catch {
    /* plain */
  }

  const jsonMatch = responseText.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    console.error('No JSON array in response:', responseText.slice(0, 500));
    process.exit(1);
  }

  let translations;
  try {
    translations = JSON.parse(jsonMatch[0]);
  } catch (e) {
    console.error('Parse error:', e);
    process.exit(1);
  }

  if (!Array.isArray(translations) || translations.length !== tokens.length) {
    console.error('Expected', tokens.length, 'translations, got', translations?.length);
    console.error(JSON.stringify(translations, null, 2));
    process.exit(1);
  }

  for (let i = 0; i < tokens.length; i++) {
    console.log(`${tokens[i]}\t${translations[i]}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
