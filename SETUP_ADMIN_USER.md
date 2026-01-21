# 🚀 CONFIGURACIÓN DE USUARIO ADMINISTRADOR

## ⚠️ ERROR QUE TIENES

El error **"relation 'users' does not exist"** significa que tu base de datos de Supabase **NO tiene las tablas creadas**.

---

## ✅ SOLUCIÓN EN 2 PASOS

### **PASO 1: Crear el Esquema de Base de Datos**

1. **Abre Supabase SQL Editor**:
   - Ve a: https://supabase.com/dashboard
   - Selecciona tu proyecto "focusenglish"
   - Haz clic en **"SQL Editor"** en el menú lateral izquierdo

2. **Ejecuta el script de esquema**:
   - Haz clic en **"New query"**
   - Copia TODO el contenido del archivo: `scripts/create-database-schema.sql`
   - Pégalo en el editor
   - Haz clic en **"Run"** (o presiona `Ctrl+Enter` / `Cmd+Enter`)

3. **Verifica el resultado**:
   - Deberías ver un mensaje: "Database schema created successfully!"
   - Y una lista de todas las tablas creadas:
     - `practice_sessions`
     - `user_lesson_progress`
     - `user_profiles`
     - `user_stats`
     - `users`

---

### **PASO 2: Crear el Usuario Administrador**

1. **En el mismo SQL Editor**:
   - Haz clic en **"New query"** otra vez
   - Copia TODO el contenido del archivo: `scripts/create-admin-user.sql`
   - Pégalo en el editor
   - Haz clic en **"Run"**

2. **Verifica el usuario**:
   - Deberías ver una fila con los datos del usuario admin:
     ```
     id: [UUID generado]
     email: admin@focus-on-english.com
     name: Administrador
     email_verified: [timestamp]
     role: admin
     subscription_status: active
     ```

---

## 🔑 **TUS CREDENCIALES**

Una vez completados los 2 pasos anteriores, podrás iniciar sesión con:

```
Email:    admin@focus-on-english.com
Password: Admin2026!
```

---

## 🎯 **Cómo Usar las Credenciales**

1. Ve a: https://focus-on-english.com/login
2. Ingresa el email y contraseña
3. Serás redirigido al dashboard con acceso completo de administrador

---

## 📊 **Qué Tablas Se Crean**

| Tabla | Descripción |
|-------|-------------|
| `users` | Usuarios principales (email, password, etc.) |
| `user_profiles` | Perfiles extendidos (rol, suscripción, etc.) |
| `user_stats` | Estadísticas (lecciones completadas, racha, puntos) |
| `user_lesson_progress` | Progreso en lecciones individuales |
| `practice_sessions` | Sesiones de práctica infinita |

---

## 🔐 **Características de Seguridad**

- ✅ Contraseñas hasheadas con **bcrypt** (12 rounds)
- ✅ **Row Level Security (RLS)** habilitado en todas las tablas
- ✅ Los usuarios solo pueden ver/editar sus propios datos
- ✅ Índices optimizados para búsquedas rápidas
- ✅ Triggers automáticos para `updated_at`

---

## ⚡ **Si Algo Sale Mal**

### **Error: "relation already exists"**
- **Solución**: Las tablas ya existen. Salta al PASO 2 y crea solo el usuario admin.

### **Error: "duplicate key value"**
- **Solución**: El usuario admin ya existe. Puedes usar las credenciales directamente.

### **Error: "permission denied"**
- **Solución**: Asegúrate de estar usando el proyecto correcto en Supabase y que tienes permisos de administrador.

---

## 🛠️ **Cambiar Contraseña (Opcional)**

Si quieres cambiar la contraseña después:

```sql
-- Generar nuevo hash (usa Node.js o bcrypt online tool)
-- Ejemplo con Node.js:
-- const bcrypt = require('bcryptjs');
-- const hash = bcrypt.hashSync('TuNuevaContraseña', 12);

UPDATE users 
SET password_hash = 'tu_nuevo_hash_aqui', 
    updated_at = NOW()
WHERE email = 'admin@focus-on-english.com';
```

---

## 📝 **Resumen Visual**

```
1️⃣ PASO 1: Crear tablas
   └─ Ejecutar: scripts/create-database-schema.sql
   └─ Resultado: 5 tablas creadas ✅

2️⃣ PASO 2: Crear admin
   └─ Ejecutar: scripts/create-admin-user.sql
   └─ Resultado: Usuario admin creado ✅

3️⃣ Login
   └─ URL: https://focus-on-english.com/login
   └─ Email: admin@focus-on-english.com
   └─ Password: Admin2026!
   └─ Resultado: Acceso al dashboard ✅
```

---

**¿Necesitas ayuda?** 
- Los scripts están en la carpeta `scripts/`
- Toda la documentación está en `ADMIN_CREDENTIALS.md`

**¡Listo para empezar!** 🚀
