/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // enables static export
  basePath: '/quality-point-web',
  assetPrefix: '/quality-point-web/',
  // distDir: 'dist',        // everything (build + export) goes here
  images: { unoptimized: true }  // required for static export
};

module.exports = nextConfig;
