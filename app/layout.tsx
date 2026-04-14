import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Raidlayer Webhost Private Limited',
    template: '%s | Raidlayer Webhost Private Limited',
  },
  description:
    'Enterprise infrastructure, offshore development teams, and rapid application development — powering businesses at scale.',
  keywords: ['web hosting', 'cloud infrastructure', 'offshore development', 'remote teams', 'India'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raidlayer.com',
    siteName: 'Raidlayer Webhost Private Limited',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
