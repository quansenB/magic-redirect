/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/marketing-monday/zoom",
        destination:
          "https://schab-holding.zoom.us/j/89382276677?pwd=K084YkE4QmFGdmdUNEJyTnpuWlMzdz09",
      },
      {
        source: "/marketing-monday/asana",
        destination:
          "https://app.asana.com/read-only/M-M-Protokoll/470860460277661/cd823fa58ce24182d4c3606c77e66382/list",
      },
      {
        source: "/marketing-monday/kpi",
        destination:
          "https://docs.google.com/spreadsheets/d/1iaRQXr6bAcFuk9FJSjmtAx8DenxLiW4r0BQsq5sBQNw/edit#gid=0",
      },
      {
        source: "/copywriting/asana",
        destination:
          "https://app.asana.com/read-only/CW-M-Protokoll/470860460277661/59ab03b543307e56960d8a08c1a5e69c/list",
      },
      {
        source: "/copywriting/zoom",
        destination:
          "https://schab-holding.zoom.us/j/8951914236?pwd=Wm11cmozSjk0ckFxamJuWERBejlPQT09",
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
