# 🔑 INSTRUCCIONES PARA CONFIGURAR TUS KEYS DE HUBSPOT

## ⚠️ IMPORTANTE: Lee esto primero

Ya has aplicado todas las keys en HubSpot según mencionaste. Ahora solo necesitas **copiar tu Access Token** y pegarlo en el archivo `.env.local` del proyecto.

## 📋 Checklist de lo que YA TIENES configurado

Según tu mensaje, ya tienes:
- ✅ Private App creada en HubSpot
- ✅ Portal ID: `147592708`
- ✅ Private App ID: `28595776`
- ✅ URL de configuración: https://app-eu1.hubspot.com/private-apps/147592708/28595776
- ✅ Keys aplicadas (Access Token generado)

## 🚀 LO QUE NECESITAS HACER AHORA (Solo 2 pasos)

### Paso 1: Copiar tu Access Token de HubSpot

1. **Ve a tu Private App:**
   ```
   https://app-eu1.hubspot.com/private-apps/147592708/28595776/edit?tab=webhooks
   ```
   (Esta es la URL que compartiste en la screenshot)

2. **Ir a la pestaña "Auth":**
   - Haz clic en la pestaña "Auth" (junto a "Webhooks")

3. **Copiar el Access Token:**
   - Verás una sección llamada "Access token"
   - Haz clic en "Show token"
   - Copia TODO el token (algo como: `pat-eu1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### Paso 2: Pegar el token en tu proyecto

1. **Editar el archivo `.env.local`:**
   
   El archivo ya existe en `/home/user/webapp/.env.local`
   
   Actualmente contiene esto:
   ```env
   HUBSPOT_ACCESS_TOKEN=your_hubspot_access_token_here
   HUBSPOT_PORTAL_ID=147592708
   HUBSPOT_API_URL=https://api.hubapi.com
   ```

2. **Reemplazar `your_hubspot_access_token_here` con tu token real:**
   ```env
   HUBSPOT_ACCESS_TOKEN=pat-eu1-tu-token-real-aqui
   HUBSPOT_PORTAL_ID=147592708
   HUBSPOT_API_URL=https://api.hubapi.com
   ```

3. **Guardar el archivo**

## ✅ Eso es todo!

Con esos 2 pasos, la integración estará completamente funcional.

## 🧪 Verificar que funciona

```bash
# 1. Iniciar el servidor
npm run dev

# 2. Ir a http://localhost:3000/signup

# 3. Completar el formulario y enviar

# 4. Deberías ver el mensaje de éxito

# 5. Ir a HubSpot Contacts y verificar que el registro se creó:
# https://app-eu1.hubspot.com/contacts/147592708/contacts
```

## 📊 Lo que ya está configurado en el código

El código ya está listo y funcional:

1. ✅ **API Route:** `/app/api/signup/route.ts`
   - Envía datos a HubSpot CRM
   - Valida campos
   - Maneja errores

2. ✅ **Formulario:** `/app/signup/page.tsx`
   - Manejo de estado con React
   - Feedback visual al usuario
   - Validación de campos

3. ✅ **Variables de entorno:** `.env.local`
   - Template ya creado
   - Solo falta tu Access Token

## 🔧 Si necesitas crear propiedades personalizadas en HubSpot

(Probablemente ya las creaste, pero por si acaso):

### En HubSpot > Settings > Properties > Contact Properties:

Crear estas 3 propiedades si no existen:

1. **Course Interest**
   - Label: `Course Interest`
   - Internal name: `course_interest`
   - Type: Dropdown select
   - Options: trabajo, viajes, examenes

2. **Current Level**
   - Label: `Current Level`
   - Internal name: `current_level`
   - Type: Dropdown select
   - Options: unknown, a1, a2, b1, b2, c1, c2

3. **Message**
   - Label: `Message`
   - Internal name: `message`
   - Type: Multi-line text

## 🔍 Verificar permisos de tu Private App

En la configuración de tu Private App, verifica que tenga estos permisos (Scopes):

- ✅ `crm.objects.contacts.read`
- ✅ `crm.objects.contacts.write`

Si no los tiene, añádelos y guarda.

## 📝 Resumen

**Lo que YA ESTÁ HECHO:**
- ✅ Código implementado y commiteado
- ✅ Pull Request creado: https://github.com/u7934364978-maker/focusonenglish/pull/2
- ✅ Documentación completa
- ✅ Archivo `.env.local` creado con template

**Lo que NECESITAS HACER:**
- 🔑 Copiar tu Access Token de HubSpot
- 📝 Pegarlo en `.env.local` (reemplazar `your_hubspot_access_token_here`)
- ✅ (Opcional) Crear las 3 propiedades personalizadas en HubSpot si no existen

**Tiempo estimado:** 5 minutos

## 🔗 Enlaces útiles

- **Tu Private App:** https://app-eu1.hubspot.com/private-apps/147592708/28595776
- **Contacts en HubSpot:** https://app-eu1.hubspot.com/contacts/147592708/contacts
- **Properties Config:** https://app-eu1.hubspot.com/contacts/147592708/properties
- **Pull Request:** https://github.com/u7934364978-maker/focusonenglish/pull/2

## 📞 Si tienes algún problema

Revisa estos archivos para más detalles:
- `QUICK_START.md` - Guía rápida de configuración
- `HUBSPOT_SETUP.md` - Documentación completa
- `HUBSPOT_INTEGRATION_SUMMARY.md` - Resumen de implementación

---

**¡Ya casi está!** Solo copia y pega tu token y la integración estará lista 🚀
