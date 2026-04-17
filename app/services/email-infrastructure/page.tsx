import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Mail, Shield, BarChart3, Settings, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Business Email Infrastructure — Custom Domain Email for Enterprises',
  description:
    'Enterprise business email solutions from Raidlayer: custom domain email, SPF/DKIM/DMARC setup, spam protection, email archiving, and deliverability management.',
  path: '/services/email-infrastructure',
})

const features = [
  { icon: Mail, title: 'Custom Domain Email', desc: 'Professional email addresses on your own domain with full DNS configuration, SPF, DKIM, and DMARC setup for maximum deliverability.' },
  { icon: Shield, title: 'Spam & Threat Protection', desc: 'Multi-layer spam filtering, phishing detection, and malware scanning to protect your organization from email-based threats.' },
  { icon: BarChart3, title: 'Email Archiving', desc: 'Compliance-ready email archiving with searchable archives, retention policies, and audit trail capabilities.' },
  { icon: Settings, title: 'Infrastructure Management', desc: 'Full management of mail server configuration, queue monitoring, bounce handling, and deliverability optimization.' },
]

export default function EmailInfrastructurePage() {
  return (
    <>
      <Script id="schema-email" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Business Email Infrastructure', 'Enterprise business email with custom domains, SPF/DKIM/DMARC, spam protection, and deliverability management.', '/services/email-infrastructure')) }} />
      <Script id="schema-breadcrumb-email" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Email Infrastructure', url: '/services/email-infrastructure' }])) }} />

      <PageHero
        badge="Email & Communication Infrastructure"
        title="Enterprise Business Email Infrastructure for Professional Operations"
        subtitle="Enterprise-grade business email solutions with custom domains, robust security, and the deliverability standards that professional communication demands."
      >
        <Button asChild size="lg">
          <Link href="/contact">Discuss Email Requirements <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </PageHero>

      <section className="py-20 bg-white" aria-label="Email Capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Capabilities" title="Complete business email infrastructure management" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <Card key={f.title} className="p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <f.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="font-bold text-slate-900 text-lg mb-2">{f.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" aria-label="Key Advantages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Key Advantages" title="Why business email infrastructure matters" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              'SPF, DKIM, DMARC configuration',
              'Blacklist monitoring and remediation',
              'Transactional email routing',
              'Webmail and client access',
              'Shared and individual mailboxes',
              'Email forwarding and aliases',
              'Attachment size and policy controls',
              'Mobile device sync (ActiveSync)',
              'Uptime monitoring for mail services',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
                <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600" aria-label="Contact CTA">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Set up professional business email infrastructure</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Contact us to configure enterprise email for your organization with full deliverability and security management.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
