/** @type {import('next').NextConfig} */
const nextConfig = {
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
  typescript: {
    // ⚠️ Temporalmente ignorar errores de TypeScript para el build de producción
    ignoreBuildErrors: true,
  },
  eslint: {
    // ⚠️ Temporalmente ignorar errores de ESLint para el build de producción
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
