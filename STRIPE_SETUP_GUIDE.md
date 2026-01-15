# Guía de Configuración de Stripe - Planes de Suscripción

Esta guía te ayudará a configurar los productos y precios de suscripción en Stripe para la plataforma Focus English.

---

## 📋 **Índice**

1. [Resumen de Planes](#resumen-de-planes)
2. [Configuración en Stripe Dashboard](#configuración-en-stripe-dashboard)
3. [Variables de Entorno](#variables-de-entorno)
4. [Testing](#testing)
5. [Producción](#producción)

---

## 📊 **Resumen de Planes**

Focus English ofrece 4 planes de suscripción:

| Plan ID | Nombre | Precio | Período |
|---------|--------|--------|---------|
| `basic-monthly` | Básico Mensual | €14.99 | Mensual |
| `basic-yearly` | Básico Anual | €159.99 | Anual |
| `premium-monthly` | Premium Mensual | €29.99 | Mensual |
| `premium-yearly` | Premium Anual | €299.99 | Anual |

---

## 🔧 **Configuración en Stripe Dashboard**

### **Paso 1: Acceder al Dashboard de Stripe**

1. Ve a [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Asegúrate de estar en **modo Test** (toggle "View test data" activado)
3. Navega a **Products** → **Add product**

---

### **Paso 2: Crear Productos**

Crea 2 productos principales:

#### **Producto 1: Focus English - Plan Básico**

```
Nombre: Focus English - Plan Básico
Descripción: Cursos de preparación para exámenes oficiales (A1-C2)
```

**Precios:**
- **Precio Mensual:**
  - Modelo de precio: Recurring (Recurrente)
  - Precio: €14.99 EUR
  - Periodo de facturación: Monthly (Mensual)
  - ID sugerido: `basic_monthly`
  
- **Precio Anual:**
  - Modelo de precio: Recurring (Recurrente)
  - Precio: €159.99 EUR
  - Periodo de facturación: Yearly (Anual)
  - ID sugerido: `basic_yearly`

#### **Producto 2: Focus English - Plan Premium**

```
Nombre: Focus English - Plan Premium
Descripción: Todos los cursos + especialización profesional + curso de viajes
```

**Precios:**
- **Precio Mensual:**
  - Modelo de precio: Recurring (Recurrente)
  - Precio: €29.99 EUR
  - Periodo de facturación: Monthly (Mensual)
  - ID sugerido: `premium_monthly`
  
- **Precio Anual:**
  - Modelo de precio: Recurring (Recurrente)
  - Precio: €299.99 EUR
  - Periodo de facturación: Yearly (Anual)
  - ID sugerido: `premium_yearly`

---

### **Paso 3: Copiar Price IDs**

Después de crear cada precio, Stripe te dará un **Price ID** que se ve así:

```
price_1AbCdEfGhIjKlMnO
```

**Importante:** Necesitarás estos 4 Price IDs para configurar las variables de entorno.

---

## ⚙️ **Variables de Entorno**

### **Archivo: `.env.local`**

Crea o actualiza tu archivo `.env.local` con los siguientes valores:

```bash
# Stripe Configuration (TEST MODE)
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE

# Stripe Webhook Secret
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE

# Stripe Price IDs (copiar desde Stripe Dashboard)
STRIPE_PRICE_BASIC_MONTHLY=price_xxx_basic_monthly
STRIPE_PRICE_BASIC_YEARLY=price_xxx_basic_yearly
STRIPE_PRICE_PREMIUM_MONTHLY=price_xxx_premium_monthly
STRIPE_PRICE_PREMIUM_YEARLY=price_xxx_premium_yearly

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### **Dónde obtener cada variable:**

1. **STRIPE_SECRET_KEY** y **NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:**
   - Dashboard → Developers → API keys
   - Copia tanto la "Secret key" como la "Publishable key"

2. **STRIPE_WEBHOOK_SECRET:**
   - Dashboard → Developers → Webhooks → Add endpoint
   - URL: `https://tu-dominio.com/api/webhooks/stripe`
   - Eventos a escuchar:
     - `checkout.session.completed`
     - `checkout.session.expired`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
   - Copia el "Signing secret"

3. **Price IDs:**
   - Dashboard → Products → [Tu producto] → Prices
   - Copia cada Price ID (empieza con `price_`)

---

## 🧪 **Testing**

### **Probar Flujo de Suscripción:**

1. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

2. **Navegar a la página de planes:**
   ```
   http://localhost:3000/planes
   ```

3. **Seleccionar un plan y completar el formulario**

4. **Usar tarjetas de prueba de Stripe:**
   - Tarjeta exitosa: `4242 4242 4242 4242`
   - Fecha: Cualquier fecha futura
   - CVC: Cualquier 3 dígitos
   - ZIP: Cualquier 5 dígitos

5. **Verificar en Stripe Dashboard:**
   - Dashboard → Payments → Buscar el pago de prueba
   - Dashboard → Customers → Verificar que se creó el cliente
   - Dashboard → Subscriptions → Verificar que se creó la suscripción

---

## 🔄 **Webhook Testing Local**

Para probar webhooks en local, usa **Stripe CLI:**

### **Instalar Stripe CLI:**

```bash
# macOS
brew install stripe/stripe-cli/stripe

# Linux
# Descargar desde: https://github.com/stripe/stripe-cli/releases

# Windows
# Descargar desde: https://github.com/stripe/stripe-cli/releases
```

### **Configurar y ejecutar:**

```bash
# Login en Stripe
stripe login

# Redirigir webhooks a tu localhost
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Esto te dará un webhook secret (whsec_xxx) que debes copiar a .env.local
```

### **Probar un evento:**

```bash
# Simular evento de checkout completado
stripe trigger checkout.session.completed
```

---

## 🚀 **Producción**

### **Paso 1: Cambiar a Modo Producción en Stripe**

1. En Stripe Dashboard, desactiva "View test data"
2. Crea los mismos productos y precios en modo **producción**
3. Copia los nuevos Price IDs de producción

### **Paso 2: Configurar Variables de Entorno en Vercel**

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Añade todas las variables con los valores de **producción**:
   ```
   STRIPE_SECRET_KEY=sk_live_YOUR_PRODUCTION_KEY
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_PRODUCTION_KEY
   STRIPE_WEBHOOK_SECRET=whsec_PRODUCTION_WEBHOOK_SECRET
   STRIPE_PRICE_BASIC_MONTHLY=price_xxx_production
   STRIPE_PRICE_BASIC_YEARLY=price_xxx_production
   STRIPE_PRICE_PREMIUM_MONTHLY=price_xxx_production
   STRIPE_PRICE_PREMIUM_YEARLY=price_xxx_production
   NEXT_PUBLIC_SITE_URL=https://www.focus-on-english.com
   ```

4. Redeploy el proyecto

### **Paso 3: Configurar Webhook en Producción**

1. Dashboard → Developers → Webhooks → Add endpoint
2. URL: `https://www.focus-on-english.com/api/webhooks/stripe`
3. Selecciona los mismos eventos que en test
4. Copia el nuevo "Signing secret" y actualiza `STRIPE_WEBHOOK_SECRET` en Vercel

---

## 📊 **Monitoreo**

### **Dashboard de Stripe:**

Revisa regularmente:

- **Subscriptions:** Número de suscripciones activas
- **Revenue:** Ingresos recurrentes mensuales (MRR)
- **Churn Rate:** Tasa de cancelación
- **Failed Payments:** Pagos fallidos que requieren atención

### **Métricas Clave:**

- **MRR (Monthly Recurring Revenue):** Ingresos mensuales recurrentes
- **ARR (Annual Recurring Revenue):** Ingresos anuales recurrentes
- **LTV (Lifetime Value):** Valor de vida del cliente
- **Churn Rate:** Porcentaje de cancelaciones

---

## ❓ **Troubleshooting**

### **Error: "Stripe Price ID no configurado"**

✅ **Solución:** Verifica que todas las variables `STRIPE_PRICE_*` estén configuradas en `.env.local`

### **Error: "Webhook signature verification failed"**

✅ **Solución:** Verifica que `STRIPE_WEBHOOK_SECRET` sea correcto y esté actualizado

### **El pago se procesa pero no se crea la suscripción**

✅ **Solución:** 
- Verifica que el webhook esté configurado correctamente
- Revisa los logs en Stripe Dashboard → Developers → Webhooks → [Tu endpoint]
- Verifica que el evento `checkout.session.completed` esté habilitado

### **Los Price IDs no coinciden**

✅ **Solución:** 
- Asegúrate de estar en el mismo modo (test/producción) en código y dashboard
- Verifica que copiaste los Price IDs correctos desde Stripe

---

## 📚 **Recursos Adicionales**

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Stripe Testing Cards](https://stripe.com/docs/testing)
- [Stripe Webhooks Guide](https://stripe.com/docs/webhooks)
- [Stripe Subscriptions](https://stripe.com/docs/billing/subscriptions/overview)

---

## 🔐 **Seguridad**

⚠️ **NUNCA** commits las siguientes claves en el repositorio:
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- Cualquier otra clave secreta

✅ **Siempre** usa variables de entorno para almacenar claves sensibles

---

**Última actualización:** 15 de Enero de 2026  
**Versión:** 2.0 (Nueva estructura de planes)
