import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Server, Shield, Cloud, ArrowRight, CheckCircle, Database, RefreshCw, Zap, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'HANA Cloud — Managed Cloud Infrastructure for HANA RAD Platform',
  description:
    'HANA Cloud by Raidlayer: fully managed cloud hosting for the HANA Rapid Application Development Platform. Shared and dedicated VPS plans with 24/7 monitoring, daily backups, and firewall management.',
  path: '/services/hana-cloud',
})

const hostingOptions = [
  {
    icon: Cloud,
    title: 'Shared Cloud Hosting',
    desc: 'Affordable and efficient hosting designed for smaller teams getting started with the HANA RAD Platform. Shared infrastructure managed entirely by Raidlayer.',
    features: [
      'Up to 10 Users Supported',
      'Shared Resources',
      'Daily Backup (7-Day Retention)',
      'Shared IP Address',
      'Shared Firewall Configuration',
      'Software Updates Included',
      '24/7 Standard Support',
    ],
  },
  {
    icon: Server,
    title: 'Dedicated Cloud VPS',
    desc: 'Exclusive hosting with dedicated resources for enterprises requiring maximum performance, security, and reliability for their HANA deployments.',
    features: [
      'Unlimited Users',
      'Dedicated CPU, RAM & Storage',
      'Daily Backup (7-Day Retention)',
      'Dedicated IP Address',
      'Fully Managed Firewall',
      'Software Updates Included',
      '24/7 Priority Support',
    ],
  },
]

const keyFeatures = [
  {
    icon: Server,
    title: 'Managed Infrastructure',
    desc: 'Full installation, configuration, and maintenance of HANA. 24/7 monitoring of server performance with firewall configuration and management for robust security.',
  },
  {
    icon: Database,
    title: 'Daily Backups with Retention',
    desc: 'Automated daily backups of HANA applications and databases with 7-day backup retention, ensuring data safety and recovery capabilities at all times.',
  },
  {
    icon: Zap,
    title: 'Scalability & Reliability',
    desc: 'Infrastructure provided by Raidlayer, known for high performance and uptime. Easily scalable to accommodate growing workloads and user demands.',
  },
  {
    icon: RefreshCw,
    title: 'Software Updates & Maintenance',
    desc: 'Regular updates of the HANA platform to ensure it remains secure and up to date. Patch management and bug fixes handled entirely by our technical team.',
  },
]

const benefits = [
  'No in-house IT team required — we manage everything',
  'Daily backups ensure zero data loss',
  'Firewall management protects against cyber threats',
  'Start small and scale up as your needs grow',
  'Developers can focus on building, not infrastructure',
  'Competitive pricing for enterprise-grade performance',
  'Backed by 100+ experienced developers and engineers',
  'High availability with Raidlayer infrastructure',
]

const pricingPlans = [
  {
    name: 'Shared',
    subtitle: 'Suitable for 10 Concurrent Users',
    price: '₱1,000',
    period: '/Month',
    specs: null,
    features: [
      'Easy upgrades and restores',
      'Monitoring',
      'Custom domain',
      'Offsite backups',
      'Standard Support',
    ],
    highlight: false,
    badge: null,
    paypalLink: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8S647504YP6167818NJTUVYI',
  },
  {
    name: 'Cloud Server Basic',
    subtitle: 'Suitable for 20 Concurrent Users',
    price: '₱2,000',
    period: '/Month',
    specs: { cpu: '2 vCPU', ram: '4 GB RAM', storage: '40 GB SSD', bandwidth: '20 TB Bandwidth' },
    features: [
      'Dedicated IPv4',
      'Daily Backup',
      'Dedicated resources',
      'Quick provisioning',
      'Ease of scaling',
      'Standard Support',
    ],
    highlight: false,
    badge: 'Dedicated VPS',
    paypalLink: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-62V1318965421440VNJTUYOY',
  },
  {
    name: 'Cloud Server Premium',
    subtitle: 'Suitable for 50 Concurrent Users',
    price: '₱3,000',
    period: '/Month',
    specs: { cpu: '4 vCPU', ram: '8 GB RAM', storage: '80 GB SSD', bandwidth: '20 TB Bandwidth' },
    features: [
      'Dedicated IPv4',
      'Daily Backup',
      'Dedicated resources',
      'Quick provisioning',
      'Ease of scaling',
      'Standard Support',
    ],
    highlight: true,
    badge: 'Most Popular',
    paypalLink: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-49568076HM743572DNJTUZGI',
  },
  {
    name: 'Cloud Server Advance',
    subtitle: 'Suitable for 100 Concurrent Users',
    price: '₱5,000',
    period: '/Month',
    specs: { cpu: '8 vCPU', ram: '16 GB RAM', storage: '160 GB SSD', bandwidth: '20 TB Bandwidth' },
    features: [
      'Dedicated IPv4',
      'Daily Backup',
      'Dedicated resources',
      'Quick provisioning',
      'Ease of scaling',
      'Standard Support',
    ],
    highlight: false,
    badge: 'Dedicated VPS',
    paypalLink: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-1MJ49124K6451561FNJTUZVA',
  },
]

export default function HanaCloudPage() {
  return (
    <>
      <Script
        id="schema-hana-cloud"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              'HANA Cloud — Managed Cloud Infrastructure',
              'Fully managed cloud hosting for the HANA Rapid Application Development Platform with 24/7 monitoring, daily backups, and firewall management.',
              '/services/hana-cloud'
            )
          ),
        }}
      />
      <Script
        id="schema-breadcrumb-hana"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: 'HANA Cloud', url: '/services/hana-cloud' },
            ])
          ),
        }}
      />

      <PageHero
        badge="HANA Cloud"
        title="Fully Managed Cloud Infrastructure for the HANA RAD Platform"
        subtitle="HANA Cloud combines scalability, security, and cost-effectiveness to host and operate the HANA Rapid Application Development Platform — powered by Raidlayer infrastructure."
      >
        {/* <Button asChild size="lg">
          <Link href="/contact">
            Get Started with HANA Cloud <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button> */}
      </PageHero>

      <section className="py-20 bg-white" aria-label="Pricing Plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Pricing"
            title="Transparent pricing for every stage of growth"
            subtitle="From shared hosting to high-performance dedicated VPS — choose what your team needs today."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-6 flex flex-col transition-shadow hover:shadow-md ${
                  plan.highlight ? 'ring-2 ring-blue-600 shadow-md' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {plan.badge && (
                      <span
                        className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${
                          plan.highlight
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="font-bold text-slate-900 text-base leading-tight">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{plan.subtitle}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-sm text-slate-500">{plan.period}</span>
                </div>

                {plan.specs && (
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg space-y-1.5">
                    {Object.values(plan.specs).map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>
                )}

                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="sm"
                  variant={plan.highlight ? 'default' : 'outline'}
                  className="w-full"
                >
                  {plan.paypalLink ? (
                    <a href={plan.paypalLink} target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  ) : (
                    <Link href="/contact">Get Started</Link>
                  )}
                </Button>
              </Card>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">
            * Dedicated Cloud VPS Server Plans. Prices in Philippine Peso (PHP). Contact us for custom configurations.
          </p>
          

        </div>
      </section>


      {/* Hosting Options */}
      <section className="py-20 bg-white" aria-label="Hosting Options">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Hosting Options"
            title="Two hosting options built for every team size"
            subtitle="Choose the plan that fits your team — start with shared hosting and scale to dedicated VPS as your needs grow."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {hostingOptions.map((h) => (
              <Card key={h.title} className="p-8 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <h.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="font-bold text-slate-900 text-xl mb-3">{h.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{h.desc}</p>
                <ul className="space-y-2.5">
                  {h.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-50" aria-label="Key Features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Key Features" title="Everything managed so your team can focus on development" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {keyFeatures.map((f) => (
              <Card key={f.title} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0" aria-hidden="true">
                    <f.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/* <section className="py-20 bg-white" aria-label="Pricing Plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Pricing"
            title="Transparent pricing for every stage of growth"
            subtitle="From shared hosting to high-performance dedicated VPS — choose what your team needs today."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-6 flex flex-col transition-shadow hover:shadow-md ${
                  plan.highlight ? 'ring-2 ring-blue-600 shadow-md' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {plan.badge && (
                      <span
                        className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${
                          plan.highlight
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="font-bold text-slate-900 text-base leading-tight">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{plan.subtitle}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-sm text-slate-500">{plan.period}</span>
                </div>

                {plan.specs && (
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg space-y-1.5">
                    {Object.values(plan.specs).map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>
                )}

                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="sm"
                  variant={plan.highlight ? 'default' : 'outline'}
                  className="w-full"
                >
                  {plan.paypalLink ? (
                    <a href={plan.paypalLink} target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  ) : (
                    <Link href="/contact">Get Started</Link>
                  )}
                </Button>
              </Card>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">
            * Dedicated Cloud VPS Server Plans. Prices in Philippine Peso (PHP). Contact us for custom configurations.
          </p>

        </div>
      </section> */}

      {/* Benefits */}
      <section className="py-20 bg-slate-50" aria-label="Benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Benefits" title="Why teams choose HANA Cloud" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-slate-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-white" aria-label="Next Steps">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Next Steps" title="Get your HANA Cloud environment up in 24–48 hours" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'Schedule a Call',
                desc: 'Schedule a call with our team to finalize your hosting requirements and select the right plan.',
              },
              {
                step: '2',
                title: 'Choose Your Plan',
                desc: 'Select the appropriate hosting plan — shared or dedicated VPS — based on your team size and performance needs.',
              },
              {
                step: '3',
                title: 'We Deploy & Configure',
                desc: 'We deploy and fully configure your HANA Cloud environment within 24–48 hours. Your team can start building immediately.',
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4" aria-hidden="true">
                  {s.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Additional Services Available</h2>
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <Shield className="w-4 h-4 text-blue-500" />
              Disaster Recovery — Additional backup redundancy
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <Users className="w-4 h-4 text-blue-500" />
              24/7 Priority Support via phone, chat, or email
            </div>
          </div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="/services/cloud-hosting">Cloud &amp; Hosting Solutions</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/services/rapid-development">Rapid Application Development</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/business/hanarad">Hanarad — RAD Platform</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/infrastructure">Raidlayer Infrastructure</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600" aria-label="Contact CTA">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to deploy HANA on managed cloud infrastructure?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Backed by 100+ experienced engineers, HANA Cloud gives your team a hassle-free, fully managed environment — deployed in 24–48 hours.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
