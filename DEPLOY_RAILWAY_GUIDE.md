# 🚀 GUÍA: DEPLOY EN RAILWAY.APP

## ✅ Por qué Railway es la mejor alternativa a Vercel

Railway es prácticamente **idéntico a Vercel** pero más económico:

- ✅ **Next.js 15 soportado completamente**
- ✅ **API Routes funcionan nativamente**
- ✅ **Deploy automático desde GitHub**
- ✅ **Zero configuración**
- ✅ **$5/mes** (vs $20/mes de Vercel Pro)

---

## 📋 Paso a Paso (10 minutos)

### Paso 1: Crear cuenta en Railway

1. Ve a: **https://railway.app/**
2. Click en "Start a New Project"
3. Login con GitHub (recomendado)
4. Autoriza Railway para acceder a tus repositorios

### Paso 2: Crear proyecto

1. Click en "New Project"
2. Selecciona "Deploy from GitHub repo"
3. Busca y selecciona: **`focusonenglish`**
4. Railway detectará automáticamente que es Next.js

### Paso 3: Configurar variables de entorno

En el dashboard de Railway:
1. Click en tu servicio
2. Tab "Variables"
3. Añadir estas variables:

```env
NEXTAUTH_SECRET=QWS4m1S6L2jQdxM2K8wDX8MDEfTdm7I12VPuCvkyZOk=
NEXTAUTH_URL=https://tu-app.railway.app
NEXT_PUBLIC_SUPABASE_URL=<tu_url_supabase>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<tu_anon_key>
SUPABASE_SERVICE_ROLE_KEY=<tu_service_role_key>
OPENAI_API_KEY=<tu_openai_key>
```

4. Guarda los cambios

### Paso 4: Deploy automático

Railway hará deploy automáticamente:
1. Detecta Next.js
2. Ejecuta: `npm install`
3. Ejecuta: `npm run build`
4. Inicia: `npm start`
5. ⏱️ Espera 3-5 minutos

### Paso 5: Obtener URL

1. Una vez completado, ve a "Settings"
2. Sección "Domains"
3. Click en "Generate Domain"
4. Railway genera: `https://tu-app-production.up.railway.app`

✅ **TU APP ESTÁ LIVE!**

### Paso 6: Actualizar NEXTAUTH_URL

1. Copia tu URL de Railway
2. Ve a "Variables"
3. Actualiza `NEXTAUTH_URL` con la URL real
4. Guarda (redeploy automático)

---

## 🔄 Deploy automático configurado

Ahora cada vez que hagas:

```bash
git add .
git commit -m "Cambios"
git push origin main
```

Railway automáticamente:
1. Detecta el push
2. Build del proyecto
3. Deploy a producción
4. Notificación cuando está listo

---

## 💰 Pricing

- **Plan Hobby**: $5/mes
  - 500 horas de ejecución
  - 100GB egress
  - Suficiente para 1000-2000 usuarios activos

- **Plan Pro**: $20/mes
  - Más recursos si creces

---

## 🌐 Custom Domain (Opcional)

1. En "Domains", click "Custom Domain"
2. Ingresa: `focusenglish.com`
3. Railway te da records DNS
4. Configura CNAME en tu proveedor DNS
5. SSL automático en ~5 minutos

---

## 📊 Otras alternativas

Si Railway no te convence:

| Plataforma | Precio | Recomendación |
|------------|--------|---------------|
| Render.com | $7/mes | ⭐⭐⭐⭐ |
| Fly.io | $5/mes | ⭐⭐⭐⭐ |
| DigitalOcean | $5/mes | ⭐⭐⭐ |

---

## ✅ Resumen

**Railway es la mejor alternativa a Vercel para tu app** porque:

1. ✅ Funciona igual que Vercel
2. ✅ Más económico ($5 vs $20/mes)
3. ✅ Zero configuración
4. ✅ Deploy automático
5. ✅ Todas las features de Next.js 15

**No necesitas cambiar nada en tu código.**
