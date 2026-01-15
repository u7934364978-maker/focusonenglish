# 🇪🇸 GUÍA COMPLETA: CONFIGURACIÓN PARA ESPAÑA

**Fecha**: 15 de Enero 2026  
**Objetivo**: Optimizar Vercel, Cloudflare y código para servir SOLO a España

---

## ✅ **ESTADO ACTUAL**

### Vercel - Región Frankfurt ✅ CORRECTO

**Archivo**: `vercel.json`
```json
{
  "regions": ["fra1"]
}
```

**Estado**: ✅ **YA ESTÁ CONFIGURADO ÓPTIMAMENTE**

- `fra1` = Frankfurt, Alemania (la región de Vercel MÁS CERCANA a España)
- Latencia España → Frankfurt: ~40-60ms (excelente)
- **NO EXISTE** región Vercel en España actualmente

### Por Qué Frankfurt (No Estados Unidos)

Vercel tiene estas regiones disponibles:
- `iad1` - Washington DC, USA (Este) 🇺🇸
- `sfo1` - San Francisco, USA (Oeste) 🇺🇸
- `fra1` - Frankfurt, Alemania 🇩🇪 ← **TU CONFIGURACIÓN ✅**
- `arn1` - Estocolmo, Suecia 🇸🇪
- `gru1` - São Paulo, Brasil 🇧🇷
- `hnd1` - Tokio, Japón 🇯🇵
- `sin1` - Singapur 🇸🇬
- `syd1` - Sídney, Australia 🇦🇺

**Frankfurt (`fra1`) es la MEJOR opción para España** porque:
1. ✅ Es la más cercana geográficamente (~2,000 km)
2. ✅ Baja latencia (40-60ms desde España)
3. ✅ Dentro de Europa (mejores leyes de privacidad GDPR)
4. ✅ Zona horaria compatible (GMT+1)
5. ✅ Regulación europea (datos no salen de la UE)

---

## 🔍 **POR QUÉ VES "ESTADOS UNIDOS" EN EL DESPLIEGUE**

### Durante el Build
Cuando haces deploy en Vercel, verás mensajes como:
```
Deploying to production (iad1)...
Building in Washington DC, USA...
```

**Esto es NORMAL** porque:
1. **Build server** (donde se compila el código) → Puede estar en USA
2. **Runtime server** (donde se sirve la web) → Frankfurt (`fra1`) ✅

**El build location NO afecta a tus usuarios**. Solo es donde se compila el código.

Lo importante es la región de **runtime** (donde la web está servida).

### Cómo Verificar que Sirve desde Frankfurt

#### Método 1: Headers HTTP (Terminal)
```bash
curl -I https://focus-on-english.com

# Busca esta línea:
x-vercel-id: fra1::xxxxx-xxxxx  ← "fra1" = Frankfurt ✅
```

#### Método 2: Vercel Dashboard
1. Ve a: https://vercel.com/dashboard
2. Selecciona tu proyecto "focusonenglish"
3. Settings → Functions
4. Verifica: **Region: Europe West (Frankfurt)** ✅

#### Método 3: Chrome DevTools
1. Abre tu web: https://focus-on-english.com
2. DevTools → Network tab
3. Recarga la página (F5)
4. Click en el primer request (document)
5. Pestaña "Headers"
6. Busca `x-vercel-id: fra1::...` ✅

---

## 🌍 **CONFIGURACIÓN CLOUDFLARE**

### ¿Usas Cloudflare?

Primero verifica si tu DNS está en Cloudflare:
```bash
nslookup focus-on-english.com
# O
dig focus-on-english.com
```

Si los nameservers son de Cloudflare (tipo `ns1.cloudflare.com`), entonces SÍ lo usas.

---

### Opción A: Sin Restricción Geográfica (RECOMENDADO) ✅

**Razón**: Cloudflare automáticamente sirve desde el datacenter MÁS CERCANO al usuario.

**Cómo funciona**:
```
Usuario en Madrid
  ↓
Cloudflare Edge Madrid (10ms)
  ↓
Vercel Frankfurt (40ms)
  ↓
Total: ~50ms ✅ EXCELENTE
```

**NO necesitas configurar nada**. Cloudflare ya optimiza por geografía automáticamente.

**Ventajas**:
- ✅ SEO: Google puede indexar desde cualquier país
- ✅ Usuarios españoles en el extranjero pueden acceder
- ✅ APIs y servicios externos funcionan
- ✅ Mejor para testing y desarrollo

---

### Opción B: Restricción Geográfica (Solo España)

Si SOLO quieres que usuarios en España accedan a la web:

#### B.1. Cloudflare Firewall Rules

**Paso a paso**:

1. **Ir a Cloudflare Dashboard**:
   - https://dash.cloudflare.com
   - Selecciona tu dominio `focus-on-english.com`

2. **Crear regla de firewall**:
   - Menú lateral → **Security** → **WAF**
   - Click **"Create firewall rule"**

3. **Configuración básica** (Bloquear todo excepto España):
   ```
   Nombre: Solo España
   
   When incoming requests match:
   Field: Country
   Operator: does not equal
   Value: Spain
   
   Then:
   Action: Block
   ```

**⚠️ PROBLEMA**: Esto bloqueará:
- ❌ Google Bot USA (afecta indexación SEO)
- ❌ Cloudflare verification checks
- ❌ APIs externas (payments, analytics)
- ❌ CDN de imágenes

---

#### B.2. Cloudflare Rules Avanzadas (MEJOR) ⭐

**Permitir bots, bloquear solo humanos fuera de España**:

```
Nombre: Solo España (permitir bots)

Expression:
(ip.geoip.country ne "ES") and not (cf.client.bot)

Action: Challenge (CAPTCHA)
```

**Resultado**:
- ✅ Usuarios en España → Acceso directo
- ✅ Google Bot → Acceso directo (indexación)
- ✅ Cloudflare verification → Acceso directo
- ⚠️ Usuarios fuera de España → CAPTCHA (pueden pasar)

**Cómo implementar**:

1. Cloudflare Dashboard → Security → WAF
2. Create Firewall Rule
3. **Expression**:
   ```
   (ip.geoip.country ne "ES") and not (cf.client.bot)
   ```
4. **Action**: Challenge (CAPTCHA)
5. Save and Deploy

---

#### B.3. Cloudflare Rules MUY Avanzadas (Más Flexible)

**Permitir España + Países vecinos + Bots**:

```
Expression:
(
  ip.geoip.country ne "ES" and 
  ip.geoip.country ne "PT" and 
  ip.geoip.country ne "FR" and 
  ip.geoip.country ne "IT" and
  ip.geoip.country ne "DE"
) and not (cf.client.bot)

Action: Challenge
```

**Resultado**:
- ✅ España + Portugal + Francia + Italia + Alemania → Acceso directo
- ✅ Todos los bots → Acceso directo
- ⚠️ Resto del mundo → CAPTCHA

---

#### B.4. Cloudflare con Redirección Educativa

**Mejor UX**: En lugar de bloquear, mostrar página informativa:

```
Expression:
(ip.geoip.country ne "ES") and not (cf.client.bot)

Action: Redirect
Status Code: 302
URL: https://focus-on-english.com/solo-espana
```

Luego creas la página `/app/solo-espana/page.tsx`:
```tsx
export default function SoloEspana() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-600 to-purple-600">
      <div className="max-w-2xl mx-auto text-center text-white p-8">
        <h1 className="text-4xl font-black mb-6">
          🇪🇸 Servicio Disponible Solo en España
        </h1>
        <p className="text-xl mb-4">
          Focus English está optimizado para el mercado español.
        </p>
        <p className="text-lg">
          Actualmente solo ofrecemos nuestros servicios en España.
        </p>
        <div className="mt-8">
          <p className="text-sm opacity-80">
            ¿Vives en España? Puede que tu VPN o proxy esté activo.
          </p>
        </div>
      </div>
    </div>
  );
}
```

---

## 💻 **CONFIGURACIÓN EN CÓDIGO (Next.js)**

### Opción 1: Middleware Geo-Restricción

**Archivo**: `middleware.ts` (actualmente solo protege rutas autenticadas)

Si quieres añadir geo-restricción a nivel de código:

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Obtener país del header de Vercel
  const country = request.geo?.country || 'UNKNOWN';
  
  // Lista de países permitidos
  const allowedCountries = ['ES', 'PT']; // España y Portugal
  
  // Verificar si es un bot (permitir siempre para SEO)
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|crawling/i.test(userAgent);
  
  // Si es bot, permitir (SEO)
  if (isBot) {
    return NextResponse.next();
  }
  
  // Si no está en países permitidos, redirigir
  if (!allowedCountries.includes(country)) {
    return NextResponse.redirect(new URL('/solo-espana', request.url));
  }
  
  // Permitir acceso
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - solo-espana (página de restricción)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|solo-espana).*)',
  ],
};
```

**⚠️ NOTA**: El geo location en Vercel requiere:
- Plan **Pro** o superior ($20/mes)
- En plan Hobby, `request.geo` será `undefined`

---

### Opción 2: Detección Client-Side (JavaScript)

**Ventaja**: Funciona en plan Hobby gratuito

```typescript
// app/components/GeoCheck.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GeoCheck() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkLocation() {
      try {
        // API gratuita de geolocalización
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // Si no está en España, redirigir
        if (data.country_code !== 'ES') {
          router.push('/solo-espana');
        }
      } catch (error) {
        // Si falla, permitir acceso (no bloquear por error)
        console.log('Geo check failed, allowing access');
      } finally {
        setChecking(false);
      }
    }

    checkLocation();
  }, [router]);

  // Mostrar loading mientras verifica
  if (checking) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
      </div>
    );
  }

  return null;
}
```

**Añadir en layout**:
```typescript
// app/layout.tsx
import GeoCheck from '@/components/GeoCheck';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <GeoCheck />
        {children}
      </body>
    </html>
  );
}
```

**⚠️ PROBLEMA**: Client-side es bypasseable (usuario puede deshabilitar JavaScript).

---

## 📊 **COMPARACIÓN DE MÉTODOS**

| Método | Seguridad | SEO | Costo | Recomendación |
|--------|-----------|-----|-------|---------------|
| **Cloudflare Firewall** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Gratis | ✅ MEJOR |
| **Next.js Middleware** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Vercel Pro | ✅ Muy bueno |
| **Client-side JS** | ⭐⭐ | ⭐⭐⭐⭐⭐ | Gratis | ⚠️ Bypasseable |
| **Sin restricción** | N/A | ⭐⭐⭐⭐⭐ | Gratis | ✅ Recomendado |

---

## 🎯 **RECOMENDACIÓN FINAL**

### Para Tu Caso (Focus English):

**OPCIÓN RECOMENDADA**: **NO restringir geográficamente** ✅

**Razones**:
1. **SEO**: Google puede indexar desde USA (mayoría de bots)
2. **Flexibilidad**: Estudiantes españoles que viajan pueden acceder
3. **Testing**: Puedes probar desde cualquier lugar
4. **Expansión futura**: Si después quieres expandir a Latinoamérica
5. **Simplicidad**: Menos configuración, menos problemas

**Tu configuración actual es ÓPTIMA**:
- ✅ Vercel región Frankfurt (más cerca de España)
- ✅ Cloudflare Edge (automático)
- ✅ Código en español
- ✅ Keywords con "España"
- ✅ Moneda EUR
- ✅ Schema.org areaServed: España

**Resultado**:
- Usuarios españoles → Latencia 50-80ms ⚡
- Google puede indexar desde cualquier país ✅
- No pierdes oportunidades de tráfico 📈

---

### Si AÚN ASÍ Quieres Restringir:

**MEJOR OPCIÓN**: **Cloudflare Firewall Rule (Opción B.2)**

```
Expression:
(ip.geoip.country ne "ES") and not (cf.client.bot)

Action: Challenge (CAPTCHA)
```

**Ventajas**:
- ✅ Gratis (Cloudflare Free plan)
- ✅ Permite bots de Google
- ✅ Seguridad nivel Cloudflare
- ✅ Usuarios fuera de España pueden pasar CAPTCHA si necesario

---

## 🚀 **VERIFICACIÓN ACTUAL**

### Test de Latencia desde España

```bash
# Desde terminal en España
curl -w "@curl-format.txt" -o /dev/null -s https://focus-on-english.com

# O usa: https://www.dotcom-tools.com/website-speed-test
# Selecciona: Madrid, Spain
```

**Latencia esperada desde España**:
- Sin Cloudflare: 40-60ms (Vercel Frankfurt)
- Con Cloudflare: 10-30ms (Edge Madrid + Frankfurt)

---

## 📋 **CHECKLIST DE IMPLEMENTACIÓN**

### ✅ Ya Hecho (Estado Actual)
- [x] Vercel región Frankfurt (`fra1`)
- [x] Código en español
- [x] Keywords con "España"
- [x] Moneda EUR
- [x] Schema.org con España
- [x] Locale es_ES

### ⚠️ Opcional (Si Quieres Restricción)
- [ ] Cloudflare Firewall Rule
- [ ] Página `/solo-espana`
- [ ] Middleware geo-check
- [ ] Client-side verification

### 🔧 Recomendado (Monitoring)
- [ ] Configurar Vercel Analytics
- [ ] Configurar Cloudflare Analytics
- [ ] Monitor latency por región
- [ ] Test de velocidad mensual

---

## 💡 **COMANDOS ÚTILES**

### Verificar Región Vercel
```bash
# Ver headers HTTP
curl -I https://focus-on-english.com | grep vercel

# Ver respuesta completa
curl -v https://focus-on-english.com 2>&1 | grep -i vercel
```

### Verificar Cloudflare
```bash
# Ver si pasa por Cloudflare
curl -I https://focus-on-english.com | grep -i cloudflare

# Ver servidor
curl -I https://focus-on-english.com | grep -i server
```

### Test de Velocidad
```bash
# Ping simple
ping focus-on-english.com

# Test con curl (tiempo total)
time curl -s -o /dev/null https://focus-on-english.com
```

---

## 📞 **SOPORTE Y RECURSOS**

### Vercel Regions
- Docs: https://vercel.com/docs/concepts/edge-network/regions
- Dashboard: https://vercel.com/dashboard

### Cloudflare Firewall
- Docs: https://developers.cloudflare.com/firewall/
- Dashboard: https://dash.cloudflare.com

### Testing Tools
- WebPageTest: https://www.webpagetest.org/
- GTmetrix: https://gtmetrix.com/
- Cloudflare Speed Test: https://speed.cloudflare.com/

---

## ✅ **CONCLUSIÓN**

**Estado Actual**: ✅ **ÓPTIMO PARA ESPAÑA**

Tu configuración actual (`fra1` Frankfurt) es la MEJOR posible para servir a usuarios españoles con la infraestructura de Vercel.

**NO necesitas cambiar nada** a menos que quieras:
1. Restricción geográfica estricta → Usar Cloudflare Firewall
2. Expansion futura → Mantener como está (sin restricción)

**Recomendación**: **Mantener configuración actual** (sin restricción geográfica).

---

*Documento creado: 15 de Enero 2026*  
*Última actualización: 15 de Enero 2026*
