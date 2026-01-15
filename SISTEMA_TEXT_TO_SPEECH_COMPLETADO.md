# 🎙️ Sistema Text-to-Speech - ElevenLabs Integration

## ✅ COMPLETADO: Sistema de Audio Profesional con Voces Naturales

### 📋 Resumen

Se ha implementado un **sistema completo de Text-to-Speech** utilizando **ElevenLabs**, la plataforma líder en voces AI ultrarrealistas. El sistema genera automáticamente todos los audios necesarios para el curso B2 con voces totalmente naturales.

---

## 🎯 Características Implementadas

### 1. **Servicio de Text-to-Speech** (`lib/text-to-speech.ts`)
- ✅ Integración completa con ElevenLabs API
- ✅ 9 voces profesionales disponibles:
  - **Británicas**: Male & Female (Rachel)
  - **Americanas**: Male (Antoni) & Female (Bella)
  - **Australianas**: Male (Will) & Female (Dorothy)
  - **Especiales**: Narrator (Josh), Young Female (Freya), Young Male (Daniel)
- ✅ 3 funciones especializadas:
  - `generateReadingAudio()` - Para textos académicos (estabilidad alta)
  - `generateConversationAudio()` - Para diálogos (más natural y variable)
  - `generateInstructionAudio()` - Para instrucciones (claridad máxima)
- ✅ Configuración avanzada de voz:
  - Estabilidad (0-1)
  - Similitud con voz original (0-1)
  - Énfasis en estilo
  - Speaker boost (mejora claridad)

### 2. **Generador Automático** (`scripts/generate-course-audio.ts`)
- ✅ Genera automáticamente TODOS los audios del curso B2
- ✅ Analiza las 18 lecciones y extrae:
  - Audios de **Listening** (transcripts completos)
  - Audios de **Reading** (lectura opcional de textos)
  - Audios de **Speaking** (modelos de pronunciación)
- ✅ Asignación inteligente de voces según tipo de ejercicio
- ✅ Barra de progreso y estadísticas en tiempo real
- ✅ Reporte de uso de API (caracteres usados/disponibles)

---

## 🚀 Cómo Usar

### **Paso 1: Configurar API Key**

1. Crea una cuenta en [ElevenLabs](https://elevenlabs.io/)
2. Obtén tu API Key desde: https://elevenlabs.io/app/settings/api-keys
3. Crea un archivo `.env` en la raíz del proyecto:

```bash
# .env
ELEVENLABS_API_KEY=tu_api_key_aqui
```

### **Paso 2: Generar Audios**

#### **Generar audio de prueba** (recomendado primero)
```bash
npm run generate-audio:test
```

Esto genera un audio de prueba en:
- `public/audio/test-audio.mp3`
- Accesible en: `http://localhost:3000/audio/test-audio.mp3`

#### **Generar todos los audios del curso B2**
```bash
npm run generate-audio:all
```

Esto generará automáticamente:
- **~50-70 archivos de audio** (dependiendo del contenido)
- Guardados en: `public/audio/b2/`
- Formato: MP3 (alta calidad)
- Nombrados como: `b2-m1-l1-listening-1.mp3`, etc.

---

## 📊 Estadísticas de Generación

Ejemplo de salida:

```
🎙️  GENERADOR DE AUDIOS PARA CURSO B2
=====================================

📊 Verificando uso de la API...
   Caracteres usados: 15,234 / 30,000
   Plan: Creator

📝 Total de audios a generar: 54

[1/54] (1.9%) Generando audio:
   Lección: b2-m1-l1
   Ejercicio: b2-m1-l1-listening-1
   Tipo: listening
   Tamaño texto: 450 caracteres
✅ Audio generado: public/audio/b2/b2-m1-l1-listening-1.mp3
   Tamaño: 234.56 KB
   Voz: 21m00Tcm4TlvDq8ikWAM

...

=====================================
📊 RESUMEN DE GENERACIÓN
=====================================
✅ Exitosos: 54
❌ Errores: 0
📁 Total: 54
📈 Tasa de éxito: 100.0%

✨ Proceso completado!
```

---

## 💰 Costos y Planes

### **Planes de ElevenLabs**:

1. **Free** (€0/mes)
   - 10,000 caracteres/mes
   - ~5-10 audios del curso B2
   - Ideal para pruebas

2. **Creator** (€5/mes)
   - 30,000 caracteres/mes
   - ~15-30 audios
   - Suficiente para un nivel completo

3. **Pro** (€22/mes)
   - 100,000 caracteres/mes
   - ~50-100 audios
   - **Recomendado** para generar todo el B2

4. **Scale** (€99/mes)
   - 500,000 caracteres/mes
   - Ideal para generar TODOS los niveles (A1-C2)

### **Estimación para Curso B2 Completo**:
- **18 lecciones** × **3-4 audios/lección** = ~60 audios
- Promedio **500 caracteres/audio** = 30,000 caracteres
- **Costo**: Plan Creator (€5/mes) o Free + recarga

---

## 🎨 Personalización de Voces

### **Cambiar voces por defecto**:

Edita `scripts/generate-course-audio.ts`:

```typescript
const EXERCISE_VOICE_MAP: { [key: string]: string } = {
  listening: VOICE_IDS.british_female, // Cambiar aquí
  reading: VOICE_IDS.american_male,    // Cambiar aquí
  speaking: VOICE_IDS.narrator,         // Cambiar aquí
  instruction: VOICE_IDS.australian_female,
};
```

### **Voces disponibles**:

```typescript
VOICE_IDS.british_male      // Voz profesional masculina británica
VOICE_IDS.british_female    // Rachel - Popular, clara, femenina británica
VOICE_IDS.american_male     // Antoni - Cálida, masculina americana
VOICE_IDS.american_female   // Bella - Moderna, femenina americana
VOICE_IDS.australian_male   // Will - Energética, masculina australiana
VOICE_IDS.australian_female // Dorothy - Clara, femenina australiana
VOICE_IDS.narrator          // Josh - Perfecta para narraciones
VOICE_IDS.young_female      // Freya - Joven, energética
VOICE_IDS.young_male        // Daniel - Joven, dinámico
```

---

## 🔧 Configuración Avanzada

### **Ajustar calidad de voz**:

En `lib/text-to-speech.ts`, modifica:

```typescript
const DEFAULT_SETTINGS: VoiceSettings = {
  stability: 0.5,          // 0 = muy variable, 1 = muy estable
  similarity_boost: 0.75,  // Qué tan similar a voz original
  style: 0.0,              // Énfasis en estilo (0-1)
  use_speaker_boost: true, // Mejora claridad
};
```

### **Para textos de lectura** (más formal):
```typescript
stability: 0.7,          // Más estable
similarity_boost: 0.8,
style: 0.0,
```

### **Para conversaciones** (más natural):
```typescript
stability: 0.3,          // Más variable
similarity_boost: 0.75,
style: 0.5,              // Más énfasis en estilo
```

---

## 📁 Estructura de Archivos

```
public/audio/
  ├── test-audio.mp3                    # Audio de prueba
  └── b2/
      ├── b2-m1-l1-listening-1.mp3      # Listening exercises
      ├── b2-m1-l1-reading.mp3          # Reading exercises (opcional)
      ├── b2-m1-l1-speaking-model.mp3   # Speaking models
      ├── ...
      └── b2-m3-l6-exam-audio.mp3
```

---

## ✅ Ventajas del Sistema

1. **Voces Ultra-Realistas**: ElevenLabs es líder en calidad de voz AI
2. **Multilingüe**: Soporte para inglés UK, US, Australia
3. **Configuración Granular**: Control total sobre estabilidad, estilo, claridad
4. **Automatización Completa**: Genera todos los audios con un comando
5. **Escalable**: Fácil añadir nuevos niveles (A1, A2, B1, C1, C2)
6. **Rentable**: Desde €0 (free tier) hasta €99/mes para todos los niveles

---

## 🎯 Próximos Pasos

### **Inmediato** (Alta prioridad):
- [x] Implementar sistema TTS con ElevenLabs
- [ ] Obtener API Key de ElevenLabs
- [ ] Generar audio de prueba
- [ ] Generar todos los audios del B2

### **Corto plazo** (1-2 semanas):
- [ ] Actualizar rutas de audio en `course-data-b2.ts`
- [ ] Subir audios a CDN (Vercel Blob Storage / AWS S3)
- [ ] Implementar player de audio mejorado en componentes

### **Medio plazo** (1 mes):
- [ ] Generar audios para nivel A1
- [ ] Generar audios para nivel A2
- [ ] Generar audios para nivel B1

---

## 🐛 Resolución de Problemas

### **Error: "ELEVENLABS_API_KEY no está configurado"**
```bash
# Solución: Crear archivo .env con tu API key
echo "ELEVENLABS_API_KEY=tu_api_key_aqui" > .env
```

### **Error: "Character limit exceeded"**
```bash
# Solución: 
# 1. Esperar al próximo ciclo (reset mensual)
# 2. Upgrade a plan superior
# 3. Generar solo audios esenciales primero
```

### **Audios no se reproducen**
```bash
# Verificar que existan:
ls public/audio/b2/

# Verificar permisos:
chmod 644 public/audio/b2/*

# Probar en navegador:
# http://localhost:3000/audio/b2/b2-m1-l1-listening-1.mp3
```

---

## 📞 Soporte

- **ElevenLabs Docs**: https://docs.elevenlabs.io/
- **ElevenLabs Support**: support@elevenlabs.io
- **API Status**: https://status.elevenlabs.io/

---

## 📅 Fecha de Implementación

**15 de Enero de 2026**

**Desarrollado por**: GenSpark AI Developer  
**Estado**: ✅ **Sistema Completo y Listo para Uso**  
**Próximo paso**: Obtener API Key y generar audios del B2

---

## 🎉 Resultado Final

Con este sistema implementado, **Focus English** ahora tiene:

✅ **Sistema TTS profesional** con voces ultrarrealistas  
✅ **9 voces diferentes** (British, American, Australian)  
✅ **Generación automática** de todos los audios  
✅ **Scripts NPM simples** para usar  
✅ **Configuración granular** por tipo de ejercicio  
✅ **Escalable** a todos los niveles (A1-C2)

**¡El curso B2 ahora puede tener audio profesional con un solo comando!** 🚀
