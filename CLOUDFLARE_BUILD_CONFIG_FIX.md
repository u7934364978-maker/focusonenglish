# 🔧 Fix: Configuración de Build en Cloudflare Pages

## 🔴 Problema Detectado

**Error en el deployment log**:
```
Error: Output directory ".vercel/output/static" not found.
No build command specified. Skipping build step.
```

**Causa**: El build command NO está configurado en el Dashboard de Cloudflare Pages.

---

## ✅ Solución: Configurar Build Settings en Cloudflare Dashboard

### 📋 Pasos a Seguir

#### 1. Accede a Cloudflare Pages Dashboard

1. Ve a: https://dash.cloudflare.com/
2. Haz clic en **"Pages"** en el menú lateral izquierdo
3. Selecciona tu proyecto: **"focusonenglish"**

#### 2. Ve a Build Settings

1. Haz clic en **"Settings"** (pestaña superior)
2. Selecciona **"Builds & deployments"** en el menú lateral
3. Busca la sección **"Build configuration"**
4. Haz clic en **"Configure Production builds"** (o "Edit configuration")

#### 3. Configura los Build Settings

**Framework preset**: 
```
Next.js (Static HTML Export)
```

**Build command**:
```bash
npm run pages:build
```

**Build output directory**:
```
.vercel/output/static
```

**Root directory** (Path):
```
/
```
*(déjalo vacío o con "/" )*

**Node version**:
```
20.9.0
```

#### 4. Variables de Entorno (Environment Variables)

En la misma página de Settings, ve a **"Environment variables"** y configura:

##### Variables Requeridas:

```env
# Node.js Version
NODE_VERSION=20.9.0

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://focusonenglish.pages.dev

# Supabase (Required)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Stripe (Required)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# NextAuth (Required)
NEXTAUTH_SECRET=<generar_con_openssl_rand_-base64_32>
NEXTAUTH_URL=https://focusonenglish.pages.dev

# OpenAI (Required)
OPENAI_API_KEY=sk-...

# HubSpot (Optional)
HUBSPOT_ACCESS_TOKEN=pat-...
HUBSPOT_PORTAL_ID=147592708
```

##### Cómo agregar variables:

1. Haz clic en **"Add variable"**
2. Nombre: `NODE_VERSION`
3. Valor: `20.9.0`
4. Environment: Selecciona **"Production"** y **"Preview"**
5. Haz clic en **"Save"**
6. Repite para cada variable

#### 5. Guardar y Re-deployar

1. Haz clic en **"Save"** al final de la página
2. Ve a la pestaña **"Deployments"**
3. Haz clic en **"Retry deployment"** en el último deployment fallido
4. O haz un nuevo push a `main` para triggear un nuevo deployment

---

## 🎯 Verificación Rápida

### Checklist de Configuración

- [ ] Build command configurado: `npm run pages:build`
- [ ] Build output directory: `.vercel/output/static`
- [ ] Framework preset: Next.js (Static HTML Export)
- [ ] Node version: `20.9.0`
- [ ] Variables de entorno configuradas
- [ ] Configuration guardada

### Después de Guardar

1. Ve a **"Deployments"**
2. Haz clic en **"View build log"** del último deployment
3. Deberías ver:
   ```
   ✅ Build command: npm run pages:build
   ✅ Building...
   ✅ Build completed successfully
   ✅ Deploying to production
   ```

---

## 🔄 Alternativa: Re-conectar el Repositorio

Si la configuración manual no funciona, puedes re-conectar el repositorio:

### Opción A: Desde Cloudflare Dashboard

1. Ve a tu proyecto en Cloudflare Pages
2. **Settings** → **Builds & deployments**
3. **Source** → Haz clic en **"Configure"**
4. Selecciona **GitHub** como fuente
5. Selecciona el repositorio: `u7934364978-maker/focusonenglish`
6. Configura:
   - **Production branch**: `main`
   - **Build command**: `npm run pages:build`
   - **Build output directory**: `.vercel/output/static`
7. Haz clic en **"Save and Deploy"**

### Opción B: Crear Nuevo Proyecto

1. Ve a **Pages** → **Create a project**
2. Selecciona **"Connect to Git"**
3. Autoriza GitHub si es necesario
4. Selecciona el repositorio `focusonenglish`
5. Configura:
   - **Project name**: `focusonenglish`
   - **Production branch**: `main`
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run pages:build`
   - **Build output directory**: `.vercel/output/static`
6. Haz clic en **"Save and Deploy"**

---

## 📸 Captura de Pantalla de Configuración Correcta

```
┌─────────────────────────────────────────────┐
│  Build configuration                        │
├─────────────────────────────────────────────┤
│                                             │
│  Framework preset                           │
│  [Next.js (Static HTML Export)        ▼]   │
│                                             │
│  Build command                              │
│  [npm run pages:build                  ]   │
│                                             │
│  Build output directory                     │
│  [.vercel/output/static                ]   │
│                                             │
│  Root directory (optional)                  │
│  [/                                    ]   │
│                                             │
│                    [Save] [Cancel]          │
└─────────────────────────────────────────────┘
```

---

## 🚀 Próximo Deployment

Una vez configurado correctamente:

1. **Opción 1**: Retry del último deployment
   - Ve a Deployments → Clic en el deployment fallido → "Retry deployment"

2. **Opción 2**: Trigger nuevo deployment (ya lo hicimos)
   - Los commits que hicimos deberían triggear automáticamente

3. **Opción 3**: Manual deployment
   ```bash
   cd /home/user/webapp
   npm run deploy
   ```

---

## ✅ Deployment Exitoso

Cuando el deployment funcione correctamente, verás en los logs:

```
✅ Cloning repository...
✅ Found wrangler.toml file
✅ Running build command: npm run pages:build
✅ Building Next.js app with @cloudflare/next-on-pages...
✅ Build completed successfully
✅ Validating asset output directory
✅ Deploying to Cloudflare Pages...
✅ Success! Deployed to https://focusonenglish.pages.dev
```

---

## 📞 ¿Necesitas Ayuda?

Si después de configurar correctamente sigues teniendo problemas:

1. **Verifica los logs de build** en Cloudflare Dashboard
2. **Revisa las variables de entorno** - todas deben estar configuradas
3. **Confirma la versión de Node.js** - debe ser 20.9.0 o superior
4. **Chequea el repositorio** - asegúrate de que el código está actualizado

---

## 📚 Documentación de Referencia

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [@cloudflare/next-on-pages](https://github.com/cloudflare/next-on-pages)

---

**Fecha**: 2026-01-20  
**Estado**: Configuración pendiente en Cloudflare Dashboard  
**Acción requerida**: Configurar Build settings en Cloudflare Pages Dashboard
