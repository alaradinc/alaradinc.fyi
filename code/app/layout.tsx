import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alara Dinc - Portfolio',
  description: 'Creative portfolio of videos, writing, and software',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://use.typekit.net/wjt0rdm.css" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'shantell-sans-normal', 'felt-tip-senior', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
