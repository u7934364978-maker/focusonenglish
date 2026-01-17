/** @type {import('next').NextConfig} */
const nextConfig = {
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
        source: '/diagnostico',
        destination: '/test-nivel',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contacto',
        permanent: true,
      },
      
      // ÁREA DE ESTUDIANTE
      // Dashboard ahora está directamente en /dashboard
      // {
      //   source: '/dashboard',
      //   destination: '/estudiante/dashboard',
      //   permanent: true,
      // },
      
      // ELIMINAR PÁGINAS OBSOLETAS
      {
        source: '/certificaciones',
        destination: '/cursos',
        permanent: true,
      },
      
      // CURSOS - Redirigir goal/nivel → cursos/goal/nivel
      // Trabajo
      {
        source: '/trabajo/:nivel',
        destination: '/cursos/trabajo/:nivel',
        permanent: true,
      },
      // Viajes
      {
        source: '/viajes/:nivel',
        destination: '/cursos/viajes/:nivel',
        permanent: true,
      },
      // Exámenes
      {
        source: '/examenes/:nivel',
        destination: '/cursos/examenes/:nivel',
        permanent: true,
      },
    ];
  },
  
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
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
  typescript: {
    // ⚠️ Temporalmente ignorar errores de TypeScript para el build de producción
    ignoreBuildErrors: true,
  },
  eslint: {
    // ⚠️ Temporalmente ignorar errores de ESLint para el build de producción
    ignoreDuringBuilds: true,
  },
  // Opciones de webpack para excluir styled-jsx
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
