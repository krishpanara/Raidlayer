import type { Metadata } from 'next'

export const SITE_URL = 'https://raidlayer.com'
export const SITE_NAME = 'Raidlayer Webhost Private Limited'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
}: {
  title: string
  description: string
  path: string
  ogImage?: string
}): Metadata {
  const url = `${SITE_URL}${path}`
  const image = ogImage ?? DEFAULT_OG_IMAGE
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@raidlayer.com',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}${url}`,
    areaServed: { '@type': 'Country', name: 'India' },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}
