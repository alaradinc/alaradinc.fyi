'use client'

import { VideoBackground } from '@/components/video-background'

export default function VideosPage() {
  const videos = [
    {
      title: 'Consulting Case Studies',
      description: 'Intervew Prep',
      youtubeId: 'SyThS7iJyA4',
      date: '2025'
    },
    {
      title: 'Consulting Behavioral Questions',
      description: 'Interview Prep',
      youtubeId: '1bM21wlxssQ',
      date: '2025'
    },
    {
      title: 'More Behavioral Questions',
      description: 'Interview Prep',
      youtubeId: 'uO5AwUC5IYo',
      date: '2025'
    },
    {
      title: 'How to Get Pass Interview',
      description: 'Career Advice',
      youtubeId: 'fHd1-_nZcrA',
      date: '2024'
    },
    {
      title: 'Switching Companies and Countries',
      description: 'Career Advice',
      youtubeId: '23T9kA-CfQs',
      date: '2024'
    },
    {
      title: 'How to Get into Top Colleges',
      description: 'College Admissions',
      youtubeId: 'h-CRueDgBSQ',
      date: '2021'
    },
    {
      title: 'Later Stage Companies Investing Earlier',
      description: 'Venture Capital',
      youtubeId: '4I-lPIj6hnk',
      date: '2024'
    },
    {
      title: 'College Move In',
      description: 'College Life',
      youtubeId: 'cO_1zC-3gac',
      date: '2021'
    },
    {
      title: 'Campus Parties',
      description: 'College Life',
      youtubeId: 'GdAwoDW9khQ',
      date: '2020'
    },
    {
      title: 'Windsurfing in Akyaka',
      description: 'Sports & Summers',
      youtubeId: 'uJC4EWN-uc0',
      date: '2020'
    },
    {
      title: 'Life Content from Different Places',
      description: 'Travels',
      youtubeId: 'gbwQjf4OTqA',
      date: '2019'
    },
    {
      title: 'Can\'t be Without the Sea',
      description: 'Sports & Summers',
      youtubeId: 'FpAqiwZnzVw',
      date: '2019'
    }
    

    
    
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground opacity={0.4} />

      <main className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <div className="space-y-12 text-white/90">
          <div className="space-y-4">
            <h1 className="text-5xl font-light tracking-wide">videos</h1>
            <p className="text-xl font-light">
              <a href="/" className="underline hover:text-white transition-colors">
                back
              </a>
            </p>
          </div>
          
          <p className="text-xl font-light text-white/80">
            just a sampling of different videos I've made so you can get a feel for my content {'<3'}. 
            i do share a lot more shorts on{' '}
            <a href="https://www.linkedin.com/in/alara-dinc/recent-activity/videos/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
              linkedin
            </a>
            {' '}so check that out too!
          </p>
          
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
                  <h2 className="text-xl font-light underline group-hover:text-white transition-colors">
                    {video.title}
                  </h2>
                  <p className="text-base font-light text-white/70">
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
