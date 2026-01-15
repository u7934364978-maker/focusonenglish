/**
 * Cloudflare Worker para Geo-Restricción: Solo España 🇪🇸
 * 
 * Este worker permite el acceso solo desde España,
 * pero mantiene acceso para bots de búsqueda (SEO).
 * 
 * Deploy:
 * 1. npm install -g wrangler
 * 2. wrangler login
 * 3. wrangler deploy workers/geo-restriction.js
 * 4. wrangler route add focusenglish.com/* geo-restriction
 */

// Lista de User Agents de bots permitidos (para SEO)
const ALLOWED_BOTS = [
  'googlebot',           // Google
  'bingbot',             // Bing
  'slurp',               // Yahoo
  'duckduckbot',         // DuckDuckGo
  'baiduspider',         // Baidu
  'yandexbot',           // Yandex
  'facebookexternalhit', // Facebook preview
  'twitterbot',          // Twitter preview
  'linkedinbot',         // LinkedIn preview
  'whatsapp',            // WhatsApp preview
  'telegrambot',         // Telegram preview
];

// IPs de admin/testing (opcional)
const ALLOWED_IPS = [
  // Agregar IPs de oficina/VPN aquí si es necesario
  // '203.0.113.0',
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Obtener información de geolocalización
    const country = request.cf?.country || 'UNKNOWN';
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
    const clientIP = request.headers.get('cf-connecting-ip') || '';
    
    // 1. Permitir siempre assets estáticos (imágenes, CSS, JS)
    if (
      url.pathname.startsWith('/_next/') ||
      url.pathname.startsWith('/static/') ||
      url.pathname.startsWith('/images/') ||
      url.pathname.endsWith('.ico') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.jpg') ||
      url.pathname.endsWith('.svg') ||
      url.pathname.endsWith('.css') ||
      url.pathname.endsWith('.js')
    ) {
      return fetch(request);
    }
    
    // 2. Permitir bots de búsqueda (CRÍTICO para SEO)
    const isBot = ALLOWED_BOTS.some(bot => userAgent.includes(bot));
    if (isBot) {
      console.log(`[GEO-BLOCK] Bot permitido: ${userAgent}`);
      return fetch(request);
    }
    
    // 3. Permitir IPs whitelisted (opcional)
    if (ALLOWED_IPS.includes(clientIP)) {
      console.log(`[GEO-BLOCK] IP permitida: ${clientIP}`);
      return fetch(request);
    }
    
    // 4. Verificar país: Solo permitir España
    if (country !== 'ES') {
      console.log(`[GEO-BLOCK] Bloqueado: País=${country}, IP=${clientIP}, UA=${userAgent}`);
      
      return new Response(
        getBlockedHTML(country, url.hostname),
        {
          status: 451, // 451 Unavailable For Legal Reasons
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
            'X-Blocked-Country': country,
            'X-Allowed-Country': 'ES',
          },
        }
      );
    }
    
    // 5. País es España: Permitir acceso
    console.log(`[GEO-BLOCK] Permitido: España, IP=${clientIP}`);
    
    // Agregar headers personalizados para debugging
    const response = await fetch(request);
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('X-Served-From', 'ES-Edge');
    newResponse.headers.set('X-Country', country);
    
    return newResponse;
  }
};

/**
 * Genera HTML de página bloqueada
 */
function getBlockedHTML(country, hostname) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Servicio No Disponible | Focus English</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                   'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      color: white;
      padding: 1rem;
    }
    
    .container {
      text-align: center;
      max-width: 600px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 3rem 2rem;
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
    
    .flag {
      font-size: 5rem;
      margin-bottom: 1.5rem;
      animation: wave 2s ease-in-out infinite;
    }
    
    @keyframes wave {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-10deg); }
      75% { transform: rotate(10deg); }
    }
    
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    .subtitle {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .message {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 2rem;
      opacity: 0.95;
    }
    
    .info-box {
      background: rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      padding: 1.5rem;
      margin-top: 2rem;
    }
    
    .info-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .info-row:last-child {
      border-bottom: none;
    }
    
    .info-label {
      font-weight: 600;
      opacity: 0.9;
    }
    
    .info-value {
      font-family: 'Courier New', monospace;
      background: rgba(0, 0, 0, 0.2);
      padding: 0.25rem 0.75rem;
      border-radius: 6px;
    }
    
    .contact {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 0.95rem;
      opacity: 0.85;
    }
    
    .contact a {
      color: white;
      text-decoration: underline;
      font-weight: 600;
    }
    
    .contact a:hover {
      opacity: 0.8;
    }
    
    @media (max-width: 640px) {
      .container {
        padding: 2rem 1.5rem;
      }
      
      h1 {
        font-size: 1.5rem;
      }
      
      .subtitle {
        font-size: 1rem;
      }
      
      .message {
        font-size: 1rem;
      }
      
      .flag {
        font-size: 3.5rem;
      }
      
      .info-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="flag">🇪🇸</div>
    
    <h1>Servicio Solo Disponible en España</h1>
    
    <div class="subtitle">
      Este servicio está exclusivamente disponible para usuarios en España
    </div>
    
    <div class="message">
      <strong>Focus English</strong> es una plataforma educativa diseñada 
      específicamente para el mercado español. Actualmente solo ofrecemos 
      nuestros servicios a estudiantes ubicados en España.
    </div>
    
    <div class="info-box">
      <div class="info-row">
        <span class="info-label">País detectado:</span>
        <span class="info-value">${country || 'Desconocido'}</span>
      </div>
      <div class="info-row">
        <span class="info-label">País requerido:</span>
        <span class="info-value">ES (España)</span>
      </div>
      <div class="info-row">
        <span class="info-label">Dominio:</span>
        <span class="info-value">${hostname}</span>
      </div>
    </div>
    
    <div class="contact">
      <p>
        Si estás en España y ves este mensaje, o tienes alguna pregunta,<br>
        contacta con nosotros en 
        <a href="mailto:info@focusenglish.com">info@focusenglish.com</a>
      </p>
      <p style="margin-top: 1rem; font-size: 0.85rem;">
        © ${new Date().getFullYear()} Focus English. Todos los derechos reservados.
      </p>
    </div>
  </div>
</body>
</html>`;
}
