'use client'

export default function VideosPage() {
  const videos = [
    {
      title: 'Creative Coding Experiments',
      description: 'Exploring generative art with code',
      youtubeId: 'SyThS7iJyA4',
      date: '2024'
    },
    {
      title: 'Interactive Installations',
      description: 'Immersive digital experiences',
      youtubeId: 'dQw4w9WgXcQ',
      date: '2024'
    },
    {
      title: 'Ocean Simulations',
      description: 'Real-time water physics and rendering',
      youtubeId: 'dQw4w9WgXcQ',
      date: '2023'
    },
    {
      title: 'Shader Experiments',
      description: 'Visual effects with WebGL',
      youtubeId: 'dQw4w9WgXcQ',
      date: '2023'
    },
    {
      title: 'Data Visualizations',
      description: 'Making information beautiful',
      youtubeId: 'dQw4w9WgXcQ',
      date: '2023'
    }
  ]

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

      <main className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <div className="space-y-12 text-white/90">
          <div className="space-y-4">
            <h1 className="text-4xl font-light tracking-wide">videos</h1>
            <p className="text-lg font-light">
              <a href="/" className="underline hover:text-white transition-colors">
                back
              </a>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <a 
                key={index}
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group space-y-3"
              >
                {/* Video thumbnail with hover effect */}
                <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 bg-black/20 backdrop-blur-sm">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
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
                
                {/* Video info */}
                <div className="space-y-1">
                  <h2 className="text-lg font-light underline group-hover:text-white transition-colors">
                    {video.title}
                  </h2>
                  <p className="text-sm font-light text-white/70">
                    {video.description} · {video.date}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
