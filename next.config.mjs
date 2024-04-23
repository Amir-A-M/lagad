/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push("@node-rs/argon2", "@node-rs/bcrypt");
    return config;
  },
  async headers() {
    return [
      {
        source: '/auth/reset-password/:token',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
