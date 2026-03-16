# Solución: Error Cloudflare beacon.min.js (CORS / SRI)

## El problema

Si ves estos errores en la consola del navegador:

- **CORS**: "Solicitud de origen cruzado bloqueada" en `static.cloudflareinsights.com/beacon.min.js`
- **SRI**: "Ninguno de los hashes sha512 en el atributo integrity coincide con el contenido"

Y los cursos no cargan correctamente, la causa suele ser una **optimización de Cloudflare** que modifica el script y rompe la verificación de integridad.

## Solución (en el panel de Cloudflare)

1. Entra en **[Cloudflare Dashboard](https://dash.cloudflare.com)** y selecciona el dominio `focus-on-english.com`.

2. Ve a **Speed** → **Optimization** → **Content Optimization**.

3. **Desactiva** estas opciones:
   - **Rocket Loader** → OFF (modifica scripts y rompe SRI)
   - **Auto Minify** → Desactiva **JavaScript** (y opcionalmente CSS si da problemas)

4. **Purga la caché**:
   - Ve a **Caching** → **Configuration**
   - Pulsa **Purge Everything**

5. Espera 1–2 minutos y prueba de nuevo la web.

## Alternativa: desactivar Web Analytics

Si usas **Cloudflare Web Analytics** (gratuito) y el problema continúa:

- Ve a **Web Analytics** en el menú lateral
- Desactiva temporalmente el beacon para comprobar si es la causa

## Nota

El script `beacon.min.js` lo inyecta Cloudflare, no el código de la aplicación. La corrección se hace siempre desde el panel de Cloudflare.
