import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Rocket, BarChart3, Building2, ShoppingCart, Cpu, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { buildMetadata, breadcrumbSchema, SITE_URL, SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Industries Served — Startups, SaaS, Enterprise & E-Commerce Solutions',
  description:
    'Raidlayer serves startups, SaaS companies, enterprises, e-commerce businesses, and tech-enabled service providers with cloud hosting, offshore development teams, and RAD services.',
  path: '/industries',
})

const industriesSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Industries Served — Raidlayer Webhost',
  url: `${SITE_URL}/industries`,
  description: 'Raidlayer serves startups, SaaS, enterprises, e-commerce, and tech-enabled service providers.',
  provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
}

const industries = [
  {
    icon: Rocket,
    title: 'Startups',
    desc: 'Early-stage companies need cloud hosting infrastructure that scales with them and development teams that move fast. We provide the hosting foundation, engineering talent, and technical leadership that startups need to grow without over-investing in operations.',
    needs: ['Scalable cloud hosting from day one', 'Fractional CTO guidance', 'Rapid MVP development', 'Cost-efficient team building'],
  },
  {
    icon: BarChart3,
    title: 'SaaS Companies',
    desc: 'SaaS businesses require reliable cloud hosting, fast feature delivery, and engineering teams that understand product-led growth. Our integrated services support every stage of SaaS scaling.',
    needs: ['High-availability cloud hosting', 'Dedicated development teams', 'Performance optimization', 'Multi-tenant architecture'],
  },
  {
    icon: Building2,
    title: 'Enterprises',
    desc: 'Large organizations need infrastructure partners with enterprise-grade SLAs, security practices, and the operational maturity to integrate with existing systems and compliance requirements.',
    needs: ['Enterprise SLA commitments', 'Security and compliance', 'Dedicated server environments', 'Managed infrastructure'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    desc: 'E-commerce operations demand high availability, fast load times, and the ability to handle traffic spikes. Our cloud hosting and infrastructure solutions are configured for the performance demands of online retail.',
    needs: ['High-performance cloud hosting', 'Traffic spike handling', 'CDN and caching setup', 'Payment infrastructure support'],
  },
  {
    icon: Cpu,
    title: 'Tech-Enabled Services',
    desc: 'Companies that use technology to deliver professional services — from fintech to healthtech to edtech — need infrastructure and development partners who understand regulated, high-stakes environments.',
    needs: ['Secure data environments', 'Compliance-aware infrastructure', 'Specialized engineering talent', 'Rapid feature development'],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Script id="schema-industries" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }} />
      <Script id="schema-breadcrumb-industries" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Industries Served', url: '/industries' }])) }} />

      <PageHero
        badge="Industries Served"
        title="Cloud Hosting & Development Solutions Across Key Industry Verticals"
        subtitle="We work with businesses at different stages and in different sectors — adapting our cloud hosting, offshore team, and platform capabilities to the specific demands of each industry."
      />

      <section className="py-20 bg-white" aria-label="Industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {industries.map((ind) => (
              <div key={ind.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center" aria-hidden="true">
                      <ind.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{ind.title}</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{ind.desc}</p>
                </div>
                <Card className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Key Requirements We Address</h3>
                  <ul className="space-y-3">
                    {ind.needs.map((n) => (
                      <li key={n} className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" aria-hidden="true" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600" aria-label="Contact CTA">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Operating in a different sector?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Our capabilities extend across many industries. Contact us to discuss how we can support your specific requirements.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  )
}
