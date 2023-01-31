/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/:slug*',
        destination: 'https://9fb28265c03642edb170cbf9b66089a1.eu-central-1.aws.cloud.es.io:9243/:slug*',
      },
    ]
  },
}

module.exports = nextConfig
