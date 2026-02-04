import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        domains: ["github.com", "user-attachments.githubusercontent.com"],
    },
};

export default nextConfig;