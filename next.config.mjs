/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["lh3.googleusercontent.com"],
  },
  basePath: "/portofolio",
  assetPrefix: "/portofolio/",
};

export default nextConfig;
