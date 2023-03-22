/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api: 'http://localhost:3001/api',
  },
  images: {
    domains: ['http2.mlstatic.com'],
  },
}

module.exports = nextConfig
