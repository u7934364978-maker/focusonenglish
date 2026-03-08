/**
 * Demo: genera imagen del gato (Leonardo) y vídeo del gato caminando (Runway).
 * Uso: Añade LEONARDO_API_KEY y RUNWAY_API_KEY a .env y ejecuta:
 *   npx ts-node --esm scripts/demo-cat-assets.ts
 * o: node --loader ts-node/esm scripts/demo-cat-assets.ts
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LEONARDO_KEY = process.env.LEONARDO_API_KEY;
const RUNWAY_KEY = process.env.RUNWAY_API_KEY;

const OUT_DIR = path.join(__dirname, '..', 'public', 'game-assets');
const CAT_IMAGE_PATH = path.join(OUT_DIR, 'cat-looking-for-food.png');
const CAT_VIDEO_PATH = path.join(OUT_DIR, 'cat-walking-for-food.mp4');

async function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function leonardoGenerateImage(): Promise<Buffer> {
  if (!LEONARDO_KEY) throw new Error('Falta LEONARDO_API_KEY en .env');

  const prompt =
    'Friendly orange tabby cat with a small red scarf, walking on a cobblestone village street, looking for food, big expressive eyes, 2D game art, soft colors, rounded shapes, child-friendly, clean background, no text, cartoon style';

  const res = await fetch('https://cloud.leonardo.ai/api/rest/v1/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${LEONARDO_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      num_images: 1,
      width: 768,
      height: 768,
      modelId: 'b24e16ff-06e3-43eb-8d33-4416c2d75876',
      alchemy: true,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Leonardo API error ${res.status}: ${text}`);
  }

  const data = (await res.json()) as { sdGenerationJob?: { generationId?: string } };
  const generationId = data.sdGenerationJob?.generationId;
  if (!generationId) throw new Error('Leonardo no devolvió generationId');

  console.log('Leonardo: generando imagen...', generationId);

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
    const status = pk?.status;
    const images = pk?.generated_images ?? [];

    if (status === 'COMPLETE' && images.length > 0 && images[0].url) {
      const imgRes = await fetch(images[0].url);
      if (!imgRes.ok) throw new Error('Error descargando imagen de Leonardo');
      return Buffer.from(await imgRes.arrayBuffer());
    }
    if (status === 'FAILED') throw new Error('Leonardo: generación fallida');
    console.log('  esperando...', status ?? 'PENDING');
  }

  throw new Error('Leonardo: timeout');
}

async function runwayImageToVideo(imageBuffer: Buffer): Promise<Buffer> {
  if (!RUNWAY_KEY) throw new Error('Falta RUNWAY_API_KEY en .env');

  const base64 = imageBuffer.toString('base64');
  const dataUri = `data:image/png;base64,${base64}`;

  const res = await fetch('https://api.dev.runwayml.com/v1/image_to_video', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RUNWAY_KEY}`,
      'Content-Type': 'application/json',
      'X-Runway-Version': '2024-11-06',
    },
    body: JSON.stringify({
      promptImage: dataUri,
      promptText: 'The friendly orange cat with red scarf walks along the cobblestone street, looking for food, soft 2D cartoon style',
      model: 'gen3a_turbo',
      ratio: '1280:768',
      duration: 5,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    if (res.status === 400 && text.includes('credits')) {
      throw new Error('Runway: no tienes suficientes créditos. La imagen ya está guardada.');
    }
    throw new Error(`Runway API error ${res.status}: ${text}`);
  }

  const data = (await res.json()) as { id?: string };
  const taskId = data.id;
  if (!taskId) throw new Error('Runway no devolvió task id');

  console.log('Runway: generando vídeo...', taskId);

  for (let i = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 5000));
    const taskRes = await fetch(`https://api.dev.runwayml.com/v1/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${RUNWAY_KEY}`,
        'X-Runway-Version': '2024-11-06',
      },
    });
    if (!taskRes.ok) throw new Error(`Runway task ${taskRes.status}`);
    const task = (await taskRes.json()) as {
      status?: string;
      output?: string[];
      failure?: string;
    };

    if (task.status === 'SUCCEEDED' && task.output?.length) {
      const videoUrl = task.output[0];
      const videoRes = await fetch(videoUrl);
      if (!videoRes.ok) throw new Error('Error descargando vídeo de Runway');
      return Buffer.from(await videoRes.arrayBuffer());
    }
    if (task.status === 'FAILED') throw new Error(`Runway failed: ${task.failure ?? 'unknown'}`);
    console.log('  esperando...', task.status ?? 'PENDING');
  }

  throw new Error('Runway: timeout');
}

async function main() {
  console.log('Demo: gato caminando para buscar comida\n');

  await ensureDir(OUT_DIR);

  let imageBuffer: Buffer;
  if (fs.existsSync(CAT_IMAGE_PATH)) {
    console.log('Usando imagen existente:', CAT_IMAGE_PATH);
    imageBuffer = fs.readFileSync(CAT_IMAGE_PATH);
  } else {
    imageBuffer = await leonardoGenerateImage();
    fs.writeFileSync(CAT_IMAGE_PATH, imageBuffer);
    console.log('Imagen guardada:', CAT_IMAGE_PATH);
  }

  if (fs.existsSync(CAT_VIDEO_PATH)) {
    console.log('Vídeo ya existe:', CAT_VIDEO_PATH);
  } else {
    try {
      const videoBuffer = await runwayImageToVideo(imageBuffer);
      fs.writeFileSync(CAT_VIDEO_PATH, videoBuffer);
      console.log('Vídeo guardado:', CAT_VIDEO_PATH);
    } catch (err) {
      console.warn('\nVídeo no generado:', (err as Error).message);
      console.log('Imagen disponible en /juego-ingles/demo');
    }
  }

  console.log('\nAbre /juego-ingles/demo para ver el resultado.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
