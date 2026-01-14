# 🚀 Guía Rápida de Configuración - HubSpot CRM

## ⏱️ Tiempo estimado: 10 minutos

### Paso 1: Obtener Access Token (2 minutos)

1. **Ir a tu Private App en HubSpot:**
   ```
   https://app-eu1.hubspot.com/private-apps/147592708/28595776
   ```

2. **Copiar el Access Token**
   - En la pestaña "Auth", encontrarás tu token
   - Haz clic en "Show token" y cópialo

3. **Crear archivo `.env.local`**
   ```bash
   # En la raíz del proyecto
   touch .env.local
   ```

4. **Pegar el token**
   ```env
   HUBSPOT_ACCESS_TOKEN=tu_token_aqui_pegado
   HUBSPOT_PORTAL_ID=147592708
   HUBSPOT_API_URL=https://api.hubapi.com
   ```

### Paso 2: Crear Propiedades en HubSpot (5 minutos)

1. **Ir a Settings > Properties > Contact Properties**
   ```
   https://app-eu1.hubspot.com/contacts/147592708/properties
   ```

2. **Crear "Course Interest"**
   - Clic en "Create property"
   - Label: `Course Interest`
   - Internal name: `course_interest`
   - Field type: `Dropdown select`
   - Options (añadir 3):
     * `trabajo` - Inglés para Trabajar
     * `viajes` - Inglés para Viajar
     * `examenes` - Preparar Exámenes
   - Clic en "Create"

3. **Crear "Current Level"**
   - Clic en "Create property"
   - Label: `Current Level`
   - Internal name: `current_level`
   - Field type: `Dropdown select`
   - Options (añadir 7):
     * `unknown` - No lo sé
     * `a1` - A1 - Principiante
     * `a2` - A2 - Elemental
     * `b1` - B1 - Intermedio
     * `b2` - B2 - Intermedio Alto
     * `c1` - C1 - Avanzado
     * `c2` - C2 - Maestría
   - Clic en "Create"

4. **Crear "Message"**
   - Clic en "Create property"
   - Label: `Message`
   - Internal name: `message`
   - Field type: `Multi-line text`
   - Clic en "Create"

### Paso 3: Verificar Permisos (1 minuto)

1. **En tu Private App, ir a "Scopes"**
   
2. **Verificar que estén habilitados:**
   - ✅ `crm.objects.contacts.read`
   - ✅ `crm.objects.contacts.write`

3. **Si faltan, habilitarlos y guardar**

### Paso 4: Probar la Integración (2 minutos)

1. **Iniciar el servidor:**
   ```bash
   npm run dev
   ```

2. **Ir a la página de signup:**
   ```
   http://localhost:3000/signup
   ```

3. **Completar el formulario con datos de prueba:**
   - Nombre: Juan Pérez Test
   - Email: test@example.com
   - Curso: Inglés para Trabajar
   - Nivel: B2

4. **Enviar el formulario**
   - Deberías ver: ✅ "¡Gracias por tu inscripción! Te contactaremos pronto."

5. **Verificar en HubSpot:**
   - Ir a Contacts: https://app-eu1.hubspot.com/contacts/147592708/contacts
   - Buscar: test@example.com
   - Verificar que aparece con todas las propiedades

## ✅ ¡Listo!

Si todo funciona correctamente:
- ✅ El contacto aparece en HubSpot
- ✅ Todas las propiedades están completas
- ✅ `Lead Source` muestra "Website - Signup Form"
- ✅ El formulario se resetea después del envío

## 🐛 Si algo no funciona:

### Error: "HubSpot Access Token no configurado"
```bash
# Verificar que el archivo existe
ls -la .env.local

# Debe contener:
HUBSPOT_ACCESS_TOKEN=pat-eu1-xxxx-xxxx-xxxx

# Reiniciar el servidor
# Ctrl+C y luego: npm run dev
```

### Error: "Property does not exist"
```
Verifica que creaste las 3 propiedades:
1. course_interest (Dropdown)
2. current_level (Dropdown)
3. message (Multi-line text)

Los nombres deben ser EXACTOS (case-sensitive)
```

### Error: "Authentication failed"
```
1. Verifica que copiaste el token completo
2. El token debe empezar con: pat-eu1-
3. Verifica los permisos (Scopes) de la Private App
```

## 📞 Soporte

- **Documentación Completa:** `HUBSPOT_SETUP.md`
- **Resumen de Implementación:** `HUBSPOT_INTEGRATION_SUMMARY.md`
- **HubSpot Docs:** https://developers.hubspot.com/docs/api/crm/contacts

## 🎯 Próximos Pasos

Una vez que todo funcione:

1. **Configurar Workflows en HubSpot**
   - Emails automáticos de bienvenida
   - Notificaciones al equipo

2. **Desplegar a producción**
   - Añadir `HUBSPOT_ACCESS_TOKEN` en Vercel
   - Variables de entorno en producción

3. **Monitorear registros**
   - Revisar leads en HubSpot diariamente
   - Configurar reportes automáticos

---

**¿Todo listo?** ¡Empieza a recibir y gestionar tus leads! 🚀
