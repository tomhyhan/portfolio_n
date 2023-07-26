const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = withContentlayer(nextConfig);
