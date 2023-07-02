/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    images: {
      allowFutureImage: true,
    },

  },
};

module.exports = nextConfig;
