import type { Metadata } from 'next'
import Script from 'next/script'
import ContactForm from './ContactForm'
import { buildMetadata, breadcrumbSchema, SITE_URL, SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Raidlayer — Request a Consultation for Enterprise Services',
  description:
    'Contact Raidlayer Webhost Private Limited to request a consultation for cloud hosting, offshore development teams, fractional CTO services, or rapid application development.',
  path: '/contact',
})

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Raidlayer Webhost',
  url: `${SITE_URL}/contact`,
  description: 'Request a consultation for enterprise cloud hosting, offshore development teams, or rapid application development.',
  mainEntity: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    email: 'info@raidlayer.com',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  },
}

export default function ContactPage() {
  return (
    <>
      <Script id="schema-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Script id="schema-breadcrumb-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }])) }} />
      <ContactForm />
    </>
  )
}
