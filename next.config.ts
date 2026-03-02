import type { NextConfig } from 'next';
import WithBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/system', 'react-hook-form'],
  },
  transpilePackages: ['@mui/material', '@mui/system', 'react-hook-form'],
};

export default WithBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
