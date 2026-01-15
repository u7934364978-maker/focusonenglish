# 🌍 GUÍA RÁPIDA B: CLOUDFLARE WORKER - GEO-RESTRICCIÓN ESPAÑA

**Fecha**: 15 de Enero 2026  
**Tiempo estimado**: 10-15 minutos  
**Objetivo**: Configurar geo-restricción para mostrar la web solo en España

---

## 📋 ¿QUÉ HACE ESTE WORKER?

El Cloudflare Worker que ya está en el proyecto (`workers/geo-restriction.js`) hace lo siguiente:

✅ **Permite acceso desde España** (país ES)
❌ **Bloquea acceso desde otros países** (muestra página 451 profesional)
✅ **Permite TODOS los bots de búsqueda** (Google, Bing, etc.) - SEO protegido
✅ **Permite assets estáticos** (imágenes, CSS, JS)
✅ **Logging detallado** para debugging

---

## 🎯 OPCIÓN 1: DEPLOY RÁPIDO (10 minutos)

Si ya tienes cuenta de Cloudflare y tu dominio configurado:

### Paso 1: Instalar Wrangler

```bash
npm install -g wrangler
```

### Paso 2: Login

```bash
wrangler login
```

Se abrirá el navegador, acepta los permisos.

### Paso 3: Obtener IDs

1. Ve a: https://dash.cloudflare.com
2. Copia tu **Account ID** (arriba derecha, en tu perfil)
3. Selecciona tu dominio → Copia el **Zone ID** (panel derecho)

### Paso 4: Editar wrangler.toml

Abre `wrangler.toml` y reemplaza:

```toml
account_id = "TU_ACCOUNT_ID_AQUI"  # ← Pega tu Account ID

[[routes]]
pattern = "focusenglish.com/*"     # ← Tu dominio
zone_name = "focusenglish.com"     # ← Tu dominio
```

### Paso 5: Deploy

```bash
cd /tu/proyecto/focusonenglish
wrangler deploy workers/geo-restriction.js --name focus-english-geo
```

### Paso 6: Configurar route

```bash
wrangler route add "focusenglish.com/*" focus-english-geo
wrangler route add "www.focusenglish.com/*" focus-english-geo
```

### Paso 7: Verificar

```bash
# Debe funcionar desde España
curl -I https://focusenglish.com

# Simular desde Francia (debe bloquear)
curl -I -H "cf-ipcountry: FR" https://focusenglish.com
```

---

## 🎯 OPCIÓN 2: SIN CLOUDFLARE WORKER (ALTERNATIVA)

Si no quieres configurar Cloudflare Worker ahora, puedes usar:

### A) Cloudflare Firewall Rules (más simple)

1. Ve a: https://dash.cloudflare.com
2. Selecciona tu dominio
3. **Security** → **WAF** → **Firewall Rules**
4. Click **Create Firewall Rule**
5. Configuración:
   ```
   Rule name: Solo España
   
   When incoming requests match:
   Field: Country
   Operator: does not equal
   Value: ES
   
   Then:
   Action: Block
   ```
6. **Deploy**

**❌ Desventaja**: Bloqueará también bots de búsqueda (malo para SEO)

### B) Next.js Middleware (no recomendado)

Añadir a `middleware.ts`:

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country;
  
  if (country && country !== 'ES') {
    return new Response('Servicio solo en España', { status: 451 });
  }
  
  return NextResponse.next();
}
```

**❌ Desventaja**: Solo funciona en Vercel Edge, menos preciso.

---

## ✅ VERIFICACIÓN

Después de configurar cualquier opción:

### Test 1: Desde España
```bash
curl https://focusenglish.com
# Debe devolver: 200 OK
```

### Test 2: Con VPN a otro país
1. Conecta VPN a Francia/USA/etc.
2. Abre: https://focusenglish.com
3. Debe mostrar: Página 451 "Servicio Solo en España"

### Test 3: Googlebot (crítico para SEO)
```bash
curl -H "User-Agent: Googlebot" https://focusenglish.com
# Debe devolver: 200 OK (aunque esté fuera de España)
```

---

## 🚨 IMPORTANTE: SEO

El Worker **NO bloqueará Googlebot** ni otros bots de búsqueda.

**Bots permitidos** (lista en `workers/geo-restriction.js`):
- Googlebot (Google)
- Bingbot (Bing)
- DuckDuckBot (DuckDuckGo)
- Baiduspider (Baidu)
- Yandexbot (Yandex)
- FacebookExternalHit (Facebook previews)
- TwitterBot (Twitter previews)
- LinkedInBot (LinkedIn previews)
- WhatsApp, Telegram bots

Esto significa:
✅ Google indexará tu web normalmente
✅ Redes sociales mostrarán previews
✅ Herramientas SEO funcionarán
❌ Usuarios reales fuera de España NO podrán acceder

---

## 💰 COSTO

**Cloudflare Workers Free Tier**:
- ✅ 100,000 requests/día: GRATIS
- ✅ Ilimitado bandwidth
- ✅ Edge locations globales

Para Focus English (estimado 5,000 visitas/día):
- **Costo mensual**: $0 🎉

Si superas 100k requests/día:
- **Paid plan**: $5/mes por 10M requests adicionales

---

## 🔧 CUSTOMIZACIÓN

### Permitir más países

Edita `workers/geo-restriction.js`, línea 62:

```javascript
// Antes (solo España):
if (country !== 'ES') {
  // bloquear
}

// Después (España + Portugal):
const ALLOWED_COUNTRIES = ['ES', 'PT'];
if (!ALLOWED_COUNTRIES.includes(country)) {
  // bloquear
}
```

### Whitelist de IPs

Edita línea 29:

```javascript
const ALLOWED_IPS = [
  '203.0.113.0',  // Tu IP de oficina
  '198.51.100.0', // VPN de empresa
];
```

### Cambiar mensaje de bloqueo

Edita la función `getBlockedHTML()` en el Worker (línea 100+).

---

## 📊 MONITORING

### Ver logs en tiempo real

```bash
wrangler tail focus-english-geo
```

Verás:
```
[GEO-BLOCK] Permitido: España, IP=xxx.xxx.xxx.xxx
[GEO-BLOCK] Bloqueado: País=FR, IP=xxx.xxx.xxx.xxx
[GEO-BLOCK] Bot permitido: googlebot
```

### Dashboard Cloudflare

1. Ve a: https://dash.cloudflare.com
2. **Workers & Pages**
3. Click en `focus-english-geo`
4. Ve métricas:
   - Requests/día
   - Latency
   - Errores
   - CPU time usage

---

## 🆘 TROUBLESHOOTING

### Error: "No account found"
```bash
wrangler logout
wrangler login
```

### Error: "Zone not found"
Verifica que tu dominio está en Cloudflare:
1. Dashboard → Domains
2. Si no está, agrégalo primero

### Worker no se activa
1. Verifica routes: `wrangler route list`
2. Verifica que el dominio tiene proxy activado (naranja) en DNS
3. Espera 2-3 minutos para propagación

### Googlebot bloqueado
Revisa que `ALLOWED_BOTS` en el Worker incluye 'googlebot' (línea 20).

---

## 🎯 RECOMENDACIÓN

### Para producción NOW:
**Opción 1** (Cloudflare Worker) es la mejor:
- ✅ Control total
- ✅ SEO protegido
- ✅ Logs detallados
- ✅ Página 451 profesional
- ✅ Fácil de customizar

### Para testing/desarrollo:
**Opción 2A** (Firewall Rules) es más rápida:
- ✅ Setup en 2 minutos
- ❌ Bloquea bots (temporal)
- ✅ Puedes cambiar a Worker después

---

## 📋 CHECKLIST

Antes de continuar al Paso C:

**Cloudflare Worker (Opción 1)**:
- [ ] Wrangler instalado
- [ ] Login completado
- [ ] Account ID y Zone ID obtenidos
- [ ] wrangler.toml editado
- [ ] Worker deployado exitosamente
- [ ] Routes configuradas
- [ ] Test desde España: ✅ Funciona
- [ ] Test con VPN: ❌ Bloqueado
- [ ] Test Googlebot: ✅ Funciona

**Firewall Rules (Opción 2A)**:
- [ ] Regla creada en Dashboard
- [ ] Test desde España: ✅ Funciona
- [ ] Test con VPN: ❌ Bloqueado
- [ ] **⚠️ Nota**: Bots bloqueados temporalmente

---

## ⏭️ PRÓXIMO PASO

Una vez completado Cloudflare Worker, continuar con:

**PASO C**: Crear contenido SEO
- Página pilar "Guía Completa Cursos Inglés Online España"
- Optimizar artículos del blog existentes
- Más enlaces internos

Ver: `ESTADO_PROYECTO_15_ENERO_2026.md` → Nivel 2: IMPORTANTE

---

**Generado**: 15 de Enero 2026  
**Tiempo estimado**: 10-15 minutos  
**Documentación completa**: Ver también `DEPLOY_CLOUDFLARE_WORKER.md`
