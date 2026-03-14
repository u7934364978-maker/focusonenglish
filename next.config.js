/** @type {import('next').NextConfig} */
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  compress: true,
  transpilePackages: ['next'],
  turbopack: {
    // Alias: framer-motion pide @emotion/react/jsx-runtime; React 19 usa react/jsx-runtime
    resolveAlias: {
      '@emotion/react/jsx-runtime': 'react/jsx-runtime',
    },
  },
  // Reduce unused JS: tree-shake large packages (framer-motion, radix, etc.)
  experimental: {
    inlineCss: true,
    optimizePackageImports: [
      'framer-motion',
      '@radix-ui/react-avatar',
      '@radix-ui/react-progress',
      '@radix-ui/react-tabs',
      'lucide-react',
    ],
  },
  // Fix Vercel build: use project root for file tracing (avoids multi-lockfile inference)
  outputFileTracingRoot: path.join(__dirname),
  // Vercel deployment - native Next.js support
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // ==========================================
  // REDIRECTS 301 - Reestructuración Fase 1
  // ==========================================
  trailingSlash: false,
  async redirects() {
    return [
      // SEO - Redirecciones de Cluster a Blog
      {
        source: '/precios',
        destination: '/planes',
        statusCode: 301,
      },
      {
        source: '/registro',
        destination: '/cuenta/registro',
        statusCode: 301,
      },
      {
        source: '/rutas/certificaciones-ingles',
        destination: '/certificaciones-ingles-oficiales',
        statusCode: 301,
      },
      {
        source: '/rutas/ingles-para-trabajo',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/rutas/ingles-para-hosteleria',
        destination: '/blog/trabajo/ingles-para-camareros-y-hosteleria',
        statusCode: 301,
      },
      {
        source: '/rutas/ingles-para-atencion-al-cliente',
        destination: '/blog/trabajo/ingles-para-atencion-al-cliente',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-aprender-ingles',
        destination: '/aprender-ingles',
        statusCode: 301,
      },
      {
        source: '/certificaciones-ingles',
        destination: '/certificaciones-ingles-oficiales',
        statusCode: 301,
      },
      {
        source: '/ingles-para-el-trabajo',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-trabajo',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-viajar',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-para-trabajo',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-para-viajar',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-a1',
        destination: '/blog/metodos/ingles-a1',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-a2',
        destination: '/blog/metodos/ingles-a2',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-b1',
        destination: '/blog/metodos/cursos-online-ingles-b1',
        statusCode: 301,
      },
      {
        source: '/cursos-online-ingles-b1',
        destination: '/blog/metodos/cursos-online-ingles-b1',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-b2',
        destination: '/blog/metodos/ingles-b2',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-c1',
        destination: '/blog/metodos/ingles-c1',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-c2',
        destination: '/blog/metodos/ingles-c2',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-preparacion-examen-b1-cambridge',
        destination: '/blog/examenes/preparacion-examen-b1-cambridge',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-gramatica-ingles-b1-guia',
        destination: '/blog/metodos/gramatica-ingles-b1-guia',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-vocabulario-b1-ingles-trabajo',
        destination: '/blog/trabajo/vocabulario-b1-ingles-trabajo',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-para-hosteleria',
        destination: '/blog/trabajo/ingles-para-camareros-y-hosteleria',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-para-atencion-al-cliente',
        destination: '/blog/trabajo/ingles-para-atencion-al-cliente',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-para-salud',
        destination: '/blog/trabajo/ingles-para-salud',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-para-ingenieros',
        destination: '/blog/trabajo/ingles-para-ingenieros',
        statusCode: 301,
      },

      {
        source: '/blog/vocabulario',
        destination: '/blog/metodos',
        statusCode: 301,
      },
      {
        source: '/blog/vocabulario/:slug*',
        destination: '/blog/metodos/:slug*',
        statusCode: 301,
      },
      {
        source: '/blog/habilidades',
        destination: '/blog/metodos',
        statusCode: 301,
      },
      {
        source: '/blog/habilidades/:slug*',
        destination: '/blog/metodos/:slug*',
        statusCode: 301,
      },
      // SEO - Redirecciones específicas de antiguos artículos en /blog/seo/
      {
        source: '/blog/seo/ingles-para-viajar',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/seo/ingles-para-trabajo',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/blog/seo/ingles-a1',
        destination: '/blog/metodos/ingles-a1',
        statusCode: 301,
      },
      {
        source: '/blog/seo/ingles-a2',
        destination: '/blog/metodos/ingles-a2',
        statusCode: 301,
      },
      {
        source: '/blog/seo/cursos-online-ingles-b1',
        destination: '/blog/metodos/cursos-online-ingles-b1',
        statusCode: 301,
      },
      {
        source: '/blog/seo/ingles-b2',
        destination: '/blog/metodos/ingles-b2',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/guia-definitiva-viajes',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/business-english-emails',
        destination: '/blog/trabajo/plantillas-emails-profesionales-ingles',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/entrevistas-trabajo-ingles-guia',
        destination: '/blog/trabajo/preparar-entrevista-trabajo-ingles',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/ingles-derecho-legal-guia',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/ingles-aeropuertos-checklist',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/ingles-emergencias-viaje',
        destination: '/blog/viajes/frases-ingles-emergencias-viajes',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/ingles-hoteles-guia',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/ingles-finanzas-economia-guia',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/ingles-marketing-ventas-guia',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/ingles-trabajar-extranjero-guia',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/entrevista-trabajo-exito',
        destination: '/blog/trabajo/preparar-entrevista-trabajo-ingles',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/vocabulario-negocios-ingles-esencial',
        destination: '/blog/trabajo/vocabulario-negocios-ingles-profesional',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/cv-ingles-guia',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/guia-definitiva-curso-ingles-profesional',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/ingles-entrevistas-remotas-exito',
        destination: '/blog/trabajo/preparar-entrevista-trabajo-ingles',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/negociaciones-ingles-guia',
        destination: '/blog/trabajo/negociacion-ingles-tecnicas-clave',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/reuniones-ingles-guia',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/ingles-nomadas-digitales-mochileros',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/ingles-para-viajar-guia',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/ingles-restaurantes-guia',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/como-preparar-ingles-viaje-largo',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/cultura-y-etiqueta-paises-anglosajones',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/guia-maestra-curso-ingles-viajeros',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/inmigracion-ingles-guia',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/supervivencia-ingles-transporte-publico',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/examenes/guia-examen-aptis',
        destination: '/certificaciones-ingles-oficiales',
        statusCode: 301,
      },
      {
        source: '/blog/examenes/ielts-vs-toefl-diferencias',
        destination: '/certificaciones-ingles-oficiales',
        statusCode: 301,
      },
      {
        source: '/blog/examenes/guia-precios-cambridge-2026',
        destination: '/certificaciones-ingles-oficiales',
        statusCode: 301,
      },
      {
        source: '/blog/seo/:slug*',
        destination: '/blog/metodos/:slug*',
        statusCode: 301,
      },
      
      // AUTENTICACIÓN - Unificar rutas duplicadas
      {
        source: '/signin',
        destination: '/cuenta/login',
        statusCode: 301,
      },
      {
        source: '/login',
        destination: '/cuenta/login',
        statusCode: 301,
      },
      {
        source: '/register',
        destination: '/cuenta/registro',
        statusCode: 301,
      },
      {
        source: '/signup',
        destination: '/cuenta/registro',
        statusCode: 301,
      },
      {
        source: '/forgot-password',
        destination: '/cuenta/recuperar',
        statusCode: 301,
      },
      
      // RENOMBRAR PÁGINAS PRINCIPALES
      {
        source: '/contact',
        destination: '/contacto',
        statusCode: 301,
      },
      
      // ÁREA DE ESTUDIANTE
      // Dashboard ahora está directamente en /dashboard
      {
        source: '/estudiante/dashboard',
        destination: '/dashboard',
        statusCode: 301,
      },
      
      // ELIMINACIÓN DE RUTAS /curso/ingles-*
      {
        source: '/curso/ingles-a2',
        destination: '/curso-a2',
        statusCode: 301,
      },
      {
        source: '/curso/ingles-b2',
        destination: '/planes',
        statusCode: 301,
      },

      // ELIMINACIÓN DE PÁGINAS Y RUTAS (SEO 301 a Home)
      {
        source: '/metodologia',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/cursos/:path*',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/cursos',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/diagnostico',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/cursos-especializados',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/certificaciones',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/trabajo/:nivel',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/viajes/:nivel',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/examenes/:nivel',
        destination: '/',
        statusCode: 301,
      },

      // PÁGINAS FALTANTES
      {
        source: '/proximamente',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/about',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/apple-app-site-association',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/.well-known/apple-app-site-association',
        destination: '/',
        statusCode: 301,
      },

      // BLOG - Artículos eliminados o renombrados
      {
        source: '/blog/pronunciacion',
        destination: '/blog',
        statusCode: 301,
      },
      {
        source: '/blog/Gram%C3%A1tica',
        destination: '/blog/gramatica',
        statusCode: 301,
      },
      {
        source: '/blog/Gram%C3%A1tica/:slug*',
        destination: '/blog/gramatica/:slug*',
        statusCode: 301,
      },
      {
        source: '/blog/Vocabulario',
        destination: '/blog/metodos',
        statusCode: 301,
      },
      {
        source: '/blog/Vocabulario/:slug*',
        destination: '/blog/metodos/:slug*',
        statusCode: 301,
      },
      {
        source: '/blog/Habilidades',
        destination: '/blog/metodos',
        statusCode: 301,
      },
      {
        source: '/blog/Habilidades/:slug*',
        destination: '/blog/metodos/:slug*',
        statusCode: 301,
      },
      {
        source: '/blog/Trabajo',
        destination: '/blog/trabajo',
        statusCode: 301,
      },
      {
        source: '/blog/Trabajo/:slug*',
        destination: '/blog/trabajo/:slug*',
        statusCode: 301,
      },
      {
        source: '/blog/ingles-profesional-sectores',
        destination: '/blog/trabajo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/blog/preparar-examenes-oficiales',
        destination: '/certificaciones-ingles-oficiales',
        statusCode: 301,
      },
      {
        source: '/blog/ingles-esencial-viajar',
        destination: '/blog/viajes/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/blog/tiempos-verbales-ingles-a1-presente',
        destination: '/blog/metodos/ingles-a1',
        statusCode: 301,
      },
      {
        source: '/blog/vocabulario-esencial-ingles-a1-principiantes',
        destination: '/blog/metodos/ingles-a1',
        statusCode: 301,
      },
      {
        source: '/blog/gramatica-basica-ingles-a1-principiantes',
        destination: '/blog/metodos/ingles-a1',
        statusCode: 301,
      },

      // ANTI-CANIBALIZACIÓN - Artículos duplicados fusionados
      {
        source: '/blog/trabajo/ingles-presentaciones-impacto',
        destination: '/blog/trabajo/como-hacer-presentaciones-en-ingles',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/presentaciones-ingles-guia',
        destination: '/blog/trabajo/como-hacer-presentaciones-en-ingles',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/emails-profesionales-ingles',
        destination: '/blog/trabajo/plantillas-emails-profesionales-ingles',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/redaccion-emails-profesionales-ingles',
        destination: '/blog/trabajo/plantillas-emails-profesionales-ingles',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/entrevista-trabajo-ingles-frases',
        destination: '/blog/trabajo/preparar-entrevista-trabajo-ingles',
        statusCode: 301,
      },
      {
        source: '/blog/examenes/cambridge-b2-first-guia',
        destination: '/blog/examenes/cambridge-b2-first-estrategias-aprobar',
        statusCode: 301,
      },
      {
        source: '/blog/examenes/guia-b2-first-fce',
        destination: '/blog/examenes/cambridge-b2-first-estrategias-aprobar',
        statusCode: 301,
      },
      {
        source: '/blog/examenes/linguaskill-cambridge-guia',
        destination: '/blog/examenes/guia-linguaskill-cambridge',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/ingles-para-hosteleria',
        destination: '/blog/trabajo/ingles-para-camareros-y-hosteleria',
        statusCode: 301,
      },
      {
        source: '/blog/viajes/ingles-para-camareros-guia',
        destination: '/blog/trabajo/ingles-para-camareros-y-hosteleria',
        statusCode: 301,
      },

      // FAVICON Y LOGO
      {
        source: '/favicon.ico',
        destination: '/icon.svg',
        statusCode: 301,
      },
      {
        source: '/logo.png',
        destination: '/',
        statusCode: 301,
      },
    ];
  },
  
  images: {
    domains: ['images.pexels.com', 'placehold.co'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  reactStrictMode: true,
  // Cabeceras de seguridad y compresión
  async headers() {
    return [
      // Recursos estáticos (CSS, JS chunks): caché 1 año
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
  // Deshabilitar styled-jsx completamente
  compiler: {
    styledComponents: false,
    // Deshabilitar la transformación de styled-jsx
    emotion: false,
  },
  // Paquetes externos que deben ejecutarse en el servidor
  serverExternalPackages: ['@google-cloud/text-to-speech', 'elevenlabs-node', 'resend'],
}

module.exports = withBundleAnalyzer(nextConfig)
