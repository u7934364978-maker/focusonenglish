# 🚀 CONFIGURACIÓN DE VERCEL

## ⚠️ PROBLEMA ACTUAL

El error "Failed to generate valid exercises" indica que la **API key de OpenAI no está configurada en Vercel**.

La API key está en tu archivo `.env.local` (local), pero **Vercel no tiene acceso** a ese archivo.

---

## ✅ SOLUCIÓN: Configurar Variables de Entorno en Vercel

### **Paso 1: Ve a Vercel Dashboard**
1. Abre: https://vercel.com/dashboard
2. Selecciona tu proyecto: **focusonenglish**
3. Click en **"Settings"** (arriba a la derecha)

### **Paso 2: Agregar Variable de Entorno**
1. En el menú lateral, click en **"Environment Variables"**
2. Click en **"Add New"** o **"Add Variable"**
3. Configura:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: `[TU_API_KEY_DE_OPENAI_AQUÍ]` (copia la que está en tu archivo `.env.local`)
   - **Environments**: Selecciona todos (Production, Preview, Development)
4. Click en **"Save"**

### **Paso 3: Redesplegar**
1. Ve a la pestaña **"Deployments"**
2. Click en los **tres puntos** (•••) del último deployment
3. Click en **"Redeploy"**
4. Espera 2-3 minutos

---

## 📋 **OTRAS VARIABLES QUE PODRÍAS NECESITAR**

Si usas Supabase u otros servicios, también agrégalas:

```
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
```

---

## 🔍 **VERIFICAR QUE FUNCIONA**

Después de redesplegar:

1. Ve a: https://focus-on-english.com/practica
2. Selecciona categoría y tipo de ejercicio
3. Click en "Comenzar Práctica"
4. **Debería generar el ejercicio** sin error

---

## ⚠️ **NOTA DE SEGURIDAD**

- ✅ Las variables de entorno en Vercel son **seguras**
- ✅ No se exponen en el cliente
- ✅ Solo el servidor puede accederlas
- 🔒 La API key **nunca** llega al navegador del usuario

---

## 🆘 **SI SIGUE FALLANDO**

1. Verifica que la API key es correcta (cópiala de nuevo)
2. Asegúrate de seleccionar todos los environments
3. Haz un **redeploy completo** (no usar caché)
4. Revisa los logs en Vercel → Functions → Ver logs del error

---

**Fecha**: 2026-01-17  
**Proyecto**: Focus English
**Variable crítica**: `OPENAI_API_KEY`
