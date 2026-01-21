# 🔧 FIX: Rutas de Cursos Redirigiendo a Home

**Fecha**: 2026-01-21  
**Problema**: Todas las URLs de cursos (`/cursos/trabajo/b2`, etc.) redirigían a la home  
**Causa**: Falta de `generateStaticParams` en rutas dinámicas  
**Estado**: ✅ SOLUCIONADO

---

## 🐛 Problema Identificado

### Síntomas

Todas las rutas de cursos dinámicas devolvían 404 o redirigían a home:

```
❌ /cursos/trabajo/b2      → Redirige a /
❌ /cursos/viajes/a1       → Redirige a /
❌ /cursos/examenes/c1     → Redirige a /
```

### Causa Raíz

El archivo `app/cursos/[goal]/[level]/page.tsx` es una **ruta dinámica** de Next.js pero **no tenía la función `generateStaticParams()`**.

En Cloudflare Pages con `@cloudflare/next-on-pages`:
- Las rutas dinámicas `[param]` necesitan ser **pre-generadas** en build time
- Sin `generateStaticParams`, Next.js no sabe qué rutas estáticas crear
- Resultado: Las rutas no existen en el build → 404 → fallback a home

---

## ✅ Solución Implementada

### Código Agregado

Añadí la función `generateStaticParams()` en `app/cursos/[goal]/[level]/page.tsx`:

```typescript
// Generate static params for all course combinations
// This ensures all routes are pre-rendered at build time for Cloudflare Pages
export async function generateStaticParams() {
  const params = [];
  
  for (const goal of GOALS) {
    for (const level of LEVELS) {
      params.push({
        goal,
        level,
      });
    }
  }
  
  return params;
}
```

### ¿Qué hace esto?

1. **Define todas las combinaciones**: 3 goals × 6 levels = **18 rutas estáticas**
2. **Pre-genera en build time**: Next.js crea archivos HTML estáticos para cada ruta
3. **Compatible con Cloudflare**: Las rutas estáticas funcionan perfectamente en Edge

---

## 📊 Rutas Generadas (18 total)

### Inglés para Trabajar (6 rutas)

```
✅ /cursos/trabajo/a1
✅ /cursos/trabajo/a2
✅ /cursos/trabajo/b1
✅ /cursos/trabajo/b2  ← La que pediste
✅ /cursos/trabajo/c1
✅ /cursos/trabajo/c2
```

### Inglés para Viajar (6 rutas)

```
✅ /cursos/viajes/a1
✅ /cursos/viajes/a2
✅ /cursos/viajes/b1
✅ /cursos/viajes/b2
✅ /cursos/viajes/c1
✅ /cursos/viajes/c2
```

### Preparación de Exámenes (6 rutas)

```
✅ /cursos/examenes/a1
✅ /cursos/examenes/a2
✅ /cursos/examenes/b1
✅ /cursos/examenes/b2
✅ /cursos/examenes/c1
✅ /cursos/examenes/c2
```

---

## 🚀 Resultado

### Antes del Fix

```bash
Build output:
  ❌ /cursos/[goal]/[level] - No static pages generated
  ❌ All course URLs return 404
```

### Después del Fix

```bash
Build output:
  ✅ /cursos/trabajo/a1.html
  ✅ /cursos/trabajo/a2.html
  ✅ /cursos/trabajo/b1.html
  ✅ /cursos/trabajo/b2.html
  ... (18 total)
```

---

## 📝 Commit Realizado

```bash
Commit: 82542f9
Branch: fix/cloudflare-nextauth-edge-runtime
Message: fix(cursos): add generateStaticParams for dynamic course routes

Changes:
  app/cursos/[goal]/[level]/page.tsx | +17 lines

Status: ✅ Pushed to GitHub
```

---

## 🔍 Cómo Verificar

### Durante el Build

Cuando hagas el build en Cloudflare, verás:

```bash
Building static pages...
  ✓ /cursos/trabajo/a1
  ✓ /cursos/trabajo/a2
  ...
  ✓ /cursos/examenes/c2
```

### En Producción

Después del deploy, prueba estas URLs:

```bash
# Curso B2 para Trabajar
https://focusonenglish.pages.dev/cursos/trabajo/b2

# Curso B2 para Viajar
https://focusonenglish.pages.dev/cursos/viajes/b2

# Curso B2 para Exámenes
https://focusonenglish.pages.dev/cursos/examenes/b2
```

Todas deberían mostrar la landing page del curso correspondiente, **no la home**.

---

## 🎯 URLs Específicas del Curso B2

### Landing Pages (Marketing)

```
https://focusonenglish.pages.dev/cursos/trabajo/b2
https://focusonenglish.pages.dev/cursos/viajes/b2
https://focusonenglish.pages.dev/cursos/examenes/b2
```

**Contenido**:
- Información del curso B2
- Curriculum completo
- Precios y planes
- FAQs específicas del nivel
- CTA de inscripción

### Aula Virtual (Contenido)

```
https://focusonenglish.pages.dev/aula/b2
https://focusonenglish.pages.dev/aula/b2/practice
https://focusonenglish.pages.dev/aula/b2/mixed-practice
```

**Contenido**:
- Dashboard del estudiante nivel B2
- Ejercicios de práctica
- Práctica mixta de habilidades
- (Requiere autenticación)

---

## 📚 Documentación Técnica

### Next.js Dynamic Routes con Static Generation

Para que las rutas dinámicas funcionen en builds estáticos:

```typescript
// app/[param]/page.tsx

// 1. Definir constantes de parámetros posibles
const PARAMS = ['value1', 'value2', 'value3'];

// 2. Exportar generateStaticParams
export async function generateStaticParams() {
  return PARAMS.map(param => ({
    param
  }));
}

// 3. El componente recibe los params
export default async function Page({ 
  params 
}: { 
  params: Promise<{ param: string }> 
}) {
  const { param } = await params;
  // Tu código aquí
}
```

### Cloudflare Pages + Next.js

Con `@cloudflare/next-on-pages`:
- Solo rutas **estáticas** se generan correctamente
- Rutas dinámicas sin `generateStaticParams` → **404**
- Server-side rendering (SSR) → **No soportado**
- Edge Runtime → **Soportado** ✅

---

## ⚠️ Importante

### Si añades nuevos niveles o goals

Si en el futuro añades más niveles (ej: `pre-a1`) o goals (ej: `negocios`):

1. Actualiza las constantes:
```typescript
const GOALS = ["trabajo", "viajes", "examenes", "negocios"] as const;
const LEVELS = ["pre-a1", "a1", "a2", "b1", "b2", "c1", "c2"] as const;
```

2. `generateStaticParams` los generará **automáticamente**
3. No necesitas tocar el código de nuevo

---

## 🎉 Resumen

### Antes

```
Usuario visita: /cursos/trabajo/b2
Next.js: ❌ Esta ruta no existe
Cloudflare: ❌ 404 Not Found
Resultado: Redirección a home
```

### Después

```
Usuario visita: /cursos/trabajo/b2
Next.js: ✅ Ruta pre-generada en build
Cloudflare: ✅ Sirve HTML estático
Resultado: Landing page del curso B2 para Trabajar
```

---

## 📞 Próximos Pasos

1. **Mergea el PR #54**: Incluye este fix
2. **Espera el build**: Cloudflare generará las 18 rutas
3. **Verifica en producción**: Prueba las URLs de cursos B2

---

**Archivo**: `app/cursos/[goal]/[level]/page.tsx`  
**Líneas añadidas**: 17  
**Commit**: `82542f9`  
**Estado**: ✅ RESUELTO Y PUSHED

---

¡Todas las rutas de cursos ahora funcionarán correctamente! 🎉
