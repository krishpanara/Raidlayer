import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Server, HardDrive, Cloud, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Cloud & Hosting Solutions — Managed VPS, Dedicated & Cloud Servers',
  description:
    'Enterprise cloud hosting solutions from Raidlayer: managed VPS, dedicated servers, and cloud infrastructure with 99.9% uptime SLA, DDoS protection, and 24/7 monitoring.',
  path: '/services/cloud-hosting',
})

const hostingTypes = [
  {
    icon: Server,
    title: 'Shared Hosting',
    desc: 'Cost-effective hosting for smaller websites and applications with managed server environments, cPanel access, and standard performance guarantees.',
    features: ['cPanel / WHM Access', 'Free SSL Certificates', 'Email Hosting Included', 'Daily Backups', 'One-Click App Installs'],
  },
  {
    icon: HardDrive,
    title: 'VPS Hosting',
    desc: 'Isolated virtual server environments with dedicated resources, root access, and full configuration control for growing applications.',
    features: ['Dedicated CPU & RAM', 'Root / SSH Access', 'Choice of OS', 'Scalable Resources', 'Managed or Unmanaged Options'],
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    desc: 'Scalable cloud environments with auto-scaling, load balancing, and infrastructure-as-code capabilities for enterprise workloads.',
    features: ['Auto-Scaling Groups', 'Load Balancer Configuration', 'Multi-Region Deployment', 'Infrastructure as Code', 'Managed Kubernetes'],
  },
]

const advantages = [
  'Proactive monitoring with real-time alerting',
  '99.9% uptime service level agreement',
  'Automated backup with point-in-time recovery',
  'DDoS protection and firewall management',
  'SSL certificate provisioning and renewal',
  'Performance optimization and caching setup',
  'Migration assistance from existing providers',
  'Dedicated support with defined response times',
]

export default function CloudHostingPage() {
  return (
    <>
      <Script id="schema-cloud-hosting" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Cloud & Hosting Solutions', 'Enterprise cloud hosting: managed VPS, dedicated servers, and cloud infrastructure with 99.9% uptime SLA and 24/7 monitoring.', '/services/cloud-hosting')) }} />
      <Script id="schema-breadcrumb-cloud" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Cloud & Hosting', url: '/services/cloud-hosting' }])) }} />

      <PageHero
        badge="Cloud & Hosting Solutions"
        title="Enterprise Cloud Hosting Infrastructure That Businesses Can Rely On"
        subtitle="From shared environments to fully managed cloud infrastructure, we provide hosting solutions engineered for performance, security, and operational continuity — with 99.9% uptime SLA."
      >
        <Button asChild size="lg">
          <Link href="/contact">Discuss Cloud Hosting Requirements <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </PageHero>

      {/* Hosting Types */}
      <section className="py-20 bg-white" aria-label="Hosting Solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Solutions" title="Cloud hosting for every scale and requirement" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hostingTypes.map((h) => (
              <Card key={h.title} className="p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <h.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="font-bold text-slate-900 text-xl mb-3">{h.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{h.desc}</p>
                <ul className="space-y-2">
                  {h.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50" aria-label="Onboarding Process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Process" title="How we onboard and manage your cloud hosting infrastructure" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Requirements Assessment', desc: 'We evaluate your application stack, traffic patterns, and performance requirements.' },
              { step: '2', title: 'Environment Design', desc: 'We architect the appropriate hosting environment with security and scalability in mind.' },
              { step: '3', title: 'Migration & Setup', desc: 'We handle migration from existing providers with minimal downtime and full testing.' },
              { step: '4', title: 'Ongoing Management', desc: 'Continuous monitoring, optimization, and support with defined SLAs.' },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4" aria-hidden="true">{p.step}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white" aria-label="Key Advantages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Key Advantages" title="What you get with managed cloud hosting from Raidlayer" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {advantages.map((a) => (
              <div key={a} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-slate-700">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm"><Link href="/services/email-infrastructure">Email Infrastructure</Link></Button>
            <Button asChild variant="outline" size="sm"><Link href="/business/raidlayer">Raidlayer Infrastructure</Link></Button>
            <Button asChild variant="outline" size="sm"><Link href="/infrastructure">Security & Reliability</Link></Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600" aria-label="Contact CTA">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to move to reliable cloud hosting?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Contact us to discuss your hosting requirements and get a tailored infrastructure recommendation.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
