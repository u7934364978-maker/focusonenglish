# 🌐 Configuración DNS en Cloudflare para DigitalOcean

## ❌ PROBLEMA ACTUAL

Tu DNS está apuntando a **Cloudflare Pages** (`focusenglish.pages.dev`) cuando debería apuntar a **DigitalOcean App Platform**.

## 🎯 URL DE DIGITALOCEAN

Primero necesitas obtener tu URL exacta de DigitalOcean:

1. Ve a: https://cloud.digitalocean.com/apps
2. Click en tu app "goldfish-app"
3. Copia la URL que aparece, será algo como:
   ```
   https://goldfish-app-xxxxx.ondigitalocean.app
   ```
   (El "xxxxx" será un código único)

## 📝 CAMBIOS A REALIZAR EN CLOUDFLARE

### PASO 1: Editar el registro CNAME "www"

**Ubicación**: Cloudflare Dashboard → Tu dominio → DNS → Registros

1. Busca el registro:
   ```
   Tipo: CNAME
   Nombre: www
   Contenido: focusenglish.pages.dev  ← INCORRECTO
   ```

2. Click en **"Editar"**

3. Cambia el contenido a:
   ```
   Tipo: CNAME
   Nombre: www
   Contenido: goldfish-app-xxxxx.ondigitalocean.app
   Proxy: ✅ Activado (nube naranja)
   TTL: Auto
   ```

4. Click en **"Guardar"**

### PASO 2: Editar o crear registro para dominio raíz (@)

Tienes dos opciones:

#### OPCIÓN A: Cambiar el registro A existente

1. Busca el registro:
   ```
   Tipo: A
   Nombre: focus-on-english.com (o @)
   Contenido: 216.198.79.1  ← IP de Cloudflare Pages
   ```

2. Click en **"Editar"**

3. **OPCIÓN 1**: Mantener como A (necesitas IP de DigitalOcean)
   ```
   Tipo: A
   Nombre: @
   Contenido: [IP de DigitalOcean]
   Proxy: ✅ Activado
   TTL: Auto
   ```

   **OPCIÓN 2**: Cambiar a CNAME FLATTENING
   ```
   Tipo: CNAME
   Nombre: @
   Contenido: goldfish-app-xxxxx.ondigitalocean.app
   Proxy: ✅ Activado (Cloudflare lo convertirá a A automáticamente)
   TTL: Auto
   ```

4. Click en **"Guardar"**

### PASO 3: Configurar SSL/TLS en Cloudflare

**MUY IMPORTANTE** para evitar errores 522:

1. Ve a: **SSL/TLS** → **Overview**

2. Selecciona: **"Full (strict)"**
   ```
   Off                    ❌
   Flexible               ❌
   Full                   ⚠️
   Full (strict)          ✅ ← SELECCIONA ESTO
   ```

3. Click en **"Save"**

### PASO 4: (Opcional) Crear regla de Origin

Esto asegura que Cloudflare envíe el Host Header correcto:

1. Ve a: **Rules** → **Origin Rules**

2. Click en **"Create rule"**

3. Configura:
   ```
   Rule name: DigitalOcean Origin
   
   When incoming requests match:
   - Field: Hostname
   - Operator: equals
   - Value: focus-on-english.com
   
   Then:
   - Override Host Header
   - Value: goldfish-app-xxxxx.ondigitalocean.app
   ```

4. Click en **"Deploy"**

### PASO 5: Limpiar caché de Cloudflare

1. Ve a: **Caching** → **Configuration**

2. Click en **"Purge Everything"**

3. Confirma

## ⏰ TIEMPOS DE PROPAGACIÓN

| Acción | Tiempo |
|--------|--------|
| Cambios DNS guardados | Inmediato |
| Propagación DNS global | 5-60 minutos |
| SSL/TLS activo | 5-10 minutos |
| Caché limpiada | Inmediato |

## 🔍 VERIFICACIÓN

### 1. Verificar DNS con herramientas online

```bash
# Usa estas herramientas:
https://dnschecker.org/
https://www.whatsmydns.net/

# Busca:
focus-on-english.com
www.focus-on-english.com

# Deberían resolver a:
goldfish-app-xxxxx.ondigitalocean.app (CNAME)
O la IP de DigitalOcean (A record)
```

### 2. Verificar SSL

```bash
# En tu navegador:
https://www.ssllabs.com/ssltest/

# URL a analizar:
https://www.focus-on-english.com

# Resultado esperado:
Grade A o B (sin errores)
```

### 3. Probar las URLs

Después de 5-10 minutos:

```
✅ https://www.focus-on-english.com/
✅ https://focus-on-english.com/
✅ https://www.focus-on-english.com/cursos
✅ https://www.focus-on-english.com/aula
```

## 🚨 PROBLEMAS COMUNES

### Error: "Too many redirects"

**Causa**: SSL/TLS mal configurado en Cloudflare

**Solución**:
1. Cloudflare → SSL/TLS → Overview
2. Cambia a "Full (strict)"
3. Espera 5 minutos

### Error: "DNS_PROBE_FINISHED_NXDOMAIN"

**Causa**: DNS no propagado o mal configurado

**Solución**:
1. Verifica que guardaste los cambios DNS
2. Espera 10-30 minutos
3. Limpia caché DNS local:
   ```bash
   # Windows:
   ipconfig /flushdns
   
   # Mac:
   sudo dscacheutil -flushcache
   
   # Linux:
   sudo systemd-resolve --flush-caches
   ```

### Error 522: "Connection timed out"

**Causa**: DigitalOcean no responde o SSL mal configurado

**Solución**:
1. Verifica que DigitalOcean app esté "Healthy"
2. Cloudflare SSL/TLS = "Full (strict)"
3. Espera el redeploy de DigitalOcean (si acabas de hacer push)

### Error 525: "SSL handshake failed"

**Causa**: Certificado SSL no válido

**Solución**:
1. En DigitalOcean → Settings → Domains
2. Verifica que tu dominio esté añadido
3. DigitalOcean generará SSL automáticamente
4. Espera 10-15 minutos

## 📋 RESUMEN DE CONFIGURACIÓN CORRECTA

```yaml
# DNS Records en Cloudflare:
Tipo: CNAME
Nombre: www
Contenido: goldfish-app-xxxxx.ondigitalocean.app
Proxy: ✅ Activado
TTL: Auto

Tipo: CNAME (o A)
Nombre: @
Contenido: goldfish-app-xxxxx.ondigitalocean.app
Proxy: ✅ Activado
TTL: Auto

# SSL/TLS:
Mode: Full (strict)

# Origin Rules (opcional):
Host Header Override: goldfish-app-xxxxx.ondigitalocean.app
```

## 🎯 CHECKLIST

- [ ] Obtener URL exacta de DigitalOcean
- [ ] Editar CNAME "www" en Cloudflare
- [ ] Editar registro raíz "@" en Cloudflare
- [ ] Configurar SSL/TLS en "Full (strict)"
- [ ] (Opcional) Crear Origin Rule
- [ ] Limpiar caché de Cloudflare
- [ ] Esperar 10-30 minutos propagación
- [ ] Probar URLs en navegador
- [ ] Verificar que no hay error 522

## 💡 CONSEJO PRO

Mientras los DNS se propagan, puedes probar directamente la URL de DigitalOcean:
```
https://goldfish-app-xxxxx.ondigitalocean.app/
```

Si esta URL funciona, el problema es solo DNS y se resolverá automáticamente.

---

**Última actualización**: 2026-01-18
**Tiempo estimado**: 15-30 minutos (incluyendo propagación)
