import type { NextConfig } from 'next';
import WithBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
  },
};

export default WithBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
