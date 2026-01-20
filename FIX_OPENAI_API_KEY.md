# 🔑 Fix: Agregar OPENAI_API_KEY a Cloudflare Pages

## 🎉 ¡GRAN PROGRESO!

**✅ El build command ahora funciona correctamente**  
**✅ Las dependencias se instalan correctamente**  
**✅ Next.js compila exitosamente**  
**❌ FALTA: Variable de entorno OPENAI_API_KEY**

---

## 🔴 Error Actual

```
Error: Missing credentials. Please pass an `apiKey`, 
or set the `OPENAI_API_KEY` environment variable.

Location: /api/evaluate-speaking-part2
Build failed: Failed to collect page data
```

**Causa**: El endpoint `/api/evaluate-speaking-part2` requiere OpenAI API Key para funcionar, y no está configurada en Cloudflare.

---

## ✅ SOLUCIÓN (2 minutos)

### Opción 1: Agregar OPENAI_API_KEY (Recomendado)

Si tienes una API Key de OpenAI:

#### Paso 1: Ve a Cloudflare Dashboard
🔗 https://dash.cloudflare.com/

1. Pages → **focusonenglish**
2. **Settings** → **Environment variables**

#### Paso 2: Agregar la variable

1. Clic en **"Add variable"**
2. **Variable name**: `OPENAI_API_KEY`
3. **Value**: `sk-proj-xxxxxxxxxxxxxxxxxxxxxxx` (tu API key)
4. **Environment**: Marca **"Production"** y **"Preview"**
5. Clic en **"Save"**

#### Paso 3: Re-deploy

1. Ve a **Deployments**
2. Clic en **"Retry deployment"** en el último deployment

---

### Opción 2: Deshabilitar temporalmente el endpoint

Si no tienes OpenAI API Key o quieres deployar sin ese endpoint:

#### Solución temporal: Comentar el código que requiere OpenAI

Necesitaremos modificar el archivo que causa el error durante el build.

**Archivos a revisar:**
- `app/api/evaluate-speaking-part2/route.js` (o `.ts`)

**Voy a revisar el código y crear un fix...**

---

## 🔍 ¿Dónde conseguir OPENAI_API_KEY?

Si no tienes una API Key de OpenAI:

1. Ve a: https://platform.openai.com/api-keys
2. Inicia sesión o crea una cuenta
3. Clic en **"Create new secret key"**
4. Copia la key (empieza con `sk-proj-` o `sk-`)
5. **GUÁRDALA** en un lugar seguro (solo se muestra una vez)

### Costos de OpenAI API

- **Modelo GPT-4o**: ~$5-15 per million tokens
- **Modelo GPT-3.5**: ~$0.50-1.50 per million tokens
- Para pruebas: OpenAI da $5 de crédito gratis (nuevas cuentas)

---

## ⚡ SOLUCIÓN RÁPIDA: Variables de Entorno Completas

Para evitar futuros errores, configura todas las variables necesarias:

### Variables REQUERIDAS para Build:

```env
# Build Configuration
NODE_VERSION=20.9.0

# Site URL
NEXT_PUBLIC_SITE_URL=https://focusonenglish.pages.dev

# OpenAI (REQUERIDO para build)
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxx
```

### Variables OPCIONALES (pero recomendadas):

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# NextAuth
NEXTAUTH_SECRET=tu_secret_generado
NEXTAUTH_URL=https://focusonenglish.pages.dev

# HubSpot
HUBSPOT_ACCESS_TOKEN=pat-...
HUBSPOT_PORTAL_ID=147592708
```

---

## 🎯 Configuración Paso a Paso

### En Cloudflare Dashboard:

1. **Settings** → **Environment variables**

2. Para cada variable:
   - Clic en **"Add variable"**
   - Nombre: `OPENAI_API_KEY`
   - Valor: (tu key)
   - Environment: **Production** y **Preview**
   - **Save**

3. Una vez agregadas todas las variables:
   - **Deployments** → **Retry deployment**

---

## 📋 Checklist de Verificación

- [ ] Tengo una OPENAI_API_KEY válida
- [ ] Agregué OPENAI_API_KEY en Cloudflare Pages
- [ ] Marqué tanto Production como Preview
- [ ] Guardé la variable
- [ ] Re-deploye o retry el último deployment
- [ ] Verifiqué los logs del nuevo build

---

## 🎉 Después del Fix

Una vez agregada la variable `OPENAI_API_KEY`, el próximo deployment debería mostrar:

```log
✅ Installing dependencies...
✅ Detected Next.js version: 15.4.10
✅ Running "npm run build"
✅ Compiled successfully in 18.0s
✅ Collecting page data...
✅ Build completed successfully
✅ Deploying to Cloudflare Pages...
✅ Success! Your site is live at:
   https://focusonenglish.pages.dev
```

---

## 🔧 Alternativa: Fix del Código (Avanzado)

Si prefieres que el sitio funcione SIN OpenAI API Key (para testing):

### Opción A: Hacer el endpoint opcional

Modificar el código para que no falle en build time si no hay API key.

### Opción B: Deshabilitar el endpoint temporalmente

Renombrar o comentar el archivo `app/api/evaluate-speaking-part2/route.ts`

**¿Quieres que implemente esta alternativa?**

---

## 📊 Resumen de Progreso

| Componente | Antes | Ahora |
|------------|-------|-------|
| Build command | ❌ No configurado | ✅ Configurado |
| Build execution | ❌ Saltado | ✅ Ejecutándose |
| Dependencies install | ❌ N/A | ✅ Instaladas |
| Next.js compile | ❌ N/A | ✅ Compilando (18s) |
| Environment vars | ⚠️ Mínimas | ⚠️ Falta OPENAI_API_KEY |
| Deployment | ❌ Fallido | ⏳ Pendiente de API key |

**Estamos a solo 1 paso del deployment exitoso! 🚀**

---

## 🎯 Próxima Acción

**OPCIÓN 1** (Recomendada):
1. Consigue tu OPENAI_API_KEY de https://platform.openai.com/api-keys
2. Agrégala a Cloudflare Pages Environment Variables
3. Retry deployment
4. ✅ ¡Sitio live!

**OPCIÓN 2** (Temporal):
1. Dime si quieres que deshabilite temporalmente el endpoint de OpenAI
2. Haré un commit para hacer el endpoint opcional
3. El deployment funcionará sin OpenAI
4. Podrás agregar OpenAI después

---

**¿Qué prefieres hacer?**

1. ¿Tienes OPENAI_API_KEY para agregar?
2. ¿Quieres que deshabilite temporalmente el endpoint?
3. ¿Necesitas ayuda para conseguir la API key?

---

**Fecha**: 2026-01-20  
**Estado**: ⏳ Esperando OPENAI_API_KEY  
**Progreso**: 95% completado (solo falta 1 variable!)
