import type { Metadata } from 'next'
import Link from 'next/link'
import { Server, Mail, Users, Briefcase, Zap, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore all services offered by Raidlayer Webhost Private Limited — hosting, email, offshore teams, CTO leadership, and rapid development.',
}

const services = [
  {
    icon: Server,
    title: 'Cloud & Hosting Solutions',
    desc: 'Shared, VPS, dedicated, and cloud hosting environments with managed support, 99.9% uptime SLA, and full infrastructure management.',
    href: '/services/cloud-hosting',
  },
  {
    icon: Mail,
    title: 'Email & Communication Infrastructure',
    desc: 'Professional business email with custom domains, spam protection, archiving, and enterprise deliverability management.',
    href: '/services/email-infrastructure',
  },
  {
    icon: Users,
    title: 'Offshore Development Teams',
    desc: 'Dedicated remote engineers from India with full operational management — recruitment, payroll, workspace, and retention handled end-to-end.',
    href: '/services/offshore-teams',
  },
  {
    icon: Briefcase,
    title: 'CTO & Technical Leadership',
    desc: 'Fractional CTO services with fixed, profit-sharing, and equity engagement models for startups and scaling companies.',
    href: '/services/cto-leadership',
  },
  {
    icon: Zap,
    title: 'Rapid Application Development',
    desc: 'Accelerated application development using the Hanarad platform — faster delivery, scalable architecture, enterprise-ready output.',
    href: '/services/rapid-development',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Enterprise Technology Services"
        subtitle="A comprehensive suite of services spanning infrastructure, talent, and application development — designed to support businesses at every stage of growth."
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group">
                <Card className="p-6 h-full hover:shadow-md hover:border-blue-200 transition-all">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <s.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
