/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, {dev, isServer}) => {
    config.resolve.alias.canvas = false;
    
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.(css)$/,
        chunks: 'all',
        enforce: true,
      };
    }

    return config;
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  }
}

module.exports = withBundleAnalyzer(nextConfig)
