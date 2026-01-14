# 🚀 Configuración Rápida: Stripe Test → Producción

**⏱️ Tiempo estimado: 30 minutos**

Esta guía te lleva desde cero hasta tener Stripe funcionando en modo test y producción.

---

## 📋 FASE 1: CONFIGURACIÓN INICIAL (10 min)

### Paso 1: Crear Cuenta de Stripe (si no tienes)

1. Ir a: https://dashboard.stripe.com/register
2. Registrarte con tu email
3. Verificar tu email
4. Completar perfil básico

### Paso 2: Obtener Claves de TEST

1. Ir a: https://dashboard.stripe.com/test/apikeys
2. **Asegúrate** de que el toggle **"View test data"** esté activado (esquina superior derecha)
3. Copiar:
   - **Publishable key**: Empieza con `pk_test_...`
   - **Secret key**: Click en "Reveal test key" → Empieza con `sk_test_...`

### Paso 3: Configurar Variables en Vercel

1. Ir a: https://vercel.com/u7934364978-maker/focusonenglish/settings/environment-variables

2. Añadir estas 3 variables:

   **Variable 1**:
   ```
   Name: STRIPE_SECRET_KEY
   Value: sk_test_[TU_CLAVE_AQUÍ]
   Environments: ✓ Production ✓ Preview ✓ Development
   ```

   **Variable 2**:
   ```
   Name: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
   Value: pk_test_[TU_CLAVE_AQUÍ]
   Environments: ✓ Production ✓ Preview ✓ Development
   ```

   **Variable 3**:
   ```
   Name: NEXT_PUBLIC_SITE_URL
   Value: https://www.focus-on-english.com
   Environments: ✓ Production ✓ Preview ✓ Development
   ```

3. Click en **"Save"** para cada una

### Paso 4: Configurar Webhook (TEST)

1. Ir a: https://dashboard.stripe.com/test/webhooks
2. Click en **"Add endpoint"**
3. Configurar:
   ```
   Endpoint URL: https://www.focus-on-english.com/api/webhooks/stripe
   Description: Focus English - Webhooks de suscripción
   ```
4. En **"Events to send"**, seleccionar:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Click en **"Add endpoint"**
6. Copiar el **"Signing secret"** (empieza con `whsec_...`)
7. Volver a Vercel y añadir:
   ```
   Name: STRIPE_WEBHOOK_SECRET
   Value: whsec_[TU_SECRET_AQUÍ]
   Environments: ✓ Production ✓ Preview ✓ Development
   ```

### Paso 5: Re-deploy

1. Ir a: https://vercel.com/u7934364978-maker/focusonenglish
2. Tab **"Deployments"**
3. Click en los **3 puntos** del último deployment
4. Click en **"Redeploy"**
5. Esperar ~1-2 minutos
6. Verificar que sea exitoso ✅

---

## 🧪 FASE 2: PRUEBAS EN MODO TEST (10 min)

### Prueba 1: Suscripción Básica

1. **Abrir**: https://www.focus-on-english.com/signup

2. **Seleccionar**: Plan "Basic" (€7.99/mes)

3. **Llenar formulario**:
   ```
   Nombre: Test Usuario
   Email: test@tudominio.com
   Teléfono: +34612345678
   Nivel: B1 - Intermedio
   ```

4. **Marcar** checkbox de términos

5. **Click** en "Suscribirme Ahora"

6. **En Stripe Checkout**, usar tarjeta de prueba:
   ```
   Número: 4242 4242 4242 4242
   Fecha: 12/26
   CVC: 123
   Nombre: Test User
   CP: 28001
   ```

7. **Click** en "Subscribe"

8. **Verificar**:
   - ✅ Redirección a `/success`
   - ✅ Mensaje: "¡Pago Exitoso!"

### Prueba 2: Verificar en Stripe

1. **Ir a**: https://dashboard.stripe.com/test/payments
   - ✅ Debería aparecer el pago de €7.99

2. **Ir a**: https://dashboard.stripe.com/test/subscriptions
   - ✅ Debería aparecer la suscripción
   - ✅ Estado: "Active"

3. **Ir a**: https://dashboard.stripe.com/test/webhooks
   - Click en tu webhook
   - ✅ Debería haber eventos recibidos
   - ✅ Status: 200 OK

### Prueba 3: Verificar en HubSpot

1. **Ir a**: https://app-eu1.hubspot.com/contacts/147592708
2. **Buscar**: test@tudominio.com
3. ✅ Debería aparecer el contacto
4. ✅ Con información del plan seleccionado

---

## 🎯 FASE 3: PRUEBAS DE ERRORES (5 min)

### Prueba de Tarjeta Rechazada

1. Ir a signup
2. Llenar formulario
3. Usar tarjeta: `4000 0000 0000 0002`
4. Intentar pagar
5. ✅ Debería mostrar: "Your card was declined"
6. ✅ No se crea suscripción

### Prueba de Cancelación

1. Ir a signup
2. Llenar formulario
3. Proceder a Stripe
4. Click en "← Back" (esquina superior izquierda)
5. ✅ Debería redirigir a `/planes?canceled=true`
6. ✅ No se cobra

---

## 🚀 FASE 4: MIGRACIÓN A PRODUCCIÓN (5 min)

### ⚠️ IMPORTANTE: Solo hacer esto cuando estés listo para recibir pagos REALES

### Paso 1: Activar Cuenta de Stripe

1. Ir a: https://dashboard.stripe.com/settings/account
2. Completar:
   - Información del negocio
   - Cuenta bancaria para recibir pagos
   - Documentación si es requerida
3. Enviar para revisión
4. ⏱️ Esperar aprobación (24-48 horas)

### Paso 2: Obtener Claves LIVE

1. Ir a: https://dashboard.stripe.com/apikeys
2. **DESACTIVAR** el toggle "View test data"
3. Deberías ver: "Production API keys"
4. Copiar:
   - Publishable key: `pk_live_...`
   - Secret key: `sk_live_...`

### Paso 3: Actualizar Variables en Vercel

1. Ir a: https://vercel.com/u7934364978-maker/focusonenglish/settings/environment-variables

2. **Editar** (no añadir nuevo) cada variable:

   **STRIPE_SECRET_KEY**:
   - Click en **3 puntos** → **Edit**
   - Reemplazar `sk_test_...` por `sk_live_...`
   - Save

   **NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY**:
   - Click en **3 puntos** → **Edit**
   - Reemplazar `pk_test_...` por `pk_live_...`
   - Save

### Paso 4: Crear Webhook LIVE

1. Ir a: https://dashboard.stripe.com/webhooks (**sin** /test/)
2. **ASEGÚRATE** de que "View test data" esté **desactivado**
3. Click en **"Add endpoint"**
4. Configurar:
   ```
   Endpoint URL: https://www.focus-on-english.com/api/webhooks/stripe
   Description: Focus English - Webhooks LIVE
   ```
5. Seleccionar los mismos eventos que en test
6. Click en **"Add endpoint"**
7. Copiar nuevo **"Signing secret"** (será diferente)
8. Actualizar en Vercel:
   ```
   STRIPE_WEBHOOK_SECRET = whsec_[NUEVO_SECRET_LIVE]
   ```

### Paso 5: Re-deploy Final

1. Ir a Vercel Deployments
2. Redeploy
3. Esperar a que termine
4. ✅ ¡Listo para producción!

---

## ✅ CHECKLIST FINAL

### Modo TEST Completo
- [ ] ✅ Claves TEST configuradas en Vercel
- [ ] ✅ Webhook TEST creado y funcionando
- [ ] ✅ Prueba de pago exitosa con 4242...
- [ ] ✅ Pago visible en Stripe Dashboard (test)
- [ ] ✅ Suscripción creada correctamente
- [ ] ✅ Webhook recibe eventos (200 OK)
- [ ] ✅ Contacto en HubSpot creado
- [ ] ✅ Prueba de tarjeta rechazada funciona
- [ ] ✅ Cancelación manejada correctamente

### Modo PRODUCCIÓN (cuando estés listo)
- [ ] ✅ Cuenta de Stripe verificada
- [ ] ✅ Claves LIVE obtenidas
- [ ] ✅ Variables actualizadas en Vercel
- [ ] ✅ Webhook LIVE creado
- [ ] ✅ Re-deploy realizado
- [ ] ✅ (Opcional) Prueba real con tarjeta propia

---

## 🎉 ¡FELICITACIONES!

Tu sistema de suscripciones con Stripe está configurado y funcionando.

### 📊 Próximos Pasos

1. **Monitorear Dashboard**:
   - Pagos: https://dashboard.stripe.com/payments
   - Suscripciones: https://dashboard.stripe.com/subscriptions

2. **Configurar Notificaciones**:
   - Ir a: https://dashboard.stripe.com/settings/notifications
   - Añadir tu email para alertas importantes

3. **Revisar Facturación**:
   - Stripe cobra 1.5% + €0.25 por transacción en Europa
   - Ver detalles: https://stripe.com/es/pricing

4. **Configurar Emails** (futuro):
   - Personalizar emails de confirmación
   - Añadir tu logo
   - Personalizar mensajes

---

## 🆘 AYUDA RÁPIDA

### Si algo no funciona:

1. **Verificar variables en Vercel**:
   - ¿Están todas configuradas?
   - ¿Están en "Production"?

2. **Verificar webhook**:
   - ¿El endpoint URL es correcto?
   - ¿Los eventos están seleccionados?
   - ¿El signing secret es correcto?

3. **Ver logs**:
   - Vercel: https://vercel.com/u7934364978-maker/focusonenglish/logs
   - Stripe: https://dashboard.stripe.com/logs

4. **Probar script de verificación**:
   ```bash
   node test-stripe-connection.js
   ```

5. **Consultar documentación**:
   - `GUIA_STRIPE_TEST_Y_PRODUCCION.md` (guía completa)
   - `CASOS_DE_PRUEBA_STRIPE.md` (todos los casos de prueba)

---

## 📞 SOPORTE

**Stripe**:
- Chat: https://support.stripe.com
- Docs: https://stripe.com/docs

**Focus English**:
- Documentación: Ver archivos .md en el proyecto
- Email: info@focusenglish.com

---

**Creado**: 2026-01-14
**Última actualización**: 2026-01-14

✅ **¡Todo listo para recibir pagos!**
