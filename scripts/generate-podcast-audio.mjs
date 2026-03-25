#!/usr/bin/env node
/**
 * Generates MP3 audio files for A1 podcast episodes using Cloudflare Workers AI TTS.
 *
 * Usage:
 *   node scripts/generate-podcast-audio.mjs
 *   node scripts/generate-podcast-audio.mjs --episode a1-gen-02m-001
 *   node scripts/generate-podcast-audio.mjs --track general
 *   node scripts/generate-podcast-audio.mjs --duration 2
 *   node scripts/generate-podcast-audio.mjs --force
 *
 * Requires: CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN in .env.local
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Load .env.local
const envPath = path.join(ROOT, '.env.local');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim().replace(/^["']|["']$/g, '');
  }
}

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error('❌  Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN in .env.local');
  process.exit(1);
}

const TTS_URL = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/@cf/deepgram/aura-1`;
const OUT_DIR = path.join(ROOT, 'public', 'audio', 'podcasts', 'a1');
const TMP_BASE = path.join('/tmp', 'podcast-gen');
const MAX_RETRIES = 3;

// Parse CLI args
const args = process.argv.slice(2);
const getArg = (name) => { const i = args.indexOf(name); return i !== -1 ? args[i + 1] : null; };
const EPISODE_FILTER = getArg('--episode');
const TRACK_FILTER = getArg('--track');
const DURATION_FILTER = getArg('--duration') ? Number(getArg('--duration')) : null;
const FORCE = args.includes('--force');

// Dynamically import the episode catalog (TS → JS via ts transpilation not available here, so we read the built output or use a workaround)
// Since we cannot import TS directly in a plain .mjs, we extract episode data via a small inline approach.
// We read and eval the TypeScript files using a simple regex-based extractor.

function extractEpisodes(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Use Function constructor to eval the TS as JS (types are stripped by removing annotations)
  // Strip TypeScript-specific syntax
  const js = content
    .replace(/^import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm, '')
    .replace(/^export\s+const\s+/gm, 'const ')
    .replace(/:\s*PodcastEpisode\[\]/g, '')
    .replace(/\bas\s+const\b/g, '');

  try {
    const fn = new Function(`${js}\nreturn typeof A1_EPISODES_M1 !== 'undefined' ? A1_EPISODES_M1 : typeof A1_EPISODES_M2 !== 'undefined' ? A1_EPISODES_M2 : A1_EPISODES_M3;`);
    return fn();
  } catch (e) {
    console.error(`Failed to parse ${filePath}:`, e.message);
    return [];
  }
}

const m1 = extractEpisodes(path.join(ROOT, 'src/lib/podcasts/a1-episodes-m1.ts'));
const m2 = extractEpisodes(path.join(ROOT, 'src/lib/podcasts/a1-episodes-m2.ts'));
const m3 = extractEpisodes(path.join(ROOT, 'src/lib/podcasts/a1-episodes-m3.ts'));
const ALL_EPISODES = [...m1, ...m2, ...m3];

console.log(`📚  Loaded ${ALL_EPISODES.length} episodes total`);

let episodes = ALL_EPISODES;
if (EPISODE_FILTER) episodes = episodes.filter((e) => e.id === EPISODE_FILTER);
if (TRACK_FILTER) episodes = episodes.filter((e) => e.track === TRACK_FILTER);
if (DURATION_FILTER) episodes = episodes.filter((e) => e.durationMinutes === DURATION_FILTER);

if (episodes.length === 0) {
  console.error('❌  No episodes match the given filters');
  process.exit(1);
}

console.log(`🎙️   Generating audio for ${episodes.length} episode(s)...\n`);

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(TMP_BASE, { recursive: true });

async function ttsWithRetry(text, speaker, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(TTS_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, speaker }),
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(`HTTP ${res.status}: ${err}`);
      }

      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      if (attempt === retries) throw err;
      console.warn(`    ⚠️  Attempt ${attempt} failed: ${err.message}. Retrying...`);
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
}

let generated = 0;
let skipped = 0;
let errors = 0;

for (const episode of episodes) {
  const outFile = path.join(OUT_DIR, `${episode.id}.mp3`);

  if (fs.existsSync(outFile) && !FORCE) {
    console.log(`⏭️   Skipping ${episode.id} (already exists, use --force to regenerate)`);
    skipped++;
    continue;
  }

  const tmpDir = path.join(TMP_BASE, episode.id);
  fs.mkdirSync(tmpDir, { recursive: true });

  console.log(`🎙️   ${episode.id} — ${episode.title} (${episode.transcript.length} turns)`);

  try {
    const turnFiles = [];

    for (let i = 0; i < episode.transcript.length; i++) {
      const turn = episode.transcript[i];
      const turnFile = path.join(tmpDir, `turn-${String(i).padStart(3, '0')}.mp3`);
      process.stdout.write(`    Turn ${i + 1}/${episode.transcript.length} (${turn.voice})... `);

      const audio = await ttsWithRetry(turn.text, turn.voice);
      fs.writeFileSync(turnFile, audio);
      turnFiles.push(turnFile);
      process.stdout.write('✓\n');
    }

    // Concatenate with ffmpeg
    const fileList = path.join(tmpDir, 'filelist.txt');
    fs.writeFileSync(fileList, turnFiles.map((f) => `file '${f}'`).join('\n'));

    execSync(
      `ffmpeg -y -f concat -safe 0 -i "${fileList}" -c copy "${outFile}" 2>/dev/null`,
      { stdio: 'pipe' }
    );

    console.log(`    ✅  Saved → ${path.relative(ROOT, outFile)}\n`);
    generated++;
  } catch (err) {
    console.error(`    ❌  Failed: ${err.message}\n`);
    errors++;
  } finally {
    // Cleanup tmp
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
  }
}

console.log('─'.repeat(50));
console.log(`✅  Generated: ${generated}  ⏭️  Skipped: ${skipped}  ❌  Errors: ${errors}`);
if (errors > 0) process.exit(1);
