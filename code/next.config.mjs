import { createRequire } from 'module'
const require = createRequire(import.meta.url)

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    adapterPath: require.resolve('@opennextjs/cloudflare'),
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'www.marieclaire.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'gazeteoksijen.com',
      },
      {
        protocol: 'https',
        hostname: 'www.alem.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'www.magzter.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sozcu.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'blog.quicksigorta.com',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

export default nextConfig
