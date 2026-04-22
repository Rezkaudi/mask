import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  reactStrictMode: true,

  images: {
    // Avoid Vercel optimizer charges and flakiness:
    unoptimized: true,

    // Leaving formats is harmless with unoptimized=true
    formats: ["image/avif", "image/webp"],

    // IMPORTANT: pathnames must start with "/"
    // Add every hostname that may appear in imageSrc
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mac-hadis.s3.ap-northeast-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mac-hadis.com",
        pathname: "/**",
      },

      // Uncomment any of these if you actually use them:
      // { protocol: "https", hostname: "www.mac-hadis.com", pathname: "/**" },
      // { protocol: "https", hostname: "cdn.mac-hadis.com", pathname: "/**" },
      // { protocol: "https", hostname: "*.cloudfront.net", pathname: "/**" },
    ],

    // These control srcset width candidates when unoptimized=false.
    // With unoptimized=true they are harmless, you can keep them.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    minimumCacheTTL: 60,

    // Keep if you really need to serve inline SVGs
    dangerouslyAllowSVG: true,

    // REMOVE these (can cause “download” behavior / conflicts):
    // contentDispositionType: "attachment",
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Enable compression
  compress: true,

  // Security/size tweaks
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.concatenateModules = true;
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: "vendor",
            chunks: "all",
            test: /node_modules/,
            priority: 20,
          },
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
          swiper: {
            test: /[\\/]node_modules[\\/](swiper)[\\/]/,
            name: "swiper",
            priority: 30,
            chunks: "all",
          },
          sweetalert: {
            test: /[\\/]node_modules[\\/](sweetalert2)[\\/]/,
            name: "sweetalert",
            priority: 30,
            chunks: "all",
          },
        },
      };
    }
    return config;
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      // These apply to Next's optimizer route. Harmless if unoptimized=true,
      // but keeping them won't hurt if you ever flip it back.
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=60, s-maxage=31536000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)",
        locale: false,
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*.(woff2|woff|ttf|otf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;