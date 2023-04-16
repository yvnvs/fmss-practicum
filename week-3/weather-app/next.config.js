/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.weatherapi.com", "openweathermap.org"],
  },
  httpAgentOptions: {
    keepAlive: false,
  },
};

module.exports = nextConfig;
