# 🔧 Mejoras Pendientes - Focus English

**Fecha de Auditoría**: 19 de Enero 2026  
**Estado del Proyecto**: Funcional con mejoras necesarias  
**Prioridad**: Alta → Media → Baja

---

## 🔴 ALTA PRIORIDAD (Resolver Inmediatamente)

### 1. Habilitar Validaciones TypeScript y ESLint

**Problema**: Validaciones deshabilitadas en producción
**Archivo**: `next.config.js:23-27`
**Impacto**: Errores de tipo no detectados pueden llegar a producción

**Código actual**:
```javascript
typescript: {
  ignoreBuildErrors: true,
},
eslint: {
  ignoreDuringBuilds: true,
},
```

**Acción**:
- [ ] Ejecutar `npm run type-check` y resolver todos los errores
- [ ] Ejecutar `npm run lint` y corregir warnings/errores
- [ ] Cambiar ambos flags a `false`
- [ ] Verificar que el build pase sin errores

**Estimación**: 4-6 horas

---

### 2. Actualizar Dependencias Vulnerables

**Problema**: 3 vulnerabilidades detectadas por npm audit
**Impacto**: Seguridad comprometida

**Vulnerabilidades**:
- `@auth/core` - Vulnerabilidad en cookies (severity: low)
- `cookie` - Acepta caracteres fuera de límites (CVE)
- `diff` - DoS en ts-node (severity: low)

**Acción**:
```bash
# Ejecutar
npm audit fix

# Si persisten problemas
npm audit fix --force

# Verificar manualmente
npm audit
```

- [ ] Ejecutar `npm audit fix`
- [ ] Revisar breaking changes si hay actualizaciones major
- [ ] Probar funcionalidad crítica después de actualizar
- [ ] Documentar cambios en CHANGELOG

**Estimación**: 2-3 horas

---

### 3. Implementar Validación de Variables de Entorno

**Problema**: Variables de entorno sin validación en runtime
**Archivos afectados**: 17 archivos acceden directamente a `process.env`
**Impacto**: Errores en runtime por env vars faltantes

**Acción**:
- [ ] Crear `lib/env.ts` con validación usando Zod
- [ ] Definir schema para todas las variables requeridas
- [ ] Reemplazar accesos directos a `process.env` con validador
- [ ] Agregar mensajes de error descriptivos

**Ejemplo de implementación**:
```typescript
// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
  STRIPE_WEBHOOK_SECRET: z.string().startsWith('whsec_'),
  HUBSPOT_ACCESS_TOKEN: z.string().min(1),
  NEXTAUTH_SECRET: z.string().min(32),
  NEXTAUTH_URL: z.string().url(),
  // ... resto de variables
});

export const env = envSchema.parse(process.env);
```

**Estimación**: 3-4 horas

---

### 4. Completar Verificación de Suscripciones

**Problema**: Verificación de suscripción activa no implementada
**Archivo**: `middleware.ts:36`
**Impacto**: Usuarios sin suscripción pueden acceder a contenido premium

**Código actual**:
```typescript
// TODO: Verificar si el usuario tiene suscripción activa
// Aquí se integraría con Stripe para verificar el estado de la suscripción
```

**Acción**:
- [ ] Crear función `hasActiveSubscription(userId)` en `lib/stripe-config.ts`
- [ ] Integrar verificación en middleware
- [ ] Verificar estado de suscripción contra Stripe API
- [ ] Cachear resultados para evitar rate limits
- [ ] Agregar tests para casos edge

**Estimación**: 4-5 horas

---

## 🟡 MEDIA PRIORIDAD (Próximas 2 Semanas)

### 5. Implementar Políticas RLS Granulares en Supabase

**Problema**: Row Level Security usa `USING (true)` (permite todo)
**Archivo**: `scripts/create-supabase-schema.sql:276-304`
**Impacto**: Seguridad débil en acceso a datos

**Acción**:
- [ ] Revisar todas las políticas RLS actuales
- [ ] Implementar políticas específicas por usuario
- [ ] Usar `auth.uid()` para NextAuth o custom JWT claims
- [ ] Probar políticas en ambiente de staging
- [ ] Documentar políticas implementadas

**Ejemplo**:
```sql
-- En lugar de
CREATE POLICY "Users can read own data"
  ON users FOR SELECT USING (true);

-- Usar
CREATE POLICY "Users can read own data"
  ON users FOR SELECT 
  USING (auth.uid() = id OR current_setting('request.jwt.claim.user_id', true)::uuid = id);
```

**Estimación**: 6-8 horas

---

### 6. Implementar Sistema de Logging Estructurado

**Problema**: Uso inconsistente de `console.log/error/warn`
**Archivos afectados**: 13 archivos con console statements
**Impacto**: Debugging difícil en producción

**Acción**:
- [ ] Instalar Winston o Pino para logging
- [ ] Configurar niveles de log (error, warn, info, debug)
- [ ] Implementar log rotation
- [ ] Integrar con servicio externo (Datadog, LogRocket, etc.)
- [ ] Reemplazar todos los `console.*` con logger

**Instalación**:
```bash
npm install winston
# o
npm install pino pino-pretty
```

**Estimación**: 5-6 horas

---

### 7. Resolver TODOs Pendientes

**Problema**: 20 TODOs/FIXMEs en el código
**Impacto**: Funcionalidad incompleta o temporal

**TODOs Críticos**:
1. `middleware.ts:36` - Verificar suscripción activa ⭐
2. `lib/stripe-config.ts` - Validar Price IDs
3. `hooks/useAuth.ts` - Mejorar manejo de errores
4. `app/schema.tsx` - Validaciones faltantes

**Acción**:
- [ ] Listar todos los TODOs con `grep -r "TODO\|FIXME" --include="*.ts" --include="*.tsx"`
- [ ] Priorizar por impacto
- [ ] Crear issues en GitHub para cada TODO
- [ ] Resolver top 10 más críticos
- [ ] Documentar decisiones de aplazamiento

**Estimación**: 8-12 horas (depende de complejidad)

---

### 8. Agregar Tests Automatizados

**Problema**: 0 tests en el proyecto
**Impacto**: Regresiones no detectadas, confianza baja en cambios

**Acción**:
- [ ] Configurar Jest + React Testing Library
- [ ] Agregar tests unitarios para componentes críticos
- [ ] Implementar tests de integración para API routes
- [ ] Configurar tests E2E con Playwright
- [ ] Integrar tests en CI/CD pipeline
- [ ] Objetivo inicial: 50% coverage en lógica de negocio

**Instalación**:
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
npm install -D @playwright/test
```

**Tests Prioritarios**:
1. Autenticación (login, register, password reset)
2. Webhooks de Stripe
3. Progreso de curso
4. Integración con HubSpot

**Estimación**: 12-16 horas (setup + tests iniciales)

---

## 🟢 BAJA PRIORIDAD (Próximo Mes)

### 9. Optimizar Bundle Size

**Problema**: Bundle size no optimizado
**Impacto**: Tiempos de carga más lentos

**Acción**:
- [ ] Instalar `@next/bundle-analyzer`
- [ ] Analizar bundle size actual
- [ ] Implementar code splitting agresivo
- [ ] Lazy load componentes pesados
- [ ] Optimizar imports (tree shaking)
- [ ] Comprimir imágenes y assets

**Instalación**:
```bash
npm install -D @next/bundle-analyzer
```

**Configuración**:
```javascript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
```

**Estimación**: 4-6 horas

---

### 10. Implementar Rate Limiting en API Routes

**Problema**: API routes sin protección contra abuso
**Impacto**: Vulnerabilidad a ataques DoS, costos elevados

**Acción**:
- [ ] Implementar rate limiting por IP
- [ ] Usar Redis o Upstash para tracking
- [ ] Configurar límites por endpoint
- [ ] Agregar headers de rate limit
- [ ] Implementar backoff exponencial

**Endpoints Críticos**:
- `/api/signup`
- `/api/auth/*`
- `/api/evaluate-speaking`
- `/api/create-checkout-session`

**Ejemplo con Upstash**:
```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});
```

**Estimación**: 5-7 horas

---

### 11. Agregar Monitoreo y Alertas

**Problema**: Sin visibilidad de errores en producción
**Impacto**: Bugs no detectados, mala experiencia de usuario

**Acción**:
- [ ] Integrar Sentry para error tracking
- [ ] Configurar Vercel Analytics
- [ ] Implementar health checks
- [ ] Configurar alertas por email/Slack
- [ ] Monitorear métricas clave (latencia, errores, conversiones)

**Instalación Sentry**:
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

**Métricas a Monitorear**:
- Errores de API
- Tasas de conversión (signup → pago)
- Latencia de webhooks
- Uptime de Supabase/Stripe

**Estimación**: 3-4 horas

---

### 12. Mejorar Manejo de Errores en Cliente

**Problema**: Errores mostrados como texto genérico
**Impacto**: UX pobre, debugging difícil

**Acción**:
- [ ] Crear componentes de error boundaries
- [ ] Implementar toasts/notificaciones
- [ ] Traducir errores técnicos a mensajes user-friendly
- [ ] Agregar error pages personalizadas (404, 500)
- [ ] Logging de errores a Sentry

**Estimación**: 4-5 horas

---

### 13. Implementar CI/CD Pipeline

**Problema**: Deployment manual, sin validaciones automáticas
**Impacto**: Riesgo de deployment con errores

**Acción**:
- [ ] Configurar GitHub Actions
- [ ] Ejecutar tests en cada PR
- [ ] Ejecutar lint/typecheck en cada PR
- [ ] Deploy automático a staging en merge a develop
- [ ] Deploy manual a producción con aprobación

**Ejemplo Workflow**:
```yaml
# .github/workflows/ci.yml
name: CI
on: [pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm test
```

**Estimación**: 3-4 horas

---

### 14. Documentar API Endpoints

**Problema**: API routes sin documentación formal
**Impacto**: Dificulta mantenimiento e integraciones

**Acción**:
- [ ] Generar OpenAPI/Swagger docs
- [ ] Documentar request/response schemas
- [ ] Agregar ejemplos de uso
- [ ] Publicar en `/api-docs`

**Estimación**: 6-8 horas

---

### 15. Optimizar Rendimiento de Base de Datos

**Problema**: Queries sin optimizar, índices faltantes
**Impacto**: Latencia alta en páginas con datos

**Acción**:
- [ ] Analizar slow queries en Supabase Dashboard
- [ ] Agregar índices faltantes
- [ ] Implementar caching con React Query
- [ ] Optimizar queries N+1
- [ ] Considerar materialized views para reportes

**Estimación**: 5-7 horas

---

## 📊 Resumen de Esfuerzo

| Prioridad | Tareas | Horas Estimadas |
|-----------|--------|-----------------|
| 🔴 Alta | 4 tareas | 13-18 horas |
| 🟡 Media | 4 tareas | 31-42 horas |
| 🟢 Baja | 7 tareas | 30-41 horas |
| **TOTAL** | **15 tareas** | **74-101 horas** |

---

## 🎯 Plan de Acción Recomendado

### Sprint 1 (Esta Semana)
- ✅ Actualizar dependencias vulnerables
- ✅ Habilitar TypeScript/ESLint
- ✅ Implementar validación de env vars

### Sprint 2 (Próxima Semana)
- ✅ Completar verificación de suscripciones
- ✅ Implementar políticas RLS
- ✅ Sistema de logging estructurado

### Sprint 3 (Semanas 3-4)
- ✅ Resolver TODOs críticos
- ✅ Agregar tests (unitarios + integración)
- ✅ Rate limiting en APIs

### Backlog (Mes 2+)
- Optimización de bundle
- Monitoreo con Sentry
- CI/CD pipeline
- Optimización de DB

---

## 📝 Notas Adicionales

### Recursos Necesarios
- Acceso a Sentry (para monitoreo)
- Upstash Redis (para rate limiting)
- Tiempo de QA después de cada cambio
- Ambiente de staging para pruebas

### Riesgos
- Cambios en RLS pueden romper funcionalidad existente → Probar exhaustivamente
- Actualización de dependencias puede introducir breaking changes → Revisar changelogs
- Tests pueden descubrir bugs existentes → Priorizar fixes

### Métricas de Éxito
- ✅ Build sin errores de TypeScript/ESLint
- ✅ 0 vulnerabilidades en npm audit
- ✅ Coverage > 50% en tests
- ✅ Latencia p95 < 500ms en APIs críticas
- ✅ 0 errores críticos en Sentry (última semana)

---

**Última Actualización**: 19 de Enero 2026  
**Próxima Revisión**: Después de Sprint 1
