/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.moduleConcatenation = false;
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ];
    }

    config.resolve.alias = {
      "@components": path.resolve(__dirname, "src/components"),
    };

    return config;
  },

  ...withBundleAnalyzer({}),
};

module.exports = nextConfig;
