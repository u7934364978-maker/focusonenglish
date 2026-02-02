/** @type {import('next').NextConfig} */
const nextConfig = {
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
  async redirects() {
    return [
      // AUTENTICACIÓN - Unificar rutas duplicadas
      {
        source: '/signin',
        destination: '/cuenta/login',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/cuenta/login',
        permanent: true,
      },
      {
        source: '/register',
        destination: '/cuenta/registro',
        permanent: true,
      },
      {
        source: '/signup',
        destination: '/cuenta/registro',
        permanent: true,
      },
      {
        source: '/forgot-password',
        destination: '/cuenta/recuperar',
        permanent: true,
      },
      
      // RENOMBRAR PÁGINAS PRINCIPALES
      {
        source: '/contact',
        destination: '/contacto',
        permanent: true,
      },
      
      // ÁREA DE ESTUDIANTE
      // Dashboard ahora está directamente en /dashboard
      {
        source: '/estudiante/dashboard',
        destination: '/dashboard',
        permanent: true,
      },
      
      // ELIMINACIÓN DE PÁGINAS Y RUTAS (SEO 301 a Home)
      {
        source: '/metodologia',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cursos/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cursos',
        destination: '/',
        permanent: true,
      },
      {
        source: '/diagnostico',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cursos-especializados',
        destination: '/',
        permanent: true,
      },
      {
        source: '/certificaciones',
        destination: '/',
        permanent: true,
      },
      {
        source: '/trabajo/:nivel',
        destination: '/',
        permanent: true,
      },
      {
        source: '/viajes/:nivel',
        destination: '/',
        permanent: true,
      },
      {
        source: '/examenes/:nivel',
        destination: '/',
        permanent: true,
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
  // Deshabilitar styled-jsx completamente
  compiler: {
    styledComponents: false,
    // Deshabilitar la transformación de styled-jsx
    emotion: false,
  },
  // Paquetes externos que deben ejecutarse en el servidor
  serverExternalPackages: ['@google-cloud/text-to-speech', 'elevenlabs-node'],
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
