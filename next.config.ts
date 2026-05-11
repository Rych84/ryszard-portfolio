import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ryszardtomaszewski.com" }],
        destination: "https://ryszardtomaszewski.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
