import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Iskljucuje Vercel Image Optimization
  },
};

export default nextConfig;
