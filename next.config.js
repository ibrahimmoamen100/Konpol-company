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

const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssModules: true,

  /* my next config */
});
