#!/usr/bin/env node
/**
 * Revisa textos de UI (español) en busca de inglés residual con Cloudflare Workers AI (Llama 3.3).
 * Mismas credenciales que el resto del proyecto: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN.
 *
 * Uso:
 *   npm run audit:ui-es-cloudflare -- --preset sesion-a1
 *   node scripts/audit-spanish-ui-cloudflare.mjs --file ./cadenas.txt
 *
 * En el archivo: una cadena por línea; se ignoran líneas vacías y las que empiezan por #.
 *
 * Mantén el preset `sesion-a1` alineado con los textos visibles en:
 *   src/app/curso-a1/sesion-diaria/*, src/lib/copy/a1-sesion-del-dia.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';

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

/** Textos representativos de la sesión diaria A1 (actualizar si cambia la UI). */
const PRESETS = {
  'sesion-a1': [
    'Sesión del día',
    'sesión del día',
    'La sesión del día guarda tu racha y sincroniza repasos con tu cuenta.',
    'Cargando sesión del día…',
    'Preparando tu sesión del día…',
    'Sesión no disponible',
    'Volver al curso A1',
    'Debes iniciar sesión.',
    'No hay ejercicios disponibles ahora. Inténtalo más tarde.',
    'Curso A1 · Sesión del día',
    'Sesión guiada',
    'Repasos tomados de tu cola espaciada (mismos ejercicios que marcaste) mezclados con ítems nuevos del motor adaptativo.',
    'Repasar lo pendiente de tu repaso espaciado',
    'Practicar ejercicios nuevos adaptados a lo que más te cuesta',
    'Repasos reales de tu cola espaciada + ítems nuevos (racha y XP en una sola sesión).',
  ],
};

function parseArgs(argv) {
  const out = { preset: null, file: null };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--preset' && argv[i + 1]) {
      out.preset = argv[++i];
    } else if (argv[i] === '--file' && argv[i + 1]) {
      out.file = argv[++i];
    }
  }
  return out;
}

function readStringsFromFile(filePath) {
  const abs = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
  const raw = fs.readFileSync(abs, 'utf8');
  return raw
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));
}

function extractJsonObject(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end <= start) return null;
  try {
    return JSON.parse(text.slice(start, end + 1));
  } catch {
    return null;
  }
}

async function auditBatch(accountId, apiToken, strings) {
  const userPayload = JSON.stringify(
    strings.map((s, i) => ({ i, text: s })),
    null,
    0,
  );

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
            content: `Eres revisor lingüístico para UI en español (España) de una app de inglés.
Te llega un JSON con entradas {i, text}. Para cada una, decide si "text" contiene inglés NO traducido que vería un usuario (palabras o frases en inglés que deberían estar en español).

EXCEPCIONES (no marcar como problema): XP; siglas muy comunes (OK, FAQ si aplica); nombres propios; términos pedagógicos aceptados en ES como "ítems", "repaso espaciado", "motor adaptativo"; palabras en inglés que forman parte intencional del producto (ej. lemas de ejercicio entrecomillados si el contexto es clase de inglés — aquí casi no aplica).

Responde SOLO un JSON minificado con esta forma exacta:
{"results":[{"i":0,"ok":true,"englishFragments":[]},{"i":1,"ok":false,"englishFragments":["hello"]}]}
Si no hay inglés problemático, ok=true y englishFragments=[].`,
          },
          { role: 'user', content: userPayload },
        ],
        max_tokens: 2048,
      }),
    },
  );

  const raw = await res.text();
  let responseText = raw;
  try {
    const data = JSON.parse(raw);
    if (data?.success === false) {
      throw new Error(`Cloudflare success=false: ${JSON.stringify(data.errors || data)}`);
    }
    const inner = data?.result?.response;
    responseText =
      typeof inner === 'string'
        ? inner
        : inner != null
          ? JSON.stringify(inner)
          : raw;
  } catch (e) {
    if (String(e?.message || e).includes('Cloudflare success=false')) throw e;
  }

  const parsed = extractJsonObject(responseText);
  if (!parsed?.results || !Array.isArray(parsed.results)) {
    throw new Error(`No se pudo parsear el informe del modelo. Salida:\n${textOut.slice(0, 1200)}`);
  }
  return parsed.results;
}

async function main() {
  loadEnv();
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;
  if (!accountId || !apiToken) {
    console.error('Falta CLOUDFLARE_ACCOUNT_ID o CLOUDFLARE_API_TOKEN en .env / .env.local');
    process.exit(1);
  }

  const { preset, file } = parseArgs(process.argv);
  let strings;
  if (file) {
    strings = readStringsFromFile(file);
  } else if (preset && PRESETS[preset]) {
    strings = PRESETS[preset];
  } else {
    console.error(
      'Uso: node scripts/audit-spanish-ui-cloudflare.mjs --preset sesion-a1\n' +
        '  o: node scripts/audit-spanish-ui-cloudflare.mjs --file ./cadenas.txt',
    );
    process.exit(1);
  }

  if (!strings.length) {
    console.error('No hay cadenas para auditar.');
    process.exit(1);
  }

  console.error(`Auditando ${strings.length} cadenas con Workers AI…`);
  const results = await auditBatch(accountId, apiToken, strings);

  let dirty = 0;
  for (const row of results) {
    const idx = row.i;
    const text = strings[idx] ?? '(índice fuera de rango)';
    if (row.ok) {
      console.log(`[OK] ${idx}: ${JSON.stringify(text).slice(0, 120)}`);
    } else {
      dirty++;
      console.log(
        `[REVISAR] ${idx}: ${JSON.stringify(text)}\n   fragmentos: ${JSON.stringify(row.englishFragments || [])}`,
      );
    }
  }

  if (dirty > 0) {
    console.error(`\n${dirty} cadena(s) con posible inglés residual (revisión humana recomendada).`);
    process.exit(2);
  }
  console.error('\nNingún problema detectado por el modelo (sigue habiendo falsos positivos/negativos).');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
