/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  output: 'export',
  basePath: '/karte1',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,  // Add this line
  }
};
