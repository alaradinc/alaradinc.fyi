# Cloudflare Image Optimization Setup Guide

This guide explains how to set up automatic image optimization for your site using Cloudflare.

## Option 1: Cloudflare Image Resizing (Recommended - Easiest)

Cloudflare Image Resizing automatically optimizes images served from your domain. It's free and works automatically once enabled.

### Setup Steps:

1. **Enable Image Resizing in Cloudflare Dashboard:**
   - Go to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Select your domain (`alaradinc.fyi`)
   - Go to **Speed** → **Optimization**
   - Scroll down to **Image Resizing**
   - Enable **Image Resizing** (it's free for Cloudflare Pages)

2. **That's it!** The code is already set up to use it.

### How It Works:

- Images are automatically converted to WebP/AVIF format
- Images are resized on-demand based on the URL parameters
- Works with any image served from your domain
- No uploads needed - works with your existing images

### Example URLs Generated:

```
/cdn-cgi/image/width=1200,format=webp,quality=90/book-cover.png
```

## Option 2: Cloudflare Images (Full Service)

Cloudflare Images is a full image hosting and optimization service. It requires uploading images but provides more control.

### Setup Steps:

1. **Enable Cloudflare Images:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Images** in the sidebar
   - Click **Get Started** or **Enable Cloudflare Images**
   - Note your Account Hash (found in the Images dashboard)

2. **Get Your API Token:**
   - Go to **My Profile** → **API Tokens**
   - Create a token with **Cloudflare Images:Edit** permissions
   - Save the token securely

3. **Upload Images:**
   - Use the Cloudflare Images dashboard to upload images
   - Or use the API to upload programmatically
   - Each image gets a unique ID

4. **Update Code to Use Cloudflare Images:**

   Replace the image helper with Cloudflare Images URLs:

   ```typescript
   // In lib/image-optimization.ts
   const CLOUDFLARE_IMAGES_ACCOUNT_HASH = 'your-account-hash'
   
   export function getCloudflareImageUrl(
     imageId: string,
     options: ImageOptions = {}
   ): string {
     const params: string[] = []
     if (options.width) params.push(`width=${options.width}`)
     if (options.height) params.push(`height=${options.height}`)
     if (options.quality) params.push(`quality=${options.quality}`)
     if (options.format) params.push(`format=${options.format}`)
     
     const variant = params.length > 0 ? `/${params.join(',')}` : ''
     return `https://imagedelivery.net/${CLOUDFLARE_IMAGES_ACCOUNT_HASH}/${imageId}${variant}`
   }
   ```

### Cloudflare Images Pricing:

- **Free Tier:** 100,000 served images/month
- **Paid:** $1 per 100,000 additional images

## Option 3: Alternative CDNs

### Cloudinary (Popular Alternative)

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your cloud name
3. Update image URLs:

```typescript
export function getCloudinaryImage(
  imagePath: string,
  options: ImageOptions = {}
): string {
  const cloudName = 'your-cloud-name'
  const params = [
    options.width && `w_${options.width}`,
    options.height && `h_${options.height}`,
    options.quality && `q_${options.quality}`,
    options.format && `f_${options.format}`,
  ].filter(Boolean).join(',')
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${params}/${imagePath}`
}
```

### Imgix

Similar setup to Cloudinary, with different URL structure.

## Current Implementation

The code currently uses **Option 1 (Cloudflare Image Resizing)** which:
- ✅ Works automatically once enabled in Cloudflare
- ✅ No code changes needed after initial setup
- ✅ Free for Cloudflare Pages
- ✅ Works with existing images

## Testing

After enabling Image Resizing:

1. Deploy your site to Cloudflare Pages
2. Visit your site and check image URLs in browser DevTools
3. You should see URLs like: `/cdn-cgi/image/width=1200,format=webp,quality=90/book-cover.png`
4. Images should load faster and be smaller in file size

## Troubleshooting

**Images not optimizing:**
- Make sure Image Resizing is enabled in Cloudflare Dashboard
- Check that images are served from your domain (not external URLs)
- Verify the URL format matches: `/cdn-cgi/image/...`

**External images (YouTube thumbnails):**
- These are already optimized by YouTube
- No changes needed for external images

