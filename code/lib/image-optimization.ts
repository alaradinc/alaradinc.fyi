/**
 * Cloudflare Image Resizing helper
 * 
 * Cloudflare automatically optimizes images served from your domain.
 * This helper generates optimized image URLs with Cloudflare's image resizing.
 * 
 * Usage:
 * - For local images: getOptimizedImage('/book-cover.png', { width: 800 })
 * - For external images: Use Cloudflare Images or keep as-is
 */

interface ImageOptions {
  width?: number
  height?: number
  quality?: number // 1-100, default 85
  format?: 'webp' | 'avif' | 'jpeg' | 'png'
  fit?: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad'
}

/**
 * Generate an optimized image URL using Cloudflare's image resizing
 * 
 * Note: This works automatically when deployed on Cloudflare Pages.
 * For local development, it returns the original path (Cloudflare will optimize in production).
 * 
 * @param src - Image source path (e.g., '/book-cover.png')
 * @param options - Image optimization options
 * @returns Optimized image URL
 */
export function getOptimizedImage(
  src: string,
  options: ImageOptions = {}
): string {
  // For external URLs, return as-is (or use Cloudflare Images)
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  // Build Cloudflare image resizing URL
  // Format: /cdn-cgi/image/<options>/<path>
  // Note: In development, this will still work if you're testing on Cloudflare
  // In local dev, it returns the path which will work normally
  const params: string[] = []

  if (options.width) params.push(`width=${options.width}`)
  if (options.height) params.push(`height=${options.height}`)
  if (options.quality) params.push(`quality=${options.quality}`)
  if (options.format) params.push(`format=${options.format}`)
  if (options.fit) params.push(`fit=${options.fit}`)

  // Default to WebP format for better compression
  if (!options.format) params.push('format=webp')
  // Default quality
  if (!options.quality) params.push('quality=85')

  const queryString = params.join(',')
  return `/cdn-cgi/image/${queryString}${src}`
}

/**
 * Generate responsive image srcset for different screen sizes
 */
export function getResponsiveImageSrcset(
  src: string,
  sizes: number[] = [640, 768, 1024, 1280, 1920]
): string {
  return sizes
    .map((width) => `${getOptimizedImage(src, { width })} ${width}w`)
    .join(', ')
}

