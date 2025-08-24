/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Fix for GitHub Pages - use the repository name WITHOUT the username
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Ensure CSS files are properly handled
  // Ensure CSS files are properly handled
  compiler: {
    emotion: true,
  },
  // Enable trailing slashes to improve compatibility
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;