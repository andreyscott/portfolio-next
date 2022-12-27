/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
// add hostname images.unsplash.com to next/image
// https://nextjs.org/docs/api-reference/next/image#domains

// module.exports = nextConfig
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.sanity.io",
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}
