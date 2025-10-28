/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        // Ignore ESLint errors during build (for unused pages)
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Ignore TypeScript errors during build (for unused pages)
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
