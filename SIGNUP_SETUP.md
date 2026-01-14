# Focus English - Sistema de Registro y CRM

## 🚀 Implementación del Sistema de Registro

Este documento describe la implementación completa del sistema de registro funcional con base de datos y CRM integrado.

## 📋 Características Implementadas

### ✅ Base de Datos (Supabase)
- Cliente de Supabase configurado
- Almacenamiento de registros en tabla `signups`
- Validación de datos con Zod
- Manejo de duplicados y errores

### ✅ Integración CRM (HubSpot)
- Creación automática de contactos
- Sincronización de datos
- Añadir notas con mensajes de usuarios
- Actualización de propiedades de contactos

### ✅ Formulario de Registro
- Componente cliente con React
- Validación en tiempo real
- Estados de loading y error
- Redirección automática a certificaciones

### ✅ Flujo de Usuario
1. Usuario completa formulario en `/signup`
2. Datos se validan con Zod
3. Se guarda en Supabase
4. Se crea contacto en HubSpot CRM
5. Usuario es redirigido a `/focus-on-english/certificaciones`
6. Se muestra mensaje de éxito

## 🔧 Configuración Requerida

### 1. Supabase Setup

#### Crear proyecto en Supabase:
1. Ve a [https://app.supabase.com](https://app.supabase.com)
2. Crea un nuevo proyecto
3. Copia las credenciales del proyecto

#### Crear tabla de signups:
```sql
CREATE TABLE signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  course_interest TEXT NOT NULL CHECK (course_interest IN ('trabajo', 'viajes', 'examenes')),
  current_level TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Crear índice para búsquedas rápidas por email
CREATE INDEX idx_signups_email ON signups(email);

-- Crear índice para búsquedas por fecha
CREATE INDEX idx_signups_created_at ON signups(created_at DESC);

-- Trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_signups_updated_at BEFORE UPDATE
  ON signups FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

#### Configurar políticas RLS (Row Level Security):
```sql
-- Habilitar RLS
ALTER TABLE signups ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserciones públicas
CREATE POLICY "Allow public signups"
  ON signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política para permitir lectura solo a usuarios autenticados
CREATE POLICY "Allow authenticated read"
  ON signups
  FOR SELECT
  TO authenticated
  USING (true);
```

### 2. HubSpot CRM Setup

#### Obtener API Key:
1. Ve a [https://app.hubspot.com](https://app.hubspot.com)
2. Settings → Integrations → Private Apps
3. Crea una nueva aplicación privada
4. Asigna permisos: `crm.objects.contacts.write`, `crm.objects.contacts.read`
5. Copia el Access Token

#### Crear propiedades personalizadas en HubSpot:
1. Ve a Settings → Properties → Contact Properties
2. Crea estas propiedades personalizadas:
   - `course_interest` (Single-line text)
   - `current_level` (Dropdown: a1, a2, b1, b2, c1, c2)

### 3. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# HubSpot CRM Configuration
HUBSPOT_API_KEY=your_hubspot_access_token_here
HUBSPOT_PORTAL_ID=your_portal_id_here

# Application Configuration
NEXT_PUBLIC_APP_URL=https://focus-on-english.com
```

## 📁 Estructura de Archivos

```
webapp/
├── app/
│   ├── api/
│   │   └── signup/
│   │       └── route.ts          # API endpoint para registro
│   ├── focus-on-english/
│   │   └── certificaciones/
│   │       └── page.tsx          # Página de destino post-registro
│   └── signup/
│       └── page.tsx              # Página de registro
├── components/
│   ├── alerts/
│   │   └── SuccessAlert.tsx     # Alerta de éxito
│   └── forms/
│       └── SignupForm.tsx        # Formulario de registro
├── lib/
│   ├── crm/
│   │   └── hubspot.ts            # Integración HubSpot
│   ├── supabase/
│   │   └── client.ts             # Cliente Supabase
│   └── validations/
│       └── signup.ts             # Esquemas de validación
└── .env.local                    # Variables de entorno (no commiteado)
```

## 🧪 Testing

### Probar el registro:
1. Navega a `/signup`
2. Completa el formulario con datos de prueba
3. Envía el formulario
4. Verifica:
   - Redirección a `/focus-on-english/certificaciones`
   - Mensaje de éxito en la página
   - Registro en Supabase dashboard
   - Contacto creado en HubSpot CRM

### Verificar en Supabase:
```sql
SELECT * FROM signups ORDER BY created_at DESC LIMIT 10;
```

### Verificar en HubSpot:
1. Ve a Contacts en HubSpot
2. Busca por el email registrado
3. Verifica que las propiedades personalizadas estén llenas

## 🔒 Seguridad

### Implementaciones de seguridad:
- ✅ Validación de datos con Zod
- ✅ Rate limiting (configurar en producción)
- ✅ Sanitización de inputs
- ✅ HTTPS obligatorio en producción
- ✅ Variables sensibles en `.env.local`
- ✅ Row Level Security en Supabase
- ✅ Protección CSRF (incluida en Next.js)

### Recomendaciones adicionales:
- Implementar recaptcha para prevenir spam
- Configurar rate limiting en API routes
- Monitorear logs de errores
- Implementar notificaciones de nuevos registros

## 📊 Monitoreo

### Métricas clave a monitorear:
- Tasa de conversión de registro
- Errores en API
- Tiempo de respuesta
- Sincronización CRM
- Duplicados rechazados

### Herramientas recomendadas:
- Vercel Analytics
- Sentry para error tracking
- HubSpot Analytics
- Supabase Dashboard

## 🚀 Despliegue

### Variables de entorno en Vercel:
1. Ve al dashboard de Vercel
2. Project Settings → Environment Variables
3. Agrega todas las variables de `.env.local`
4. Redeploy el proyecto

### Checklist de producción:
- [ ] Variables de entorno configuradas
- [ ] Supabase RLS habilitado
- [ ] HubSpot API configurada
- [ ] HTTPS forzado
- [ ] Error tracking configurado
- [ ] Backup de base de datos programado
- [ ] Políticas de privacidad actualizadas

## 🆘 Troubleshooting

### Error: "Supabase not configured"
- Verifica que las variables `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` estén configuradas
- Reinicia el servidor de desarrollo

### Error: "HubSpot integration warning"
- Esto es normal si `HUBSPOT_API_KEY` no está configurada
- El registro seguirá funcionando, solo no se sincronizará con CRM

### Error: "Email ya está registrado"
- El email ya existe en la base de datos
- Verifica en Supabase o usa otro email

### Error: "Validation failed"
- Revisa que todos los campos requeridos estén llenos
- Verifica formato de email
- Confirma que acceptTerms esté marcado

## 📞 Soporte

Para dudas o problemas:
- Email: support@focus-on-english.com
- GitHub Issues: [Link al repo]

---

**Última actualización**: Enero 14, 2026
**Versión**: 1.0.0
