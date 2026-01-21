# 🌊 DEPLOY EN DIGITAL OCEAN APP PLATFORM - GUÍA COMPLETA

## 💰 POR QUÉ DIGITAL OCEAN

- ✅ **$200 de crédito gratis** por 60 días (para nuevas cuentas)
- ✅ **Muy confiable** - Infraestructura profesional
- ✅ **Fácil de usar** - Interfaz simple
- ✅ **Scaling automático**
- ✅ **Compatible con Next.js 15**
- ✅ **PostgreSQL incluido**
- ✅ **SSL automático**

**Después del crédito:** $5/mes para apps básicas

---

## 📋 PASO A PASO (15 MINUTOS)

### **PASO 1: Crear Cuenta en Digital Ocean (3 min)**

1. Ve a: **https://www.digitalocean.com/**
2. Click en **"Sign Up"**
3. **IMPORTANTE**: Usa un email nuevo si quieres el crédito de $200
4. Opciones de registro:
   - Email y contraseña
   - O "Continue with GitHub" (recomendado)

5. **Verificar Email** - Revisa tu bandeja de entrada
6. **Añadir Método de Pago**:
   - Tarjeta de crédito/débito
   - O PayPal
   - **No te cobrarán** - Solo para verificación
   - **Recibirás $200 de crédito automáticamente**

7. ✅ Cuenta creada

---

### **PASO 2: Crear Nueva App (2 min)**

1. En el Dashboard de Digital Ocean, busca el menú lateral izquierdo
2. Click en **"Apps"** (icono de cohete 🚀)
3. Click en el botón azul **"Create App"**
4. Selecciona **"GitHub"** como source

---

### **PASO 3: Conectar GitHub (2 min)**

1. Click en **"Manage Access"** o **"Connect to GitHub"**
2. Autoriza Digital Ocean para acceder a tus repositorios
3. Opciones:
   - **All repositories** (todos los repos)
   - **Only select repositories** (recomendado)
     - Selecciona: `focusonenglish`
4. Click en **"Install & Authorize"**
5. Digital Ocean se conectará a tu GitHub

---

### **PASO 4: Seleccionar Repositorio (1 min)**

1. En la pantalla "Create App from GitHub":
2. **Source**: GitHub
3. **Repository**: Selecciona `u7934364978-maker/focusonenglish`
4. **Branch**: `main`
5. **Source Directory**: `/` (dejar por defecto)
6. **Autodeploy**: ✅ Activado (recomendado)
   - Deploy automático en cada push
7. Click en **"Next"**

---

### **PASO 5: Configurar Recursos (2 min)**

Digital Ocean detectará automáticamente tu app Next.js:

#### **App Detected:**
```
✓ Next.js application detected
```

#### **Resource Configuration:**

**Web Service (focusonenglish):**
- **Name**: focusonenglish
- **Environment Variables**: (las añadiremos después)
- **Build Command**: 
  ```bash
  npm install && npm run build
  ```
- **Run Command**:
  ```bash
  npm start
  ```
- **HTTP Port**: 3000 (automático)

**Resources:**
- **Size**: Basic (512 MB RAM, 1 vCPU) - **$5/mes**
- **Instance Count**: 1

Click en **"Next"**

---

### **PASO 6: Añadir Variables de Entorno (5 min)**

1. En la sección **"Environment Variables"**
2. Click en **"Edit"** o **"Add Variable"**
3. Añade estas 6 variables:

```bash
# Variable 1
Key: NEXTAUTH_SECRET
Value: QWS4m1S6L2jQdxM2K8wDX8MDEfTdm7I12VPuCvkyZOk=
Encrypt: ✅ Yes

# Variable 2
Key: NEXTAUTH_URL
Value: https://focusonenglish-xxxxx.ondigitalocean.app
(Nota: Esto lo actualizarás después del deploy)
Encrypt: ❌ No

# Variable 3
Key: NEXT_PUBLIC_SUPABASE_URL
Value: [tu_url_de_supabase]
Encrypt: ❌ No (las variables NEXT_PUBLIC_ deben ser públicas)

# Variable 4
Key: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [tu_anon_key]
Encrypt: ❌ No

# Variable 5
Key: SUPABASE_SERVICE_ROLE_KEY
Value: [tu_service_role_key]
Encrypt: ✅ Yes (esta es secreta)

# Variable 6
Key: OPENAI_API_KEY
Value: [tu_openai_api_key]
Encrypt: ✅ Yes
```

**Importante sobre "Encrypt":**
- ✅ **Yes**: Para variables secretas (API keys, tokens)
- ❌ **No**: Para variables públicas (`NEXT_PUBLIC_*`, URLs)

4. Click en **"Save"**
5. Click en **"Next"**

---

### **PASO 7: Configurar App Info (1 min)**

1. **App Name**: focusonenglish (o el que prefieras)
2. **Region**: 
   - Selecciona el más cercano a tus usuarios
   - **New York** (Estados Unidos Este)
   - **Frankfurt** (Europa)
   - **Singapore** (Asia)
3. Click en **"Next"**

---

### **PASO 8: Revisar y Deploy (1 min)**

1. Revisa el resumen:
   ```
   App Name: focusonenglish
   Region: New York
   Resources: 1 x Basic ($5/month)
   Monthly Cost: $5 (cubierto por tus $200 de crédito)
   ```

2. Click en el botón azul **"Create Resources"**

---

### **PASO 9: Esperar el Build (5-8 min)**

Digital Ocean iniciará el deployment:

```
⏳ Building...
   → Installing dependencies (npm install)
   → Building Next.js (npm run build)
   → Creating container
   → Deploying to region

✅ Deployed successfully
```

**Progreso visual:**
- Verás logs en tiempo real
- Barra de progreso
- Estado de cada paso

**Tiempo estimado: 5-8 minutos**

---

### **PASO 10: Obtener tu URL**

Cuando el deploy termine:

1. Verás un mensaje: **"Your app is live!"**
2. Tu URL será algo como:
   ```
   https://focusonenglish-xxxxx.ondigitalocean.app
   ```
3. **Copia esta URL**

---

### **PASO 11: Actualizar NEXTAUTH_URL (2 min)**

1. En Digital Ocean, ve a tu app "focusonenglish"
2. Click en la pestaña **"Settings"**
3. Scroll hasta **"App-Level Environment Variables"**
4. Busca `NEXTAUTH_URL`
5. Click en el **lápiz (✏️)** para editar
6. Cambia el valor a tu URL real:
   ```
   https://focusonenglish-xxxxx.ondigitalocean.app
   ```
7. **Save**
8. Digital Ocean hará un **redeploy automático** (3-5 min)

---

### **PASO 12: Verificar que Funciona**

1. Accede a tu URL: `https://focusonenglish-xxxxx.ondigitalocean.app`
2. ✅ **Deberías ver tu landing page de Focus English**
3. ✅ **Sin errores**
4. ✅ **Todo funcionando**

---

## 🎯 RUTAS PARA PROBAR

```
✅ https://tu-app.ondigitalocean.app/
✅ https://tu-app.ondigitalocean.app/cursos
✅ https://tu-app.ondigitalocean.app/aula
✅ https://tu-app.ondigitalocean.app/test-nivel
✅ https://tu-app.ondigitalocean.app/cuenta/login
```

---

## 🔄 DEPLOY AUTOMÁTICO

**Desde ahora, cada vez que hagas `git push`:**

1. Digital Ocean detecta el cambio
2. Inicia build automático (5-8 min)
3. Deploy a producción
4. ✅ **Cambios live automáticamente**

---

## 🌐 DOMINIO PERSONALIZADO (OPCIONAL)

Si tienes un dominio propio:

1. Digital Ocean → Tu app → **"Settings"**
2. Click en **"Domains"**
3. Click en **"Add Domain"**
4. Ingresa tu dominio: `focusenglish.com`
5. Digital Ocean te dará:
   ```
   CNAME: focusonenglish-xxxxx.ondigitalocean.app
   ```
6. Añade este CNAME en tu proveedor DNS:
   ```
   Name: @ (o www)
   Type: CNAME
   Value: focusonenglish-xxxxx.ondigitalocean.app
   TTL: 3600
   ```
7. **SSL automático** en 5-10 minutos

---

## 💰 PRICING

### **Plan Basic ($5/mes):**
- 512 MB RAM
- 1 vCPU
- 1 GB outbound transfer
- ✅ **Cubierto por tu crédito de $200**

### **Plan Professional ($12/mes):**
- 1 GB RAM
- 1 vCPU
- 2.5 GB outbound transfer
- Auto-scaling

### **Crédito de $200:**
- **Válido por 60 días**
- Cubre: **40 meses** de plan Basic
- O: **16 meses** de plan Professional

---

## 🔧 TROUBLESHOOTING

### **Build Failed:**

**Error común:** "npm run build failed"

**Solución:**
1. Ve a tu app → **"Activity"** → Click en el deployment fallido
2. Lee los **Build Logs**
3. Busca errores rojos
4. Verifica que las variables de entorno estén correctas

---

### **500 Error:**

**Problema:** Variables de entorno incorrectas

**Solución:**
1. Settings → **"App-Level Environment Variables"**
2. Verifica cada variable
3. Asegúrate de que `NEXTAUTH_URL` tenga tu URL de Digital Ocean
4. Redeploy: Settings → **"Force Rebuild and Deploy"**

---

### **Port Binding Error:**

**Problema:** App no escucha en el puerto correcto

**Solución:**
Digital Ocean usa variable `PORT` automática. Verifica en `package.json`:
```json
"scripts": {
  "start": "next start -p ${PORT:-3000}"
}
```

---

## 📊 MONITOREAR TU APP

### **Logs en Tiempo Real:**
1. Tu app → **"Runtime Logs"**
2. Verás logs del servidor en vivo
3. Útil para debugging

### **Métricas:**
1. Tu app → **"Insights"**
2. CPU, RAM, Bandwidth usage
3. Request rate
4. Response times

### **Alerts:**
1. Tu app → **"Settings"** → **"Alerts"**
2. Configura alertas para:
   - CPU > 80%
   - RAM > 80%
   - App crashed

---

## 🚀 FEATURES ADICIONALES

### **Databases:**
1. Apps → Click en **"Create"** → **"Database"**
2. **PostgreSQL**, **MySQL**, **MongoDB**, **Redis**
3. Se conecta automáticamente a tu app

### **Scaling:**
1. Settings → **"Resources"**
2. Aumenta RAM/CPU
3. O añade más instancias (horizontal scaling)

### **Review Apps:**
1. Settings → **"App-Level Environment Variables"**
2. Activa **"Review Apps"**
3. Cada PR en GitHub = deploy preview automático

---

## 📋 CHECKLIST DE DEPLOY

- [ ] Cuenta de Digital Ocean creada
- [ ] $200 de crédito aplicado
- [ ] GitHub conectado
- [ ] App creada desde repositorio `focusonenglish`
- [ ] 6 variables de entorno añadidas
- [ ] Build completado exitosamente
- [ ] URL de producción obtenida
- [ ] `NEXTAUTH_URL` actualizada
- [ ] App funcionando correctamente
- [ ] Rutas principales probadas

---

## 🎉 ¡DEPLOY COMPLETADO!

Tu app **Focus English** ahora está en producción en Digital Ocean.

**Ventajas que tienes:**
- ✅ $200 de crédito (40 meses gratis)
- ✅ Deploy automático en cada push
- ✅ SSL incluido
- ✅ Scaling cuando lo necesites
- ✅ Monitoreo y logs
- ✅ Infraestructura profesional

---

## 📚 RECURSOS ÚTILES

- **Dashboard**: https://cloud.digitalocean.com/
- **Documentación**: https://docs.digitalocean.com/products/app-platform/
- **Community**: https://www.digitalocean.com/community/
- **Soporte**: Incluido con tu cuenta

---

## 💡 TIPS PRO

1. **Activa Review Apps** para preview deploys de PRs
2. **Configura alertas** para monitorear problemas
3. **Usa la CLI** para deploys más rápidos:
   ```bash
   doctl apps create --spec .do/app.yaml
   ```
4. **Revisa Usage** regularmente para controlar gastos

---

**Tiempo total:** 15-20 minutos
**Dificultad:** Media
**Costo:** Gratis ($200 de crédito por 60 días)
**Resultado:** App profesional en producción

---

🚀 **¡Listo para comenzar!**
