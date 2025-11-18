# Cloudflare Pages Deployment Guide

This guide will help you deploy your Next.js application to Cloudflare Pages via GitHub.

## Prerequisites

1. A GitHub account
2. A Cloudflare account
3. Your code pushed to a GitHub repository

## Step-by-Step Deployment

### 1. Push Your Code to GitHub

If you haven't already, initialize git and push to GitHub:

```bash
cd code
git init
git add .
git commit -m "Initial commit - ready for Cloudflare deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Connect GitHub to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages**
3. Click **Create application**
4. Select the **Pages** tab
5. Click **Connect to Git**
6. Authorize Cloudflare to access your GitHub account
7. Select your repository

### 3. Configure Build Settings

In the Cloudflare Pages setup, configure:

- **Project name**: `alaradinc-fyi` (or your preferred name)
- **Production branch**: `main`
- **Framework preset**: `Next.js` (or leave as "None")
- **Build command**: `npm run pages:build` (this will automatically cd into the code directory)
- **Build output directory**: `code/.vercel/output/static`
- **Root directory**: Leave empty (root of repository)

**Important Environment Variables** (if needed):
- No environment variables required for basic deployment

### 4. Deploy

Click **Save and Deploy**. Cloudflare will:
1. Clone your repository
2. Install dependencies (`npm install`)
3. Run the build command (`npm run pages:build`)
4. Deploy to Cloudflare Pages

### 5. Custom Domain (Optional)

After deployment:
1. Go to your project in Cloudflare Pages
2. Click **Custom domains**
3. Add your domain (e.g., `alaradinc.fyi`)
4. Follow DNS configuration instructions

## Build Configuration

The project is configured with:

- **OpenNext Cloudflare Adapter**: `@opennextjs/cloudflare`
- **Next.js Config**: Adapter path set in `next.config.mjs`
- **Wrangler Config**: `wrangler.toml` for Cloudflare settings

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18+ in Cloudflare build settings
- Verify the root directory is set correctly if your app is in a subfolder

### Runtime Errors

- Ensure all pages using server-side features have `export const runtime = "edge"` if needed
- Check that external API calls are compatible with Cloudflare Workers runtime

### Image Optimization

- Next.js Image component should work with Cloudflare
- Ensure remote image domains are in `next.config.mjs` `remotePatterns`

## Local Testing

Test the Cloudflare build locally:

```bash
npm run preview
```

This builds and runs your app using Wrangler (requires `wrangler` CLI installed).

## Additional Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [OpenNext Cloudflare Docs](https://opennext.js.org/cloudflare)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

