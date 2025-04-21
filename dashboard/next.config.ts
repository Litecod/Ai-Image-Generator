import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["oaidalleapiprodscus.blob.core.windows.net"],
  },
  async headers() {
    return [
      {
        source: "/api/download",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET" },
        ],
      },
    ];
  },
};

export default nextConfig;
