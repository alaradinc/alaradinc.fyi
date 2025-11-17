'use client'

export default function BookPage() {
  const articles = [
    {
      title: 'A Journey Through Digital Landscapes',
      publication: 'The Creative Review',
      date: 'March 2024',
      url: '#'
    },
    {
      title: 'Reflections on Modern Creativity',
      publication: 'Design Matters',
      date: 'February 2024',
      url: '#'
    },
    {
      title: 'The Art of Visual Storytelling',
      publication: 'Medium',
      date: 'January 2024',
      url: '#'
    }
  ]

  const readerReviews = Array.from({ length: 50 }, (_, i) => ({
    image: `/placeholder.svg?height=${Math.random() > 0.5 ? 400 : 300}&width=${Math.random() > 0.5 ? 300 : 250}`,
    alt: `Reader review ${i + 1}`
  }))

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3327031-hd_1920_1080_24fps-0hIxkx8XhkHqRJm7bJF5v2cPXsfEJ0.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-black/40 z-0" />

      <main className="relative z-10 max-w-6xl mx-auto px-8 py-16">
        <div className="space-y-16 text-white/90">
          {/* Back link */}
          <p className="text-lg font-light">
            <a href="/" className="underline hover:text-white transition-colors">
              back
            </a>
          </p>

          {/* Book details section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Book cover */}
            <div className="w-full max-w-md">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wv0rlnrcgub1PjvvXG8tiQo9b3oUwy.png"
                alt="Book cover"
                className="w-full shadow-2xl"
              />
            </div>

            {/* Book information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-light tracking-wide mb-2">
                  Things Become Other Things
                </h1>
                <p className="text-2xl font-light text-white/70 mb-4">
                  A Walking Memoir
                </p>
                <p className="text-lg font-light text-white/60">
                  Published by{' '}
                  <a href="#" className="underline hover:text-white transition-colors">
                    Random House
                  </a>
                  {' '}— May, 2025.
                </p>
              </div>

              <div className="space-y-4 text-lg font-light leading-relaxed">
                <p className="italic">
                  "Luminous, poignant, unflinching and kind, <span className="font-normal">THINGS BECOME OTHER THINGS</span> reads like a future classic of its genre."
                </p>
                <p className="text-white/60">
                  — David Mitchell, New York Times bestselling author of <span className="italic">Cloud Atlas</span>
                </p>
              </div>

              <div className="space-y-4 text-lg font-light leading-relaxed">
                <p>
                  For lifelong walkers and Japanophiles who crave a sense of wonder off the tourist map, <span className="italic">Things Become Other Things</span> is a photo-rich narrative that shows how ordinary countryside lanes transform into portals of culture.
                </p>
              </div>

              {/* Purchase links */}
              <div className="space-y-3">
                <p className="text-lg font-light">Nab a copy at:</p>
                <div className="flex flex-col gap-2 text-lg font-light">
                  <a href="#" className="underline hover:text-white transition-colors">
                    Amazon
                  </a>
                  <a href="#" className="underline hover:text-white transition-colors">
                    Bookshop.org
                  </a>
                  <a href="#" className="underline hover:text-white transition-colors">
                    Apple Books
                  </a>
                  <a href="#" className="underline hover:text-white transition-colors">
                    Barnes & Noble
                  </a>
                </div>
              </div>

              {/* Review links */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="text-lg font-light">Read reviews on:</p>
                <div className="flex flex-col gap-2 text-lg font-light">
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    Goodreads
                  </a>
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    Kitapyurdu
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-light tracking-wide">What Readers Are Saying</h2>
            <div className="relative h-32 overflow-hidden rounded-sm border border-white/10 bg-black/20 backdrop-blur-sm">
              <div className="flex gap-3 animate-scroll-left hover:pause-animation">
                {[...readerReviews, ...readerReviews].map((review, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 h-28 w-20 overflow-hidden rounded-sm border border-white/10 bg-black/30"
                  >
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.alt}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Articles section */}
          <div className="space-y-8 pt-8 border-t border-white/10">
            <h2 className="text-3xl font-light tracking-wide">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  className="group space-y-2 p-6 rounded-sm border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-black/30 hover:border-white/20 transition-all"
                >
                  <h3 className="text-xl font-light underline group-hover:text-white transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm font-light text-white/60">
                    {article.publication} · {article.date}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
