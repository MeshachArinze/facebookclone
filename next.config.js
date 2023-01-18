/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: [
    //   "ekene.meshach.com",
    //   "platform-lookaside.fbsbx.com",
    //   "firsebasestorage.googleapis.com",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "meshach.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig
