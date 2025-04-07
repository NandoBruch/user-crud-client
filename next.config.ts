import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    mainServerBaseUrl: process.env.MAIN_SERVER_BASE_URL,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "robohash.org" }],
  },
};

export default nextConfig;
