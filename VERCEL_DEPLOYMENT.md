# 🚀 Guía de Despliegue en Vercel

## 📋 Paso 1: Crear Nuevo Proyecto en Vercel

1. **Ve a Vercel:**
   ```
   https://vercel.com/new
   ```

2. **Importa el repositorio:**
   - Selecciona "Import Git Repository"
   - Busca: `u7934364978-maker/focusonenglish`
   - Haz clic en "Import"

---

## ⚙️ Paso 2: Configuración del Proyecto

### Framework Preset
- **Framework:** Next.js (detectado automáticamente)
- **Root Directory:** `./` (por defecto)

### Build & Development Settings
- **Build Command:** `npm run build` (por defecto)
- **Output Directory:** `.next` (por defecto)
- **Install Command:** `npm install` (por defecto)

---

## 🔐 Paso 3: Variables de Entorno (CRÍTICO)

**ANTES de hacer Deploy**, añade estas variables en "Environment Variables":

### Variable 1: HUBSPOT_ACCESS_TOKEN
```
Name: HUBSPOT_ACCESS_TOKEN
Value: [TU_TOKEN_AQUI]
Environment: ✅ Production ✅ Preview ✅ Development
```

**¿Dónde obtener el token?**
```
https://app-eu1.hubspot.com/private-apps/147592708/28595776
```
- Pestaña "Auth" → "Show token" → Copiar

### Variable 2: HUBSPOT_PORTAL_ID
```
Name: HUBSPOT_PORTAL_ID
Value: 147592708
Environment: ✅ Production ✅ Preview ✅ Development
```

### Variable 3: HUBSPOT_API_URL
```
Name: HUBSPOT_API_URL
Value: https://api.hubapi.com
Environment: ✅ Production ✅ Preview ✅ Development
```

### Variable 4: NEXT_PUBLIC_SITE_URL
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://www.focus-on-english.com
Environment: ✅ Production ✅ Preview ✅ Development
```

---

## 🚀 Paso 4: Deploy

1. Después de configurar las variables, haz clic en **"Deploy"**

2. Espera 2-3 minutos mientras Vercel:
   - Clona el repositorio
   - Instala dependencias
   - Construye el proyecto
   - Despliega a producción

3. Una vez completado, verás: **"Congratulations! Your project has been deployed"** 🎉

4. Obtendrás una URL temporal como:
   ```
   https://focusonenglish-xxx.vercel.app
   ```

5. **PRUEBA esta URL primero** para verificar que todo funciona:
   - ✅ Home con bandera 🇪🇸
   - ✅ Precios en EUR
   - ✅ Formulario de signup
   - ✅ Blog funcionando

---

## 🌐 Paso 5: Configurar Dominios

### En Vercel:

1. **Ve a Settings → Domains:**
   ```
   https://vercel.com/[tu-usuario]/focusonenglish/settings/domains
   ```

2. **Añade dominio con www:**
   - Haz clic en "Add"
   - Escribe: `www.focus-on-english.com`
   - Haz clic en "Add"

3. **Añade dominio raíz:**
   - Haz clic en "Add"
   - Escribe: `focus-on-english.com`
   - Vercel preguntará si quieres redirigir
   - Selecciona: "Yes, redirect to www.focus-on-english.com"

4. **Vercel te mostrará los registros DNS necesarios**

---

## ☁️ Paso 6: Configurar DNS en Cloudflare

1. **Ve a Cloudflare Dashboard:**
   ```
   https://dash.cloudflare.com/
   ```

2. **Selecciona tu dominio:** `focus-on-english.com`

3. **Ve a DNS → Records**

4. **Añade registro CNAME para www:**
   ```
   Type: CNAME
   Name: www
   Target: cname.vercel-dns.com
   Proxy status: ❌ DNS only (nube GRIS)
   TTL: Auto
   ```

5. **Añade registro A para dominio raíz:**
   ```
   Type: A
   Name: @
   IPv4: 76.76.21.21
   Proxy status: ❌ DNS only (nube GRIS)
   TTL: Auto
   ```

6. **Guarda los cambios**

⚠️ **MUY IMPORTANTE:** La nube DEBE estar GRIS (DNS only), NO naranja, para que Vercel pueda emitir el certificado SSL.

---

## ⏳ Paso 7: Esperar Verificación

1. **Vuelve a Vercel → Settings → Domains**

2. **Espera 5-20 minutos** para que:
   - DNS se propague
   - Vercel verifique los registros
   - Se emita el certificado SSL

3. **Cuando esté listo verás:**
   - ✅ `www.focus-on-english.com` - Valid Configuration
   - ✅ `focus-on-english.com` - Valid Configuration
   - 🔒 Certificado SSL activo

---

## ✅ Paso 8: Verificar Funcionamiento

### Prueba tu sitio:

1. **Home:**
   ```
   https://www.focus-on-english.com
   ```
   - Debe mostrar bandera 🇪🇸
   - Texto "Cursos de inglés para España"
   - HTTPS funcionando

2. **Formulario de Signup:**
   ```
   https://www.focus-on-english.com/signup
   ```
   - Completa con datos de prueba
   - Enviar formulario
   - Debe mostrar mensaje de éxito

3. **Verifica en HubSpot:**
   ```
   https://app-eu1.hubspot.com/contacts/147592708/contacts
   ```
   - Busca el email de prueba
   - Verifica que el contacto se creó correctamente

---

## 🎯 Checklist Final

- [ ] Proyecto creado en Vercel
- [ ] 4 variables de entorno configuradas
- [ ] Build exitoso
- [ ] URL temporal funciona correctamente
- [ ] Dominios añadidos en Vercel
- [ ] DNS configurado en Cloudflare
- [ ] Proxy de Cloudflare DESACTIVADO (gris)
- [ ] Certificado SSL activo
- [ ] HTTPS funcionando
- [ ] Formulario de signup funcional
- [ ] HubSpot recibiendo contactos

---

## 🆘 Solución de Problemas

### "Invalid Configuration" en dominios
- Espera 10-20 minutos más
- Verifica que el DNS esté correcto en Cloudflare
- Asegúrate de que el proxy esté DESACTIVADO (gris)

### Error en formulario de signup
- Verifica variables de entorno en Vercel
- Revisa que `HUBSPOT_ACCESS_TOKEN` esté configurado
- Comprueba los logs en Vercel

### Build failure
- Revisa los logs de build en Vercel
- Verifica que todas las dependencias estén en package.json
- Comprueba que el repositorio está actualizado

---

## 📚 Recursos

- **Repositorio:** https://github.com/u7934364978-maker/focusonenglish
- **HubSpot Private App:** https://app-eu1.hubspot.com/private-apps/147592708/28595776
- **Vercel Docs:** https://vercel.com/docs
- **Cloudflare Docs:** https://developers.cloudflare.com/dns/

---

**¡Listo! Tu sitio debe estar funcionando perfectamente en producción.** 🎉

Si tienes algún problema, revisa el archivo `DEPLOYMENT_SUMMARY.md` para más detalles.
