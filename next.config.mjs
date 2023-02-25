/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/",
      destination: "/planets/mercury",
      permanent: process.env.NODE_ENV === "development" ? false : true,
    },
  ],
};

export default nextConfig;
