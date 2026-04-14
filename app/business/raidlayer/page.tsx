import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Server, Shield, Globe, HardDrive, Mail, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Raidlayer — Infrastructure & Hosting',
  description: 'Enterprise-grade web hosting, cloud infrastructure, domain management, and server operations.',
}

const services = [
  { icon: Globe, title: 'Domain Registration & Management', desc: 'Full-lifecycle domain management including registration, DNS configuration, renewal management, and domain portfolio oversight for enterprises.' },
  { icon: Server, title: 'Web Hosting Solutions', desc: 'Shared, VPS, and dedicated server hosting environments configured for performance, security, and reliability — with managed support.' },
  { icon: HardDrive, title: 'Cloud Infrastructure', desc: 'Scalable cloud deployment environments with automated provisioning, load balancing, and infrastructure-as-code capabilities.' },
  { icon: Mail, title: 'Business Email Solutions', desc: 'Professional email infrastructure with custom domains, spam protection, archiving, and enterprise-grade deliverability.' },
  { icon: Shield, title: 'Data Security & Backup', desc: 'Automated backup systems, encrypted storage, disaster recovery protocols, and compliance-aligned data protection practices.' },
  { icon: BarChart3, title: 'Server Management & Optimization', desc: 'Proactive server monitoring, performance tuning, patch management, and 24/7 operational oversight.' },
]

export default function RaidlayerPage() {
  return (
    <>
      <PageHero
        badge="Raidlayer — Infrastructure Division"
        title="Enterprise Infrastructure Built for Reliability"
        subtitle="From domain registration to managed cloud environments, Raidlayer delivers the hosting and infrastructure foundation that enterprise operations demand."
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Discuss Infrastructure Needs <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services/cloud-hosting">View Hosting Services</Link>
          </Button>
        </div>
      </PageHero>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Services"
            title="Complete Infrastructure Services"
            subtitle="Every service is designed to reduce operational burden while increasing reliability and performance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Card key={s.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                    <s.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Infrastructure Capabilities</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our infrastructure stack is built on enterprise-grade hardware and software, with redundancy at every layer. We operate managed environments that abstract operational complexity while giving clients full visibility into their systems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Linux & Windows Server Environments',
                  'cPanel / WHM Management',
                  'Nginx & Apache Configuration',
                  'MySQL, PostgreSQL, MongoDB',
                  'SSL Certificate Management',
                  'CDN Integration',
                  'DDoS Mitigation',
                  'Automated Failover',
                ].map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="Server infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Security & Reliability"
            title="Security is not a feature — it's the foundation"
            subtitle="Every environment we manage is configured with security-first principles, proactive monitoring, and documented incident response procedures."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Proactive Monitoring', points: ['24/7 uptime monitoring', 'Real-time alerting', 'Performance dashboards', 'Anomaly detection'] },
              { title: 'Data Protection', points: ['Automated daily backups', 'Encrypted storage at rest', 'Offsite backup replication', 'Point-in-time recovery'] },
              { title: 'Network Security', points: ['Firewall rule management', 'DDoS protection layers', 'Intrusion detection', 'SSL/TLS enforcement'] },
            ].map((block) => (
              <Card key={block.title} className="p-6">
                <h4 className="font-semibold text-slate-900 mb-4">{block.title}</h4>
                <ul className="space-y-2">
                  {block.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to upgrade your infrastructure?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Talk to our infrastructure team about your hosting, cloud, or server management requirements.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Request Infrastructure Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
