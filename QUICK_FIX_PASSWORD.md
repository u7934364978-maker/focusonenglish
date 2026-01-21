# 🔧 SOLUCIÓN RÁPIDA - Contraseña de Admin

## 🚨 Problema
El hash de contraseña que se creó no es compatible con bcrypt de Node.js.

---

## ✅ SOLUCIÓN RÁPIDA (1 minuto)

### **Opción 1: Actualizar en Supabase SQL Editor**

1. **Ve al SQL Editor de Supabase**: https://supabase.com/dashboard → SQL Editor
2. **Ejecuta este comando**:

```sql
UPDATE users 
SET password_hash = '$2b$12$hALb4at/gWl.PhuEtdosneeVESvz.D.JxtvltViBelZF9qW/S8rzq',
    updated_at = NOW()
WHERE email = 'admin@focus-on-english.com';
```

3. **Click en "Run"** ▶️

---

### **Opción 2: Actualizar desde Table Editor**

1. **Ve a Table Editor** en Supabase
2. **Abre la tabla "users"**
3. **Click en la fila del admin** (email: admin@focus-on-english.com)
4. **En el campo "password_hash"**, reemplaza el valor actual con:
```
$2b$12$hALb4at/gWl.PhuEtdosneeVESvz.D.JxtvltViBelZF9qW/S8rzq
```
5. **Click en "Save"** ✅

---

## 🔑 CREDENCIALES (después de actualizar)

```
Email:    admin@focus-on-english.com
Password: Admin2026!
```

---

## 🎯 Explicación Técnica

El problema era:
- **Hash original**: `$2a$12$...` (bcrypt versión antigua)
- **Hash esperado**: `$2b$12$...` (bcrypt versión actual)

Node.js usa bcrypt versión `$2b$` por defecto, que no es compatible con `$2a$`.

---

## ✅ Una vez actualizado

1. Ve a: https://focus-on-english.com/login
2. Ingresa:
   - Email: `admin@focus-on-english.com`
   - Password: `Admin2026!`
3. ¡Listo! Deberías acceder al dashboard sin problemas.

---

**Tiempo estimado**: 1 minuto
**Dificultad**: Muy fácil
