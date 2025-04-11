import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async rewrites() {
   return [{
     source: '/bad',
     destination: '/failed',
   }]
  },
};

export default nextConfig;
