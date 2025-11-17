'use client'

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <main className="relative z-10 max-w-2xl mx-auto px-8 py-16">
        <div className="space-y-8 text-white/90">
          <h1 className="text-4xl font-light tracking-wide">your name</h1>
          
          <div className="space-y-6 text-lg font-light leading-relaxed">
            <p>
              I create{' '}
              <a href="/videos" className="underline hover:text-white transition-colors">
                videos
              </a>
              ,{' '}
              <a href="#" className="underline hover:text-white transition-colors">
                write
              </a>
              , and build{' '}
              <a href="#" className="underline hover:text-white transition-colors">
                software
              </a>
              .
            </p>

            <p>
              My work explores the intersection of technology and creativity. I've published a{' '}
              <a href="/book" className="underline hover:text-white transition-colors">
                book
              </a>
              {' '}on digital experiences and maintain an active{' '}
              <a href="#" className="underline hover:text-white transition-colors">
                GitHub
              </a>
              {' '}with interactive projects.
            </p>

            <p>
              Currently working on immersive visual experiences and creative tools.
            </p>

            <p className="pt-4 flex items-center gap-4">
              <a href="/press" className="underline hover:text-white transition-colors">
                Press
              </a>
              <span>·</span>
              <a href="mailto:your@email.com" className="underline hover:text-white transition-colors">
                Get in touch
              </a>
              <span>·</span>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@yourchannel" 
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-70 transition-opacity"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </p>
            {/* </CHANGE> */}
          </div>
        </div>
      </main>
    </div>
  )
}
