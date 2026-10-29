/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: { globalNotFound: true },
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: { unoptimized: true },
  devIndicators: false,
}
export default nextConfig
