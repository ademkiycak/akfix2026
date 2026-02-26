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
  },

};

export default nextConfig;

