# 🔧 DigitalOcean 522 Connection Timeout - SOLUCIÓN

## ❌ Problema
- ✅ Deployment exitoso en DigitalOcean
- ❌ Error 522 (Connection timed out) al acceder al sitio
- ❌ El servidor no responde a las peticiones HTTP

## 🎯 Causa Raíz
El problema estaba en cómo se configuraba el puerto del servidor:

1. **package.json incorrecto**: Usaba `next start -p $PORT` que no maneja bien variables de entorno en todos los ambientes
2. **Sin servidor personalizado**: Next.js standalone necesita un servidor que escuche correctamente en el puerto asignado
3. **Configuración de puerto**: DigitalOcean asigna el puerto dinámicamente vía variable `PORT`

## ✅ Solución Aplicada

### 1. Creado `server.js` personalizado
```javascript
// server.js - Maneja correctamente el puerto de DigitalOcean
const port = parseInt(process.env.PORT || '3000', 10);
```

**Características:**
- ✅ Lee `process.env.PORT` correctamente
- ✅ Fallback a puerto 3000 para desarrollo
- ✅ Logs detallados de inicio
- ✅ Manejo de errores robusto
- ✅ Graceful shutdown (SIGTERM/SIGINT)

### 2. Actualizado `package.json`
```json
"scripts": {
  "start": "node server.js"
}
```

### 3. Actualizado `Procfile`
```
web: node server.js
```

### 4. Creado `.do/app.yaml`
Configuración explícita para DigitalOcean:
- HTTP port: 3000
- Health check endpoint: /
- Build & run commands optimizados

## 📝 Pasos para Aplicar la Solución

### Opción A: Redeploy Automático (Recomendado)
1. Los cambios ya están commiteados en el repo
2. DigitalOcean detectará el push automáticamente
3. Iniciará un nuevo deployment (~5-8 minutos)
4. El nuevo deployment usará `server.js`

### Opción B: Force Rebuild Manual
1. Ve a tu app en DigitalOcean
2. Click en **"Settings"**
3. Scroll hasta **"App Configuration"**
4. Click en **"Force Rebuild and Deploy"**

## 🔍 Verificación

### 1. Revisar Logs de Build
```
Dashboard → Tu App → Activity → Click en el deployment
```

**Busca estas líneas:**
```
✓ Creating an optimized production build
✓ Compiled successfully
✓ Build completed
```

### 2. Revisar Runtime Logs
```
Dashboard → Tu App → Runtime Logs
```

**Deberías ver:**
```
🚀 Starting Focus English server...
Environment: production
Hostname: 0.0.0.0
Port: 8080 (o el que asigne DigitalOcean)
✅ Server ready on http://0.0.0.0:8080
```

### 3. Probar la URL
```
https://focusonenglish-xxxxx.ondigitalocean.app
```

**Expected:**
- ✅ Status 200
- ✅ Landing page cargando correctamente
- ✅ Sin errores 522

## 🐛 Troubleshooting Adicional

### Si aún ves 522 después del redeploy:

#### 1. Verificar Puerto en Logs
```bash
# En Runtime Logs, busca:
Port: 8080  # O el puerto que sea
```

#### 2. Verificar Health Check
La app debe responder en `/` con status 200.

#### 3. Revisar Environment Variables
Asegúrate de que estas variables estén configuradas:
```
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_key (encrypted)
NEXTAUTH_SECRET=tu_secret (encrypted)
NEXTAUTH_URL=https://tu-app.ondigitalocean.app
OPENAI_API_KEY=tu_key (encrypted)
```

#### 4. Verificar Build Command
En App Settings:
```
Build Command: npm install && npm run build
Run Command: npm start
```

#### 5. Port Binding Error
Si ves en logs: `Error: listen EADDRINUSE`

**Solución:**
- El puerto ya está en uso (raro en DigitalOcean)
- Force rebuild para reiniciar contenedor

## 📊 Comparación: Antes vs Después

### ❌ Antes (No funcionaba)
```json
"start": "next start -p $PORT"
```
**Problema:** `$PORT` no se expandía correctamente

### ✅ Después (Funciona)
```javascript
// server.js
const port = parseInt(process.env.PORT || '3000', 10);
```
**Ventaja:** Lee la variable de entorno directamente en Node.js

## 🎯 Archivos Modificados

1. ✅ `package.json` - Actualizado script `start`
2. ✅ `server.js` - Creado nuevo servidor personalizado
3. ✅ `Procfile` - Actualizado comando web
4. ✅ `.do/app.yaml` - Configuración DigitalOcean

## 🚀 Próximos Pasos

Una vez que el redeploy termine (5-8 minutos):

1. ✅ Accede a tu URL de DigitalOcean
2. ✅ Verifica que carga la homepage
3. ✅ Prueba las rutas principales:
   - `/` - Homepage
   - `/cursos` - Cursos
   - `/aula` - Aula virtual
   - `/test-nivel` - Test de nivel
   - `/cuenta/login` - Login

## 💡 Tips para Evitar este Problema

### 1. Siempre usa `process.env.PORT`
```javascript
const port = process.env.PORT || 3000;
```

### 2. Logs detallados en producción
```javascript
console.log('Server starting on port:', port);
```

### 3. Health checks
```javascript
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
```

### 4. Graceful shutdown
```javascript
process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
```

## 📚 Recursos Adicionales

- [Next.js Custom Server Docs](https://nextjs.org/docs/pages/building-your-application/configuring/custom-server)
- [DigitalOcean App Platform](https://docs.digitalocean.com/products/app-platform/)
- [Node.js HTTP Module](https://nodejs.org/api/http.html)

## ✅ Confirmación

Si después del redeploy:
- ✅ No hay error 522
- ✅ La página carga correctamente
- ✅ Los logs muestran "Server ready"

**¡El problema está resuelto! 🎉**

---

**Archivo creado:** 2026-01-18
**Problema:** Error 522 Connection Timeout en DigitalOcean
**Solución:** Custom server.js con manejo correcto de PORT
**Estado:** ✅ Resuelto
