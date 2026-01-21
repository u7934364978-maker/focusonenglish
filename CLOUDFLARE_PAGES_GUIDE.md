# 🚀 Cloudflare Pages Deployment Guide - Focus English

## ✅ Configuración Completada

Este proyecto está configurado para deployment en Cloudflare Pages usando el adapter `@cloudflare/next-on-pages`.

---

## 📋 Prerequisitos

- [x] Adapter instalado: `@cloudflare/next-on-pages`
- [x] Wrangler CLI instalado
- [x] Scripts de build configurados en `package.json`
- [x] `wrangler.toml` configurado
- [x] Node version especificada (20.9.0)

---

## 🔧 Configuración en Cloudflare Dashboard

### 1. Crear Proyecto en Cloudflare Pages

1. Ve a https://dash.cloudflare.com/
2. Selecciona **Pages** → **Create a project**
3. Click en **Connect to Git**
4. Selecciona **GitHub**
5. Autoriza Cloudflare
6. Selecciona el repositorio: `u7934364978-maker/focusonenglish`

### 2. Build Settings

Configura los siguientes parámetros:

```yaml
Project name: focusonenglish
Production branch: main
Framework preset: Next.js (Static HTML Export)
Build command: npm run pages:build
Build output directory: .vercel/output/static
Root directory: / (dejar vacío)
Node version: 20.9.0
```

**⚠️ IMPORTANTE**: Usa `npm run pages:build` NO `npm run build`

### 3. Environment Variables (CRÍTICO)

Ve a **Settings** → **Environment variables** y agrega las siguientes:

#### Core Settings
```bash
NODE_VERSION=20.9.0
NEXT_PUBLIC_SITE_URL=https://focusonenglish.pages.dev
```

#### Supabase (OBLIGATORIO)
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

#### Stripe (OBLIGATORIO)
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### NextAuth (OBLIGATORIO)
```bash
NEXTAUTH_SECRET=<genera_uno_con: openssl rand -base64 32>
NEXTAUTH_URL=https://focusonenglish.pages.dev
```

#### OpenAI (OBLIGATORIO para funciones IA)
```bash
OPENAI_API_KEY=sk-...
```

#### HubSpot (OPCIONAL)
```bash
HUBSPOT_ACCESS_TOKEN=pat-...
HUBSPOT_PORTAL_ID=147592708
```

---

## 🚀 Deploy desde GitHub

### Opción 1: Deploy Automático (Recomendado)

1. Push tus cambios a GitHub:
```bash
git add .
git commit -m "chore: configurar para Cloudflare Pages"
git push origin main
```

2. Cloudflare detectará el push y desplegará automáticamente

3. Monitorea el deployment en:
https://dash.cloudflare.com/ → Pages → focusonenglish

### Opción 2: Deploy Manual desde Dashboard

1. Ve a tu proyecto en Cloudflare Pages
2. Click en **Create deployment**
3. Selecciona branch: `main`
4. Click en **Deploy**

---

## 💻 Deploy Local con Wrangler CLI

### Prerequisitos
```bash
# Login a Cloudflare
npx wrangler login
```

### Build y Preview Local
```bash
# Build para Cloudflare
npm run pages:build

# Preview local (con Edge Runtime simulation)
npm run preview

# O usar wrangler directamente
npm run cf:dev
```

### Deploy a Producción
```bash
# Deploy directo desde terminal
npm run deploy

# O con wrangler
npx wrangler pages deploy .vercel/output/static --project-name=focusonenglish
```

---

## 🔍 Verificar Build Localmente

Antes de pushear a GitHub, verifica que el build funcione:

```bash
# 1. Limpiar builds anteriores
rm -rf .next .vercel

# 2. Build con adapter de Cloudflare
npm run pages:build

# 3. Verificar que se creó .vercel/output/static
ls -la .vercel/output/static

# 4. Preview local
npm run preview
```

Si el build falla, revisa los errores TypeScript primero:
```bash
npm run type-check
```

---

## ⚠️ Limitaciones Conocidas

### 1. API Routes con Node.js Features

Algunas API routes pueden tener limitaciones en el Edge Runtime:

- **File system operations**: No soportado
- **Node.js crypto**: Usar Web Crypto API
- **Large computations**: Timeout de 30 segundos
- **Memory**: Límite de 128MB

### 2. Edge Runtime vs Node.js Runtime

Cloudflare Pages usa **Edge Runtime** (V8 isolates), no Node.js completo.

**APIs no disponibles**:
- `fs` (file system)
- `child_process`
- Algunos módulos nativos de Node.js

**Alternativas**:
- Usar Web APIs cuando sea posible
- Refactorizar funciones pesadas
- Considerar Cloudflare Workers para lógica compleja

### 3. Build Time

El adapter necesita procesar todas las API routes. El build puede tomar 2-5 minutos.

---

## 🐛 Troubleshooting

### Error: "Could not find selected Git installation"
✅ **Resuelto**: `wrangler.toml` ya está corregido

### Error: Build falla con "Module not found"
```bash
# Verificar que todas las dependencias estén instaladas
npm install

# Limpiar cache
rm -rf node_modules .next .vercel
npm install
npm run pages:build
```

### Error: "API route timed out"
- Optimizar la función para ser más rápida
- Usar Edge-compatible APIs
- Considerar mover lógica pesada a Cloudflare Workers

### Error: TypeScript errors durante build
```bash
# Ver todos los errores
npm run type-check

# Opción temporal (NO RECOMENDADO para producción):
# Descomentar en next.config.js:
# typescript: { ignoreBuildErrors: true }
```

---

## 📊 Monitoreo Post-Deployment

### 1. Verificar que el sitio está activo
```
https://focusonenglish.pages.dev
```

### 2. Revisar logs en tiempo real
```
Settings → Functions → Logs
```

### 3. Analytics
```
Analytics → Web Analytics
```

### 4. Configurar Stripe Webhooks

Después del deployment, actualiza el webhook de Stripe:

**Endpoint URL**: `https://focusonenglish.pages.dev/api/webhooks/stripe`

**Events to send**:
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_succeeded`
- `invoice.payment_failed`

---

## 🔐 Configuración de Dominio Personalizado

1. En Cloudflare Pages → **Custom domains**
2. Click en **Set up a custom domain**
3. Ingresa tu dominio: `focusenglish.com`
4. Sigue las instrucciones de DNS
5. Espera propagación (2-48 horas)

---

## 🔄 CI/CD Automático

Con la configuración actual:

✅ Cada push a `main` → Deploy automático a producción
✅ Cada push a otras branches → Deploy de preview
✅ Pull Requests → Preview deployment con URL única

**URL de preview**: `<branch-name>.<project-name>.pages.dev`

---

## 📈 Performance Optimization

### Cloudflare CDN
- ✅ Automático: Tu sitio se distribuye globalmente
- ✅ Edge caching configurado
- ✅ Brotli/Gzip compression

### Recomendaciones adicionales:
1. Habilitar **Automatic Platform Optimization** (APO)
2. Configurar **Cache Rules** personalizadas
3. Usar **Cloudflare Images** para imágenes optimizadas

---

## 📞 Soporte

Si encuentras problemas:

1. **Documentación oficial**: https://developers.cloudflare.com/pages/
2. **Discord de Cloudflare**: https://discord.gg/cloudflaredev
3. **GitHub Issues del adapter**: https://github.com/cloudflare/next-on-pages/issues

---

## ✅ Checklist Final

Antes de tu primer deploy:

- [ ] Variables de entorno configuradas en Cloudflare
- [ ] Build command correcto: `npm run pages:build`
- [ ] Output directory correcto: `.vercel/output/static`
- [ ] Node version: `20.9.0`
- [ ] Repository conectado a Cloudflare Pages
- [ ] Branch de producción: `main`
- [ ] Test local exitoso: `npm run preview`

---

**¡Listo para el deploy!** 🚀

Cuando hagas push a GitHub, Cloudflare desplegará automáticamente.

**Última actualización**: 2026-01-19
