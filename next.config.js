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
      // SEO - Redirecciones de Cluster
      {
        source: '/curso-ingles-aprender-ingles',
        destination: '/aprender-ingles',
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
