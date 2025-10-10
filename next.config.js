/** @type {import('next').NextConfig} */
const repoName = 'quality-point-web'
const nextConfig = {
  output: 'export',       // enables static export
  distDir: 'dist',        // everything (build + export) goes here
  images: { unoptimized: true },  // required for static export
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};

module.exports = nextConfig;
