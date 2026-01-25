# Guía de Configuración de HubSpot para Focus English

Esta guía te ayudará a centralizar toda la gestión de clientes, comunicaciones y automatizaciones en HubSpot.

---

## 🎯 **Estrategia de Centralización en HubSpot**

### **Ventajas:**
- ✅ Todo en un solo lugar (CRM + Email + Automatizaciones)
- ✅ Reducción de costes (eliminar Resend y otros servicios)
- ✅ Vista 360° del cliente
- ✅ Workflows automatizados
- ✅ Email marketing profesional
- ✅ Reportes y analytics unificados

---

## 📊 **Datos que se Envían a HubSpot**

El webhook ahora envía automáticamente:

### **Información del Contacto:**
- Email
- Nombre (firstname)
- Apellido (lastname)
- Teléfono (phone)

### **Información de Suscripción:**
- Plan de suscripción (subscription_plan)
- Estado de suscripción (subscription_status)
- Fecha de inicio (subscription_start_date)
- Fecha de renovación (subscription_current_period_end)

### **Información de Pago:**
- Estado de pago (payment_status)
- Último monto pagado (last_payment_amount)
- Última fecha de pago (last_payment_date)
- ID de cliente Stripe (stripe_customer_id)
- ID de sesión Stripe (stripe_session_id)

### **Información del Curso:**
- Nivel actual (current_level)

### **Lifecycle Stage:**
- Automáticamente se marca como "Customer" al suscribirse

---

## 🔧 **Configuración de Propiedades Personalizadas en HubSpot**

### **Paso 1: Crear Propiedades Personalizadas**

1. **Ir a HubSpot:**
   ```
   Settings → Properties → Contact properties
   ```

2. **Crear las siguientes propiedades:**

#### **Propiedad 1: Subscription Plan**
```
Name: Subscription Plan
Internal name: subscription_plan
Type: Single-line text
Group: Subscription Information
```

#### **Propiedad 2: Subscription Status**
```
Name: Subscription Status
Internal name: subscription_status
Type: Dropdown select
Options:
  - active
  - cancelled
  - past_due
  - trialing
Group: Subscription Information
```

#### **Propiedad 3: Payment Status**
```
Name: Payment Status
Internal name: payment_status
Type: Dropdown select
Options:
  - paid
  - failed
  - pending
Group: Payment Information
```

#### **Propiedad 4: Subscription Start Date**
```
Name: Subscription Start Date
Internal name: subscription_start_date
Type: Date picker
Group: Subscription Information
```

#### **Propiedad 5: Last Payment Amount**
```
Name: Last Payment Amount
Internal name: last_payment_amount
Type: Number
Group: Payment Information
```

#### **Propiedad 6: Last Payment Date**
```
Name: Last Payment Date
Internal name: last_payment_date
Type: Date picker
Group: Payment Information
```

#### **Propiedad 7: Stripe Customer ID**
```
Name: Stripe Customer ID
Internal name: stripe_customer_id
Type: Single-line text
Group: Integration Data
```

#### **Propiedad 8: Current Level**
```
Name: Current Level
Internal name: current_level
Type: Dropdown select
Options:
  - A1
  - A2
  - B1
  - B2
  - C1
  - C2
  - unknown
Group: Course Information
```

---

## 📧 **Configuración de Workflows de Email**

### **Workflow 1: Email de Bienvenida al Suscribirse**

1. **Crear Workflow:**
   ```
   Automation → Workflows → Create workflow → From scratch
   ```

2. **Configurar Trigger:**
   ```
   Enrollment triggers: Contact property
   Property: Subscription Status
   Value: is equal to → active
   
   Re-enrollment: No
   ```

3. **Añadir Acción:**
   ```
   Action: Send email
   Select or create email template
   ```

4. **Plantilla de Email:**
   ```
   Subject: ¡Bienvenido a Focus English! 🎉
   
   Contenido:
   - Confirmar suscripción
   - Acceso a la plataforma
   - Próximos pasos
   - Recursos disponibles
   - Datos de contacto
   ```

---

### **Workflow 2: Email de Recordatorio de Pago Fallido**

1. **Crear Workflow:**
   ```
   Automation → Workflows → Create workflow
   ```

2. **Configurar Trigger:**
   ```
   Property: Last Payment Status
   Value: is equal to → failed
   ```

3. **Añadir Acción:**
   ```
   Action: Send email
   Subject: Problema con tu pago - Focus English
   
   Contenido:
   - Informar del fallo de pago
   - Instrucciones para actualizar método de pago
   - Link a Stripe portal
   - Soporte
   ```

---

### **Workflow 3: Email de Renovación Próxima**

1. **Crear Workflow:**
   ```
   Automation → Workflows → Create workflow
   ```

2. **Configurar Trigger:**
   ```
   Property: Subscription Current Period End
   Is less than 3 days from now
   
   AND
   
   Property: Subscription Status
   Is equal to: active
   ```

3. **Añadir Acción:**
   ```
   Action: Send email
   Subject: Tu suscripción se renueva pronto
   
   Contenido:
   - Recordatorio de renovación
   - Fecha de cargo
   - Monto
   - Opción para cancelar si lo desea
   ```

---

### **Workflow 4: Serie de Onboarding (5 emails)**

1. **Crear Workflow:**
   ```
   Automation → Workflows → Create workflow
   ```

2. **Trigger:**
   ```
   Property: Subscription Status = active
   First time only
   ```

3. **Serie de Emails:**

   **Email 1 - Día 0 (Inmediato):**
   ```
   Subject: Bienvenido - Primeros pasos
   - Acceso a plataforma
   - Cómo empezar
   - Test de nivel
   ```

   **Email 2 - Día 2:**
   ```
   Delay: 2 days
   Subject: Tus primeras lecciones
   - Recomendar lecciones según nivel
   - Tips de estudio
   ```

   **Email 3 - Día 5:**
   ```
   Delay: 3 days
   Subject: ¿Cómo vas con tu inglés?
   - Check-in de progreso
   - Recursos adicionales
   ```

   **Email 4 - Día 10:**
   ```
   Delay: 5 days
   Subject: Técnicas de estudio efectivas
   - Mejores prácticas
   - Testimonios
   ```

   **Email 5 - Día 15:**
   ```
   Delay: 5 days
   Subject: Prepárate para tu examen
   - Guía de preparación
   - Simulacros
   ```

---

### **Workflow 5: Re-engagement (Inactividad)**

1. **Crear Workflow:**
   ```
   Automation → Workflows → Create workflow
   ```

2. **Trigger:**
   ```
   Has not visited site in last 7 days
   AND
   Subscription Status = active
   ```

3. **Email:**
   ```
   Subject: Te echamos de menos 😊
   
   Contenido:
   - Recordatorio de acceso
   - Nuevas lecciones disponibles
   - Motivación
   - Tips rápidos
   ```

---

### **Workflow 6: Email de Cancelación**

1. **Trigger:**
   ```
   Property: Subscription Status
   Changes to: cancelled
   ```

2. **Email:**
   ```
   Subject: Sentimos que te vayas
   
   Contenido:
   - Confirmar cancelación
   - Feedback (encuesta)
   - Oferta de reactivación
   - Mantener contacto
   ```

---

## 🎨 **Plantillas de Email Sugeridas**

### **Diseño:**
- Logo de Focus English en header
- Colores brand: Violeta/Morado
- CTA claros y visibles
- Footer con datos de contacto y unsuscribe

### **Elementos Clave:**
- Personalización: {{contact.firstname}}
- Plan del usuario: {{contact.subscription_plan}}
- Links dinámicos a la plataforma
- Botones de acción claros

---

## 📊 **Reportes y Dashboards**

### **Dashboard 1: Suscripciones**

Crear dashboard con:
- Total de suscriptores activos
- Nuevas suscripciones este mes
- Cancelaciones este mes
- Churn rate
- MRR (Monthly Recurring Revenue)

### **Dashboard 2: Engagement**

- Tasa de apertura de emails
- Click-through rate
- Visitas a la plataforma
- Progreso en cursos

### **Dashboard 3: Pagos**

- Pagos exitosos
- Pagos fallidos
- Revenue por plan
- Lifetime value promedio

---

## 🔔 **Alertas y Notificaciones**

### **Configurar Notificaciones Internas:**

1. **Nueva Suscripción:**
   ```
   Workflow → Internal notification
   To: equipo@focusenglish.com
   When: New subscription (payment_status = paid)
   ```

2. **Pago Fallido:**
   ```
   Internal notification
   When: Payment fails
   Alert: Contactar al cliente
   ```

3. **Cancelación:**
   ```
   Internal notification
   When: Subscription cancelled
   Alert: Investigar razón
   ```

---

## 🔗 **Integración con Stripe**

El webhook ya maneja automáticamente:

✅ Nuevas suscripciones → Crear contacto en HubSpot
✅ Actualización de suscripción → Actualizar HubSpot
✅ Cancelación → Marcar en HubSpot
✅ Pago fallido → Alertar en HubSpot
✅ Renovación → Actualizar fecha en HubSpot

---

## 📋 **Checklist de Configuración**

### **En HubSpot:**
- [ ] Crear propiedades personalizadas (subscription_plan, etc.)
- [ ] Configurar Workflow de bienvenida
- [ ] Configurar Workflow de pago fallido
- [ ] Configurar Workflow de renovación
- [ ] Configurar serie de onboarding
- [ ] Configurar Workflow de re-engagement
- [ ] Configurar Workflow de cancelación
- [ ] Crear plantillas de email
- [ ] Configurar dashboards
- [ ] Configurar notificaciones internas

### **En el Proyecto:**
- [x] Webhook actualizado para enviar datos a HubSpot
- [x] Manejo de eventos de Stripe
- [ ] Verificar API token de HubSpot en Vercel

---

## 🚀 **Variables de Entorno Necesarias**

Asegúrate de tener en Vercel:

```bash
HUBSPOT_ACCESS_TOKEN=pat-xxx-your-token-here
```

**Cómo obtener el token:**
1. HubSpot → Settings → Integrations → Private Apps
2. Create private app
3. Scopes necesarios:
   - crm.objects.contacts.read
   - crm.objects.contacts.write
   - engagements (para crear notas)
4. Copiar el token

---

## 💡 **Mejores Prácticas**

### **Segmentación:**
- Plan Básico vs Premium
- Nivel de inglés (A1-C2)
- Activos vs Inactivos
- País/Timezone

### **Personalización:**
- Usar nombre del estudiante
- Referencias a su nivel actual
- Contenido relevante a su plan

### **Testing:**
- Probar todos los workflows antes de activar
- Email de prueba a ti mismo primero
- Verificar personalización funciona

### **Optimización:**
- Monitorear tasas de apertura
- A/B testing de subject lines
- Ajustar timing de emails

---

## 📞 **Soporte**

Para cualquier duda sobre la configuración:
- Documentación HubSpot: https://knowledge.hubspot.com
- API Reference: https://developers.hubspot.com

---

**Última actualización:** 15 de Enero de 2026  
**Versión:** 1.0
