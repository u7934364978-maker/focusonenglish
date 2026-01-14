# Integración HubSpot CRM - Focus English

## 📋 Resumen

Este proyecto ahora incluye una integración completa con HubSpot CRM para gestionar los registros de usuarios desde el formulario de signup.

## 🔧 Configuración de HubSpot

### 1. Obtener el Access Token de HubSpot

1. Ve a tu cuenta de HubSpot: https://app-eu1.hubspot.com/private-apps/147592708/28595776
2. En la sección **Private Apps**, selecciona tu aplicación
3. Copia el **Access Token**

### 2. Configurar Variables de Entorno

Edita el archivo `.env.local` en la raíz del proyecto y añade tu Access Token:

```env
# HubSpot Private App Configuration
HUBSPOT_ACCESS_TOKEN=tu_token_de_acceso_aqui

# HubSpot Portal ID
HUBSPOT_PORTAL_ID=147592708

# HubSpot API Base URL (EU1 region)
HUBSPOT_API_URL=https://api.hubapi.com
```

### 3. Crear Propiedades Personalizadas en HubSpot

Para que la integración funcione correctamente, necesitas crear las siguientes propiedades personalizadas en HubSpot CRM:

1. Ve a **Settings** > **Properties** > **Contact Properties**
2. Crea las siguientes propiedades:

| Nombre de Propiedad | Internal Name | Tipo | Descripción |
|---------------------|---------------|------|-------------|
| Course Interest | `course_interest` | Dropdown | Curso de interés del contacto |
| Current Level | `current_level` | Dropdown | Nivel actual de inglés |
| Message | `message` | Multi-line text | Mensaje del contacto |

**Valores para `course_interest`:**
- trabajo
- viajes
- examenes

**Valores para `current_level`:**
- unknown
- a1
- a2
- b1
- b2
- c1
- c2

## 📁 Estructura de Archivos

```
webapp/
├── .env.local                    # Variables de entorno (NO SUBIR A GIT)
├── app/
│   ├── api/
│   │   └── signup/
│   │       └── route.ts          # API endpoint para HubSpot
│   └── signup/
│       ├── page.tsx              # Formulario de signup actualizado
│       └── metadata.ts           # Metadata SEO
├── .gitignore                    # .env.local debe estar aquí
└── HUBSPOT_SETUP.md             # Este archivo
```

## 🚀 Cómo Funciona

### Flujo de Datos

1. **Usuario completa el formulario** en `/signup`
2. **Frontend envía datos** a la API route `/api/signup`
3. **API route valida datos** y los procesa
4. **Crea contacto en HubSpot** usando el API v3
5. **Responde al usuario** con confirmación o error

### Campos del Formulario

| Campo | Requerido | Tipo | Descripción |
|-------|-----------|------|-------------|
| Nombre Completo | ✅ | text | Se divide en firstName y lastName |
| Email | ✅ | email | Email del contacto |
| Teléfono | ❌ | tel | Teléfono opcional |
| Curso de Interés | ✅ | select | trabajo, viajes o examenes |
| Nivel Actual | ❌ | select | a1 a c2, o vacío |
| Mensaje | ❌ | textarea | Comentarios adicionales |

## 🔒 Seguridad

- ✅ El Access Token está en `.env.local` (nunca se sube a git)
- ✅ La API route valida todos los datos antes de enviarlos
- ✅ El formulario incluye validación del lado del cliente y servidor
- ✅ Los errores no exponen información sensible al usuario

## 🧪 Probar la Integración

### 1. Iniciar el servidor de desarrollo

```bash
npm run dev
```

### 2. Ir a la página de signup

Navega a: http://localhost:3000/signup

### 3. Completar el formulario

Rellena todos los campos requeridos y envía el formulario.

### 4. Verificar en HubSpot

1. Ve a tu panel de HubSpot: https://app-eu1.hubspot.com
2. Navega a **Contacts**
3. Busca el nuevo contacto usando el email que ingresaste
4. Verifica que todas las propiedades se guardaron correctamente

## 📊 Propiedades Adicionales Automáticas

La integración también establece automáticamente:

- `lifecyclestage`: "lead"
- `lead_source`: "Website - Signup Form"
- `hs_lead_status`: "NEW"

## 🐛 Solución de Problemas

### Error: "HubSpot Access Token no configurado"
- Verifica que `.env.local` existe y contiene `HUBSPOT_ACCESS_TOKEN`
- Reinicia el servidor de desarrollo después de crear/editar `.env.local`

### Error: "Property X does not exist"
- Verifica que creaste todas las propiedades personalizadas en HubSpot
- Asegúrate de que los nombres internos coinciden exactamente (case-sensitive)

### Error: "Authentication failed"
- Verifica que el Access Token es correcto
- Asegúrate de que la aplicación privada tiene los permisos necesarios:
  - `crm.objects.contacts.write`
  - `crm.objects.contacts.read`

### El formulario no envía
- Abre la consola del navegador (F12) para ver errores
- Verifica la conexión a internet
- Revisa los logs del servidor en la terminal

## 📝 Webhooks (Opcional)

Si configuraste webhooks en HubSpot, puedes:

1. Crear un endpoint en `/app/api/webhooks/hubspot/route.ts`
2. Configurar la URL en HubSpot: `https://tu-dominio.com/api/webhooks/hubspot`
3. Manejar eventos como:
   - Contacto creado
   - Contacto actualizado
   - Deal creado

## 🔄 Próximos Pasos

1. ✅ Configurar propiedades personalizadas en HubSpot
2. ✅ Añadir Access Token a `.env.local`
3. ✅ Probar el formulario
4. ⏳ Configurar workflows en HubSpot para emails automáticos
5. ⏳ Añadir tracking de conversiones
6. ⏳ Integrar con otros servicios (SendGrid, Stripe, etc.)

## 📞 Soporte

Si tienes problemas con la integración:

1. Revisa la documentación oficial de HubSpot: https://developers.hubspot.com/docs/api/crm/contacts
2. Verifica los logs en la consola del servidor
3. Contacta al equipo de desarrollo

---

**Última actualización:** 2026-01-14
**Versión:** 1.0.0
