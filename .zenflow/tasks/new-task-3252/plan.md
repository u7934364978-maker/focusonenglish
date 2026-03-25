# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 0798a38d-3e22-404c-b1c4-cf054402a322 -->

Create a Product Requirements Document (PRD) based on the feature description.

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `{@artifacts_path}/requirements.md`.

Save to `{@artifacts_path}/spec.md`.

### [x] Step: Planning

Plan detallado de implementación basado en `spec.md`. Tareas definidas abajo.

---

## Implementación

### [x] Step 1: Tipos y estructura de datos base

Crear `src/lib/podcasts/types.ts` con todos los tipos TypeScript definidos en `spec.md`:
- `PodcastLevel`, `PodcastTrack`, `PodcastDuration`, `PodcastVoice`
- `DialogueTurn`, `VocabularyItem`, `ComprehensionQuestion`
- `PodcastEpisode`, `PodcastProgress`

Verificación: `npm run typecheck` sin errores en el archivo nuevo.

### [x] Step 2: Catálogo de episodios A1 — Módulo 1 (Presentaciones y Vida Cotidiana)

Crear `src/lib/podcasts/a1-episodes-m1.ts` con los episodios del Módulo 1:
- Temas: saludos, presentaciones, información personal, familia, casa, rutinas, días/meses, números, colores, profesiones
- Tracks: general (8 episodios) + professional (6 episodios) = 14 episodios
- Duraciones: 2, 5, 10, 20, 30 min distribuidas
- Cada episodio con: transcript (DialogueTurn[]), vocabulary (5-10 ítems), comprehensionQuestions (3-5)
- Voces: orion (Speaker A), luna (Speaker B)
- Textos en inglés A1: vocabulario simple, frases cortas, velocidad lenta

Aproximación de palabras por duración:
- 2 min → ~250 palabras (~6-8 turnos)
- 5 min → ~600 palabras (~15-20 turnos)
- 10 min → ~1.200 palabras (~30-35 turnos)
- 20 min → ~2.400 palabras (~60-70 turnos)
- 30 min → ~3.600 palabras (~90-100 turnos)

Verificación: `npm run typecheck` — el array exportado debe ser `PodcastEpisode[]` sin errores.

### [x] Step 3: Catálogo de episodios A1 — Módulo 2 (Actividades y Tiempo Libre)

Crear `src/lib/podcasts/a1-episodes-m2.ts` con los episodios del Módulo 2:
- Temas: hobbies, deportes, comida y bebida, tiendas, clima, animales, can/can't, there is/are, preposiciones
- Tracks: general (8 episodios) + travel (6 episodios) = 14 episodios
- Misma estructura que Step 2

Verificación: `npm run typecheck` sin errores.

### [x] Step 4: Catálogo de episodios A1 — Módulo 3 (Lugares y Viajes)

Crear `src/lib/podcasts/a1-episodes-m3.ts` con los episodios del Módulo 3:
- Temas: transporte, direcciones, trabajo, países, vacaciones, Present Continuous, ropa
- Tracks: travel (9 episodios) + professional (9 episodios) = 18 episodios (ajustar a ~25 total para completar 53)
- Misma estructura

Crear `src/lib/podcasts/a1-episodes.ts` que re-exporta todos los módulos:
```typescript
import { A1_EPISODES_M1 } from './a1-episodes-m1'
import { A1_EPISODES_M2 } from './a1-episodes-m2'
import { A1_EPISODES_M3 } from './a1-episodes-m3'
export const A1_EPISODES: PodcastEpisode[] = [...A1_EPISODES_M1, ...A1_EPISODES_M2, ...A1_EPISODES_M3]
```

Verificación: `A1_EPISODES.length >= 53`. `npm run typecheck` sin errores.

### [ ] Step 5: Migración de base de datos y API de progreso

Crear `supabase/migrations/20260324_podcast_progress.sql` con tabla `podcast_progress` exactamente como se define en `spec.md` (incluyendo índices y políticas RLS).

Crear `src/app/api/podcasts/progress/route.ts`:
- `POST`: recibe `{ episodeId, progressSeconds, completed }`, valida auth con Supabase, hace upsert en `podcast_progress`
- Seguir el patrón de `src/app/api/evaluate-speaking/route.ts` para la autenticación
- Retornar `{ ok: true }` en éxito, errores estándar (401, 400, 500)

Verificación: `npm run typecheck` sin errores. Test manual: llamar al endpoint con usuario autenticado.

### [ ] Step 6: Script de generación de audio

Crear `scripts/generate-podcast-audio.mjs`:
- Lee `A1_EPISODES` del catálogo
- Por cada episodio (o el filtrado por `--episode`, `--track`, `--duration`):
  - Crea directorio `/public/audio/podcasts/a1/` si no existe
  - Si el MP3 ya existe y no hay `--force`, salta el episodio
  - Por cada `DialogueTurn`: llama a Cloudflare TTS API (`@cf/deepgram/aura-1`) con `{ text, speaker: turn.voice }`
  - Guarda fragmento en `/tmp/podcast-gen/{episodeId}/turn-{i}.mp3`
  - Genera `filelist.txt` con paths absolutos
  - Ejecuta: `ffmpeg -f concat -safe 0 -i filelist.txt -c copy public/audio/podcasts/a1/{episodeId}.mp3`
  - Limpia `/tmp/podcast-gen/{episodeId}/`
  - Reintento automático hasta 3 veces en caso de error de red
- Variables de entorno: `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`
- Resumen final: `X/N episodios generados, Y errores`

Verificación: ejecutar con `--episode a1-gen-02m-001` y confirmar que el MP3 existe y es reproducible.

### [x] Step 7: Componentes de podcasts

Crear los 5 componentes en `src/components/podcasts/`:

**`PodcastLibrary.tsx`** (client):
- Props: `episodes: PodcastEpisode[]`, `progress: Record<string, { completed: boolean }>`
- Filtros por track (general/profesional/viajes) y duración (2/5/10/20/30 min) — botones de toggle
- Grid responsive de tarjetas: título, descripción, badge nivel, track icon, duración, estado de progreso
- Cada tarjeta enlaza a `/mi-panel/podcasts/{episode.id}`

**`PodcastPlayer.tsx`** (client):
- Props: `episode: PodcastEpisode`, `initialProgress: number`
- `<audio>` nativo con ref; play/pausa, seek bar, tiempo actual/total, selector de velocidad [0.75, 1, 1.25]
- `ontimeupdate`: cada 10 segundos llama a `POST /api/podcasts/progress` con progreso actual
- Al superar 80%: llamada con `completed: true`; desbloquea preguntas
- Pestañas: Transcripción | Vocabulario — bajo el reproductor

**`PodcastTranscript.tsx`** (client):
- Props: `turns: DialogueTurn[]`
- Turnos diferenciados visualmente: Speaker A (izquierda, azul) / Speaker B (derecha, verde)

**`PodcastVocabulary.tsx`** (client):
- Props: `items: VocabularyItem[]`
- Lista: palabra en negrita + traducción en gris + ejemplo en cursiva

**`PodcastQuestions.tsx`** (client):
- Props: `questions: ComprehensionQuestion[]`, `unlocked: boolean`
- Si bloqueado: mensaje + botón "Ver preguntas de todas formas"
- Opción múltiple con feedback visual por pregunta (correcto/incorrecto + explicación)

Verificación: `npm run lint` y `npm run typecheck` sin errores.

### [x] Step 8: Páginas de la sección podcasts

**Actualizar `src/app/mi-panel/podcasts/page.tsx`**:
- Mantener auth + entitlements check (sin cambios)
- Añadir query de progreso: `SELECT episode_id, completed FROM podcast_progress WHERE user_id = $1`
- Reemplazar el placeholder JSX por `<PodcastLibrary episodes={A1_EPISODES} progress={progressMap} />`

**Crear `src/app/mi-panel/podcasts/[episodeId]/page.tsx`**:
- Server component: valida auth + entitlements (patrón idéntico al de la biblioteca)
- `const episode = A1_EPISODES.find(e => e.id === params.episodeId)`; si no existe → `notFound()`
- Query del progreso previo del usuario para ese episodio
- Renderiza `<PodcastPlayer episode={episode} initialProgress={progress?.progressSeconds ?? 0} />` y `<PodcastQuestions>` bajo el player

Verificación: `npm run lint` y `npm run typecheck` sin errores. Test manual de navegación completa: biblioteca → episodio → reproducción → progreso → preguntas.
