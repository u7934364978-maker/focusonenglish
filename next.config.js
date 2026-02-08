/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
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
        destination: '/blog/trabajo/ingles-para-hosteleria',
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
        destination: '/blog/trabajo/ingles-para-hosteleria',
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
        source: '/blog/gramatica',
        destination: '/blog/metodos',
        statusCode: 301,
      },
      {
        source: '/blog/gramatica/:slug*',
        destination: '/blog/metodos/:slug*',
        statusCode: 301,
      },
      {
        source: '/blog/Gramatica/:slug*',
        destination: '/blog/metodos/:slug*',
        statusCode: 301,
      },
      {
        source: '/blog/Gramática/:slug*',
        destination: '/blog/metodos/:slug*',
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
        destination: '/blog/trabajo/emails-profesionales-ingles',
        statusCode: 301,
      },
      {
        source: '/blog/trabajo/entrevistas-trabajo-ingles-guia',
        destination: '/blog/trabajo/entrevista-trabajo-exito',
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
        source: '/blog/trabajo/entrevista-trabajo-ingles-preguntas',
        destination: '/blog/trabajo/entrevista-trabajo-exito',
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
        destination: '/blog/trabajo/entrevista-trabajo-exito',
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
    ];
  },
  
  images: {
    domains: ['images.pexels.com', 'placehold.co'],
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
  // Webpack options to exclude styled-jsx
  webpack: (config, { isServer }) => {
    // Alias para excluir styled-jsx del bundle
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-jsx': false,
      'styled-jsx/style': false,
    };
    return config;
  },
}

module.exports = nextConfig
