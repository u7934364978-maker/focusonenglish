# Despliegue en Vercel - Focus English

## ✅ Cambios Realizados

- ✅ Eliminado `@cloudflare/next-on-pages` y `wrangler`
- ✅ Eliminado `wrangler.toml`
- ✅ Restaurado `next.config.js` a configuración estándar
- ✅ Build script simplificado a `next build`
- ✅ Agregado `vercel.json` con configuración básica
- ✅ Commit 38591396 pusheado a main

## 🚀 Pasos para Desplegar en Vercel

### 1. Importar Proyecto desde GitHub

1. Ve a https://vercel.com/new
2. Click en **"Import Git Repository"**
3. Selecciona el repositorio: `u7934364978-maker/focusonenglish`
4. Branch: **main**
5. Framework Preset: **Next.js** (auto-detectado)
6. Root Directory: `/` (default)
7. Build Command: `npm run build` (default)
8. Output Directory: `.next` (default)

### 2. Configurar Variables de Entorno

En la sección **Environment Variables**, agrega las siguientes variables:

#### Supabase
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

#### Stripe
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### NextAuth
```
NEXTAUTH_SECRET=<genera_con: openssl rand -base64 32>
NEXTAUTH_URL=https://focus-on-english.com
```

#### OpenAI
```
OPENAI_API_KEY=sk-...
```

#### HubSpot (opcional)
```
HUBSPOT_ACCESS_TOKEN=pat-...
HUBSPOT_PORTAL_ID=147592708
```

#### Site URL
```
NEXT_PUBLIC_SITE_URL=https://focus-on-english.com
```

### 3. Configurar Dominio Personalizado

1. Después del primer deploy, ve a **Settings → Domains**
2. Agrega `focus-on-english.com`
3. Vercel te dará los registros DNS:
   - **Tipo**: A o CNAME
   - **Nombre**: @ (para root) o www
   - **Valor**: xxx.vercel-dns.com

4. Actualiza los DNS en tu proveedor de dominio
5. Vercel generará automáticamente el certificado SSL

### 4. Configurar Webhook de Stripe

Después del deploy:

1. Ve a Stripe Dashboard → Developers → Webhooks
2. Agrega un nuevo endpoint:
   - **URL**: `https://focus-on-english.com/api/webhooks/stripe`
   - **Eventos**: Selecciona:
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
3. Copia el **Signing Secret** (whsec_...)
4. Actualiza `STRIPE_WEBHOOK_SECRET` en Vercel

### 5. Verificar el Deployment

✅ URLs a probar:
- https://focus-on-english.com/ (homepage)
- https://focus-on-english.com/signin → redirige a /cuenta/login
- https://focus-on-english.com/cuenta/login
- https://focus-on-english.com/dashboard
- https://focus-on-english.com/cursos

## 📊 Comparación: Cloudflare vs Vercel

| Aspecto | Cloudflare Pages | Vercel |
|---------|------------------|--------|
| **Adaptador** | Requiere @cloudflare/next-on-pages (deprecated) | ✅ Soporte nativo |
| **Build** | Complejo, prone a errores | ✅ Simple y directo |
| **Edge Runtime** | Limitaciones con 'use client' | ✅ Sin limitaciones |
| **Deploy Time** | ~4-5 min | ⚡ ~2-3 min |
| **Debugging** | Difícil | ✅ Logs claros |
| **SSR/ISR** | Limitado | ✅ Completo |
| **Costo** | Gratis | Gratis (Hobby tier) |

## 🎯 Ventajas de Vercel para Next.js

1. **Soporte Nativo**: Creado por el equipo de Next.js
2. **Zero Config**: No necesita adaptadores ni configuraciones complejas
3. **Fast Deploys**: Builds incrementales y cache inteligente
4. **Previews**: URL automática para cada PR
5. **Analytics**: Integrado (opcional)
6. **Edge Functions**: Soporte completo para middleware y edge runtime

## 🔧 Siguientes Pasos (Post-Deploy)

1. ✅ Verificar que todas las rutas funcionen
2. ✅ Configurar webhook de Stripe
3. ✅ Actualizar NEXTAUTH_URL si cambia el dominio
4. ✅ Probar flujo de autenticación completo
5. ✅ Verificar integración con Supabase
6. ✅ Probar pagos con Stripe

## 📝 Notas Importantes

- **Branch**: `main` (producción)
- **Commit**: 38591396
- **Node Version**: 20.9.0 (LTS)
- **Framework**: Next.js 15.4.10
- **Dominio**: focus-on-english.com

---

**¿Listo para deployar?** → https://vercel.com/new
