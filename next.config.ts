import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/procvicovani/jednotky",
        destination:
          "/procvicovani?predmet=fyzika&stupe=zs&rocnik=5&tema=mereni-si",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
