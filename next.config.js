/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // AA Angebot
      // {
      //   source: '/aa-angebot',
      //   has: [
      //     {
      //       type: 'query',
      //       key: 'teilnehmer',
      //       value: 'yes',
      //     },
      //   ],
      //   permanent: true,
      //   destination: 'https://achtsamkeitsakademie.de/angebot/jammerfasten',
      // },
      // {
      //   source: '/aa-angebot',
      //   permanent: true,
      //   destination: 'https://achtsamkeitsakademie.de/angebot/mitgliedschaft',
      // },
      // EFPMC
      {
        source: '/efpmc',
        has: [
          {
            type: 'query',
            key: 'var',
            value: 'WBR-IWI-FQZ-OES',
          },
        ],
        permanent: false,
        destination: 'https://dfl0.us/s/7b0b4136',
      },
      {
        source: '/efpmc',
        has: [
          {
            type: 'query',
            key: 'var',
            value: 'WBR-61X-XYR-GS7',
          },
        ],
        permanent: false,
        destination: 'https://dfl0.us/s/eb1a3cf5',
      },
      {
        source: '/efpmc',
        has: [
          {
            type: 'query',
            key: 'var',
            value: 'WBR-MS4-PWL-ZV9',
          },
        ],
        permanent: false,
        destination: 'https://dfl0.us/s/510158cb',
      },
      {
        source: '/efpmc',
        permanent: false,
        destination: 'https://dfl0.us/s/277f2ace',
      },
      {
        source: '/efpmc-tour',
        has: [
          {
            type: 'query',
            key: 'var',
            value: 'WBR-IWI-FQZ-OES',
          },
        ],
        permanent: false,
        destination: 'https://dfl0.us/s/238772cd',
      },
      {
        source: '/efpmc-tour',
        has: [
          {
            type: 'query',
            key: 'var',
            value: 'WBR-61X-XYR-GS7',
          },
        ],
        permanent: false,
        destination: 'https://dfl0.us/s/156465c8',
      },
      {
        source: '/efpmc-tour',
        has: [
          {
            type: 'query',
            key: 'var',
            value: 'WBR-MS4-PWL-ZV9',
          },
        ],
        permanent: false,
        destination: 'https://dfl0.us/s/d18cafb8',
      },
      {
        source: '/efpmc-tour',
        permanent: false,
        destination: 'https://dfl0.us/s/3d71ec46',
      },
      // AKMC
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
      {
        source: '/akmc-tour',
        has: [
          {
            type: 'query',
            key: 'var',
            value: 'bdg',
          },
        ],
        permanent: false,
        destination: 'https://peter-beer.de/webinar/angst-loslassen/bdg/produkttour-kurs',
      },
      {
        source: '/akmc-tour',
        has: [
          {
            type: 'query',
            key: 'var',
            value: 'big',
          },
        ],
        permanent: false,
        destination: 'https://peter-beer.de/webinar/angst-loslassen/big/produkttour-kurs',
      },
      {
        source: '/akmc-tour',
        has: [
          {
            type: 'query',
            key: 'var',
            value: 'cdg',
          },
        ],
        permanent: false,
        destination: 'https://peter-beer.de/webinar/angst-loslassen/cdg/produkttour-kurs',
      },
      {
        source: '/akmc-tour',
        permanent: false,
        destination: 'https://peter-beer.de/webinar/angst-loslassen/produkttour-kurs',
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
