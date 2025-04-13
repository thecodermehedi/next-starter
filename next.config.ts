import type { NextConfig } from "next";
import "@/env";
// import { env } from "@/env";

const nextConfig: NextConfig = {
  // output: "standalone",
  images: {
    // minimumCacheTTL: 31536000, // 1 year in seconds
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `${env.API_URL}/:path*`,
  //     },
  //   ];
  // },

  // Already doing linting and typechecking as separate tasks in CI
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
