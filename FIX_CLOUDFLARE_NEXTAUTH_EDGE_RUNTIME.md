# 🔧 Fix: Cloudflare Build Error - NextAuth Edge Runtime

**Fecha**: 2026-01-21
**Issue**: Build failure en Cloudflare Pages debido a incompatibilidad de NextAuth con Edge Runtime
**Status**: ✅ RESUELTO

---

## 📋 Problema

### Error Original

```
Module not found: Can't resolve 'crypto'
./node_modules/next-auth/core/init.js:8:1
./node_modules/next-auth/core/lib/csrf-token.js:7:1
./node_modules/oauth/lib/oauth.js:1:1
```

### Causa Raíz

NextAuth.js requiere módulos nativos de Node.js (`crypto`, `bcryptjs`) que **NO están disponibles** en Cloudflare Edge Runtime. Las rutas API de autenticación estaban configuradas con:

```typescript
export const runtime = 'edge';
```

Esto causaba que Next.js intentara compilar NextAuth para Edge Runtime, lo cual es imposible ya que NextAuth depende de:
- `crypto` (Node.js nativo)
- `bcryptjs` (requiere Node.js)
- `oauth` (usa módulos de Node.js)

---

## ✅ Solución Implementada

### 1. Eliminación de Edge Runtime en Rutas de Autenticación

Se removió `export const runtime = 'edge';` de las siguientes rutas:

#### ✅ Modificado:
- `app/api/auth/[...nextauth]/route.ts`
- `app/api/auth/register/route.ts`
- `app/api/auth/forgot-password/route.ts`
- `app/api/auth/reset-password/route.ts`

#### Cambio Aplicado:

**ANTES:**
```typescript
export const runtime = 'edge';
```

**DESPUÉS:**
```typescript
// REMOVED: export const runtime = 'edge';
// NextAuth requires Node.js runtime for crypto and bcrypt modules
// Cloudflare Pages will use Node.js compatibility mode
```

---

### 2. Actualización de `next.config.js`

Se agregaron paquetes críticos a `serverExternalPackages` para asegurar que se ejecuten en Node.js runtime:

```javascript
serverExternalPackages: [
  '@google-cloud/text-to-speech', 
  'elevenlabs-node',
  'bcryptjs',  // Required for password hashing
  'next-auth', // Required for authentication
],
```

Esto indica a Next.js que estos paquetes DEBEN ejecutarse en el servidor con Node.js, no en Edge Runtime.

---

### 3. Configuración de Cloudflare

El archivo `wrangler.toml` ya incluye:

```toml
compatibility_flags = ["nodejs_compat"]
```

Esto habilita **Node.js Compatibility Mode** en Cloudflare Pages, permitiendo que las rutas API sin `runtime = 'edge'` usen módulos de Node.js.

---

## 🎯 Rutas que MANTIENEN Edge Runtime

Las siguientes rutas **SÍ pueden usar Edge Runtime** porque NO dependen de módulos nativos de Node.js:

### API Routes con Edge Runtime (✅ OK):
- `app/api/evaluate-*` - Usan OpenAI API (compatible con Edge)
- `app/api/generate-exercise/route.ts` - Generación de ejercicios con IA
- `app/api/create-checkout-session/route.ts` - Stripe (compatible con Edge)
- `app/api/webhooks/stripe/route.ts` - Stripe webhooks
- `app/api/signup/route.ts` - Sign up sin bcrypt
- `app/api/newsletter/route.ts` - Newsletter
- `app/api/debug/env/route.ts` - Debug

---

## 📊 Resumen de Cambios

| Archivo | Acción | Razón |
|---------|--------|-------|
| `app/api/auth/[...nextauth]/route.ts` | ❌ Removed `runtime = 'edge'` | NextAuth requiere Node.js |
| `app/api/auth/register/route.ts` | ❌ Removed `runtime = 'edge'` | bcryptjs requiere Node.js |
| `app/api/auth/forgot-password/route.ts` | ❌ Removed `runtime = 'edge'` | crypto requiere Node.js |
| `app/api/auth/reset-password/route.ts` | ❌ Removed `runtime = 'edge'` | bcryptjs requiere Node.js |
| `next.config.js` | ➕ Added `bcryptjs`, `next-auth` | Server-side packages |
| `wrangler.toml` | ✅ Ya incluye `nodejs_compat` | Node.js compatibility |

---

## 🔍 Verificación

### Checklist de Validación:

- [x] ✅ Eliminado `runtime = 'edge'` de rutas de auth
- [x] ✅ Actualizado `next.config.js` con paquetes externos
- [x] ✅ `wrangler.toml` tiene `nodejs_compat`
- [ ] ⏳ Build exitoso en Cloudflare Pages
- [ ] ⏳ NextAuth funcional en producción
- [ ] ⏳ Login/Register funcionando

---

## 🚀 Próximos Pasos

1. **Commit y Push** de estos cambios
2. **Deploy a Cloudflare Pages** para validar
3. **Probar autenticación** en producción:
   - Login con credenciales
   - Registro de nuevos usuarios
   - Recuperación de contraseña
4. **Monitorear logs** en Cloudflare Dashboard

---

## 📚 Referencias

- **NextAuth.js**: No soporta Edge Runtime nativamente
- **Cloudflare Node.js Compatibility**: https://developers.cloudflare.com/workers/runtime-apis/nodejs/
- **Next.js Edge Runtime**: https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes

---

## 💡 Lecciones Aprendidas

### ❌ No Compatible con Edge Runtime:
- `crypto` (Node.js nativo)
- `bcryptjs` / `bcrypt`
- `next-auth` (usa crypto y bcrypt)
- Módulos que requieren `fs`, `path`, `os`

### ✅ Compatible con Edge Runtime:
- `fetch` API
- OpenAI SDK
- Stripe SDK
- Supabase SDK (edge-compatible)
- Librerías puras de JavaScript

---

## 🎉 Resultado Esperado

Después de este fix:

✅ Build exitoso en Cloudflare Pages
✅ NextAuth funcional con Node.js runtime
✅ Autenticación working en producción
✅ No más errores de `Module not found: Can't resolve 'crypto'`

---

**Última actualización**: 2026-01-21
**Autor**: Claude AI Assistant
**Status**: ✅ FIX APLICADO - PENDING DEPLOY
