import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Fractional CTO Services India — Technical Leadership for Startups',
  description:
    'Fractional CTO services from Raidlayer Work24: fixed, profit-sharing, and equity engagement models. Strategic technical leadership for startups and scaling companies in India.',
  path: '/services/cto-leadership',
})

const models = [
  { title: 'Fixed Engagement', desc: 'A defined monthly commitment with clear deliverables — architecture reviews, team oversight, technology strategy, and stakeholder communication.' },
  { title: 'Profit-Sharing Model', desc: 'Aligned incentives where our CTO engagement is partially compensated based on measurable business outcomes and technical milestones.' },
  { title: 'Equity-Based Engagement', desc: 'For early-stage companies, we offer equity-based CTO partnerships where our technical leadership is invested in your long-term success.' },
]

const responsibilities = [
  'Technology strategy and roadmap development',
  'Architecture design and technical decision-making',
  'Engineering team hiring and management',
  'Code quality standards and review processes',
  'Vendor and technology partner evaluation',
  'Investor and board-level technical communication',
  'Security posture and compliance oversight',
  'DevOps and infrastructure strategy',
]

export default function CTOLeadershipPage() {
  return (
    <>
      <Script id="schema-cto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Fractional CTO Services', 'Fractional CTO services with fixed, profit-sharing, and equity engagement models for startups and scaling companies.', '/services/cto-leadership')) }} />
      <Script id="schema-breadcrumb-cto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'CTO Leadership', url: '/services/cto-leadership' }])) }} />

      <PageHero
        badge="CTO & Technical Leadership"
        title="Fractional CTO Services — Strategic Technical Leadership Without Full-Time Cost"
        subtitle="Our fractional CTO service provides experienced technical leadership for startups and growing companies — with flexible engagement models designed around your stage and goals."
      >
        <Button asChild size="lg">
          <Link href="/contact">Discuss CTO Engagement <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </PageHero>

      <section className="py-20 bg-white" aria-label="Engagement Models">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Engagement Models" title="Flexible fractional CTO structures for every stage" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((m) => (
              <Card key={m.title} className="p-6 hover:shadow-md transition-shadow">
                <h2 className="font-bold text-slate-900 text-lg mb-3">{m.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" aria-label="Scope of Work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Scope of Work" title="What a fractional CTO covers for your company" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {responsibilities.map((r) => (
              <div key={r} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-slate-700">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-label="Who This Is For">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Who This Is For" title="Ideal companies for fractional CTO services" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Early-Stage Startups', desc: 'Founders with a product vision who need technical leadership to build the right architecture and hire the right team from day one.' },
              { title: 'Scaling Companies', desc: 'Companies that have outgrown founder-led technical decisions and need experienced leadership to manage growing engineering teams.' },
              { title: 'Enterprises in Transition', desc: 'Organizations undergoing digital transformation or technology modernization who need interim technical leadership.' },
            ].map((u) => (
              <div key={u.title} className="border border-slate-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-slate-900 mb-2">{u.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600" aria-label="Contact CTA">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need fractional CTO leadership for your company?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Let's discuss your stage, goals, and the right engagement model for your technical leadership needs.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
