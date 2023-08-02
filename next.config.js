/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { serverActions: true },
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    images: {
        domains: [
            "2sao.vietnamnetjsc.vn",
            "occ-0-2433-590.1.nflxso.net",
            "i.ytimg.com",
            "thegioidienanh.vn",
            "image.tmdb.org",
        ],
        minimumCacheTTL: 1500000,
    }
}

module.exports = nextConfig
