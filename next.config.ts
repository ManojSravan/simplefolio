import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
      'img-prod-cms-rt-microsoft-com.akamaized.net',
      'www.google.com',
      'upload.wikimedia.org',
    ],  }
};

export default nextConfig;
