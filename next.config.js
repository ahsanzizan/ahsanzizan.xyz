/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      aws4: false,
    };

    return config;
  },
};

module.exports = nextConfig;
