'use client'

import { VideoBackground } from '@/components/video-background'

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground opacity={0.4} />

      <main className="relative z-10 max-w-2xl mx-auto px-8 py-16">
        <div className="space-y-8 text-white/90">
          <h1 className="text-5xl font-light tracking-wide">Alara Dinc</h1>
          
          <div className="space-y-6 text-xl font-light leading-relaxed">
            <p>
              I create{' '}
              <a href="/videos" className="underline hover:text-white transition-colors">
                videos
              </a>
              ,{' '}
              <a href="/book" className="underline hover:text-white transition-colors">
                write
              </a>
              , and build software.
            </p>

            <p>
              My work explores the intersection of technology, business, and creativity.
            </p>

            <p>
              I've published a 280-page{' '}
              <a href="/book" className="underline hover:text-white transition-colors">
                mystery novel
              </a>
              {' '} and maintain an active{' '}
              <a href="https://github.com/alaradinc" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                GitHub
              </a>
              {' '}.
            </p>

            <p>
              Currently working on creating more multidisciplinary content.
            </p>

            <p className="pt-4">
              <a href="/press" className="underline hover:text-white transition-colors">
                Press / News
              </a>
            </p>

            <div className="pt-4 space-y-2">
              <p className="text-xl font-light">You can check me out here:</p>
              <div className="space-y-1 text-xl font-light">
                <p>
                  Turkish YT:{' '}
                  <a href="https://www.youtube.com/@AlaraDincYT" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                    @AlaraDincYT
                  </a>
                </p>
                <p>
                  English YT:{' '}
                  <a href="https://www.youtube.com/@alara_dinc" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                    @alara_dinc
                  </a>
                </p>
                <p>
                  Consulting YT:{' '}
                  <a href="https://www.youtube.com/@Prepmatter" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                    @Prepmatter
                  </a>
                </p>
                <p>
                  Insta:{' '}
                  <a href="https://www.instagram.com/alara.dinc" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                    @alara.dinc
                  </a>
                </p>
                <p>
                  LinkedIn:{' '}
                  <a href="https://www.linkedin.com/in/alara-dinc/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                    alara-dinc
                  </a>
                </p>
                <p>
                  GitHub:{' '}
                  <a href="https://github.com/alaradinc" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                    alaradinc
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
