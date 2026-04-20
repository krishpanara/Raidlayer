import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, organizationSchema } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Raidlayer Webhost — Enterprise Hosting, Offshore Teams & RAD Platform',
    template: `%s | ${SITE_NAME}`,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.svg',
  },
  description:
    'Raidlayer Webhost Private Limited delivers enterprise cloud hosting, dedicated offshore development teams from India, and rapid application development — powering businesses at scale.',
  keywords: [
    'enterprise web hosting India',
    'cloud infrastructure provider',
    'offshore development teams India',
    'dedicated remote developers',
    'rapid application development',
    'managed hosting services',
    'fractional CTO India',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Raidlayer Webhost — Enterprise Hosting, Offshore Teams & RAD Platform',
    description:
      'Enterprise cloud hosting, dedicated offshore development teams from India, and rapid application development under one integrated technology partner.',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raidlayer Webhost — Enterprise Hosting, Offshore Teams & RAD Platform',
    description:
      'Enterprise cloud hosting, dedicated offshore development teams from India, and rapid application development under one integrated technology partner.',
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  )
}
