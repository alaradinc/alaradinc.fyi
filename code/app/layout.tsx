import type { Metadata } from 'next'
import { Geist, Inter, Crimson_Text, Space_Grotesk, EB_Garamond, Caveat, Dancing_Script } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-geist' });

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const crimsonText = Crimson_Text({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-crimson' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })
const ebGaramond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond' })

const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing' })

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Creative portfolio of videos, writing, and software',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${inter.variable} ${crimsonText.variable} ${spaceGrotesk.variable} ${ebGaramond.variable} ${caveat.variable} ${dancingScript.variable} ${geist.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
