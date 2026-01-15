# 🚨 SOLUCIÓN URGENTE: Error "No such price: 'prod_xxx'"

## ❌ Problema Actual

Estás viendo el error: **"No such price: 'prod_TnZAKDaMzc76SV'"**

### 🔍 Causa

Hay una variable de entorno en Vercel configurada con un **Product ID** (`prod_xxx`) en lugar de un **Price ID** (`price_xxx`).

---

## ✅ SOLUCIÓN RÁPIDA (5 minutos)

### **Opción 1: Eliminar Variables Incorrectas (RECOMENDADO)**

1. **Ir a Vercel Dashboard:**
   ```
   https://vercel.com/[tu-usuario]/focusonenglish
   ```

2. **Settings → Environment Variables**

3. **ELIMINAR estas 4 variables si existen:**
   - `STRIPE_PRICE_BASIC_MONTHLY`
   - `STRIPE_PRICE_BASIC_YEARLY`
   - `STRIPE_PRICE_PREMIUM_MONTHLY`
   - `STRIPE_PRICE_PREMIUM_YEARLY`

4. **Redeploy:**
   - Deployments → Último deployment → ⋮ → Redeploy

5. **Esperar 2-3 minutos** que complete el deploy

6. **Probar nuevamente** en `/signup`

---

### **¿Por qué funciona esto?**

Al eliminar las variables incorrectas, el sistema usará automáticamente el **fallback de price_data** que crea precios dinámicamente. Esto funciona perfectamente para testing y desarrollo.

---

## 🔍 Diagnóstico

Para verificar qué variables están configuradas:

1. **Espera que el deployment termine** (commit: `69a1cfa`)

2. **Visita:**
   ```
   https://www.focus-on-english.com/api/stripe-diagnostics
   ```

3. **Verás algo como:**
   ```json
   {
     "plans": [...],
     "envVars": {
       "priceVars": {
         "basicMonthly": "prod_xxx" ← INCORRECTO (debería ser "NOT_SET")
       }
     }
   }
   ```

---

## ✅ Verificación Post-Solución

Después de eliminar las variables y redeploy:

1. **Visita:** `/api/stripe-diagnostics`
2. **Verifica** que todas las variables muestren `"NOT_SET"`
3. **Prueba** el checkout en `/signup`
4. **Debería funcionar** y redirigir a Stripe Checkout

---

## 📋 Checklist de Solución

- [ ] Ir a Vercel Dashboard
- [ ] Settings → Environment Variables
- [ ] Eliminar las 4 variables `STRIPE_PRICE_*` (si existen)
- [ ] Redeploy el proyecto
- [ ] Esperar que termine el deployment
- [ ] Probar `/signup` nuevamente
- [ ] Verificar que redirige a Stripe Checkout
- [ ] ✅ ¡Funciona!

---

## 🎯 Resultado Esperado

**Antes:**
```
Error: "No such price: 'prod_TnZAKDaMzc76SV'"
```

**Después:**
```
✅ Redirige a Stripe Checkout
✅ Crea suscripción correctamente
✅ Precio se crea dinámicamente
```

---

## 💡 Para Configuración Correcta (Opcional)

Si en el futuro quieres usar Price IDs predefinidos:

1. **Crear productos en Stripe Dashboard**
2. **Copiar Price IDs** (empiezan con `price_`, NO `prod_`)
3. **Configurar variables en Vercel** con los Price IDs correctos
4. **Redeploy**

📚 **Ver:** `STRIPE_SETUP_GUIDE.md` para instrucciones completas

---

## ❓ Preguntas Frecuentes

### **¿Por qué tengo un Product ID en lugar de Price ID?**

Posiblemente:
- Se configuró manualmente y se copió el Product ID en lugar del Price ID
- Se usó un valor de prueba incorrecto

### **¿Funcionará sin Price IDs configurados?**

✅ **SÍ.** El sistema tiene un fallback que crea precios dinámicamente. Es perfecto para development y testing.

### **¿Debería configurar Price IDs eventualmente?**

Para **testing**: No es necesario, el fallback funciona perfectamente.

Para **producción**: Es recomendable pero no obligatorio.

### **¿Cómo sé si las variables están bien configuradas?**

Visita `/api/stripe-diagnostics` después del deployment y verifica:
- Todas las variables deben mostrar `"NOT_SET"` (para usar fallback)
- O todas deben empezar con `price_` (si usas Price IDs)
- **NUNCA** deben empezar con `prod_`

---

## 🚀 Timeline Estimado

| Acción | Tiempo |
|--------|--------|
| Ir a Vercel | 1 min |
| Eliminar variables | 1 min |
| Redeploy | 2-3 min |
| Probar checkout | 1 min |
| **TOTAL** | **5-6 minutos** |

---

## 📞 Soporte

Si después de eliminar las variables el error persiste:

1. Verifica en `/api/stripe-diagnostics` que todas muestren `"NOT_SET"`
2. Verifica que el deployment más reciente (commit `69a1cfa` o posterior) esté activo
3. Limpia caché del navegador (Cmd+Shift+R en Mac, Ctrl+Shift+R en Windows)
4. Prueba en ventana de incógnito

---

**Última actualización:** 15 de Enero de 2026  
**Urgencia:** ALTA  
**Tiempo de solución:** 5 minutos
