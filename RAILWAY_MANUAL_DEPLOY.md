# 🚀 INSTRUCCIONES: FORZAR DEPLOY EN RAILWAY

## ⚡ OPCIÓN RÁPIDA: REDEPLOY MANUAL (30 segundos)

### **PASO 1: Ir a Railway Dashboard**
URL: https://railway.app/dashboard

### **PASO 2: Seleccionar tu Servicio**
- Click en proyecto: **"easygoing-gratitude"**
- Click en servicio: **"focusenglish"**

### **PASO 3: Ir a Deployments**
- Click en pestaña **"Deployments"** (arriba)

### **PASO 4: Forzar Nuevo Deploy**
Tienes 2 opciones:

#### **Opción A: Botón Deploy**
- Busca el botón morado **"Deploy"** en la esquina superior derecha
- Click en ese botón
- Railway iniciará un nuevo deployment con el código actualizado

#### **Opción B: Redeploy**
- Click en el último deployment de la lista (el que tiene ID 7d926697)
- En la vista del deployment, busca el menú **⋮** (tres puntos)
- Click en **"Redeploy"**
- Railway hará un nuevo deployment con el mismo commit

### **PASO 5: Esperar el Build (4-5 minutos)**
Railway iniciará:
1. npm install (1-2 min)
2. npm build (2-3 min)
3. npm start (30 seg)

### **PASO 6: Verificar**
Cuando veas **"Success"** ✅, accede a:
```
https://focusonenglish-production.up.railway.app
```

---

## 🔧 DESPUÉS DEL DEPLOY: HABILITAR AUTO-DEPLOY

Para que Railway detecte futuros cambios automáticamente:

### **En Railway → Settings:**

1. Busca la sección **"Service Source"** o **"GitHub"**
2. Verifica que esté conectado a:
   ```
   Repository: u7934364978-maker/focusonenglish
   Branch: main
   ```
3. Busca la opción **"Watch Paths"** o **"Auto Deploy"**
4. Asegúrate de que esté **activado**

### **Si no está conectado:**

1. Click en **"Connect GitHub Repository"**
2. Autoriza Railway si es necesario
3. Selecciona: `u7934364978-maker/focusonenglish`
4. Branch: `main`
5. Save

Railway creará automáticamente el webhook en GitHub.

---

## 📊 CHECKLIST DE VERIFICACIÓN

Después del redeploy, verifica:

- [ ] Build completado con éxito
- [ ] Deployment en estado "Success"
- [ ] Logs muestran "Ready in X.Xs"
- [ ] URL accesible sin error "Not Found"
- [ ] Landing page visible
- [ ] Navegación funcional

---

## 🎯 RESUMEN

**Acción inmediata:**
1. Ve a Railway Dashboard
2. Deployments → Click "Deploy" (botón morado)
3. Espera 5 minutos
4. Accede a tu URL

**Esto forzará el uso del código actualizado con:**
- ✅ nixpacks.toml
- ✅ railway.json
- ✅ output: 'standalone'

**NO necesitas configurar webhook manualmente** - Railway lo hace automáticamente cuando está conectado correctamente.

---

## ⏰ TIEMPO ESTIMADO

- Redeploy manual: 30 segundos
- Build completo: 4-5 minutos
- Total: ~5 minutos hasta ver la app funcionando

---

¡Fuerza el deploy manual y deberías ver tu app funcionando! 🚀
