# 🔐 SISTEMA DE RECUPERACIÓN DE CONTRASEÑA - DOCUMENTACIÓN COMPLETA

## 📅 Fecha: 15 de Enero de 2026
## 👨‍💻 Desarrollador: GenSpark AI Developer

---

## ✅ SISTEMA IMPLEMENTADO

Un **sistema completo y seguro** para gestionar olvido de contraseña y reset, siguiendo las mejores prácticas de seguridad de la industria.

---

## 🔄 FLUJO COMPLETO DEL USUARIO

### **Paso 1: Usuario olvida su contraseña**
```
Usuario en /login → Click en "¿Olvidaste tu contraseña?"
```

### **Paso 2: Solicitar recuperación**
```
1. Ir a /forgot-password
2. Ingresar email
3. Click en "Enviar instrucciones"
4. Sistema muestra mensaje: "Si el email existe, recibirás instrucciones"
```

### **Paso 3: Recibir email**
```
1. Usuario recibe email de Focus English
2. Email contiene:
   - Enlace de recuperación (https://site.com/reset-password?token=abc123...)
   - Advertencia: expira en 1 hora
   - Botón destacado "Restablecer Contraseña"
3. Usuario hace click en el enlace
```

### **Paso 4: Resetear contraseña**
```
1. Ir a /reset-password?token=abc123...
2. Ingresar nueva contraseña (mínimo 8 caracteres)
3. Confirmar nueva contraseña
4. Click en "Actualizar Contraseña"
5. Sistema valida token (no expirado + no usado)
6. Contraseña se actualiza con bcrypt hash
7. Token se marca como "usado"
```

### **Paso 5: Confirmación**
```
1. Sistema muestra mensaje de éxito
2. Usuario recibe email de confirmación
3. Redirigir a /login después de 3 segundos
4. Usuario inicia sesión con nueva contraseña
```

---

## 🏗️ ARQUITECTURA DEL SISTEMA

### **Componentes**:

```
Frontend (Páginas):
├── /forgot-password          → Solicitar recuperación
└── /reset-password?token=... → Resetear contraseña

Backend (APIs):
├── POST /api/auth/forgot-password  → Generar token + enviar email
└── POST /api/auth/reset-password   → Validar token + actualizar password

Base de Datos:
└── password_reset_tokens (Supabase)
    ├── id (UUID)
    ├── user_id (UUID)
    ├── token (TEXT) - único
    ├── expires_at (TIMESTAMP)
    ├── used (BOOLEAN)
    └── created_at (TIMESTAMP)

Email Service:
└── Resend API
    ├── sendPasswordResetEmail()       → Email con enlace
    └── sendPasswordChangedEmail()     → Email de confirmación
```

---

## 📁 ARCHIVOS CREADOS

### **Frontend**:
```
app/forgot-password/page.tsx        → Página solicitar recuperación (6,512 bytes)
app/reset-password/page.tsx         → Página resetear contraseña (8,464 bytes)
app/login/page.tsx                  → Actualizado con enlace correcto
```

### **Backend (APIs)**:
```
app/api/auth/forgot-password/route.ts  → Generar token (3,091 bytes)
app/api/auth/reset-password/route.ts   → Actualizar password (2,957 bytes)
```

### **Servicios**:
```
lib/email-service.ts                → Envío de emails (9,726 bytes)
```

### **Base de Datos**:
```
scripts/create-password-reset-table.sql  → Schema SQL (3,067 bytes)
```

---

## 🔐 SEGURIDAD IMPLEMENTADA

### **1. Tokens Seguros**
```typescript
// Generación de token con crypto
const resetToken = crypto.randomBytes(32).toString('hex');
// Resultado: "a3f7b9c2e1d4f6a8b0c9d2e5f8a1b4c7..."
// 64 caracteres hexadecimales (256 bits de entropía)
```

### **2. Expiración de Tokens**
```typescript
// Token expira en 1 hora
const expiresAt = new Date();
expiresAt.setHours(expiresAt.getHours() + 1);
```

### **3. Uso Único de Tokens**
```typescript
// Después de usar el token, se marca como "usado"
await supabase
  .from('password_reset_tokens')
  .update({ used: true })
  .eq('id', tokenData.id);
```

### **4. Protección contra Enumeración de Usuarios**
```typescript
// Siempre retornar éxito, aunque el usuario no exista
// Esto previene que atacantes descubran qué emails están registrados
return NextResponse.json({
  success: true,
  message: 'Si el email existe, recibirás instrucciones...',
});
```

### **5. Hash de Contraseñas**
```typescript
// Uso de bcrypt con 10 rounds (2^10 = 1,024 iteraciones)
const passwordHash = await bcrypt.hash(password, 10);
```

### **6. Validación de Contraseñas**
```typescript
// Validaciones en frontend y backend:
- Mínimo 8 caracteres
- Contraseñas deben coincidir
- No puede estar vacía
```

### **7. Rate Limiting** (Recomendado implementar)
```typescript
// TODO: Limitar a 3 intentos por email cada 15 minutos
// Previene ataques de fuerza bruta
```

---

## 📧 CONFIGURACIÓN DE EMAILS

### **Servicio: Resend**

**¿Por qué Resend?**
- API simple y moderna
- Excelente deliverability (tasa de entrega)
- Configuración de DNS rápida
- Plan gratuito: 100 emails/día
- Plan Pro: €20/mes = 50,000 emails

**Setup**:

1. **Crear cuenta**: https://resend.com/signup

2. **Obtener API Key**:
```bash
# Dashboard → API Keys → Create API Key
# Ejemplo: re_123abc456def789
```

3. **Agregar a .env**:
```bash
RESEND_API_KEY=re_tu_api_key_aqui
```

4. **Configurar dominio** (opcional, recomendado para producción):
```bash
# Dashboard → Domains → Add Domain
# Agregar registros DNS:
# - SPF record
# - DKIM record
# - DMARC record

# Después de configurar DNS, enviar desde:
# noreply@focus-on-english.com
```

### **Alternativas a Resend**:

| Servicio | Plan Gratuito | Precio | Deliverability |
|----------|---------------|--------|----------------|
| **Resend** | 100/día | €20/mes (50k) | ⭐⭐⭐⭐⭐ |
| SendGrid | 100/día | €15/mes (40k) | ⭐⭐⭐⭐ |
| Mailgun | 5,000/mes | €35/mes (50k) | ⭐⭐⭐⭐ |
| Amazon SES | 62,000/mes | Pay-as-go | ⭐⭐⭐⭐⭐ |
| Postmark | 100/mes | €10/mes (10k) | ⭐⭐⭐⭐⭐ |

**Recomendación**: Resend (mejor DX) o Amazon SES (más barato para alto volumen)

---

## 🗄️ CONFIGURACIÓN DE BASE DE DATOS

### **Crear tabla en Supabase**:

```sql
-- Ejecutar en Supabase SQL Editor:
-- Dashboard → SQL Editor → New Query

CREATE TABLE password_reset_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_password_reset_tokens_user_id ON password_reset_tokens(user_id);
CREATE INDEX idx_password_reset_tokens_token ON password_reset_tokens(token);
CREATE INDEX idx_password_reset_tokens_expires_at ON password_reset_tokens(expires_at);
```

**O usar el script**:
```bash
# Copiar y pegar el contenido de:
scripts/create-password-reset-table.sql

# En Supabase Dashboard → SQL Editor
```

---

## 🧪 TESTING

### **1. Test de solicitud de recuperación**:
```bash
# Iniciar servidor
npm run dev

# 1. Ir a http://localhost:3000/forgot-password
# 2. Ingresar email de un usuario existente
# 3. Click en "Enviar instrucciones"
# 4. Verificar mensaje de éxito
# 5. Revisar logs del servidor (token generado)
# 6. Verificar en Supabase que el token se creó:
#    Dashboard → Table Editor → password_reset_tokens
```

### **2. Test de email** (si Resend configurado):
```bash
# Con RESEND_API_KEY configurado:
# 1. Solicitar recuperación
# 2. Revisar inbox del email
# 3. Verificar que el email llegó
# 4. Verificar contenido del email
# 5. Click en el botón "Restablecer Contraseña"
```

### **3. Test de reset de contraseña**:
```bash
# 1. Copiar token desde Supabase o email
# 2. Ir a http://localhost:3000/reset-password?token=abc123...
# 3. Ingresar nueva contraseña (mínimo 8 caracteres)
# 4. Confirmar contraseña
# 5. Click en "Actualizar Contraseña"
# 6. Verificar mensaje de éxito
# 7. Intentar login con nueva contraseña
```

### **4. Test de seguridad**:
```bash
# Test 1: Token expirado
# - Usar un token de hace más de 1 hora
# - Debe mostrar error "Token ha expirado"

# Test 2: Token ya usado
# - Usar un token que ya se usó una vez
# - Debe mostrar error "Token inválido o expirado"

# Test 3: Token inválido
# - Usar un token que no existe
# - Debe mostrar error "Token inválido o expirado"

# Test 4: Usuario inexistente
# - Solicitar recuperación con email que no existe
# - Debe mostrar éxito (sin revelar que el usuario no existe)
```

---

## 🚀 DEPLOYMENT

### **Variables de entorno necesarias**:
```bash
# En Vercel o tu hosting:

# Resend (para envío de emails)
RESEND_API_KEY=re_tu_api_key

# NextAuth (para URL de reset)
NEXTAUTH_URL=https://www.focus-on-english.com

# Supabase (para base de datos)
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
SUPABASE_SERVICE_ROLE_KEY=tu_service_key
```

---

## 📊 FLUJO TÉCNICO DETALLADO

### **Solicitar Recuperación** (`/api/auth/forgot-password`):

```typescript
Request:
  POST /api/auth/forgot-password
  Body: { email: "usuario@email.com" }

Proceso:
  1. Validar formato de email ✓
  2. Buscar usuario en DB
  3. Si NO existe → Retornar éxito (seguridad)
  4. Si existe:
     a. Generar token único (crypto.randomBytes(32))
     b. Calcular expiración (now + 1 hora)
     c. INSERT en password_reset_tokens
     d. Enviar email con enlace de reset
  5. Retornar éxito siempre

Response:
  {
    "success": true,
    "message": "Si el email existe, recibirás instrucciones..."
  }
```

### **Resetear Contraseña** (`/api/auth/reset-password`):

```typescript
Request:
  POST /api/auth/reset-password
  Body: { 
    token: "abc123...", 
    password: "nuevapassword123" 
  }

Proceso:
  1. Validar token no vacío ✓
  2. Validar password mínimo 8 caracteres ✓
  3. Buscar token en DB:
     SELECT * FROM password_reset_tokens
     WHERE token = ? AND used = FALSE
  4. Verificar token existe
  5. Verificar token no expirado (expires_at > NOW)
  6. Hash nueva contraseña con bcrypt
  7. UPDATE users SET password_hash = ? WHERE id = ?
  8. UPDATE password_reset_tokens SET used = TRUE WHERE id = ?
  9. Enviar email de confirmación
  10. Retornar éxito

Response:
  {
    "success": true,
    "message": "Contraseña actualizada correctamente"
  }
```

---

## 🎨 UI/UX IMPLEMENTADA

### **Página Forgot Password**:
- Formulario simple con un campo (email)
- Mensaje informativo de qué pasará
- Indicador de loading durante envío
- Página de éxito con instrucciones claras
- Enlace para reenviar si no recibió email
- Botón volver a login

### **Página Reset Password**:
- Validación de token al cargar
- Formulario con 2 campos (password + confirmar)
- Indicadores visuales de requisitos
- Validación en tiempo real
- Consejos de seguridad
- Redirect automático después de éxito

### **Emails**:
- Diseño profesional con gradientes
- Botón CTA destacado
- Advertencias claras (expira en 1 hora)
- Enlace alternativo para copiar/pegar
- Footer con info de contacto
- Email de confirmación después de cambio

---

## 📈 MÉTRICAS Y MONITORING

### **Logs a implementar**:
```typescript
// En producción, enviar estos eventos a analytics:
- password_reset_requested (email)
- password_reset_email_sent (email)
- password_reset_email_failed (email, error)
- password_reset_completed (email)
- password_reset_token_expired (email)
- password_reset_token_invalid (email)
```

### **Alertas recomendadas**:
```
- Si más de 10 solicitudes del mismo IP en 1 hora
- Si tasa de error de envío de email > 5%
- Si más de 50% de tokens expiran sin usarse
```

---

## 🔧 MANTENIMIENTO

### **Limpieza de tokens expirados**:
```sql
-- Ejecutar diariamente (cron job):
DELETE FROM password_reset_tokens
WHERE expires_at < NOW() OR used = TRUE;

-- O usar la función incluida en el SQL:
SELECT cleanup_expired_tokens();
```

### **Monitoreo de salud**:
```sql
-- Ver tokens activos:
SELECT 
  COUNT(*) as total_activos,
  COUNT(CASE WHEN expires_at < NOW() THEN 1 END) as expirados,
  COUNT(CASE WHEN used = TRUE THEN 1 END) as usados
FROM password_reset_tokens;
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### **Backend**:
- [x] API de forgot-password
- [x] API de reset-password
- [x] Servicio de email (Resend)
- [x] Tabla de tokens en DB
- [x] Validaciones de seguridad
- [x] Hash de contraseñas con bcrypt

### **Frontend**:
- [x] Página /forgot-password
- [x] Página /reset-password
- [x] Enlace en página de login
- [x] UI con loading states
- [x] Mensajes de error/éxito

### **Pendiente**:
- [ ] Obtener API key de Resend
- [ ] Crear tabla en Supabase
- [ ] Configurar dominio en Resend (opcional)
- [ ] Testing completo
- [ ] Rate limiting (recomendado)
- [ ] Analytics y monitoring

---

## 💰 COSTOS

| Concepto | Servicio | Costo |
|----------|----------|-------|
| Envío de emails | Resend Free | €0 (hasta 100/día) |
| Envío de emails | Resend Pro | €20/mes (50,000 emails) |
| Base de datos | Supabase Free | €0 |
| Base de datos | Supabase Pro | €25/mes |
| **Total MVP** | | **€0/mes** |

---

## 🎉 RESULTADO FINAL

**Sistema completo de recuperación de contraseña**:

✅ **Solicitud de recuperación** con validación  
✅ **Generación de tokens seguros** (256 bits)  
✅ **Envío de emails profesionales** (HTML + CSS)  
✅ **Reset de contraseña** con validación  
✅ **Expiración automática** (1 hora)  
✅ **Uso único de tokens**  
✅ **Protección contra enumeración**  
✅ **Emails de confirmación**  
✅ **UI moderna y responsive**  

**El sistema está listo para producción después de**:
1. Obtener API key de Resend
2. Crear tabla en Supabase
3. Testing completo

---

**Fecha**: 15 de Enero de 2026  
**Estado**: ✅ **COMPLETADO - LISTO PARA TESTING**  
**Próximo paso**: Configurar Resend + Crear tabla + Testing
