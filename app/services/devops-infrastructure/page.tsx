import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import {
  GitBranch, Server, Shield, ArrowRight, CheckCircle,
  Settings, Activity, Database, Network, Clock, AlertTriangle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'DevOps & Managed Infrastructure Support — On-Demand Engineering',
  description:
    'On-demand DevOps and managed infrastructure support for IT companies, SaaS providers, and software agencies. CI/CD pipelines, server administration, backups, monitoring, and more at $10/hour.',
  path: '/services/devops-infrastructure',
})

const devopsServices = [
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline Management',
    items: [
      'Build and release pipeline creation',
      'Continuous integration setup',
      'Continuous deployment automation',
      'Deployment troubleshooting',
      'Release management',
      'Rollback planning and execution',
    ],
  },
  {
    icon: Settings,
    title: 'Infrastructure Automation',
    items: [
      'Infrastructure provisioning',
      'Infrastructure as Code implementation',
      'Environment automation',
      'Configuration automation',
      'Infrastructure documentation',
    ],
  },
  {
    icon: Server,
    title: 'Environment Management',
    items: [
      'Development environments',
      'Testing environments',
      'Staging environments',
      'Production environments',
      'Environment synchronization',
    ],
  },
  {
    icon: Database,
    title: 'Container & Orchestration',
    items: [
      'Container deployment',
      'Container optimization',
      'Cluster administration',
      'Scaling strategies',
      'Rolling updates',
      'High availability configuration',
    ],
  },
  {
    icon: Activity,
    title: 'Performance & Reliability',
    items: [
      'Infrastructure performance tuning',
      'Capacity planning',
      'High availability planning',
      'Load balancing',
      'Auto-scaling configuration',
      'Incident response support',
    ],
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    items: [
      'Infrastructure hardening',
      'Access management',
      'Security patch management',
      'Secret management',
      'SSL/TLS management',
      'Security best practices',
    ],
  },
]

const infraServices = [
  {
    icon: Server,
    title: 'Operating System Administration',
    items: [
      'Installation and configuration',
      'Updates and patch management',
      'Performance optimization',
      'User management',
      'Storage management',
      'System troubleshooting',
    ],
  },
  {
    icon: Settings,
    title: 'Server Administration',
    items: [
      'Server provisioning',
      'Server migration',
      'Resource optimization',
      'Health checks',
      'Preventive maintenance',
      'Service management',
    ],
  },
  {
    icon: Database,
    title: 'Backup & Disaster Recovery',
    items: [
      'Backup configuration',
      'Backup monitoring',
      'Recovery testing',
      'Restore assistance',
      'Disaster recovery planning',
    ],
  },
  {
    icon: Activity,
    title: 'Monitoring & Operations',
    items: [
      'Infrastructure monitoring',
      'Resource utilization monitoring',
      'Log analysis',
      'Alert investigation',
      'Performance reporting',
      'Root cause analysis',
    ],
  },
  {
    icon: Network,
    title: 'Network Administration',
    items: [
      'Firewall management',
      'DNS configuration',
      'Reverse proxy configuration',
      'SSL certificate management',
      'Connectivity troubleshooting',
    ],
  },
  {
    icon: GitBranch,
    title: 'Automation',
    items: [
      'Operational automation',
      'Scheduled maintenance tasks',
      'Infrastructure scripting',
      'Routine administration automation',
    ],
  },
]

const exclusions = [
  'Software development',
  'Application feature implementation',
  'Software bug fixing',
  'UI/UX development',
  'Application-level code changes',
  'End-user technical support',
]

const idealClients = [
  'Software development companies',
  'SaaS businesses',
  'Managed service providers',
  'Digital agencies',
  'Technology startups',
  'Enterprises with dedicated infrastructure',
]

export default function DevOpsInfrastructurePage() {
  return (
    <>
      <Script
        id="schema-devops"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              'DevOps & Managed Infrastructure Support',
              'On-demand DevOps and managed infrastructure support for IT companies, SaaS providers, and software agencies at $10/hour.',
              '/services/devops-infrastructure'
            )
          ),
        }}
      />
      <Script
        id="schema-breadcrumb-devops"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: 'DevOps & Managed Infrastructure', url: '/services/devops-infrastructure' },
            ])
          ),
        }}
      />

      <PageHero
        badge="DevOps & Infrastructure Support"
        title="On-Demand DevOps and Managed Infrastructure for Engineering Teams"
        subtitle="Our team acts as an extension of your engineering organization — managing infrastructure, deployment processes, automation, and server operations while your developers focus on building applications."
      >
        <Button asChild size="lg">
          <Link href="/contact">
            Discuss Your Infrastructure Needs <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </PageHero>

      {/* DevOps Services */}
      <section className="py-20 bg-white" aria-label="DevOps Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="DevOps Services"
            title="CI/CD, automation, and deployment operations"
            subtitle="End-to-end DevOps support covering pipelines, environments, containers, performance, and security."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsServices.map((s) => (
              <Card key={s.title} className="p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <s.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="font-bold text-slate-900 text-base mb-4">{s.title}</h2>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Infrastructure Services */}
      <section className="py-20 bg-slate-50" aria-label="Managed Infrastructure Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Managed Infrastructure"
            title="Server, OS, network, and operations management"
            subtitle="Full-coverage infrastructure management so your systems stay secure, stable, and optimized."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infraServices.map((s) => (
              <Card key={s.title} className="p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <s.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="font-bold text-slate-900 text-base mb-4">{s.title}</h2>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white" aria-label="Pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Commercial Terms"
            title="Simple, transparent hourly pricing"
          />
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">$10</p>
              <p className="text-sm text-slate-500">per hour</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">1 hr</p>
              <p className="text-sm text-slate-500">minimum per request</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Server className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">5 hrs</p>
              <p className="text-sm text-slate-500">minimum monthly per server</p>
            </Card>
          </div>

          <div className="mt-8 max-w-2xl mx-auto bg-slate-50 rounded-xl p-6 border border-slate-200">
            <p className="text-sm font-semibold text-slate-700 mb-3">Billing increments</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { range: 'Up to 1 hour', billed: '1 hour billed' },
                { range: '1–2 hours', billed: '2 hours billed' },
                { range: '2–3 hours', billed: '3 hours billed' },
              ].map((b) => (
                <div key={b.range} className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                  <span><span className="font-medium">{b.range}</span> = {b.billed}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Exclusions + Ideal Clients */}
      <section className="py-20 bg-slate-50" aria-label="Scope and Ideal Clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full mb-4">
                <AlertTriangle className="w-3.5 h-3.5" />
                Service Exclusions
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">What is not included</h2>
              <p className="text-sm text-slate-500 mb-5">
                This service covers infrastructure and DevOps operations only. The following are outside scope:
              </p>
              <ul className="space-y-2.5">
                {exclusions.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-0.5 bg-red-500 rounded" />
                    </div>
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-4">
                <CheckCircle className="w-3.5 h-3.5" />
                Ideal Clients
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Who this service is for</h2>
              <p className="text-sm text-slate-500 mb-5">
                Our flexible engagement model lets you access experienced engineers only when required.
              </p>
              <ul className="space-y-2.5">
                {idealClients.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="/services/cloud-hosting">Cloud &amp; Hosting Solutions</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/services/hana-cloud">HANA Cloud</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/services/cto-leadership">CTO &amp; Technical Leadership</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/infrastructure">Raidlayer Infrastructure</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600" aria-label="Contact CTA">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need experienced DevOps engineers without the overhead?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Access infrastructure and DevOps expertise on demand at $10/hour — no retainers, no hiring, no overhead.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
