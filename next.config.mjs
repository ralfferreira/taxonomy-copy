import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
}

export default withContentlayer(nextConfig)
