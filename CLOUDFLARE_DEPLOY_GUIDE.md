# 🚀 Deploy a Cloudflare Pages - Guía Rápida

## ¿Por qué Cloudflare Pages?
- ✅ **GRATIS ilimitado** (requests, bandwidth, builds)
- ✅ **Ultra rápido** - CDN con 300+ ubicaciones
- ✅ **Deploy automático** desde GitHub
- ✅ **SSL gratuito** automático
- ✅ **Excelente para Next.js**

---

## 📋 Paso a Paso (15 minutos)

### 1️⃣ Preparar el Proyecto

```bash
# Asegurar que Next.js está configurado para export estático
# Editar next.config.js
```

Agregar a `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',  // ← Habilitar export estático
  images: {
    unoptimized: true, // ← Requerido para export
  },
  // ... resto de tu configuración
}
```

### 2️⃣ Crear Build Estático

```bash
npm run build
```

Esto genera la carpeta `.next/` con el sitio estático.

### 3️⃣ Deploy con Wrangler (CLI)

```bash
# Instalar Wrangler
npm install -g wrangler

# Login a Cloudflare
wrangler login

# Deploy
npx wrangler pages deploy out --project-name=focusenglish
```

### 4️⃣ Deploy Automático desde GitHub

**Mejor opción para CI/CD:**

1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click en **Pages** → **Create a project**
3. Conecta tu repositorio GitHub
4. Configura:
   ```
   Build command: npm run build
   Build output directory: out
   Root directory: /
   ```
5. Agrega variables de entorno (mismo que Vercel)
6. Click **Save and Deploy**

---

## ⚙️ Configuración Recomendada

### Build Settings
```yaml
Build command: npm run build
Build output directory: out
Root directory: /
Node version: 20.x
```

### Variables de Entorno
```env
NEXT_PUBLIC_SITE_URL=https://focusenglish.pages.dev
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
OPENAI_API_KEY=...
STRIPE_SECRET_KEY=...
# ... todas tus variables
```

---

## 🔧 Next.js con Rutas Dinámicas

Si necesitas rutas dinámicas (como `/curso-a1`):

### Opción 1: Static Export (Recomendado)
```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
}
```

### Opción 2: Next.js on Cloudflare Workers
```bash
# Usar @cloudflare/next-on-pages
npm install -D @cloudflare/next-on-pages
```

Agregar a `package.json`:
```json
{
  "scripts": {
    "pages:build": "npx @cloudflare/next-on-pages",
    "pages:deploy": "npm run pages:build && wrangler pages deploy .vercel/output/static"
  }
}
```

---

## 🚀 Deploy Commands

### Deploy Manual
```bash
npm run build
npx wrangler pages deploy out --project-name=focusenglish
```

### Deploy con GitHub Actions
Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: focusenglish
          directory: out
```

---

## 🌐 Custom Domain

1. En Cloudflare Pages dashboard:
   - Ve a tu proyecto
   - Click en **Custom domains**
   - Agrega `focusenglish.com`
   - Agrega CNAME automáticamente

2. DNS Records (si usas Cloudflare DNS):
```
CNAME  focusenglish.com  →  focusenglish.pages.dev
```

---

## ✅ Verificación Post-Deploy

```bash
# Verificar que el sitio está live
curl -I https://focusenglish.pages.dev

# Deberías ver:
HTTP/2 200
```

---

## 📊 Comparación: Cloudflare vs Vercel

| Feature | Cloudflare Pages | Vercel |
|---------|------------------|--------|
| **Precio gratis** | Ilimitado ✅ | 100GB bandwidth/mes |
| **Builds gratis** | 500/mes | 100/mes |
| **Deploy time** | 2-4 min | 2-5 min |
| **CDN locations** | 300+ ⭐ | 60+ |
| **Edge Functions** | Workers ✅ | Edge Functions ✅ |
| **Custom domains** | Ilimitados ✅ | 1 en gratis |

---

## 🔥 Ventajas de Cloudflare Pages

1. **Gratis Ilimitado**
   - Sin límite de bandwidth
   - Sin límite de requests
   - 500 builds/mes

2. **Velocidad**
   - CDN más rápido del mundo
   - 300+ ubicaciones
   - DDoS protection incluido

3. **Developer Experience**
   - Deploy en 2-3 minutos
   - Preview deployments automáticos
   - Rollback instantáneo

4. **Escalabilidad**
   - Auto-scaling ilimitado
   - Sin "cold starts"
   - Workers para backend logic

---

## 🆘 Troubleshooting

### Error: "output" is not recognized
**Solución:** Asegurar Next.js 13.3+
```bash
npm install next@latest
```

### 404 en rutas dinámicas
**Solución:** Agregar `trailingSlash: true`
```javascript
// next.config.js
module.exports = {
  output: 'export',
  trailingSlash: true,
}
```

### Imágenes no cargan
**Solución:** Usar `unoptimized: true`
```javascript
images: {
  unoptimized: true,
}
```

---

## 🎯 Próximos Pasos

1. ✅ Configurar `output: 'export'` en next.config.js
2. ✅ Hacer build y verificar carpeta `out/`
3. ✅ Deploy a Cloudflare Pages
4. ✅ Configurar custom domain
5. ✅ Configurar GitHub auto-deploy

---

## 📞 Recursos

- **Dashboard**: https://dash.cloudflare.com/
- **Docs**: https://developers.cloudflare.com/pages/
- **Status**: https://www.cloudflarestatus.com/

---

**¿Listo para deploy? Ejecuta:**
```bash
npm run build && npx wrangler pages deploy out --project-name=focusenglish
```
