/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  basePath: process.env.NODE_ENV === 'production' ? '/MyPortfolio' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  // This ensures GitHub Pages can find assets with correct paths
  assetPrefix: process.env.NODE_ENV === 'production' ? '/MyPortfolio' : '',
}

module.exports = nextConfig
