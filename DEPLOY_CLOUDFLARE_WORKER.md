# 🚀 GUÍA RÁPIDA: Deploy Cloudflare Worker

## Pre-requisitos
- ✅ Cuenta de Cloudflare (gratis): https://dash.cloudflare.com/sign-up
- ✅ Dominio configurado en Cloudflare
- ✅ Node.js instalado (ya lo tienes)

---

## PASO 1: Instalar Wrangler CLI (2 minutos)

```bash
# Instalar Wrangler globalmente
npm install -g wrangler

# Verificar instalación
wrangler --version
```

---

## PASO 2: Autenticar con Cloudflare (1 minuto)

```bash
# Login (abrirá navegador)
wrangler login

# Verificar que estás autenticado
wrangler whoami
```

---

## PASO 3: Obtener Account ID y Zone ID (3 minutos)

### Account ID:
1. Ve a: https://dash.cloudflare.com
2. Click en tu perfil (arriba derecha)
3. Copia el **Account ID**

### Zone ID (si ya tienes dominio en Cloudflare):
1. Ve a: https://dash.cloudflare.com
2. Selecciona tu dominio (focusenglish.com)
3. En el panel derecho, encuentra **Zone ID**
4. Copia el Zone ID

### Configurar IDs:

Edita `wrangler.toml`:
```toml
account_id = "TU_ACCOUNT_ID_AQUI"
zone_id = "TU_ZONE_ID_AQUI"  # Si ya tienes el dominio en Cloudflare

[[routes]]
pattern = "focusenglish.com/*"
zone_name = "focusenglish.com"
```

---

## PASO 4: Deploy del Worker (1 minuto)

```bash
# Desde el directorio del proyecto
cd /home/user/webapp

# Deploy
wrangler deploy workers/geo-restriction.js --name focus-english-geo

# Deberías ver:
# ✅ Deployed focus-english-geo
# 🌍 https://focus-english-geo.TUSUBDOMINIO.workers.dev
```

---

## PASO 5: Configurar Route (2 minutos)

### Opción A: Por línea de comandos
```bash
# Agregar route para tu dominio
wrangler route add "focusenglish.com/*" focus-english-geo

# También para www
wrangler route add "www.focusenglish.com/*" focus-english-geo

# Verificar routes
wrangler route list
```

### Opción B: Por Dashboard
1. Ve a: https://dash.cloudflare.com
2. Selecciona tu dominio
3. Ve a **Workers Routes**
4. Click **Add route**
5. Route: `focusenglish.com/*`
6. Worker: `focus-english-geo`
7. Save

---

## PASO 6: Testing (5 minutos)

### Test 1: Desde España (debe funcionar)
```bash
curl -I https://focusenglish.com
# Debe devolver: 200 OK
# Header: X-Country: ES
# Header: X-Served-From: ES-Edge
```

### Test 2: VPN a otro país (debe bloquear)
```bash
# Conectar VPN a Francia/USA/etc.
curl https://focusenglish.com

# Debe devolver: 451 Unavailable For Legal Reasons
# HTML: "Servicio Solo Disponible en España"
```

### Test 3: Googlebot (debe permitir)
```bash
curl https://focusenglish.com \
  -H "User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"

# Debe devolver: 200 OK (aunque esté fuera de España)
```

---

## PASO 7: Monitoreo

### Ver logs en tiempo real:
```bash
wrangler tail focus-english-geo

# Verás logs como:
# [GEO-BLOCK] Permitido: España, IP=xxx.xxx.xxx.xxx
# [GEO-BLOCK] Bloqueado: País=FR, IP=xxx.xxx.xxx.xxx
# [GEO-BLOCK] Bot permitido: googlebot
```

### Métricas en Dashboard:
1. Ve a: https://dash.cloudflare.com
2. Workers & Pages
3. Selecciona `focus-english-geo`
4. Ve métricas:
   - Requests/día
   - Errores
   - CPU time
   - Países bloqueados

---

## 🔧 CONFIGURACIÓN AVANZADA

### Agregar IPs de Testing

Edita `workers/geo-restriction.js`:
```javascript
const ALLOWED_IPS = [
  '203.0.113.0',  // IP de oficina
  '198.51.100.0', // VPN de empresa
];
```

Re-deploy:
```bash
wrangler deploy workers/geo-restriction.js --name focus-english-geo
```

### Agregar más bots permitidos

```javascript
const ALLOWED_BOTS = [
  'googlebot',
  'bingbot',
  'semrushbot',  // Agregar SEMrush
  'ahrefsbot',   // Agregar Ahrefs
];
```

---

## 📊 VERIFICACIÓN FINAL

### Checklist:
- [ ] Worker deployed exitosamente
- [ ] Route configurada para `focusenglish.com/*`
- [ ] Test desde España: ✅ Funciona
- [ ] Test desde otro país: ❌ Bloqueado (451)
- [ ] Test con User-Agent Googlebot: ✅ Funciona
- [ ] Logs visible en `wrangler tail`
- [ ] Métricas visibles en Dashboard

---

## ⚠️ IMPORTANTE: SEO

### El Worker permite bots por defecto
El worker está configurado para permitir:
- ✅ Googlebot
- ✅ Bingbot  
- ✅ Todos los bots de búsqueda principales

**No afectará tu SEO**, pero:

1. **Verifica en Google Search Console** (1-2 semanas):
   - Cobertura → Ver errores 451
   - Si Googlebot es bloqueado → Agregar a ALLOWED_BOTS

2. **Agrega hreflang** (ya lo tienes):
```html
<link rel="alternate" hreflang="es-ES" href="https://focusenglish.com" />
```

3. **Configura en Search Console**:
   - Orientación internacional → País: España

---

## 🆘 TROUBLESHOOTING

### Error: "No account found"
```bash
wrangler login
# Re-autenticar
```

### Error: "Route already exists"
```bash
# Listar routes
wrangler route list

# Eliminar route antigua
wrangler route delete <route-id>

# Agregar nueva
wrangler route add "focusenglish.com/*" focus-english-geo
```

### Worker no se activa
1. Verificar que el dominio esté en Cloudflare (proxy activado - naranja)
2. Verificar que la route esté configurada
3. Verificar en Dashboard → Workers → Routes

### Googlebot bloqueado
Editar `workers/geo-restriction.js`:
```javascript
// Verificar que 'googlebot' esté en ALLOWED_BOTS
const ALLOWED_BOTS = [
  'googlebot',  // ← Debe estar aquí
  // ...
];
```

---

## 💰 COSTOS

### Plan Free de Cloudflare Workers:
- ✅ **100,000 requests/día**: Gratis
- ✅ **CPU time**: 10ms/request gratis
- ✅ **Sin límite de bandwidth**

Para Focus English (estimado 5,000 visitas/día):
- **Costo**: $0/mes 🎉

Si superas 100,000 requests/día:
- **Plan Paid**: $5/mes por 10M requests adicionales

---

## 🎯 RESULTADO FINAL

Después del deploy:

```
Usuario en Francia 🇫🇷
    ↓
Cloudflare Edge (París)
    ↓
Worker: País=FR → ❌ 451 (Bloqueado)
    ↓
HTML: "Servicio Solo en España"

Usuario en España 🇪🇸
    ↓
Cloudflare Edge (Madrid)
    ↓
Worker: País=ES → ✅ 200 (Permitido)
    ↓
Vercel Frankfurt (fra1)
    ↓
Tu web renderizada
```

---

## 📞 SOPORTE

Si tienes problemas:
1. Consultar logs: `wrangler tail focus-english-geo`
2. Consultar docs: https://developers.cloudflare.com/workers/
3. Cloudflare Discord: https://discord.cloudflare.com/
4. Contactar: info@focusenglish.com

---

**¿Listo para deploy? Ejecuta:**

```bash
wrangler login
wrangler deploy workers/geo-restriction.js --name focus-english-geo
wrangler route add "focusenglish.com/*" focus-english-geo
```

🚀 ¡En 10 minutos tendrás geo-restricción funcionando!
