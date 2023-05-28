/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 300,
};

module.exports = nextConfig;
