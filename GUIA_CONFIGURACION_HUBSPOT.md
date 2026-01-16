# 🎯 Guía Completa: Configuración de CRM en HubSpot (Interfaz Web)

## Configuración Completa del Sistema CRM de Focus English

**Fecha:** 16 de Enero de 2026  
**Versión:** 1.0  
**Tiempo estimado:** 2-3 horas  
**Prerequisitos:** Cuenta de HubSpot con acceso a Private Apps

---

## 📋 ÍNDICE

1. [Configuración Inicial](#1-configuración-inicial)
2. [Propiedades Personalizadas](#2-propiedades-personalizadas)
3. [Workflows Automatizados](#3-workflows-automatizados)
4. [Listas y Segmentación](#4-listas-y-segmentación)
5. [Templates de Email](#5-templates-de-email)
6. [Dashboards y Reportes](#6-dashboards-y-reportes)
7. [Formularios](#7-formularios)
8. [Notificaciones](#8-notificaciones)

---

## 1. CONFIGURACIÓN INICIAL

### 1.1 Acceder a HubSpot

1. Ir a: **https://app.hubspot.com**
2. Iniciar sesión con tu cuenta
3. Seleccionar tu portal: **Focus English** (Portal ID: 147592708)

### 1.2 Verificar Private App

**Ruta:** ⚙️ Settings > Integrations > Private Apps

1. Buscar: **"Focus English Signup Integration"**
2. Verificar que esté **Activa**
3. Revisar scopes (permisos):
   - ✅ `crm.objects.contacts.read`
   - ✅ `crm.objects.contacts.write`
   - ✅ `crm.schemas.contacts.read`
   - ✅ `crm.schemas.contacts.write`
   - ✅ `crm.objects.deals.read`
   - ✅ `crm.objects.deals.write`

4. Si falta algún scope:
   - Click en **Edit app**
   - Tab **Scopes**
   - Marcar los faltantes
   - Click **Save**

---

## 2. PROPIEDADES PERSONALIZADAS

### 2.1 Navegar a Propiedades de Contacto

**Ruta:** ⚙️ Settings > Data Management > Properties

1. Click en **"Contact properties"**
2. Verificar propiedades existentes o crear nuevas

### 2.2 Crear Propiedades Académicas

#### Propiedad: Current Level (Nivel Actual)

1. Click en **"Create property"** (arriba a la derecha)
2. Completar formulario:

```
Object type: Contact
Group: Contact information (o crear grupo "Academic Info")
Label: Current Level
Description: Nivel actual de inglés del estudiante
Field type: Dropdown select
Options:
  - A1 Principiante
  - A2 Elemental
  - B1 Intermedio
  - B2 Intermedio Alto
  - C1 Avanzado
  - C2 Maestría
  - unknown
Internal name: current_level
```

3. Click **"Next"**
4. En "Rules":
   - Show in forms: ✅ (si quieres)
   - Search: ✅
5. Click **"Create"**

#### Propiedad: Course Interest (Curso de Interés)

```
Label: Course Interest
Description: Tipo de curso de interés del estudiante
Field type: Dropdown select
Options:
  - Inglés para Trabajo
  - Inglés para Viajes
  - Inglés para Exámenes
  - General
Internal name: course_interest
```

#### Propiedad: Lessons Completed (Lecciones Completadas)

```
Label: Lessons Completed
Description: Total de lecciones completadas por el estudiante
Field type: Number
Internal name: lessons_completed
```

#### Propiedad: Study Streak (Racha de Estudio)

```
Label: Study Streak
Description: Días consecutivos de estudio
Field type: Number
Internal name: study_streak
```

#### Propiedad: Progress Percentage (Porcentaje de Progreso)

```
Label: Progress Percentage
Description: % de completitud del curso actual
Field type: Number
Number format: Percentage (%)
Internal name: progress_percentage
```

#### Propiedad: Total Study Time (Tiempo Total de Estudio)

```
Label: Total Study Time
Description: Minutos totales de estudio
Field type: Number
Internal name: total_study_time
```

#### Propiedad: Average Score (Calificación Promedio)

```
Label: Average Score
Description: Calificación promedio de ejercicios (0-100)
Field type: Number
Internal name: average_score
```

#### Propiedad: Last Activity Date (Última Actividad)

```
Label: Last Activity Date
Description: Fecha de última actividad en la plataforma
Field type: Date picker
Internal name: last_activity_date
```

### 2.3 Crear Propiedades de Suscripción

#### Propiedad: Subscription Plan (Plan de Suscripción)

```
Label: Subscription Plan
Description: Plan de suscripción actual
Field type: Dropdown select
Options:
  - Basic
  - Pro
  - Premium
  - Anual Basic
  - Anual Pro
  - Anual Premium
  - none
Internal name: subscription_plan
```

#### Propiedad: Subscription Status (Estado de Suscripción)

```
Label: Subscription Status
Description: Estado actual de la suscripción
Field type: Dropdown select
Options:
  - active
  - cancelled
  - past_due
  - trialing
  - inactive
Internal name: subscription_status
```

#### Propiedad: Subscription Start Date (Fecha de Inicio)

```
Label: Subscription Start Date
Description: Fecha de inicio de la suscripción
Field type: Date picker
Internal name: subscription_start_date
```

#### Propiedad: Subscription Current Period End

```
Label: Subscription Current Period End
Description: Fecha de fin del período actual (renovación)
Field type: Date picker
Internal name: subscription_current_period_end
```

### 2.4 Crear Propiedades de Pago

#### Propiedad: Payment Status (Estado de Pago)

```
Label: Payment Status
Description: Estado del último pago
Field type: Dropdown select
Options:
  - paid
  - failed
  - pending
Internal name: payment_status
```

#### Propiedad: Last Payment Amount (Monto Último Pago)

```
Label: Last Payment Amount
Description: Monto del último pago realizado
Field type: Number
Number format: Currency ($ USD)
Internal name: last_payment_amount
```

#### Propiedad: Last Payment Date (Fecha Último Pago)

```
Label: Last Payment Date
Description: Fecha del último pago
Field type: Date picker
Internal name: last_payment_date
```

#### Propiedad: Lifetime Value (Valor de Vida)

```
Label: Lifetime Value
Description: Valor total gastado por el estudiante
Field type: Number
Number format: Currency ($ USD)
Internal name: lifetime_value
```

### 2.5 Crear Propiedades de Integración

#### Propiedad: Stripe Customer ID

```
Label: Stripe Customer ID
Description: ID del cliente en Stripe
Field type: Single-line text
Internal name: stripe_customer_id
```

---

## 3. WORKFLOWS AUTOMATIZADOS

### 3.1 Acceder a Workflows

**Ruta:** Automation > Workflows

1. Click en **"Create workflow"**
2. Seleccionar **"From scratch"**
3. Seleccionar tipo: **"Contact-based"**

### 3.2 Workflow 1: Onboarding Día 0 (Bienvenida)

#### Configuración Básica

```
Workflow name: Onboarding - Día 0 - Bienvenida
Description: Email de bienvenida inmediato después del registro
```

#### Trigger (Disparador)

1. Click en **"Set enrollment triggers"**
2. Seleccionar tipo: **"Filter Type: Contact properties"**
3. Configurar filtro:
   ```
   Contact properties:
   - Create Date is known
   AND
   - Lifecycle stage is equal to "lead"
   ```
4. Re-enrollment: **No** (solo una vez)
5. Click **"Save"**

#### Acción 1: Email de Bienvenida

1. Click en el **"+"** debajo del trigger
2. Seleccionar **"Send email"**
3. Click **"Create new email"**
4. Configurar email:

```
Email name: Welcome Email - Focus English
Subject: ¡Bienvenido a Focus English! 🎉
Preview text: Estamos emocionados de tenerte en nuestra comunidad

Body (usar editor de HubSpot):
---
¡Hola {{contact.firstname}}!

¡Bienvenido/a a Focus English! 🎉

Estamos emocionados de tenerte en nuestra comunidad de aprendizaje de inglés.

Con Focus English, vas a:
✅ Mejorar tu nivel de inglés de forma estructurada
✅ Acceder a lecciones diseñadas por expertos
✅ Practicar con ejercicios interactivos
✅ Recibir feedback personalizado

Para comenzar:
1. Accede a tu cuenta en: https://focusenglish.com/login
2. Completa tu perfil
3. Comienza con tu primera lección

¿Necesitas ayuda? Responde a este email o visita nuestro centro de ayuda.

¡Nos vemos en la plataforma!

El equipo de Focus English

---
CTA Button: "Comenzar Ahora" → https://focusenglish.com/login
```

5. Click **"Save"**
6. Volver al workflow, seleccionar el email creado
7. Click **"Save"**

#### Activar Workflow

1. Toggle superior derecho: **"ON"**
2. Click **"Review and publish"**
3. Click **"Turn on"**

---

### 3.3 Workflow 2: Onboarding Día 1

#### Configuración

```
Workflow name: Onboarding - Día 1 - Primeros Pasos
```

#### Trigger

```
Filter:
- Create Date is known
- Create Date is more than 1 day ago
- Create Date is less than 2 days ago
- Lifecycle stage is equal to "lead"
```

#### Acción: Email Día 1

```
Subject: Día 1: Comienza tu viaje de inglés 🚀

Body:
¡Hola {{contact.firstname}}!

¡Es tu primer día oficial con Focus English! 🚀

Aquí te compartimos algunos consejos para aprovechar al máximo tu experiencia:

📚 Consejo 1: Establece una rutina
Dedica al menos 15-20 minutos diarios. La constancia es clave.

🎯 Consejo 2: Define tu objetivo
¿Por qué quieres aprender inglés? Mantén presente tu motivación.

💪 Consejo 3: No tengas miedo de cometer errores
Los errores son parte del proceso de aprendizaje.

🔥 Acción del día:
Completa tu primera lección interactiva: https://focusenglish.com/lessons

¡Estamos aquí para apoyarte en cada paso!

El equipo de Focus English

CTA: "Ir a mi primera lección"
```

---

### 3.4 Workflow 3: Onboarding Día 3

#### Configuración

```
Workflow name: Onboarding - Día 3 - Tips de Aprendizaje
```

#### Trigger

```
Filter:
- Create Date is more than 3 days ago
- Create Date is less than 4 days ago
- Lifecycle stage is equal to "lead"
```

#### Acción: Email Día 3

```
Subject: Día 3: Tips para aprender más rápido 💡

Body:
¡Hola {{contact.firstname}}!

Ya llevas 3 días con nosotros. ¿Cómo va tu experiencia? 💡

Hoy queremos compartirte algunos tips para aprender más rápido:

🎧 Tip 1: Escucha inglés todos los días
Podcasts, música, series... ¡Todo suma!

📝 Tip 2: Practica escritura
Lleva un diario en inglés. No tiene que ser perfecto.

🗣️ Tip 3: Habla en voz alta
Lee en voz alta para mejorar tu pronunciación.

📱 Tip 4: Usa la app en cualquier momento
Aprovecha tiempos muertos para repasar vocabulario.

🎯 Desafío de la semana:
Completa al menos 3 lecciones esta semana y gana tu primera insignia.

¿Preguntas? ¡Estamos aquí para ayudarte!

El equipo de Focus English

CTA: "Continuar mi progreso"
```

---

### 3.5 Workflow 4: Onboarding Día 7

#### Configuración

```
Workflow name: Onboarding - Día 7 - Primera Semana
```

#### Trigger

```
Filter:
- Create Date is more than 7 days ago
- Create Date is less than 8 days ago
- Lifecycle stage is equal to "lead"
```

#### Acción: Email Día 7

```
Subject: Día 7: Tu primera semana completada 🎯

Body:
¡Felicitaciones {{contact.firstname}}! 🎯

¡Has completado tu primera semana con Focus English!

📊 Tu progreso hasta ahora:
• Has dado el primer paso hacia la fluidez en inglés
• Has establecido una base sólida de aprendizaje
• Eres parte de una comunidad de miles de estudiantes

💎 Próximos pasos:
1. Continúa con las lecciones diarias
2. Participa en nuestros grupos de conversación
3. Explora contenido adicional en la biblioteca

🎁 Regalo especial:
Como agradecimiento, te hemos desbloqueado contenido premium adicional.

🚀 Recuerda: La fluidez en inglés es un maratón, no un sprint.
Sigue practicando y verás resultados increíbles.

¡Sigue así!

El equipo de Focus English

CTA: "Ver mi progreso"
```

---

### 3.6 Workflow 5: Re-engagement (Inactivos)

#### Configuración

```
Workflow name: Re-engagement - Usuarios Inactivos
Description: Recuperar estudiantes que no han tenido actividad en 7+ días
```

#### Trigger

```
Filter:
- Last Activity Date is more than 7 days ago
- Subscription Status is equal to "active"
- Lifecycle stage is not equal to "customer" (opcional)
```

#### Delay (Espera)

1. Agregar acción **"Delay"**
2. Configurar: **Wait 1 day** (para no enviar inmediatamente)

#### Acción 1: Email de Re-engagement

```
Subject: Te extrañamos en Focus English 💙

Body:
Hola {{contact.firstname}},

Te extrañamos en Focus English. 💙

Hace {{contact.last_activity_date}} que no te vemos por la plataforma.

Sabemos que la vida puede ser ajetreada, pero tu meta de aprender inglés sigue esperándote.

🎯 ¿Por qué volver ahora?
• Nuevas lecciones añadidas
• Contenido mejorado basado en feedback
• Tu progreso está guardado y te espera

💪 Volver es fácil:
Solo toma 10 minutos al día. Click aquí para retomar: https://focusenglish.com/resume

🎁 Sorpresa: Tenemos un regalo especial esperándote en tu cuenta.

¿Necesitas ayuda para retomar? Responde este email y te ayudamos.

Te esperamos,
El equipo de Focus English

CTA: "Retomar mi aprendizaje"
```

#### Acción 2: Branch (Ramificación)

1. Agregar **"If/then branch"**
2. Condición:
   ```
   IF Last Activity Date is less than 3 days ago
   THEN: End workflow (usuario se reactivó)
   ELSE: Continue to next action
   ```

#### Acción 3: Delay + Segundo Email (Día 10)

```
Delay: 3 days

Subject: Beneficios de la constancia en el aprendizaje

Body: [Similar al anterior pero con enfoque en beneficios]
```

#### Acción 4: Delay + Tercer Email (Día 14)

```
Delay: 4 days

Subject: Oferta especial para retomar tu aprendizaje

Body: [Incluir incentivo especial o descuento]
```

---

### 3.7 Workflow 6: Recordatorio de Renovación

#### Configuración

```
Workflow name: Recordatorio de Renovación
Description: Avisar 7 días antes de la renovación de suscripción
```

#### Trigger

```
Filter:
- Subscription Status is equal to "active"
- Subscription Current Period End is less than 7 days from now
- Subscription Current Period End is more than 6 days from now
```

#### Acción: Email de Recordatorio

```
Subject: Tu suscripción se renueva pronto 🔄

Body:
Hola {{contact.firstname}},

Tu suscripción a Focus English se renovará en 7 días. 🔄

📅 Fecha de renovación: {{contact.subscription_current_period_end}}
💳 Método de pago: Tu tarjeta registrada
💰 Monto: [Según plan]

✅ No necesitas hacer nada. El cargo se procesará automáticamente.

¿Quieres cambiar tu plan? Visita: https://focusenglish.com/subscription

¿Tienes preguntas sobre tu suscripción? Responde a este email.

Gracias por seguir aprendiendo con nosotros.

El equipo de Focus English

CTA: "Gestionar mi suscripción"
```

---

### 3.8 Workflow 7: Pago Fallido

#### Configuración

```
Workflow name: Alerta de Pago Fallido
Description: Notificar cuando un pago falla
```

#### Trigger

```
Filter:
- Payment Status is equal to "failed"
- Payment Status changed in last 1 day
```

#### Acción: Email de Alerta

```
Subject: Problema con tu pago - Focus English 💳

Body:
Hola {{contact.firstname}},

Intentamos procesar tu pago de ${{contact.last_payment_amount}} pero no pudimos completar la transacción. 💳

Esto puede ocurrir por:
• Tarjeta vencida
• Fondos insuficientes
• Información de pago desactualizada

🔧 Solución rápida:
Actualiza tu método de pago en: https://focusenglish.com/billing

⚠️ Importante:
Si no actualizamos tu pago en 3 días, tu acceso puede ser suspendido temporalmente.

¿Necesitas ayuda? Responde a este email y te asistiremos de inmediato.

Gracias por tu comprensión.

El equipo de Focus English

CTA: "Actualizar método de pago"
```

---

### 3.9 Workflow 8: Curso Completado

#### Configuración

```
Workflow name: Celebración de Curso Completado
Description: Felicitar al completar un curso/módulo
```

#### Trigger

```
Filter:
- Progress Percentage is equal to 100
- Progress Percentage changed in last 1 day
```

#### Acción: Email de Felicitación

```
Subject: ¡FELICITACIONES! Has completado el curso 🏆

Body:
¡FELICITACIONES {{contact.firstname}}! 🏆

¡Has completado [Nombre del curso]!

Esto es un logro significativo en tu viaje de aprendizaje del inglés.

📊 Tu logro:
✅ Todas las lecciones completadas
✅ Ejercicios dominados
✅ Objetivos alcanzados

🎓 ¿Qué sigue?
• Descarga tu certificado: https://focusenglish.com/certificates
• Continúa con el siguiente módulo
• Comparte tu logro en redes sociales

💎 Bonus:
Hemos desbloqueado contenido avanzado especial para ti.

🌟 Estamos orgullosos de tu dedicación y progreso.

¡Sigue brillando!

El equipo de Focus English

CTA: "Descargar mi certificado"
```

---

## 4. LISTAS Y SEGMENTACIÓN

### 4.1 Acceder a Listas

**Ruta:** Contacts > Lists

### 4.2 Lista 1: Estudiantes Activos

1. Click **"Create list"**
2. Seleccionar **"Active list"** (se actualiza automáticamente)
3. Configurar:

```
List name: Estudiantes Activos
Description: Estudiantes con actividad en los últimos 7 días

Filters:
- Last Activity Date is less than 7 days ago
AND
- Subscription Status is equal to "active"
```

4. Click **"Save"**

### 4.3 Lista 2: Estudiantes Inactivos

```
List name: Estudiantes Inactivos
Description: Sin actividad en 14+ días

Filters:
- Last Activity Date is more than 14 days ago
AND
- Subscription Status is equal to "active"
```

### 4.4 Lista 3: En Riesgo de Churn

```
List name: En Riesgo de Churn
Description: Inactivos con suscripción activa - riesgo de cancelar

Filters:
- Last Activity Date is more than 14 days ago
AND
- Subscription Status is equal to "active"
AND
- Subscription Current Period End is less than 30 days from now
```

### 4.5 Lista 4: High Value (Alto Valor)

```
List name: Estudiantes High Value
Description: Estudiantes con LTV > $500

Filters:
- Lifetime Value is greater than 500
AND
- Subscription Status is equal to "active"
```

### 4.6 Lista 5: Nuevos Estudiantes

```
List name: Nuevos Estudiantes (Últimos 30 días)
Description: Registrados en los últimos 30 días

Filters:
- Create Date is less than 30 days ago
```

### 4.7 Lista 6: Por Nivel - B1 Intermedio

```
List name: Estudiantes B1 Intermedio
Description: Nivel B1

Filters:
- Current Level is equal to "B1 Intermedio"
AND
- Subscription Status is equal to "active"
```

**Repetir para cada nivel:** A1, A2, B1, B2, C1, C2

### 4.8 Lista 7: Por Interés - Inglés para Trabajo

```
List name: Interés: Inglés para Trabajo
Description: Estudiantes interesados en inglés profesional

Filters:
- Course Interest is equal to "Inglés para Trabajo"
```

**Repetir para:** Viajes, Exámenes

### 4.9 Lista 8: Pagos Fallidos

```
List name: Pagos Fallidos - Acción Requerida
Description: Último pago falló - requiere actualización

Filters:
- Payment Status is equal to "failed"
AND
- Subscription Status is equal to "active"
```

### 4.10 Lista 9: Renovación Próxima (7 días)

```
List name: Renovación en 7 días
Description: Suscripciones que renuevan esta semana

Filters:
- Subscription Current Period End is less than 7 days from now
AND
- Subscription Status is equal to "active"
```

---

## 5. TEMPLATES DE EMAIL

### 5.1 Acceder a Email Templates

**Ruta:** Marketing > Email > Templates

### 5.2 Crear Template Base de Focus English

1. Click **"Create template"**
2. Seleccionar **"Drag and drop"**
3. Configurar diseño base:

```
Template name: Focus English - Base Template

Header:
- Logo de Focus English
- Colores: Violet/Purple (según branding)

Body:
- Tipografía del sistema
- Espaciado adecuado
- Responsive design

Footer:
- Dirección: Focus English
- Email: info@focusenglish.com
- Links: Blog, Ayuda, Política de privacidad
- Social media icons
- Unsubscribe link (obligatorio)
```

4. Click **"Save"**

### 5.3 Duplicar Template Base para Cada Tipo

Crear templates basados en el base para:

1. **Welcome Email** - Ya creado en Workflow
2. **Onboarding Day 1** - Ya creado
3. **Onboarding Day 3** - Ya creado
4. **Onboarding Day 7** - Ya creado
5. **Re-engagement** - Ya creado
6. **Payment Failed** - Ya creado
7. **Renewal Reminder** - Ya creado
8. **Course Complete** - Ya creado
9. **Weekly Summary** - Crear nuevo

### 5.4 Template: Weekly Summary

```
Template name: Weekly Summary - Focus English

Subject: Tu resumen semanal de progreso 📊

Body:
¡Hola {{contact.firstname}}!

Aquí está tu resumen de la semana. 📊

📚 Esta semana completaste:
• {{contact.lessons_completed}} lecciones (total)
• [Calcular tiempo] minutos de estudio
• [Calcular] ejercicios

🎯 Tu progreso:
{{contact.progress_percentage}}% completado
Racha actual: {{contact.study_streak}} días

¡Vas por buen camino! Sigue así y alcanzarás tus metas.

💡 Tip de la semana:
La práctica constante es más efectiva que sesiones largas esporádicas.

📅 Plan para la próxima semana:
• Completa al menos 3 lecciones
• Practica conversación
• Revisa vocabulario nuevo

🔥 Mantén el ritmo:
Accede a tu próxima lección: https://focusenglish.com/continue

¡Sigue adelante!

El equipo de Focus English

CTA: "Continuar aprendiendo"
```

---

## 6. DASHBOARDS Y REPORTES

### 6.1 Acceder a Dashboards

**Ruta:** Reports > Dashboards

### 6.2 Dashboard 1: Resumen de Estudiantes

1. Click **"Create dashboard"**
2. Nombre: **"Focus English - Resumen de Estudiantes"**
3. Agregar reports (click **"Add report"**):

#### Report 1: Total de Estudiantes

```
Report type: Single object (Contacts)
Visualization: Single value
Metric: Count of contacts
Filter: Lifecycle stage is equal to "lead" or "customer"
Label: Total Estudiantes
```

#### Report 2: Estudiantes Activos

```
Metric: Count of contacts
Filter: 
- Last Activity Date is less than 7 days ago
- Subscription Status is equal to "active"
Label: Estudiantes Activos
```

#### Report 3: Nuevos Este Mes

```
Metric: Count of contacts
Filter: Create Date is in current month
Label: Nuevos Este Mes
```

#### Report 4: Distribución por Nivel (Pie Chart)

```
Report type: Single object
Visualization: Pie chart
Dimension: Current Level
Metric: Count of contacts
Label: Distribución por Nivel
```

#### Report 5: Distribución por Plan (Bar Chart)

```
Visualization: Bar chart
Dimension: Subscription Plan
Metric: Count of contacts
Label: Distribución por Plan
```

#### Report 6: Tendencia de Registro (Line Chart)

```
Visualization: Line chart
Date property: Create Date
Time period: Last 3 months
Frequency: Week
Metric: Count of contacts
Label: Tendencia de Registros
```

### 6.3 Dashboard 2: Métricas Financieras

```
Dashboard name: Focus English - Métricas Financieras
```

#### Report 1: MRR (Monthly Recurring Revenue)

```
Report type: Custom report
Metric: Sum of [calcular manualmente por plan]
Label: MRR
Note: Este requiere cálculo manual o integración con Stripe
```

#### Report 2: Ingresos Este Mes

```
Metric: Sum of Last Payment Amount
Filter: Last Payment Date is in current month
Label: Ingresos Este Mes
```

#### Report 3: Pagos Exitosos vs Fallidos

```
Visualization: Donut chart
Dimension: Payment Status
Metric: Count of contacts
Filter: Last Payment Date is in current month
Label: Estado de Pagos
```

#### Report 4: LTV Promedio

```
Metric: Average of Lifetime Value
Filter: Lifetime Value is known
Label: LTV Promedio
```

### 6.4 Dashboard 3: Engagement

```
Dashboard name: Focus English - Engagement
```

#### Report 1: Tasa de Actividad

```
Visualization: Gauge
Metric: Percentage
Numerator: Count where Last Activity Date < 7 days ago
Denominator: Total contacts
Label: Tasa de Actividad
Goal: 80%
```

#### Report 2: Estudiantes en Riesgo

```
Visualization: Single value
Metric: Count
Filter: 
- Last Activity Date > 14 days ago
- Subscription Status = active
Label: En Riesgo de Churn
```

#### Report 3: Racha de Estudio Promedio

```
Metric: Average of Study Streak
Label: Racha Promedio (días)
```

### 6.5 Dashboard 4: Conversión

```
Dashboard name: Focus English - Conversión y Crecimiento
```

#### Report 1: Tasa de Conversión

```
Visualization: Percentage
Numerator: Count where Lifecycle stage = "customer"
Denominator: Total contacts
Label: Tasa de Conversión (Lead → Customer)
```

#### Report 2: Tiempo Hasta Primer Pago

```
Report type: Custom
Calculation: Average (Subscription Start Date - Create Date)
Label: Días Hasta Primera Compra
```

---

## 7. FORMULARIOS

### 7.1 Formulario de Registro (Signup)

**Ruta:** Marketing > Lead Capture > Forms

1. Click **"Create form"**
2. Seleccionar **"Embedded form"**
3. Nombre: **"Focus English - Signup Form"**

#### Campos del Formulario:

```
1. First Name (firstname) - Required
2. Last Name (lastname) - Required
3. Email (email) - Required
4. Phone Number (phone) - Optional
5. Current Level (current_level) - Required (Dropdown)
   Options: A1, A2, B1, B2, C1, C2, No sé
6. Course Interest (course_interest) - Required (Dropdown)
   Options: Trabajo, Viajes, Exámenes, General
7. Message (message) - Optional (Multi-line text)
```

#### Opciones del Formulario:

```
Submit button text: "Comenzar Ahora"
Redirect URL: https://focusenglish.com/dashboard
GDPR consent: ✅ Enable
Privacy policy link: https://focusenglish.com/privacy
```

#### Follow-up Email:

```
Send follow-up email: ✅ Yes
Select email: "Welcome Email - Focus English"
```

4. Click **"Publish"**
5. Copiar código embed para integrar en el sitio

### 7.2 Formulario de Contacto

```
Form name: Focus English - Contact Form

Campos:
1. First Name - Required
2. Last Name - Required
3. Email - Required
4. Subject (single-line text) - Required
5. Message (multi-line text) - Required

Submit: "Enviar Mensaje"
Redirect: /thank-you
```

---

## 8. NOTIFICACIONES

### 8.1 Notificaciones Internas del Equipo

**Ruta:** ⚙️ Settings > General > Notifications

#### Notificación 1: Nueva Suscripción Pagada

1. Ir a **Workflows**
2. Crear nuevo workflow: **"Notificación Interna - Nueva Suscripción"**

```
Trigger:
- Payment Status changed to "paid"
- Subscription Status is equal to "active"

Action:
Send internal email notification to: team@focusenglish.com

Subject: 🎉 Nueva suscripción pagada - {{contact.firstname}} {{contact.lastname}}

Body:
Nueva suscripción confirmada:

Estudiante: {{contact.firstname}} {{contact.lastname}}
Email: {{contact.email}}
Plan: {{contact.subscription_plan}}
Monto: ${{contact.last_payment_amount}}
Stripe ID: {{contact.stripe_customer_id}}

Ver contacto: [Link a HubSpot contact]
```

#### Notificación 2: Pago Fallido

```
Trigger:
- Payment Status changed to "failed"

Action:
Send internal notification

Subject: ⚠️ Pago fallido - {{contact.firstname}} {{contact.lastname}}

Body:
Pago fallido detectado:

Estudiante: {{contact.firstname}} {{contact.lastname}}
Email: {{contact.email}}
Monto intentado: ${{contact.last_payment_amount}}
Plan: {{contact.subscription_plan}}

Acción requerida: Contactar al estudiante

Ver contacto: [Link]
```

#### Notificación 3: Cancelación de Suscripción

```
Trigger:
- Subscription Status changed to "cancelled"

Action:
Send internal notification

Subject: 😢 Cancelación - {{contact.firstname}} {{contact.lastname}}

Body:
Suscripción cancelada:

Estudiante: {{contact.firstname}} {{contact.lastname}}
Email: {{contact.email}}
Plan anterior: {{contact.subscription_plan}}
LTV: ${{contact.lifetime_value}}

Razón: [Si está disponible]

Ver contacto: [Link]
```

---

## 9. CONFIGURACIÓN AVANZADA

### 9.1 Lifecycle Stages (Etapas del Ciclo de Vida)

**Ruta:** ⚙️ Settings > Objects > Contacts > Lifecycle stages

Verificar y configurar:

```
Lifecycle stages para Focus English:

1. Subscriber (Suscriptor) - Visitante del sitio
2. Lead - Registrado, no ha pagado
3. Marketing Qualified Lead (MQL) - Lead de calidad
4. Sales Qualified Lead (SQL) - Listo para conversión
5. Opportunity - En proceso de compra
6. Customer - Ha pagado, suscripción activa
7. Evangelist - Cliente satisfecho que refiere
8. Other - Otros casos
```

### 9.2 Lead Status (Estado de Lead)

Configurar opciones de Lead Status:

```
Lead Status options:
- New (Nuevo)
- Open (Abierto)
- In Progress (En Progreso)
- Open Deal (Deal Abierto)
- Unqualified (No Calificado)
- Attempted to Contact (Intentado Contactar)
- Connected (Conectado)
- Bad Timing (Mal Momento)
```

### 9.3 Deal Pipelines (Opcional)

Si quieres trackear deals/oportunidades:

**Ruta:** Sales > Deals > Pipelines

```
Pipeline name: Suscripciones Focus English

Stages:
1. Trial Iniciado (0%)
2. Lección 1 Completada (25%)
3. Semana 1 Completada (50%)
4. Listo para Pagar (75%)
5. Suscripción Pagada (100%)
6. Closed Lost (Perdido)
```

---

## 10. TESTING Y VALIDACIÓN

### 10.1 Testing de Workflows

#### Test 1: Onboarding

1. Crear contacto de prueba:
   ```
   Nombre: Test Usuario
   Email: test+onboarding@focusenglish.com
   ```
2. Verificar que recibe email de bienvenida
3. Esperar 1 día (o cambiar fecha manualmente)
4. Verificar email día 1
5. Repetir para día 3 y 7

#### Test 2: Re-engagement

1. Crear contacto de prueba con:
   ```
   Last Activity Date: hace 8 días
   Subscription Status: active
   ```
2. Verificar que entra al workflow
3. Verificar recepción de email

#### Test 3: Pago Fallido

1. Crear contacto con:
   ```
   Payment Status: failed (cambiar manualmente)
   ```
2. Verificar email de alerta

### 10.2 Validación de Listas

Para cada lista creada:

1. Abrir la lista
2. Verificar que los contactos cumplen los filtros
3. Exportar sample para revisar
4. Ajustar filtros si es necesario

### 10.3 Validación de Dashboards

1. Abrir cada dashboard
2. Verificar que los números tienen sentido
3. Comparar con datos reales
4. Ajustar métricas si es necesario

---

## 11. MANTENIMIENTO Y MONITOREO

### 11.1 Tareas Semanales

**Lunes:**
- [ ] Revisar dashboard de estudiantes
- [ ] Verificar workflows activos
- [ ] Revisar lista de "En Riesgo"

**Miércoles:**
- [ ] Revisar métricas financieras
- [ ] Verificar pagos fallidos
- [ ] Contactar estudiantes en riesgo

**Viernes:**
- [ ] Revisar engagement de la semana
- [ ] Ajustar workflows si es necesario
- [ ] Preparar reporte semanal

### 11.2 Tareas Mensuales

**Primer día del mes:**
- [ ] Generar reporte mensual completo
- [ ] Calcular MRR y growth
- [ ] Analizar churn rate
- [ ] Revisar efectividad de emails (open rate, click rate)
- [ ] Ajustar segmentos si es necesario
- [ ] Limpiar contactos duplicados

### 11.3 Revisión Trimestral

- [ ] Evaluar rendimiento de workflows
- [ ] Optimizar templates de email
- [ ] Revisar propiedades personalizadas (agregar/eliminar)
- [ ] Actualizar dashboards
- [ ] Analizar cohortes
- [ ] A/B testing de emails

---

## 12. MEJORES PRÁCTICAS

### 12.1 Email Marketing

✅ **DO:**
- Personalizar con tokens ({{contact.firstname}})
- Mantener asunto conciso (< 50 caracteres)
- CTA claro y visible
- Mobile-friendly design
- Testing antes de enviar

❌ **DON'T:**
- Enviar más de 1 email/día por contacto
- Usar SPAM words (FREE, URGENT, etc.)
- Olvidar link de unsubscribe
- Emails muy largos (> 500 palabras)

### 12.2 Workflows

✅ **DO:**
- Nombrar workflows descriptivamente
- Documentar propósito en descripción
- Usar delays apropiados
- Testing con contactos de prueba
- Revisar rendimiento mensualmente

❌ **DON'T:**
- Workflows que se solapan
- Demasiados emails seguidos
- Triggers muy amplios
- Olvidar excluir contactos que ya completaron

### 12.3 Propiedades

✅ **DO:**
- Nombrar consistentemente
- Agregar descripciones claras
- Usar field types apropiados
- Agrupar lógicamente
- Documentar uso

❌ **DON'T:**
- Crear propiedades redundantes
- Nombres confusos
- Dejar propiedades sin usar

---

## 13. TROUBLESHOOTING

### Problema 1: Workflow no se activa

**Solución:**
1. Verificar que workflow está ON
2. Revisar trigger conditions
3. Verificar enrollment settings
4. Crear contacto de prueba manualmente
5. Revisar logs del workflow

### Problema 2: Emails no se envían

**Solución:**
1. Verificar email template completo
2. Verificar dominio verificado
3. Revisar spam folder del destinatario
4. Verificar bounce rate
5. Contactar soporte de HubSpot si persiste

### Problema 3: Listas no se actualizan

**Solución:**
1. Verificar que lista es "Active" no "Static"
2. Refrescar la página
3. Revisar filtros
4. Esperar 10-15 minutos (procesamiento)

### Problema 4: Dashboard sin datos

**Solución:**
1. Verificar filtros del report
2. Verificar que propiedades tienen datos
3. Ajustar rango de fechas
4. Refrescar dashboard

---

## 14. RECURSOS ADICIONALES

### 14.1 Documentación Oficial de HubSpot

- Workflows: https://knowledge.hubspot.com/workflows
- Email Marketing: https://knowledge.hubspot.com/email
- Lists: https://knowledge.hubspot.com/lists
- Properties: https://knowledge.hubspot.com/properties
- Reports: https://knowledge.hubspot.com/reports

### 14.2 Tutoriales en Video

- HubSpot Academy: https://academy.hubspot.com
- Workflow Tutorials
- Email Marketing Best Practices
- Reporting & Analytics

### 14.3 Soporte

- HubSpot Support: support@hubspot.com
- Community: https://community.hubspot.com
- Live Chat en HubSpot UI

---

## 15. CHECKLIST DE IMPLEMENTACIÓN

### Fase 1: Configuración Básica (Semana 1)

- [ ] Verificar Private App y scopes
- [ ] Crear todas las propiedades personalizadas (15 propiedades)
- [ ] Configurar lifecycle stages
- [ ] Crear template base de email

### Fase 2: Workflows Core (Semana 2)

- [ ] Workflow: Onboarding Día 0
- [ ] Workflow: Onboarding Día 1
- [ ] Workflow: Onboarding Día 3
- [ ] Workflow: Onboarding Día 7
- [ ] Testing de workflows

### Fase 3: Listas y Segmentación (Semana 2)

- [ ] Lista: Estudiantes Activos
- [ ] Lista: Estudiantes Inactivos
- [ ] Lista: En Riesgo de Churn
- [ ] Lista: High Value
- [ ] Lista: Nuevos Estudiantes
- [ ] Listas por nivel (A1-C2)
- [ ] Listas por interés

### Fase 4: Workflows Avanzados (Semana 3)

- [ ] Workflow: Re-engagement
- [ ] Workflow: Recordatorio de Renovación
- [ ] Workflow: Pago Fallido
- [ ] Workflow: Curso Completado
- [ ] Notificaciones internas

### Fase 5: Dashboards y Reportes (Semana 3-4)

- [ ] Dashboard: Resumen de Estudiantes
- [ ] Dashboard: Métricas Financieras
- [ ] Dashboard: Engagement
- [ ] Dashboard: Conversión

### Fase 6: Formularios (Semana 4)

- [ ] Formulario: Signup
- [ ] Formulario: Contacto
- [ ] Integración con sitio web

### Fase 7: Testing Final (Semana 4)

- [ ] Testing de todos los workflows
- [ ] Validación de listas
- [ ] Verificación de dashboards
- [ ] Ajustes finales

### Fase 8: Lanzamiento (Semana 5)

- [ ] Documentar proceso
- [ ] Capacitar al equipo
- [ ] Monitoreo día 1-7
- [ ] Ajustes basados en feedback

---

## 16. MÉTRICAS DE ÉXITO

Después de 30 días de implementación, medir:

### Engagement
- ✅ Tasa de apertura de emails > 25%
- ✅ Tasa de click > 3%
- ✅ Estudiantes activos > 70%

### Conversión
- ✅ Tasa de conversión lead → customer > 20%
- ✅ Tiempo hasta primera compra < 7 días

### Retención
- ✅ Churn rate < 5%
- ✅ Re-engagement success > 15%

### Automatización
- ✅ 80%+ de emails automatizados
- ✅ 100% de workflows funcionando
- ✅ 0 errores en workflows

---

## 17. PRÓXIMOS PASOS DESPUÉS DE IMPLEMENTACIÓN

### Optimización Continua

1. **A/B Testing de Emails**
   - Testear diferentes subject lines
   - Testear diferentes CTAs
   - Testear timing de envío

2. **Refinamiento de Segmentos**
   - Crear segmentos más específicos
   - Analizar comportamiento por segmento
   - Personalizar mensajes por segmento

3. **Expansión de Workflows**
   - Agregar más puntos de contacto
   - Workflows para upsell/cross-sell
   - Win-back campaigns

4. **Integración con Otras Herramientas**
   - Conectar con Google Analytics
   - Integrar con plataforma de cursos
   - Sincronizar con Stripe automáticamente

---

**Última actualización:** 16 de Enero de 2026  
**Versión:** 1.0  
**Tiempo total de implementación:** 4-5 semanas  
**Nivel de dificultad:** Intermedio

---

## 📞 ¿Necesitas ayuda?

Si tienes dudas durante la implementación:

1. Consulta la documentación oficial de HubSpot
2. Revisa los tutoriales en video
3. Contacta al soporte de HubSpot
4. Documenta cualquier issue para referencia futura

---

✅ **¡Tu sistema CRM estará completamente operativo siguiendo esta guía!**

**Recuerda:** La clave está en implementar paso a paso, testar cada componente, y ajustar basándote en los resultados reales.

¡Éxito con la implementación! 🚀
