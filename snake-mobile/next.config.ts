import type { NextConfig } from "next";

const base = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig: NextConfig = {
  output: "export",
  basePath: base && base !== "/" ? base : undefined,
  assetPrefix: base && base !== "/" ? base : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
