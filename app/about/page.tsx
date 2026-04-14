import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Raidlayer Webhost Private Limited — our mission, vision, and the leadership driving enterprise technology solutions.',
}

const values = [
  { title: 'Reliability', desc: 'We build systems and teams that businesses can depend on — with SLAs, monitoring, and accountability at every level.' },
  { title: 'Transparency', desc: 'Clear communication, honest assessments, and no hidden complexity in our engagements.' },
  { title: 'Engineering Excellence', desc: 'We hold our infrastructure and development standards to enterprise benchmarks, not just functional minimums.' },
  { title: 'Long-Term Partnership', desc: 'We invest in understanding your business deeply, not just delivering a service and moving on.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Raidlayer"
        title="A Technology Company Built for Enterprise Scale"
        subtitle="Raidlayer Webhost Private Limited is an India-based enterprise technology company operating three specialized verticals — infrastructure, offshore development, and rapid application development."
      />

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Raidlayer Webhost Private Limited is a registered Indian technology company that provides enterprise-grade infrastructure, offshore development team solutions, and rapid application development capabilities to businesses across India and internationally.
                </p>
                <p>
                  We operate through three distinct but complementary business units: <strong className="text-slate-800">Raidlayer</strong> for hosting and cloud infrastructure, <strong className="text-slate-800">Work24</strong> for offshore development teams and technical leadership, and <strong className="text-slate-800">Hanarad</strong> for accelerated application development.
                </p>
                <p>
                  Our integrated model allows clients to access infrastructure, talent, and platform capabilities from a single, accountable partner — reducing vendor fragmentation and operational overhead.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Start a Conversation <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modern office environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted integrated technology partner for growing businesses — providing the infrastructure, talent, and platforms they need to scale with confidence, without the complexity of managing multiple vendors.
              </p>
            </Card>
            <Card className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver enterprise-grade technology solutions — from reliable hosting infrastructure to skilled offshore development teams — with the operational discipline, transparency, and long-term commitment that serious businesses require.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Philosophy"
            title="How we think about technology partnerships"
            subtitle="We believe the best technology partnerships are built on operational depth, not just technical capability."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="border border-slate-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-sm transition-all">
                <CheckCircle className="w-6 h-6 text-blue-600 mb-4" />
                <h4 className="font-semibold text-slate-900 mb-2">{v.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Leadership"
            title="The people behind Raidlayer"
            subtitle="Our leadership brings together deep domain expertise in technology, operations, and business strategy."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {[
              {
                name: 'Shwet Dadhaniya',
                role: 'Director & CEO',
                bio: 'Shwet leads the strategic direction and operations of Raidlayer Webhost Private Limited. With a focus on building scalable technology businesses, he oversees all three business verticals and drives the company\'s growth across infrastructure, offshore development, and platform services.',
              },
              {
                name: 'Jitendra Dadhaniya',
                role: 'Chairman',
                bio: 'Jitendra provides strategic oversight and governance for the company. His experience in business development and enterprise operations guides the long-term vision and institutional direction of Raidlayer Webhost Private Limited.',
              },
            ].map((person) => (
              <Card key={person.name} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 text-3xl font-bold">
                    {person.name.charAt(0)}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{person.name}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-3">{person.role}</p>
                  <Separator className="mb-4" />
                  <p className="text-sm text-slate-600 leading-relaxed">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
