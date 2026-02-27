import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //output: 'export'
  
 images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'akfix.akfix.com.tr',
      },
    ],
    minimumCacheTTL: 60,
  },

};

export default nextConfig;

