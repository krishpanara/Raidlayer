import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Server, Eye, Lock, RefreshCw, Wifi, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Infrastructure & Security',
  description: 'Enterprise hosting reliability, data protection practices, monitoring systems, and secure work environments at Raidlayer.',
}

const pillars = [
  {
    icon: Server,
    title: 'Hosting Reliability',
    desc: 'Our infrastructure is built on enterprise-grade hardware with redundant power, network, and cooling systems. We maintain 99.9% uptime SLAs backed by proactive monitoring and automated failover.',
    points: ['Redundant network connectivity', 'Automated failover systems', 'Load-balanced environments', '99.9% uptime SLA'],
  },
  {
    icon: Lock,
    title: 'Data Protection',
    desc: 'Data security is embedded at every layer — from encrypted storage and secure transmission to access controls and audit logging. We follow industry best practices for data handling and retention.',
    points: ['Encryption at rest and in transit', 'Role-based access controls', 'Audit logging and trails', 'Data retention policies'],
  },
  {
    icon: Eye,
    title: 'Monitoring Systems',
    desc: 'Continuous monitoring across all managed environments with real-time alerting, performance dashboards, and documented incident response procedures.',
    points: ['24/7 uptime monitoring', 'Real-time performance metrics', 'Anomaly detection', 'Incident response procedures'],
  },
  {
    icon: Shield,
    title: 'Network Security',
    desc: 'Multi-layer network security including firewall management, DDoS mitigation, intrusion detection, and regular security assessments.',
    points: ['Firewall rule management', 'DDoS protection', 'Intrusion detection systems', 'Regular security audits'],
  },
  {
    icon: RefreshCw,
    title: 'Backup & Recovery',
    desc: 'Automated backup systems with offsite replication, point-in-time recovery capabilities, and tested disaster recovery procedures.',
    points: ['Automated daily backups', 'Offsite backup replication', 'Point-in-time recovery', 'Tested DR procedures'],
  },
  {
    icon: Wifi,
    title: 'Secure Work Environments',
    desc: 'For Work24 development teams, we operate secure smart workspaces with controlled access, activity monitoring, and endpoint security management.',
    points: ['Controlled physical access', 'Endpoint security management', 'VPN and secure network access', 'Activity monitoring'],
  },
]

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        badge="Infrastructure & Security"
        title="Security and Reliability at Every Layer"
        subtitle="Our infrastructure and security practices are designed to meet enterprise requirements — with documented procedures, proactive monitoring, and accountability at every level."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Security Pillars" title="How we approach infrastructure security" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <Card key={p.title} className="p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Security Philosophy</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Security is not a checklist we complete at deployment — it is an ongoing operational discipline. We conduct regular reviews of our security posture, stay current with emerging threats, and continuously improve our practices based on industry standards and real-world experience.
            </p>
            <p className="text-slate-600 leading-relaxed">
              For enterprise clients with specific compliance requirements — whether related to data residency, access controls, or audit documentation — we work to align our practices with your organizational requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have specific security requirements?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Contact us to discuss your compliance and security requirements and how our infrastructure practices align with your standards.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Discuss Security Requirements <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  )
}
