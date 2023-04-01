/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects() {
  //   return [];
  // },
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
