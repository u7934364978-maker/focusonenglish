# 🔧 Solución: Ejercicios Vacíos y Listening sin Audio

## 📊 Diagnóstico de Problemas

### Problema 1: Ejercicios aparecen vacíos
**Captura mostrada**: Las preguntas aparecen como "Question 1", "Question 2", "Question 3", "Question 4" pero sin contenido visible.

**Causas Posibles**:
1. Error en la generación de IA (API key no configurada o límite excedido)
2. Ejercicios fallback no se están mostrando correctamente
3. Problema de renderizado en ExerciseRenderer

**Solución**:
- Verificar que OPENAI_API_KEY esté configurado en variables de entorno
- Revisar logs del servidor para ver si hay errores de generación
- Los ejercicios fallback deberían funcionar incluso sin API key

### Problema 2: Listening sin audio
**Situación**: El tipo `listening-comprehension` existe pero no está implementado en el catálogo y no tiene componente de audio.

**Solución**: Implementar sistema completo de listening con Text-to-Speech

---

## 🎯 Soluciones Implementables

### Solución 1: Verificar Variables de Entorno

```bash
# En DigitalOcean App Platform:
# 1. Ir a Settings → Environment Variables
# 2. Verificar que existe: OPENAI_API_KEY
# 3. Si no existe, agregarla con tu API key de OpenAI
```

### Solución 2: Añadir Listening al Catálogo

Editar `/lib/exercise-types.ts` y añadir:

```typescript
{
  id: 'listening-comprehension',
  name: 'Listening Comprehension',
  nameES: 'Comprensión Auditiva',
  category: 'listening',
  description: 'Listen to audio and answer questions',
  descriptionES: 'Escucha el audio y responde las preguntas',
  icon: '🎧',
  estimatedTime: 10,
  aiPromptTemplate: `Generate a {{level}} level listening comprehension exercise about {{topic}}.
Difficulty: {{difficulty}}

Create:
1. A dialogue or monologue (150-250 words) appropriate for {{level}} level
2. The text should be natural and conversational
3. Include 5-6 comprehension questions about the audio
4. Questions should test: main idea, specific details, inference, vocabulary

Format as JSON:
{
  "title": "Listening Exercise Title",
  "instructions": "Escucha el audio y responde las preguntas",
  "audioText": "The complete text to be read (this will be converted to audio)",
  "audioContext": "Brief context about the listening (e.g., 'A conversation at a restaurant')",
  "questions": [
    {
      "id": "q1",
      "question": "What is the main topic of the conversation?",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0,
      "explanation": "Explanation in Spanish"
    }
  ]
}

IMPORTANT: 
- audioText MUST be in ENGLISH (this is what will be read aloud)
- questions MUST be in ENGLISH
- explanations MUST be in SPANISH
- Use natural, conversational language appropriate for {{level}}
- {{difficultyContext}}`,
  supportedLevels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  difficultySettings: {
    easy: 'Clear, slow-paced audio with simple vocabulary. Questions test basic comprehension.',
    medium: 'Normal pace with standard vocabulary. Questions require understanding of main ideas and details.',
    hard: 'Natural pace with complex vocabulary. Questions test inference and nuanced understanding.'
  }
}
```

### Solución 3: Crear Componente AudioPlayer

Crear `/components/AudioPlayer.tsx`:

```typescript
'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';

interface AudioPlayerProps {
  text: string; // El texto a convertir en audio
  autoPlay?: boolean;
}

export default function AudioPlayer({ text, autoPlay = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Generar audio usando Text-to-Speech
  useEffect(() => {
    const generateAudio = async () => {
      if (!text) return;
      
      setIsLoading(true);
      try {
        // Opción 1: Usar Web Speech API (gratis, funciona en navegador)
        if ('speechSynthesis' in window) {
          // Browser TTS - funciona sin API key
          return;
        }
        
        // Opción 2: Usar OpenAI TTS API (mejor calidad)
        const response = await fetch('/api/text-to-speech', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text })
        });
        
        if (response.ok) {
          const audioBlob = await response.blob();
          const url = URL.createObjectURL(audioBlob);
          setAudioUrl(url);
        }
      } catch (error) {
        console.error('Error generating audio:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    generateAudio();
    
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [text]);

  const handlePlayPause = () => {
    if (!audioRef.current && 'speechSynthesis' in window) {
      // Usar Web Speech API
      if (isPlaying) {
        window.speechSynthesis.pause();
        setIsPlaying(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    } else if (audioRef.current) {
      // Usar audio file
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      handlePlayPause();
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-6 shadow-lg">
      {/* Audio Context */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
          <Volume2 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Listening Exercise</h3>
          <p className="text-sm text-gray-600">Click play to listen</p>
        </div>
      </div>

      {/* Audio element (if using API) */}
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={handlePlayPause}
          disabled={isLoading}
          className="w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6 ml-1" />
          )}
        </button>

        <button
          onClick={handleRestart}
          disabled={isLoading}
          className="w-12 h-12 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        {audioUrl && (
          <button
            onClick={toggleMute}
            className="w-12 h-12 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full flex items-center justify-center transition-all"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        )}

        <div className="flex-1 text-right">
          <span className="text-sm text-gray-600">
            {isPlaying ? '🎵 Playing...' : '⏸️ Paused'}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 p-3 bg-orange-100 rounded-lg">
        <p className="text-xs text-orange-800">
          💡 <strong>Tip:</strong> You can listen multiple times before answering
        </p>
      </div>
    </div>
  );
}
```

### Solución 4: Crear API de Text-to-Speech

Crear `/app/api/text-to-speech/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    // Usar OpenAI TTS
    const mp3 = await openai.audio.speech.create({
      model: 'tts-1', // o 'tts-1-hd' para mejor calidad
      voice: 'alloy', // opciones: alloy, echo, fable, onyx, nova, shimmer
      input: text,
      speed: 0.9 // Velocidad ligeramente reducida para aprendizaje
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': buffer.length.toString(),
      },
    });

  } catch (error: any) {
    console.error('Error generating speech:', error);
    return NextResponse.json(
      { error: 'Failed to generate speech', details: error.message },
      { status: 500 }
    );
  }
}
```

### Solución 5: Actualizar ExerciseRenderer

En `/components/ExerciseRenderer.tsx`, añadir soporte para listening:

```typescript
// Importar AudioPlayer
import AudioPlayer from './AudioPlayer';

// En el renderExerciseContent(), añadir caso para listening:
{exercise.type === 'listening-comprehension' && exercise.content.audioText && (
  <div className="mb-6">
    <AudioPlayer text={exercise.content.audioText} />
    
    {exercise.content.audioContext && (
      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm font-semibold text-blue-900 mb-1">📝 Context:</p>
        <p className="text-sm text-blue-800">{exercise.content.audioContext}</p>
      </div>
    )}
  </div>
)}
```

---

## 🚀 Pasos para Implementar

### Paso 1: Verificar API Key
```bash
# En tu terminal local
echo $OPENAI_API_KEY

# Si no está configurada, obtener una en: https://platform.openai.com/api-keys
```

### Paso 2: Configurar en DigitalOcean
1. Ir a tu app en DigitalOcean App Platform
2. Settings → Environment Variables
3. Añadir: `OPENAI_API_KEY` = `tu-api-key-aqui`
4. Guardar y hacer redeploy

### Paso 3: Implementar Cambios en Código
1. Añadir listening al catálogo (exercise-types.ts)
2. Crear AudioPlayer component
3. Crear API route text-to-speech
4. Actualizar ExerciseRenderer

### Paso 4: Testing
1. Ir a `/aula/a1/practice?category=listening` 
2. Verificar que se genera audio
3. Probar reproducción
4. Verificar que preguntas se muestran correctamente

---

## 💡 Alternativa SIN API de OpenAI

Si no quieres usar OpenAI TTS API (que cuesta dinero), puedes usar **Web Speech API** (gratis, funciona en el navegador):

### Ventajas:
- ✅ Completamente gratis
- ✅ No requiere API key
- ✅ Funciona offline después de la primera carga
- ✅ Buena calidad de voz

### Desventajas:
- ❌ Depende del navegador del usuario
- ❌ Voces varían según el sistema operativo
- ❌ No se puede personalizar tanto

El componente `AudioPlayer` ya incluye soporte para ambas opciones y automáticamente usa Web Speech API si no hay audioUrl.

---

## 🔍 Debug: Ejercicios Vacíos

Para investigar por qué los ejercicios aparecen vacíos:

1. **Revisar logs del servidor**:
```bash
# En DigitalOcean
# Ir a Runtime Logs y buscar errores de:
# - "Error generating exercise"
# - "OpenAI API error"
# - "Failed to parse AI response"
```

2. **Verificar respuesta del API**:
```javascript
// En el navegador, abrir DevTools → Network
// Filtrar por "generate-exercise"
// Ver la respuesta JSON
// Verificar que exercises[0].content.questions tenga datos
```

3. **Testing local**:
```bash
# Probar la API localmente
curl -X POST http://localhost:3000/api/generate-exercise \
  -H "Content-Type: application/json" \
  -d '{
    "exerciseType": "multiple-choice",
    "topic": "Weather",
    "difficulty": "easy",
    "level": "A1"
  }'
```

---

## 📞 Soporte Adicional

Si necesitas ayuda para implementar estos cambios, puedo:
1. Crear los archivos completos
2. Hacer commit y PR
3. Ayudar con debugging específico
4. Sugerir alternativas más simples
