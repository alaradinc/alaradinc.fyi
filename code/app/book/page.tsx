'use client'

import { useMemo, useRef } from 'react'
import { VideoBackground } from '@/components/video-background'
// For free version (no paid Cloudflare plan), use regular images
// For paid Cloudflare plan, uncomment the line below:
// import { getOptimizedImage, getResponsiveImageSrcset } from '@/lib/image-optimization'

export default function BookPage() {
  // Generate stable, deterministic image URLs based on index to enable proper caching
  // useMemo ensures the array is only created once and remains stable across re-renders
  const readerReviews = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      // Use index modulo to create deterministic variations
      const height = i % 3 === 0 ? 400 : i % 3 === 1 ? 300 : 350
      const width = i % 2 === 0 ? 300 : 250
      return {
        image: `/placeholder.svg?height=${height}&width=${width}&id=${i}`,
        alt: `Reader review ${i + 1}`
      }
    })
  }, [])

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <VideoBackground opacity={0.4} />

      <main className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-16 text-white/90">
          {/* Back link */}
          <p className="text-xl font-light">
            <a href="/" className="underline hover:text-white transition-colors">
              back
            </a>
          </p>

          {/* Book details section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Book cover */}
            <div className="relative w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl aspect-[2/3]">
              <img
                src="/book-cover.png"
                alt="Book cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-contain"
              />
              {/* To use Cloudflare optimization (requires paid plan), replace above with:
              <img
                src={getOptimizedImage('/book-cover.png', { width: 1200, format: 'webp', quality: 90 })}
                srcSet={getResponsiveImageSrcset('/book-cover.png', [640, 768, 1024, 1280, 1920])}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 45vw, 40vw"
                alt="Book cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-contain"
              />
              */}
            </div>

            {/* Book information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl font-light tracking-wide mb-2">
                  Denizin Kayıp Kızı
                </h1>
                <p className="text-3xl font-light text-white/70 mb-4">
                  The Lost Daughter of the Sea
                </p>
                <p className="text-xl font-light text-white/60">
                  Published by{' '}
                  <a href="https://www.epsilonyayinevi.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                    Epsilon Yayınları
                  </a>
                  {' '}— 2017.
                </p>
              </div>

              <div className="space-y-4 text-xl font-light leading-relaxed">
                <p>
                  In <span className="italic">Denizin Kayıp Kızı</span> (The Lost Daughter of the Sea), the protagonist Asya embarks on a summer vacation to her grandmother's house in Datça, a beautiful coastal town in Turkey. Upon arrival, she encounters a series of mysterious events and befriends a group of local youths.
                </p>
                <p>
                  Together, they stumble upon a corpse on the shore, leading them into a perilous adventure involving historical artifact smuggling. The narrative delves into themes of curiosity, danger, and the thin line between life and death as Asya navigates through the mysteries of the coastal town.
                </p>
                <p>
                  This mystery novel explores the intersection of youth, adventure, and the secrets hidden beneath the surface of a seemingly peaceful seaside community.
                </p>
              </div>

              {/* Purchase links */}
              <div className="space-y-3">
                <p className="text-xl font-light">Find a copy at:</p>
                <div className="flex flex-col gap-2 text-xl font-light">
                  
                  <a href="https://www.epsilonyayinevi.com/denizin-kayip-kizi-9786051732220" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                    Epsilon Publishing House
                  </a>
                </div>
                <p className="text-lg font-light text-white/60 pt-2">
                  Note: Currently available in Turkish. English translation coming soon.
                </p>
              </div>

              {/* Book details */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="text-xl font-light">Book Details:</p>
                <div className="space-y-1 text-lg font-light text-white/80">
                  <p>ISBN: 9786051732220</p>
                  <p>Language: Turkish</p>
                  <p>Genre: Mystery / Adventure</p>
                </div>
              </div>

              {/* Review links */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="text-xl font-light">Read reviews on:</p>
                <div className="flex flex-col gap-2 text-xl font-light">
                  <a 
                    href="https://www.goodreads.com/book/show/35894327-denizin-kay-p-k-z" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    Goodreads
                  </a>
                  <a 
                    href="https://1000kitap.com/kitap/denizin-kayip-kizi--112982" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    1000kitap
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* What Readers Are Saying and Audiobook section */}
          <div className="pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* What Readers Are Saying section */}
              <div className="space-y-4 flex flex-col h-full">
                <h2 className="text-3xl font-light tracking-wide">What Readers Are Saying</h2>
                <div className="relative aspect-video overflow-hidden rounded-sm flex-1 group">
                  <div 
                    ref={scrollContainerRef}
                    className="absolute inset-0 flex flex-wrap gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide"
                  >
                    {[...readerReviews, ...readerReviews].map((review, index) => (
                      <div
                        key={index}
                        className="relative flex-shrink-0 h-[calc(50%-0.5rem)] w-32 overflow-hidden rounded-sm"
                      >
                        <img
                          src={review.image || "/placeholder.svg"}
                          alt={review.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Scroll buttons */}
                  <button
                    onClick={scrollLeft}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-auto"
                    aria-label="Scroll left"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={scrollRight}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-auto"
                    aria-label="Scroll right"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Audiobook section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-light tracking-wide">Audiobook</h2>
                <a
                  href="https://youtu.be/YMiwQdrCaNI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-video overflow-hidden rounded-sm">
                    <img
                      src="https://img.youtube.com/vi/YMiwQdrCaNI/maxresdefault.jpg"
                      alt="Audiobook video thumbnail"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl font-light mt-3 underline group-hover:text-white transition-colors">
                    Listen to the audiobook
                  </p>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
