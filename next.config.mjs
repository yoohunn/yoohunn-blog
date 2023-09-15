import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@plaiceholder/ui'],
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default withPlaiceholder(nextConfig);
