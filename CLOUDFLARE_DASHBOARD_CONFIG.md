# 🎯 Configuración del Dashboard de Cloudflare - Paso a Paso

## ⚠️ IMPORTANTE: El Build Command se configura en el Dashboard

**NO** en el `wrangler.toml`. Sigue estos pasos exactos:

---

## 📋 Paso 1: Acceder a Cloudflare Pages

1. Ve a: https://dash.cloudflare.com/
2. Login con tu cuenta
3. Selecciona tu cuenta/zona
4. Click en **Pages** (menú izquierdo)

---

## 📋 Paso 2: Crear Proyecto

### Si es tu primer deployment:

1. Click en **"Create a project"**
2. Click en **"Connect to Git"**
3. Selecciona **GitHub**
4. Autoriza Cloudflare Pages en GitHub
5. Selecciona repositorio: `u7934364978-maker/focusonenglish`
6. Click en **"Begin setup"**

### Si ya existe el proyecto:

1. Busca tu proyecto **"focusonenglish"**
2. Click en **Settings** → **Builds & deployments**
3. Click en **"Configure build settings"**

---

## 📋 Paso 3: Build Configuration (CRÍTICO)

Llena estos campos **EXACTAMENTE** como se muestra:

```
┌─────────────────────────────────────────────────────────┐
│ Set up builds and deployments                           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ Project name                                            │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ focusonenglish                                      │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ Production branch                                       │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ main                                               ▼│ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ Framework preset                                        │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Next.js                                            ▼│ │
│ └─────────────────────────────────────────────────────┘ │
│   ⚠️ O selecciona "None" si no aparece Next.js         │
│                                                         │
│ Build command                                           │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ npm run pages:build                                 │ │ ⬅️ CRÍTICO
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ Build output directory                                  │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ .vercel/output/static                               │ │ ⬅️ CRÍTICO
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ Root directory (advanced)                              │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ /                                                   │ │
│ └─────────────────────────────────────────────────────┘ │
│   (Dejar vacío o poner "/")                            │
│                                                         │
│ [Environment variables (13)]                      [+]  │ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### ✅ Valores Correctos:

| Campo | Valor |
|-------|-------|
| **Project name** | `focusonenglish` |
| **Production branch** | `main` |
| **Framework preset** | `Next.js` o `None` |
| **Build command** | `npm run pages:build` |
| **Build output directory** | `.vercel/output/static` |
| **Root directory** | `/` (o vacío) |

---

## 📋 Paso 4: Environment Variables (13 variables)

Click en **"Environment variables"** y agrega una por una:

### 🔧 Core (2 variables)

```bash
Name: NODE_VERSION
Value: 20.9.0
Environment: Production ✓  Preview ✓

Name: NEXT_PUBLIC_SITE_URL
Value: https://focusonenglish.pages.dev
Environment: Production ✓  Preview ✓
```

### 🗄️ Supabase (3 variables - OBLIGATORIO)

```bash
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://tu-proyecto.supabase.co
Environment: Production ✓  Preview ✓

Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Environment: Production ✓  Preview ✓

Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Environment: Production ✓  Preview ✗  (solo producción)
```

### 💳 Stripe (3 variables - OBLIGATORIO)

```bash
Name: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
Value: pk_live_51... o pk_test_51...
Environment: Production ✓  Preview ✓

Name: STRIPE_SECRET_KEY
Value: sk_live_51... o sk_test_51...
Environment: Production ✓  Preview ✗  (solo producción)

Name: STRIPE_WEBHOOK_SECRET
Value: whsec_...
Environment: Production ✓  Preview ✗  (solo producción)
```

### 🔐 NextAuth (2 variables - OBLIGATORIO)

Para generar NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

```bash
Name: NEXTAUTH_SECRET
Value: <tu_secret_generado_de_32_caracteres>
Environment: Production ✓  Preview ✗  (solo producción)

Name: NEXTAUTH_URL
Value: https://focusonenglish.pages.dev
Environment: Production ✓
        (para Preview, ajusta manualmente cada deployment)
```

### 🤖 OpenAI (1 variable - OBLIGATORIO)

```bash
Name: OPENAI_API_KEY
Value: sk-proj-...
Environment: Production ✓  Preview ✗  (solo producción)
```

### 📧 HubSpot (2 variables - OPCIONAL)

```bash
Name: HUBSPOT_ACCESS_TOKEN
Value: pat-na1-...
Environment: Production ✓  Preview ✗  (opcional)

Name: HUBSPOT_PORTAL_ID
Value: 147592708
Environment: Production ✓  Preview ✓  (opcional)
```

---

## 📋 Paso 5: Verificar Configuración

Antes de hacer clic en "Save and Deploy":

### ✅ Checklist:

- [ ] Build command: `npm run pages:build`
- [ ] Output directory: `.vercel/output/static`
- [ ] NODE_VERSION: `20.9.0`
- [ ] Las 13 variables de entorno configuradas
- [ ] Variables secretas solo en Production (no Preview)

---

## 📋 Paso 6: Deploy

1. Click en **"Save and Deploy"**
2. Cloudflare comenzará el build
3. Puedes ver el progreso en tiempo real

### Lo que verás en los logs:

```
✓ Cloning repository
✓ Installing dependencies (npm install)
✓ Running build command: npm run pages:build
  → @cloudflare/next-on-pages processing...
  → Converting Next.js routes to Edge...
  → Bundling functions...
✓ Build completed
✓ Uploading to Cloudflare CDN
✓ Deployment successful

🌐 Your site is live at:
   https://focusonenglish.pages.dev
```

**Tiempo estimado**: 3-7 minutos

---

## 🐛 Si el Build Falla

### Error 1: "npm run pages:build not found"

**Causa**: Los cambios no están en GitHub
**Solución**: 
```bash
git pull origin main
# Verifica que package.json tenga el script pages:build
```

### Error 2: "Output directory not found"

**Causa**: Build command incorrecto
**Solución**: Verifica que sea exactamente: `npm run pages:build`

### Error 3: "Module not found" o TypeScript errors

**Causa**: Errores de código o dependencias faltantes
**Solución temporal**: 
1. Ve a `next.config.js`
2. Agrega:
```javascript
typescript: {
  ignoreBuildErrors: true,
},
eslint: {
  ignoreDuringBuilds: true,
},
```
3. Commit y push
4. Retry deployment

### Error 4: "Build timeout"

**Causa**: Build toma más de 20 minutos
**Solución**: 
- Retry deployment (puede ser problema temporal)
- Verifica que no haya bucles infinitos en el código

---

## 📋 Paso 7: Post-Deployment

### 1. Verifica el sitio
```
https://focusonenglish.pages.dev
```

### 2. Configura Stripe Webhook

Si aún no lo has hecho:

1. Ve a: https://dashboard.stripe.com/webhooks
2. Click en **"Add endpoint"**
3. Endpoint URL: `https://focusonenglish.pages.dev/api/webhooks/stripe`
4. Listen to: Events on your account
5. Select events:
   - ✓ customer.subscription.created
   - ✓ customer.subscription.updated
   - ✓ customer.subscription.deleted
   - ✓ invoice.payment_succeeded
   - ✓ invoice.payment_failed
6. Click **"Add endpoint"**
7. Copia el **Signing secret** (whsec_...)
8. Actualiza `STRIPE_WEBHOOK_SECRET` en Cloudflare

### 3. Prueba funcionalidad crítica

- [ ] Página principal carga
- [ ] Login/Register funciona
- [ ] Cursos son accesibles
- [ ] API routes responden (check en console de browser)
- [ ] Checkout de Stripe funciona

---

## 🔄 Deployments Futuros

### Automático
Cada `git push origin main` desplegará automáticamente.

### Ver historial
Pages → Tu proyecto → Deployments

### Rollback
Si algo falla, puedes hacer rollback a un deployment anterior:
1. Deployments → Ver deployment anterior
2. Click en **"⋮"** (tres puntos)
3. **"Rollback to this deployment"**

---

## 📊 Monitoreo

### Analytics
Pages → Tu proyecto → Analytics

### Logs en tiempo real
Pages → Tu proyecto → Functions → View logs

### Alerts
Settings → Notifications → Configure alerts por email

---

## 🆘 Soporte

Si tienes problemas:

1. **Cloudflare Docs**: https://developers.cloudflare.com/pages/
2. **Discord**: https://discord.gg/cloudflaredev
3. **Community Forum**: https://community.cloudflare.com/
4. **Support ticket**: https://dash.cloudflare.com/ → Support

---

## ✅ Última Verificación

Antes de cerrar este guide:

- [ ] Build command configurado: `npm run pages:build`
- [ ] Output directory: `.vercel/output/static`
- [ ] 13 variables de entorno configuradas
- [ ] Deployment completado exitosamente
- [ ] Sitio cargando en https://focusonenglish.pages.dev
- [ ] Stripe webhook configurado
- [ ] Funcionalidad básica verificada

---

**¡Success!** 🎉

Tu proyecto Focus English está desplegado en Cloudflare Pages.

**Última actualización**: 2026-01-19
