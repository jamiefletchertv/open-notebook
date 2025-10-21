import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for optimized Docker deployment
  output: "standalone",

  // Proxy API requests to the backend
  async rewrites() {
    // Get API URL from environment, default to localhost
    const apiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5055';

    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
