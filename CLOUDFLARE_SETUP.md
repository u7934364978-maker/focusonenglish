# Configuración de Cloudflare Pages para Focus English

## Pasos para Deploy en Cloudflare Pages

### 1. Conectar Repositorio a Cloudflare Pages

1. Ir a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Seleccionar tu cuenta
3. Ir a **Workers & Pages**
4. Click en **Create application** → **Pages** → **Connect to Git**
5. Conectar con GitHub y seleccionar el repositorio: `u7934364978-maker/focusonenglish`

### 2. Configuración del Build

```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: /
Node version: 20
```

### 3. Variables de Entorno

Añadir en Cloudflare Pages → Settings → Environment variables:

#### Variables Públicas
```
NEXT_PUBLIC_SITE_URL=https://focusenglish.pages.dev
NODE_VERSION=20
NEXT_TELEMETRY_DISABLED=1
```

#### Variables Privadas (Secrets)
```
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_stripe_key
STRIPE_SECRET_KEY=tu_stripe_secret
STRIPE_WEBHOOK_SECRET=tu_webhook_secret
OPENAI_API_KEY=tu_openai_key
HUBSPOT_ACCESS_TOKEN=tu_hubspot_token
RESEND_API_KEY=tu_resend_key
```

### 4. Configuración Next.js para Edge Runtime

El proyecto ya está configurado con:
- ✅ Edge Runtime compatible
- ✅ Server external packages configurados
- ✅ TypeScript y ESLint configurados para builds

### 5. Branch de Producción

- **Production branch**: `main`
- **Preview branches**: Todas las demás ramas generarán previews automáticos

### 6. Custom Domain (Opcional)

Para usar `focusenglish.com`:
1. Cloudflare Pages → Settings → Custom domains
2. Añadir `focusenglish.com` y `www.focusenglish.com`
3. Cloudflare configurará automáticamente los DNS si el dominio está en Cloudflare

### 7. Geo-Restriction Worker (Opcional)

Si necesitas restricción geográfica a España:
1. Deploy el Worker: `wrangler deploy`
2. Configurar route en Cloudflare Dashboard
3. Conectar con tu Pages deployment

## Deploy Automático

Una vez configurado, cada `git push` a GitHub desplegará automáticamente:
- Push a `main` → Producción
- Push a otras ramas → Preview deployment

## Deploy Manual desde CLI

```bash
# Hacer push a GitHub (desplegará automáticamente)
git push origin new-task-f78d:main

# O usar Wrangler para Pages (alternativa)
npx wrangler pages deploy .next --project-name=focusenglish
```

## Estado Actual

- ✅ Configuración base creada en `.cloudflare/config.json`
- ✅ Next.js configurado para Edge Runtime
- ⏳ Pendiente: Conectar repositorio en Cloudflare Dashboard
- ⏳ Pendiente: Configurar variables de entorno

## Notas Importantes

1. **Next.js en Cloudflare Pages**: Funciona mejor con el adapter OpenNext
2. **Límites**: Cloudflare Pages tiene límite de 25 MB por archivo
3. **Build time**: Máximo 20 minutos de build time en el plan gratuito
4. **Edge Runtime**: Algunas funcionalidades de Next.js requieren Node.js runtime (usar Vercel si es necesario)

## Alternativa: Continuar con Vercel

El proyecto ya está configurado para Vercel. Si prefieres mantener Vercel:
```bash
git push origin new-task-f78d:main
# Vercel desplegará automáticamente
```
