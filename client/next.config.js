/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    NEXT_PUBLIC_ZEGO_APP_ID:1450179943,
    NEXT_PUBLIC_ZEGO_SERVER_ID:"41f4d3c1728c4d3a2522a3b358d1b551",
  },
  images:{
    domains: ["localhost"], // change while hosting
  },
};

module.exports = nextConfig;
