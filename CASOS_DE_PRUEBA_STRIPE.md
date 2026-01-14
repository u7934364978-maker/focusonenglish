# 🧪 Casos de Prueba para Stripe

Este documento contiene todos los casos de prueba que debes realizar antes de poner Stripe en producción.

## 📋 ÍNDICE
1. [Pruebas Básicas (TEST)](#pruebas-básicas-test)
2. [Pruebas de Errores (TEST)](#pruebas-de-errores-test)
3. [Pruebas de Webhooks (TEST)](#pruebas-de-webhooks-test)
4. [Pruebas de Producción (LIVE)](#pruebas-de-producción-live)

---

## PRUEBAS BÁSICAS (TEST)

### ✅ Caso 1: Suscripción Básica Exitosa

**Objetivo**: Verificar flujo completo de pago exitoso

**Pasos**:
1. Ir a: https://www.focus-on-english.com/signup
2. Seleccionar plan: **Basic** (€7.99/mes)
3. Llenar formulario:
   ```
   Nombre: Juan Pérez
   Email: juan.perez@test.com
   Teléfono: +34612345678
   Nivel: B1 - Intermedio
   Mensaje: Prueba de suscripción básica
   ```
4. Marcar checkbox de términos
5. Click en "Suscribirme Ahora"
6. Usar tarjeta: `4242 4242 4242 4242`
   - Fecha: 12/26
   - CVC: 123
   - Nombre: Juan Perez
   - Código postal: 28001
7. Completar el pago

**Resultado Esperado**:
- ✅ Redirección a `/success` con mensaje de confirmación
- ✅ Session ID visible en la URL
- ✅ Pago visible en: https://dashboard.stripe.com/test/payments
- ✅ Suscripción creada en: https://dashboard.stripe.com/test/subscriptions
- ✅ Estado: "Active"
- ✅ Próximo pago: En 1 mes
- ✅ Contacto en HubSpot: https://app-eu1.hubspot.com/contacts/147592708
- ✅ Email de confirmación de Stripe recibido

---

### ✅ Caso 2: Suscripción Premium Exitosa

**Objetivo**: Verificar flujo de plan Premium

**Pasos**:
1. Ir a: https://www.focus-on-english.com/signup
2. Seleccionar plan: **Premium** (€19.99/mes)
3. Llenar formulario:
   ```
   Nombre: María García
   Email: maria.garcia@test.com
   Teléfono: +34655443322
   Nivel: C1 - Avanzado
   Mensaje: Quiero acceso completo
   ```
4. Marcar checkbox de términos
5. Click en "Suscribirme Ahora"
6. Usar tarjeta: `4242 4242 4242 4242`
7. Completar el pago

**Resultado Esperado**:
- ✅ Mismos checks que Caso 1
- ✅ Monto: €19.99
- ✅ Plan: Premium visible en Stripe

---

### ✅ Caso 3: Pre-selección de Plan desde URL

**Objetivo**: Verificar que el parámetro `?plan=` funcione

**Pasos**:
1. Ir a: https://www.focus-on-english.com/signup?plan=premium
2. Verificar que el plan "Premium" esté pre-seleccionado
3. Completar formulario y pago

**Resultado Esperado**:
- ✅ Plan Premium pre-seleccionado al cargar
- ✅ Pago exitoso

---

## PRUEBAS DE ERRORES (TEST)

### ❌ Caso 4: Tarjeta Declinada

**Objetivo**: Manejar tarjeta rechazada correctamente

**Pasos**:
1. Ir a: https://www.focus-on-english.com/signup
2. Seleccionar cualquier plan
3. Llenar formulario
4. Usar tarjeta: `4000 0000 0000 0002` (tarjeta declinada)
5. Intentar completar el pago

**Resultado Esperado**:
- ✅ Stripe muestra error: "Your card was declined"
- ✅ Usuario permanece en página de pago
- ✅ No se crea suscripción
- ✅ No se cobra

---

### ❌ Caso 5: Fondos Insuficientes

**Objetivo**: Manejar fondos insuficientes

**Pasos**:
1. Completar formulario
2. Usar tarjeta: `4000 0000 0000 9995`
3. Intentar pagar

**Resultado Esperado**:
- ✅ Error: "Your card has insufficient funds"
- ✅ No se crea suscripción

---

### ❌ Caso 6: Tarjeta Expirada

**Objetivo**: Detectar tarjeta vencida

**Pasos**:
1. Completar formulario
2. Usar tarjeta: `4000 0000 0000 0069`
3. Intentar pagar

**Resultado Esperado**:
- ✅ Error: "Your card has expired"
- ✅ No se crea suscripción

---

### ❌ Caso 7: CVC Incorrecto

**Objetivo**: Validar código de seguridad

**Pasos**:
1. Completar formulario
2. Usar tarjeta: `4000 0000 0000 0127`
3. Intentar pagar

**Resultado Esperado**:
- ✅ Error: "Your card's security code is incorrect"
- ✅ No se crea suscripción

---

### ⚠️ Caso 8: Formulario Incompleto

**Objetivo**: Validar campos requeridos

**Pasos**:
1. Ir a signup
2. Seleccionar plan
3. Dejar campos vacíos:
   - Sin nombre
   - Sin email
4. Intentar enviar

**Resultado Esperado**:
- ✅ Validación HTML5 previene envío
- ✅ Mensaje: "Please fill out this field"
- ✅ No se procede al pago

---

### ⚠️ Caso 9: Sin Plan Seleccionado

**Objetivo**: Requerir selección de plan

**Pasos**:
1. Ir a signup
2. NO seleccionar ningún plan
3. Llenar formulario
4. Click en "Suscribirme"

**Resultado Esperado**:
- ✅ Mensaje de error: "Por favor, selecciona un plan antes de continuar"
- ✅ No se procede al pago

---

### ⚠️ Caso 10: Cancelar Pago en Stripe

**Objetivo**: Manejar cancelación de usuario

**Pasos**:
1. Completar formulario
2. Proceder a pago
3. En página de Stripe, click en "← Back" o cerrar ventana
4. O hacer click en link de cancelación

**Resultado Esperado**:
- ✅ Redirección a: `/planes?canceled=true`
- ✅ No se crea suscripción
- ✅ No se cobra

---

## PRUEBAS DE WEBHOOKS (TEST)

### 🪝 Caso 11: Webhook - Checkout Completado

**Objetivo**: Verificar recepción de evento `checkout.session.completed`

**Pasos**:
1. Completar una suscripción exitosa
2. Ir a: https://dashboard.stripe.com/test/webhooks
3. Seleccionar tu webhook endpoint
4. Ver eventos recibidos

**Resultado Esperado**:
- ✅ Evento `checkout.session.completed` recibido
- ✅ Status: 200 OK
- ✅ Payload contiene:
  - `customer_email`
  - `subscription` ID
  - `metadata` con información del usuario

---

### 🪝 Caso 12: Webhook - Suscripción Creada

**Objetivo**: Verificar evento `customer.subscription.created`

**Pasos**:
1. Completar una suscripción
2. Verificar eventos en webhook

**Resultado Esperado**:
- ✅ Evento `customer.subscription.created` recibido
- ✅ Status: 200 OK
- ✅ Contiene plan_id, customer_id

---

### 🪝 Caso 13: Simular Webhook desde Dashboard

**Objetivo**: Probar webhook manualmente

**Pasos**:
1. Ir a: https://dashboard.stripe.com/test/webhooks
2. Click en tu webhook
3. Tab "Testing"
4. Seleccionar evento: `checkout.session.completed`
5. Click "Send test webhook"

**Resultado Esperado**:
- ✅ Webhook recibe evento
- ✅ Status: 200 OK
- ✅ Ver respuesta en Stripe Dashboard

---

### 🪝 Caso 14: Webhook - Firma Inválida

**Objetivo**: Verificar seguridad de webhook

**Pasos**:
1. Hacer una petición POST manual a tu webhook:
   ```bash
   curl -X POST https://www.focus-on-english.com/api/webhooks/stripe \
     -H "Content-Type: application/json" \
     -H "Stripe-Signature: invalid_signature" \
     -d '{"type": "test.event"}'
   ```

**Resultado Esperado**:
- ✅ Status: 400 Bad Request
- ✅ Error: "Invalid signature"

---

## PRUEBAS DE AUTENTICACIÓN 3D SECURE (TEST)

### 🔐 Caso 15: 3D Secure Exitoso

**Objetivo**: Simular autenticación 3DS exitosa

**Pasos**:
1. Completar formulario
2. Usar tarjeta: `4000 0027 6000 3184`
3. Completar pago
4. Stripe mostrará modal de autenticación 3D Secure
5. Click en "Complete authentication"

**Resultado Esperado**:
- ✅ Autenticación completada
- ✅ Pago procesado
- ✅ Suscripción creada

---

### 🔐 Caso 16: 3D Secure Fallido

**Objetivo**: Simular fallo en 3DS

**Pasos**:
1. Completar formulario
2. Usar tarjeta: `4000 0027 6000 3184`
3. En modal 3DS, click en "Fail authentication"

**Resultado Esperado**:
- ✅ Pago rechazado
- ✅ Error mostrado
- ✅ No se crea suscripción

---

## PRUEBAS DE PRODUCCIÓN (LIVE)

⚠️ **ADVERTENCIA**: Estas pruebas usan dinero real

### 💳 Caso 17: Primera Suscripción Real

**Objetivo**: Verificar todo funcione en producción

**Pre-requisitos**:
- Claves LIVE configuradas en Vercel
- Webhook LIVE configurado en Stripe
- Deployment con nuevas variables

**Pasos**:
1. Ir a: https://www.focus-on-english.com/signup
2. Seleccionar plan Basic (€7.99)
3. Usar tu propia tarjeta real
4. Completar pago

**Resultado Esperado**:
- ✅ Pago exitoso
- ✅ Redirección a /success
- ✅ Pago en: https://dashboard.stripe.com/payments (SIN /test/)
- ✅ Suscripción en: https://dashboard.stripe.com/subscriptions
- ✅ Email de confirmación recibido

**Post-prueba**:
- Cancelar suscripción inmediatamente si solo es prueba
- O hacer refund del pago

---

### 💳 Caso 18: Cancelar Suscripción

**Objetivo**: Verificar cancelación funciona

**Pasos**:
1. Desde Stripe Dashboard: https://dashboard.stripe.com/subscriptions
2. Click en la suscripción
3. Actions → "Cancel subscription"
4. Confirmar cancelación

**Resultado Esperado**:
- ✅ Suscripción cancelada
- ✅ Estado: "Canceled"
- ✅ No se cobrará próximo mes

---

### 💳 Caso 19: Hacer Refund

**Objetivo**: Devolver pago a cliente

**Pasos**:
1. Ir a: https://dashboard.stripe.com/payments
2. Click en el pago
3. Click en "Refund payment"
4. Monto: Full refund
5. Confirmar

**Resultado Esperado**:
- ✅ Refund procesado
- ✅ Dinero devuelto en 5-10 días
- ✅ Estado: "Refunded"

---

## 📊 CHECKLIST DE VERIFICACIÓN FINAL

### Modo TEST
- [ ] Caso 1: Suscripción Basic exitosa
- [ ] Caso 2: Suscripción Premium exitosa
- [ ] Caso 3: Pre-selección de plan funciona
- [ ] Caso 4: Tarjeta declinada manejada
- [ ] Caso 5: Fondos insuficientes manejados
- [ ] Caso 6: Tarjeta expirada detectada
- [ ] Caso 7: CVC incorrecto validado
- [ ] Caso 8: Formulario incompleto validado
- [ ] Caso 9: Sin plan seleccionado validado
- [ ] Caso 10: Cancelación manejada
- [ ] Caso 11: Webhook checkout.session.completed
- [ ] Caso 12: Webhook subscription.created
- [ ] Caso 13: Test webhook desde dashboard
- [ ] Caso 14: Firma inválida rechazada
- [ ] Caso 15: 3D Secure exitoso
- [ ] Caso 16: 3D Secure fallido

### Modo PRODUCCIÓN
- [ ] Variables LIVE configuradas en Vercel
- [ ] Webhook LIVE configurado en Stripe
- [ ] Deployment realizado
- [ ] Caso 17: Primera suscripción real
- [ ] Caso 18: Cancelación funciona
- [ ] Caso 19: Refund funciona

---

## 🚨 REPORTE DE ERRORES

Si encuentras algún error durante las pruebas:

1. **Captura de pantalla** del error
2. **URL** donde ocurrió
3. **Pasos** para reproducir
4. **Consola del navegador** (F12 → Console)
5. **Logs de Vercel**: https://vercel.com/u7934364978-maker/focusonenglish/logs
6. **Logs de Stripe**: https://dashboard.stripe.com/logs

---

## ✅ CRITERIOS DE ÉXITO

Tu integración de Stripe está **LISTA PARA PRODUCCIÓN** cuando:

1. ✅ Todos los casos de prueba en TEST pasan
2. ✅ Webhooks reciben eventos correctamente
3. ✅ Errores se manejan gracefully
4. ✅ HubSpot se actualiza con información de clientes
5. ✅ Emails de confirmación se envían
6. ✅ Variables LIVE configuradas
7. ✅ Al menos 1 prueba real exitosa (Caso 17)
8. ✅ Cancelación y refunds funcionan

---

**Documentación Creada**: 2026-01-14
**Última Actualización**: 2026-01-14
**Versión**: 1.0

📧 **Soporte**: Si necesitas ayuda, consulta GUIA_STRIPE_TEST_Y_PRODUCCION.md
