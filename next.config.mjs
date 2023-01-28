/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    { source: "/", destination: "/planets/earth", permanent: true },
  ],
};

export default nextConfig;
