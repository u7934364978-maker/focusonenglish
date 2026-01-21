# Auditoría TypeScript y ESLint - Focus English

**Fecha**: 19 de Enero 2026  
**Estado**: Auditoría completada - Plan de corrección pendiente  
**Estimación**: 4-6 horas de trabajo

---

## 📊 Resumen Ejecutivo

### TypeScript (`npm run type-check`)
- **Total de errores**: 73 errores
- **Severidad**: Media-Alta (bloquea builds en producción si se habilita)
- **Estado actual**: `typescript.ignoreBuildErrors: true` en `next.config.js`

### ESLint (`npm run lint`)
- **Total de errores**: 6 errores reales
- **Total de warnings**: ~100 warnings
- **Severidad**: Baja (mayormente advertencias de estilo de código)
- **Estado actual**: `eslint.ignoreDuringBuilds: true` en `next.config.js`

---

## 🔴 Errores TypeScript - Clasificación

### 1. **Actualización de Stripe API** (3 errores - CRÍTICOS)

```
app/api/create-checkout-session/route.ts(9,7): error TS2322: Type '"2024-11-20.acacia"' is not assignable to type '"2025-12-15.clover"'.
app/api/webhooks/stripe/route.ts(7,7): error TS2322: Type '"2024-11-20.acacia"' is not assignable to type '"2025-12-15.clover"'.
app/api/webhooks/stripe/route.ts(201,78): error TS2339: Property 'current_period_end' does not exist on type 'Subscription'.
```

**Causa**: Versión de `@stripe/stripe-js` o `stripe` desactualizada o usando API version antigua  
**Impacto**: Alto - Afecta pagos y suscripciones  
**Solución**: Actualizar constante `apiVersion` a `"2025-12-15.clover"` y verificar cambios en API

---

### 2. **Next.js 15 - Async Params** (1 error)

```
.next/types/app/curso-b2/leccion/[lessonId]/page.ts(34,29): error TS2344: Type '{ params: { lessonId: string; }; }' does not satisfy the constraint 'PageProps'.
```

**Causa**: Next.js 15 cambió `params` a ser async (Promise)  
**Impacto**: Medio - Afecta rutas dinámicas  
**Solución**: Usar `await` en params: `const { lessonId } = await params;`

---

### 3. **Nullable Checks** (17 errores)

Variables que pueden ser `null` o `undefined`:

```typescript
// app/profile/page.tsx (11 errores)
profile.name // 'profile' is possibly 'null'

// lib/auth.ts (4 errores)  
user.id // Property 'id' does not exist
supabase.from() // 'supabase' is possibly 'null'

// app/api/generate-exercise/route.ts (2 errores)
generateRequest.count // possibly 'undefined'
```

**Causa**: Falta de null-checks y optional chaining  
**Impacto**: Medio - Puede causar runtime errors  
**Solución**: Agregar `?.`, `??`, y guards condicionales

---

### 4. **Type Mismatches en Ejercicios** (35 errores)

Problemas en `components/course/LessonViewer.tsx` y componentes relacionados:

```typescript
// Faltan propiedades en types
Property 'type' does not exist on type 'ClozeQuestion'
Property 'question' does not exist on type 'ClozeQuestion'
Property 'questions' does not exist on type 'WordFormationExercise'
Property 'grammarPoint' does not exist on type 'VocabularyExercise'
```

**Causa**: Type definitions incompletas o tipos discriminados mal implementados  
**Impacto**: Alto - Core functionality de ejercicios  
**Solución**: Refactorizar tipos en `src/types/exercises.ts`

---

### 5. **Errores en API Routes** (8 errores)

```typescript
// app/api/evaluate-multiple-choice/route.ts
Cannot find name 'userAnswer'
Cannot find name 'correctAnswer'

// lib/ai/exercise-generator.ts
Cannot assign to 'content' because it is a constant

// lib/ai/fallback-exercises.ts
Type 'string' is not assignable to type 'ExerciseCategory'
```

**Causa**: Variables no definidas, asignaciones incorrectas  
**Impacto**: Alto - Afecta evaluación de ejercicios  
**Solución**: Definir variables faltantes y usar `let` en lugar de `const`

---

### 6. **Errores en Componentes Speaking** (4 errores)

```typescript
// components/course/SpeakingPart1-4.tsx
Type '(data: { transcript: string; blob: Blob; }) => void' is not assignable to type '(audioBlob: Blob, transcript: string) => void'
```

**Causa**: Firma de función incorrecta  
**Impacto**: Medio - Afecta grabación de audio  
**Solución**: Ajustar orden de parámetros o estructura de objeto

---

### 7. **Otros Errores** (5 errores)

- Checkout redirect deprecated (`redirectToCheckout` ya no existe en Stripe)
- Duplicated object keys en `lib/course-data-b2.ts`
- Type compatibility en metodologías

---

## 🟡 Warnings ESLint

### Errores Reales (6 - FÁCIL DE ARREGLAR)

```
./app/contacto/page.tsx
315:96  Error: `"` can be escaped with `&quot;`
315:120 Error: `"` can be escaped with `&quot;`

./app/cuenta/registro/page.tsx
363:80  Error: `"` can be escaped with `&quot;`
363:92  Error: `"` can be escaped with `&quot;`

./app/curso-b2/leccion/[lessonId]/page.tsx
19:60  Error: `'` can be escaped with `&apos;`
19:81  Error: `'` can be escaped with `&apos;`
```

**Solución simple**: Usar entidades HTML o quitar comillas del texto.

---

### Warnings Principales (por categoría)

#### 1. `no-console` (~50 warnings)
```
Warning: Unexpected console statement.
```
**Solución**: Reemplazar `console.log/info` con sistema de logging estructurado

#### 2. `@typescript-eslint/no-explicit-any` (~30 warnings)
```
Warning: Unexpected any. Specify a different type.
```
**Solución**: Definir tipos específicos para cada caso

#### 3. `@typescript-eslint/no-unused-vars` (~15 warnings)
```
Warning: Variable 'x' is defined but never used.
```
**Solución**: Eliminar variables no usadas o prefixar con `_`

#### 4. `react-hooks/exhaustive-deps` (1 warning)
```
Warning: React Hook useMemo has a missing dependency
```
**Solución**: Agregar dependencia o usar `// eslint-disable-next-line`

---

## 🎯 Plan de Corrección Priorizado

### Sprint 1 (2-3 horas) - CRÍTICO

1. **✅ Arreglar 6 errores ESLint** (10 min)
   - Escapar comillas en 3 archivos

2. **🔴 Actualizar Stripe API version** (30 min)
   - Cambiar `apiVersion` a `"2025-12-15.clover"`
   - Verificar cambios en API de suscripciones
   - Actualizar `current_period_end` según nueva API

3. **🔴 Resolver errores en API routes** (45 min)
   - Definir variables faltantes en `evaluate-multiple-choice`
   - Arreglar asignaciones en `exercise-generator`
   - Corregir type casting en `fallback-exercises`

4. **🟡 Agregar null-checks críticos** (45 min)
   - `app/profile/page.tsx` (guards para profile)
   - `lib/auth.ts` (checks para user.id y supabase)
   - `app/api/generate-exercise/route.ts` (optional chaining)

---

### Sprint 2 (3-4 horas) - IMPORTANTE

5. **🟡 Refactorizar tipos de ejercicios** (2 horas)
   - Revisar y completar `src/types/exercises.ts`
   - Usar discriminated unions correctamente
   - Ajustar `LessonViewer.tsx` y componentes hijos

6. **🟡 Arreglar async params Next.js 15** (30 min)
   - Actualizar `app/curso-b2/leccion/[lessonId]/page.tsx`
   - Buscar otras rutas dinámicas con mismo problema

7. **🟡 Corregir componentes Speaking** (30 min)
   - Ajustar firmas de callbacks
   - Verificar orden de parámetros

8. **🟡 Eliminar warnings fáciles** (1 hora)
   - Remover variables no usadas
   - Reemplazar algunos `any` con tipos específicos
   - Agregar dependencias faltantes en hooks

---

### Sprint 3 (2-3 horas) - MEJORAS

9. **🟢 Implementar sistema de logging** (Ver tarea #6)
   - Reemplazar todos los `console.log`
   - Implementar logger con Winston/Pino

10. **🟢 Revisar y tipar todos los `any`** (2 horas)
    - Crear tipos específicos para cada caso
    - Documentar razón si `any` es necesario

11. **🟢 Habilitar validaciones en producción**
    - Cambiar flags en `next.config.js`:
      ```js
      typescript: {
        ignoreBuildErrors: false, // ✅
      },
      eslint: {
        ignoreDuringBuilds: false, // ✅
      },
      ```
    - Verificar build exitoso

---

## 📋 Checklist de Verificación

Antes de habilitar validaciones en producción:

- [ ] 6 errores ESLint arreglados
- [ ] Stripe API version actualizada
- [ ] Errores en API routes resueltos
- [ ] Null-checks críticos agregados
- [ ] Tipos de ejercicios refactorizados
- [ ] Async params actualizados
- [ ] Componentes Speaking corregidos
- [ ] Variables no usadas eliminadas
- [ ] Build de Next.js pasa sin errores: `npm run build`
- [ ] Type-check pasa: `npm run type-check`
- [ ] Lint pasa: `npm run lint`

---

## 🔧 Configuración Recomendada

### tsconfig.json
```json
{
  "compilerOptions": {
    "strict": true,                     // ✅ Ya habilitado
    "noUnusedLocals": true,             // 🆕 Agregar
    "noUnusedParameters": true,         // 🆕 Agregar
    "noImplicitReturns": true,          // 🆕 Agregar
    "noFallthroughCasesInSwitch": true  // 🆕 Agregar
  }
}
```

### .eslintrc.json
```json
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn",  // ✅ Mantener como warning
    "no-console": ["warn", {                       // ✅ Permitir solo warn/error
      "allow": ["warn", "error"]
    }],
    "@typescript-eslint/no-unused-vars": ["warn", {
      "argsIgnorePattern": "^_"                    // ✅ Permitir _variable
    }]
  }
}
```

---

## 📊 Métricas de Éxito

- ✅ **0 errores TypeScript** al ejecutar `npm run type-check`
- ✅ **0 errores ESLint** al ejecutar `npm run lint`
- ✅ **Build exitoso** con `npm run build`
- ✅ **< 20 warnings totales** en ESLint (objetivo razonable)
- ✅ **Validaciones habilitadas** en `next.config.js`

---

## ⏱️ Resumen de Esfuerzo

| Sprint | Tareas | Horas Estimadas | Prioridad |
|--------|--------|-----------------|-----------|
| Sprint 1 | 4 tareas | 2-3 horas | 🔴 Crítico |
| Sprint 2 | 4 tareas | 3-4 horas | 🟡 Importante |
| Sprint 3 | 3 tareas | 2-3 horas | 🟢 Mejoras |
| **TOTAL** | **11 tareas** | **7-10 horas** | |

---

**Última actualización**: 19 de Enero 2026  
**Próxima revisión**: Después de completar Sprint 1
