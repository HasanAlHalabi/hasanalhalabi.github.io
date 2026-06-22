import type { NextConfig } from 'next'

// Set BASE_PATH (e.g. "/my-repo") when deploying under a sub-path, such as a
// GitHub Pages project site at username.github.io/my-repo/. Left empty for
// local dev and root deploys (user/org Pages site or a custom domain).
const basePath = process.env.BASE_PATH || ''

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: basePath || undefined,
}

export default nextConfig
