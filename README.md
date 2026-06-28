# Mac Hadis

Production website for Mac Hadis, a Japanese service business focused on buying used machinery, power tools, industrial equipment, factory assets, and related commercial tools.

The application is built with the Next.js App Router and serves the public marketing site, product purchase category pages, product detail pages, blog articles, factory-service landing page, purchase records, and the free appraisal inquiry flow.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Application Routes](#application-routes)
- [Content Management](#content-management)
- [Email Inquiry Flow](#email-inquiry-flow)
- [SEO and Structured Data](#seo-and-structured-data)
- [Performance Notes](#performance-notes)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Maintenance Checklist](#maintenance-checklist)
- [License](#license)

## Overview

Mac Hadis is a content-driven business website for machinery and tool purchase services. It combines static JSON content with dynamic App Router pages, SEO metadata, structured data, remote image optimization, inquiry form handling, and transactional email delivery.

Primary production domain:

```txt
https://mac-hadis.com
```

The canonical base URL is configured in:

```txt
src/utils/baseUrl.ts
```

Update this value if the production domain changes.

## Features

- Public home page with hero, service flow, purchase records, FAQs, reviews, company profile, and inquiry form sections.
- Product category pages generated from tracked JSON content.
- Product detail pages generated from tracked product JSON content.
- Blog index and blog detail pages generated from tracked blog JSON content.
- Factory-service landing page with a Google Maps-powered Kanto service area map.
- Free appraisal page using the shared inquiry form.
- Purchase records page with full purchase-results listing.
- SMTP email delivery for inquiry submissions.
- Customer confirmation email and internal admin notification email.
- Up to three products per inquiry, with optional product images.
- Next.js metadata, Open Graph, Twitter Card, sitemap, and robots support.
- JSON-LD structured data for organization, website, local business, services, products, articles, and breadcrumbs.
- Remote asset delivery from the Mac Hadis S3 bucket.
- Standalone production output for Node-based deployments.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 3, CSS modules, global CSS |
| Email | Nodemailer |
| Maps | Google Maps JavaScript API |
| SEO | Next.js Metadata API, sitemap, robots, JSON-LD schema components |
| UI helpers | Swiper, SweetAlert2, Lucide React |
| Analytics | Google Tag Manager |
| Runtime target | Node.js 20.x |

## Requirements

- Node.js `20.x.x`
- npm
- SMTP account credentials for inquiry email delivery
- Google Maps API key for the factory-service map

## Environment Variables

Create a local environment file such as `.env.local` and provide the values below.

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-app-password
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
NODE_ENV=development
```

Notes:

- Do not commit `.env`, `.env.local`, or any production secret file.
- `SMTP_USER` is used as the admin recipient and sender identity for inquiry emails.
- In development, the mail sender uses non-secure SMTP when `NODE_ENV=development`.
- For production SMTP on port `465`, use secure SMTP credentials. If your provider requires port `587` in production, review `src/app/api/send-email/mailService/GmailSender.ts`.
- Restrict the Google Maps API key to the production domain and expected local development origins.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local site:

```txt
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

By default, the production server uses port `8080` unless `PORT` is provided:

```bash
PORT=3000 npm run start
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server. |
| `npm run build` | Creates a production build. |
| `npm run start` | Starts the production server on `${PORT:-8080}`. |
| `npm run lint` | Runs the lint command configured in `package.json`. |

## Project Structure

```txt
.
|-- public/                     # Public static files
|-- src/
|   |-- app/                    # Next.js App Router routes and API routes
|   |-- components/             # Page, common, and SEO components
|   |-- content/                # JSON/TS content used to generate pages
|   |-- hooks/                  # Client hooks and form logic
|   |-- services/               # Content lookup helpers
|   |-- styles/                 # Global, critical, loader, privacy, and module CSS
|   |-- types/                  # Shared TypeScript types
|   `-- utils/                  # Shared utility values and helpers
|-- next.config.mjs             # Next.js, image, header, and performance config
|-- tailwind.config.ts          # Tailwind theme configuration
|-- tsconfig.json               # TypeScript configuration and path aliases
`-- package.json                # Scripts, dependencies, and Node engine
```

## Application Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page and main inquiry entry point. |
| `/blogs` | Blog listing page. |
| `/blogs/[title]` | Blog article detail page. |
| `/products/[categoryId]` | Product purchase category page. |
| `/products/[categoryId]/[title]` | Product detail page. |
| `/purchase-records` | Full purchase records page. |
| `/satei` | Free appraisal page. |
| `/factory-service` | Factory closure, relocation, and cleanup service page. |
| `/api/send-email` | Inquiry form email API route. |
| `/api/auth` | Basic 401 challenge route. |
| `/sitemap.xml` | Generated sitemap. |
| `/robots.txt` | Generated robots policy. |

## Content Management

Most public content is stored in `src/content`. Page services read these files and expose lookup helpers from `src/services`.

### Home Content

Home page supporting content lives in:

```txt
src/content/home/
```

This includes contact details, company profile, FAQs, reviews, purchase process data, purchase results, and form option lists.

### Categories

Category content lives in:

```txt
src/content/categories/
```

When adding a category:

1. Add a new `categoryN.json` file.
2. Import it in `src/content/categories/categories.ts`.
3. Add it to the exported `categories` array.
4. Make sure the category `id` matches the expected `/products/[categoryId]` route.

### Product Details

Product detail content lives in:

```txt
src/content/product_details/
```

When adding a product detail page:

1. Add the product JSON file under the correct category folder.
2. Import it in `src/content/product_details/products.ts`.
3. Add it to the exported `products` array.
4. Make sure the product `category` value matches the resolved category title.
5. Make sure the product `title` is unique within its category because it is used in `/products/[categoryId]/[title]`.

### Blog Posts

Blog content lives in:

```txt
src/content/blogs/
```

When adding a blog post:

1. Add a new `blogN.json` file.
2. Import it in `src/content/blogs/blogs.ts`.
3. Add it to the exported `blogs` array.
4. Confirm the `title`, `metaDescription`, `date`, `imageSrc`, and `subContent` fields are valid.

### Remote Images

Most images are served from:

```txt
https://mac-hadis.s3.ap-northeast-1.amazonaws.com
```

Allowed remote image hosts are configured in `next.config.mjs`. Add new hosts to `images.remotePatterns` before using them with `next/image`.

## Email Inquiry Flow

The inquiry form flow is implemented across:

```txt
src/components/common/sections/Inquiry.tsx
src/hooks/useFormHandler.ts
src/app/api/send-email/route.ts
src/app/api/send-email/mailService/GmailSender.ts
src/app/api/send-email/mailTemplate/
```

Flow:

1. The user fills out the inquiry form.
2. Client-side form logic validates required select/radio values.
3. The form posts JSON to `/api/send-email`.
4. The API creates the internal admin email and customer confirmation email.
5. `GmailSender` sends both messages through Nodemailer.

Before changing the form fields, update:

- `src/types/formData.type.ts`
- `src/hooks/useFormHandler.ts`
- `src/components/common/sections/Inquiry.tsx`
- email templates in `src/app/api/send-email/mailTemplate/`

## SEO and Structured Data

SEO is handled through:

- Global metadata in `src/app/layout.tsx`
- Page metadata in route files under `src/app`
- Dynamic metadata for blog, category, and product pages
- Sitemap generation in `src/app/sitemap.ts`
- Robots generation in `src/app/robots.ts`
- JSON-LD schema components in `src/components/seo/schemas`

Structured data currently includes:

- Organization
- Local business
- Website
- Article
- Product
- Service
- Factory service
- Breadcrumbs

When adding a new public page, include:

1. A useful `title` and `description`.
2. Canonical URL using `baseUrl`.
3. Open Graph and Twitter images when relevant.
4. Breadcrumb schema when the page sits below the home page.
5. Sitemap coverage if the page should be indexed.

## Performance Notes

The app includes several production-focused optimizations:

- `next/image` remote image optimization.
- AVIF and WebP image format support.
- Long-lived cache headers for static assets and optimized images.
- `output: "standalone"` for lean Node deployments.
- Dynamic imports for below-the-fold sections.
- Loading placeholders to reduce layout shift.
- Critical font CSS inlining in `src/app/layout.tsx`.
- CSS optimization through `experimental.optimizeCss`.
- Package import optimization for selected libraries.
- Security headers configured in `next.config.mjs`.

## Deployment

The app can run anywhere that supports Node.js 20 and Next.js standalone output.

Typical deployment steps:

```bash
npm ci
npm run build
npm run start
```

Production requirements:

- Set all required environment variables.
- Provide `PORT` if the platform does not use `8080`.
- Confirm `src/utils/baseUrl.ts` matches the deployed domain.
- Confirm S3 image URLs and remote patterns are valid.
- Confirm SMTP credentials can send from the production host.
- Confirm the Google Maps API key allows the production domain.
- Confirm the Google Tag Manager ID in `src/app/layout.tsx` is correct.

## Troubleshooting

### Google Maps Does Not Load

- Check `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.
- Confirm the key has Maps JavaScript API enabled.
- Confirm HTTP referrer restrictions include the current domain.
- Check the browser console for Google Maps auth errors.

### Inquiry Emails Fail

- Check `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASSWORD`.
- Use a provider-supported app password when using Gmail.
- Check whether production SMTP should use port `465` or `587`.
- Review server logs for `/api/send-email`.

### Images Do Not Render

- Confirm the image URL is reachable.
- Confirm the image host is listed in `next.config.mjs`.
- Rebuild after changing `next.config.mjs`.

### Dynamic Pages Return 404

- Confirm the JSON file is imported into the matching index file.
- For categories, check `src/content/categories/categories.ts`.
- For products, check `src/content/product_details/products.ts`.
- For blogs, check `src/content/blogs/blogs.ts`.
- Confirm route titles are URL-encoded correctly.

### Sitemap Uses the Wrong Domain

- Update `src/utils/baseUrl.ts`.
- Rebuild the app.
- Visit `/sitemap.xml` to verify generated URLs.

## Maintenance Checklist

Before releasing changes:

```bash
npm run build
npm run lint
```

Also verify:

- Home page renders without layout shift or missing remote images.
- Inquiry submission works in the target environment.
- `/factory-service` map loads with the deployed API key.
- New product/category/blog content appears in routes and sitemap.
- Metadata and schema are correct for newly added pages.
- No local `.env` files or secrets are committed.

## License

This is a private project. No public license is currently provided.
