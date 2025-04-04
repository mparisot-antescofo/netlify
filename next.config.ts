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
    // Translate routes: https://nextjs.org/docs/api-reference/next.config.js/rewrites#rewrites-with-i18n-support
    return Object.entries(translatedRoutes).flatMap(
      ([originalRoute, translatedRoutes]) =>
        Object.values(translatedRoutes).map((translation) => ({
          source: encodeURI(`/${translation}`),
          destination: `/${originalRoute.replace('.', '/')}`,
        })),
    );
  },
};

export default nextConfig;
