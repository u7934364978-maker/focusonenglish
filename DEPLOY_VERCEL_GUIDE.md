# 🚀 DEPLOY EN VERCEL - GUÍA COMPLETA

## ✨ POR QUÉ VERCEL ES LA MEJOR OPCIÓN

- ✅ **Creada por los desarrolladores de Next.js**
- ✅ **100% gratis** para proyectos personales
- ✅ **Zero configuración** - Funciona automáticamente
- ✅ **Deploy en 3-5 minutos**
- ✅ **No tendrás problemas con Node.js 18/20**
- ✅ **SSL automático** + dominios personalizados gratis

---

## 📋 PASO A PASO (10 MINUTOS)

### **PASO 1: Crear Cuenta en Vercel (2 min)**

1. Ve a: **https://vercel.com/**
2. Click en **"Sign Up"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza Vercel para acceder a tus repositorios
5. ✅ Listo - Ya tienes cuenta

---

### **PASO 2: Crear Nuevo Proyecto (1 min)**

1. En el dashboard de Vercel, click en **"Add New..."**
2. Selecciona **"Project"**
3. Vercel mostrará todos tus repositorios de GitHub
4. Busca: **`focusonenglish`**
5. Click en **"Import"**

---

### **PASO 3: Configurar el Proyecto (2 min)**

Vercel detectará automáticamente que es Next.js:

#### **Framework Preset:**
```
✓ Next.js (detectado automáticamente)
```

#### **Root Directory:**
```
./  (dejar por defecto)
```

#### **Build and Output Settings:**
```
Build Command: npm run build (automático)
Output Directory: .next (automático)
Install Command: npm install (automático)
```

**No necesitas cambiar nada - Vercel lo detecta todo.**

---

### **PASO 4: Añadir Variables de Entorno (3 min)**

1. Click en **"Environment Variables"** (acordeón)
2. Añade estas 6 variables una por una:

```bash
# Variable 1
Name: NEXTAUTH_SECRET
Value: QWS4m1S6L2jQdxM2K8wDX8MDEfTdm7I12VPuCvkyZOk=

# Variable 2
Name: NEXTAUTH_URL
Value: https://tu-proyecto.vercel.app
(Nota: Esto lo actualizarás después del deploy)

# Variable 3
Name: NEXT_PUBLIC_SUPABASE_URL
Value: [tu_url_de_supabase]

# Variable 4
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [tu_anon_key]

# Variable 5
Name: SUPABASE_SERVICE_ROLE_KEY
Value: [tu_service_role_key]

# Variable 6
Name: OPENAI_API_KEY
Value: [tu_openai_api_key]
```

**Para cada variable:**
- Escribe el Name
- Escribe el Value
- Click en **"Add"**

---

### **PASO 5: Deploy (5 min)**

1. Click en **"Deploy"**
2. Vercel iniciará el build automáticamente
3. Verás logs en tiempo real:

```
✓ Cloning repository
✓ Installing dependencies (npm install)
✓ Building Next.js (npm run build)
✓ Deploying to edge network
✓ Ready! ✅
```

**Tiempo estimado: 3-5 minutos**

---

### **PASO 6: Obtener tu URL**

Cuando termine el deploy, Vercel te mostrará:

```
🎉 Congratulations! Your project is live!

Production: https://focusonenglish.vercel.app
```

**Copia esta URL** - Es tu app en producción.

---

### **PASO 7: Actualizar NEXTAUTH_URL**

1. En el dashboard de Vercel, ve a tu proyecto
2. Click en **"Settings"**
3. Click en **"Environment Variables"**
4. Busca `NEXTAUTH_URL`
5. Click en los **tres puntos (⋮)** → **"Edit"**
6. Cambia el valor a tu URL real:
   ```
   https://focusonenglish.vercel.app
   ```
7. **Save**
8. Vercel hará un **redeploy automático** (1-2 min)

---

### **PASO 8: Verificar que Funciona**

1. Accede a: `https://focusonenglish.vercel.app`
2. ✅ **Deberías ver tu landing page de Focus English**
3. ✅ **Sin errores "Not Found"**
4. ✅ **Todo funcionando perfectamente**

---

## 🎯 RUTAS PARA PROBAR

```
✅ https://focusonenglish.vercel.app/
✅ https://focusonenglish.vercel.app/cursos
✅ https://focusonenglish.vercel.app/aula
✅ https://focusonenglish.vercel.app/test-nivel
✅ https://focusonenglish.vercel.app/cuenta/login
```

---

## 🔄 DEPLOY AUTOMÁTICO

**Desde ahora, cada vez que hagas `git push`:**

1. Vercel detecta el cambio automáticamente
2. Inicia build (2-3 min)
3. Deploy a producción (30 seg)
4. ✅ **Cambios live en ~3 minutos**

**No necesitas hacer nada manualmente.**

---

## 🌐 DOMINIO PERSONALIZADO (OPCIONAL)

Si tienes un dominio propio (ej: `focusenglish.com`):

1. Vercel → Settings → **"Domains"**
2. Click en **"Add Domain"**
3. Escribe tu dominio: `focusenglish.com`
4. Vercel te dará records DNS:
   ```
   A Record: 76.76.21.21
   CNAME: cname.vercel-dns.com
   ```
5. Añade estos records en tu proveedor DNS
6. **SSL automático** en 5 minutos

---

## 💰 PRICING DE VERCEL

### **Hobby Plan (GRATIS):**
- ✅ Deploy ilimitados
- ✅ 100 GB bandwidth/mes
- ✅ SSL automático
- ✅ Dominios personalizados ilimitados
- ✅ Edge Functions
- ✅ Analytics básico
- ✅ Preview deploys automáticos

**Esto es suficiente para tu app.**

### **Pro Plan ($20/mes):**
Solo si necesitas:
- Más bandwidth (1 TB)
- Más colaboradores
- Analytics avanzado
- Prioridad en soporte

---

## 🔧 TROUBLESHOOTING

### **Build Failed:**
- Verifica que las variables de entorno estén correctas
- Revisa los Build Logs en Vercel

### **500 Error:**
- Verifica `NEXTAUTH_URL` con tu URL de Vercel
- Verifica las credenciales de Supabase

### **Variables de entorno no funcionan:**
- Las variables con `NEXT_PUBLIC_` son públicas
- Las demás son secretas del servidor
- Vercel las maneja automáticamente

---

## 📊 COMPARACIÓN: VERCEL VS RAILWAY

| Característica | Vercel | Railway |
|----------------|--------|---------|
| **Next.js 15** | ✅ Perfecto | ⚠️ Problemas |
| **Precio Gratis** | ✅ Sí | ❌ $5/mes |
| **Configuración** | ✅ Zero config | ⚠️ Compleja |
| **Node.js 20** | ✅ Automático | ⚠️ Problemas |
| **Deploy Time** | ✅ 3-5 min | ⚠️ 5-10 min |
| **Estabilidad** | ✅ Excelente | ⚠️ Variable |
| **Soporte Next.js** | ✅ Nativo | ⚠️ Terceros |

---

## ✅ RESUMEN

**Tiempo total:** 10 minutos
**Dificultad:** Muy fácil
**Costo:** Gratis
**Resultado:** App funcionando perfectamente

---

## 🎉 ¡ESO ES TODO!

Con Vercel, tu app estará funcionando en menos de 10 minutos, sin problemas de Node.js, sin configuraciones complicadas, y completamente gratis.

**Próximo paso:** Ve a https://vercel.com/ y comienza. 🚀
