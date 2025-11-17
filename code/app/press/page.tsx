'use client'

export default function PressPage() {
  const pressArticles = [
    {
      title: 'The Digital Storyteller Redefining Creative Technology',
      publication: 'Marie Claire',
      date: 'April 2024',
      url: '#',
    },
    {
      title: 'Why This Book Is Changing How We Think About Walking',
      publication: 'The Guardian',
      date: 'March 2024',
      url: '#',
    },
    {
      title: 'Creator Spotlight: Building Immersive Visual Experiences',
      publication: 'Wired',
      date: 'February 2024',
      url: '#',
    },
    {
      title: 'The New Wave of Digital Memoir',
      publication: 'Vogue',
      date: 'January 2024',
      url: '#',
    },
    {
      title: 'Tech Meets Art: A Conversation',
      publication: 'Forbes',
      date: 'December 2023',
      url: '#',
    },
    {
      title: 'Visual Poetry in the Digital Age',
      publication: 'Elle',
      date: 'November 2023',
      url: '#',
    }
  ]

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

      <div className="fixed inset-0 bg-black/50 z-0" />

      <main className="relative z-10 max-w-3xl mx-auto px-8 py-16">
        <div className="space-y-12 text-white">
          <p className="text-lg">
            <a href="/" className="underline hover:text-white/70 transition-colors">
              back
            </a>
          </p>

          <div className="space-y-8">
            <h1 className="text-4xl font-light">press</h1>

            <ul className="space-y-6">
              {pressArticles.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block space-y-1 hover:text-white/70 transition-colors"
                  >
                    <h2 className="text-xl underline">{article.title}</h2>
                    <p className="text-lg text-white/60">
                      {article.publication} — {article.date}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
