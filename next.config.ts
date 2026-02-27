import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //output: 'export'
  
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.akfix.com',
      },
    ],
    minimumCacheTTL: 60,
  },

};

export default nextConfig;

