import { type NextConfig } from 'next';
import i18n from './next-i18n-config';
import app from './package.json';
import translatedRoutes from './translated-routes.json';

const { version } = app;

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    version,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n,
  experimental: {
    largePageDataBytes: 128 * 39000,
  },

  async rewrites() {
   return [{
     source: '/bad',
     destination: '/failed',
   }]
  },
};

export default nextConfig;
