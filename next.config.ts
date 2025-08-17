import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["ik.imagekit.io" , "images.squarespace-cdn.com" , "images.unsplash.com" , "17mm2glo1t.ufs.sh"],    // allow remote images
  },
};

export default nextConfig;
