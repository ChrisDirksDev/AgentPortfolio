/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Production optimizations
  swcMinify: true,

  output: 'standalone',

  // Compression
  compress: true,

  // PoweredBy header removal for security
  poweredByHeader: false,
}

module.exports = nextConfig

