import Link from 'next/link'

export default function FontPreview() {
  return (
    <div className="min-h-screen relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3327031-hd_1920_1080_24fps-0hIxkx8XhkHqRJm7bJF5v2cPXsfEJ0.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-black/50 -z-5" />

      <main className="relative z-10 min-h-screen py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/60 hover:text-white underline mb-8 inline-block">
            ← back
          </Link>

          <h1 className="text-4xl text-white mb-16">Font Preview</h1>

          <div className="mb-16 p-8 bg-white/5 backdrop-blur-sm rounded-lg">
            <p className="text-white/60 text-sm mb-4">Option 1: Geist (Current)</p>
            <div className="font-[family-name:var(--font-geist)]">
              <h2 className="text-3xl text-white mb-4">The quick brown fox jumps over the lazy dog</h2>
              <p className="text-white/80 text-lg mb-2">Modern, clean sans-serif by Vercel</p>
              <p className="text-white/60">Designed for optimal readability with a contemporary feel. Perfect for tech-forward portfolios.</p>
            </div>
          </div>

          <div className="mb-16 p-8 bg-white/5 backdrop-blur-sm rounded-lg">
            <p className="text-white/60 text-sm mb-4">Option 2: Inter</p>
            <div className="font-[family-name:var(--font-inter)]">
              <h2 className="text-3xl text-white mb-4">The quick brown fox jumps over the lazy dog</h2>
              <p className="text-white/80 text-lg mb-2">Clean, professional sans-serif</p>
              <p className="text-white/60">A versatile font with excellent readability. Works well for minimal, professional designs.</p>
            </div>
          </div>

          <div className="mb-16 p-8 bg-white/5 backdrop-blur-sm rounded-lg">
            <p className="text-white/60 text-sm mb-4">Option 3: Crimson Text</p>
            <div className="font-[family-name:var(--font-crimson)]">
              <h2 className="text-3xl text-white mb-4">The quick brown fox jumps over the lazy dog</h2>
              <p className="text-white/80 text-lg mb-2">Elegant serif with literary charm</p>
              <p className="text-white/60">Perfect for authors and creatives. Gives a classic, book-like aesthetic with sophisticated readability.</p>
            </div>
          </div>

          <div className="mb-16 p-8 bg-white/5 backdrop-blur-sm rounded-lg">
            <p className="text-white/60 text-sm mb-4">Option 4: Space Grotesk</p>
            <div className="font-[family-name:var(--font-space)]">
              <h2 className="text-3xl text-white mb-4">The quick brown fox jumps over the lazy dog</h2>
              <p className="text-white/80 text-lg mb-2">Geometric with unique personality</p>
              <p className="text-white/60">Modern and distinctive with slightly retro vibes. Great for standing out with a tech-forward aesthetic.</p>
            </div>
          </div>

          <div className="mb-16 p-8 bg-white/5 backdrop-blur-sm rounded-lg">
            <p className="text-white/60 text-sm mb-4">Option 5: EB Garamond</p>
            <div className="font-[family-name:var(--font-garamond)]">
              <h2 className="text-3xl text-white mb-4">The quick brown fox jumps over the lazy dog</h2>
              <p className="text-white/80 text-lg mb-2">Sophisticated serif for refined taste</p>
              <p className="text-white/60">Timeless elegance with excellent legibility. Perfect for literary work and sophisticated portfolios.</p>
            </div>
          </div>

          <div className="mb-16 p-8 bg-white/5 backdrop-blur-sm rounded-lg">
            <p className="text-white/60 text-sm mb-4">Option 6: Caveat (Handwritten Style)</p>
            <div className="font-[family-name:var(--font-caveat)]">
              <h2 className="text-3xl text-white mb-4">The quick brown fox jumps over the lazy dog</h2>
              <p className="text-white/80 text-lg mb-2">Casual handwritten with organic feel</p>
              <p className="text-white/60">Friendly and approachable handwritten style. Perfect for creative, personal portfolios with a relaxed vibe.</p>
            </div>
          </div>

          <div className="mb-16 p-8 bg-white/5 backdrop-blur-sm rounded-lg">
            <p className="text-white/60 text-sm mb-4">Option 7: Dancing Script (Elegant Script)</p>
            <div className="font-[family-name:var(--font-dancing)]">
              <h2 className="text-3xl text-white mb-4">The quick brown fox jumps over the lazy dog</h2>
              <p className="text-white/80 text-lg mb-2">Flowing script with elegance</p>
              <p className="text-white/60">Elegant cursive style that adds sophistication. Great for artistic portfolios and personal branding.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-cyan-500/10 backdrop-blur-sm rounded-lg border border-cyan-500/20">
            <p className="text-white/80 mb-2">To change the font:</p>
            <p className="text-white/60 text-sm">Tell me which option you prefer (1-7), and I'll update your entire site to use that font.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
