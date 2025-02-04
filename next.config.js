/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["gogrades.org", "imagedelivery.net"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during the build
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
