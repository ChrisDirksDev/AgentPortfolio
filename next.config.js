/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },

  // Production optimizations
  swcMinify: true,

  // Output standalone for optimal Docker/Vercel deployment
  output: 'standalone',

  // Compression
  compress: true,

  // PoweredBy header removal for security
  poweredByHeader: false,
}

module.exports = nextConfig


