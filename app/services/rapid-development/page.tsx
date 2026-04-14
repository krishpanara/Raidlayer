import type { Metadata } from 'next'
import Link from 'next/link'
import { Zap, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Rapid Application Development',
  description: 'Accelerated application development using the Hanarad platform — faster delivery, scalable architecture, and enterprise-ready output.',
}

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
      <PageHero
        badge="Rapid Application Development"
        title="From Concept to Production in Less Time"
        subtitle="Using the Hanarad platform, we deliver enterprise-quality applications faster — without the architectural shortcuts that create long-term technical debt."
      >
        <Button asChild size="lg">
          <Link href="/contact">Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What We Build" title="Application types we accelerate" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((u) => (
              <Card key={u.title} className="p-6 hover:shadow-md transition-shadow">
                <Zap className="w-5 h-5 text-blue-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{u.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{u.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Key Advantages" title="Why RAD with Hanarad is different" />
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
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have an application to build?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Share your requirements and we'll outline how we can accelerate your delivery timeline using the Hanarad platform.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Start the Conversation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
