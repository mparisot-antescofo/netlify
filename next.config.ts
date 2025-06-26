import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeDetection: false,
  },

  async rewrites() {
   return [{
     source: '/bad',
     destination: '/failed',
   }]
  },
};

export default nextConfig;
