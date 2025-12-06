import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",   // ⭐ อนุญาตโดเมนนี้
      },
    ],
  },
};

export default nextConfig;
