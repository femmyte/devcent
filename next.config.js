/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  wcMinify: true,
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 300,
}

module.exports = nextConfig
