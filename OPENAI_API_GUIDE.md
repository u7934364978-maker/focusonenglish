# 🤖 Guía de APIs de OpenAI para Focus English

## 📊 Resumen de Uso Actual

Tu proyecto **Focus English** usa actualmente estas APIs de OpenAI:

| API | Modelo | Uso en el Proyecto | Archivos |
|-----|--------|-------------------|----------|
| **Chat Completions** | gpt-4o-mini | Evaluaciones simples (typos, grammar) | 4 archivos |
| **Chat Completions** | gpt-4o | Evaluaciones complejas (speaking, writing) | 6 archivos |
| **Audio Transcriptions** | whisper-1 | Transcribir audio de speaking | 1 archivo |

---

## 🎯 APIs Recomendadas para Focus English

### 1. **Chat Completions API** (⭐ Principal)

**Endpoint**: `https://api.openai.com/v1/chat/completions`

**¿Para qué la usas?**
- ✅ Evaluar respuestas de estudiantes
- ✅ Generar feedback personalizado
- ✅ Detectar errores gramaticales
- ✅ Sugerir mejoras

**Modelos Recomendados**:

#### A) **gpt-4o-mini** - Para evaluaciones rápidas
```typescript
// Uso actual en tu proyecto:
const completion = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [
    { role: 'system', content: 'You are an English teacher...' },
    { role: 'user', content: userAnswer }
  ],
  temperature: 0.3,
  max_tokens: 500,
});
```

**Cuándo usarlo**:
- ✅ Multiple choice evaluations
- ✅ Typo detection
- ✅ Simple grammar checks
- ✅ Sentence building exercises

**Ventajas**:
- 💰 Más barato (60% menos costo que gpt-4o)
- ⚡ Más rápido (latencia menor)
- 🎯 Suficiente para evaluaciones simples

**Precios**:
- Input: $0.150 / 1M tokens
- Output: $0.600 / 1M tokens

---

#### B) **gpt-4o** - Para evaluaciones complejas
```typescript
// Uso actual en speaking/writing:
const completion = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: messages,
  temperature: 0.5,
  max_tokens: 1000,
});
```

**Cuándo usarlo**:
- ✅ Speaking evaluations (Parts 1-4)
- ✅ Writing evaluations
- ✅ Detailed feedback
- ✅ Complex text analysis

**Ventajas**:
- 🧠 Mayor comprensión contextual
- 📝 Mejor análisis de textos largos
- 🎓 Feedback más detallado y preciso
- 🌐 Mejor manejo de matices del lenguaje

**Precios**:
- Input: $2.50 / 1M tokens
- Output: $10.00 / 1M tokens

---

### 2. **Whisper API** - Audio Transcription

**Endpoint**: `https://api.openai.com/v1/audio/transcriptions`

**¿Para qué la usas?**
- ✅ Transcribir respuestas de speaking a texto
- ✅ Evaluar pronunciación
- ✅ Analizar fluidez

**Modelo**: `whisper-1` (único disponible)

```typescript
// Uso actual:
const transcription = await openai.audio.transcriptions.create({
  file: audioFile,
  model: 'whisper-1',
  language: 'en',
  response_format: 'verbose_json',
  timestamp_granularities: ['word']
});
```

**Ventajas**:
- 🎤 Alta precisión en inglés
- 📊 Timestamps por palabra
- 🌍 Detecta acentos diversos
- ⚡ Rápido (2-5 segundos por minuto de audio)

**Precios**:
- $0.006 / minuto de audio

**Alternativa Mejorada**: `whisper-1` con parámetros optimizados:
```typescript
{
  model: 'whisper-1',
  language: 'en',
  response_format: 'verbose_json',
  timestamp_granularities: ['word', 'segment'],
  // Para obtener timestamps detallados
}
```

---

### 3. **Text-to-Speech API** (Opcional - No usado actualmente)

**Endpoint**: `https://api.openai.com/v1/audio/speech`

**¿Para qué podrías usarla?**
- 🔊 Generar audio de pronunciación correcta
- 📢 Crear ejercicios de listening
- 🗣️ Ejemplos de diálogos

**Modelos disponibles**:
- `tts-1` - Rápido, menor calidad
- `tts-1-hd` - Más lento, alta calidad

**Ejemplo de implementación**:
```typescript
const mp3 = await openai.audio.speech.create({
  model: 'tts-1',
  voice: 'alloy', // alloy, echo, fable, onyx, nova, shimmer
  input: 'This is an example sentence.',
  speed: 1.0,
});
```

**Precios**:
- tts-1: $15.00 / 1M caracteres
- tts-1-hd: $30.00 / 1M caracteres

**Recomendación**: Usar `elevenlabs` (que ya tienes instalado) para mejor calidad de voz.

---

## 💡 Recomendaciones de Optimización

### Estrategia de Modelos Actual vs Optimizada

#### ✅ Tu estrategia actual (BUENA):
```
Evaluaciones simples → gpt-4o-mini (barato, rápido)
Evaluaciones complejas → gpt-4o (preciso, detallado)
Audio transcription → whisper-1 (único disponible)
```

**Veredicto**: ✅ Ya estás usando la estrategia óptima!

---

### Optimizaciones Adicionales

#### 1. **Usar Structured Outputs** (Nueva feature)

En lugar de texto libre, forzar formato JSON:

```typescript
const completion = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: messages,
  response_format: { 
    type: "json_object" 
  },
  // Ahora siempre retorna JSON válido
});
```

**Ventajas**:
- ✅ Parsing confiable (no más errores de JSON.parse)
- ✅ Menor costo (menos tokens por respuesta estructurada)
- ✅ Más fácil de integrar

#### 2. **Function Calling** para evaluaciones

Definir schema de evaluación:

```typescript
const tools = [{
  type: "function",
  function: {
    name: "evaluate_answer",
    description: "Evaluate student's English answer",
    parameters: {
      type: "object",
      properties: {
        score: { type: "number", minimum: 0, maximum: 100 },
        feedback: { type: "string" },
        errors: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: { type: "string", enum: ["grammar", "spelling", "vocabulary"] },
              text: { type: "string" },
              correction: { type: "string" }
            }
          }
        }
      },
      required: ["score", "feedback"]
    }
  }
}];

const completion = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: messages,
  tools: tools,
  tool_choice: { type: "function", function: { name: "evaluate_answer" } }
});
```

**Ventajas**:
- ✅ Formato consistente siempre
- ✅ Validación automática
- ✅ Mejor precisión en evaluaciones

#### 3. **Streaming para mejor UX**

```typescript
const stream = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: messages,
  stream: true,
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content || '';
  // Enviar chunk al cliente en tiempo real
}
```

**Ventajas**:
- ✅ Feedback instantáneo
- ✅ Mejor experiencia de usuario
- ✅ Percepción de mayor velocidad

---

## 📊 Comparación de Modelos

### Chat Completions

| Modelo | Costo/1M tokens (input) | Costo/1M tokens (output) | Velocidad | Uso Recomendado |
|--------|------------------------|--------------------------|-----------|-----------------|
| **gpt-4o** | $2.50 | $10.00 | Media | Writing, Speaking complejo |
| **gpt-4o-mini** | $0.15 | $0.60 | Rápida | Grammar, Multiple choice |
| gpt-4-turbo | $10.00 | $30.00 | Lenta | ❌ No recomendado (muy caro) |
| gpt-3.5-turbo | $0.50 | $1.50 | Muy rápida | ⚠️ Menos preciso para evaluaciones |

### Audio

| API | Modelo | Costo | Uso Recomendado |
|-----|--------|-------|-----------------|
| **Transcriptions** | whisper-1 | $0.006/min | ✅ Speaking exercises |
| Speech (TTS) | tts-1 | $15/1M chars | ⚠️ Usar ElevenLabs mejor |
| Speech (TTS) | tts-1-hd | $30/1M chars | ⚠️ Usar ElevenLabs mejor |

---

## 💰 Estimación de Costos para Focus English

### Escenario: 100 estudiantes activos/mes

```
📝 Evaluaciones de texto (gpt-4o-mini):
   - 100 estudiantes × 50 evaluaciones/mes × 500 tokens promedio
   - = 2.5M tokens
   - Costo: ~$2.00/mes

🗣️ Evaluaciones de speaking (gpt-4o):
   - 100 estudiantes × 10 evaluaciones/mes × 1000 tokens
   - = 1M tokens
   - Costo: ~$12.50/mes

🎤 Transcripciones (whisper-1):
   - 100 estudiantes × 10 ejercicios × 2 minutos promedio
   - = 2000 minutos
   - Costo: ~$12.00/mes

TOTAL ESTIMADO: ~$26.50/mes para 100 estudiantes activos
```

**Costo por estudiante**: ~$0.27/mes

---

## 🔐 Configuración de API Key

### Paso 1: Obtener API Key

1. Ve a: https://platform.openai.com/api-keys
2. Click en **"Create new secret key"**
3. Nombre: `focusenglish-production`
4. Permissions: **All** (o específicas si prefieres)
5. Copia la key (empieza con `sk-proj-...`)

### Paso 2: Configurar en Cloudflare

En tu dashboard de Cloudflare Pages:

```
Settings → Environment variables → Add variable

Name: OPENAI_API_KEY
Value: sk-proj-abcd1234...
Environment: Production ✓  Preview ✗
```

### Paso 3: Verificar en el código

Tu código actual ya está bien configurado:

```typescript
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
```

---

## 🚀 Nuevas APIs a Considerar (Futuro)

### 1. **Assistants API** (Para tutores personalizados)

```typescript
// Crear asistente persistente por estudiante
const assistant = await openai.beta.assistants.create({
  name: "English Tutor for Student #123",
  instructions: "You are a personal English tutor...",
  model: "gpt-4o",
  tools: [{ type: "code_interpreter" }]
});
```

**Ventajas**:
- 💾 Mantiene contexto entre sesiones
- 📚 Puede acceder a archivos del estudiante
- 🎓 Aprendizaje personalizado
- 📊 Tracking de progreso integrado

**Cuándo implementar**: Fase 2 del proyecto

### 2. **Fine-tuning** (Para especializarte en IELTS/TOEFL)

```typescript
// Entrenar modelo específico para tu dominio
const fineTune = await openai.fineTuning.jobs.create({
  training_file: "file-abc123",
  model: "gpt-4o-mini",
  hyperparameters: {
    n_epochs: 3
  }
});
```

**Ventajas**:
- 🎯 Evaluaciones más precisas para exámenes específicos
- 💰 Potencialmente más barato (menos tokens)
- 🚀 Mayor velocidad

**Cuándo implementar**: Cuando tengas dataset de 500+ evaluaciones

---

## 🔍 Monitoreo y Debugging

### Dashboard de OpenAI

1. Ve a: https://platform.openai.com/usage
2. Monitorea:
   - 💰 Costos por día
   - 📊 Tokens usados por endpoint
   - ⏱️ Latencia promedio
   - ❌ Rate limits y errores

### Logs en Cloudflare

```typescript
// Agregar logging en tus API routes
console.log('OpenAI request:', {
  model: 'gpt-4o-mini',
  tokens: completion.usage?.total_tokens,
  cost: estimateCost(completion.usage),
});
```

---

## ✅ Checklist de Implementación

- [x] API Key configurada como variable de entorno
- [x] Modelos optimizados (mini para simple, gpt-4o para complejo)
- [x] Whisper para transcripciones
- [ ] Implementar structured outputs (JSON mode)
- [ ] Agregar function calling para evaluaciones
- [ ] Implementar streaming para mejor UX
- [ ] Monitorear costos semanalmente
- [ ] Considerar fine-tuning después de 6 meses

---

## 📚 Recursos Adicionales

- **Documentación oficial**: https://platform.openai.com/docs/api-reference
- **Playground**: https://platform.openai.com/playground
- **Pricing**: https://openai.com/pricing
- **Rate limits**: https://platform.openai.com/docs/guides/rate-limits
- **Best practices**: https://platform.openai.com/docs/guides/production-best-practices

---

## 🎯 Resumen - Respuesta Directa

### Las APIs que NECESITAS para Focus English:

1. ✅ **Chat Completions API** (ya la usas)
   - Modelo: `gpt-4o-mini` para evaluaciones simples
   - Modelo: `gpt-4o` para evaluaciones complejas
   
2. ✅ **Whisper API** (ya la usas)
   - Modelo: `whisper-1` para transcripciones

3. ❌ **NO necesitas** (por ahora):
   - Text-to-Speech (usa ElevenLabs)
   - DALL-E (no aplica)
   - Embeddings (no necesario aún)
   - Moderation (opcional)

### API Key a configurar:

```
OPENAI_API_KEY=sk-proj-...
```

**Solo necesitas UNA key que da acceso a todas las APIs de OpenAI.**

---

**Última actualización**: 2026-01-19
