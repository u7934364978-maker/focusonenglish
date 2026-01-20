# 🔧 Fix: Cloudflare Pages Requiere Solo Edge Runtime

## 🔴 Problema

Cloudflare Pages **NO ACEPTA** mezclar Node.js Runtime con Edge Runtime.

**Error**:
```
The following routes were not configured to run with the Edge Runtime:
- /api/auth/[...nextauth]
- /api/auth/forgot-password
- /api/auth/register
- /api/auth/reset-password
- /api/create-checkout-session
- /api/generate-exercise
- /api/webhooks/stripe
```

## ✅ Solución

**OPCIÓN 1: Cambiar TODOS a Edge Runtime** (Recomendado para Cloudflare)

Usar Web Crypto API en lugar de Node.js crypto:
- `crypto.randomBytes()` → `crypto.getRandomValues()`
- `crypto.createHash()` → `crypto.subtle.digest()`

**OPCIÓN 2: Deshabilitar endpoints problemáticos** (Temporal)

Comentar o remover temporalmente los endpoints que no son compatibles.

**OPCIÓN 3: Usar Vercel en lugar de Cloudflare** (Alternativa)

Vercel soporta mezclar runtimes.

## 🎯 Decisión Recomendada

**Para Cloudflare Pages**: Cambiar TODOS a Edge Runtime y adaptar el código.

**Cambios necesarios**:

1. **NextAuth** - Usar adapter compatible con Edge Runtime
2. **Webhooks Stripe** - Usar alternativa o serverless function separada
3. **Password Reset** - Usar Web Crypto API

## 📋 Alternativa Rápida

**Desplegar en Vercel** que soporta mezclar runtimes:
- ✅ Soporta Node.js y Edge Runtime mezclados
- ✅ Deploy más rápido
- ✅ No requiere cambios de código
