# 🚀 GUÍA DEFINITIVA: DESPLIEGUE EN CLOUDFLARE PAGES

## ✅ Estado Actual del Proyecto

**CÓDIGO COMPLETAMENTE LISTO** ✨
- ✅ Migración de NextAuth a Supabase Auth completada
- ✅ Todas las rutas configuradas para Edge Runtime
- ✅ Build sin errores de sintaxis verificado
- ✅ Backward compatibility mantenida
- ✅ Documentación completa generada

**PR #54**: https://github.com/u7934364978-maker/focusonenglish/pull/54
**Branch**: `fix/cloudflare-nextauth-edge-runtime`

---

## 📋 PASOS PARA DESPLIEGUE (15-20 minutos)

### PASO 1: Configurar Variables de Entorno en Cloudflare

#### 1.1 Acceder al Dashboard de Cloudflare
1. Ve a https://dash.cloudflare.com
2. Navega a **Workers & Pages**
3. Selecciona tu proyecto **focusonenglish**
4. Ve a **Settings** > **Environment variables**

#### 1.2 Variables OBLIGATORIAS de Supabase

```bash
# URL de tu proyecto Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co

# Anon Key (pública, segura para frontend)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Service Role Key (PRIVADA, NUNCA exponerla en frontend)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**¿Dónde obtener estas claves?**
1. Ve a https://app.supabase.com
2. Selecciona tu proyecto (o créalo si no existe)
3. Ve a **Settings** > **API**
4. Copia:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`

#### 1.3 Variable de URL del Sitio

```bash
# Para producción con Cloudflare Pages
NEXT_PUBLIC_SITE_URL=https://focusonenglish.pages.dev

# O tu dominio personalizado si ya lo configuraste
NEXT_PUBLIC_SITE_URL=https://www.focusenglish.com
```

#### 1.4 Variables OPCIONALES (pero recomendadas)

```bash
# OpenAI para evaluaciones con IA
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx

# Stripe para pagos (usa test keys primero)
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx

# HubSpot CRM (opcional)
HUBSPOT_ACCESS_TOKEN=pat-xxx-xxxxxxxxxxxxx
HUBSPOT_PORTAL_ID=147592708

# Resend para emails (opcional)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# ElevenLabs para audio (opcional)
ELEVENLABS_API_KEY=xxxxxxxxxxxxx
```

#### 1.5 Configurar para Production Y Preview

⚠️ **IMPORTANTE**: Agrega las variables tanto para:
- **Production** (rama main)
- **Preview** (otras ramas como la actual)

---

### PASO 2: Mergear el Pull Request

#### 2.1 Revisar el PR
1. Ve a https://github.com/u7934364978-maker/focusonenglish/pull/54
2. Revisa los cambios (16 archivos modificados)
3. Lee el resumen de cambios

#### 2.2 Mergear a Main
1. Click en **"Merge pull request"**
2. Confirma el merge
3. Opcionalmente, elimina la branch `fix/cloudflare-nextauth-edge-runtime`

---

### PASO 3: Disparar el Build en Cloudflare

#### 3.1 Build Automático
- Cloudflare detectará automáticamente el push a `main`
- Iniciará el build automáticamente

#### 3.2 Build Manual (si no se inicia automáticamente)
1. Ve a tu proyecto en Cloudflare Pages
2. Click en **"Deployments"**
3. Click en **"Retry deployment"** o **"Create deployment"**
4. Selecciona la rama **main**

#### 3.3 Monitorear el Build
1. Ve a **Deployments** en Cloudflare
2. Verás el progreso del build
3. Tiempo estimado: **3-5 minutos**

**Indicadores de éxito**:
```
✓ Cloning repository
✓ Installing dependencies
✓ Building application
✓ Deploying to Cloudflare
✓ Deployment complete
```

---

### PASO 4: Verificar el Despliegue

#### 4.1 Acceder a la URL de Producción
Tu sitio estará disponible en:
- `https://focusonenglish.pages.dev`
- O tu dominio personalizado si lo configuraste

#### 4.2 Pruebas Esenciales

**1. Homepage**
- [ ] La página principal carga correctamente
- [ ] Los estilos se aplican bien
- [ ] Las imágenes cargan

**2. Autenticación (CRÍTICO)**
- [ ] `/api/auth/login` → Prueba login con credenciales
- [ ] `/api/auth/signup` → Prueba registro de nuevo usuario
- [ ] `/api/auth/me` → Verifica que devuelve la sesión
- [ ] `/api/auth/logout` → Prueba cerrar sesión

**3. Rutas Principales**
- [ ] `/` → Homepage
- [ ] `/cursos` → Página de cursos
- [ ] `/blog` → Blog
- [ ] `/dashboard` → Panel del estudiante (requiere login)
- [ ] `/test-nivel` → Test de nivel

**4. API Routes**
- [ ] Todas las rutas API responden
- [ ] No hay errores 500 en console

---

## 🔧 Solución de Problemas

### Error: "Missing Supabase environment variables"
**Causa**: Variables no configuradas en Cloudflare
**Solución**:
1. Ve a Settings > Environment variables
2. Agrega las 3 variables obligatorias de Supabase
3. Haz un redeploy

### Error: Build fails con "Module not found"
**Causa**: Dependencias no instaladas
**Solución**:
1. Verifica que `package.json` esté en el repositorio
2. Cloudflare debería ejecutar `npm install` automáticamente
3. Si persiste, revisa los logs de build

### Error: "Edge Runtime error"
**Causa**: Alguna ruta aún intenta usar módulos de Node.js
**Solución**:
1. Revisa los logs del error específico
2. Identifica el archivo problemático
3. Verifica que NO tenga `export const runtime = 'edge'` si usa bcrypt o crypto

### Las APIs de autenticación no responden
**Causa**: Variables de Supabase incorrectas o faltantes
**Solución**:
1. Verifica en Cloudflare que las 3 variables estén configuradas
2. Verifica que `NEXT_PUBLIC_SUPABASE_URL` termine en `.supabase.co`
3. Verifica que las keys empiecen con `eyJhbGciOiJIUzI1NiI...`
4. Prueba las credenciales en Supabase Dashboard

---

## 📊 Checklist Final de Despliegue

### Pre-Deploy
- [x] Código migrado a Supabase Auth
- [x] Todas las rutas configuradas para Edge Runtime
- [x] Build local exitoso (verificado)
- [x] Documentación completa
- [x] PR creado y revisado
- [ ] Variables de entorno preparadas

### Deploy
- [ ] Variables configuradas en Cloudflare (Production + Preview)
- [ ] PR #54 mergeado a main
- [ ] Build de Cloudflare completado exitosamente
- [ ] URL de producción accesible

### Post-Deploy
- [ ] Homepage carga correctamente
- [ ] Login funciona
- [ ] Registro funciona
- [ ] Sesión persiste correctamente
- [ ] Dashboard accesible tras login
- [ ] APIs responden sin errores
- [ ] No hay errores en consola del navegador

---

## 🎯 Configuración Avanzada (Opcional)

### Dominio Personalizado
1. Ve a tu proyecto en Cloudflare Pages
2. Click en **"Custom domains"**
3. Click en **"Set up a custom domain"**
4. Ingresa `focusonenglish.com` o `www.focusenglish.com`
5. Sigue las instrucciones para configurar DNS

### Redirects y Headers
Ya están configurados en `next.config.js`:
- `/signin` → `/cuenta/login` (301)
- `/register` → `/cuenta/registro` (301)
- `/diagnostico` → `/test-nivel` (301)

### Rate Limiting y Seguridad
Considera agregar en Cloudflare:
1. **Rate Limiting** para APIs de autenticación
2. **WAF Rules** para protección DDoS
3. **Bot Fight Mode** para prevenir bots maliciosos

---

## 📚 Recursos Útiles

### Documentación del Proyecto
- `SUPABASE_AUTH_MIGRATION.md` - Detalles técnicos de la migración
- `INSTRUCCIONES_PARA_TI.md` - Guía rápida de configuración
- `RESUMEN_FINAL_MIGRACION_SUPABASE_2026-01-21.txt` - Resumen completo

### Enlaces Importantes
- **Cloudflare Dashboard**: https://dash.cloudflare.com
- **Supabase Dashboard**: https://app.supabase.com
- **Repositorio GitHub**: https://github.com/u7934364978-maker/focusonenglish
- **PR #54**: https://github.com/u7934364978-maker/focusonenglish/pull/54

### Documentación Oficial
- **Cloudflare Pages**: https://developers.cloudflare.com/pages
- **Next.js on Cloudflare**: https://developers.cloudflare.com/pages/framework-guides/nextjs
- **Supabase Auth**: https://supabase.com/docs/guides/auth
- **@cloudflare/next-on-pages**: https://github.com/cloudflare/next-on-pages

---

## 🎉 Resultado Final Esperado

Una vez completados todos los pasos:

✅ **Sitio en producción**: https://focusonenglish.pages.dev
✅ **Autenticación funcionando** con Supabase Auth
✅ **Edge Runtime compatible** con Cloudflare Pages
✅ **100% serverless** y escalable
✅ **Rendimiento optimizado** con Cloudflare CDN
✅ **Seguro** con JWT y Row Level Security
✅ **Sin costos de servidor** en free tier de Cloudflare

---

## 💡 Próximos Pasos Después del Deploy

1. **Monitoreo**: Configura alertas en Cloudflare Analytics
2. **SEO**: Verifica que `sitemap.xml` y `robots.txt` funcionen
3. **Performance**: Revisa Core Web Vitals en Cloudflare
4. **Testing**: Realiza pruebas de carga con usuarios reales
5. **Backup**: Configura backups automáticos en Supabase

---

## 📞 Soporte

Si tienes problemas durante el despliegue:

1. **Revisa los logs** en Cloudflare Pages > Deployments > [tu deploy] > View details
2. **Consulta la documentación** incluida en el repositorio
3. **Verifica las variables** están correctamente configuradas
4. **Prueba localmente** con `npm run dev` para descartar problemas del código

---

**Última actualización**: 2026-01-21
**Versión del Sistema**: 2.0.0 (Supabase Auth)
**Estado**: LISTO PARA PRODUCCIÓN ✅

---

## 🔐 Seguridad y Mejores Prácticas

### Variables de Entorno
- ✅ **NUNCA** comitear archivos `.env` al repositorio
- ✅ Usar diferentes keys para Production y Preview
- ✅ Rotar las `service_role_key` periódicamente
- ✅ Usar Stripe en modo test antes de producción

### Supabase Row Level Security (RLS)
Asegúrate de tener políticas RLS configuradas en Supabase:

```sql
-- Ejemplo: Solo el usuario puede ver su propio perfil
CREATE POLICY "Users can view own profile"
ON user_profiles FOR SELECT
USING (auth.uid() = user_id);

-- Ejemplo: Solo el usuario puede actualizar su propio perfil
CREATE POLICY "Users can update own profile"
ON user_profiles FOR UPDATE
USING (auth.uid() = user_id);
```

### Rate Limiting
Considera implementar rate limiting en Cloudflare:
- Login: 5 intentos por 15 minutos
- Signup: 3 registros por hora
- API calls: 100 requests por minuto

---

**¡TODO LISTO PARA PRODUCCIÓN! 🚀**

Sigue estos pasos y tendrás tu aplicación en línea en menos de 20 minutos.
