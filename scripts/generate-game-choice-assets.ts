/**
 * Genera con Leonardo las 3 imágenes para la ronda de elección del videojuego (sin texto).
 * Uso: LEONARDO_API_KEY en .env → npm run generate-game-choices
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LEONARDO_KEY = process.env.LEONARDO_API_KEY;
const OUT_DIR = path.join(__dirname, '..', 'public', 'game-assets');

const CHOICES: { prompt: string; filename: string }[] = [
  {
    prompt: 'Fresh red apple and a loaf of bread on a wooden table, 2D game art, soft colors, child-friendly, clean background, no text, cartoon style',
    filename: 'choice-food.png',
  },
  {
    prompt: 'Red bouncy ball on the ground, 2D game art, soft colors, child-friendly, clean background, no text, cartoon style',
    filename: 'choice-ball.png',
  },
  {
    prompt: 'Glass of water with ice, 2D game art, soft colors, child-friendly, clean background, no text, cartoon style',
    filename: 'choice-water.png',
  },
];

async function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function leonardoGenerate(prompt: string): Promise<Buffer> {
  if (!LEONARDO_KEY) throw new Error('Falta LEONARDO_API_KEY en .env');

  const res = await fetch('https://cloud.leonardo.ai/api/rest/v1/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${LEONARDO_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      num_images: 1,
      width: 512,
      height: 512,
      modelId: 'b24e16ff-06e3-43eb-8d33-4416c2d75876',
      alchemy: true,
    }),
  });

  if (!res.ok) throw new Error(`Leonardo API ${res.status}: ${await res.text()}`);

  const data = (await res.json()) as { sdGenerationJob?: { generationId?: string } };
  const generationId = data.sdGenerationJob?.generationId;
  if (!generationId) throw new Error('Leonardo no devolvió generationId');

  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 5000));
    const getRes = await fetch(
      `https://cloud.leonardo.ai/api/rest/v1/generations/${generationId}`,
      { headers: { Authorization: `Bearer ${LEONARDO_KEY}` } }
    );
    if (!getRes.ok) throw new Error(`Leonardo get ${getRes.status}`);
    const gen = (await getRes.json()) as {
      generations_by_pk?: { status?: string; generated_images?: Array<{ url?: string }> };
    };
    const pk = gen.generations_by_pk;
    if (pk?.status === 'COMPLETE' && pk.generated_images?.length && pk.generated_images[0].url) {
      const imgRes = await fetch(pk.generated_images[0].url);
      if (!imgRes.ok) throw new Error('Error descargando imagen');
      return Buffer.from(await imgRes.arrayBuffer());
    }
    if (pk?.status === 'FAILED') throw new Error('Leonardo: generación fallida');
    console.log('  esperando...', pk?.status ?? 'PENDING');
  }
  throw new Error('Leonardo: timeout');
}

async function main() {
  await ensureDir(OUT_DIR);
  for (const { prompt, filename } of CHOICES) {
    const outPath = path.join(OUT_DIR, filename);
    if (fs.existsSync(outPath)) {
      console.log('Ya existe:', filename);
      continue;
    }
    console.log('Generando:', filename);
    const buffer = await leonardoGenerate(prompt);
    fs.writeFileSync(outPath, buffer);
    console.log('Guardado:', outPath);
  }
  console.log('\nListo. Ejecuta el juego en /juego-ingles/escena/1');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
