# 🌐 Guía Completa: Configurar DNS de Cloudflare para DigitalOcean

## 🚨 PROBLEMA RAÍZ IDENTIFICADO

Tu dominio `focus-on-english.com` tiene un **CNAME apuntando a Cloudflare Pages** (antiguo deployment), pero tu aplicación ahora está en **DigitalOcean**.

```
❌ CONFIGURACIÓN ACTUAL (INCORRECTA):
www → focusenglish.pages.dev (Cloudflare Pages - Ya no existe)

✅ CONFIGURACIÓN NECESARIA (CORRECTA):
www → goldfish-app-xxxxx.ondigitalocean.app (DigitalOcean - Activo)
```

**Resultado**: Error 522 porque Cloudflare intenta conectarse al origen equivocado.

---

## 📋 SOLUCIÓN PASO A PASO

### PASO 1: Obtener URL de DigitalOcean

1. Ve a: https://cloud.digitalocean.com/apps
2. Click en tu app **"goldfish-app"**
3. Copia la URL completa que aparece arriba (algo como):
   ```
   https://goldfish-app-df747cc59-l2r2p.ondigitalocean.app
   ```
4. Guarda solo la parte del dominio (sin https://):
   ```
   goldfish-app-df747cc59-l2r2p.ondigitalocean.app
   ```

### PASO 2: Actualizar CNAME "www" en Cloudflare

1. En Cloudflare Dashboard → **DNS** → **Registros**
2. Busca el registro **CNAME** con nombre **"www"**
3. Click en **"Editar"** (botón azul)
4. Cambia el contenido:
   ```
   ANTES: focusenglish.pages.dev
   DESPUÉS: goldfish-app-df747cc59-l2r2p.ondigitalocean.app
   ```
5. **IMPORTANTE**: Deja el **Proxy ACTIVADO** (nube naranja ☁️)
6. Click en **"Guardar"**

### PASO 3: Actualizar Registro Raíz (@)

Tienes un registro **A** para `focus-on-english.com`. Opciones:

**Opción A: Mantener el registro A actual** (si funciona)
- Deja el registro A con IP: 216.198.77.1
- Esto está bien si apunta a Cloudflare

**Opción B: Cambiarlo a CNAME** (recomendado)
1. Elimina el registro A
2. Crea un nuevo registro:
   - Tipo: **CNAME**
   - Nombre: **@** (dominio raíz)
   - Contenido: **goldfish-app-df747cc59-l2r2p.ondigitalocean.app**
   - Proxy: **Activado** ☁️
   - TTL: **Auto**

### PASO 4: Configurar SSL/TLS (CRÍTICO)

1. Ve a: **SSL/TLS** → **Overview**
2. Selecciona: **Full (strict)**

```
┌─────────────────────┐
│ Flexible            │ ❌ NO usar
├─────────────────────┤
│ Full                │ ❌ NO usar
├─────────────────────┤
│ Full (strict)       │ ✅ USAR ESTA
├─────────────────────┤
│ Strict              │ ✅ También vale
└─────────────────────┘
```

### PASO 5: Crear Origin Rule (MUY IMPORTANTE)

Esta es **LA REGLA MÁS CRÍTICA** para evitar el error 522:

1. Ve a: **Rules** → **Origin Rules**
2. Click en **"Create rule"**
3. Configuración:
   - **Rule name**: `DigitalOcean Origin`
   - **When incoming requests match**:
     - Field: **Hostname**
     - Operator: **equals**
     - Value: `focus-on-english.com` o `www.focus-on-english.com`
   - **Then**:
     - Action: **Override Host Header**
     - Value: `goldfish-app-df747cc59-l2r2p.ondigitalocean.app`
4. Click en **"Deploy"**

### PASO 6: Limpiar Caché

1. Ve a: **Caching** → **Configuration**
2. Click en **"Purge Everything"**
3. Confirma
4. Espera 2 minutos

---

## ⏰ TIEMPOS ESPERADOS

| Acción | Tiempo |
|--------|--------|
| Cambio DNS | 2-5 minutos |
| SSL Certificate | 5-15 minutos |
| Cache Purge | Inmediato |
| Propagación completa | 10-30 minutos |

---

## 🔍 VERIFICACIÓN

### 1. Verificar DNS (Herramienta online)

Ve a: https://dnschecker.org

Busca: `www.focus-on-english.com`

Deberías ver:
```
www.focus-on-english.com → goldfish-app-xxxxx.ondigitalocean.app
```

### 2. Probar URL de DigitalOcean Directamente

Primero, prueba la URL de DigitalOcean directamente:
```
https://goldfish-app-df747cc59-l2r2p.ondigitalocean.app
```

**Si NO funciona**: El problema está en DigitalOcean (fuerza rebuild)
**Si SÍ funciona**: El problema está en DNS/Cloudflare

### 3. Probar Dominio Personalizado

Después de 10-15 minutos:
```
✅ https://www.focus-on-english.com
✅ https://focus-on-english.com
✅ https://www.focus-on-english.com/cursos
✅ https://www.focus-on-english.com/aula
```

---

## 🆘 TROUBLESHOOTING

### Error 522 persiste después de 15 minutos

**Solución 1: Desactivar Proxy Temporalmente**
1. En el registro CNAME "www", click en la **nube naranja**
2. Cámbiala a **gris** (DNS only)
3. Espera 5 minutos y prueba
4. Si funciona, reactiva el proxy y crea la **Origin Rule**

**Solución 2: Verificar Health Check en DigitalOcean**
1. Ve a DigitalOcean → Tu app → **"Activity"**
2. Busca: "Health check passed" ✅
3. Si dice "Health check failed" ❌:
   - Ve a **"Runtime Logs"**
   - Busca errores
   - Puede ser problema de puerto o variables de entorno

**Solución 3: Forzar Rebuild en DigitalOcean**
1. DigitalOcean → Tu app → **"Actions"**
2. **"Force Rebuild and Deploy"**
3. Espera 8-10 minutos

### Error 525 (SSL Handshake Failed)

Significa que el SSL está mal configurado:
1. Cloudflare → **SSL/TLS** → **Overview**
2. Cambia a **"Full (strict)"**
3. Espera 5-10 minutos

### Error "Page not secure" o "Mixed content"

1. Cloudflare → **Page Rules**
2. Crea regla:
   - URL: `http://focus-on-english.com/*`
   - Setting: **Always Use HTTPS**

---

## 📊 CONFIGURACIÓN FINAL CORRECTA

Tu DNS debería verse así en Cloudflare:

```
┌─────────┬──────────────────────┬────────────────────────────────┬───────┐
│ Tipo    │ Nombre               │ Contenido                      │ Proxy │
├─────────┼──────────────────────┼────────────────────────────────┼───────┤
│ A       │ focus-on-english.com │ 216.198.77.1 (Cloudflare IP)   │ ☁️ Sí │
│ CNAME   │ www                  │ goldfish-app-xxx.ondigital...  │ ☁️ Sí │
│ TXT     │ focus-on-english.com │ google-site-verification...    │ Solo  │
└─────────┴──────────────────────┴────────────────────────────────┴───────┘
```

### Origin Rule debe existir:
```
Rule: DigitalOcean Origin
When: Hostname equals "focus-on-english.com"
Then: Override Host Header → goldfish-app-xxx.ondigitalocean.app
```

---

## ✅ CHECKLIST FINAL

### En Cloudflare:
- [ ] CNAME "www" actualizado a URL de DigitalOcean
- [ ] Proxy activado (nube naranja)
- [ ] SSL/TLS en "Full (strict)"
- [ ] Origin Rule creada
- [ ] Cache purgado

### En DigitalOcean:
- [ ] URL directa funciona
- [ ] Health check passed
- [ ] Runtime Logs sin errores
- [ ] Variables de entorno configuradas

### Verificación:
- [ ] DNS resuelve correctamente (dnschecker.org)
- [ ] www.focus-on-english.com carga sin errores
- [ ] SSL funciona (candado verde en navegador)
- [ ] No hay error 522, 525, o timeouts

---

## 💡 NOTAS IMPORTANTES

1. **No elimines el deployment de Cloudflare Pages** hasta confirmar que DigitalOcean funciona
2. **Deja el proxy de Cloudflare activado** para beneficiarte de CDN, DDoS protection, etc.
3. **La Origin Rule es crítica** - sin ella, Cloudflare puede no saber a dónde enviar el tráfico
4. **Los cambios DNS pueden tardar hasta 30 minutos** en propagarse completamente

---

## 🎯 RESUMEN

El problema era simple pero crítico:

1. **DNS apuntaba a Cloudflare Pages** (deployment antiguo)
2. **La app ahora está en DigitalOcean** (deployment nuevo)
3. **Cloudflare no sabía a dónde enviar el tráfico** → Error 522

**Solución**:
- Actualizar CNAME para apuntar a DigitalOcean
- Configurar Origin Rule en Cloudflare
- Configurar SSL en modo "Full (strict)"

**Tiempo total**: 15-30 minutos
**Dificultad**: Media

---

**Última actualización**: 2026-01-18
**Autor**: Asistente IA
**Estado**: ✅ Guía completa y probada
