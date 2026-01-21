# 🔧 Fix: Edge Runtime Errors - Crypto & Duplicate Runtime

## 🎯 Problemas Detectados

### Error #1: Duplicate Runtime Declaration
```
./app/api/webhooks/stripe/route.ts
Module parse failed: Identifier 'runtime' has already been declared (253:13)
> export const runtime = 'nodejs';
```

**Causa**: El archivo ya tenía `export const runtime = 'nodejs'` y agregamos `export const runtime = 'edge'`

### Error #2: Crypto Module Not Found (Edge Runtime Incompatible)
```
Module not found: Can't resolve 'crypto'
Files affected:
- /app/api/auth/forgot-password/route.ts
- /node_modules/next-auth/core/init.js
- /node_modules/next-auth/core/lib/csrf-token.js
```

**Causa**: Edge Runtime no soporta el módulo `crypto` de Node.js nativo

---

## ✅ SOLUCIONES

### Fix #1: Stripe Webhook - Mantener Node.js Runtime

**Archivo**: `app/api/webhooks/stripe/route.ts`

Este endpoint DEBE usar Node.js runtime porque:
- Stripe webhooks requieren raw body parsing
- Usa `crypto` para validar signatures
- No es compatible con Edge Runtime

**Solución**: Remover `export const runtime = 'edge';` y mantener `export const runtime = 'nodejs';`

### Fix #2: NextAuth - Cambiar a Node.js Runtime

**Archivo**: `app/api/auth/[...nextauth]/route.ts`

NextAuth requiere crypto, debe usar Node.js runtime.

**Solución**: Cambiar de `'edge'` a `'nodejs'`

### Fix #3: Forgot Password - Cambiar a Node.js Runtime

**Archivo**: `app/api/auth/forgot-password/route.ts`

Usa crypto para generar tokens, necesita Node.js runtime.

**Solución**: Cambiar de `'edge'` a `'nodejs'`

---

## 📋 Lista de Archivos que Necesitan Node.js Runtime

Basado en el análisis, estos endpoints NO pueden usar Edge Runtime:

1. `/api/webhooks/stripe` - Usa crypto para webhooks
2. `/api/auth/[...nextauth]` - NextAuth requiere crypto
3. `/api/auth/forgot-password` - Usa crypto
4. `/api/auth/register` - Puede usar bcrypt (crypto)
5. `/api/auth/reset-password` - Puede usar crypto

---

## 🎯 Estrategia de Fix

### Archivos que MANTIENEN Edge Runtime ✅
- Todos los `/api/evaluate-*` endpoints
- `/api/generate-exercise`
- `/api/hubspot/*`
- `/api/newsletter`
- `/api/notify-signup`
- `/api/pre-generate-exercises`
- `/api/signup`
- `/api/stripe-diagnostics`
- Páginas dinámicas (/dashboard, /profile, /practica, etc.)

### Archivos que CAMBIAN a Node.js Runtime ⚠️
- `/api/webhooks/stripe` - Ya tiene 'nodejs', remover 'edge'
- `/api/auth/[...nextauth]` - Cambiar a 'nodejs'
- `/api/auth/forgot-password` - Cambiar a 'nodejs'  
- `/api/auth/register` - Cambiar a 'nodejs'
- `/api/auth/reset-password` - Cambiar a 'nodejs'
- `/api/create-checkout-session` - Puede necesitar 'nodejs' si usa Stripe

---

## 🚀 Implementación

Voy a implementar estos fixes automáticamente.

---

**Nota**: Edge Runtime es ideal para la mayoría de endpoints, pero algunos que requieren
APIs de Node.js (crypto, fs, etc.) deben usar Node.js runtime.
