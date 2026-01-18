# 🔧 Configuración Final para DigitalOcean - Solución Completa

## 🎯 Problema Identificado

Después del análisis, se identificaron **múltiples problemas**:

1. ❌ **Puerto mal configurado** en `.do/app.yaml` (3000 vs 8080)
2. ❌ **Health check muy agresivo** (timeout 5s, solo 3 intentos)
3. ❌ **Configuraciones antiguas** de Vercel y Railway presentes
4. ❌ **Servidor no detectaba correctamente** el puerto de DigitalOcean

## ✅ Soluciones Aplicadas

### 1. **Actualización de `.do/app.yaml`**
```yaml
http_port: 8080  # ← Cambiado de 3000 a 8080
health_check:
  http_path: /
  initial_delay_seconds: 60   # ← Aumentado de 30s a 60s
  period_seconds: 15          # ← Aumentado de 10s a 15s
  timeout_seconds: 10         # ← Aumentado de 5s a 10s
  success_threshold: 1
  failure_threshold: 5        # ← Aumentado de 3 a 5 intentos
```

### 2. **Mejora del `server.js`**
```javascript
// Ahora detecta múltiples variables de puerto
const port = parseInt(
  process.env.PORT || 
  process.env.HTTP_PORT || 
  '8080', 
  10
);

// Siempre bind a 0.0.0.0 (necesario para DO)
const hostname = '0.0.0.0';

// Más logging para debugging
console.log('All env vars:', Object.keys(process.env).filter(
  k => k.includes('PORT') || k.includes('HOST')
));
```

### 3. **Archivos de Configuración Legacy**
Identificados pero dejados para compatibilidad:
- ✅ `vercel.json` - No interfiere
- ✅ `railway.toml` - No interfiere  
- ✅ `.vercelignore` - No interfiere

## 🚀 Pasos Siguientes en DigitalOcean

### PASO 1: Verificar Variables de Entorno

Ve a tu app en DigitalOcean → **Settings** → **App-Level Environment Variables**

Asegúrate de tener estas variables configuradas:

```bash
# CRÍTICAS (sin estas, la app no funcionará)
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# OPCIONAL (para OpenAI)
OPENAI_API_KEY=sk-...

# NO NECESITAS
# PORT (DigitalOcean lo asigna automáticamente)
# HOSTNAME (el servidor ya usa 0.0.0.0)
```

### PASO 2: Forzar Redeploy

1. Ve a: https://cloud.digitalocean.com/apps
2. Click en tu app **"goldfish-app"**
3. Click en **"Actions"** → **"Force Rebuild and Deploy"**
4. Espera 5-8 minutos

### PASO 3: Monitorear el Build

Durante el deploy, ve a **"Runtime Logs"** y busca:

```
✅ Mensajes esperados:
🚀 Starting Focus English server...
Environment: production
Hostname: 0.0.0.0
Port: 8080
NODE_ENV: production
✅ Server ready on http://0.0.0.0:8080

❌ Mensajes de error a buscar:
Error: listen EADDRINUSE  (puerto ya en uso)
Error: ECONNREFUSED       (conexión rechazada)
Module not found          (falta dependencia)
```

### PASO 4: Verificar el Health Check

Después del deploy:
1. Ve a **"Activity"** tab
2. Busca "Health check passed" ✅
3. Si ves "Health check failed" ❌, revisa los logs

## 🔍 Troubleshooting

### Problema: "Health check failed"

**Solución 1: Aumentar el timeout**
1. Edita `.do/app.yaml`
2. Aumenta `initial_delay_seconds` a 90
3. Commit y push

**Solución 2: Simplificar health check**
```yaml
health_check:
  http_path: /
  initial_delay_seconds: 120
  period_seconds: 30
  timeout_seconds: 15
  success_threshold: 1
  failure_threshold: 10
```

### Problema: "Port 8080 already in use"

Esto indica que el deploy anterior no se cerró. 
1. Ve a **Actions** → **"Force Restart"**
2. Si persiste: **"Force Rebuild and Deploy"**

### Problema: "Cannot find module 'next'"

1. Verifica en **"Build Logs"** que `npm install` se completó
2. Fuerza limpieza: Edita `package.json` (añade un espacio)
3. Commit y push para forzar rebuild limpio

### Problema: Error 522 en Cloudflare

Si usas un dominio personalizado con Cloudflare:

**Verifica los DNS:**
```
Tipo: CNAME
Nombre: @ (o www)
Contenido: goldfish-app-xxxxx.ondigitalocean.app
Proxy: ✅ Activado (nube naranja)
TTL: Auto
```

**Configura SSL en Cloudflare:**
1. SSL/TLS → Overview
2. Selecciona: **"Full (strict)"** ← IMPORTANTE
3. Espera 5 minutos

**Cloudflare Origin Rules:**
1. Rules → Origin Rules
2. Crea regla nueva:
   - When: hostname equals "tu-dominio.com"
   - Then: Override Host Header = "goldfish-app-xxxxx.ondigitalocean.app"

## 📊 Verificación Final

### 1. URL de DigitalOcean
```
✅ https://goldfish-app-xxxxx.ondigitalocean.app/
✅ https://goldfish-app-xxxxx.ondigitalocean.app/cursos
✅ https://goldfish-app-xxxxx.ondigitalocean.app/aula
```

### 2. Dominio Personalizado (si aplica)
```
✅ https://www.focus-on-english.com/
✅ https://www.focus-on-english.com/cursos
✅ https://www.focus-on-english.com/aula
```

### 3. Logs del Servidor
```bash
# Debe mostrar:
Server ready on http://0.0.0.0:8080
✅ Port: 8080
✅ Hostname: 0.0.0.0
```

## 🎯 Checklist de Deploy

- [ ] Variables de entorno configuradas en DigitalOcean
- [ ] `.do/app.yaml` con puerto 8080
- [ ] Health check configurado (60s initial delay)
- [ ] Commit y push realizados
- [ ] Force Rebuild iniciado
- [ ] Logs muestran "Server ready"
- [ ] Health check passed ✅
- [ ] URL de DigitalOcean responde
- [ ] Dominio personalizado configurado (si aplica)
- [ ] SSL de Cloudflare en "Full (strict)"

## 📚 Archivos Modificados en Este Fix

```
✅ .do/app.yaml       - Puerto 8080 y health check mejorado
✅ server.js           - Detección mejorada de puerto y logging
📄 Este documento      - Guía completa de configuración
```

## 🆘 Si Nada Funciona

**Plan B: Cambiar el comando de inicio**

En DigitalOcean App Settings:
1. Run Command: Cambia de `npm start` a:
   ```bash
   PORT=8080 node server.js
   ```

**Plan C: Usar build standalone**

1. En `next.config.js`, descomenta:
   ```javascript
   output: 'standalone',
   ```
2. Cambia Run Command a:
   ```bash
   node .next/standalone/server.js
   ```

## 💡 Próximos Pasos

1. ⏳ **Espera el redeploy** (5-10 minutos)
2. 📊 **Monitorea los Runtime Logs**
3. ✅ **Verifica que el health check pase**
4. 🌐 **Prueba la URL**
5. 🎉 **¡Debería funcionar!**

---

**Última actualización**: 2026-01-18 11:45 UTC
**Estado**: ✅ Configuración optimizada para DigitalOcean
**Tiempo estimado de resolución**: 10-15 minutos
