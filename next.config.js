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
        destination: '/blog/seo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/rutas/ingles-para-hosteleria',
        destination: '/blog/seo/ingles-para-hosteleria',
        statusCode: 301,
      },
      {
        source: '/rutas/ingles-para-atencion-al-cliente',
        destination: '/blog/seo/ingles-para-atencion-al-cliente',
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
        destination: '/blog/seo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-trabajo',
        destination: '/blog/seo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-viajar',
        destination: '/blog/seo/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-para-trabajo',
        destination: '/blog/seo/ingles-para-trabajo',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-para-viajar',
        destination: '/blog/seo/ingles-para-viajar',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-a1',
        destination: '/blog/seo/ingles-a1',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-a2',
        destination: '/blog/seo/ingles-a2',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-b1',
        destination: '/blog/seo/cursos-online-ingles-b1',
        statusCode: 301,
      },
      {
        source: '/cursos-online-ingles-b1',
        destination: '/blog/seo/cursos-online-ingles-b1',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-b2',
        destination: '/blog/seo/ingles-b2',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-c1',
        destination: '/blog/seo/ingles-c1',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-c2',
        destination: '/blog/seo/ingles-c2',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-preparacion-examen-b1-cambridge',
        destination: '/blog/seo/preparacion-examen-b1-cambridge',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-gramatica-ingles-b1-guia',
        destination: '/blog/seo/gramatica-ingles-b1-guia',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-vocabulario-b1-ingles-trabajo',
        destination: '/blog/seo/vocabulario-b1-ingles-trabajo',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-para-hosteleria',
        destination: '/blog/seo/ingles-para-hosteleria',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-para-atencion-al-cliente',
        destination: '/blog/seo/ingles-para-atencion-al-cliente',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-para-salud',
        destination: '/blog/seo/ingles-para-salud',
        statusCode: 301,
      },
      {
        source: '/curso-ingles-para-ingenieros',
        destination: '/blog/seo/ingles-para-ingenieros',
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
