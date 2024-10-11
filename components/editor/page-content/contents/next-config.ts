import { PageContent } from "../content-handler";

export const nextConfigContent: PageContent = {
  content: `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
`
}