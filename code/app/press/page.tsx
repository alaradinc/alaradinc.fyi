'use client'

import { VideoBackground } from '@/components/video-background'

export default function PressPage() {
  const pressArticles = [
    {
      title: "Knidos'tan esen yolculuk",
      titleEn: 'Journey from Knidos',
      publication: 'Marie Claire Turkey',
      date: '2023',
      url: 'https://www.marieclaire.com.tr/knidostan-esen-yolculuk/',
      image: '/placeholder.svg',
    },
    {
      title: "Alara Dinç'ten soluksuz bir macera: Denizin Kayıp Kızı",
      titleEn: 'A Breathless Adventure from Alara Dinç: The Lost Daughter of the Sea',
      publication: 'Oksijen Gazete',
      date: '2023',
      url: 'https://gazeteoksijen.com/o2/alara-dincten-soluksuz-bir-macera-denizin-kayip-kizi-189561',
      image: '/placeholder.svg',
    },
    {
      title: '"Denizin Kayıp Kızı" Üzerine Sohbet',
      titleEn: 'A Conversation with Alara Dinç about "The Lost Daughter of the Sea"',
      publication: 'Alem.com.tr',
      date: '2023',
      url: 'https://www.alem.com.tr/yasam/alara-dinc-ile-denizin-kayip-kizi-uzerine-sohbet-1082687',
      image: '/placeholder.svg',
    },
    {
      title: 'Girişimcilik ve yazarlık bir arada',
      titleEn: 'Entrepreneurship and Writing Together',
      publication: 'Istanbul Life Magazine',
      date: '2023',
      url: 'https://www.magzter.com/stories/lifestyle/Istanbul-Life/1697713437970',
      image: '/placeholder.svg',
    },
    {
      title: 'Tarihi eser yağmasına çığlık atmak istedim!',
      titleEn: 'I Wanted to Scream at the Historical Artifact Looting!',
      publication: 'Sözcü',
      date: '2017',
      url: 'https://www.sozcu.com.tr/tarihi-eser-yagmasina-ciglik-atmak-istedim-wp1908709',
      image: '/placeholder.svg',
    },
    {
      title: 'Dinç kardeşler ilham veriyor',
      titleEn: 'The Dinç Siblings Inspire',
      publication: 'QBlog',
      date: '2023',
      url: 'https://blog.quicksigorta.com/yasam/dinc-kardesler-ilham-veriyor-2800',
      image: '/placeholder.svg',
    }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      <VideoBackground opacity={0.5} />

      <main className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        <div className="space-y-12 text-white">
          <p className="text-xl">
            <a href="/" className="underline hover:text-white/70 transition-colors">
              back
            </a>
          </p>

          <div className="space-y-8">
            <h1 className="text-5xl font-light">press</h1>

            <div className="space-y-8">
              {pressArticles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 rounded-sm border border-white/10 hover:border-white/20 transition-all">
                    {/* Article Image */}
                    <div className="relative aspect-video md:aspect-square overflow-hidden rounded-sm max-w-[200px]">
                      <img
                        src={article.image || '/placeholder.svg'}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Article Content */}
                    <div className="md:col-span-4 space-y-2">
                      <h2 className="text-2xl underline group-hover:text-white transition-colors">{article.title}</h2>
                      <p className="text-lg text-white/50 italic">{article.titleEn}</p>
                      <p className="text-xl text-white/60">
                        {article.publication} — {article.date}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
