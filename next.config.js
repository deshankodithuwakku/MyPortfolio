/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Update this to your GitHub repository name
  basePath: process.env.NODE_ENV === 'production' ? '/MyPortfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/MyPortfolio/' : '',
}

module.exports = nextConfig
