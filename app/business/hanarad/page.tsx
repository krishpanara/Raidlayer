import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, Layers, GitBranch, Rocket, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Hanarad — Rapid Application Development Platform',
  description: 'Internal RAD platform for accelerated application development, scalable architecture, and automation-driven workflows.',
}

const capabilities = [
  { icon: Zap, title: 'Accelerated Development', desc: 'Pre-built architecture patterns, reusable modules, and standardized workflows that compress development timelines without sacrificing quality.' },
  { icon: Layers, title: 'Scalable Architecture Frameworks', desc: 'Opinionated but flexible architecture blueprints designed to scale from MVP to enterprise-grade systems without architectural rewrites.' },
  { icon: GitBranch, title: 'Automation-Driven Workflows', desc: 'CI/CD pipelines, automated testing frameworks, and deployment automation that reduce manual overhead and human error.' },
  { icon: Rocket, title: 'Enterprise-Ready Deployment', desc: 'Deployment systems designed for production reliability — with rollback capabilities, environment management, and monitoring integration.' },
]

const useCases = [
  { title: 'SaaS Product Development', desc: 'Rapidly build and iterate on SaaS products with pre-configured multi-tenancy, authentication, and billing infrastructure.' },
  { title: 'Internal Enterprise Tools', desc: 'Accelerate the development of internal dashboards, workflow automation tools, and operational systems.' },
  { title: 'API & Integration Platforms', desc: 'Build robust API layers and integration platforms with standardized patterns for authentication, rate limiting, and documentation.' },
  { title: 'Data-Driven Applications', desc: 'Develop analytics dashboards, reporting systems, and data pipeline interfaces with pre-built visualization and processing components.' },
]

export default function HanaradPage() {
  return (
    <>
      <PageHero
        badge="Hanarad — RAD Platform"
        title="Faster Product Delivery Through Systematic Development"
        subtitle="Hanarad is our internal rapid application development platform — a collection of frameworks, tools, and workflows that accelerate how we build and deploy enterprise applications."
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services/rapid-development">View RAD Services</Link>
          </Button>
        </div>
      </PageHero>

      {/* Platform Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Hanarad?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Hanarad is not a no-code tool or a visual builder. It is a systematic approach to application development — combining opinionated architecture frameworks, reusable component libraries, and automated deployment pipelines to dramatically reduce time-to-production.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Built and refined through real enterprise projects, Hanarad encapsulates the patterns, decisions, and infrastructure that would otherwise take months to establish from scratch.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                The result is faster delivery, more consistent quality, and lower technical debt — without sacrificing the flexibility that complex products require.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Faster Time-to-Market', 'Consistent Code Quality', 'Reduced Technical Debt', 'Enterprise-Ready Output'].map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Application development dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Platform Capabilities"
            title="Built for speed without compromising structure"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((c) => (
              <Card key={c.title} className="p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-violet-600" />
                </div>
                <h4 className="font-semibold text-slate-900 text-lg mb-2">{c.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Development Approach"
            title="How we build with Hanarad"
          />
          <div className="max-w-3xl mx-auto">
            {[
              { step: '01', title: 'Requirements & Architecture', desc: 'We begin with a structured discovery process to define requirements, select appropriate architecture patterns, and establish the technical foundation.' },
              { step: '02', title: 'Framework Configuration', desc: 'We configure the Hanarad framework to match your specific domain — setting up authentication, data models, API structure, and deployment targets.' },
              { step: '03', title: 'Iterative Development', desc: 'Development proceeds in structured sprints with continuous integration, automated testing, and regular stakeholder reviews.' },
              { step: '04', title: 'Deployment & Handover', desc: 'Production deployment with full documentation, monitoring setup, and knowledge transfer to your team.' },
            ].map((phase, i) => (
              <div key={phase.step} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {phase.step}
                  </div>
                  {i < 3 && <div className="w-px flex-1 bg-blue-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <h4 className="font-semibold text-slate-900 mb-2">{phase.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Use Cases" title="Where Hanarad delivers the most value" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((u) => (
              <div key={u.title} className="border border-slate-200 bg-white rounded-xl p-6 hover:border-blue-200 hover:shadow-sm transition-all">
                <CheckCircle className="w-5 h-5 text-blue-600 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">{u.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need to build faster without cutting corners?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Tell us about your application requirements and we'll show you how Hanarad can accelerate your delivery timeline.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
