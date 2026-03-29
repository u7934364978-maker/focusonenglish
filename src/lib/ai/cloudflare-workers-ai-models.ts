/**
 * Catálogo Cloudflare Workers AI (@cf/...) usado en Focus English + modelos recomendados
 * para roadmap (SRS, moderación, embeddings, latencia). El catálogo completo cambia:
 * @see https://developers.cloudflare.com/workers-ai/models/
 *
 * Llamada REST: POST .../accounts/{ACCOUNT_ID}/ai/run/{MODEL_ID}
 */

/** Generación de texto principal (ejercicios, tutor, traducción, evaluación oral). */
export const CF_LLAMA_3_3_70B_INSTRUCT_FP8_FAST =
  '@cf/meta/llama-3.3-70b-instruct-fp8-fast' as const;

/** Visión + texto (imagen del alumno, tutor avatar). */
export const CF_LLAMA_3_2_11B_VISION_INSTRUCT =
  '@cf/meta/llama-3.2-11b-vision-instruct' as const;

/** ASR (speaking, tutor) — ya integrado. */
export const CF_WHISPER_LARGE_V3_TURBO = '@cf/openai/whisper-large-v3-turbo' as const;

/** TTS curso / API general. */
export const CF_DEEPGRAM_AURA_1 = '@cf/deepgram/aura-1' as const;

/** TTS tutor avatar (inglés). */
export const CF_DEEPGRAM_AURA_2_EN = '@cf/deepgram/aura-2-en' as const;

// --- Recomendados en Workers AI; aún no cableados en el repo (roadmap) ---

/** Embeddings multilingües densos + sparse — repetición espaciada semántica, “qué repasar”. */
export const CF_BGE_M3 = '@cf/baai/bge-m3' as const;

/** Reranking query–passage — RAG y ordenar ítems por relevancia. */
export const CF_BGE_RERANKER_BASE = '@cf/baai/bge-reranker-base' as const;

/** Embeddings compactos multilingües (Google) — búsqueda/clustering. */
export const CF_EMBEDDINGGEMMA_300M = '@cf/google/embeddinggemma-300m' as const;

/** Clasificación seguridad entrada/salida LLM — moderación chat/generación. */
export const CF_LLAMA_GUARD_3_8B = '@cf/meta/llama-guard-3-8b' as const;

/** LLM pequeño — feedback instantáneo, clasificación, baja latencia/coste. */
export const CF_LLAMA_3_2_3B_INSTRUCT = '@cf/meta/llama-3.2-3b-instruct' as const;

/** ASR inglés “tiny” — micro-interacciones si aceptáis solo EN. */
export const CF_WHISPER_TINY_EN = '@cf/openai/whisper-tiny-en' as const;

/** Detección de turno en audio — conversación fluida tipo Duolingo/speaking. */
export const CF_SMART_TURN_V2 = '@cf/pipecat-ai/smart-turn-v2' as const;

/** Resumen de textos — resúmenes de lección o feedback largo acotado. */
export const CF_BART_LARGE_CNN = '@cf/facebook/bart-large-cnn' as const;

/** TTS alternativo multilingüe — variación de voz o pruebas A/B. */
export const CF_MELOTTS = '@cf/myshell-ai/melotts' as const;

/** TTS español — instrucciones o feedback en ES con voz consistente. */
export const CF_DEEPGRAM_AURA_2_ES = '@cf/deepgram/aura-2-es' as const;

/** ASR Deepgram — alternativa/complemento a Whisper. */
export const CF_DEEPGRAM_NOVA_3 = '@cf/deepgram/nova-3' as const;

/**
 * Modelo por defecto para `callCloudflareLlama` y rutas que aún importan el string inline.
 * Mantener sincronizado con `src/lib/ai/cloudflare-workers-llama.ts`.
 */
export const DEFAULT_TEXT_GENERATION_MODEL = CF_LLAMA_3_3_70B_INSTRUCT_FP8_FAST;

/** Mapa legible → id (para logs, UI interna, futuro selector). */
export const WORKERS_AI_MODEL_REGISTRY = {
  inRepo: {
    textGeneration: CF_LLAMA_3_3_70B_INSTRUCT_FP8_FAST,
    vision: CF_LLAMA_3_2_11B_VISION_INSTRUCT,
    asr: CF_WHISPER_LARGE_V3_TURBO,
    ttsCourse: CF_DEEPGRAM_AURA_1,
    ttsTutorEn: CF_DEEPGRAM_AURA_2_EN,
  },
  roadmap: {
    embeddingsSemantic: CF_BGE_M3,
    embeddingsCompact: CF_EMBEDDINGGEMMA_300M,
    reranker: CF_BGE_RERANKER_BASE,
    moderation: CF_LLAMA_GUARD_3_8B,
    textSmallFast: CF_LLAMA_3_2_3B_INSTRUCT,
    asrEnglishTiny: CF_WHISPER_TINY_EN,
    voiceTurnDetection: CF_SMART_TURN_V2,
    summarization: CF_BART_LARGE_CNN,
    ttsMultilingualAlt: CF_MELOTTS,
    ttsSpanish: CF_DEEPGRAM_AURA_2_ES,
    asrDeepgram: CF_DEEPGRAM_NOVA_3,
  },
} as const;
