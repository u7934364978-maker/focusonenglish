# Especificación Técnica: A1 Podcast Library

## Contexto técnico

- **Framework**: Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Base de datos**: Supabase (PostgreSQL + RLS)
- **TTS**: Cloudflare Workers AI `@cf/deepgram/aura-1` — voces `orion` (masc.) y `luna` (fem.)
- **Concatenación de audio**: `ffmpeg` (disponible en el sistema)
- **Patrones existentes relevantes**:
  - Páginas de panel con entitlements: `src/app/mi-panel/lecturas/page.tsx`
  - API con auth: `src/app/api/evaluate-speaking/route.ts`
  - TTS API: `src/app/api/tts/route.ts`
  - Migración de tabla de progreso: `supabase/migrations/20260222_unit_stars.sql`
  - Acceso a perfil: `src/lib/access/user-profile.ts`

---

## Estructura de archivos nueva

```
src/
  lib/
    podcasts/
      types.ts              ← tipos TypeScript compartidos
      a1-episodes.ts        ← catálogo completo de 53 episodios A1
  app/
    mi-panel/
      podcasts/
        page.tsx            ← actualizar: biblioteca con filtros
        [episodeId]/
          page.tsx          ← nueva: página del reproductor
    api/
      podcasts/
        progress/
          route.ts          ← nueva: POST para guardar progreso
  components/
    podcasts/
      PodcastLibrary.tsx    ← client: grid + filtros
      PodcastPlayer.tsx     ← client: reproductor HTML5
      PodcastTranscript.tsx ← client: visor de transcripción
      PodcastVocabulary.tsx ← client: lista de vocabulario
      PodcastQuestions.tsx  ← client: preguntas de comprensión

scripts/
  generate-podcast-audio.mjs  ← script de generación de MP3

supabase/migrations/
  20260324_podcast_progress.sql

public/audio/podcasts/
  a1/
    [episodeId].mp3         ← archivos generados
```

---

## Tipos de datos (`src/lib/podcasts/types.ts`)

```typescript
export type PodcastLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
export type PodcastTrack = 'general' | 'professional' | 'travel'
export type PodcastDuration = 2 | 5 | 10 | 20 | 30
export type PodcastVoice = 'orion' | 'luna'

export interface DialogueTurn {
  speaker: 'A' | 'B'
  voice: PodcastVoice
  text: string
}

export interface VocabularyItem {
  word: string
  translation: string
  example: string
}

export interface ComprehensionQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface PodcastEpisode {
  id: string                          // e.g. 'a1-gen-2m-001'
  level: PodcastLevel
  track: PodcastTrack
  durationMinutes: PodcastDuration
  module: 1 | 2 | 3
  title: string
  description: string                 // en español
  topic: string                       // e.g. 'greetings'
  audioUrl: string                    // '/audio/podcasts/a1/a1-gen-2m-001.mp3'
  transcript: DialogueTurn[]
  vocabulary: VocabularyItem[]        // 5–10 ítems
  comprehensionQuestions: ComprehensionQuestion[]  // 3–5 preguntas
}

export interface PodcastProgress {
  episodeId: string
  userId: string
  progressSeconds: number
  completed: boolean
  completedAt?: string
}
```

---

## Catálogo de episodios (`src/lib/podcasts/a1-episodes.ts`)

Array exportado `A1_EPISODES: PodcastEpisode[]` con los 53 episodios. Cada episodio incluye:
- `transcript`: array de `DialogueTurn[]` — el script completo en inglés (lento y claro, nivel A1)
- Los textos de 2 min ≈ 250 palabras; 5 min ≈ 600; 10 min ≈ 1.200; 20 min ≈ 2.400; 30 min ≈ 3.600

**IDs por convención**: `a1-{track3}-{duration}m-{seq3}`
- `a1-gen-02m-001`, `a1-pro-05m-002`, `a1-tra-10m-001` …

**Mapa de episodios por módulo**:

| Módulo | Temas cubiertos | Tracks |
|--------|----------------|--------|
| 1 | Saludos, presentaciones, familia, casa, rutinas, días/meses, números, colores, profesiones | general + professional |
| 2 | Hobbies, deportes, comida, compras, clima, animales, can/can't, there is/are | general + travel |
| 3 | Transporte, direcciones, trabajo, países, vacaciones, ropa | travel + professional |

---

## Script de generación de audio (`scripts/generate-podcast-audio.mjs`)

**Flujo por episodio**:

1. Para cada `DialogueTurn` del episodio:
   - Llamar a `POST https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/deepgram/aura-1` con `{ text, speaker: turn.voice }`
   - Guardar el fragmento como MP3 temporal: `/tmp/podcast-gen/{episodeId}-turn-{i}.mp3`
2. Generar `filelist.txt` con la lista de fragmentos en orden
3. Ejecutar `ffmpeg -f concat -safe 0 -i filelist.txt -c copy public/audio/podcasts/a1/{episodeId}.mp3`
4. Limpiar temporales
5. Log de progreso: `✓ {episodeId} ({durationMinutes}min, {turnCount} turns)`

**Opciones de ejecución**:
```bash
# Generar todos los episodios
node scripts/generate-podcast-audio.mjs

# Generar un episodio específico
node scripts/generate-podcast-audio.mjs --episode a1-gen-02m-001

# Generar por track
node scripts/generate-podcast-audio.mjs --track general

# Generar por duración
node scripts/generate-podcast-audio.mjs --duration 2
```

**Variables de entorno necesarias** (ya existen):
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

**Control de errores**:
- Si un fragmento falla: reintentar hasta 3 veces con backoff exponencial
- Si el episodio ya tiene MP3 generado: saltar (a menos que `--force`)
- Resumen final: `X/53 generados, Y errores`

---

## Base de datos (`supabase/migrations/20260324_podcast_progress.sql`)

```sql
CREATE TABLE IF NOT EXISTS podcast_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  episode_id VARCHAR(50) NOT NULL,
  progress_seconds INTEGER NOT NULL DEFAULT 0,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, episode_id)
);

CREATE INDEX IF NOT EXISTS idx_podcast_progress_user ON podcast_progress(user_id);

ALTER TABLE podcast_progress ENABLE ROW LEVEL SECURITY;

-- RLS: cada usuario sólo ve y modifica su propio progreso
CREATE POLICY "Users can view own podcast progress"
  ON podcast_progress FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own podcast progress"
  ON podcast_progress FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own podcast progress"
  ON podcast_progress FOR UPDATE USING (auth.uid() = user_id);
```

---

## API de progreso (`src/app/api/podcasts/progress/route.ts`)

**`POST /api/podcasts/progress`**

Request body:
```json
{ "episodeId": "a1-gen-02m-001", "progressSeconds": 87, "completed": false }
```

Lógica:
1. Validar sesión (Supabase auth)
2. Upsert en `podcast_progress` con `ON CONFLICT (user_id, episode_id) DO UPDATE`
3. Si `completed = true`, establecer `completed_at = NOW()`
4. Devolver `{ ok: true }`

Sin body adicional — el cliente ya tiene el estado localmente.

---

## Páginas

### Biblioteca actualizada (`src/app/mi-panel/podcasts/page.tsx`)

- Server component (igual que ahora): valida auth + entitlements
- Carga el progreso del usuario con una sola query: `SELECT episode_id, completed FROM podcast_progress WHERE user_id = $1`
- Pasa episodios + progreso al componente cliente `<PodcastLibrary>`

### Reproductor (`src/app/mi-panel/podcasts/[episodeId]/page.tsx`)

- Server component: valida auth + entitlements, encuentra el episodio en `A1_EPISODES`
- Si no existe el episodio: `notFound()`
- Carga progreso previo del usuario para ese episodio
- Renderiza `<PodcastPlayer episode={episode} initialProgress={progress} />`

---

## Componentes cliente

### `PodcastLibrary.tsx`

- Props: `episodes: PodcastEpisode[]`, `progress: Record<string, {completed: boolean}>`
- Estado: filtros activos (`track | null`, `duration | null`)
- Renderiza grid de tarjetas; cada tarjeta muestra:
  - Badge de nivel (A1), track (icono), duración (Xmin)
  - Título y descripción
  - Indicador de progreso: punto gris (nuevo) / azul (en progreso) / verde+check (completado)
- Filtros: botones de toggle para track y duración (apilados en móvil, inline en escritorio)

### `PodcastPlayer.tsx`

- Props: `episode: PodcastEpisode`, `initialProgress: number`
- Usa `<audio>` nativo con ref para control programático
- Estado: `isPlaying`, `currentTime`, `duration`, `speed`, `activeTab: 'transcript'|'vocabulary'`
- Eventos del audio:
  - `ontimeupdate`: actualizar `currentTime`; si `currentTime / duration >= 0.8` y no marcado → llamar a API con `completed: true`
  - `onended`: marcar completado
- Cada 10 segundos de reproducción: `POST /api/podcasts/progress` con `progressSeconds` actual (para salvar posición)
- Velocidades disponibles: `[0.75, 1, 1.25]`
- Pestañas debajo del reproductor: Transcripción | Vocabulario | Preguntas

### `PodcastTranscript.tsx`

- Props: `turns: DialogueTurn[]`
- Lista de turnos con label del hablante (A / B) y texto
- Diseño visual diferenciado por hablante (izquierda / derecha, colores distintos)

### `PodcastVocabulary.tsx`

- Props: `items: VocabularyItem[]`
- Lista: `word` en negrita + `translation` en slate + `example` en cursiva

### `PodcastQuestions.tsx`

- Props: `questions: ComprehensionQuestion[]`, `unlocked: boolean`
- Si `!unlocked`: mensaje "Escucha el 80% del episodio para desbloquear las preguntas" + botón manual "Ver preguntas de todas formas"
- Cada pregunta: opción múltiple, al seleccionar muestra correcto/incorrecto + explicación
- Sin puntuación ni XP en esta iteración

---

## Verificación

- **Lint**: `npm run lint` (no debe introducir errores)
- **Typecheck**: `npm run typecheck` (tipado estricto en todos los archivos nuevos)
- **Test manual del script**: generar 1 episodio con `--episode a1-gen-02m-001` y verificar el MP3
- **Test de acceso**: verificar que usuario sin suscripción sigue siendo redirigido a `/planes`
- **Test de progreso**: verificar que el progreso se persiste y se refleja en la biblioteca

---

## Decisiones de diseño

- Los datos de los episodios (transcripts, vocabulario, preguntas) viven en TypeScript, no en Supabase, para evitar queries pesadas y simplificar el despliegue. El progreso del usuario sí va a Supabase.
- El audio se pre-genera (no on-demand) para eliminar latencia en reproducción y reducir coste de API.
- El reproductor usa `<audio>` HTML5 nativo (sin librería externa) siguiendo el patrón minimalista del proyecto.
- Los 53 episodios se definen en un único archivo `a1-episodes.ts`; si crece mucho se puede partir por módulo.
