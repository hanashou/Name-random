/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images:{
    domains:['cdn2.thecatapi.com']
  }
}

module.exports = nextConfig
