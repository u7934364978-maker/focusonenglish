# 🚀 CONFIGURACIÓN VERCEL - Google Analytics

**Fecha**: 15 de enero de 2026  
**Measurement ID**: G-6E0H0YK89W  
**ID de Flujo**: 13306619076  
**Estado**: ⚠️ REQUIERE CONFIGURACIÓN EN VERCEL

---

## ⚠️ ACCIÓN INMEDIATA REQUERIDA

Para que Google Analytics funcione en tu sitio web de producción, **DEBES** configurar las siguientes variables de entorno en Vercel.

---

## 📋 PASO A PASO: Configurar Variables en Vercel

### Paso 1: Acceder a Vercel Dashboard

1. Ve a: **https://vercel.com/dashboard**
2. Inicia sesión con tu cuenta
3. Selecciona tu proyecto: **focusonenglish**
4. Click en **"Settings"** (en el menú superior)
5. Click en **"Environment Variables"** (menú lateral izquierdo)

---

### Paso 2: Añadir Variable de Google Analytics

#### Variable 1: Google Analytics Measurement ID

```
Name (Nombre):
NEXT_PUBLIC_GA_MEASUREMENT_ID

Value (Valor):
G-6E0H0YK89W

Environments (Entornos):
☑️ Production
☑️ Preview  
☑️ Development
```

**Click en "Save" (Guardar)**

---

### Paso 3: Añadir Variable de Cookiebot

#### Variable 2: Cookiebot ID

```
Name (Nombre):
NEXT_PUBLIC_COOKIEBOT_ID

Value (Valor):
474b1dce-7229-40d3-88c2-a2323b9a57f9

Environments (Entornos):
☑️ Production
☑️ Preview
☑️ Development
```

**Click en "Save" (Guardar)**

---

### Paso 4: Re-Deployar el Sitio

**Opción A - Desde Vercel Dashboard (Recomendado)**:

1. Click en **"Deployments"** (en el menú superior)
2. Busca el último deployment (el más reciente arriba)
3. Click en los **tres puntos (...)** a la derecha
4. Click en **"Redeploy"**
5. En el popup, click en **"Redeploy"** nuevamente para confirmar
6. Espera 2-3 minutos mientras se redesplega

**Opción B - Desde Terminal**:

```bash
cd /home/user/webapp
git commit --allow-empty -m "chore: trigger Vercel redeploy para aplicar GA variables"
git push origin main
```

---

## 🧪 VERIFICACIÓN POST-DESPLIEGUE

### Test 1: Verificar en Páginas Públicas (5-10 minutos después del redeploy)

1. **Abre tu sitio**: https://focus-on-english.com (o tu URL de Vercel)
2. **Abre DevTools**:
   - Windows/Linux: `F12` o `Ctrl + Shift + I`
   - Mac: `Cmd + Option + I`
3. **Ve a la pestaña "Console"**
4. **Acepta las cookies de estadísticas** cuando aparezca el banner de Cookiebot
5. **Ejecuta en la consola**:
   ```javascript
   typeof gtag
   ```
6. **Resultado esperado**: `"function"` ✅

Si ves `"undefined"`, espera 5 minutos más y recarga la página (las variables tardan en propagarse).

---

### Test 2: Verificar en Google Analytics Real-Time

1. **Ve a**: https://analytics.google.com/
2. **Selecciona tu propiedad**: Focus English
3. **ID de medición**: G-6E0H0YK89W
4. **En el menú lateral**, click en **"Informes"**
5. **Click en "Tiempo real"** (Realtime)
6. **Abre tu sitio web** en otra pestaña: https://focus-on-english.com
7. **Navega por diferentes páginas** (homepage, cursos, blog)
8. **Deberías verte en el informe** con:
   - 1 usuario activo (tú)
   - Las páginas que estás visitando
   - Tu ubicación geográfica
   - Tu dispositivo

Si NO apareces, verifica:
- ✅ Las variables de entorno están configuradas en Vercel
- ✅ El sitio fue re-desplegado después de añadir las variables
- ✅ Aceptaste las cookies de estadísticas en el sitio
- ✅ No tienes bloqueadores de anuncios activos
- ✅ Estás en modo normal (no incógnito para la primera prueba)

---

### Test 3: Verificar Exclusión de Páginas Privadas

1. **Inicia sesión** en tu cuenta de Focus English
2. **Navega a una página privada**: `/dashboard` o `/curso-b2`
3. **Abre DevTools** (F12)
4. **Ve a la pestaña Console**
5. **Ejecuta**:
   ```javascript
   typeof gtag
   ```
6. **Resultado esperado**: `"undefined"` ✅

Esto confirma que Google Analytics **NO** se está cargando en páginas privadas, protegiendo la privacidad de los usuarios.

---

## 📊 Datos en Google Analytics

### ¿Cuándo veré datos?

- **Tiempo real**: Inmediato (apareces mientras navegas)
- **Informes estándar**: 24-48 horas de retraso
- **Audiencia completa**: 24-48 horas

### ¿Qué datos veré?

Una vez configurado correctamente, verás en Google Analytics:

✅ **Usuarios activos** (en tiempo real)  
✅ **Páginas visitadas** (solo públicas: /, /cursos, /blog, etc.)  
✅ **Fuentes de tráfico** (Google, directo, redes sociales)  
✅ **Ubicación geográfica** (ciudades, países)  
✅ **Dispositivos** (móvil, escritorio, tablet)  
✅ **Navegadores y sistemas operativos**  
✅ **Tiempo en página** y duración de sesión  

❌ **NO verás** (intencionalmente):
- Actividad en /dashboard
- Actividad en /curso-a1, /curso-a2, /curso-b1, /curso-b2, etc.
- Actividad en /leccion/*
- Actividad en /profile, /settings, /certificados

---

## 🛠️ Troubleshooting

### Problema 1: "typeof gtag" devuelve "undefined" en páginas públicas

**Posibles causas**:
1. Variables de entorno no configuradas en Vercel
2. Sitio no re-desplegado después de añadir variables
3. Cookies de estadísticas rechazadas
4. Bloqueador de anuncios activo

**Solución**:
1. Verifica que las variables están en Vercel
2. Re-deploya el sitio
3. Limpia cookies del sitio y vuelve a aceptar
4. Desactiva bloqueadores o prueba en modo incógnito
5. Espera 10-15 minutos después del redeploy

---

### Problema 2: No aparezco en Google Analytics Real-Time

**Posibles causas**:
1. Variables de entorno incorrectas
2. ID de medición equivocado
3. Dominio no verificado en GA
4. Bloqueador de anuncios

**Solución**:
1. Verifica que el ID sea: **G-6E0H0YK89W**
2. Verifica el dominio en GA: https://focus-on-english.com
3. Prueba sin bloqueadores de anuncios
4. Acepta las cookies de estadísticas
5. Espera 5 minutos y recarga

---

### Problema 3: Banner de Cookiebot no aparece

**Posibles causas**:
1. Variable NEXT_PUBLIC_COOKIEBOT_ID no configurada
2. Ya aceptaste/rechazaste cookies antes
3. Cookiebot no activo para el dominio

**Solución**:
1. Verifica la variable en Vercel: `474b1dce-7229-40d3-88c2-a2323b9a57f9`
2. Limpia cookies del sitio: DevTools → Application → Clear site data
3. Verifica en https://manage.cookiebot.com que el dominio está activo
4. Abre en modo incógnito

---

### Problema 4: Google Analytics dice "No hay datos recientes"

**Esto es NORMAL**:
- Google Analytics puede tardar **hasta 48 horas** en empezar a mostrar datos
- Los informes en tiempo real funcionan inmediatamente
- Los informes estándar tienen 24-48 horas de retraso
- Espera al menos 24 horas antes de preocuparte

**Verifica**:
1. Que apareces en "Tiempo real" cuando navegas por el sitio
2. Que las variables están configuradas correctamente
3. Que el sitio se re-desplegó después de añadir las variables

---

## 📱 Capturas de Pantalla de Referencia

### Cómo debe verse Vercel Environment Variables:

```
Environment Variables
─────────────────────────────────────────────────
Name                              Value               Environments
─────────────────────────────────────────────────────────────────
NEXT_PUBLIC_GA_MEASUREMENT_ID     G-6E0H0YK89W       Production, Preview, Development
NEXT_PUBLIC_COOKIEBOT_ID          474b1dce...        Production, Preview, Development
```

---

## ✅ Checklist Final

### Antes de Verificar:
- [ ] Variables de entorno añadidas en Vercel
- [ ] Sitio re-desplegado en Vercel
- [ ] Esperado 5-10 minutos después del redeploy
- [ ] Cookies del sitio limpias (o modo incógnito)

### Verificación:
- [ ] `typeof gtag` devuelve `"function"` en páginas públicas
- [ ] `typeof gtag` devuelve `"undefined"` en páginas privadas
- [ ] Aparezco en Google Analytics Tiempo Real
- [ ] Banner de Cookiebot aparece en primera visita
- [ ] Al aceptar cookies, GA se carga
- [ ] Al rechazar cookies, GA NO se carga

---

## 🎯 Resumen

### Variables a Configurar en Vercel:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-6E0H0YK89W
NEXT_PUBLIC_COOKIEBOT_ID=474b1dce-7229-40d3-88c2-a2323b9a57f9
```

### Pasos:
1. ✅ Ir a Vercel Dashboard
2. ✅ Settings → Environment Variables
3. ✅ Añadir ambas variables
4. ✅ Aplicar a: Production, Preview, Development
5. ✅ Save
6. ✅ Deployments → Redeploy
7. ✅ Esperar 5-10 minutos
8. ✅ Verificar en el sitio

---

## 📞 Soporte

Si después de seguir todos estos pasos sigues teniendo problemas:

1. **Verifica el estado de Vercel**: https://vercel-status.com
2. **Verifica el estado de Google Analytics**: https://www.google.com/appsstatus
3. **Revisa los logs de Vercel**: Deployments → tu deployment → Function Logs
4. **Contacta soporte de Vercel**: https://vercel.com/support

---

**Creado**: 15 de enero de 2026  
**Measurement ID**: G-6E0H0YK89W  
**Dominio**: https://focus-on-english.com  
**Estado**: ⚠️ Pendiente configuración en Vercel

---

*Una vez configuradas las variables y re-desplegado el sitio, Google Analytics empezará a recopilar datos automáticamente en todas las páginas públicas de tu sitio web.*
