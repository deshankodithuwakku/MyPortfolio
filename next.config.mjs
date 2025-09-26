/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Set the base path if your repository name is different from your domain
  // basePath: '/MyPortfolio', // Uncomment this if needed
};

export default nextConfig;
