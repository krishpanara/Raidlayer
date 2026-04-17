import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Offshore Development Teams India — Dedicated Engineers, Fully Managed',
  description:
    'Hire dedicated offshore development teams from India with full operational management — recruitment, payroll, compliance, secure workspaces, and replacement guarantee.',
  path: '/services/offshore-teams',
})

const process = [
  { step: '01', title: 'Requirement Definition', desc: 'We work with you to define the technical skills, team size, seniority levels, and engagement structure that fits your product roadmap.' },
  { step: '02', title: 'Talent Sourcing & Vetting', desc: 'Our recruitment team sources candidates from our network and conducts multi-stage technical and cultural assessments.' },
  { step: '03', title: 'Onboarding & Integration', desc: 'Selected engineers are onboarded into your tools, workflows, and communication channels with structured integration support.' },
  { step: '04', title: 'Ongoing Operations', desc: 'We manage payroll, HR, workspace, and retention — you manage technical direction and product priorities.' },
]

export default function OffshoreTeamsPage() {
  return (
    <>
      <Script id="schema-offshore" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Offshore Development Teams India', 'Dedicated offshore development teams from India with full operational management — recruitment, payroll, compliance, and secure workspaces.', '/services/offshore-teams')) }} />
      <Script id="schema-breadcrumb-offshore" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Offshore Development Teams', url: '/services/offshore-teams' }])) }} />

      <PageHero
        badge="Offshore Development Teams"
        title="Build Your Dedicated Offshore Development Team in India — Fully Managed"
        subtitle="Access pre-vetted developers across the full modern stack, with complete operational management handled by Work24 — from recruitment to payroll to workspace."
      >
        <Button asChild size="lg">
          <Link href="/contact">Build Your Offshore Team <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </PageHero>

      <section className="py-20 bg-white" aria-label="Hiring Process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="How It Works" title="From requirement to running offshore development team" />
          <div className="max-w-3xl mx-auto space-y-0">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0" aria-hidden="true">{p.step}</div>
                  {i < process.length - 1 && <div className="w-px flex-1 bg-blue-200 mt-2" aria-hidden="true" />}
                </div>
                <div className="pb-8">
                  <h2 className="font-semibold text-slate-900 mb-2">{p.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" aria-label="What We Manage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What We Manage" title="Complete operational ownership of your offshore team" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'Talent sourcing and technical screening',
              'Employment contracts and compliance',
              'Monthly payroll processing',
              'Performance management frameworks',
              'Retention programs and career development',
              'Secure workspace provisioning',
              'Equipment and device management',
              'Leave and attendance management',
              'Replacement guarantee for attrition',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600" aria-label="Contact CTA">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to scale your engineering capacity with offshore developers?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Tell us about your team requirements and we'll design an engagement that fits your technical and operational needs.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Start the Conversation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
