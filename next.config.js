/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "drive.google.com",
      },
    ],
  },
};

module.exports = nextConfig;
