/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/akmc',
        has: [
          {
            type: 'query',
            key: 'var',
            value: 'bdg',
          },
        ],
        permanent: false,
        destination: 'https://dfl0.us/s/1dc08470',
      },
      {
        source: '/akmc',
        has: [
          {
            type: 'query',
            key: 'var',
            value: 'big',
          },
        ],
        permanent: false,
        destination: 'https://dfl0.us/s/cee53aee',
      },
      {
        source: '/akmc',
        has: [
          {
            type: 'query',
            key: 'var',
            value: 'cdg',
          },
        ],
        permanent: false,
        destination: 'https://dfl0.us/s/1e804926',
      },
      {
        source: '/akmc',
        permanent: false,
        destination: 'https://dfl0.us/s/6cb9190b',
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:slug*",
          destination:
            "https://9fb28265c03642edb170cbf9b66089a1.eu-central-1.aws.cloud.es.io:9243/:slug*",
        },
        {
          source: "/",
          destination:
            "https://9fb28265c03642edb170cbf9b66089a1.eu-central-1.aws.cloud.es.io:9243",
        },
      ],
    };
  },
};

module.exports = nextConfig;
