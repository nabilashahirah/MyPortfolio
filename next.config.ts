import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* A stray package-lock.json in the home folder makes Next guess the wrong
     workspace root, which breaks dev-server file watching. Pin it here. */
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
