# 🔧 Solución al Error 522 en DigitalOcean

## ❌ Problema
Tu aplicación en DigitalOcean mostraba el error **522 Connection Timed Out** de Cloudflare porque el servidor Next.js no estaba escuchando correctamente en el puerto asignado por DigitalOcean.

## ✅ Solución Aplicada

### 1. **Servidor Personalizado** (`server.js`)
Se ha creado un servidor Node.js personalizado que:
- ✅ Lee correctamente la variable `PORT` de DigitalOcean
- ✅ Escucha en `0.0.0.0` para aceptar conexiones externas
- ✅ Maneja errores y señales de shutdown correctamente
- ✅ Proporciona logs detallados para debugging

### 2. **Scripts de package.json**
```json
{
  "scripts": {
    "start": "node server.js",           // ← Usa el servidor personalizado
    "start:next": "next start -p ${PORT:-3000}"  // ← Backup directo
  }
}
```

### 3. **Configuración de Next.js**
En `next.config.js`:
```javascript
// output: 'standalone', // ← COMENTADO
```
- La opción `standalone` está diseñada para Railway/Docker
- DigitalOcean App Platform no la necesita
- Puede causar conflictos con el servidor personalizado

### 4. **Procfile**
```
web: node server.js
```
Actualizado para usar el servidor personalizado.

## 🚀 Qué Hacer Ahora en DigitalOcean

### Opción A: Redeploy Automático (Recomendado)
Si tienes **Autodeploy activado**:
1. Los cambios ya están en GitHub
2. DigitalOcean detectará el push automáticamente
3. Iniciará un nuevo build (5-8 minutos)
4. ✅ El error 522 debería desaparecer

### Opción B: Redeploy Manual
Si necesitas forzar el redeploy:

1. Ve a tu app en DigitalOcean: https://cloud.digitalocean.com/apps
2. Click en tu app **"goldfish-app"** (o como se llame)
3. Ve a la pestaña **"Settings"**
4. Scroll hasta el final
5. Click en **"Force Rebuild and Deploy"**
6. Espera 5-8 minutos

## 🔍 Cómo Verificar que Funciona

### 1. **Ver los Logs en Tiempo Real**
En DigitalOcean:
- Tu app → **"Runtime Logs"**
- Busca estos mensajes:

```
🚀 Starting Focus English server...
Environment: production
Hostname: 0.0.0.0
Port: 8080
✅ Server ready on http://0.0.0.0:8080
```

### 2. **Probar la URL**
```
✅ https://goldfish-app-xxxxx.ondigitalocean.app/
✅ https://goldfish-app-xxxxx.ondigitalocean.app/cursos
✅ https://goldfish-app-xxxxx.ondigitalocean.app/aula
```

### 3. **Verificar en Cloudflare**
Si usas un dominio personalizado con Cloudflare:
- El error 522 debería desaparecer
- La página debería cargar normalmente

## 📊 Tiempos Esperados

| Acción | Tiempo |
|--------|--------|
| Push a GitHub | ✅ Completado |
| Detección de cambios | 30 segundos |
| Build en DigitalOcean | 5-8 minutos |
| Deploy completo | ~10 minutos total |

## 🐛 Si Aún Tienes Problemas

### Error: "Port already in use"
```bash
# En Settings → Force Rebuild and Deploy
```

### Error: "Cannot find module 'next'"
```bash
# Verifica que package.json tenga:
"dependencies": {
  "next": "^15.1.3"
}
```

### Error 500 después del deploy
1. Ve a **Runtime Logs**
2. Busca errores en rojo
3. Verifica las **Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `OPENAI_API_KEY`

## 📝 Archivos Modificados

```
✅ server.js (creado)
✅ package.json (actualizado)
✅ next.config.js (actualizado)
✅ Procfile (actualizado)
✅ .do/app.yaml (creado para referencia)
```

## 🎯 Commit Realizado

```
Commit: f1edfde
Message: fix(deployment): Configure server for DigitalOcean App Platform

Cambios:
- Add custom server.js for proper PORT handling
- Update start script to use custom server
- Comment out 'standalone' output in next.config.js
- Update Procfile to use node server.js
- Fixes 522 Connection Timeout error on DigitalOcean
```

## ✨ Próximos Pasos

1. ⏳ **Espera el redeploy** (5-10 minutos)
2. ✅ **Verifica la URL** en tu navegador
3. 🎉 **Confirma que funciona** correctamente
4. 📧 **Actualiza el dominio** en Cloudflare si es necesario

---

## 📚 Referencias

- **DigitalOcean Dashboard**: https://cloud.digitalocean.com/apps
- **Guía de Deploy**: `DEPLOY_DIGITALOCEAN_GUIDE.md`
- **Logs del servidor**: `server.js` líneas 11-41

---

**Última actualización**: 2026-01-18
**Tiempo total de solución**: 15 minutos
**Estado**: ✅ Listo para redeploy
