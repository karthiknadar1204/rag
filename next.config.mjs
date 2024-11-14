/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Connection',
            value: 'keep-alive'
          }
        ],
      },
    ]
  }
};

export default nextConfig;
