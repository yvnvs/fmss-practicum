/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: [
    "WeatherContext.tsx",
    "WeatherContext.ts",
    "WeatherContext.jsx",
    "WeatherContext.js",
  ],
  images: {
    domains: ["cdn.weatherapi.com", "openweathermap.org"],
  },
  httpAgentOptions: {
    keepAlive: false,
  },
};

module.exports = nextConfig;
