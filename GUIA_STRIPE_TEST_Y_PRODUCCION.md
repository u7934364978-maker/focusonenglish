# 🎯 Guía Completa: Stripe Test → Producción

## 📋 ÍNDICE
1. [Probar Stripe en Modo Test](#1-probar-stripe-en-modo-test)
2. [Migrar a Stripe en Producción](#2-migrar-a-stripe-en-producción)
3. [Tarjetas de Prueba](#3-tarjetas-de-prueba-stripe)
4. [Verificación y Monitoreo](#4-verificación-y-monitoreo)
5. [Solución de Problemas](#5-solución-de-problemas)

---

## 1. PROBAR STRIPE EN MODO TEST

### 🔧 Paso 1.1: Configurar Variables de Entorno (Test)

Actualmente tu aplicación necesita estas variables. Ve a Vercel:

**📍 URL**: https://vercel.com/u7934364978-maker/focusonenglish/settings/environment-variables

**Variables para Modo TEST**:

```bash
# Stripe Test Keys (Obtén desde https://dashboard.stripe.com/test/apikeys)
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXX
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXX

# Webhook Secret (Obtén después de crear el webhook)
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXX

# URL del sitio
NEXT_PUBLIC_SITE_URL=https://www.focus-on-english.com
```

**🔑 Cómo obtener las claves TEST**:

1. Ve a: https://dashboard.stripe.com/test/apikeys
2. Asegúrate de estar en **"View test data"** (toggle en la esquina superior derecha)
3. Copia:
   - **Publishable key** → `pk_test_...`
   - **Secret key** → `sk_test_...` (click en "Reveal test key")

### 🪝 Paso 1.2: Configurar Webhook en Stripe (Test)

**📍 URL**: https://dashboard.stripe.com/test/webhooks

**Pasos**:

1. Click en **"Add endpoint"**
2. **Endpoint URL**: `https://www.focus-on-english.com/api/webhooks/stripe`
3. **Description**: "Focus English - Webhook de suscripciones"
4. **Events to send**:
   - `checkout.session.completed` (cuando se completa el pago)
   - `customer.subscription.created` (nueva suscripción)
   - `customer.subscription.updated` (cambios en suscripción)
   - `customer.subscription.deleted` (cancelación)
   - `invoice.payment_succeeded` (pago mensual exitoso)
   - `invoice.payment_failed` (fallo en renovación)
5. Click en **"Add endpoint"**
6. **Copiar el "Signing secret"** (empieza con `whsec_...`)
7. Añadir en Vercel: `STRIPE_WEBHOOK_SECRET=whsec_...`

### 🧪 Paso 1.3: Realizar Pruebas Completas

#### Flujo de Prueba 1: Suscripción Basic

1. **Visitar**: https://www.focus-on-english.com/signup
2. **Seleccionar**: Plan "Basic"
3. **Llenar formulario**:
   ```
   Nombre: Test Usuario
   Email: test@ejemplo.com
   Teléfono: +34612345678
   Nivel actual: B1 - Intermedio
   ```
4. Click en **"Suscribirme Ahora"**
5. Serás redirigido a **Stripe Checkout**

#### Usar Tarjeta de Prueba:

```
Número de tarjeta: 4242 4242 4242 4242
Fecha de expiración: 12/26 (cualquier fecha futura)
CVC: 123
Código postal: 12345
Nombre: Test User
```

6. Completar el pago
7. **Verificar redirección** a `/success` con mensaje de confirmación
8. **Verificar en Stripe Dashboard**:
   - https://dashboard.stripe.com/test/payments (ver pago)
   - https://dashboard.stripe.com/test/subscriptions (ver suscripción activa)
9. **Verificar en HubSpot**: https://app-eu1.hubspot.com/contacts/147592708
   - Buscar el contacto `test@ejemplo.com`
   - Verificar que se haya creado/actualizado

#### Flujo de Prueba 2: Suscripción Premium

Repetir el mismo proceso pero seleccionando el plan **"Premium"**

### 📊 Verificaciones POST-Prueba

**✅ Checklist de Pruebas**:

- [ ] ✅ Formulario de signup funciona
- [ ] ✅ Redirección a Stripe Checkout exitosa
- [ ] ✅ Pago procesado correctamente
- [ ] ✅ Redirección a `/success` funciona
- [ ] ✅ Suscripción visible en Stripe Dashboard
- [ ] ✅ Contacto creado/actualizado en HubSpot
- [ ] ✅ Webhook recibido (ver logs en Stripe)
- [ ] ✅ Email de confirmación de Stripe recibido

---

## 2. MIGRAR A STRIPE EN PRODUCCIÓN

### 🚨 IMPORTANTE: Antes de Empezar

**Requisitos para Stripe LIVE**:

1. ✅ **Verificar tu cuenta de Stripe**:
   - https://dashboard.stripe.com/settings/account
   - Completar información de tu empresa
   - Añadir cuenta bancaria para recibir pagos
   - Proporcionar documentación si es requerida

2. ✅ **Activar modo LIVE**:
   - https://dashboard.stripe.com/settings/account
   - Completar todos los pasos de verificación
   - Puede tomar 24-48 horas para aprobación

### 🔑 Paso 2.1: Obtener Claves de PRODUCCIÓN

1. Ve a: https://dashboard.stripe.com/apikeys
2. **ASEGÚRATE DE DESACTIVAR** el toggle **"View test data"**
3. Deberías ver: "Production API keys"
4. Copia:
   - **Publishable key** → `pk_live_...`
   - **Secret key** → `sk_live_...` (click en "Reveal live key")

### 🔧 Paso 2.2: Actualizar Variables en Vercel (PRODUCCIÓN)

**📍 URL**: https://vercel.com/u7934364978-maker/focusonenglish/settings/environment-variables

**⚠️ IMPORTANTE**: Vas a **REEMPLAZAR** (no añadir) las variables existentes:

```bash
# Stripe LIVE Keys (REEMPLAZAR las test keys)
STRIPE_SECRET_KEY=sk_live_XXXXXXXXXXXXXXXXX
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_XXXXXXXXXXXXXXXXX

# Webhook Secret LIVE (obtener en siguiente paso)
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXX

# URL del sitio (mantener igual)
NEXT_PUBLIC_SITE_URL=https://www.focus-on-english.com
```

**Pasos en Vercel**:

1. Buscar cada variable (ej: `STRIPE_SECRET_KEY`)
2. Click en los **3 puntos** → **"Edit"**
3. **Reemplazar** el valor de `sk_test_...` por `sk_live_...`
4. Marcar los entornos: **Production**, **Preview**, **Development**
5. Click en **"Save"**
6. Repetir para todas las variables de Stripe

### 🪝 Paso 2.3: Crear Nuevo Webhook (PRODUCCIÓN)

**📍 URL**: https://dashboard.stripe.com/webhooks (**SIN** "/test/")

**⚠️ IMPORTANTE**: Desactiva el toggle "View test data"

**Pasos**:

1. Click en **"Add endpoint"**
2. **Endpoint URL**: `https://www.focus-on-english.com/api/webhooks/stripe`
3. **Description**: "Focus English - Webhook de suscripciones LIVE"
4. **Events to send** (MISMO que en test):
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Click en **"Add endpoint"**
6. **Copiar el "Signing secret"** (nuevo, diferente al de test: `whsec_...`)
7. **Actualizar en Vercel**: Editar `STRIPE_WEBHOOK_SECRET` con el nuevo valor LIVE

### 🚀 Paso 2.4: Re-deploy en Vercel

**📍 URL**: https://vercel.com/u7934364978-maker/focusonenglish

1. Ve a la pestaña **"Deployments"**
2. Click en los **3 puntos** del último deployment
3. Click en **"Redeploy"**
4. Esperar a que termine el deployment (~1-2 minutos)
5. Verificar que el deployment sea exitoso ✅

### 💳 Paso 2.5: Realizar Primera Prueba REAL (Opcional pero Recomendado)

**⚠️ ATENCIÓN**: Este pago será REAL y se cargará a tu tarjeta

**Opción A**: Usar tarjeta real con monto bajo

1. Ir a: https://www.focus-on-english.com/signup
2. Seleccionar el plan **Basic** (€7.99/mes)
3. Usar tu propia tarjeta de crédito/débito
4. Completar el pago
5. **Verificar**:
   - Redirección a `/success`
   - Pago visible en: https://dashboard.stripe.com/payments
   - Suscripción en: https://dashboard.stripe.com/subscriptions
6. **Cancelar inmediatamente** (si solo es prueba):
   - Ir a: https://dashboard.stripe.com/subscriptions
   - Buscar la suscripción
   - Click en la suscripción → **"Actions"** → **"Cancel subscription"**

**Opción B**: Pedir a un amigo/familiar que pruebe

1. Compartir el link: https://www.focus-on-english.com/signup
2. Pedirles que completen el pago con su tarjeta
3. Verificar todo funcione
4. Puedes hacer refund desde Stripe si es solo prueba:
   - https://dashboard.stripe.com/payments
   - Click en el pago → **"Refund payment"**

---

## 3. TARJETAS DE PRUEBA STRIPE

### ✅ Tarjetas para PROBAR (Solo funcionan en modo TEST)

| Escenario | Número de Tarjeta | Resultado |
|-----------|-------------------|-----------|
| **Pago exitoso** | `4242 4242 4242 4242` | ✅ Pago aprobado |
| **Pago rechazado** | `4000 0000 0000 0002` | ❌ Tarjeta declinada |
| **Requiere autenticación 3D Secure** | `4000 0027 6000 3184` | 🔐 Requiere verificación |
| **Fondos insuficientes** | `4000 0000 0000 9995` | ❌ Sin fondos |
| **Tarjeta expirada** | `4000 0000 0000 0069` | ❌ Tarjeta vencida |
| **CVC incorrecto** | `4000 0000 0000 0127` | ❌ CVC inválido |

**Datos adicionales para TODAS las tarjetas de prueba**:
- **Fecha de expiración**: Cualquier fecha futura (ej: `12/26`)
- **CVC**: Cualquier 3 dígitos (ej: `123`)
- **Código postal**: Cualquier válido (ej: `12345`)

### 💳 Tarjetas Internacionales de Prueba

| País | Número de Tarjeta |
|------|-------------------|
| **España** (Visa) | `4000 0072 4000 0007` |
| **México** (Mastercard) | `5555 5555 5555 4444` |
| **Argentina** (Amex) | `3782 822463 10005` |

---

## 4. VERIFICACIÓN Y MONITOREO

### 📊 Dashboards Importantes

#### Stripe Dashboard (Producción)
- **Pagos**: https://dashboard.stripe.com/payments
- **Suscripciones**: https://dashboard.stripe.com/subscriptions
- **Clientes**: https://dashboard.stripe.com/customers
- **Webhooks**: https://dashboard.stripe.com/webhooks
- **Eventos**: https://dashboard.stripe.com/events
- **Logs**: https://dashboard.stripe.com/logs

#### Vercel Dashboard
- **Deployments**: https://vercel.com/u7934364978-maker/focusonenglish/deployments
- **Variables**: https://vercel.com/u7934364978-maker/focusonenglish/settings/environment-variables
- **Logs**: https://vercel.com/u7934364978-maker/focusonenglish/logs

#### HubSpot CRM
- **Contactos**: https://app-eu1.hubspot.com/contacts/147592708

### 🔍 Verificar que Todo Funcione

**Checklist Post-Producción**:

1. ✅ **Variables de entorno actualizadas** en Vercel
2. ✅ **Webhook LIVE configurado** en Stripe
3. ✅ **Deployment exitoso** en Vercel
4. ✅ **Página de signup carga** correctamente
5. ✅ **Formulario funciona** sin errores de consola
6. ✅ **Redirección a Stripe Checkout** funciona
7. ✅ **Proceso de pago** completo funciona
8. ✅ **Webhook recibe eventos** (ver en Stripe)
9. ✅ **Contactos se guardan** en HubSpot

### 📧 Emails que Deberías Recibir

**Al configurar correctamente Stripe LIVE**:

1. **De Stripe**:
   - "Payment succeeded" (pago exitoso)
   - "Subscription created" (nueva suscripción)
   - "Invoice receipt" (recibo de pago)

2. **Al cliente**:
   - Email de confirmación de Stripe
   - Recibo de pago mensual
   - Notificación de renovación próxima

---

## 5. SOLUCIÓN DE PROBLEMAS

### 🔴 Error: "No API key provided"

**Causa**: Variables de Stripe no configuradas en Vercel

**Solución**:
1. Verificar variables en: https://vercel.com/u7934364978-maker/focusonenglish/settings/environment-variables
2. Asegurarte que estén marcadas para **Production**
3. Re-deploy la aplicación

### 🔴 Error: "Invalid API key"

**Causa**: Estás usando claves TEST en producción o viceversa

**Solución**:
1. Verificar el toggle "View test data" en Stripe Dashboard
2. Si estás en PRODUCCIÓN, asegúrate de usar `pk_live_...` y `sk_live_...`
3. Si estás en TEST, usa `pk_test_...` y `sk_test_...`

### 🔴 Webhook no recibe eventos

**Causa**: Webhook mal configurado o signing secret incorrecto

**Solución**:
1. Verificar que el webhook URL sea: `https://www.focus-on-english.com/api/webhooks/stripe`
2. Verificar `STRIPE_WEBHOOK_SECRET` en Vercel
3. Verificar eventos seleccionados en Stripe webhook
4. Ver logs de webhook en: https://dashboard.stripe.com/webhooks

### 🔴 Pago procesado pero usuario no redirigido a /success

**Causa**: URL de success incorrecta en checkout session

**Solución**:
1. Verificar `NEXT_PUBLIC_SITE_URL` en Vercel
2. Debe ser: `https://www.focus-on-english.com`
3. Re-deploy si cambias la variable

### 🔴 Error al crear checkout session

**Causa**: Datos del producto mal configurados

**Solución**:
1. Verificar que el `planId` enviado sea válido (`basic` o `premium`)
2. Verificar logs en Vercel: https://vercel.com/u7934364978-maker/focusonenglish/logs
3. Verificar consola del navegador (F12)

### 📞 Obtener Soporte

**Stripe Support**:
- Chat en vivo: https://support.stripe.com
- Documentación: https://stripe.com/docs

**Next.js + Stripe**:
- Guía oficial: https://stripe.com/docs/stripe-js/react
- Next.js + Stripe: https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe

---

## 📋 CHECKLIST FINAL

### Modo TEST ✅
- [ ] Claves TEST configuradas en Vercel
- [ ] Webhook TEST creado en Stripe
- [ ] Prueba con tarjeta `4242 4242 4242 4242` exitosa
- [ ] Verificación en Stripe Dashboard (test)
- [ ] Verificación en HubSpot CRM

### Modo PRODUCCIÓN 🚀
- [ ] Cuenta de Stripe verificada y activada
- [ ] Claves LIVE obtenidas de Stripe
- [ ] Variables actualizadas en Vercel (LIVE)
- [ ] Webhook LIVE creado en Stripe
- [ ] Deployment realizado con nuevas variables
- [ ] Prueba de pago real exitosa (opcional)
- [ ] Monitoreo de webhooks activo
- [ ] Todo funcionando sin errores

---

## 🎉 ¡LISTO!

Tu sistema de suscripciones con Stripe está configurado y funcionando.

**Modo TEST**: Para probar sin cargos reales
**Modo PRODUCCIÓN**: Para recibir pagos reales de clientes

**Recuerda**:
- Monitorear los pagos en Stripe Dashboard
- Revisar webhooks para asegurar que se reciben
- Mantener respaldos de tus claves (en lugar seguro)
- Nunca compartir tus claves SECRET

---

**Documentación Creada**: $(date)
**Autor**: Focus English Development Team
**Versión**: 1.0

🔗 **Links Útiles**:
- Stripe Dashboard: https://dashboard.stripe.com
- Vercel Dashboard: https://vercel.com/u7934364978-maker/focusonenglish
- HubSpot CRM: https://app-eu1.hubspot.com/contacts/147592708
- Sitio Web: https://www.focus-on-english.com
