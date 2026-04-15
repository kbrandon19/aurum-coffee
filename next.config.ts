import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    formats:['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      
      }
    ]
  }
};

export default nextConfig;
