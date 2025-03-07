/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["lh3.googleusercontent.com"], // Allow Google profile images
  },
};

export default nextConfig;
