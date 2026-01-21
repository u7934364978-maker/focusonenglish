# 🤖 Guía de Configuración de OpenAI API para Focus English

## 📊 Estado Actual del Proyecto

### Uso de APIs en Focus English

El proyecto actualmente usa **2 modelos de OpenAI**:

| Modelo | Uso en el Proyecto | Archivos | Propósito |
|--------|-------------------|----------|-----------|
| **gpt-4o** | ⭐ Principal | 6 archivos | Evaluaciones complejas de speaking y writing |
| **gpt-4o-mini** | 💰 Económico | 4 archivos | Evaluaciones simples y detección de errores |

### Rutas API que Usan OpenAI

```typescript
// ✅ Usando GPT-4O (Evaluaciones Complejas)
app/api/evaluate-speaking-part1/route.ts    // Speaking FCE Part 1
app/api/evaluate-speaking-part2/route.ts    // Speaking FCE Part 2
app/api/evaluate-speaking-part3/route.ts    // Speaking FCE Part 3
app/api/evaluate-speaking-part4/route.ts    // Speaking FCE Part 4
app/api/evaluate-text-answer/route.ts       // Respuestas de texto abiertas
app/api/evaluate-writing/route.ts           // Writing assessment

// ✅ Usando GPT-4O-MINI (Evaluaciones Simples)
app/api/evaluate-answer/route.ts            // Respuestas cortas
app/api/evaluate-multiple-choice/route.ts   // Multiple choice
app/api/evaluate-sentence-building/route.ts // Construcción de frases
app/api/evaluate-speaking/route.ts          // Transcripción de audio
```

---

## 🎯 Recomendación de API para Focus English

### ✅ API Recomendada: **Chat Completions API**

Basándome en tu screenshot y el análisis del proyecto, la mejor opción es:

```
API: Chat Completions API
Endpoint: https://api.openai.com/v1/chat/completions
Modelos a usar:
  - gpt-4o (para evaluaciones complejas)
  - gpt-4o-mini (para evaluaciones simples)
```

### ¿Por qué Chat Completions API?

| Característica | Ventaja para Focus English |
|----------------|----------------------------|
| **Multimodal** | Soporta texto, audio, imágenes y video |
| **Conversacional** | Ideal para ejercicios de speaking interactivos |
| **Evaluaciones** | Contexto largo para analizar respuestas complejas |
| **Flexibilidad** | Cambiar entre gpt-4o y gpt-4o-mini según necesidad |
| **Function Calling** | Integración con Stripe, HubSpot, Supabase |
| **Streaming** | Respuestas en tiempo real para mejor UX |

---

## 📋 Modelos Recomendados por Caso de Uso

### 🎤 Speaking Exercises (Actual: ✅ gpt-4o)

```typescript
// ✅ Correcto - Continuar usando gpt-4o
const response = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    {
      role: 'system',
      content: 'You are an expert FCE examiner...'
    },
    {
      role: 'user',
      content: audioTranscription
    }
  ],
  temperature: 0.3, // Más consistente para evaluaciones
  max_tokens: 1500
});
```

**Razón**: 
- Análisis profundo de gramática, vocabulario y coherencia
- Contexto largo para respuestas de speaking (1-2 minutos)
- Criterios de evaluación FCE complejos

### 📝 Writing Assessment (Actual: ✅ gpt-4o)

```typescript
// ✅ Correcto - Continuar usando gpt-4o
const response = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    {
      role: 'system',
      content: 'You are an FCE writing examiner...'
    },
    {
      role: 'user',
      content: `Essay: ${userEssay}\n\nEvaluate according to FCE criteria.`
    }
  ],
  temperature: 0.2, // Muy consistente para writing
  max_tokens: 2000
});
```

**Razón**:
- Evaluación de estructura, coherencia y vocabulario avanzado
- Feedback detallado con ejemplos de mejora
- Análisis de register y style

### ✏️ Simple Exercises (Actual: ✅ gpt-4o-mini)

```typescript
// ✅ Correcto - Continuar usando gpt-4o-mini
const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [
    {
      role: 'system',
      content: 'Check if the answer is correct or has typos.'
    },
    {
      role: 'user',
      content: `Correct: ${correctAnswer}\nUser: ${userAnswer}`
    }
  ],
  temperature: 0.1, // Muy determinístico
  max_tokens: 100
});
```

**Razón**:
- Más económico (60-80% más barato)
- Suficiente para detección de errores simples
- Respuestas rápidas

### 🎧 Audio Transcription (Actual: ✅ Whisper API)

```typescript
// ✅ Correcto - Whisper es la mejor opción
const transcription = await openai.audio.transcriptions.create({
  file: audioFile,
  model: 'whisper-1',
  language: 'en' // Mejor precisión para inglés
});
```

**Razón**:
- API especializada en transcripción de audio
- Mejor precisión que gpt-4o para speech-to-text
- Más económico que usar Chat Completions

---

## 💰 Optimización de Costos

### Costos Actuales (Enero 2026)

| Modelo | Input (1M tokens) | Output (1M tokens) | Uso Recomendado |
|--------|-------------------|--------------------| ---------------|
| **gpt-4o** | $2.50 | $10.00 | Evaluaciones complejas (speaking, writing) |
| **gpt-4o-mini** | $0.15 | $0.60 | Evaluaciones simples (multiple choice, short answers) |
| **whisper-1** | $0.006/min | - | Transcripción de audio |

### Estrategia de Optimización

```typescript
// ✅ BUENA PRÁCTICA: Selección inteligente de modelo
function selectModel(exerciseType: string): string {
  const complexEvaluations = [
    'speaking-part1', 'speaking-part2', 
    'speaking-part3', 'speaking-part4',
    'writing-essay', 'writing-letter'
  ];
  
  const simpleEvaluations = [
    'multiple-choice', 'fill-in-blanks',
    'sentence-building', 'grammar-check'
  ];
  
  if (complexEvaluations.includes(exerciseType)) {
    return 'gpt-4o'; // Evaluación compleja
  }
  
  if (simpleEvaluations.includes(exerciseType)) {
    return 'gpt-4o-mini'; // Evaluación simple
  }
  
  return 'gpt-4o-mini'; // Default económico
}
```

### Estimación de Costos Mensuales

**Escenario: 100 estudiantes activos**

| Actividad | Modelo | Tokens/mes | Costo/mes |
|-----------|--------|------------|-----------|
| Speaking (4 parts × 5/mes) | gpt-4o | 10M | $25.00 |
| Writing (2 essays/mes) | gpt-4o | 5M | $12.50 |
| Exercises simples (50/mes) | gpt-4o-mini | 20M | $3.00 |
| Audio transcription (20 min/mes) | whisper-1 | 2,000 min | $12.00 |
| **TOTAL** | - | - | **~$52.50/mes** |

**Costo por estudiante: ~$0.52/mes** ✅ Muy económico

---

## 🔧 Configuración en Cloudflare Pages

### Variables de Entorno a Configurar

```bash
# 1. OpenAI API Key (OBLIGATORIO)
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# 2. OpenAI Organization ID (OPCIONAL - solo si tienes múltiples organizaciones)
OPENAI_ORG_ID=org-xxxxxxxxxxxxxxxxxxxxxxxx

# 3. Site URL (para referencias en prompts)
NEXT_PUBLIC_SITE_URL=https://focusonenglish.pages.dev
```

### Dónde Obtener la API Key

1. **Ve a tu Dashboard de OpenAI**: https://platform.openai.com/api-keys
2. **Crea una nueva API Key**:
   - Click en "Create new secret key"
   - Nombre: `Focus English Production`
   - Permisos: `All` (o específicos si prefieres)
3. **Copia la key**: Empieza con `sk-proj-...`
4. **Guárdala de forma segura**: No podrás verla de nuevo

### Configuración en Cloudflare Dashboard

```bash
# Dashboard → Pages → focusonenglish → Settings → Environment variables

# Production Environment
OPENAI_API_KEY = sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Preview Environment (Opcional - usa una key diferente para testing)
OPENAI_API_KEY = sk-proj-yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
```

---

## 🛡️ Mejores Prácticas de Seguridad

### ✅ Hacer

```typescript
// ✅ Validar la API key en el servidor
if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not configured');
}

// ✅ Nunca exponer la API key en el cliente
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Seguro - solo en servidor
});

// ✅ Rate limiting por usuario
const userRequestCount = await getUserRequestCount(userId);
if (userRequestCount > 100) {
  return new Response('Rate limit exceeded', { status: 429 });
}

// ✅ Logging de uso para monitoreo
console.log(`[OpenAI] User ${userId} - Model: ${model} - Tokens: ${tokens}`);
```

### ❌ Evitar

```typescript
// ❌ NUNCA - API key en el cliente
const OPENAI_API_KEY = 'sk-proj-xxx'; // Vulnerable

// ❌ NUNCA - API key en código fuente
const openai = new OpenAI({
  apiKey: 'sk-proj-xxxxxxxx' // Hard-coded - MAL
});

// ❌ NUNCA - Sin rate limiting
// Permite abuso y costos inesperados
```

---

## 📊 Monitoreo y Límites

### Configuración Recomendada

1. **Usage Limits** (https://platform.openai.com/account/limits)
   ```
   Hard Limit: $100/mes
   Soft Limit: $50/mes (email alert)
   ```

2. **Monitoring Dashboard** (https://platform.openai.com/usage)
   - Revisa diariamente durante la primera semana
   - Después revisa semanalmente

3. **Alertas Automáticas**
   - Configura notificaciones al 50%, 75% y 90% del límite
   - Email: tu-email@focusenglish.com

---

## 🚀 Próximos Pasos

### Checklist de Implementación

- [ ] **Paso 1**: Obtener API key de OpenAI
  - [ ] Ir a https://platform.openai.com/api-keys
  - [ ] Crear key `Focus English Production`
  - [ ] Copiar y guardar la key de forma segura

- [ ] **Paso 2**: Configurar en Cloudflare Pages
  - [ ] Dashboard → Pages → focusonenglish
  - [ ] Settings → Environment variables
  - [ ] Agregar `OPENAI_API_KEY=sk-proj-xxx`

- [ ] **Paso 3**: Configurar Límites de Uso
  - [ ] Hard limit: $100/mes
  - [ ] Soft limit: $50/mes
  - [ ] Alertas configuradas

- [ ] **Paso 4**: Testing
  - [ ] Probar ejercicio de speaking
  - [ ] Probar ejercicio de writing
  - [ ] Probar ejercicio simple (multiple choice)
  - [ ] Verificar transcripción de audio

- [ ] **Paso 5**: Monitoreo
  - [ ] Revisar usage dashboard después de 24h
  - [ ] Configurar alertas de Sentry para errores de API
  - [ ] Documentar costos reales vs estimados

---

## 📚 Recursos Adicionales

### Documentación Oficial

- **OpenAI API Reference**: https://platform.openai.com/docs/api-reference
- **Chat Completions Guide**: https://platform.openai.com/docs/guides/chat-completions
- **Whisper API**: https://platform.openai.com/docs/guides/speech-to-text
- **Best Practices**: https://platform.openai.com/docs/guides/production-best-practices

### Guías del Proyecto

- `CLOUDFLARE_DASHBOARD_CONFIG.md` - Configuración de variables de entorno
- `TYPESCRIPT_ESLINT_AUDIT.md` - Errores a resolver antes de producción
- `MEJORAS_PENDIENTES.md` - Roadmap completo del proyecto

---

## ❓ FAQ

### ¿Puedo usar Gemini API en lugar de OpenAI?

Sí, el proyecto tiene soporte para Gemini API como fallback:

```typescript
// Si no hay OPENAI_API_KEY, usa Gemini
const apiKey = process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY;
```

Pero **OpenAI es mejor para Focus English** porque:
- Mayor precisión en evaluaciones de speaking/writing
- Whisper API especializada en transcripción
- Más consistencia en feedback educativo

### ¿Qué pasa si se acaba el límite de uso?

1. Las requests fallarán con error `429 - Rate Limit Exceeded`
2. Los estudiantes verán mensaje de error
3. Soluciones:
   - Aumentar el límite mensual
   - Optimizar uso con caching
   - Implementar fallback a ejercicios pre-generados

### ¿Cuánto cuesta realmente al mes?

Con **100 estudiantes activos**:
- Costo estimado: **$52.50/mes**
- Costo por estudiante: **$0.52/mes**
- Muy económico comparado con el precio de suscripción

---

## 🎓 Conclusión

### Resumen de Configuración Óptima

```yaml
API Recomendada: Chat Completions API
Modelos:
  Evaluaciones Complejas: gpt-4o
  Evaluaciones Simples: gpt-4o-mini
  Transcripción Audio: whisper-1

Variables de Entorno:
  OPENAI_API_KEY: sk-proj-xxx (OBLIGATORIO)
  
Límites:
  Hard Limit: $100/mes
  Soft Limit: $50/mes
  
Monitoreo:
  Dashboard: https://platform.openai.com/usage
  Alertas: 50%, 75%, 90%
```

### Estado del Proyecto

✅ **Todo está correctamente configurado en el código**
- gpt-4o para evaluaciones complejas ✅
- gpt-4o-mini para evaluaciones simples ✅
- Whisper para transcripción de audio ✅

🔧 **Siguiente paso**: Configurar `OPENAI_API_KEY` en Cloudflare Pages

---

**Documentación creada**: 19 de Enero 2026  
**Última actualización**: 19 de Enero 2026  
**Próxima revisión**: Después del primer deployment
