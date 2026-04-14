import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Server, Users, Zap, Shield, Globe, CheckCircle, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SectionHeader from '@/components/SectionHeader'

const verticals = [
  {
    name: 'Raidlayer',
    tagline: 'Infrastructure & Hosting',
    description:
      'Enterprise-grade web hosting, cloud infrastructure, domain management, and server operations — built for reliability, security, and scale.',
    icon: Server,
    href: '/business/raidlayer',
    color: 'bg-blue-50 text-blue-600',
    highlights: ['99.9% Uptime SLA', 'Managed Cloud Infrastructure', 'Business Email Solutions', 'Data Security & Backup'],
  },
  {
    name: 'Work24',
    tagline: 'Remote Development Teams',
    description:
      'Dedicated offshore development teams from India — pre-vetted engineers, full operational management, and flexible engagement models.',
    icon: Users,
    href: '/business/work24',
    color: 'bg-indigo-50 text-indigo-600',
    highlights: ['Dedicated Developers', 'Fractional CTO Services', 'Full Payroll Management', 'Secure Smart Workspaces'],
  },
  {
    name: 'Hanarad',
    tagline: 'Rapid Application Development',
    description:
      'An internal RAD platform that accelerates product delivery through scalable architecture frameworks and automation-driven workflows.',
    icon: Zap,
    href: '/business/hanarad',
    color: 'bg-violet-50 text-violet-600',
    highlights: ['Accelerated Delivery', 'Scalable Architecture', 'Automation Workflows', 'Enterprise Deployment'],
  },
]

const differentiators = [
  { icon: Shield, title: 'Security-First Architecture', desc: 'Every layer of our infrastructure is designed with security as a foundational principle, not an afterthought.' },
  { icon: Globe, title: 'India-Based Operations', desc: 'Headquartered in India with deep access to top engineering talent and cost-efficient operational models.' },
  { icon: Server, title: 'Integrated Service Stack', desc: 'Infrastructure, development teams, and application platforms under one roof — reducing vendor complexity.' },
  { icon: Users, title: 'Operational Ownership', desc: 'We manage recruitment, retention, payroll, and workspace — so you focus entirely on your product.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#dbeafe_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6">Enterprise Technology Partner</Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Infrastructure, Teams &{' '}
              <span className="text-gradient">Platforms</span>{' '}
              for Ambitious Businesses
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Raidlayer Webhost Private Limited operates three specialized verticals — delivering enterprise hosting, offshore development teams, and rapid application development under one integrated umbrella.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-slate-500">
              {['Enterprise-Grade Infrastructure', 'India-Based Engineering Talent', 'End-to-End Operational Support'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Verticals */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Business Units"
            title="Three Verticals. One Integrated Partner."
            subtitle="Each business unit is purpose-built to address a distinct enterprise need — from infrastructure to talent to product velocity."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {verticals.map((v) => (
              <Card key={v.name} className="group hover:shadow-md transition-shadow duration-200 flex flex-col">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${v.color}`}>
                    <v.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <CardTitle>{v.name}</CardTitle>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{v.tagline}</p>
                  <CardDescription className="mt-2">{v.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="space-y-2 mb-6">
                    {v.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link href={v.href} className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group-hover:gap-2 gap-1 transition-all">
                    Explore {v.name} <ChevronRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Visual */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Infrastructure at Scale</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Built for enterprises that cannot afford downtime
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Our hosting and cloud infrastructure is engineered for high availability, with redundant systems, proactive monitoring, and automated failover — ensuring your operations remain uninterrupted.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Managed VPS, dedicated, and cloud server environments',
                  'Automated backup and disaster recovery protocols',
                  'Real-time performance monitoring and alerting',
                  'SSL, DDoS protection, and firewall management',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline">
                <Link href="/services/cloud-hosting">View Hosting Solutions <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="Data center infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Remote Teams Visual */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Remote development team"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4">Offshore Development</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Access India's top engineering talent — fully managed
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Work24 provides dedicated remote developers with full operational infrastructure — from recruitment and onboarding to payroll, retention, and secure workspace management.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Pre-vetted engineers across MERN, Flutter, TypeScript, and more',
                  'Fractional CTO services with flexible engagement models',
                  'Secure monitored workspaces with controlled environments',
                  'Full HR, payroll, and compliance management',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline">
                <Link href="/business/work24">Explore Work24 <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Raidlayer"
            title="What sets us apart"
            subtitle="We combine infrastructure depth, talent access, and platform velocity into a single, accountable partnership."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((d) => (
              <div key={d.title} className="text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <d.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{d.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to build with a reliable technology partner?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Whether you need infrastructure, a development team, or faster product delivery — we have the capability to support your growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <Link href="/about">About Our Company</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
