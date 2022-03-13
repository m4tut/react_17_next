/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "~assets/styles/helpers/global-imports.scss";`,
  },
};

module.exports = nextConfig;