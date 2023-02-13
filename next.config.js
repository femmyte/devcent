/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  wcMinify: true,
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 100,
}

module.exports = nextConfig
