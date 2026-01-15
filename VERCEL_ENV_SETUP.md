# Configuración de Variables de Entorno en Vercel

## 🚨 Error Actual: "Configuración de Stripe incompleta"

Este error aparece porque faltan las variables de entorno de los **Price IDs de Stripe** en Vercel.

---

## 🔧 Solución: Configurar Variables en Vercel

### **Paso 1: Crear Productos y Precios en Stripe**

1. **Accede a Stripe Dashboard:**
   ```
   https://dashboard.stripe.com
   ```

2. **Activa el modo TEST** (toggle "View test data")

3. **Navega a:** Products → Add product

---

### **Paso 2: Crear los 2 Productos**

#### **Producto 1: Focus English - Plan Básico**

**Información del Producto:**
- Nombre: `Focus English - Plan Básico`
- Descripción: `Cursos de preparación para exámenes oficiales (A1-C2)`

**Crear 2 Precios:**

**Precio 1 - Mensual:**
- Modelo de precio: `Recurring`
- Precio: `14.99` EUR
- Intervalo de facturación: `Monthly`
- Guardar y copiar el Price ID (ejemplo: `price_1AbCdEfGhIjKlMnO`)

**Precio 2 - Anual:**
- Modelo de precio: `Recurring`
- Precio: `159.99` EUR
- Intervalo de facturación: `Yearly`
- Guardar y copiar el Price ID

---

#### **Producto 2: Focus English - Plan Premium**

**Información del Producto:**
- Nombre: `Focus English - Plan Premium`
- Descripción: `Todos los cursos + especialización profesional + curso de viajes`

**Crear 2 Precios:**

**Precio 1 - Mensual:**
- Modelo de precio: `Recurring`
- Precio: `29.99` EUR
- Intervalo de facturación: `Monthly`
- Guardar y copiar el Price ID

**Precio 2 - Anual:**
- Modelo de precio: `Recurring`
- Precio: `299.99` EUR
- Intervalo de facturación: `Yearly`
- Guardar y copiar el Price ID

---

### **Paso 3: Copiar los 4 Price IDs**

Deberías tener 4 Price IDs que se ven así:

```
price_1AbCdEfGhIjKlMnO  (Básico Mensual)
price_1XyZaBcDeFgHiJk  (Básico Anual)
price_1QwErTyUiOpAsDf  (Premium Mensual)
price_1ZxCvBnMlKjHgFd  (Premium Anual)
```

---

### **Paso 4: Configurar Variables en Vercel**

1. **Accede a tu proyecto en Vercel:**
   ```
   https://vercel.com/tu-usuario/focusonenglish
   ```

2. **Ve a:** Settings → Environment Variables

3. **Añade estas 4 variables:**

**Variable 1:**
```
Name: STRIPE_PRICE_BASIC_MONTHLY
Value: price_xxx_tu_price_id_aqui
Environment: Production, Preview, Development
```

**Variable 2:**
```
Name: STRIPE_PRICE_BASIC_YEARLY
Value: price_xxx_tu_price_id_aqui
Environment: Production, Preview, Development
```

**Variable 3:**
```
Name: STRIPE_PRICE_PREMIUM_MONTHLY
Value: price_xxx_tu_price_id_aqui
Environment: Production, Preview, Development
```

**Variable 4:**
```
Name: STRIPE_PRICE_PREMIUM_YEARLY
Value: price_xxx_tu_price_id_aqui
Environment: Production, Preview, Development
```

---

### **Paso 5: Verificar Otras Variables de Stripe**

Asegúrate de que también estén configuradas:

```
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

Si faltan, añádelas desde:
- Dashboard → Developers → API keys

---

### **Paso 6: Redeploy**

1. **Ve a:** Deployments
2. **Selecciona** el deployment más reciente
3. **Click en** los tres puntos (⋮)
4. **Click en** "Redeploy"
5. **Espera** que el deployment se complete

---

### **Paso 7: Verificar**

1. **Abre** tu sitio: `https://www.focus-on-english.com/signup`
2. **Selecciona** un plan
3. **Completa** el formulario
4. **Click en** "Suscribirme Ahora"
5. **Verifica** que te redirija a Stripe Checkout (sin error)

---

## 🔍 Verificación Rápida

Para verificar que las variables están configuradas:

1. Ve a Vercel → Settings → Environment Variables
2. Busca estas 4 variables:
   - ✅ `STRIPE_PRICE_BASIC_MONTHLY`
   - ✅ `STRIPE_PRICE_BASIC_YEARLY`
   - ✅ `STRIPE_PRICE_PREMIUM_MONTHLY`
   - ✅ `STRIPE_PRICE_PREMIUM_YEARLY`

3. Verifica que cada una tenga un valor como `price_xxx...`

---

## ❌ Troubleshooting

### Error: "Configuración de Stripe incompleta"

**Causas:**
- ❌ Las variables `STRIPE_PRICE_*` no están configuradas
- ❌ Las variables están vacías
- ❌ Los Price IDs son incorrectos

**Solución:**
1. Verifica en Vercel que las 4 variables estén configuradas
2. Verifica que los valores sean Price IDs válidos (empiezan con `price_`)
3. Redeploy después de añadir las variables

---

### Error: "Invalid price"

**Causas:**
- ❌ El Price ID es incorrecto
- ❌ Estás en modo producción pero usaste Price ID de test

**Solución:**
1. Verifica que el Price ID sea correcto en Stripe Dashboard
2. Asegúrate de usar Price IDs de test en test, y de producción en producción

---

## 📋 Checklist Final

- [ ] Crear 2 productos en Stripe Dashboard
- [ ] Crear 4 precios (2 por producto: mensual y anual)
- [ ] Copiar los 4 Price IDs
- [ ] Configurar las 4 variables `STRIPE_PRICE_*` en Vercel
- [ ] Verificar otras variables de Stripe (`STRIPE_SECRET_KEY`, etc.)
- [ ] Redeploy el proyecto
- [ ] Probar el flujo de signup completo
- [ ] Verificar que redirige a Stripe Checkout

---

## 🎯 Resultado Esperado

Después de configurar las variables:

1. ✅ No más error "Configuración de Stripe incompleta"
2. ✅ Al hacer click en "Suscribirme Ahora" redirige a Stripe Checkout
3. ✅ Stripe Checkout muestra el precio correcto
4. ✅ El checkout muestra el nombre del producto correcto

---

## 📚 Documentación Adicional

Para más detalles, consulta: `STRIPE_SETUP_GUIDE.md`

---

**Última actualización:** 15 de Enero de 2026  
**Versión:** 1.0
