/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: [],
  images: {
    domains: ["lh3.googleusercontent.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
