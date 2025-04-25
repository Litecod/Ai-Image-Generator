import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["oaidalleapiprodscus.blob.core.windows.net"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://ai-image-generator-backend-two.vercel.app//api/:path*",
      },
    ];
  },
};

export default nextConfig;
