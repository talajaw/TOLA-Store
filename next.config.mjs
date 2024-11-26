/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "images.pexels.com",
          },
          {
            protocol: "https",
            hostname: "static.zara.net", // Add this to allow static.zara.net
          },  
          {
            protocol: "https",
            hostname: "us.123rf.com", // Add this hostname
          },
          {
            protocol: "https",
            hostname: "static.wixstatic.com", // Add this hostname
          },
          
          
        ],
      },
};

export default nextConfig;
