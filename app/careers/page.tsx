import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Heart, Users, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { buildMetadata, breadcrumbSchema, SITE_URL, SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Careers at Raidlayer — Join Our Enterprise Technology Team in India',
  description:
    'Join Raidlayer Webhost Private Limited — build enterprise cloud hosting, offshore development teams, and technology platforms. Open roles in DevOps, software development, and operations.',
  path: '/careers',
})

const careersSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Careers at Raidlayer Webhost',
  url: `${SITE_URL}/careers`,
  description: 'Open positions at Raidlayer Webhost Private Limited — infrastructure, software development, and operations roles.',
  provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
}

const values = [
  { icon: Heart, title: 'Work That Matters', desc: "We build infrastructure and products that real businesses depend on. Your work has direct, measurable impact on our clients' operations." },
  { icon: Users, title: 'Collaborative Culture', desc: "We work in small, focused teams where every person's contribution is visible and valued. No bureaucracy, no silos." },
  { icon: Zap, title: 'Technical Excellence', desc: "We hold ourselves to high engineering standards. You'll work with people who care deeply about quality, architecture, and craft." },
  { icon: TrendingUp, title: 'Growth Opportunities', desc: 'As a growing company operating across three verticals, there are genuine opportunities to take on more responsibility and grow your career.' },
]

const openAreas = [
  { area: 'Infrastructure & DevOps', roles: ['Linux System Administrator', 'DevOps Engineer', 'Cloud Infrastructure Engineer'] },
  { area: 'Software Development', roles: ['Full-Stack Developer (MERN)', 'Backend Engineer (Node.js / NestJS)', 'Mobile Developer (Flutter / React Native)'] },
  { area: 'Technical Leadership', roles: ['Senior Software Engineer', 'Tech Lead', 'Engineering Manager'] },
  { area: 'Operations', roles: ['Technical Support Engineer', 'Project Coordinator', 'HR & Talent Acquisition'] },
]

export default function CareersPage() {
  return (
    <>
      <Script id="schema-careers" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }} />
      <Script id="schema-breadcrumb-careers" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Careers', url: '/careers' }])) }} />

      <PageHero
        badge="Careers"
        title="Build Enterprise Technology at Raidlayer Webhost — Join Our Team"
        subtitle="We're a growing technology company with opportunities across cloud hosting infrastructure, software development, and operations. If you care about quality and want to work on real problems, we'd like to hear from you."
      />

      <section className="py-20 bg-white" aria-label="Why Work Here">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Why Raidlayer" title="What it's like to work at Raidlayer Webhost" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <v.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="font-semibold text-slate-900 mb-2">{v.title}</h2>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" aria-label="Open Positions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Open Areas" title="Where we're looking for talent at Raidlayer" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {openAreas.map((area) => (
              <Card key={area.area} className="p-6">
                <h3 className="font-bold text-slate-900 mb-4">{area.area}</h3>
                <ul className="space-y-2">
                  {area.roles.map((role) => (
                    <li key={role} className="flex items-center justify-between text-sm">
                      <span className="text-slate-700">{role}</span>
                      <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">Open</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-label="Hiring Philosophy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Hiring Philosophy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We hire for capability, attitude, and alignment with our values — not just credentials. We look for people who take ownership of their work, communicate clearly, and are genuinely interested in building things that work well.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our hiring process is straightforward: an initial conversation, a practical technical assessment relevant to the role, and a final discussion with the team. We respect your time and aim to move quickly.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Send Us Your Profile <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
