# 🔑 CONFIGURAR OPENAI API KEY EN VERCEL

## ⚠️ PROBLEMA ACTUAL

La plataforma está usando **ejercicios de demostración** porque la API key de OpenAI no está configurada en Vercel.

**Verás este mensaje:**
> ⚠️ Usando ejercicios de demostración. Configura OPENAI_API_KEY en Vercel para ejercicios generados con IA.

---

## ✅ SOLUCIÓN (3 PASOS SIMPLES)

### **PASO 1: Copiar tu API Key**

Tu API key de OpenAI está en tu archivo `.env.local`:

```bash
# Ver tu API key local
cat .env.local | grep OPENAI_API_KEY
```

📋 **Copia exactamente la API key** (todo el valor después de `=`)

---

### **PASO 2: Configurar en Vercel**

1. **Ir a Vercel Dashboard**
   - 🌐 https://vercel.com/dashboard
   - Selecciona tu proyecto: **focusonenglish**

2. **Abrir Settings**
   - Clic en **"Settings"** en el menú superior
   - Ir a **"Environment Variables"** en el menú lateral

3. **Agregar Variable**
   - Clic en **"Add New"** o **"Add Another"**
   
   **Configuración:**
   - **Name (Key):** `OPENAI_API_KEY`
   - **Value:** (pega la API key que copiaste)
   - **Environments:** Marca estas 3 opciones:
     - ✅ **Production**
     - ✅ **Preview**
     - ✅ **Development**
   
4. **Guardar**
   - Clic en **"Save"**

---

### **PASO 3: Redeploy**

1. **Ir a Deployments**
   - Volver al proyecto
   - Clic en **"Deployments"** en el menú superior

2. **Redeploy el último deployment**
   - Busca el deployment más reciente (el primero de la lista)
   - Clic en los **tres puntos (•••)** a la derecha
   - Selecciona **"Redeploy"**
   - Confirmar **"Redeploy"**

3. **Esperar** ⏱️
   - El deployment tarda **2-3 minutos**
   - Verás el estado cambiar: Building → Ready

---

## 🎯 VERIFICAR QUE FUNCIONA

Una vez que el deployment esté **Ready**:

### 1. **Ir a tu plataforma:**
   - 🌐 https://focus-on-english.com/practica

### 2. **Configurar ejercicio:**
   - Categoría: cualquiera (ej: Gramática)
   - Tipo: cualquiera (ej: Opción Múltiple)
   - Dificultad: cualquiera (ej: Medio)

### 3. **Comenzar Práctica** 🚀
   - Clic en **"🚀 Comenzar Práctica"**
   - Deberías ver: "Generando ejercicio..."
   - Si funciona: ejercicio nuevo y diferente cada vez
   - Si NO funciona: ejercicio de demostración repetido

### 4. **Verificar consola del navegador** (opcional)
   - Presiona F12 (o Cmd+Option+I en Mac)
   - Ve a la pestaña **"Console"**
   - No deberías ver el mensaje: "⚠️ Using fallback exercises"

---

## 📊 DIFERENCIA: FALLBACK vs AI

| Característica | 🟡 Fallback (Sin API Key) | 🟢 OpenAI (Con API Key) |
|---------------|---------------------------|-------------------------|
| Ejercicios | Siempre los mismos | ✨ Nuevos cada vez |
| Variedad | Limitada (12 tipos) | ♾️ Infinita |
| Adaptación | No se adapta | Se adapta a tema/nivel |
| Feedback | Genérico | Personalizado |
| Mensaje | ⚠️ Demostraci

ón | ✅ Generado |

---

## 🔐 SEGURIDAD

### ✅ **TU API KEY ESTÁ SEGURA**
- Las variables de entorno de Vercel son **server-side only**
- No se exponen al navegador del usuario
- No aparecen en el código fuente público
- Solo tu servidor puede acceder a ellas

### 🚫 **NO HACER:**
- NO subas `.env.local` a GitHub (ya está en `.gitignore`)
- NO pongas la API key en el código directamente
- NO compartas la API key públicamente

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### **Problema 1: Sigue usando fallback después de configurar**

**Solución:**
1. Verifica que guardaste la variable en Vercel
2. Verifica que marcaste **Production, Preview, Development**
3. Hiciste redeploy? (no basta con guardar)
4. Espera 3-5 minutos después del redeploy
5. Limpia caché del navegador (Ctrl+Shift+R)

### **Problema 2: "API key is not configured or invalid"**

**Solución:**
1. Verifica que copiaste la API key **completa** (sin espacios)
2. El nombre debe ser exactamente: `OPENAI_API_KEY` (en mayúsculas)
3. No debe tener comillas ni espacios
4. Redeploy después de cambiar

### **Problema 3: "Rate limit exceeded"**

**Solución:**
- Tu API key alcanzó el límite de requests
- Espera unos minutos
- Verifica tu plan de OpenAI: https://platform.openai.com/account/usage
- Considera actualizar tu plan si necesitas más requests

### **Problema 4: Funciona en local pero no en Vercel**

**Solución:**
- En local usa `.env.local`
- En Vercel necesitas configurar las variables separadamente
- Son dos configuraciones diferentes
- Verifica Vercel > Settings > Environment Variables

---

## 📸 CAPTURAS DE PANTALLA (AYUDA VISUAL)

### **1. Settings → Environment Variables**
```
Vercel Dashboard
└── focusonenglish (tu proyecto)
    └── Settings
        └── Environment Variables
            └── [Add New Variable]
```

### **2. Configurar Variable**
```
Key: OPENAI_API_KEY
Value: sk-proj-...
Environments:
  [✓] Production
  [✓] Preview
  [✓] Development

[Save]
```

### **3. Redeploy**
```
Deployments
└── (más reciente) [•••]
    └── Redeploy
        └── Confirm
```

---

## 🎓 RECURSOS ADICIONALES

### **OpenAI API**
- Dashboard: https://platform.openai.com/
- Usage: https://platform.openai.com/account/usage
- API Keys: https://platform.openai.com/api-keys
- Docs: https://platform.openai.com/docs

### **Vercel**
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs/concepts/projects/environment-variables

---

## ✅ CHECKLIST FINAL

Antes de cerrar esta guía, verifica:

- [ ] Copiaste la API key completa
- [ ] Agregaste variable en Vercel con nombre `OPENAI_API_KEY`
- [ ] Marcaste las 3 opciones (Production, Preview, Development)
- [ ] Guardaste la variable
- [ ] Hiciste redeploy del último deployment
- [ ] Esperaste 2-3 minutos
- [ ] Probaste en https://focus-on-english.com/practica
- [ ] Ya no ves el mensaje "⚠️ Usando ejercicios de demostración"
- [ ] Los ejercicios son diferentes cada vez

---

## 💬 ¿NECESITAS AYUDA?

Si después de seguir todos los pasos aún tienes problemas:

1. Revisa la consola del navegador (F12 → Console)
2. Busca errores en rojo
3. Copia el mensaje de error
4. Verifica tu plan de OpenAI (puede estar agotado)

---

**Fecha:** 2026-01-17  
**Versión:** 2.0 (con sistema de fallback)  
**Proyecto:** Focus English - Sistema de Ejercicios Infinitos
