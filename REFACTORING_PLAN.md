# 🔧 Plan de Refactoring para Cloudflare Edge Runtime

## 🎯 Objetivo
Migrar todos los endpoints de Node.js Runtime a Edge Runtime compatible con Cloudflare Pages.

## 📋 Archivos a Refactorizar

### 1. Password Reset (forgot-password)
**Archivo**: `app/api/auth/forgot-password/route.ts`

**Cambios necesarios**:
```typescript
// ❌ Antes (Node.js crypto):
import crypto from 'crypto';
const token = crypto.randomBytes(32).toString('hex');

// ✅ Después (Web Crypto API):
const buffer = new Uint8Array(32);
crypto.getRandomValues(buffer);
const token = Array.from(buffer, b => b.toString(16).padStart(2, '0')).join('');
```

### 2. NextAuth
**Archivo**: `app/api/auth/[...nextauth]/route.ts`

**Opciones**:
- A) Usar NextAuth con Edge-compatible adapter (Auth.js)
- B) Comentar temporalmente y migrar después
- C) Implementar auth custom con Web Crypto

**Recomendación**: Opción A - Actualizar a Auth.js v5

### 3. Stripe Webhooks
**Archivo**: `app/api/webhooks/stripe/route.ts`

**Cambios necesarios**:
```typescript
// Stripe SDK es compatible con Edge Runtime
// Solo necesita configuration correcta
export const runtime = 'edge';
// Remover uso de crypto.createHmac si existe
```

### 4. Register/Reset Password
**Archivos**: 
- `app/api/auth/register/route.ts`
- `app/api/auth/reset-password/route.ts`

**Cambios**: Migrar hashing de passwords a Web Crypto compatible

### 5. Checkout Session
**Archivo**: `app/api/create-checkout-session/route.ts`

**Verificar**: Stripe SDK compatibility con Edge Runtime

## 🚀 Orden de Implementación

1. ✅ **Fase 1**: Forgot Password (más simple)
2. ✅ **Fase 2**: Register/Reset Password
3. ⚠️ **Fase 3**: Stripe Webhooks (crítico)
4. ⚠️ **Fase 4**: NextAuth (más complejo)
5. ✅ **Fase 5**: Testing y Deploy

## 📝 Web Crypto API Utilities

Crearemos un archivo de utilidades:
`lib/edge-crypto.ts`

Con funciones:
- `generateRandomToken()` - Replace crypto.randomBytes
- `hashPassword()` - Replace bcrypt
- `verifyPassword()` - Password verification
- `generateSecureHash()` - Replace crypto.createHash

## ⏱️ Tiempo Estimado

- Fase 1: 30 min
- Fase 2: 45 min
- Fase 3: 1 hora
- Fase 4: 2 horas
- Fase 5: 30 min

**Total**: ~4-5 horas

## 🎯 Resultado Esperado

✅ Todos los endpoints usando Edge Runtime
✅ Compatible con Cloudflare Pages
✅ NextAuth funcionando con Edge adapter
✅ Stripe webhooks funcionando
✅ Password reset funcionando
✅ Build exitoso en Cloudflare

---

**Comenzando refactoring...**
