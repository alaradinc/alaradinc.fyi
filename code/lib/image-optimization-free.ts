/**
 * Free Image Optimization Helper (No Paid Plans Required)
 * 
 * This version works without any paid Cloudflare plans.
 * It uses native browser optimizations and best practices.
 * 
 * Usage:
 * - For local images: getOptimizedImage('/book-cover.png', { width: 800 })
 * - For external images: Keep as-is
 */

interface ImageOptions {
  width?: number
  height?: number
  quality?: number // 1-100, for future use
  format?: 'webp' | 'avif' | 'jpeg' | 'png'
  fit?: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad'
}

/**
 * Generate an image URL (free version - no Cloudflare optimization)
 * 
 * This version returns the original image path.
 * For optimization, pre-optimize images at build time or use a free CDN.
 * 
 * @param src - Image source path (e.g., '/book-cover.png')
 * @param options - Image options (for future use or documentation)
 * @returns Image URL
 */
export function getOptimizedImage(
  src: string,
  options: ImageOptions = {}
): string {
  // For external URLs, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  // Return original path - no Cloudflare optimization
  // To optimize: pre-optimize images at build time or use a free CDN
  return src
}

/**
 * Generate responsive image srcset for different screen sizes
 * 
 * This creates multiple image URLs for responsive loading.
 * You'll need to create multiple image sizes manually or use a build tool.
 * 
 * @param src - Image source path
 * @param sizes - Array of widths to generate
 * @returns srcset string
 */
export function getResponsiveImageSrcset(
  src: string,
  sizes: number[] = [640, 768, 1024, 1280, 1920]
): string {
  // For free version, return single image
  // To use this properly, you'd need to:
  // 1. Create multiple image sizes at build time
  // 2. Store them as /book-cover-640w.webp, /book-cover-768w.webp, etc.
  // 3. Then generate proper srcset
  
  // For now, return empty string (browser will use src)
  return ''
}

/**
 * Alternative: Use a free CDN like Cloudinary
 * 
 * Example with Cloudinary (free tier: 25GB storage, 25GB bandwidth/month):
 * 
 * const CLOUDINARY_CLOUD_NAME = 'your-cloud-name'
 * 
 * export function getCloudinaryImage(
 *   imagePath: string,
 *   options: ImageOptions = {}
 * ): string {
 *   const params = [
 *     options.width && `w_${options.width}`,
 *     options.height && `h_${options.height}`,
 *     options.quality && `q_${options.quality}`,
 *     options.format && `f_${options.format}`,
 *   ].filter(Boolean).join(',')
 *   
 *   return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${params}/${imagePath}`
 * }
 */

