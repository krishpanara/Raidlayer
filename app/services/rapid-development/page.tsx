import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Zap, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Rapid Application Development Services — Faster Enterprise Delivery',
  description:
    'Accelerated enterprise application development using the Hanarad RAD platform — faster time-to-market, scalable architecture, CI/CD automation, and enterprise-ready output.',
  path: '/services/rapid-development',
})

const useCases = [
  { title: 'SaaS Product MVPs', desc: 'Launch a production-ready SaaS MVP with authentication, billing, multi-tenancy, and core features in a fraction of the typical timeline.' },
  { title: 'Internal Business Tools', desc: 'Build custom internal dashboards, workflow automation, and operational tools tailored to your specific business processes.' },
  { title: 'API Platforms', desc: 'Develop robust, documented API platforms with authentication, rate limiting, versioning, and developer portal capabilities.' },
  { title: 'Data Applications', desc: 'Create analytics dashboards, reporting systems, and data visualization tools connected to your existing data sources.' },
  { title: 'Mobile Applications', desc: 'Cross-platform mobile applications built with Flutter or React Native, sharing business logic with web counterparts.' },
  { title: 'Enterprise Portals', desc: 'Customer portals, partner portals, and employee-facing applications with role-based access and workflow integration.' },
]

export default function RapidDevelopmentPage() {
  return (
    <>
      <Script id="schema-rad" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Rapid Application Development', 'Accelerated enterprise application development using the Hanarad RAD platform — faster delivery, scalable architecture, and enterprise-ready output.', '/services/rapid-development')) }} />
      <Script id="schema-breadcrumb-rad" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Rapid Development', url: '/services/rapid-development' }])) }} />

      <PageHero
        badge="Rapid Application Development"
        title="Enterprise Application Development — From Concept to Production Faster"
        subtitle="Using the Hanarad RAD platform, we deliver enterprise-quality applications faster — without the architectural shortcuts that create long-term technical debt."
      >
        <Button asChild size="lg">
          <Link href="/contact">Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </PageHero>

      <section className="py-20 bg-white" aria-label="Application Types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What We Build" title="Enterprise application types we accelerate with RAD" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((u) => (
              <Card key={u.title} className="p-6 hover:shadow-md transition-shadow">
                <Zap className="w-5 h-5 text-blue-600 mb-3" aria-hidden="true" />
                <h2 className="font-bold text-slate-900 mb-2">{u.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{u.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" aria-label="Key Advantages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Key Advantages" title="Why rapid application development with Hanarad is different" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              'Pre-built architecture patterns reduce setup time',
              'Reusable component libraries for common features',
              'Automated CI/CD pipelines from day one',
              'Built-in testing frameworks and quality gates',
              'Scalable from MVP to enterprise without rewrites',
              'Full documentation and knowledge transfer',
              'Post-launch support and iteration capability',
              'Security best practices embedded in the framework',
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
          <h2 className="text-3xl font-bold text-white mb-4">Have an enterprise application to build faster?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Share your requirements and we'll outline how we can accelerate your delivery timeline using the Hanarad RAD platform.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Start the Conversation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
