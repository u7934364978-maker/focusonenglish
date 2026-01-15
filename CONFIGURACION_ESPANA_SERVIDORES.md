# 🌍 CONFIGURACIÓN PARA ESPAÑA - SERVIDORES Y GEO-RESTRICCIÓN

**Fecha**: 15 de Enero 2026  
**Objetivo**: Optimizar servidores para España y configurar geo-restricción

---

## 📊 ESTADO ACTUAL

### Vercel - Región Configurada
- ✅ **Región actual**: `fra1` (Frankfurt, Alemania)
- 📍 **Distancia a España**: ~1,500 km
- ⚡ **Latencia estimada**: 15-25ms
- 🏆 **Mejor opción disponible en Vercel**

**¿Por qué Frankfurt?**
- Vercel NO tiene servidores en España directamente
- Frankfurt (`fra1`) es la región más cercana disponible
- Alternativas menos óptimas:
  - `iad1` (Virginia, USA) - ❌ ~6,000 km
  - `sfo1` (San Francisco) - ❌ ~9,500 km
  - `lhr1` (Londres, UK) - 🟡 ~1,300 km (Brexit complica la latencia)

### Cloudflare - CDN Global
- 🌐 Cloudflare tiene +200 datacenters
- 🇪🇸 **Edge locations en España**:
  - Madrid (MAD)
  - Barcelona (BCN)
- ⚡ **Latencia**: <10ms dentro de España
- 🎯 **Ventaja**: Contenido servido desde España automáticamente

---

## 🎯 RECOMENDACIÓN ÓPTIMA

### Arquitectura Dual: Vercel + Cloudflare

```
Usuario en España
    ↓
Cloudflare Edge (Madrid/Barcelona) - <10ms
    ↓ (solo si necesita origen)
Vercel Frankfurt (fra1) - +15ms
```

**Beneficios**:
- 95% de requests servidos desde España (Cloudflare cache)
- Solo 5% van a Frankfurt (contenido dinámico)
- Latencia promedio: **<10ms**
- Mejor SEO por velocidad de carga

---

## 🔧 CONFIGURACIÓN PASO A PASO

### 1. Verificar Región en Vercel (COMPLETO ✅)

Tu `vercel.json` ya tiene:
```json
{
  "regions": ["fra1"]
}
```

**Alternativa si quieres cambiar**:
```json
{
  "regions": ["lhr1"]  // Londres (1,300 km a España)
}
```

Pero **fra1 es la mejor opción** por estabilidad.

### 2. Configurar Cloudflare como CDN

#### Opción A: Cloudflare Pages (Recomendado 🏆)

**Ventajas**:
- Hosting nativo en Cloudflare
- Edge en España automático
- 0ms latencia a Edge locations
- Gratis hasta 500 builds/mes

**Setup**:
```bash
# Instalar Wrangler CLI
npm install -g wrangler

# Conectar con Cloudflare
wrangler login

# Desplegar
npx wrangler pages deploy .vercel/output/static --project-name=focus-english
```

**Configuración en `wrangler.toml`**:
```toml
name = "focus-english"
compatibility_date = "2024-01-15"

[site]
bucket = ".vercel/output/static"

[[routes]]
pattern = "focusenglish.com/*"
zone_id = "TU_ZONE_ID"
```

#### Opción B: Vercel + Cloudflare CDN (Más simple)

1. **Configurar DNS en Cloudflare**:
```
Tipo: CNAME
Nombre: @
Valor: cname.vercel-dns.com
Proxy: ✅ Activado (naranja)
```

2. **Activar Full (Strict) SSL en Cloudflare**:
```
SSL/TLS → Overview → Full (strict)
```

3. **Configurar Page Rules para España**:
```
Cache Level: Cache Everything
Edge Cache TTL: 7 days
Browser Cache TTL: 4 hours
```

### 3. Geo-Restricción: Mostrar SOLO en España 🇪🇸

#### Opción 1: Cloudflare Workers (Recomendado 🏆)

Crear archivo `workers/geo-block.js`:
```javascript
export default {
  async fetch(request, env) {
    // Obtener país del request
    const country = request.cf?.country || 'UNKNOWN';
    
    // Solo permitir España
    if (country !== 'ES') {
      return new Response(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Servicio No Disponible</title>
          <style>
            body {
              font-family: system-ui, -apple-system, sans-serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              color: white;
            }
            .container {
              text-align: center;
              padding: 2rem;
              max-width: 600px;
            }
            h1 { font-size: 2rem; margin-bottom: 1rem; }
            p { font-size: 1.1rem; line-height: 1.6; }
            .icon { font-size: 4rem; margin-bottom: 1rem; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="icon">🇪🇸</div>
            <h1>Servicio Solo Disponible en España</h1>
            <p>
              Focus English está disponible exclusivamente para estudiantes en España.
              Si estás en España y ves este mensaje, contacta con soporte.
            </p>
            <p style="margin-top: 2rem; font-size: 0.9rem; opacity: 0.8;">
              País detectado: ${country}<br>
              Email: info@focusenglish.com
            </p>
          </div>
        </body>
        </html>
      `, {
        status: 451,  // 451 Unavailable For Legal Reasons
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=3600'
        }
      });
    }
    
    // Permitir acceso desde España
    return fetch(request);
  }
};
```

**Desplegar Worker**:
```bash
# Crear worker
wrangler init focus-english-geo

# Copiar el código anterior a worker.js

# Desplegar
wrangler deploy

# Configurar ruta
wrangler route add focusenglish.com/* <worker-name>
```

#### Opción 2: Cloudflare Firewall Rules (Más simple pero menos flexible)

1. Ir a: **Cloudflare Dashboard → Security → WAF → Firewall Rules**

2. Crear regla:
```
Rule Name: Permitir solo España
Field: Country
Operator: does not equal
Value: ES
Action: Block
Response: Custom HTML (usar el HTML anterior)
```

#### Opción 3: Next.js Middleware (No recomendado para geo-blocking)

Agregar a `middleware.ts`:
```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Obtener país de header (solo funciona con Vercel Edge o Cloudflare)
  const country = request.geo?.country || request.headers.get('cf-ipcountry');
  
  // Bloquear si no es España
  if (country && country !== 'ES') {
    return new Response(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <title>No Disponible</title>
        </head>
        <body>
          <h1>Servicio Solo en España 🇪🇸</h1>
          <p>País detectado: ${country}</p>
        </body>
      </html>
    `, {
      status: 451,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  }
  
  return NextResponse.next();
}

// Aplicar a todas las rutas excepto API y assets
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
```

**❌ Problema**: Solo funciona en Vercel Edge, y requiere que el request llegue al servidor (más latencia).

---

## 🚀 PLAN DE IMPLEMENTACIÓN RECOMENDADO

### Fase 1: Optimización de Servidor (COMPLETADO ✅)
- [x] Configurar región `fra1` en Vercel
- [x] Verificar `vercel.json`

### Fase 2: Cloudflare CDN (15 minutos)
1. [ ] Registrar dominio en Cloudflare
2. [ ] Configurar DNS: CNAME a Vercel con Proxy activado
3. [ ] Configurar SSL Full (Strict)
4. [ ] Activar Auto Minify (HTML, CSS, JS)
5. [ ] Configurar Brotli compression

### Fase 3: Geo-Restricción España (30 minutos)
1. [ ] Crear Cloudflare Worker con geo-blocking
2. [ ] Probar con VPN desde otros países
3. [ ] Añadir excepción para IPs de testing/admin
4. [ ] Configurar página de error 451 personalizada

### Fase 4: Optimizaciones de Velocidad (1 hora)
1. [ ] Configurar Page Rules para cache agresivo
2. [ ] Activar Argo Smart Routing (optional, $5/mes)
3. [ ] Configurar Early Hints
4. [ ] Configurar HTTP/3 (QUIC)

---

## 📊 COMPARACIÓN DE OPCIONES

| Criterio | Solo Vercel fra1 | Vercel + Cloudflare CDN | Cloudflare Pages |
|----------|------------------|-------------------------|------------------|
| **Latencia España** | 15-25ms | <10ms (cache) | <5ms |
| **Costo** | $0 | $0 | $0 |
| **Setup** | ✅ Ya configurado | 🟡 15 min | 🟡 30 min |
| **Geo-block** | ❌ No nativo | ✅ Workers/Firewall | ✅ Workers |
| **Edge España** | ❌ No | ✅ Madrid/Barcelona | ✅ Madrid/Barcelona |
| **Recomendado** | 🟢 Actual | 🏆 Mejor balance | 🏆 Máximo rendimiento |

---

## 🧪 TESTING

### Verificar Región Actual
```bash
# Ver desde dónde se sirve
curl -I https://focusenglish.com | grep -i server

# Ver latencia desde España
curl -w "Time: %{time_total}s\n" -o /dev/null -s https://focusenglish.com
```

### Probar Geo-Blocking
```bash
# Con VPN desde Francia (debe bloquear)
curl https://focusenglish.com

# Con VPN desde España (debe permitir)
curl https://focusenglish.com
```

### Herramientas Online
- **GTmetrix**: https://gtmetrix.com (seleccionar Madrid server)
- **WebPageTest**: https://www.webpagetest.org (seleccionar Spain location)
- **Cloudflare Speed Test**: https://speed.cloudflare.com

---

## 🎯 RESULTADO ESPERADO

Después de implementar Cloudflare:

```
ANTES (Solo Vercel fra1):
├─ España → Frankfurt → 15-25ms
├─ Cache: CDN Vercel
└─ Edge: Frankfurt

DESPUÉS (Vercel + Cloudflare):
├─ España → Madrid Edge → <10ms ⚡
├─ Cache: Cloudflare Madrid/Barcelona
└─ Origen: Vercel Frankfurt (solo fallback)

TRÁFICO:
├─ 95% servido desde España (<10ms)
└─ 5% va a Frankfurt para contenido dinámico
```

**Métricas esperadas**:
- ✅ First Contentful Paint (FCP): <1s
- ✅ Largest Contentful Paint (LCP): <1.5s
- ✅ Time to Interactive (TTI): <2s
- ✅ Total Blocking Time (TBT): <100ms

---

## 💡 RECOMENDACIONES ADICIONALES

### 1. Hreflang para España
Agregar en `app/layout.tsx`:
```tsx
<link rel="alternate" hreflang="es-ES" href="https://focusenglish.com" />
<link rel="alternate" hreflang="x-default" href="https://focusenglish.com" />
```

### 2. Configurar Google Search Console para España
- Propiedad: https://focusenglish.com
- País de destino: España
- Idioma: Español (España)

### 3. Structured Data para España
Ya implementado en `app/schema.tsx`:
```typescript
"areaServed": {
  "@type": "Country",
  "name": "España"
}
```

### 4. Robots.txt para España
Ya configurado en `app/robots.ts`:
```typescript
host: 'https://focus-on-english.com'
```

---

## ❓ PREGUNTAS FRECUENTES

### ¿Necesito cambiar de fra1 a otra región?
**No**. Frankfurt es la mejor opción disponible en Vercel para España. Con Cloudflare encima, la latencia será <10ms.

### ¿Cloudflare es gratis?
**Sí**. El plan Free incluye:
- CDN global ilimitado
- SSL gratuito
- DDoS protection
- 100,000 requests/día de Workers (suficiente para geo-blocking)

### ¿Puedo hacer geo-blocking sin Cloudflare?
Técnicamente sí con Vercel Edge, pero:
- ❌ Menos preciso
- ❌ Mayor latencia (request va a Frankfurt primero)
- ❌ No tienes página de error personalizada fácil

### ¿El geo-blocking afecta al SEO?
**No**, porque:
- Googlebot crawler viene desde USA (será bloqueado)
- Necesitas configurar excepción para Googlebot:
```javascript
const isGooglebot = request.headers.get('user-agent')?.includes('Googlebot');
if (country !== 'ES' && !isGooglebot) {
  // bloquear
}
```

**⚠️ IMPORTANTE**: Si bloqueas Googlebot, no indexará tu web.

**Solución**: Permitir Googlebot + agregar hreflang es-ES.

---

## 🚨 DECISIÓN FINAL

### Recomendación 🏆

```
1. MANTENER Vercel fra1 (ya configurado)
2. AGREGAR Cloudflare CDN (15 min setup)
3. IMPLEMENTAR Cloudflare Worker para geo-blocking (30 min)
4. PERMITIR Googlebot en Worker (5 min)
```

**Resultado**:
- ⚡ Latencia <10ms en España
- 🌍 Solo visible en España (excepto bots)
- 🚀 SEO óptimo
- 💰 Costo: $0

---

## 📝 PRÓXIMOS PASOS

- [ ] Decidir: ¿Quieres implementar Cloudflare CDN?
- [ ] Decidir: ¿Quieres geo-restricción estricta (solo España)?
- [ ] Si sí a ambos: Preparar credenciales de Cloudflare
- [ ] Implementar configuración paso a paso
- [ ] Testing con VPN

**¿Quieres que implemente Cloudflare y geo-blocking ahora?**
