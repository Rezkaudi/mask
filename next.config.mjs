/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mac-hadis.s3.ap-northeast-1.amazonaws.com",
        pathname: "**",
      },
      { protocol: "https", hostname: "mac-hadis.com", pathname: "**" },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  experimental: {
    // ✅ CRITICAL: Enable Critters for automatic critical CSS inlining
    // This extracts above-the-fold CSS and inlines it, deferring the rest
    optimizeCss: true,

    // ✅ Tree-shake heavy packages to reduce JS bundle
    optimizePackageImports: [
      "swiper",
      "sweetalert2",
      "lucide-react",
      "framer-motion",
      "lodash",
      "react-icons",
    ],

    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  // ✅ Turbopack config for Next.js 16
  turbopack: {},

  // ✅ Webpack optimizations for CSS handling
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            // ✅ Separate font CSS into its own chunk for better caching
            fonts: {
              name: "fonts",
              test: /[\\/]node_modules[\\/].*\.(woff2?|ttf|eot|otf)$/,
              chunks: "all",
              priority: 30,
            },
            // ✅ Keep styles together but allow code splitting
            styles: {
              name: "styles",
              test: /\.css$/,
              chunks: "all",
              enforce: true,
              priority: 20,
            },
          },
        },
      };
    }
    return config;
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.(woff2|woff|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
